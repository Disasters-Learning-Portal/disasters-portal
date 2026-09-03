import { CONTENT_TYPES, type ContentType, type GalleryItem } from "@/app/site-config/types";

export const CONTENT_TYPE_PARAM = "contenttype";

/** Unknown values are ignored so stale links fall back to the unfiltered gallery. */
export function parseContentTypeParam(params: URLSearchParams): ContentType | null {
  const value = params.get(CONTENT_TYPE_PARAM);
  return value !== null && value in CONTENT_TYPES ? (value as ContentType) : null;
}

export function filterByContentType(items: GalleryItem[], type: ContentType | null): GalleryItem[] {
  return type === null ? items : items.filter((item) => item.contentType === type);
}
