import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import type { EventContent } from "@/app/site-config/types";

export const EVENT__VENEZUELA_EARTHQUAKE_JUN_2026: EventContent = {
  id: "venezuela-earthquake-jun-2026",
  contentType: "event",
  title: "Venezuela Earthquake June 2026",
  description:
    "Two earthquakes struck Venezuela a minute apart, collapsing buildings around the capital city of Caracas. NASA partners shared high-resolution satellite imagery to support response.",
  thumbnailImage: {
    src: "/img/event/venezuela-earthquake-jun-2026.jpg",
    alt: "High-resolution satellite view of Caracas, Venezuela following the June 2026 earthquakes",
  },
  mastheadImage: {
    src: "/img/event/venezuela-earthquake-jun-2026.jpg",
    alt: "High-resolution satellite view of Caracas, Venezuela following the June 2026 earthquakes",
    caption: "Maxar/Vantor high-resolution optical imagery of the Caracas area.",
    attribution: "Vantor",
  },
  themes: ["respond"],
  categories: ["earthquake"],
  lastUpdatedDate: "2026-06-25",
  startDate: "June 25, 2026",
  region: "Caracas, Venezuela",
  body: [
    {
      type: "text",
      paragraphs: [
        "Two earthquakes struck Venezuela roughly a minute apart, collapsing buildings around the capital city of Caracas. To support response and damage assessment, a public collection of high-resolution optical Cloud-Optimized GeoTIFFs (COGs) was published to open object storage.",
      ],
    },
    {
      // Example of the no-ingest dynamic-tiling path: this collection is a
      // static collection.json on S3 (NOT registered in the disasters STAC
      // API), so the standard StacSingleLayerBlock cannot render it. The
      // CogCollectionBlock streams each COG straight through titiler's /cog
      // endpoints instead.
      type: "cogCollection",
      heading: "Explore the high-resolution imagery",
      caption:
        "Each scene is a 3-band RGB Cloud-Optimized GeoTIFF, tiled on demand by titiler's /cog endpoints — no STAC ingestion required.",
      collectionUrl:
        "https://vantor-opendata.s3.amazonaws.com/events/Venezuela-Earthquake-Jun-2026/collection.json",
      assetKey: "visual",
      bidx: [1, 2, 3],
      baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
      initialViewState: { longitude: -66.94, latitude: 10.42, zoom: 9 },
    },
    {
      type: "text",
      heading: "Product Gallery",
      headingLevel: "h2",
      paragraphs: ["Additional products will be added as they become available."],
    },
  ],
};
