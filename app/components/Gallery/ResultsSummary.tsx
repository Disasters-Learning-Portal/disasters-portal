"use client";

import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import type { UseGalleryResult } from "./hooks/useGallery";

type ResultsSummaryProps = {
  gallery: UseGalleryResult;
};

/** The result count line and the applied-filter pills row, with their empty states. */
export function ResultsSummary({ gallery }: ResultsSummaryProps) {
  const { appliedFilters, clearAllFilters } = gallery;
  const resultCount = gallery.filteredItems.length;

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
