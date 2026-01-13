import { PlaygroundTheme } from './types'

export const legalModern: PlaygroundTheme = {
    id: 'legal-modern',
    name: 'Legal Modern',
    description: 'Contemporary legal interface for tech-forward firms',
    mode: 'light',
    colors: {
        background: '#ffffff', // Crisper white
        foreground: '#0f172a', // Slate-900
        card: '#f8fafc', // Slate-50 cards
        cardForeground: '#0f172a',
        primary: '#2563eb', // Blue-600 - more modern/trustworthy tech blue
        primaryForeground: '#ffffff',
        secondary: '#f1f5f9', // Slate-100
        secondaryForeground: '#1e293b', // Slate-800
        muted: '#f8fafc', // Slate-50
        mutedForeground: '#64748b', // Slate-500
        accent: '#e0f2fe', // Sky-100
        accentForeground: '#0284c7', // Sky-600
        border: '#cbd5e1', // Slate-300
        ring: '#2563eb',
    },
    radius: 'md', // Modern rounded corners vs 'sm' in classic
    shadow: 'md',
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif', // Sans-serif for modern feel
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
