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

/** Pills for the active facet values, the search result count, and the empty state. */
export function AppliedFilters({ filters, resultCount, onFiltersChange }: AppliedFiltersProps) {
  const applyFacets = (facets: FacetSelection) => onFiltersChange({ ...filters, facets });

  const pills = FACET_KEYS.flatMap((key) => {
    const selected: readonly string[] = filters.facets[key];
    return selected.map((value) => ({
      id: `${key}-${value}`,
      label: FACETS[key].label(value),
      remove: () =>
        applyFacets({ ...filters.facets, [key]: toggleValue(selected, value) } as FacetSelection),
    }));
  });

  return (
    <>
      {pills.length > 0 && (
        <div className="display-flex flex-wrap flex-align-center margin-bottom-3">
          {pills.map((pill) => (
            <Tag key={pill.id} onClose={pill.remove} className="margin-right-1">
              {pill.label}
            </Tag>
          ))}
          <Link as="button" variant="text" onClick={() => applyFacets(EMPTY_FACETS)}>
            Clear all
          </Link>
        </div>
      )}
      {filters.query && (
        <p role="status" className="font-heading-lg text-bold margin-bottom-3">
          {resultCount} search {resultCount === 1 ? "result" : "results"} for{" "}
          <span className="text-primary">{filters.query}</span>
        </p>
      )}
      {resultCount === 0 && <p>No results match your filters.</p>}
    </>
  );
}
