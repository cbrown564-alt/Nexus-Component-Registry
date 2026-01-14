import type { PlaygroundTheme } from '../playgroundThemes'

export const concierge: PlaygroundTheme = {
    id: 'concierge',
    name: 'Concierge',
    description: 'Luxury hospitality and high-end service portal',
    mode: 'dark',
    colors: {
        background: '#09090b', // Void Black
        foreground: '#f4f4f5', // Zinc 100
        card: '#18181b',       // Zinc 900
        cardForeground: '#f4f4f5',
        primary: '#cda45e',    // Gold Leaf
        primaryForeground: '#09090b',
        secondary: '#27272a',  // Zinc 800
        secondaryForeground: '#f4f4f5',
        muted: '#27272a',
        mutedForeground: '#a1a1aa', // Zinc 400
        accent: '#f3e5b5',     // Champagne
        accentForeground: '#09090b',
        border: '#3f3f46',     // Zinc 700 (subtle, not gold)
        ring: '#cda45e',
    },
    radius: 'none', // Geometric / Sharp
    shadow: 'lg',
    typography: {
        fontFamily: '"DM Sans", sans-serif',
        headingWeight: 500,
        bodyWeight: 400,
        letterSpacing: '0.02em',
    },
}
