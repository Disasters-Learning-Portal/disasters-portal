"use client";

import { Accordion, Checkbox, Drawer, Link } from "@teamimpact/veda-ui-blocks";
import { toTitleCase } from "@/app/site-config/content.helpers";
import {
  type Category,
  CONTENT_HAZARDS,
  CONTENT_THEMES,
  type Theme,
} from "@/app/site-config/types";
import { EMPTY_FACETS, type FacetSelection, toggleValue } from "./Gallery.helpers";

const THEME_OPTIONS = Object.keys(CONTENT_THEMES) as Theme[];
const HAZARD_OPTIONS = Object.keys(CONTENT_HAZARDS) as Category[];

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
  // Union with the draft so a URL-selected value absent from the data can still be unchecked.
  const facetSections = [
    {
      id: "filter-theme",
      title: "Theme",
      selected: draft.themes as string[],
      options: THEME_OPTIONS.filter(
        (theme) => availableFacets.themes.includes(theme) || draft.themes.includes(theme),
      ).map((theme) => ({
        value: theme,
        label: toTitleCase(CONTENT_THEMES[theme].label),
      })),
      toggle: (value: string) =>
        onDraftChange({ ...draft, themes: toggleValue(draft.themes, value as Theme) }),
    },
    {
      id: "filter-hazard",
      title: "Hazard",
      selected: draft.hazards as string[],
      options: HAZARD_OPTIONS.filter(
        (hazard) => availableFacets.hazards.includes(hazard) || draft.hazards.includes(hazard),
      ).map((hazard) => ({
        value: hazard,
        label: CONTENT_HAZARDS[hazard],
      })),
      toggle: (value: string) =>
        onDraftChange({ ...draft, hazards: toggleValue(draft.hazards, value as Category) }),
    },
  ];

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
          content: section.options.map((option) => (
            <Checkbox
              key={option.value}
              name={section.id}
              label={option.label}
              value={option.value}
              inputProps={{
                checked: section.selected.includes(option.value),
                onChange: () => section.toggle(option.value),
              }}
            />
          )),
        }))}
      />
    </Drawer>
  );
}
