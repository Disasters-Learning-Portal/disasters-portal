import { toHref } from "./url.helpers";

/** Pure pagination logic for the gallery; React glue lives in useGallery.ts. */

/** Results per gallery page. */
const PAGE_SIZE = 6;

/** Query-string key for pagination; filters delete it on every write to reset the page. */
export const PAGE_PARAM = "page";

export function parsePageParam(params: URLSearchParams): number {
  // Number() instead of parseInt() so trailing junk ("3abc") is invalid, not 3
  const parsed = Number(params.get(PAGE_PARAM) ?? "");
  return Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
}

export function paginate<T>(
  items: T[],
  requestedPage: number,
): { pageItems: T[]; totalPages: number; currentPage: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  return { pageItems: items.slice(start, start + PAGE_SIZE), totalPages, currentPage };
}

/** Href for a page, keeping every other param (filters included) intact. */
export function buildPageHref(
  currentParams: URLSearchParams,
  pathname: string,
  page: number,
): string {
  const params = new URLSearchParams(currentParams);
  if (page <= 1) {
    params.delete(PAGE_PARAM);
  } else {
    params.set(PAGE_PARAM, String(page));
  }
  return toHref(params, pathname);
}
