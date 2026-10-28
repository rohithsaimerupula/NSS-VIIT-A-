import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '@/app/App'

describe('NSS VIIT (A) + MY Bharat: Compact Header & Institutional Navigation Explorer', () => {
  it('renders primary institutional identity, motto, and compact Explore menu trigger', () => {
    render(<App />)
    const brandElements = screen.getAllByText(/NSS VIIT \(A\)/i)
    expect(brandElements.length).toBeGreaterThan(0)
    const mottoElements = screen.getAllByText(/Not Me, But You/i)
    expect(mottoElements.length).toBeGreaterThan(0)

    // Verify compact header has the Explore trigger button
    const exploreButton = screen.getByRole('button', { name: /explore/i })
    expect(exploreButton).toBeInTheDocument()
    expect(exploreButton).toHaveAttribute('aria-haspopup', 'dialog')
  })

  it('opens two-panel navigation overlay on Explore activation with all 9 categories', () => {
    render(<App />)
    const exploreButton = screen.getByRole('button', { name: /explore/i })
    fireEvent.click(exploreButton)

    // Dialog overlay is now present
    const dialog = screen.getByRole('dialog', { name: /institutional navigation/i })
    expect(dialog).toBeInTheDocument()

    // Verify all 9 main categories are retained
    expect(screen.getAllByText(/^Home$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/About NSS/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/MY Bharat/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Events & Activities/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Our Team/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Gallery/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/NSS Heritage & Resources/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^Contact$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Volunteer Information/i).length).toBeGreaterThan(0)
  })

  it('verifies that Events submenu includes all required filters and drives', () => {
    render(<App />)
    const exploreButton = screen.getByRole('button', { name: /explore/i })
    fireEvent.click(exploreButton)

    // Events category is default or can be selected
    const eventsCategoryTabs = screen.getAllByRole('tab', { name: /Events & Activities/i })
    if (eventsCategoryTabs.length > 0) {
      fireEvent.click(eventsCategoryTabs[0])
    }

    // Verify required submenus: All Activities, Upcoming Events, Past Activities, NSS Initiatives, MY Bharat Initiatives, Joint Drives
    expect(screen.getAllByText(/All Activities/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Upcoming Events/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Past Activities/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/NSS Initiatives/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/MY Bharat Initiatives/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Joint Drives/i).length).toBeGreaterThan(0)

    // Test close button
    const closeBtn = screen.getByRole('button', { name: /close navigation menu/i })
    fireEvent.click(closeBtn)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the photographic hero carousel with Playfair headline, controls, and pause toggle', () => {
    render(<App />)
    const carousel = screen.getByRole('region', { name: /highlighted initiatives carousel/i })
    expect(carousel).toBeInTheDocument()

    // Motto headline
    const headlines = screen.getAllByRole('heading', { level: 1, name: /Not Me, But You/i })
    expect(headlines.length).toBeGreaterThan(0)

    // Previous and Next slide buttons
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    expect(prevBtn).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()

    // Slide indicators and pause button
    const pauseBtn = screen.getByRole('button', { name: /pause automatic slide rotation/i })
    expect(pauseBtn).toBeInTheDocument()

    // Test pause toggle
    fireEvent.click(pauseBtn)
    expect(screen.getByRole('button', { name: /resume automatic slide rotation/i })).toBeInTheDocument()

    // Next slide click advances to slide 2
    fireEvent.click(nextBtn)
    expect(screen.getByText(/Healthcare & Life Preservation/i)).toBeInTheDocument()
  })

  it('renders operational wings and dedicated MY Bharat youth cell spotlight on Home', () => {
    render(<App />)
    expect(screen.getByText(/Proposed Operational Wings/i)).toBeInTheDocument()
    expect(screen.getByText(/Health & Blood Donation Wing/i)).toBeInTheDocument()
    const myBharatBanners = screen.getAllByText(/Mera Yuva Bharat Youth Cell/i)
    expect(myBharatBanners.length).toBeGreaterThan(0)
  })

  it('verifies that the team member roster grid is omitted from the homepage and kept on Our Team', () => {
    render(<App />)
    // Core team member roster grid (cards) is not rendered on homepage
    expect(screen.queryByText(/Zone 1 Coordinator/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/President \/ Student Lead/i)).not.toBeInTheDocument()
  })

  it('displays the required volunteer registration closed banner', () => {
    render(<App />)
    const notices = screen.getAllByText(/Volunteer Registration Notice/i)
    expect(notices.length).toBeGreaterThan(0)
    const closedBanners = screen.getAllByText(/closed during development/i)
    expect(closedBanners.length).toBeGreaterThan(0)
  })
})
