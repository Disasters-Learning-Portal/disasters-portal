/**
 * Helpers for working with the base path.
 */

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Whether a path is app-internal, i.e. starts with "/" but not protocol-relative "//". */
export function isInternalPath(path: string): boolean {
  return path.startsWith("/") && !path.startsWith("//");
}

/**
 * Prefix an app-internal absolute path with {@link BASE_PATH}.
 * Applies only to internal paths, other paths are returned unchanged.
 * @param path - The path to prefix.
 * @returns The prefixed path.
 */
export function withBasePath(path: string): string {
  if (!BASE_PATH) return path;
  if (!isInternalPath(path)) return path;
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
