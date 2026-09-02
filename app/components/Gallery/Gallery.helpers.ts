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
/** Query-string keys for the facet filters; repeated for multi-value. */
export const THEME_PARAM = "theme";
export const HAZARD_PARAM = "hazard";
/** Kept as one word for compatibility with pre-existing ?contenttype= links. */
export const CONTENT_TYPE_PARAM = "contenttype";

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

const isTheme = (value: string): value is Theme => value in CONTENT_THEMES;
const isHazard = (value: string): value is Category => value in CONTENT_HAZARDS;
const isContentType = (value: string): value is ContentType => value in CONTENT_TYPES;

export function parseFilters(params: URLSearchParams): FilterState {
  return {
    query: params.get(QUERY_PARAM)?.trim() ?? "",
    facets: {
      themes: params.getAll(THEME_PARAM).filter(isTheme),
      hazards: params.getAll(HAZARD_PARAM).filter(isHazard),
      contentTypes: params.getAll(CONTENT_TYPE_PARAM).filter(isContentType),
    },
  };
}

export function matchesQuery(item: GalleryItem, query: string): boolean {
  const q = query.toLowerCase();
  return (
    item.title.toLowerCase().includes(q) || (item.description?.toLowerCase().includes(q) ?? false)
  );
}

/** OR within a facet, AND across facets; an item without the facet's field matches nothing. */
export function matchesFacets(item: GalleryItem, facets: FacetSelection): boolean {
  const themeOk =
    facets.themes.length === 0 || item.themes.some((theme) => facets.themes.includes(theme));
  const hazardOk =
    facets.hazards.length === 0 ||
    item.categories.some((category) => facets.hazards.includes(category));
  const contentTypeOk =
    facets.contentTypes.length === 0 || facets.contentTypes.includes(item.contentType);
  return themeOk && hazardOk && contentTypeOk;
}

export function applyFilters(items: GalleryItem[], { query, facets }: FilterState): GalleryItem[] {
  return items.filter(
    (item) => (!query || matchesQuery(item, query)) && matchesFacets(item, facets),
  );
}

/** Facet values occurring in at least one item; options absent from the data would filter nothing. */
export function collectAvailableFacets(items: GalleryItem[]): FacetSelection {
  const themes = new Set<Theme>();
  const hazards = new Set<Category>();
  const contentTypes = new Set<ContentType>();
  for (const item of items) {
    for (const theme of item.themes) {
      themes.add(theme);
    }
    for (const category of item.categories) {
      hazards.add(category);
    }
    contentTypes.add(item.contentType);
  }
  return { themes: [...themes], hazards: [...hazards], contentTypes: [...contentTypes] };
}

export function toggleValue<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value];
}

/**
 * Href for the current location with the full filter state written: owned
 * params (q/theme/hazard/contenttype) replaced, paging reset, all other
 * params preserved.
 */
export function buildFiltersUrl(
  currentParams: URLSearchParams,
  pathname: string,
  { query, facets }: FilterState,
): string {
  const params = new URLSearchParams(currentParams);
  for (const owned of [QUERY_PARAM, THEME_PARAM, HAZARD_PARAM, CONTENT_TYPE_PARAM, PAGE_PARAM]) {
    params.delete(owned);
  }
  if (query) {
    params.set(QUERY_PARAM, query);
  }
  for (const theme of facets.themes) {
    params.append(THEME_PARAM, theme);
  }
  for (const hazard of facets.hazards) {
    params.append(HAZARD_PARAM, hazard);
  }
  for (const contentType of facets.contentTypes) {
    params.append(CONTENT_TYPE_PARAM, contentType);
  }
  const queryString = params.toString();
  return queryString ? `?${queryString}` : pathname;
}
