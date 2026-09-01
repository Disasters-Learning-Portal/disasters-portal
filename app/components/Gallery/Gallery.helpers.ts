import type { MinimumCardContent } from "@/app/site-config/types";

/** Results per gallery page. */
const PAGE_SIZE = 6;

/** Query-string key shared by parsePageParam and PaginationBar's hrefs. */
export const PAGE_PARAM = "page";

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

export function parsePageParam(params: URLSearchParams): number {
  // Number() instead of parseInt() so trailing junk ("3abc") is invalid, not 3
  const parsed = Number(params.get(PAGE_PARAM) ?? "");
  return Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
}

export function getPaginationState<T>(
  items: T[],
  requestedPage: number,
): { pageItems: T[]; totalPages: number; currentPage: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  return { pageItems: items.slice(start, start + PAGE_SIZE), totalPages, currentPage };
}
