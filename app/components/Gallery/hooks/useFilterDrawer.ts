"use client";

import { useState } from "react";
import {
  EMPTY_FACETS,
  type FacetSelection,
  listFacetOptions,
  toggleFacetValue,
} from "../helpers/facets.helpers";

/** One accordion section of checkboxes, ready to render. */
export type DrawerSection = {
  id: string;
  title: string;
  options: { value: string; label: string; selected: boolean; toggle: () => void }[];
};

export type UseFilterDrawerResult = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  sections: DrawerSection[];
  apply: () => void;
  clear: () => void;
};

/**
 * Drawer state for the facet filters: open/closed plus a draft selection
 * staged while the drawer is open. Opening seeds the draft from the applied
 * facets; only apply commits it (via onApply), and closing discards it.
 */
export function useFilterDrawer(
  appliedFacets: FacetSelection,
  availableFacets: FacetSelection,
  onApply: (facets: FacetSelection) => void,
): UseFilterDrawerResult {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState(EMPTY_FACETS);

  const sections = listFacetOptions(draft, availableFacets).map((group) => ({
    id: `filter-${group.param}`,
    title: group.title,
    options: group.options.map((option) => ({
      ...option,
      toggle: () => setDraft(toggleFacetValue(draft, group.key, option.value)),
    })),
  }));

  return {
    isOpen,
    open: () => {
      setDraft(appliedFacets);
      setIsOpen(true);
    },
    close: () => setIsOpen(false),
    sections,
    apply: () => {
      onApply(draft);
      setIsOpen(false);
    },
    clear: () => setDraft(EMPTY_FACETS),
  };
}
