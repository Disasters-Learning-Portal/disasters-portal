import type { GalleryItem } from "@/app/site-config/types";
import {
  appendFacetParams,
  FACET_PARAMS,
  type FacetSelection,
  listSelectedFacetValues,
  matchesFacets,
  parseFacets,
  toggleFacetValue,
} from "./facets.helpers";
import { PAGE_PARAM } from "./pagination.helpers";
import { toHref } from "./url.helpers";

/**
 * The gallery's filter state as one unit: the text query plus the facet
 * selection, parsed from and serialized to the URL. Pure; the React glue
 * lives in useGallery.ts.
 */

/** Query-string key for the free-text search filter; also the search input's field name. */
export const QUERY_PARAM = "q";

/** Everything the filter UI owns in the URL, as one parse/serialize unit. */
export type FilterState = {
  query: string;
  facets: FacetSelection;
};

export function parseFilters(params: URLSearchParams): FilterState {
  return { query: params.get(QUERY_PARAM)?.trim() ?? "", facets: parseFacets(params) };
}

function matchesQuery(item: GalleryItem, query: string): boolean {
  const q = query.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) || (item.description?.toLowerCase().includes(q) ?? false)
  );
}

export function applyFilters(items: GalleryItem[], { query, facets }: FilterState): GalleryItem[] {
  return items.filter(
    (item) => (!query || matchesQuery(item, query)) && matchesFacets(item, facets),
  );
}

/**
 * Href for the current location with the full filter state written: owned
 * params (query, facets, page) replaced, all other params preserved.
 */
export function buildFiltersUrl(
  currentParams: URLSearchParams,
  pathname: string,
  { query, facets }: FilterState,
): string {
  const params = new URLSearchParams(currentParams);
  for (const owned of [QUERY_PARAM, PAGE_PARAM, ...FACET_PARAMS]) {
    params.delete(owned);
  }
  if (query) {
    params.set(QUERY_PARAM, query);
  }
  appendFacetParams(params, facets);
  return toHref(params, pathname);
}

/** A removable-pill descriptor for one applied filter. */
export type AppliedFilter = {
  id: string;
  label: string;
  remove: () => void;
};

/** Pills for the applied query and facet values, in display order. */
export function buildAppliedFilters(
  filters: FilterState,
  setFilters: (next: FilterState) => void,
): AppliedFilter[] {
  // The quoted query pill is the only removal affordance for an applied
  // search besides submitting an empty one.
  const queryPill: AppliedFilter[] = filters.query
    ? [
        {
          id: "query",
          label: `Text: “${filters.query}”`,
          remove: () => setFilters({ ...filters, query: "" }),
        },
      ]
    : [];
  const facetPills = listSelectedFacetValues(filters.facets).map(({ key, value, label }) => ({
    id: `${key}-${value}`,
    label,
    remove: () => setFilters({ ...filters, facets: toggleFacetValue(filters.facets, key, value) }),
  }));
  return [...queryPill, ...facetPills];
}
