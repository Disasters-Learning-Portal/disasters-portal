import type { ContentType, GalleryCard } from "@/app/site-config/types";

/** Every filter the gallery supports; url.helpers.ts translates it from the URL. */
export type FilterState = {
  contentType: ContentType | null;
};

export function applyFilters(items: GalleryCard[], filters: FilterState): GalleryCard[] {
  return items.filter((item) => matchesContentType(item, filters.contentType));
}

function matchesContentType(item: GalleryCard, type: ContentType | null): boolean {
  return type === null || item.contentType === type;
}
