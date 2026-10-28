import { useState, useEffect, type ReactElement } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TeamCard } from '@/components/TeamCard'
import { Breadcrumb } from '@/components/Breadcrumb'
import { CORE_TEAM_STRUCTURE } from '@/lib/data'
import type { CoreTeamDesignation } from '@/types'

export function TeamPage(): ReactElement {
  const [searchParams] = useSearchParams()
  const [filter, setFilter] = useState<'all' | CoreTeamDesignation>('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.title = 'NSS Core Team (28 Members) | NSS VIIT (A)'
  }, [])

  useEffect(() => {
    const filterParam = searchParams.get('filter')
    if (filterParam === 'nss_wing' || filterParam === 'my_bharat_cell' || filterParam === 'all') {
      setFilter(filterParam)
    }
  }, [searchParams])

  const nssCount = CORE_TEAM_STRUCTURE.filter((m) => m.designation === 'nss_wing').length
  const bharatCount = CORE_TEAM_STRUCTURE.filter((m) => m.designation === 'my_bharat_cell').length
  const totalCount = CORE_TEAM_STRUCTURE.length

  const filteredMembers = CORE_TEAM_STRUCTURE.filter((member) => {
    const matchesFilter = filter === 'all' || member.designation === filter
    const matchesSearch =
      searchQuery.trim() === '' ||
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.roleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="Our Team (28 Members)" />

      {/* Editorial Header (IIT Patna Team Directory Style) */}
      <div className="border-b border-[#292D2A]/10 pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3C29]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Official Student Coordination Structure
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3C29] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          NSS Core Team ({totalCount} Members)
        </h1>

        <p className="text-sm sm:text-base text-[#292D2A]/80 max-w-3xl leading-relaxed">
          The complete executive student body of NSS VIIT (A). All 28 members are collectively designated as the NSS Core Team, comprised of <strong>{nssCount} NSS-designated coordinators</strong> and <strong>{bharatCount} MY Bharat-designated leads</strong>.
        </p>

        {/* Executive Summary Badges */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
          <span className="px-3.5 py-1.5 rounded-full bg-[#1A3C29] text-[#F5F1E8] font-bold">
            NSS Wing: {nssCount} Members
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#C3A66B] text-[#1A3C29] font-bold">
            MY Bharat Cell: {bharatCount} Members
          </span>
          <span className="text-[#292D2A]/60 italic font-medium">
            Governed by Sectional Separation of Concerns (PRD §3)
          </span>
        </div>
      </div>

      {/* Roster Integrity Banner */}
      <div className="p-5 rounded-2xl bg-white border-2 border-[#C3A66B] shadow-sm text-xs text-[#292D2A]/85 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-bold text-sm text-[#1A3C29]">
            Official Appointment Verification Notice
          </h2>
          <p className="leading-relaxed">
            The 28 positions shown below constitute the approved leadership framework for academic year 2025–26. Student names and portraits are awaiting official administrative sign-off; positions are represented with official roles and departments without fabricating student identities.
          </p>
        </div>
        <span className="shrink-0 px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-wider bg-[#F5F1E8] text-[#1A3C29] border border-[#292D2A]/15 text-center">
          28-Member Capacity Confirmed
        </span>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#292D2A]/10 shadow-sm">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => { setFilter('all'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filter === 'all'
                ? 'bg-[#1A3C29] text-[#F5F1E8]'
                : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
            }`}
          >
            All Core Team ({totalCount})
          </button>
          <button
            type="button"
            onClick={() => { setFilter('nss_wing'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filter === 'nss_wing'
                ? 'bg-[#1A3C29] text-[#F5F1E8]'
                : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
            }`}
          >
            NSS Wing ({nssCount})
          </button>
          <button
            type="button"
            onClick={() => { setFilter('my_bharat_cell'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              filter === 'my_bharat_cell'
                ? 'bg-[#C3A66B] text-[#1A3C29]'
                : 'text-[#292D2A]/70 hover:bg-[#C3A66B]/20 hover:text-[#1A3C29]'
            }`}
          >
            MY Bharat Cell ({bharatCount})
          </button>
        </div>

        {/* Search */}
        <div className="relative min-w-[260px]">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); }}
            placeholder="Search by role title or department..."
            className="w-full pl-3 pr-8 py-2 rounded-xl border border-[#292D2A]/15 text-xs text-[#292D2A] bg-[#F5F1E8]/50 focus:outline-none focus:ring-2 focus:ring-[#1A3C29] focus:bg-white transition-all"
            aria-label="Search core team roster"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => { setSearchQuery(''); }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#292D2A]/50 hover:text-[#292D2A]"
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>
      </div>

      {/* Team Roster Grid (28 Cards Total) */}
      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-dashed border-[#292D2A]/20 p-12 text-center space-y-3">
          <p className="font-serif text-lg font-bold text-[#1A3C29]">
            No team coordinators match your search
          </p>
          <p className="text-xs text-[#292D2A]/60 max-w-sm mx-auto">
            Try resetting your search query or switching designation tabs.
          </p>
          <button
            type="button"
            onClick={() => { setFilter('all'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#1A3C29] text-[#F5F1E8]"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}
