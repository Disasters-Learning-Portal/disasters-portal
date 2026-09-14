import {
  type Category,
  CONTENT_CATEGORIES,
  CONTENT_THEMES,
  type GalleryCardContent,
  type Theme,
} from "@/app/site-config/types";

export type FacetSelection = {
  themes: Theme[];
  hazards: Category[];
};

export const EMPTY_FACETS: FacetSelection = { themes: [], hazards: [] };

type FacetConfig = {
  param: string;
  title: string;
  /** URL values, shown verbatim; the CONTENT_THEMES labels are intentionally not applied. */
  options: readonly string[];
  /** An item with no values matches nothing while the facet is active. */
  getItemValues: (item: GalleryCardContent) => readonly string[];
};

const FACETS: Record<keyof FacetSelection, FacetConfig> = {
  themes: {
    param: "theme",
    title: "Theme",
    options: Object.keys(CONTENT_THEMES),
    getItemValues: (item) => item.themes,
  },
  hazards: {
    param: "hazard",
    title: "Hazard",
    options: CONTENT_CATEGORIES,
    getItemValues: (item) => item.categories,
  },
};

const FACET_KEYS = Object.keys(FACETS) as (keyof FacetSelection)[];

export const FACET_PARAMS = FACET_KEYS.map((key) => FACETS[key].param);

/** The one place plain strings are narrowed back into the typed selection. */
function mapFacets(pick: (config: FacetConfig) => string[]): FacetSelection {
  return {
    themes: pick(FACETS.themes) as Theme[],
    hazards: pick(FACETS.hazards) as Category[],
  };
}

export function parseFacets(params: URLSearchParams): FacetSelection {
  return mapFacets((config) =>
    // Unknown values are dropped so a stale link degrades to unfiltered, not empty.
    params.getAll(config.param).filter((value) => config.options.includes(value)),
  );
}

export function setFacetParams(params: URLSearchParams, facets: FacetSelection): void {
  for (const param of FACET_PARAMS) {
    params.delete(param);
  }
  for (const key of FACET_KEYS) {
    for (const value of facets[key]) {
      params.append(FACETS[key].param, value);
    }
  }
}

/** OR within a facet, AND across facets. */
export function matchesFacets(item: GalleryCardContent, facets: FacetSelection): boolean {
  return FACET_KEYS.every((key) => {
    const selected: readonly string[] = facets[key];
    return (
      selected.length === 0 ||
      FACETS[key].getItemValues(item).some((value) => selected.includes(value))
    );
  });
}

/** The values the UI can offer: anything else would filter to nothing. */
export function collectAvailableFacets(items: GalleryCardContent[]): FacetSelection {
  return mapFacets((config) => {
    const present = new Set(items.flatMap((item) => config.getItemValues(item)));
    return config.options.filter((value) => present.has(value));
  });
}

export function toggleFacetValue(
  facets: FacetSelection,
  key: keyof FacetSelection,
  value: string,
): FacetSelection {
  const selected: readonly string[] = facets[key];
  const next = selected.includes(value)
    ? selected.filter((entry) => entry !== value)
    : [...selected, value];
  return { ...facets, [key]: next } as FacetSelection;
}

export type FacetOptionGroup = {
  key: keyof FacetSelection;
  param: string;
  title: string;
  options: { value: string; selected: boolean }[];
};

export function listFacetOptions(
  selection: FacetSelection,
  availableFacets: FacetSelection,
): FacetOptionGroup[] {
  const groups = FACET_KEYS.map((key) =>
    toOptionGroup(key, { selected: selection[key], available: availableFacets[key] }),
  );
  return groups.filter((group) => group.options.length > 0);
}

type FacetValues = {
  selected: readonly string[];
  available: readonly string[];
};

function toOptionGroup(
  key: keyof FacetSelection,
  { selected, available }: FacetValues,
): FacetOptionGroup {
  const { param, title, options: allValues } = FACETS[key];
  const isSelected = (value: string) => selected.includes(value);
  // A selected value absent from the data stays listed so it can be unchecked.
  const isOffered = (value: string) => available.includes(value) || isSelected(value);
  const offered = allValues.filter(isOffered);
  const options = offered.map((value) => ({ value, selected: isSelected(value) }));
  return { key, param, title, options };
}
