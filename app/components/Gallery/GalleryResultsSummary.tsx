"use client";

import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import type { AppliedFilter } from "./helpers/filters.helpers";

type GalleryResultsSummaryProps = {
  resultCount: number;
  appliedFilters: AppliedFilter[];
  clearAllFilters: () => void;
};

/**
 * The result count line and the applied-filter pills row, with their empty
 * states ("N items" / "No filters applied"). Pure rendering; removing a
 * pill or clearing all writes the URL through the useGallery callbacks.
 */
export function GalleryResultsSummary({
  resultCount,
  appliedFilters,
  clearAllFilters,
}: GalleryResultsSummaryProps) {
  const statusText = () => {
    if (appliedFilters.length === 0) {
      return `${resultCount} ${resultCount === 1 ? "item" : "items"}`;
    }
    if (resultCount === 0) {
      return "No results match your filters.";
    }
    return `${resultCount} search ${resultCount === 1 ? "result" : "results"}`;
  };

  return (
    <>
      {/* Always rendered: screen readers only announce text changes inside an
          already-rendered live region, and the placeholder text keeps the
          layout stable when no filters are applied. */}
      <p role="status" className="font-heading-lg text-bold margin-bottom-3">
        {statusText()}
      </p>
      <div className="display-flex flex-wrap flex-align-center margin-bottom-3">
        {appliedFilters.length === 0 ? (
          <span>No filters applied</span>
        ) : (
          <>
            <span className="text-bold margin-right-1">Filters applied:</span>
            {appliedFilters.map((pill) => (
              <Tag key={pill.id} onClose={pill.remove} className="margin-right-1">
                {pill.label}
              </Tag>
            ))}
            {appliedFilters.length > 1 && (
              <Link as="button" variant="text" onClick={clearAllFilters}>
                Clear all
              </Link>
            )}
          </>
        )}
      </div>
    </>
  );
}
