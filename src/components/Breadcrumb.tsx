import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  currentTitle: string
  parentTitle?: string
  parentTo?: string
  backTo?: string
  backLabel?: string
}

export function Breadcrumb({
  currentTitle,
  parentTitle,
  parentTo,
  backTo = '/',
  backLabel = 'Back to Home',
}: BreadcrumbProps): ReactElement {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-8 pb-4 border-b border-[#292D2A]/10">
      <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-[#292D2A]/60 flex-wrap">
        <Link
          to="/"
          className="hover:text-[#1A3C29] font-medium transition-colors"
        >
          Home
        </Link>
        <span className="text-[#C3A66B] font-bold" aria-hidden="true">&rsaquo;</span>
        {parentTitle && parentTo && (
          <>
            <Link
              to={parentTo}
              className="hover:text-[#1A3C29] font-medium transition-colors"
            >
              {parentTitle}
            </Link>
            <span className="text-[#C3A66B] font-bold" aria-hidden="true">&rsaquo;</span>
          </>
        )}
        <span className="text-[#1A3C29] font-bold" aria-current="page">
          {currentTitle}
        </span>
      </nav>

      <Link
        to={backTo}
        className="inline-flex items-center gap-1.5 font-bold text-[#1A3C29] hover:text-[#C3A66B] transition-colors"
      >
        <span aria-hidden="true">&larr;</span>
        <span>{backLabel}</span>
      </Link>
    </div>
  )
}
