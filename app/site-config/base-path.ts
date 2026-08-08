/**
 * Base path the portal is served under, e.g. `/disasters`.
 *
 * Next.js applies `basePath` (see next.config.ts) to `next/link` hrefs, router
 * navigations and its own `/_next/*` asset URLs. Everything else needs
 * `withBasePath`:
 *   - hrefs handed to `@teamimpact/veda-ui-blocks` (Header, Footer, Card*, Link)
 *     — the library renders plain `<a href>` elements
 *   - `next/image` sources: Next prefixes the `/_next/image` endpoint but not
 *     `src` — use `@/app/components/Image`, which wraps this for you
 *   - raw `<video src>` / `<source src>` / `poster` attributes and CSS `url()`
 *   - `usePathname()` results compared against those prefixed hrefs
 */

/** Normalize to "" or "/segment" (leading slash, no trailing slash). */
export function normalizeBasePath(value: string | undefined): string {
  const trimmed = (value ?? "").trim().replace(/\/+$/, "");
  if (!trimmed) return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export const DEFAULT_BASE_PATH = "/disasters";

export const BASE_PATH = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? DEFAULT_BASE_PATH);

/**
 * Prefix an app-internal absolute path with {@link BASE_PATH}.
 * Protocol-relative and absolute URLs, `mailto:`, fragments, relative paths and
 * already-prefixed paths pass through unchanged, so this is safe to apply to
 * mixed internal/external link lists and is idempotent.
 */
export function withBasePath(path: string): string {
  if (!BASE_PATH) return path;
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}
