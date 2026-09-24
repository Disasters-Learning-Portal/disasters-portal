const DEFAULT_PAGE_SIZE = 6;

export function getPaginationState<T>(
  items: T[],
  requestedPage: number,
  pageSize: number = DEFAULT_PAGE_SIZE,
): { pageItems: T[]; totalPages: number; currentPage: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (currentPage - 1) * pageSize;
  return { pageItems: items.slice(start, start + pageSize), totalPages, currentPage };
}
