"use client";

type GalleryResultsSummaryProps = {
  query: string;
  resultCount: number;
};

export function GalleryResultsSummary({ query, resultCount }: GalleryResultsSummaryProps) {
  const showStatus = Boolean(query) || resultCount === 0;

  return (
    // The <p> must always be in the DOM, even when empty: screen readers only
    // announce text changes inside an already-rendered live region, so rendering
    // it conditionally would make the announcements silently stop working.
    // When empty, margin-0 cancels the base 16px <p> margin so it occupies no
    // space (display-none would remove it from the accessibility tree).
    <p
      role="status"
      className={showStatus ? "font-heading-lg text-bold margin-bottom-3" : "margin-0"}
    >
      {showStatus &&
        (resultCount === 0 ? (
          "No results match."
        ) : (
          <>
            {resultCount} Search {resultCount === 1 ? "result" : "results"} for{" "}
            <span className="text-primary">{query}</span>
          </>
        ))}
    </p>
  );
}
