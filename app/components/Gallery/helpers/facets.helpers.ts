import { toTitleCase } from "@/app/site-config/content.helpers";
import {
  type Category,
  CONTENT_HAZARDS,
  CONTENT_THEMES,
  CONTENT_TYPES,
  type ContentType,
  type GalleryItem,
  type Theme,
} from "@/app/site-config/types";

/**
 * The facet domain: the registry of filterable taxonomies and every pure
 * operation on a FacetSelection. filters.helpers.ts composes this with the text
 * query into the gallery's URL state; nothing else imports this module.
 */

export type FacetSelection = {
  themes: Theme[];
  hazards: Category[];
  contentTypes: ContentType[];
};

export const EMPTY_FACETS: FacetSelection = { themes: [], hazards: [], contentTypes: [] };

type FacetConfig = {
  /** Query-string key; repeated for multi-value. */
  param: string;
  /** Drawer section heading. */
  title: string;
  /** All canonical values, in display order. */
  options: readonly string[];
  /** Display label per value, shared by the drawer checkboxes and the applied pills. */
  label: (value: string) => string;
  /** Values an item carries for this facet; empty means it matches nothing while the facet is active. */
  getItemValues: (item: GalleryItem) => readonly string[];
  /**
   * Hide the drawer section when the data offers fewer than two options.
   * Only valid for scalar facets (every item carries exactly one value), where
   * a single option cannot change results. Multi-value facets keep single
   * options: they can still exclude items with an empty taxonomy.
   */
  hideWhenSingleOption?: boolean;
};

/**
 * One entry per facet: parsing, matching, URL writing, drawer sections and
 * applied pills all iterate this registry, so adding a facet is one entry.
 * Configs work on plain strings; FacetSelection keeps the boundary typed and
 * parseFacets guarantees only canonical values enter.
 */
const FACETS: Record<keyof FacetSelection, FacetConfig> = {
  themes: {
    param: "theme",
    title: "Theme",
    options: Object.keys(CONTENT_THEMES),
    label: (theme) => toTitleCase(CONTENT_THEMES[theme as Theme].label),
    getItemValues: (item) => item.themes,
  },
  hazards: {
    param: "hazard",
    title: "Hazard",
    options: Object.keys(CONTENT_HAZARDS),
    label: (hazard) => CONTENT_HAZARDS[hazard as Category],
    getItemValues: (item) => item.categories,
  },
  contentTypes: {
    // One word for compatibility with pre-existing ?contenttype= links.
    param: "contenttype",
    title: "Content Type",
    options: Object.keys(CONTENT_TYPES),
    label: (type) => toTitleCase(CONTENT_TYPES[type as ContentType].label),
    getItemValues: (item) => [item.contentType],
    hideWhenSingleOption: true,
  },
};

const FACET_KEYS = Object.keys(FACETS) as (keyof FacetSelection)[];

/** Query-string keys the facets own, for filters.helpers.ts to clear before serializing. */
export const FACET_PARAMS = FACET_KEYS.map((key) => FACETS[key].param);

export function parseFacets(params: URLSearchParams): FacetSelection {
  return Object.fromEntries(
    FACET_KEYS.map((key) => [
      key,
      params.getAll(FACETS[key].param).filter((value) => FACETS[key].options.includes(value)),
    ]),
  ) as FacetSelection;
}

/** Append the selection as repeated params; callers clear FACET_PARAMS first. */
export function appendFacetParams(params: URLSearchParams, facets: FacetSelection): void {
  for (const key of FACET_KEYS) {
    for (const value of facets[key]) {
      params.append(FACETS[key].param, value);
    }
  }
}

/** OR within a facet, AND across facets; an item without the facet's field matches nothing. */
export function matchesFacets(item: GalleryItem, facets: FacetSelection): boolean {
  return FACET_KEYS.every((key) => {
    const selected: readonly string[] = facets[key];
    return (
      selected.length === 0 ||
      FACETS[key].getItemValues(item).some((value) => selected.includes(value))
    );
  });
}

/** Facet values occurring in at least one item; options absent from the data would filter nothing. */
export function collectAvailableFacets(items: GalleryItem[]): FacetSelection {
  return Object.fromEntries(
    FACET_KEYS.map((key) => {
      const present = new Set(items.flatMap((item) => FACETS[key].getItemValues(item)));
      return [key, FACETS[key].options.filter((value) => present.has(value))];
    }),
  ) as FacetSelection;
}

function toggleValue<T>(list: readonly T[], value: T): T[] {
  return list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value];
}

/** Toggle one value in a facet's selection, returning a new selection. */
export function toggleFacetValue(
  facets: FacetSelection,
  key: keyof FacetSelection,
  value: string,
): FacetSelection {
  const selected: readonly string[] = facets[key];
  return { ...facets, [key]: toggleValue(selected, value) } as FacetSelection;
}

/** Selected values across all facets with their display labels, in registry order. */
export function listSelectedFacetValues(
  facets: FacetSelection,
): { key: keyof FacetSelection; value: string; label: string }[] {
  return FACET_KEYS.flatMap((key) => {
    const selected: readonly string[] = facets[key];
    return selected.map((value) => ({ key, value, label: FACETS[key].label(value) }));
  });
}

export type FacetOptionGroup = {
  key: keyof FacetSelection;
  /** Stable per-facet identifier for the UI (the query-string key). */
  param: string;
  title: string;
  options: { value: string; label: string; selected: boolean }[];
};

/**
 * The options each facet should offer, given a selection and the values
 * available in the data. Unions in the selection so a URL-selected value
 * absent from the data can still be unchecked; facets flagged
 * hideWhenSingleOption drop out when fewer than two options remain.
 */
export function listFacetOptions(
  selection: FacetSelection,
  availableFacets: FacetSelection,
): FacetOptionGroup[] {
  return FACET_KEYS.flatMap((key) => {
    const config = FACETS[key];
    const selected: readonly string[] = selection[key];
    const available: readonly string[] = availableFacets[key];
    const options = config.options.filter(
      (value) => available.includes(value) || selected.includes(value),
    );
    if (options.length < (config.hideWhenSingleOption ? 2 : 1)) {
      return [];
    }
    return [
      {
        key,
        param: config.param,
        title: config.title,
        options: options.map((value) => ({
          value,
          label: config.label(value),
          selected: selected.includes(value),
        })),
      },
    ];
  });
}
