/**
 * NSS VIIT (A) — Application Shell
 *
 * Phase 1: Minimal shell only.
 * - No routing yet (added in Phase 2/3).
 * - No authentication context yet (added in Phase 3).
 * - No business logic yet.
 *
 * This component confirms the build pipeline, CSS tokens and React
 * are wired correctly before page or feature development begins.
 */
import type { ReactElement } from 'react'

export default function App(): ReactElement {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#292D2A] flex flex-col items-center justify-center p-8">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Brand identity */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            NSS VIIT (A)
          </h1>
          <p className="text-[#C3A66B] text-sm font-medium tracking-widest uppercase">
            National Service Scheme
          </p>
          <p className="text-sm text-[#292D2A]/70">
            Vignan&apos;s Institute of Information Technology (Autonomous), Visakhapatnam
          </p>
        </div>

        {/* Palette confirmation strip */}
        <div className="flex rounded-lg overflow-hidden h-10 w-full border border-[#292D2A]/10" aria-hidden="true">
          <div className="flex-1 bg-[#F5F1E8]" title="Ivory #F5F1E8" />
          <div className="flex-1 bg-[#1A3C29]" title="Forest #1A3C29" />
          <div className="flex-1 bg-[#C3A66B]" title="Gold #C3A66B" />
          <div className="flex-1 bg-[#292D2A]" title="Charcoal #292D2A" />
          <div className="flex-1 bg-white border-l border-[#292D2A]/10" title="White #FFFFFF" />
        </div>

        {/* Development status notice */}
        <div className="bg-[#1A3C29] text-[#F5F1E8] rounded-lg p-4 text-sm text-left space-y-1">
          <p className="font-semibold">Phase 1 Foundation — Development Build</p>
          <p className="opacity-80 text-xs">
            This shell confirms the build pipeline is operational. No public
            pages, authentication or business features are implemented yet.
          </p>
          <p className="opacity-80 text-xs">
            Volunteer registration is disabled and will remain closed until
            authorized. (PRD §6.1)
          </p>
        </div>
      </div>
    </div>
  )
}
