import type { MinimumCardContent } from "@/app/site-config/types";

// Pure helpers for the Gallery component. No React imports so they stay
// unit-testable and usable from server and client modules alike.

export type GalleryItem = MinimumCardContent & { url?: string };

/**
 * Narrow a full content object down to the serializable card fields the
 * Gallery component needs. Content types carry non-serializable extras
 * (ContentBlock bodies with JSX) that must not cross the server -> client
 * boundary. The declared return type keeps the field list honest for required
 * fields (dropping one is a compile error); optional fields (description, url)
 * are not compiler-checked, so keep the list in sync with GalleryItem.
 */
export const toGalleryItem = ({
  id,
  contentType,
  title,
  description,
  thumbnailImage,
  themes,
  categories,
  url,
}: GalleryItem): GalleryItem => ({
  id,
  contentType,
  title,
  description,
  thumbnailImage,
  themes,
  categories,
  url,
});

/** Figma shows 6 results per gallery page. */
export const PAGE_SIZE = 6;

/** Query-string key shared by parsePage and PaginationBar's hrefs. */
export const PAGE_PARAM = "page";

/** Read the 1-based page from the query string; invalid or missing -> 1. */
export function parsePage(params: URLSearchParams): number {
  // Number() instead of parseInt() so trailing junk ("3abc") is invalid, not 3
  const parsed = Number(params.get(PAGE_PARAM) ?? "");
  return Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
}

/**
 * Data-side pagination: blocks Pagination only renders the nav and exports no
 * data helpers, so slicing items is the app's job. Clamps the page itself —
 * the clamp decides which items are sliced, not just which links render.
 */
export function paginate<T>(
  items: T[],
  page: number,
): { pageItems: T[]; totalPages: number; currentPage: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  return { pageItems: items.slice(start, start + PAGE_SIZE), totalPages, currentPage };
}
