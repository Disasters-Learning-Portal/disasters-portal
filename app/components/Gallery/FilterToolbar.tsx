"use client";

import { Link, SearchInput, SvgFilterList } from "@teamimpact/veda-ui-blocks";
import type { SubmitEvent } from "react";
import { AppliedFilters } from "./AppliedFilters";
import { FilterDrawer } from "./FilterDrawer";
import { QUERY_PARAM, type UseGalleryResult } from "./hooks/useGallery";

type FilterToolbarProps = {
  gallery: UseGalleryResult;
};

/** Search form, drawer trigger, applied pills and the drawer, all driven by one useGallery result. */
export function FilterToolbar({ gallery }: FilterToolbarProps) {
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
      <AppliedFilters gallery={gallery} />
      <FilterDrawer drawer={gallery.drawer} />
    </>
  );
}
