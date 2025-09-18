export interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function getPaginationProps(
  currentPage: number,
  totalItems: number,
  itemsPerPage: number,
  baseUrl: string
): PaginationProps {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  
  return {
    currentPage,
    totalPages,
    baseUrl,
  }
}

export function getPaginationPages(currentPage: number, totalPages: number): number[] {
  const delta = 2
  const range = []
  const rangeWithDots = []

  for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
    range.push(i)
  }

  if (currentPage - delta > 2) {
    rangeWithDots.push(1, -1) // -1 represents ellipsis
  } else {
    rangeWithDots.push(1)
  }

  rangeWithDots.push(...range)

  if (currentPage + delta < totalPages - 1) {
    rangeWithDots.push(-1, totalPages) // -1 represents ellipsis
  } else if (totalPages > 1) {
    rangeWithDots.push(totalPages)
  }

  return rangeWithDots
}

export function getPageUrl(baseUrl: string, page: number): string {
  if (page === 1) {
    return baseUrl
  }
  return `${baseUrl}/${page}`
}
