import { PlaygroundTheme } from './types';

export const legal: PlaygroundTheme = {
    id: 'legal',
    name: 'Eagle',
    description: 'Serif-based, high-trust legal interface',
    mode: 'light',
    colors: {
        background: '#f8fafc', // Slate-50
        foreground: '#0f172a', // Slate-900
        card: '#ffffff',
        cardForeground: '#0f172a',
        primary: '#0f172a', // Slate-900
        primaryForeground: '#ffffff',
        secondary: '#e2e8f0', // Slate-200
        secondaryForeground: '#334155', // Slate-700
        muted: '#f1f5f9', // Slate-100
        mutedForeground: '#64748b', // Slate-500
        accent: '#cbd5e1', // Slate-300
        accentForeground: '#0f172a',
        border: '#e2e8f0', // Slate-200
        ring: '#0f172a',
    },
    radius: 'sm',
    shadow: 'sm',
    typography: {
        fontFamily: '"Merriweather", serif', // Serif for that legal feel
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0em',
    },
}
