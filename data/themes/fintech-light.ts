import { PlaygroundTheme } from './types';

export const fintechLight: PlaygroundTheme = {
    id: 'fintech-light',
    name: 'Fintech Light',
    description: 'Professional financial interface with light background',
    mode: 'light',
    colors: {
        background: '#f8fafc',      // Slate-50, slightly cooler than pure white
        foreground: '#0f172a',      // Slate-900, good contrast on light
        card: '#ffffff',            // White cards
        cardForeground: '#0f172a',  // Slate-900
        primary: '#059669',         // Emerald-600 (slightly darker for light mode contrast)
        primaryForeground: '#ffffff',
        secondary: '#f1f5f9',       // Slate-100
        secondaryForeground: '#334155', // Slate-700
        muted: '#e2e8f0',           // Slate-200
        mutedForeground: '#475569', // Slate-600 (darker for better visibility)
        accent: '#ea580c',          // Orange-600 (darker for light mode)
        accentForeground: '#ffffff',
        border: '#cbd5e1',          // Slate-300 (more visible borders)
        ring: '#059669',
    },
    radius: 'md',
    shadow: 'md', // Slightly more shadow for light mode depth
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
