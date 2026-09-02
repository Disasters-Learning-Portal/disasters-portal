"use client";

import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import {
  EMPTY_FACETS,
  FACET_KEYS,
  FACETS,
  type FacetSelection,
  type FilterState,
  toggleValue,
} from "./Gallery.helpers";

type AppliedFiltersProps = {
  /** Currently applied filter state, from the URL. */
  filters: FilterState;
  /** Number of items left after filtering. */
  resultCount: number;
  onFiltersChange: (filters: FilterState) => void;
};

/** Pills for the applied query and facet values, the search result count, and the empty state. */
export function AppliedFilters({ filters, resultCount, onFiltersChange }: AppliedFiltersProps) {
  const applyFacets = (facets: FacetSelection) => onFiltersChange({ ...filters, facets });

  // The quoted query pill is the only removal affordance for an applied
  // search besides submitting an empty one.
  const queryPill = filters.query
    ? {
        id: "query",
        label: `Text: “${filters.query}”`,
        remove: () => onFiltersChange({ ...filters, query: "" }),
      }
    : null;
  const facetPills = FACET_KEYS.flatMap((key) => {
    const selected: readonly string[] = filters.facets[key];
    return selected.map((value) => ({
      id: `${key}-${value}`,
      label: FACETS[key].label(value),
      remove: () =>
        applyFacets({ ...filters.facets, [key]: toggleValue(selected, value) } as FacetSelection),
    }));
  });
  const pills = [...(queryPill ? [queryPill] : []), ...facetPills];

  return (
    <>
      {pills.length > 0 && (
        <div className="display-flex flex-wrap flex-align-center margin-bottom-3">
          <span className="text-bold margin-right-1">Filters applied:</span>
          {pills.map((pill) => (
            <Tag key={pill.id} onClose={pill.remove} className="margin-right-1">
              {pill.label}
            </Tag>
          ))}
          {pills.length > 1 && (
            <Link
              as="button"
              variant="text"
              onClick={() => onFiltersChange({ query: "", facets: EMPTY_FACETS })}
            >
              Clear all
            </Link>
          )}
        </div>
      )}
      {pills.length > 0 && (
        <p role="status" className="font-heading-lg text-bold margin-bottom-3">
          {resultCount === 0
            ? "No results match your filters."
            : `${resultCount} search ${resultCount === 1 ? "result" : "results"}`}
        </p>
      )}
    </>
  );
}
