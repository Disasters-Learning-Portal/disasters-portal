"use client";

import { useEffect, useRef, useState } from "react";
import MapGL, { Layer, type MapRef, NavigationControl, Source } from "react-map-gl/maplibre";

import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { ContentBlock } from "@/app/site-config/types";

type CogCollectionBlockProps = {
  block: Extract<ContentBlock, { type: "cogCollection" }>;
};

type Scene = {
  id: string;
  href: string;
  // [west, south, east, north]
  bbox: [number, number, number, number];
};

type StacLink = { rel: string; href: string };
type StacAsset = { href: string };
type StacItem = {
  id: string;
  bbox: [number, number, number, number];
  assets: Record<string, StacAsset>;
};

/**
 * Renders every Cloud-Optimized GeoTIFF in a *static* STAC collection (a
 * collection.json hosted on object storage, not ingested into a STAC API) as
 * dynamically-tiled raster layers via titiler's `/cog` endpoints.
 *
 * This is the no-ingest counterpart to `StacSingleLayerBlock`, which can only
 * render collections registered in the STAC API's pgstac database.
 */
export function CogCollectionBlock({ block }: CogCollectionBlockProps) {
  const { titilerBaseUrl, baseMapStyle, initialViewState } = {
    ...DEFAULT_STAC_CONFIG,
    ...block,
  };
  const { collectionUrl, assetKey = "visual", bidx = [1, 2, 3] } = block;

  const mapRef = useRef<MapRef>(null);
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState<string>("");

  // Discover the COGs from the static collection at runtime.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const collection = await (await fetch(collectionUrl)).json();
        const itemLinks: string[] = (collection.links ?? [])
          .filter((l: StacLink) => l.rel === "item")
          .map((l: StacLink) => l.href);

        const items: StacItem[] = await Promise.all(
          itemLinks.map((href) => fetch(href).then((r) => r.json())),
        );

        const found: Scene[] = items
          .filter((it) => it.assets?.[assetKey]?.href)
          .map((it) => ({ id: it.id, href: it.assets[assetKey].href, bbox: it.bbox }));

        if (cancelled) return;
        if (found.length === 0) {
          setError(`No "${assetKey}" assets found in collection`);
          setStatus("error");
          return;
        }
        setScenes(found);
        setStatus("ready");
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Failed to load collection");
        setStatus("error");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [collectionUrl, assetKey]);

  // Fit the map to the union of every scene's bounds once both are ready.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || scenes.length === 0) return;
    const west = Math.min(...scenes.map((s) => s.bbox[0]));
    const south = Math.min(...scenes.map((s) => s.bbox[1]));
    const east = Math.max(...scenes.map((s) => s.bbox[2]));
    const north = Math.max(...scenes.map((s) => s.bbox[3]));
    map.fitBounds(
      [
        [west, south],
        [east, north],
      ],
      { padding: 40, duration: 0 },
    );
  }, [scenes]);

  const bandQuery = bidx.map((b) => `bidx=${b}`).join("&");
  const tileUrl = (href: string) =>
    `${titilerBaseUrl}/cog/tiles/WebMercatorQuad/{z}/{x}/{y}@1x?url=${encodeURIComponent(href)}&${bandQuery}`;

  return (
    <div className="display-flex height-card-lg position-relative">
      <MapGL
        ref={mapRef}
        initialViewState={initialViewState}
        mapStyle={baseMapStyle}
        style={{ width: "100%", height: "100%" }}
        onLoad={() => {
          // re-fit in case scenes resolved before the map finished loading
          setScenes((s) => [...s]);
        }}
      >
        <NavigationControl position="top-left" />
        {scenes.map((scene) => (
          <Source
            key={scene.id}
            id={`cog-${scene.id}`}
            type="raster"
            tiles={[tileUrl(scene.href)]}
            tileSize={256}
            bounds={scene.bbox}
            maxzoom={22}
          >
            <Layer id={`cog-layer-${scene.id}`} type="raster" />
          </Source>
        ))}
      </MapGL>
      {status !== "ready" && (
        <div className="position-absolute top-0 left-0 padding-1 font-body-2xs bg-base-lightest text-base">
          {status === "loading" ? "Loading collection…" : `Error: ${error}`}
        </div>
      )}
    </div>
  );
}
