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

/** Results per gallery page. */
const PAGE_SIZE = 6;

/** Query-string key shared by parsePageParam and PaginationBar's hrefs. */
export const PAGE_PARAM = "page";

export function parsePageParam(params: URLSearchParams): number {
  // Number() instead of parseInt() so trailing junk ("3abc") is invalid, not 3
  const parsed = Number(params.get(PAGE_PARAM) ?? "");
  return Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
}

export function getPaginationState<T>(
  items: T[],
  requestedPage: number,
): { pageItems: T[]; totalPages: number; currentPage: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  return { pageItems: items.slice(start, start + PAGE_SIZE), totalPages, currentPage };
}

/** Query-string key for the free-text search filter. */
export const QUERY_PARAM = "q";

export type FacetSelection = {
  themes: Theme[];
  hazards: Category[];
  contentTypes: ContentType[];
};

export const EMPTY_FACETS: FacetSelection = { themes: [], hazards: [], contentTypes: [] };

/** Everything the filter UI owns in the URL, as one parse/serialize unit. */
export type FilterState = {
  query: string;
  facets: FacetSelection;
};

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
 * parseFilters guarantees only canonical values enter.
 */
export const FACETS: Record<keyof FacetSelection, FacetConfig> = {
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

export const FACET_KEYS = Object.keys(FACETS) as (keyof FacetSelection)[];

export function parseFilters(params: URLSearchParams): FilterState {
  const facets = Object.fromEntries(
    FACET_KEYS.map((key) => [
      key,
      params.getAll(FACETS[key].param).filter((value) => FACETS[key].options.includes(value)),
    ]),
  ) as FacetSelection;
  return { query: params.get(QUERY_PARAM)?.trim() ?? "", facets };
}

export function matchesQuery(item: GalleryItem, query: string): boolean {
  const q = query.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) || (item.description?.toLowerCase().includes(q) ?? false)
  );
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

export function applyFilters(items: GalleryItem[], { query, facets }: FilterState): GalleryItem[] {
  return items.filter(
    (item) => (!query || matchesQuery(item, query)) && matchesFacets(item, facets),
  );
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

export function toggleValue<T>(list: readonly T[], value: T): T[] {
  return list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value];
}

/**
 * Href for the current location with the full filter state written: owned
 * params (query, facets, page) replaced, all other params preserved.
 */
export function buildFiltersUrl(
  currentParams: URLSearchParams,
  pathname: string,
  { query, facets }: FilterState,
): string {
  const params = new URLSearchParams(currentParams);
  const ownedParams = [QUERY_PARAM, PAGE_PARAM, ...FACET_KEYS.map((key) => FACETS[key].param)];
  for (const owned of ownedParams) {
    params.delete(owned);
  }
  if (query) {
    params.set(QUERY_PARAM, query);
  }
  for (const key of FACET_KEYS) {
    for (const value of facets[key]) {
      params.append(FACETS[key].param, value);
    }
  }
  const queryString = params.toString();
  return queryString ? `?${queryString}` : pathname;
}
