import { useState, useEffect, type ReactElement } from 'react'
import { InitiativeBadge } from '@/components/InitiativeBadge'
import { Breadcrumb } from '@/components/Breadcrumb'
import { GALLERY_ALBUMS } from '@/lib/data'
import type { EventInitiative } from '@/types'

export function GalleryPage(): ReactElement {
  const [filter, setFilter] = useState<'all' | EventInitiative>('all')
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Photo Gallery & Documentary Archives | NSS VIIT (A)'
  }, [])

  // Keyboard Escape key dismissal for album viewer dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedAlbumId) {
        setSelectedAlbumId(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => { window.removeEventListener('keydown', handleKeyDown); }
  }, [selectedAlbumId])

  const filteredAlbums = GALLERY_ALBUMS.filter((alb) => {
    if (filter === 'all') return true
    return alb.initiative === filter
  })

  const selectedAlbum = GALLERY_ALBUMS.find((a) => a.id === selectedAlbumId)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="Photo Gallery" />

      {/* Header (IIT Patna Event Gallery Style) */}
      <div className="border-b border-[#292D2A]/10 pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3C29]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Archived Photographic Records
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3C29] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Photo Gallery
        </h1>

        <p className="text-sm sm:text-base text-[#292D2A]/80 max-w-3xl leading-relaxed">
          Archived visual records of field camps, health outreach, and youth skill clinics. In accordance with PRD §8 (Media Consent & Privacy), actual high-resolution media will be displayed following student consent verification and Programme Officer clearance.
        </p>

        {/* Staging Notice Banner */}
        <div className="p-4 rounded-2xl bg-[#C3A66B]/15 border border-[#C3A66B]/40 text-xs text-[#1A3C29] flex items-start gap-3">
          <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C3A66B]/30 shrink-0 mt-0.5">
            Archival Demonstration
          </span>
          <p className="leading-relaxed">
            Album entries and photo tallies below represent structured staging categories. Media files and consented photographs will be made accessible in the public directory upon administrative authorization.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-[#292D2A]/10 pb-3 flex-wrap">
        <button
          type="button"
          onClick={() => { setFilter('all'); }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            filter === 'all'
              ? 'bg-[#1A3C29] text-[#F5F1E8]'
              : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
          }`}
        >
          All Albums ({GALLERY_ALBUMS.length})
        </button>
        <button
          type="button"
          onClick={() => { setFilter('nss'); }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            filter === 'nss'
              ? 'bg-[#1A3C29] text-[#F5F1E8]'
              : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
          }`}
        >
          NSS Field Camps
        </button>
        <button
          type="button"
          onClick={() => { setFilter('my_bharat'); }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            filter === 'my_bharat'
              ? 'bg-[#C3A66B] text-[#1A3C29]'
              : 'text-[#292D2A]/70 hover:bg-[#C3A66B]/20 hover:text-[#1A3C29]'
          }`}
        >
          MY Bharat Workshops
        </button>
        <button
          type="button"
          onClick={() => { setFilter('joint'); }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            filter === 'joint'
              ? 'bg-[#1A3C29] text-[#C3A66B] border border-[#C3A66B]'
              : 'text-[#292D2A]/70 hover:bg-[#1A3C29]/10 hover:text-[#1A3C29]'
          }`}
        >
          Joint Observances
        </button>
      </div>

      {/* Album Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredAlbums.map((album) => (
          <article
            key={album.id}
            className="bg-white rounded-3xl border border-[#292D2A]/10 overflow-hidden shadow-sm hover:border-[#C3A66B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Cover Hero Representation */}
            <div
              className="h-52 p-8 flex flex-col justify-between text-[#F5F1E8] relative overflow-hidden"
              style={{ backgroundColor: album.coverAccent }}
            >
              <div className="flex items-center justify-between">
                <InitiativeBadge initiative={album.initiative} size="sm" />
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20">
                  {album.itemCount} Media Items (Staging)
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-[#C3A66B] uppercase tracking-wider font-semibold">
                  Session {album.year} &bull; {album.eventDate}
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#F5F1E8]">
                  {album.title}
                </h3>
              </div>
            </div>

            {/* Content & Tags */}
            <div className="p-7 space-y-5">
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                {album.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {album.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F5F1E8] text-[#292D2A]/70 border border-[#292D2A]/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#292D2A]/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => { setSelectedAlbumId(album.id); }}
                  className="text-xs font-bold text-[#1A3C29] hover:text-[#C3A66B] inline-flex items-center gap-1 transition-colors"
                >
                  View Album Details &rarr;
                </button>
                <span className="text-[11px] text-[#292D2A]/50">
                  Awaiting Media Release
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Album Preview Modal (Accessible Dialog) */}
      {selectedAlbum && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="album-modal-title"
          className="fixed inset-0 z-50 bg-[#292D2A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => { setSelectedAlbumId(null); }}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-8 space-y-6 shadow-2xl relative border-2 border-[#C3A66B]"
            onClick={(e) => { e.stopPropagation(); }}
          >
            <div className="flex items-center justify-between border-b border-[#292D2A]/10 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C3A66B] block">
                  Archival Event Record
                </span>
                <h3 id="album-modal-title" className="text-2xl font-bold font-serif text-[#1A3C29]">
                  {selectedAlbum.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => { setSelectedAlbumId(null); }}
                className="p-1.5 rounded-lg text-[#292D2A] hover:bg-[#F5F1E8] focus:outline-none focus:ring-2 focus:ring-[#1A3C29]"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              <p>{selectedAlbum.description}</p>
              <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#292D2A]/10 space-y-2 text-xs">
                <p>
                  <strong>Staging Media Item Count:</strong> {selectedAlbum.itemCount} Items
                </p>
                <p>
                  <strong>Session Tag:</strong> {selectedAlbum.eventDate}
                </p>
                <p>
                  <strong>Compliance & Release Policy:</strong> In accordance with PRD §8 (Media Consent & Privacy), actual high-resolution media will be published once individual student consent is recorded and approved by the Programme Officer.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => { setSelectedAlbumId(null); }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1A3C29] text-[#F5F1E8]"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
