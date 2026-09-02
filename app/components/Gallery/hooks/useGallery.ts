"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { GalleryItem } from "@/app/site-config/types";
import { collectAvailableFacets, EMPTY_FACETS } from "../helpers/facets.helpers";
import {
  type AppliedFilter,
  applyFilters,
  buildAppliedFilters,
  buildFiltersUrl,
  type FilterState,
  parseFilters,
} from "../helpers/filters.helpers";
import { buildPageHref, paginate, parsePageParam } from "../helpers/pagination.helpers";
import { type UseFilterDrawerResult, useFilterDrawer } from "./useFilterDrawer";

export { QUERY_PARAM } from "../helpers/filters.helpers";

export type UseGalleryResult = {
  /** Applied search query, from the URL. */
  query: string;
  setQuery: (query: string) => void;
  /** Items left after applying the query and all facets. */
  filteredItems: GalleryItem[];
  /** Current page's slice of filteredItems. */
  pageItems: GalleryItem[];
  /** Requested page clamped to the filtered results. */
  currentPage: number;
  totalPages: number;
  /** Href for a page, keeping every other param (filters included) intact. */
  getPageHref: (page: number) => string;
  /** Pills for the applied query and facet values, in display order. */
  appliedFilters: AppliedFilter[];
  clearAllFilters: () => void;
  drawer: UseFilterDrawerResult;
};

/**
 * Filter and pagination state for a gallery, owned by the URL: reads via
 * useSearchParams, writes via history.replaceState (Next syncs the params
 * back without a navigation). Every filter write resets the page and
 * preserves unknown params. Call once per gallery and thread the result
 * down as a prop.
 */
export function useGallery(items: GalleryItem[]): UseGalleryResult {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const filters = parseFilters(searchParams);
  const filteredItems = applyFilters(items, filters);
  const { pageItems, currentPage, totalPages } = paginate(
    filteredItems,
    parsePageParam(searchParams),
  );

  const setFilters = (next: FilterState) => {
    history.replaceState(null, "", buildFiltersUrl(searchParams, pathname, next));
  };

  const drawer = useFilterDrawer(filters.facets, collectAvailableFacets(items), (facets) =>
    setFilters({ ...filters, facets }),
  );

  return {
    query: filters.query,
    setQuery: (query) => setFilters({ ...filters, query: query.trim() }),
    filteredItems,
    pageItems,
    currentPage,
    totalPages,
    getPageHref: (page) => buildPageHref(searchParams, pathname, page),
    appliedFilters: buildAppliedFilters(filters, setFilters),
    clearAllFilters: () => setFilters({ query: "", facets: EMPTY_FACETS }),
    drawer,
  };
}
