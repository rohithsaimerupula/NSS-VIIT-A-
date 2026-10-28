import { useState, useEffect, type ReactElement, type SyntheticEvent } from 'react'
import { Breadcrumb } from '@/components/Breadcrumb'

export function ContactPage(): ReactElement {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    document.title = 'Contact NSS Secretariat & Cell Office | NSS VIIT (A)'
  }, [])

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <Breadcrumb currentTitle="Contact Secretariat" />

      {/* ── 1. Page Header (IIT Patna Contact Layout) ────────────────── */}
      <div className="border-b border-[#292D2A]/10 pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1A3C29]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#C3A66B]">
            Official Communication & Secretariat
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3C29] leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Contact NSS VIIT (A)
        </h1>

        <p className="text-base sm:text-lg text-[#292D2A]/80 max-w-3xl leading-relaxed">
          Submit official institutional inquiries, village collaboration proposals, or volunteer queries to the National Service Scheme Secretariat and MY Bharat Youth Cell at VIIT (A).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ── 2. Official Inquiry Form ─────────────────────────────────── */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-[#292D2A]/10 p-8 sm:p-12 shadow-sm space-y-6">
          {submitted ? (
            <div className="py-16 text-center space-y-5" role="status">
              <div className="w-14 h-14 rounded-full bg-[#1A3C29]/10 text-[#1A3C29] flex items-center justify-center font-bold text-2xl mx-auto">
                &#10003;
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1A3C29]">
                Message Recorded (Pre-Launch Staging)
              </h2>
              <p className="text-xs sm:text-sm text-[#292D2A]/75 max-w-md mx-auto leading-relaxed">
                Thank you for your message. Your input has been validated and recorded in local staging mode. Live email dispatch and backend integration remain inactive during pre-launch development. For urgent official correspondence, please contact us directly at <strong className="text-[#1A3C29]">nss@vignaniit.edu.in</strong> or visit the campus office.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', department: '', subject: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1A3C29] text-[#F5F1E8] hover:bg-[#1A3C29]/90 transition-colors"
              >
                Submit Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#292D2A]/10 pb-3">
                <h2 className="text-2xl font-bold font-serif text-[#1A3C29]">
                  Send a Direct Message
                </h2>
                <p className="text-xs text-[#292D2A]/60 mt-1">
                  All fields marked with an asterisk (<span className="text-red-600">*</span>) are mandatory.
                </p>
                <div className="mt-2.5 p-3 rounded-xl bg-[#C3A66B]/15 border border-[#C3A66B]/30 text-xs text-[#1A3C29]">
                  <strong>Pre-Launch Staging Notice:</strong> Submissions are validated locally. Live email delivery to the Secretariat will activate upon backend launch.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-[#1A3C29]">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); }}
                    placeholder="Enter student or visitor name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#292D2A]/15 text-xs text-[#292D2A] focus:outline-none focus:ring-2 focus:ring-[#1A3C29] bg-[#F5F1E8]/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-[#1A3C29]">
                    Official / Personal Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }); }}
                    placeholder="name@vignaniit.edu.in"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#292D2A]/15 text-xs text-[#292D2A] focus:outline-none focus:ring-2 focus:ring-[#1A3C29] bg-[#F5F1E8]/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-[#1A3C29]">
                  Inquiry Topic <span className="text-red-600">*</span>
                </label>
                <input
                  id="subject"
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => { setFormData({ ...formData, subject: e.target.value }); }}
                  placeholder="e.g., Blood Drive Collaboration, Rural Camp Query, Induction Question"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#292D2A]/15 text-xs text-[#292D2A] focus:outline-none focus:ring-2 focus:ring-[#1A3C29] bg-[#F5F1E8]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-[#1A3C29]">
                  Detailed Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => { setFormData({ ...formData, message: e.target.value }); }}
                  placeholder="Provide complete details regarding your inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#292D2A]/15 text-xs text-[#292D2A] focus:outline-none focus:ring-2 focus:ring-[#1A3C29] bg-[#F5F1E8]/30"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1A3C29] text-[#F5F1E8] hover:bg-[#1A3C29]/90 border border-[#C3A66B] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#1A3C29]"
              >
                Submit Inquiry (Staging Mode)
              </button>
            </form>
          )}
        </div>

        {/* ── 3. Institutional Secretariat Contact Info ───────────────── */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-[#292D2A]/10 p-7 shadow-sm space-y-4">
            <h3 className="font-bold text-lg font-serif text-[#1A3C29] border-b border-[#292D2A]/10 pb-3">
              Campus Secretariat
            </h3>
            <div className="text-xs text-[#292D2A]/80 space-y-2.5 leading-relaxed">
              <p className="font-bold text-[#1A3C29]">
                National Service Scheme (NSS) Unit
              </p>
              <p>Vignan's Institute of Information Technology (Autonomous)</p>
              <p>Beside VSEZ, Vadlapudi Post, Duvvada</p>
              <p>Visakhapatnam, Andhra Pradesh — 530049</p>

              <div className="pt-3 border-t border-[#292D2A]/10 space-y-2">
                <p>
                  <strong className="text-[#1A3C29]">Official Email:</strong><br />
                  <span className="text-[#1A3C29] font-mono">nss@vignaniit.edu.in</span>{' '}
                  <span className="text-[10px] text-[#292D2A]/50 block sm:inline">(Awaiting formal mailbox setup confirmation)</span>
                </p>
                <p>
                  <strong className="text-[#1A3C29]">Hours of Operation:</strong><br />
                  09:00 AM – 04:30 PM (Mon – Sat)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A3C29] text-[#F5F1E8] rounded-3xl p-7 border-2 border-[#C3A66B] shadow-lg space-y-3">
            <h4 className="font-bold text-sm text-[#C3A66B] uppercase tracking-wider">
              Volunteer Data Privacy
            </h4>
            <p className="text-xs leading-relaxed text-[#F5F1E8]/85">
              Personal attendance records, volunteer service-hour logs, and sensitive reports are maintained with strict privacy. Individual records are never disclosed to third parties without college authorization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
