import { useEffect, type ReactElement } from 'react'
import { Breadcrumb } from '@/components/Breadcrumb'
import { PUBLIC_RESOURCES } from '@/lib/data'

export function ResourcesPage(): ReactElement {
  useEffect(() => {
    document.title = 'Heritage & Official Resources | NSS VIIT (A)'
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="Heritage & Resources" />

      {/* ── 1. Page Header (IIT Patna Style Resource Hub) ────────────── */}
      <div className="border-b border-[#292D2A]/10 pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3C29]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Official Guidelines, Handbooks & Anthem
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3C29] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Heritage & Resources
        </h1>

        <p className="text-base sm:text-lg text-[#292D2A]/80 max-w-4xl leading-relaxed">
          The official repository of verified National Service Scheme doctrine, Ministry guidelines, the Konark Wheel symbolism, and approved campus circulars for NSS VIIT (A) and the MY Bharat Cell.
        </p>
      </div>

      {/* ── 2. Official National Pledge & Anthem (IIT Patna Heritage Pattern) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-10 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#292D2A]/10 pb-3">
            <h2 className="text-2xl font-bold font-serif text-[#1A3C29]">
              The National NSS Pledge
            </h2>
            <span className="text-[11px] font-bold text-[#C3A66B] uppercase tracking-wider">
              Solemn Commitment
            </span>
          </div>

          <div className="bg-[#F5F1E8] p-6 rounded-2xl border-l-4 border-[#1A3C29] space-y-3 font-serif text-xs sm:text-sm text-[#292D2A]/90 leading-relaxed italic">
            <p>
              &ldquo;We, the volunteers of the National Service Scheme, solemnly pledge that we will be ever ready for the service of the nation.&rdquo;
            </p>
            <p>
              &ldquo;We will perform community service selflessly without distinction of caste, creed, religion, or language. We shall uphold dignity of manual labor and strive for democratic equality.&rdquo;
            </p>
            <p className="font-bold not-italic text-[#1A3C29]">
              &ldquo;NOT ME, BUT YOU&rdquo;
            </p>
          </div>
          <p className="text-xs text-[#292D2A]/60">
            Administered at all official inductions and institutional commemorative observances.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-10 space-y-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#292D2A]/10 pb-3">
            <h2 className="text-2xl font-bold font-serif text-[#1A3C29]">
              NSS Anthem Philosophy
            </h2>
            <span className="text-[11px] font-bold text-[#C3A66B] uppercase tracking-wider">
              National Ethos
            </span>
          </div>

          <div className="bg-[#F5F1E8] p-6 rounded-2xl border-l-4 border-[#C3A66B] space-y-3 font-serif text-xs sm:text-sm text-[#292D2A]/90 leading-relaxed italic">
            <p>
              &ldquo;Uthe Samaj Ke Liye Uthe, Jage Swarashtra Ke Liye Jage...&rdquo;
            </p>
            <p>
              The official NSS song embodies the awakening of national consciousness through constructive youth labor, village upliftment, and solidarity with the marginalized.
            </p>
          </div>
          <p className="text-xs text-[#292D2A]/60">
            Sung at morning assemblies during special rural camps and state youth festivals.
          </p>
        </div>
      </div>

      {/* ── 3. Official Downloadable Publications (IIT Patna Resource Table) ── */}
      <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-12 shadow-sm space-y-8">
        <div className="border-b border-[#292D2A]/10 pb-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Official Publications Catalogue
          </span>
          <h2 className="text-3xl font-bold font-serif text-[#1A3C29]">
            Manuals, Circulars & Handbooks
          </h2>
          <div className="p-3.5 rounded-xl bg-[#C3A66B]/15 border border-[#C3A66B]/40 text-xs text-[#1A3C29] flex items-start gap-2.5 mt-2">
            <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C3A66B]/30 shrink-0">
              Notice
            </span>
            <p className="leading-relaxed">
              The entries below represent the approved institutional publication catalogue. Downloadable PDF files will be linked once the Programme Officer verifies and uploads final authenticated copies to object storage.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#292D2A]/10">
          {PUBLIC_RESOURCES.map((res) => (
            <div
              key={res.id}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F5F1E8]/30 px-4 rounded-2xl transition-colors"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#1A3C29]/10 text-[#1A3C29] border border-[#1A3C29]/20">
                    {res.category}
                  </span>
                  <span className="text-xs text-[#292D2A]/60 font-mono">
                    {res.fileType} &bull; {res.fileSize}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1A3C29]">
                  {res.title}
                </h3>
                <p className="text-xs text-[#292D2A]/75 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-4">
                <span className="text-xs text-[#292D2A]/50 font-medium">
                  {res.publishedDate}
                </span>
                <button
                  type="button"
                  disabled
                  title="Document upload pending administrative sign-off"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#1A3C29]/15 text-[#1A3C29]/70 border border-[#1A3C29]/20 cursor-not-allowed"
                >
                  Download (Pending Upload)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Konark Wheel Ideological Breakdown ─────────────────────── */}
      <div className="bg-[#1A3C29] text-[#F5F1E8] rounded-3xl p-8 sm:p-12 border-2 border-[#C3A66B] shadow-xl space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#F5F1E8]">
          The Symbol of the Konark Sun Chariot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#F5F1E8]/85 leading-relaxed">
          <p>
            The Konark Wheel portrays the cycle of creation, preservation, and release. It signifies movement in life through time and space. The design implies continuous endeavor for social change and youth progress.
          </p>
          <p>
            The red color in the badge indicates that the volunteer is full of young blood that is lively, active, energetic, and full of high spirit. The navy blue color indicates the cosmos of which the NSS is tiny part, ready to contribute its share for the welfare of mankind.
          </p>
        </div>
      </div>
    </div>
  )
}
