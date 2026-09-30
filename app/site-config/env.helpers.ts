/**
 * Environment-specific URLs.
 *
 * All three are required at build time. There is no fallback: an unset
 * variable fails the build so a deployment can never silently point at the
 * wrong environment. See `.env.example` for local values and the README for
 * how Amplify and CI supply them.
 */

function requireUrl(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable ${name}. See .env.example.`);
  }
  // strip trailing slashes so callers can append paths and query strings
  return value.replace(/\/+$/, "");
}

/** Base URL of the MMGIS data visualization tool. */
export const VIZ_TOOL_URL = requireUrl(
  "NEXT_PUBLIC_VIZ_TOOL_URL",
  process.env.NEXT_PUBLIC_VIZ_TOOL_URL,
);

/** STAC API root used by the map blocks. */
export const STAC_API_URL = requireUrl(
  "NEXT_PUBLIC_STAC_API_URL",
  process.env.NEXT_PUBLIC_STAC_API_URL,
);

/** Raster API (TiTiler) root used by the map blocks. */
export const RASTER_API_URL = requireUrl(
  "NEXT_PUBLIC_RASTER_API_URL",
  process.env.NEXT_PUBLIC_RASTER_API_URL,
);
