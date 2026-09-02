"use client";

import { Accordion, Checkbox, Drawer, Link } from "@teamimpact/veda-ui-blocks";
import {
  EMPTY_FACETS,
  FACET_KEYS,
  FACETS,
  type FacetSelection,
  toggleValue,
} from "./Gallery.helpers";

type FilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  /** Facet edits staged in the drawer; committed to the URL only on Apply. */
  draft: FacetSelection;
  /** Facet values present in the data; others are hidden since they would filter nothing. */
  availableFacets: FacetSelection;
  onDraftChange: (draft: FacetSelection) => void;
  onApply: () => void;
};

export function FilterDrawer({
  isOpen,
  onClose,
  draft,
  availableFacets,
  onDraftChange,
  onApply,
}: FilterDrawerProps) {
  const facetSections = FACET_KEYS.map((key) => {
    const config = FACETS[key];
    const selected: readonly string[] = draft[key];
    const available: readonly string[] = availableFacets[key];
    // Union with the draft so a URL-selected value absent from the data can still be unchecked.
    const options = config.options.filter(
      (value) => available.includes(value) || selected.includes(value),
    );
    return {
      id: `filter-${config.param}`,
      title: config.title,
      label: config.label,
      selected,
      options,
      hidden: options.length < (config.hideWhenSingleOption ? 2 : 1),
      toggle: (value: string) =>
        onDraftChange({ ...draft, [key]: toggleValue(selected, value) } as FacetSelection),
    };
  }).filter((section) => !section.hidden);

  return (
    <Drawer
      title="Sort & Filter"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className="display-flex">
          <Link
            as="button"
            variant="button"
            className="usa-button display-flex flex-justify-center flex-1 margin-right-2"
            onClick={onApply}
          >
            Apply Filters
          </Link>
          <Link
            as="button"
            variant="button-outline"
            className="usa-button"
            onClick={() => onDraftChange(EMPTY_FACETS)}
          >
            Clear
          </Link>
        </div>
      }
    >
      <Accordion
        titleAs="h3"
        data-allow-multiple
        items={facetSections.map((section) => ({
          id: section.id,
          title: section.title,
          expanded: true,
          content: section.options.map((value) => (
            <Checkbox
              key={value}
              name={section.id}
              label={section.label(value)}
              value={value}
              inputProps={{
                checked: section.selected.includes(value),
                onChange: () => section.toggle(value),
              }}
            />
          )),
        }))}
      />
    </Drawer>
  );
}
