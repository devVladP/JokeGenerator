export interface PaginatedResult<T> {
  pageItems: T[];
  totalPages: number;
}

export function paginate<T>(
  items: T[],
  currentPage: number,
  pageSize: number
): PaginatedResult<T> {
  const totalPages = Math.ceil(items.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageItems = items.slice(start, end);

  return {
    pageItems,
    totalPages,
  };
}
