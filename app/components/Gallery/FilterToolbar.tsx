"use client";

import { SearchInput } from "@teamimpact/veda-ui-blocks";
import { usePathname, useSearchParams } from "next/navigation";
import type { SubmitEvent } from "react";
import { buildQueryUrl, QUERY_PARAM } from "./filter.helpers";

type FilterToolbarProps = {
  /** Currently applied search query, from the URL. */
  query: string;
  /** Number of items left after filtering. */
  resultCount: number;
};

/**
 * Submitting writes ?q= via history.replaceState, which Next syncs back into
 * useSearchParams without a navigation.
 */
export function FilterToolbar({ query, resultCount }: FilterToolbarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedQuery = String(new FormData(event.currentTarget).get(QUERY_PARAM) ?? "").trim();
    history.replaceState(null, "", buildQueryUrl(searchParams, pathname, submittedQuery));
  };

  return (
    <>
      <form onSubmit={onSubmit} className="margin-bottom-3 maxw-mobile-lg">
        {/* key remounts the uncontrolled input when the URL changes externally (back button) */}
        <SearchInput
          key={query}
          label="Search"
          name={QUERY_PARAM}
          inputProps={{ defaultValue: query }}
        />
      </form>
      {query && (
        <p role="status" className="font-heading-lg text-bold margin-bottom-3">
          {resultCount} search {resultCount === 1 ? "result" : "results"} for{" "}
          <span className="text-primary">{query}</span>
        </p>
      )}
      {resultCount === 0 && <p>No results match your filters.</p>}
    </>
  );
}
