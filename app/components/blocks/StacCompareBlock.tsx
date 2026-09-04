"use client";

import { GeoConfigProvider, StacCompareMap, SvgInfoOutline } from "@teamimpact/veda-ui-blocks";

import { AppLinkStyled } from "@/app/components/AppLink";
import { DEFAULT_STAC_CONFIG } from "@/app/site-config/map";
import type { ContentBlock } from "@/app/site-config/types";

type StacCompareBlockProps = {
  block: Extract<ContentBlock, { type: "stacCompare" }>;
};

export function StacCompareBlock({ block }: StacCompareBlockProps) {
  const {
    stacApiUrl,
    titilerBaseUrl,
    baseMapStyle,
    initialViewState,
    leftLayerConfig,
    rightLayerConfig,
    infoHref,
    infoLabel = "Learn more about this data",
  } = {
    ...DEFAULT_STAC_CONFIG,
    ...block,
  };

  return (
    <GeoConfigProvider stacApiUrl={stacApiUrl} titilerBaseUrl={titilerBaseUrl}>
      <div className="display-flex height-card-lg">
        <StacCompareMap
          baseMapStyle={baseMapStyle}
          initialViewState={initialViewState}
          leftLayerConfig={leftLayerConfig}
          rightLayerConfig={rightLayerConfig}
          showScrollGuard
        />
      </div>
      {/*
       * Rendered below the map rather than over it: the library's scroll guard
       * overlay (z-index 3) spans the whole map container, so an overlaid link
       * would be unreachable until the map is activated.
       */}
      {infoHref && (
        <p className="font-body-sm margin-top-1 margin-bottom-0 text-right">
          <AppLinkStyled href={infoHref}>
            <SvgInfoOutline className="usa-icon margin-right-05" />
            {infoLabel}
          </AppLinkStyled>
        </p>
      )}
    </GeoConfigProvider>
  );
}
