import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";
import type { ContentBlock } from "@/app/site-config/types";

export const HOME_CONTENT: ContentBlock[] = [
  {
    type: "stacCompare",
    heading: "Data Visualization",
    initialViewState: { longitude: -82.0, latitude: 33.5, zoom: 10 },
    baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
    leftLayerConfig: {
      type: "raster",
      collectionId: "blackmarble-brdf-daily",
      collectionAssetId: "blackmarble_brdf",
      dateRange: { from: "2024-09-22", to: "2024-09-22" },
      hideLegend: true,
    },
    rightLayerConfig: {
      type: "raster",
      collectionId: "blackmarble-brdf-daily",
      collectionAssetId: "blackmarble_brdf",
      dateRange: { from: "2024-10-02", to: "2024-10-02" },
    },
    caption:
      "NASA Black Marble Day-Night Band (BRDF-Corrected) Pre- and Post-Hurricane Helene Images for the Augusta, Georgia area. The image is in an inferno color scale. Yellow represents the presence of more light; dark blue less lights. Observations may be obscured by total or partial cloud cover. Other factors such as snow reflectance, moon phase, wildfires, and wildfire smoke may distort light radiance and require further analysis when assessing power outages.",
  },
];
