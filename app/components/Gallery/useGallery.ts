"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { GalleryCardContent } from "@/app/site-config/types";
import {
  collectAvailableFacets,
  EMPTY_FACETS,
  type FacetSelection,
} from "./helpers/facets.helpers";
import {
  type AppliedFilter,
  applyFilters,
  buildAppliedFilters,
  type FilterState,
} from "./helpers/filters.helpers";
import { getPaginationState } from "./helpers/pagination.helpers";
import {
  buildFiltersUrl,
  buildPageHref,
  parseFilters,
  parsePageParam,
} from "./helpers/url.helpers";

export type UseGalleryResult = {
  /** Current page's slice of the filtered items. */
  pageItems: GalleryCardContent[];
  /** Items matching the filters, before paging. */
  resultCount: number;
  /** Requested page clamped to the filtered results. */
  currentPage: number;
  totalPages: number;
  /** Href for a page link */
  getPageHref: (page: number) => string;
  /** Applied search query, from the URL. */
  query: string;
  /** Writes the query to the URL and resets paging. */
  setQuery: (query: string) => void;
  /** Applied facet selection, from the URL. */
  facets: FacetSelection;
  /** Writes the facet selection to the URL and resets paging. */
  setFacets: (facets: FacetSelection) => void;
  /** Facet values present in the data; the filter UI only offers these. */
  availableFacets: FacetSelection;
  /** Pills for the applied query and facet values, in display order. */
  appliedFilters: AppliedFilter[];
  /** Clears the query and every facet in one URL write. */
  clearAllFilters: () => void;
};

/**
 * Gallery state owned by the URL: reads via useSearchParams, writes via
 * history.replaceState (Next syncs the params back without a navigation).
 * Keeps every URL concern out of the view layer; the components only
 * render from this result.
 */
/** Applies a built href without a navigation; useSearchParams picks up the change. */
function applyUrl(url: string) {
  history.replaceState(null, "", url);
}

export function useGallery(items: GalleryCardContent[]): UseGalleryResult {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const filters = parseFilters(searchParams);
  const filteredItems = applyFilters(items, filters);
  const { pageItems, currentPage, totalPages } = getPaginationState(
    filteredItems,
    parsePageParam(searchParams),
  );

  const setFilters = (next: FilterState) => applyUrl(buildFiltersUrl(searchParams, pathname, next));

  return {
    pageItems,
    resultCount: filteredItems.length,
    currentPage,
    totalPages,
    getPageHref: (page) => buildPageHref(searchParams, pathname, page),
    query: filters.query,
    setQuery: (query) => setFilters({ ...filters, query: query.trim() }),
    facets: filters.facets,
    setFacets: (facets) => setFilters({ ...filters, facets }),
    availableFacets: collectAvailableFacets(items),
    appliedFilters: buildAppliedFilters(filters, setFilters),
    clearAllFilters: () => setFilters({ query: "", facets: EMPTY_FACETS }),
  };
}
