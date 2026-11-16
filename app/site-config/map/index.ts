import { CARTO_DARK_WITH_LABELS_BASEMAP_STYLE } from "@teamimpact/veda-ui-blocks";

import { RASTER_API_URL, STAC_API_URL } from "@/app/site-config/env.helpers";

const STAC_ENDPOINTS = {
  stacApiUrl: STAC_API_URL,
  titilerBaseUrl: RASTER_API_URL,
};

export const US_VIEW_STATE = { longitude: -98.0, latitude: 38.5, zoom: 4 };

export const DEFAULT_STAC_CONFIG = {
  ...STAC_ENDPOINTS,
  baseMapStyle: CARTO_DARK_WITH_LABELS_BASEMAP_STYLE,
  initialViewState: US_VIEW_STATE,
};
