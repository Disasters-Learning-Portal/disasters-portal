"use client";

import { Link, Tag } from "@teamimpact/veda-ui-blocks";
import { makeOutlineTagProps } from "@/app/site-config/content.helpers";
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
    if (resultCount === 0) {
      return "No results match your filters.";
    }
    return `${resultCount} Search ${resultCount === 1 ? "result" : "results"}`;
  };

  return (
    <>
      {/* Always rendered: screen readers only announce text changes inside an
          already-rendered live region, and the placeholder text keeps the
          layout stable when no filters are applied. */}
      <p role="status" className="font-heading-lg text-bold margin-top-0 margin-bottom-3">
        {statusText()}
      </p>
      <div className="display-flex flex-wrap flex-align-center margin-bottom-3">
        {appliedFilters.length === 0 ? (
          <span>No filters applied</span>
        ) : (
          <>
            <span className="text-bold margin-right-1">Filters applied:</span>
            {appliedFilters.map(({ id, label, remove }) => (
              <Tag
                key={id}
                {...makeOutlineTagProps(label, { className: "margin-right-1", onClose: remove })}
              />
            ))}
            {appliedFilters.length > 1 && (
              <Link as="button" variant="text" className="margin-left-1" onClick={clearAllFilters}>
                Clear all
              </Link>
            )}
          </>
        )}
      </div>
    </>
  );
}
