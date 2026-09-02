/** "?query-string" for the given params, or the bare pathname when they are empty. */
export function toHref(params: URLSearchParams, pathname: string): string {
  const queryString = params.toString();
  return queryString ? `?${queryString}` : pathname;
}
