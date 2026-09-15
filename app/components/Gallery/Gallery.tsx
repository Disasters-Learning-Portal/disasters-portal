"use client";

import { CardDetailed, Link, Pagination, SvgFilterList } from "@teamimpact/veda-ui-blocks";
import { Suspense, useState } from "react";
import { AppLink } from "@/app/components/AppLink";
import { makeCardDetailedProps } from "@/app/site-config/content.helpers";
import type { GalleryCardContent } from "@/app/site-config/types";
import { FilterDrawer } from "./FilterDrawer";
import { GalleryResultsSummary } from "./GalleryResultsSummary";
import { GallerySearch } from "./GallerySearch";
import { useGallery } from "./useGallery";

export type GalleryProps = {
  items: GalleryCardContent[];
};

/**
 * useGallery reads the URL via useSearchParams, which only has a value at
 * request time. On statically prerendered pages Next.js therefore requires
 * a Suspense boundary above the call (build error otherwise); the boundary
 * lives here so every consumer gets it for free.
 */
export function Gallery(props: GalleryProps) {
  return (
    <Suspense>
      <GalleryInner {...props} />
    </Suspense>
  );
}

function GalleryInner({ items }: GalleryProps) {
  const {
    pageItems,
    resultCount,
    totalPages,
    currentPage,
    getPageHref,
    query,
    setQuery,
    facets,
    setFacets,
    availableFacets,
    appliedFilters,
    clearAllFilters,
  } = useGallery(items);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="display-flex flex-justify flex-align-center margin-bottom-3">
        <GallerySearch query={query} onSearch={setQuery} />
        <Link
          as="button"
          variant="text"
          className="text-bold text-no-underline text-uppercase"
          onClick={() => setIsFilterOpen(true)}
        >
          Sort & Filter{" "}
          <span className="display-inline-flex flex-align-center flex-justify-center bg-white border-1px border-base-light radius-pill padding-05 margin-left-05">
            <SvgFilterList className="usa-icon" />
          </span>
        </Link>
      </div>
      <GalleryResultsSummary
        resultCount={resultCount}
        appliedFilters={appliedFilters}
        clearAllFilters={clearAllFilters}
      />
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        appliedFacets={facets}
        availableFacets={availableFacets}
        onApply={setFacets}
      />
      <div className="grid-row grid-gap">
        {pageItems.map((item) => {
          const { id, ...cardProps } = makeCardDetailedProps(item);
          return (
            <div
              key={id}
              className="display-flex grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-y-1 desktop:margin-y-2"
            >
              <CardDetailed {...cardProps} />
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <Pagination
          getHref={getPageHref}
          currentPage={currentPage}
          totalPages={totalPages}
          linksAs={AppLink}
          className="margin-top-4 display-flex flex-justify-center"
        />
      )}
    </>
  );
}
