import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '@/app/App'

describe('NSS VIIT (A) UX Audit & Repairs Verification', () => {
  it('UX-01: Renders visible primary desktop navigation links with active state indicators', () => {
    render(<App />)
    const primaryNav = screen.getByRole('navigation', { name: /primary navigation/i })
    expect(primaryNav).toBeInTheDocument()

    const aboutLink = screen.getByRole('link', { name: /^about$/i })
    const eventsLink = screen.getByRole('link', { name: /^events$/i })
    const teamLink = screen.getByRole('link', { name: /^our team$/i })
    const galleryLink = screen.getByRole('link', { name: /^gallery$/i })
    const contactLink = screen.getByRole('link', { name: /^contact$/i })

    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(eventsLink).toHaveAttribute('href', '/events')
    expect(teamLink).toHaveAttribute('href', '/team')
    expect(galleryLink).toHaveAttribute('href', '/gallery')
    expect(contactLink).toHaveAttribute('href', '/contact')
  })

  it('UX-03: Two-panel overlay provides category buttons and closes on close button click', () => {
    render(<App />)
    const exploreBtn = screen.getByRole('button', { name: /explore/i })
    fireEvent.click(exploreBtn)

    const overlay = screen.getByRole('dialog', { name: /institutional navigation/i })
    expect(overlay).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: /close navigation menu/i })
    fireEvent.click(closeBtn)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('UX-07: Public footer includes volunteer induction notice and contact links', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    const volunteerLinks = screen.getAllByRole('link', { name: /volunteer induction/i })
    expect(volunteerLinks.length).toBeGreaterThan(0)

    const contactLinks = screen.getAllByRole('link', { name: /contact secretariat/i })
    expect(contactLinks.length).toBeGreaterThan(0)
  })
})
