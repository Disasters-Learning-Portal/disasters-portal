"use client";

import { Accordion, Checkbox, Drawer, Link } from "@teamimpact/veda-ui-blocks";
import { useEffect, useState } from "react";
import {
  EMPTY_FACETS,
  type FacetSelection,
  listFacetOptions,
  toggleFacetValue,
} from "./helpers/facets.helpers";

type FilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  /** The committed selection, from the URL. */
  appliedFacets: FacetSelection;
  /** Facet values present in the data; sections only offer these. */
  availableFacets: FacetSelection;
  onApply: (facets: FacetSelection) => void;
};

/**
 * The Filters drawer: an accordion of facet checkboxes with an
 * Apply/Clear footer. Checkbox toggles edit a local draft and nothing
 * commits until Apply; closing discards the draft.
 */
export function FilterDrawer({
  isOpen,
  onClose,
  appliedFacets,
  availableFacets,
  onApply,
}: FilterDrawerProps) {
  const [draft, setDraft] = useState(EMPTY_FACETS);

  // Reseed the draft on open and whenever the applied selection changes
  // (e.g. back/forward while open), so Apply never reverts the URL.
  useEffect(() => {
    if (isOpen) setDraft(appliedFacets);
  }, [isOpen, appliedFacets]);

  return (
    <Drawer
      title="Filters"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className="display-flex">
          <Link
            as="button"
            variant="button"
            className="display-flex flex-justify-center flex-1 margin-right-2"
            onClick={() => {
              onApply(draft);
              onClose();
            }}
          >
            Apply Filters
          </Link>
          <Link as="button" variant="button-outline" onClick={() => setDraft(EMPTY_FACETS)}>
            Clear
          </Link>
        </div>
      }
    >
      <Accordion
        titleAs="h3"
        data-allow-multiple
        items={listFacetOptions(draft, availableFacets).map((group) => {
          const sectionId = `filter-${group.param}`;
          return {
            id: sectionId,
            title: group.title,
            expanded: true,
            content: group.options.map((option) => (
              <Checkbox
                key={option.value}
                name={sectionId}
                label={option.value}
                value={option.value}
                inputProps={{
                  checked: option.selected,
                  onChange: () => setDraft(toggleFacetValue(draft, group.key, option.value)),
                }}
              />
            )),
          };
        })}
      />
    </Drawer>
  );
}
