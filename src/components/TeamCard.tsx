import type { ReactElement } from 'react'
import type { TeamMember } from '@/lib/data'

interface TeamCardProps {
  member: TeamMember
}

export function TeamCard({ member }: TeamCardProps): ReactElement {
  const isNSS = member.designation === 'nss_wing'

  return (
    <div className="bg-white rounded-xl border border-[#292D2A]/10 p-5 flex flex-col justify-between hover-lift">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider ${
              isNSS
                ? 'bg-[#1A3C29]/10 text-[#1A3C29] border border-[#1A3C29]/20'
                : 'bg-[#C3A66B]/20 text-[#1A3C29] border border-[#C3A66B]/50'
            }`}
          >
            {isNSS ? 'NSS Wing' : 'MY Bharat Cell'}
          </span>
          <span className="text-[11px] font-medium text-[#292D2A]/60">
            {member.academicYear}
          </span>
        </div>

        <div className="w-14 h-14 rounded-full bg-[#F5F1E8] border-2 border-[#C3A66B] flex items-center justify-center text-[#1A3C29] font-serif font-bold text-lg mb-3 shadow-inner">
          {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
        </div>

        <h4 className="text-base font-bold text-[#1A3C29] leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
          {member.name}
        </h4>
        <p className="text-xs font-semibold text-[#C3A66B] mt-0.5">
          {member.roleTitle}
        </p>

        <p className="text-xs text-[#292D2A]/70 mt-2 border-t border-[#292D2A]/5 pt-2">
          Dept: <span className="font-medium text-[#292D2A]">{member.department}</span>
        </p>
      </div>

      {member.isPlaceholder && (
        <p className="text-[10px] italic text-[#292D2A]/50 mt-3 pt-2 border-t border-dashed border-[#292D2A]/10">
          Official member profile awaiting college sign-off
        </p>
      )}
    </div>
  )
}
