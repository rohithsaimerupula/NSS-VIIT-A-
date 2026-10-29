import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Globe, ExternalLink, Shield } from 'lucide-react'
import { siteConfig } from '../config/siteConfig'
import { footerLinks } from '../config/navigation'

export function PublicFooter(): ReactElement {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-forest-950 text-ivory-100 border-t-2 border-gold-500/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Identity & Motto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white rounded-full shrink-0">
                <img
                  src={siteConfig.logos.nss}
                  alt="NSS Crest"
                  className="w-10 h-10 object-contain"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-ivory-50 tracking-tight">
                  NSS VIIT (A)
                </h3>
                <p className="text-[11px] text-gold-400 font-semibold tracking-wider uppercase">
                  Not Me, But You
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-normal">
              National Service Scheme at Vignan's Institute of Information Technology brings student engineering minds into active service for rural welfare, ecological conservation, and civic duty.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <img
                src={siteConfig.logos.viit}
                alt="VIIT"
                className="h-6 w-auto object-contain brightness-110"
              />
              <span className="text-forest-700">•</span>
              <img
                src={siteConfig.logos.myBharat}
                alt="My Bharat"
                className="h-5 w-auto object-contain brightness-110"
              />
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-gold-400 border-b border-forest-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-ivory-300 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/volunteer"
                  className="text-ivory-300 hover:text-gold-300 transition-colors"
                >
                  Volunteer Induction
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-ivory-300 hover:text-gold-300 transition-colors"
                >
                  Contact Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Public Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-gold-400 border-b border-forest-800 pb-2">
              Public & National Portals
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.externalPortals.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory-300 hover:text-gold-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-gold-500/70" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2 text-xs">
              <span className="text-[11px] font-semibold text-ivory-400 uppercase tracking-wider block mb-1">
                Official Socials
              </span>
              <span className="text-ivory-400/80 text-[11px] italic">
                Instagram handle: Pending official notification
              </span>
            </div>
          </div>

          {/* Institutional Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-wider text-gold-400 border-b border-forest-800 pb-2">
              Institutional Contact
            </h4>
            <div className="space-y-2.5 text-xs text-ivory-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <p className="font-semibold text-ivory-100">{siteConfig.institution.fullName}</p>
                  <p className="text-ivory-300">{siteConfig.institution.addressLine1}</p>
                  <p className="text-ivory-300">{siteConfig.institution.addressLine2}</p>
                  <p className="text-ivory-300">
                    {siteConfig.institution.city}, {siteConfig.institution.state} – {siteConfig.institution.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Globe className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a
                  href={siteConfig.institution.officialWebsiteUrl || 'https://vignaniit.edu.in'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory-200 hover:text-gold-300 underline"
                >
                  vignaniit.edu.in
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="text-ivory-300">nss@vignaniit.edu.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Clean Copyright & Identity Strip */}
        <div className="mt-12 pt-6 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ivory-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-gold-500 shrink-0" />
            <p>© {currentYear} NSS VIIT (A) • Vignan's Institute of Information Technology (Autonomous) • Affiliated to JNTUGV, Vizianagaram</p>
          </div>
          <div className="flex items-center gap-4 text-ivory-400">
            <span>Primary Identity: NSS VIIT (A)</span>
            <span>•</span>
            <span>Integrated MY Bharat Youth Cell</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
