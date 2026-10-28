import type { ReactElement } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { ScrollToTop } from '@/components/ScrollToTop'
import {
  HomePage,
  AboutPage,
  MyBharatPage,
  EventsPage,
  EventDetailPage,
  TeamPage,
  GalleryPage,
  ResourcesPage,
  ContactPage,
  VolunteerInfoPage,
} from '@/pages'

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PublicLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/my-bharat" element={<MyBharatPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/volunteer" element={<VolunteerInfoPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  )
}
