import type { PlaygroundTheme } from '../playgroundThemes'

export const paradox: PlaygroundTheme = {
    id: 'paradox',
    name: 'Paradox',
    description: 'System failure and glitch art aesthetic',
    mode: 'light',
    colors: {
        background: '#e5e5e5', // Static Grey / Windows 95
        foreground: '#000000', // Black
        card: '#ffffff',
        cardForeground: '#000000',
        primary: '#ff0000',    // Error Red
        primaryForeground: '#ffffff',
        secondary: '#0000ff',  // BSOD Blue
        secondaryForeground: '#ffffff',
        muted: '#a3a3a3',      // Grey
        mutedForeground: '#525252',
        accent: '#00ff00',     // Terminal Green
        accentForeground: '#000000',
        border: '#000000',     // Brutalist Black
        ring: '#ff0000',
    },
    radius: 'none', // Strict geometric
    shadow: 'none',
    typography: {
        fontFamily: '"Courier New", Courier, monospace',
        headingWeight: 900,
        bodyWeight: 500,
        letterSpacing: '0',
    },
}

