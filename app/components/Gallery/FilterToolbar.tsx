"use client";

import { Link, SearchInput, SvgFilterList } from "@teamimpact/veda-ui-blocks";
import { usePathname, useSearchParams } from "next/navigation";
import { type SubmitEvent, useState } from "react";
import { FilterDrawer } from "./FilterDrawer";
import {
  buildFiltersUrl,
  EMPTY_FACETS,
  type FacetSelection,
  type FilterState,
  QUERY_PARAM,
} from "./Gallery.helpers";

type FilterToolbarProps = {
  /** Currently applied filter state, from the URL. */
  filters: FilterState;
  /** Facet values present in the data; the drawer only offers these. */
  availableFacets: FacetSelection;
  /** Number of items left after filtering. */
  resultCount: number;
};

/**
 * Submitting the search or applying drawer facets writes the URL via
 * history.replaceState, which Next syncs back into useSearchParams without a
 * navigation.
 */
export function FilterToolbar({ filters, availableFacets, resultCount }: FilterToolbarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [draftFacets, setDraftFacets] = useState(EMPTY_FACETS);

  const applyFilterState = (nextFilters: FilterState) => {
    history.replaceState(null, "", buildFiltersUrl(searchParams, pathname, nextFilters));
  };

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedQuery = String(new FormData(event.currentTarget).get(QUERY_PARAM) ?? "").trim();
    applyFilterState({ ...filters, query: submittedQuery });
  };

  const openDrawer = () => {
    setDraftFacets(filters.facets);
    setIsDrawerOpen(true);
  };

  const applyDraft = () => {
    applyFilterState({ ...filters, facets: draftFacets });
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="display-flex flex-justify flex-align-center margin-bottom-3">
        <form onSubmit={onSubmit} className="maxw-mobile-lg width-full">
          {/* key remounts the uncontrolled input when the URL changes externally (back button) */}
          <SearchInput
            key={filters.query}
            label="Search"
            name={QUERY_PARAM}
            inputProps={{ defaultValue: filters.query }}
          />
        </form>
        <Link
          as="button"
          variant="text"
          className="text-bold text-no-underline text-uppercase"
          onClick={openDrawer}
        >
          Sort & Filter{" "}
          <span className="display-inline-flex flex-align-center flex-justify-center bg-white border-1px border-base-light radius-pill padding-05 margin-left-05">
            <SvgFilterList className="usa-icon" />
          </span>
        </Link>
      </div>
      {filters.query && (
        <p role="status" className="font-heading-lg text-bold margin-bottom-3">
          {resultCount} search {resultCount === 1 ? "result" : "results"} for{" "}
          <span className="text-primary">{filters.query}</span>
        </p>
      )}
      {resultCount === 0 && <p>No results match your filters.</p>}
      <FilterDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        draft={draftFacets}
        availableFacets={availableFacets}
        onDraftChange={setDraftFacets}
        onApply={applyDraft}
      />
    </>
  );
}
