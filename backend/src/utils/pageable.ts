export function pageable<T extends { limit?: any; page?: any }>(
  param: T
): Omit<T, 'limit' | 'page'> & { page: number; limit: number } {
  return {
    ...param,
    limit: param.limit ? Number(param.limit) : undefined,
    page: param.page ? Number(param.page) : undefined,
  };
}
