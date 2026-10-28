import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function PublicFooter(): ReactElement {
  return (
    <footer className="bg-[#1A3C29] text-[#F5F1E8] border-t-2 border-[#C3A66B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Identity & Motto */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5F1E8] text-[#1A3C29] font-serif font-bold text-sm flex items-center justify-center border border-[#C3A66B]">
                NSS
              </div>
              <h3 className="text-xl font-bold font-serif text-[#F5F1E8]">
                NSS VIIT (A)
              </h3>
            </div>
            <p className="text-[#C3A66B] font-serif text-sm italic font-semibold">
              &ldquo;NOT ME, BUT YOU&rdquo;
            </p>
            <p className="text-xs text-[#F5F1E8]/80 leading-relaxed">
              Official digital platform of the National Service Scheme Unit and MY Bharat Youth Cell at Vignan's Institute of Information Technology (Autonomous), Duvvada, Visakhapatnam.
            </p>
          </div>

          {/* Institutional Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#F5F1E8]/80">
              <li>
                <Link to="/about" className="hover:text-[#C3A66B] transition-colors">About NSS VIIT (A)</Link>
              </li>
              <li>
                <Link to="/my-bharat" className="hover:text-[#C3A66B] transition-colors">MY Bharat Youth Cell</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#C3A66B] transition-colors">Events & Activities</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#C3A66B] transition-colors">Our Team (28 Members)</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#C3A66B] transition-colors">Guidelines & Resources</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C3A66B] transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-[#C3A66B] transition-colors">Volunteer Induction</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C3A66B] transition-colors">Contact Secretariat</Link>
              </li>
            </ul>
          </div>

          {/* Operational Boundaries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Governance & Policies
            </h4>
            <ul className="space-y-2 text-xs text-[#F5F1E8]/80">
              <li>Autonomous Unit Governance</li>
              <li>Privacy-First Volunteer Protection</li>
              <li>Zero Double-Counting Service Hours</li>
              <li>Pre-Approved Media & Consent Policy</li>
              <li>Closed Development Mode Active</li>
              <li className="pt-1 text-[#C3A66B]/90 font-medium">No SAC Integration (Strict Exclusion)</li>
            </ul>
          </div>

          {/* Campus Location & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
              Campus Location
            </h4>
            <div className="text-xs text-[#F5F1E8]/80 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-[#F5F1E8]">
                Vignan's Institute of Information Technology (A)
              </p>
              <p>Beside VSEZ, Vadlapudi Post, Duvvada</p>
              <p>Visakhapatnam, Andhra Pradesh — 530049</p>
              <p className="pt-2 text-[#C3A66B]">
                Email: <span className="text-[#F5F1E8]">nss@vignaniit.edu.in</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#F5F1E8]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F1E8]/60 gap-4">
          <p>
            &copy; {new Date().getFullYear()} NSS VIIT (A). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Primary Identity: NSS VIIT (A)</span>
            <span>&bull;</span>
            <span>Integrated MY Bharat Initiative</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
