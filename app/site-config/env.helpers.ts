/**
 * Environment-specific URLs.
 *
 * All three are required at build time. There is no fallback: an unset
 * variable fails the build so a deployment can never silently point at the
 * wrong environment. See `.env.example` for local values and the README for
 * how Amplify and CI supply them.
 */

function requireEnvVariable(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable ${name}. See .env.example.`);
  }
  // strip trailing slashes so callers can append paths and query strings
  return value.replace(/\/+$/, "");
}

/** Base URL of the MMGIS data visualization tool. */
export const DATA_VISUALIZATION_URL = requireEnvVariable(
  "NEXT_PUBLIC_DATA_VISUALIZATION_URL",
  process.env.NEXT_PUBLIC_DATA_VISUALIZATION_URL,
);

/** STAC API root used by the map blocks. */
export const STAC_API_URL = requireEnvVariable(
  "NEXT_PUBLIC_STAC_API_URL",
  process.env.NEXT_PUBLIC_STAC_API_URL,
);

/** Raster API (TiTiler) root used by the map blocks. */
export const RASTER_API_URL = requireEnvVariable(
  "NEXT_PUBLIC_RASTER_API_URL",
  process.env.NEXT_PUBLIC_RASTER_API_URL,
);
/**
 * Helpers for working with the base path.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/**
 * Prefix an app-internal absolute path with {@link BASE_PATH}.
 * Applies only to internal paths, other paths are returned unchanged.
 * @param path - The path to prefix.
 * @returns The prefixed path.
 */

export function withBasePath(path: string): string {
  // no base path provided
  if (!BASE_PATH) return path;
  // not an absolute path from root
  if (!path.startsWith("/")) return path;
  // is a protocol-relative full url path (ex. //domain.com/img/logo.png)
  if (path.startsWith("//")) return path;
  // base path already appended
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
