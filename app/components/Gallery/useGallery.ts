"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { GalleryItem } from "@/app/site-config/types";
import { applyFilters } from "./helpers/filters.helpers";
import { getPaginationState } from "./helpers/pagination.helpers";
import { buildPageHref, parseFilters, parsePageParam } from "./helpers/url.helpers";

export type UseGalleryResult = {
  /** Current page's slice of the filtered items. */
  pageItems: GalleryItem[];
  /** Requested page clamped to the filtered results. */
  currentPage: number;
  totalPages: number;
  /** Href for a page link; every other param is preserved. */
  getPageHref: (page: number) => string;
};

/**
 * Gallery state owned by the URL, read via useSearchParams. Keeps every URL
 * concern out of the view layer; the components only render from this result.
 */
export function useGallery(items: GalleryItem[]): UseGalleryResult {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const filteredItems = applyFilters(items, parseFilters(searchParams));
  const { pageItems, currentPage, totalPages } = getPaginationState(
    filteredItems,
    parsePageParam(searchParams),
  );

  return {
    pageItems,
    currentPage,
    totalPages,
    getPageHref: (page) => buildPageHref(searchParams, pathname, page),
  };
}
