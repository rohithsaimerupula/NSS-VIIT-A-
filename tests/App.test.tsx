import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/app/App'

describe('Application Shell Foundation (Phase 1)', () => {
  it('renders the brand title and institutional information correctly', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /NSS VIIT \(A\)/i })).toBeInTheDocument()
    expect(screen.getByText(/Vignan's Institute of Information Technology/i)).toBeInTheDocument()
  })

  it('renders the phase 1 development status indicator', () => {
    render(<App />)
    expect(screen.getByText(/Phase 1 Foundation — Development Build/i)).toBeInTheDocument()
    expect(screen.getByText(/Volunteer registration is disabled/i)).toBeInTheDocument()
  })
})
