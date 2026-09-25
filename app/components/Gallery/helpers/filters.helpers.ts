import type { GalleryCardContent } from "@/app/site-config/types";
import {
  type FacetSelection,
  listSelectedFacetValues,
  matchesFacets,
  toggleFacetValue,
} from "./facets.helpers";

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

/** A removable-pill descriptor for one applied filter. */
export type AppliedFilter = {
  id: string;
  label: string;
  remove: () => void;
};

/** Pills for the applied query and facet values, in display order. */
export function buildAppliedFilters(
  filters: FilterState,
  setFilters: (next: FilterState) => void,
): AppliedFilter[] {
  const pills: AppliedFilter[] = [];
  if (filters.query) {
    // The quoted query pill is the only removal affordance for an applied
    // search besides submitting an empty one.
    pills.push({
      id: "query",
      label: `Text: “${filters.query}”`,
      remove: () => setFilters({ ...filters, query: "" }),
    });
  }
  for (const { key, value } of listSelectedFacetValues(filters.facets)) {
    // Toggling a selected value deselects it.
    pills.push({
      id: `${key}-${value}`,
      label: value,
      remove: () =>
        setFilters({ ...filters, facets: toggleFacetValue(filters.facets, key, value) }),
    });
  }
  return pills;
}
