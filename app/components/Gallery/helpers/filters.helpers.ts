import type { GalleryCardContent } from "@/app/site-config/types";
import { type FacetSelection, matchesFacets } from "./facets.helpers";

/** Every filter the gallery supports; url.helpers.ts translates it from and to the URL. */
export type FilterState = {
  query: string;
  facets: FacetSelection;
};

export function applyFilters(
  items: GalleryCardContent[],
  filters: FilterState,
): GalleryCardContent[] {
  return items.filter(
    (item) => matchesQuery(item, filters.query) && matchesFacets(item, filters.facets),
  );
}

function matchesQuery(item: GalleryCardContent, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) || (item.description?.toLowerCase().includes(q) ?? false)
  );
}
