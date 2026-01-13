import { PlaygroundTheme } from './types';

export const saas: PlaygroundTheme = {
    id: 'saas',
    name: 'B2B SaaS',
    description: 'Clean, trustworthy enterprise software interface',
    mode: 'dark',
    colors: {
        background: '#020617', // Slate-950
        foreground: '#e2e8f0', // Slate-200
        card: '#0f172a', // Slate-900
        cardForeground: '#e2e8f0', // Slate-200
        primary: '#6366f1', // Indigo-500
        primaryForeground: '#ffffff',
        secondary: '#1e293b', // Slate-800
        secondaryForeground: '#f8fafc', // Slate-50
        muted: '#1e293b', // Slate-800
        mutedForeground: '#94a3b8', // Slate-400
        accent: '#1e293b', // Slate-800
        accentForeground: '#f8fafc', // Slate-50
        border: 'rgba(30, 41, 59, 0.2)', // Slate-800 with 20% opacity
        ring: '#6366f1', // Indigo-500
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
