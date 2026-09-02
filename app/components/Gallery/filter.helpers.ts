import type { GalleryItem } from "@/app/site-config/types";
import { PAGE_PARAM } from "./Gallery.helpers";

/** Query-string key for the free-text search filter. */
export const QUERY_PARAM = "q";

export function parseQueryParam(params: URLSearchParams): string {
  return params.get(QUERY_PARAM)?.trim() ?? "";
}

export function matchesQuery(item: GalleryItem, query: string): boolean {
  const q = query.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) || (item.description?.toLowerCase().includes(q) ?? false)
  );
}

export function applyFilters(items: GalleryItem[], query: string): GalleryItem[] {
  if (!query) return items;
  return items.filter((item) => matchesQuery(item, query));
}

/** Href for the current location with ?q= applied, paging reset, and all other params preserved. */
export function buildQueryUrl(
  currentParams: URLSearchParams,
  pathname: string,
  query: string,
): string {
  const params = new URLSearchParams(currentParams);
  if (query) {
    params.set(QUERY_PARAM, query);
  } else {
    params.delete(QUERY_PARAM);
  }
  params.delete(PAGE_PARAM);
  const queryString = params.toString();
  return queryString ? `?${queryString}` : pathname;
}
