import { useState, useEffect, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BackButton } from '../components/ui/BackButton';
import { galleryItems } from '../config/contentConfig';
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice';
import type { GalleryItem } from '../types';
import { X } from 'lucide-react';
import { ClosedRegistrationBanner } from '../components/ClosedRegistrationBanner';

export function GalleryPage(): ReactElement {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.title = 'Photo Gallery & Documentary Archives | NSS VIIT (A)';
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeItem) {
        setActiveItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); };
  }, [activeItem]);

  return (
    <div className="py-16 bg-ivory-100 text-charcoal-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <BackButton onBack={() => { void navigate('/'); }} label="Back to Home" />
        </div>

        <SectionHeading
          eyebrow="Archival Repository"
          title="Documentary Photo Archive"
          subtitle="A visual testament to student field work, rural surveys, coastal agro-forestry, and health camps at VIIT Duvvada."
        />

        {/* Asymmetric Photo Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px] mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => { setActiveItem(item); }}
              className={`group relative overflow-hidden bg-white border border-ivory-300 hover:border-gold-500/80 hover:shadow-card transition-all duration-300 cursor-pointer shadow-xs ${item.spanClass}`}
            >
              <img
                src={item.imagePlaceholder.url}
                alt={item.imagePlaceholder.alt}
                className="w-full h-full object-cover filter saturate-90 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/25 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 bg-ivory-100/90 backdrop-blur-xs text-forest-950 border border-ivory-300 shadow-2xs">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-10 left-4 right-4">
                <h4 className="font-serif text-lg font-bold text-ivory-50 drop-shadow-xs">{item.title}</h4>
                <p className="text-xs text-ivory-200 line-clamp-2 font-normal">{item.caption}</p>
              </div>

              <div className="absolute bottom-2 left-2 right-2">
                <PlaceholderNotice label={item.imagePlaceholder.note} />
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Privacy & Verification */}
        <div className="mb-12">
          <ClosedRegistrationBanner />
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => { setActiveItem(null); }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white border border-ivory-300 max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => { e.stopPropagation(); }}
          >
            <div className="relative h-80 sm:h-96 w-full bg-black">
              <img
                src={activeItem.imagePlaceholder.url}
                alt={activeItem.imagePlaceholder.alt}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => { setActiveItem(null); }}
                className="absolute top-3 right-3 p-2 bg-charcoal-900/80 text-ivory-100 hover:text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-3 bg-white text-charcoal-900">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-ivory-200 text-forest-950 border border-ivory-300">
                {activeItem.category}
              </span>
              <h4 className="font-serif text-2xl font-bold text-forest-950">{activeItem.title}</h4>
              <p className="text-sm text-charcoal-700 leading-relaxed font-normal">{activeItem.caption}</p>
              <PlaceholderNotice label={activeItem.imagePlaceholder.note} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
