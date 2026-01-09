/**
 * Accessibility tests for playground components
 * Uses jest-axe to check for WCAG 2.1 violations
 */
import React from 'react'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Import playground components
import { PlaygroundButton } from '@/components/playground/PlaygroundButton'
import { PlaygroundToggle } from '@/components/playground/PlaygroundToggle'
import { PlaygroundInput } from '@/components/playground/PlaygroundInput'

// Mock theme for testing
const mockTheme = {
    id: 'test-theme',
    name: 'Test Theme',
    colors: {
        primary: '#3b82f6',
        primaryForeground: '#ffffff',
        secondary: '#f1f5f9',
        secondaryForeground: '#1e293b',
        accent: '#8b5cf6',
        accentForeground: '#ffffff',
        destructive: '#ef4444',
        destructiveForeground: '#ffffff',
        background: '#ffffff',
        foreground: '#0f172a',
        muted: '#f1f5f9',
        mutedForeground: '#64748b',
        border: '#e2e8f0',
        ring: '#3b82f6',
    },
    radius: 'md' as const,
    shadow: 'sm' as const,
    typography: {
        fontFamily: 'Inter, sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}

describe('Playground Components - Accessibility', () => {
    describe('PlaygroundButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(
                <PlaygroundButton theme={mockTheme}>
                    Click me
                </PlaygroundButton>
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })

        it('should have no violations with icon-only button when aria-label provided', async () => {
            const { container } = render(
                <PlaygroundButton theme={mockTheme} aria-label="Settings">
                    <svg aria-hidden="true" />
                </PlaygroundButton>
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })

        it('should properly indicate disabled state', async () => {
            const { container } = render(
                <PlaygroundButton theme={mockTheme} disabled>
                    Disabled
                </PlaygroundButton>
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })
    })

    describe('PlaygroundToggle', () => {
        it('should have no accessibility violations when unchecked', async () => {
            const { container } = render(
                <PlaygroundToggle
                    theme={mockTheme}
                    checked={false}
                    aria-label="Enable notifications"
                />
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })

        it('should have no accessibility violations when checked', async () => {
            const { container } = render(
                <PlaygroundToggle
                    theme={mockTheme}
                    checked={true}
                    aria-label="Enable notifications"
                />
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })

        it('should have proper role="switch" attribute', () => {
            const { getByRole } = render(
                <PlaygroundToggle
                    theme={mockTheme}
                    checked={false}
                    aria-label="Test toggle"
                />
            )
            expect(getByRole('switch')).toBeInTheDocument()
        })

        it('should be keyboard focusable', () => {
            const { getByRole } = render(
                <PlaygroundToggle
                    theme={mockTheme}
                    checked={false}
                    aria-label="Test toggle"
                />
            )
            expect(getByRole('switch')).toHaveAttribute('tabindex', '0')
        })
    })

    describe('PlaygroundInput', () => {
        it('should have no accessibility violations with placeholder', async () => {
            const { container } = render(
                <PlaygroundInput
                    theme={mockTheme}
                    placeholder="Enter your email"
                    aria-label="Email address"
                />
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })

        it('should have no violations when marked as required', async () => {
            const { container } = render(
                <PlaygroundInput
                    theme={mockTheme}
                    required
                    aria-label="Required field"
                />
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })

        it('should have no violations with invalid state', async () => {
            const { container } = render(
                <PlaygroundInput
                    theme={mockTheme}
                    aria-invalid={true}
                    aria-label="Field with error"
                />
            )
            const results = await axe(container)
            expect(results).toHaveNoViolations()
        })
    })
})
