import type { ContentType, GalleryCard } from "@/app/site-config/types";

/** Every filter the gallery supports; url.helpers.ts translates it from and to the URL. */
export type FilterState = {
  query: string;
  contentType: ContentType | null;
};

export function applyFilters(items: GalleryCard[], filters: FilterState): GalleryCard[] {
  return items.filter(
    (item) => matchesContentType(item, filters.contentType) && matchesQuery(item, filters.query),
  );
}

function matchesContentType(item: GalleryCard, type: ContentType | null): boolean {
  return type === null || item.contentType === type;
}

function matchesQuery(item: GalleryCard, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) || (item.description?.toLowerCase().includes(q) ?? false)
  );
}
