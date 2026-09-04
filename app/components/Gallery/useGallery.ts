"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { GalleryItem } from "@/app/site-config/types";
import { applyFilters } from "./helpers/filters.helpers";
import { getPaginationState } from "./helpers/pagination.helpers";
import { buildPageHref, buildSearchUrl, parseFilters, parsePageParam } from "./helpers/url.helpers";

export type UseGalleryResult = {
  /** Current page's slice of the filtered items. */
  pageItems: GalleryItem[];
  /** Items matching the filters, before paging. */
  resultCount: number;
  /** Requested page clamped to the filtered results. */
  currentPage: number;
  totalPages: number;
  /** Href for a page link; every other param is preserved. */
  getPageHref: (page: number) => string;
  /** Applied search query, from the URL. */
  query: string;
  /** Writes the query to the URL and resets paging. */
  setQuery: (query: string) => void;
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

export function useGallery(items: GalleryItem[]): UseGalleryResult {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const filters = parseFilters(searchParams);
  const filteredItems = applyFilters(items, filters);
  const { pageItems, currentPage, totalPages } = getPaginationState(
    filteredItems,
    parsePageParam(searchParams),
  );

  return {
    pageItems,
    resultCount: filteredItems.length,
    currentPage,
    totalPages,
    getPageHref: (page) => buildPageHref(searchParams, pathname, page),
    query: filters.query,
    setQuery: (query) => applyUrl(buildSearchUrl(searchParams, pathname, query.trim())),
  };
}
