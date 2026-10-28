import type { ReactElement, ReactNode } from 'react'
import { PublicNavbar } from '@/components/PublicNavbar'
import { PublicFooter } from '@/components/PublicFooter'

interface PublicLayoutProps {
  children: ReactNode
}

export function PublicLayout({ children }: PublicLayoutProps): ReactElement {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#292D2A] flex flex-col font-sans selection:bg-[#C3A66B]/30 selection:text-[#1A3C29]">
      <PublicNavbar />
      <main className="flex-1">
        {children}
      </main>
      <PublicFooter />
    </div>
  )
}
