import type { ReactElement } from 'react'
import type { EventInitiative } from '@/types'

interface InitiativeBadgeProps {
  initiative: EventInitiative
  size?: 'sm' | 'md'
}

export function InitiativeBadge({ initiative, size = 'md' }: InitiativeBadgeProps): ReactElement {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs'

  switch (initiative) {
    case 'nss':
      return (
        <span
          className={`inline-flex items-center font-semibold rounded-full border border-[#1A3C29]/30 bg-[#1A3C29]/10 text-[#1A3C29] ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A3C29] mr-1.5" aria-hidden="true" />
          NSS Activity
        </span>
      )
    case 'my_bharat':
      return (
        <span
          className={`inline-flex items-center font-semibold rounded-full border border-[#C3A66B]/50 bg-[#C3A66B]/15 text-[#1A3C29] ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C3A66B] mr-1.5" aria-hidden="true" />
          MY Bharat Initiative
        </span>
      )
    case 'joint':
      return (
        <span
          className={`inline-flex items-center font-semibold rounded-full border border-[#C3A66B] bg-[#1A3C29] text-[#F5F1E8] ${sizeClasses}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C3A66B] mr-1.5" aria-hidden="true" />
          Joint NSS + MY Bharat
        </span>
      )
  }
}
