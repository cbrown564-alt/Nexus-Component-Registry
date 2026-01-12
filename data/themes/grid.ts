import { PlaygroundTheme } from './types';

export const grid: PlaygroundTheme = {
    id: 'grid',
    name: 'Matrix',
    description: 'Strict grid alignment and data density',
    mode: 'dark',
    colors: {
        background: '#0f172a',      // slate-900 (dark blue)
        foreground: '#e2e8f0',      // slate-200
        card: 'rgba(15, 23, 42, 0.8)', // slate-900/80
        cardForeground: '#e2e8f0',
        primary: '#3b82f6',          // blue-500
        primaryForeground: '#ffffff',
        secondary: 'rgba(30, 58, 138, 0.3)', // blue-900/30
        secondaryForeground: '#bfdbfe', // blue-200
        muted: 'rgba(30, 58, 138, 0.2)', // blue-900/20
        mutedForeground: '#94a3b8',  // slate-400
        accent: '#60a5fa',           // blue-400
        accentForeground: '#ffffff',
        border: 'rgba(30, 58, 138, 0.5)', // blue-900/50
        ring: '#34d399',             // emerald-400 (status green)
    },
    radius: 'none',
    shadow: 'none',
    typography: {
        fontFamily: '"Geist Mono", "JetBrains Mono", monospace',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.02em',
    },
}

