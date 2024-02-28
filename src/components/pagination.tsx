import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  currentPage: number
  totalPages: number
  perPage: number
  onPageChange: (currentPage: number) => Promise<void> | void
}

export function Pagination({
  currentPage,
  perPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalPages / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalPages} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {currentPage} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage === 0}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= currentPage + 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button
            onClick={() => onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= currentPage + 1}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
