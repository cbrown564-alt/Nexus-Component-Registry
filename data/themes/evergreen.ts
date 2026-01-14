import type { PlaygroundTheme } from '../playgroundThemes'

export const evergreen: PlaygroundTheme = {
    id: 'evergreen',
    name: 'Evergreen',
    description: 'Deep Ecology impact tracker and sustainability dashboard',
    mode: 'light',
    colors: {
        background: '#fdfcf8', // Limestone / Rich Cream
        foreground: '#1a2e1a', // Very Dark Green (almost black)
        card: '#ffffff',
        cardForeground: '#1a2e1a',
        primary: '#064e3b',    // Deep Emerald / Forest
        primaryForeground: '#ffffff',
        secondary: '#dfae7e',  // Warm Soil / Sandstone
        secondaryForeground: '#1a2e1a',
        muted: '#e8e4d9',
        mutedForeground: '#8f9e8a', // Muted Moss
        accent: '#fbbf24',     // Golden Hour / Amber
        accentForeground: '#1a2e1a',
        border: '#c3bca8',     // Stone
        ring: '#064e3b',
    },
    radius: 'xl', // Large organic radius
    shadow: 'md',
    typography: {
        fontFamily: '"Nunito", "Inter", sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
