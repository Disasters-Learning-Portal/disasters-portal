import { CONTENT_TYPES, type ContentType } from "@/app/site-config/types";
import { FACET_PARAMS, parseFacets, setFacetParams } from "./facets.helpers";
import type { FilterState } from "./filters.helpers";

export const QUERY_PARAM = "q";
export const CONTENT_TYPE_PARAM = "contenttype";
export const PAGE_PARAM = "page";
export const PRESERVED_PARAMS: readonly string[] = [
  QUERY_PARAM,
  CONTENT_TYPE_PARAM,
  PAGE_PARAM,
  ...FACET_PARAMS,
];

export function parseFilters(params: URLSearchParams): FilterState {
  return {
    query: params.get(QUERY_PARAM)?.trim() ?? "",
    contentType: parseContentType(params.get(CONTENT_TYPE_PARAM)),
    facets: parseFacets(params),
  };
}

/** Unknown values mean "no filter" so stale links fall back to the unfiltered gallery. */
function parseContentType(value: string | null): ContentType | null {
  return value !== null && value in CONTENT_TYPES ? (value as ContentType) : null;
}

export function parsePageParam(params: URLSearchParams): number {
  // Number() instead of parseInt() so trailing junk ("3abc") is invalid, not 3
  const parsed = Number(params.get(PAGE_PARAM) ?? "");
  return Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
}

/** Href built from gallery-owned params only, so tracking params don't leak into hrefs. */
function withParams(
  currentParams: URLSearchParams,
  pathname: string,
  adjust: (params: URLSearchParams) => void,
): string {
  const params = new URLSearchParams();
  for (const key of PRESERVED_PARAMS) {
    // getAll/append instead of get/set: facet params repeat (?theme=a&theme=b)
    for (const value of currentParams.getAll(key)) {
      params.append(key, value);
    }
  }
  adjust(params);
  const queryString = params.toString();
  return queryString ? `?${queryString}` : pathname;
}

/** Href with the query and facets written; a filter change always restarts on the first page. */
export function buildFiltersUrl(
  currentParams: URLSearchParams,
  pathname: string,
  { query, facets }: FilterState,
): string {
  return withParams(currentParams, pathname, (params) => {
    // an empty query removes the param entirely instead of leaving a dangling ?q=
    if (query) {
      params.set(QUERY_PARAM, query);
    } else {
      params.delete(QUERY_PARAM);
    }
    params.delete(PAGE_PARAM);
    setFacetParams(params, facets);
  });
}

/** Href for a page link. */
export function buildPageHref(
  currentParams: URLSearchParams,
  pathname: string,
  page: number,
): string {
  return withParams(currentParams, pathname, (params) => {
    if (page <= 1) {
      params.delete(PAGE_PARAM);
    } else {
      params.set(PAGE_PARAM, String(page));
    }
  });
}
