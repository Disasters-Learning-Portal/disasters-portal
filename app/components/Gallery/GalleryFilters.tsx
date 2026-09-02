"use client";

import { Link, SearchInput, SvgFilterList } from "@teamimpact/veda-ui-blocks";
import type { SubmitEvent } from "react";
import { FilterDrawer } from "./FilterDrawer";
import { QUERY_PARAM, type UseGalleryResult } from "./hooks/useGallery";
import { ResultsSummary } from "./ResultsSummary";

type GalleryFiltersProps = {
  gallery: UseGalleryResult;
};

/** The gallery's filter block: search form, drawer trigger, results summary and the drawer. */
export function GalleryFilters({ gallery }: GalleryFiltersProps) {
  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    gallery.setQuery(String(new FormData(event.currentTarget).get(QUERY_PARAM) ?? ""));
  };

  return (
    <>
      <div className="display-flex flex-justify flex-align-center margin-bottom-3">
        <form onSubmit={onSubmit} className="maxw-mobile-lg width-full">
          {/* key remounts the uncontrolled input when the URL changes externally (back button) */}
          <SearchInput
            key={gallery.query}
            label="Search"
            name={QUERY_PARAM}
            inputProps={{ defaultValue: gallery.query }}
          />
        </form>
        <Link
          as="button"
          variant="text"
          className="text-bold text-no-underline text-uppercase"
          onClick={gallery.drawer.open}
        >
          Sort & Filter{" "}
          <span className="display-inline-flex flex-align-center flex-justify-center bg-white border-1px border-base-light radius-pill padding-05 margin-left-05">
            <SvgFilterList className="usa-icon" />
          </span>
        </Link>
      </div>
      <ResultsSummary gallery={gallery} />
      <FilterDrawer drawer={gallery.drawer} />
    </>
  );
}
