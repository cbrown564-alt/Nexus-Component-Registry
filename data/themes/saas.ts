import { PlaygroundTheme } from './types';

export const saas: PlaygroundTheme = {
    id: 'saas',
    name: 'B2B SaaS',
    description: 'Clean, trustworthy enterprise software interface',
    mode: 'light',
    colors: {
        background: '#f8fafc', // Slate-50
        foreground: '#0f172a', // Slate-900
        card: '#ffffff',
        cardForeground: '#0f172a',
        primary: '#6366f1', // Indigo-500
        primaryForeground: '#ffffff',
        secondary: '#f1f5f9', // Slate-100
        secondaryForeground: '#475569', // Slate-600
        muted: '#f1f5f9',
        mutedForeground: '#64748b', // Slate-500
        accent: '#818cf8', // Indigo-400
        accentForeground: '#ffffff',
        border: '#e2e8f0', // Slate-200
        ring: '#6366f1',
    },
    radius: 'sm',
    shadow: 'sm',
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
