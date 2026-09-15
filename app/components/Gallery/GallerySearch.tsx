"use client";

import { SearchInput } from "@teamimpact/veda-ui-blocks";
import { type SubmitEvent, useEffect, useRef } from "react";
import { QUERY_PARAM } from "./helpers/url.helpers";

type GallerySearchProps = {
  query: string;
  onSearch: (query: string) => void;
};

export function GallerySearch({ query, onSearch }: GallerySearchProps) {
  const formRef = useRef<HTMLFormElement>(null);

  // The input is uncontrolled, so React won't refresh it when the URL query
  // changes from outside (back/forward navigation). This syncs it by hand; it
  // no-ops while the user types, keeping focus and caret intact (a key={query}
  // remount would steal focus).
  useEffect(() => {
    const input = formRef.current?.querySelector("input");
    if (input && input.value !== query) {
      input.value = query;
    }
  }, [query]);

  // The search only applies on explicit submit (Enter or the Search button),
  // never while typing; the typed value is read from the form instead of state.
  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(String(new FormData(event.currentTarget).get(QUERY_PARAM) ?? ""));
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="maxw-mobile-lg width-full margin-bottom-3">
      <SearchInput
        label="Search"
        name={QUERY_PARAM}
        inputProps={{
          defaultValue: query,
          // covers the native clear button, which fires input but never submit
          onInput: (event) => {
            if (event.currentTarget.value === "") onSearch("");
          },
        }}
      />
    </form>
  );
}
