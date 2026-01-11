import { PlaygroundTheme } from './types';

export const emeraldTier: PlaygroundTheme = {
    id: 'emerald_tier',
    name: 'Emerald Tier',
    description: 'Professional fintech dark mode with emerald and orange accents',
    mode: 'dark',
    colors: {
        background: '#09090b', // Zinc-950
        foreground: '#fafafa',
        card: '#18181b', // Zinc-900
        cardForeground: '#fafafa',
        primary: '#10b981', // Emerald-500 (Restoring "Green")
        primaryForeground: '#ffffff',
        secondary: '#27272a', // Zinc-800
        secondaryForeground: '#a1a1aa',
        muted: '#27272a',
        mutedForeground: '#71717a',
        accent: '#f97316', // Orange-500 (Restoring "Orange")
        accentForeground: '#ffffff',
        border: '#27272a', // Zinc-800 (Subtle grey, preventing "stark white")
        ring: '#10b981',
    },
    radius: 'md',
    shadow: 'sm',
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
