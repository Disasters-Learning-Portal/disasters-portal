/**
 * Environment-specific URLs.
 *
 * All three are required at build time. There is no fallback: an unset
 * variable fails the build so a deployment can never silently have a missing required url.
 * See `.env.example` for local values and the README for
 * how Amplify and Github supply them.
 */
function requireEnvVariable(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable ${name}. See .env.example.`);
  }
  // strip trailing slashes so callers can append paths and query strings
  return value.replace(/\/+$/, "");
}

/** Defines an optional site base path when deployed to a subpath */
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

/**
 * Inverse of {@link withBasePath}: strip a leading {@link BASE_PATH} from an
 * app-internal absolute path so next/link can add it back exactly once.
 * Other paths are returned unchanged.
 * @param path - The path to strip.
 * @returns The path without the base path.
 */
export function withoutBasePath(path: string): string {
  if (!BASE_PATH) return path;
  if (path === BASE_PATH) return "/";
  if (path.startsWith(`${BASE_PATH}/`)) return path.slice(BASE_PATH.length);
  return path;
}

/**
 * URL of the MMGIS data visualization tool, absolute or root-relative.
 *
 * An absolute URL (`https://host/disasters/data-visualization`) is used as-is.
 * A root-relative path (`/data-visualization`) keeps visitors on whichever
 * host served them the portal. It is exported WITHOUT the base path, matching
 * the other nav hrefs in `header.tsx`: every consumer renders it through
 * `AppLink` (next/link), which prepends `basePath` itself, so a pre-prefixed
 * value would render as `/disasters/disasters/data-visualization`. A value
 * that already carries the base path is accepted and normalized. Any plain
 * `<a>` consumer must wrap it in {@link withBasePath}.
 */
export const DATA_VISUALIZATION_URL = withoutBasePath(
  requireEnvVariable(
    "NEXT_PUBLIC_DATA_VISUALIZATION_URL",
    process.env.NEXT_PUBLIC_DATA_VISUALIZATION_URL,
  ),
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
