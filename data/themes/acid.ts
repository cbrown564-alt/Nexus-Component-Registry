import { PlaygroundTheme } from '../playgroundThemes'

export const acid: PlaygroundTheme = {
    id: 'acid',
    name: 'Acid',
    description: 'Glitch art and chaotic aesthetics',
    mode: 'light',
    colors: {
        background: '#E0E7FF', // Indigo-100
        foreground: '#000000',
        card: '#ffffff',
        cardForeground: '#000000',
        primary: '#ccff00', // Acid Lime
        primaryForeground: '#000000',
        secondary: '#ff00ff', // Magenta
        secondaryForeground: '#ffffff',
        muted: '#000000',
        mutedForeground: '#ffffff',
        accent: '#22d3ee', // Cyan-400
        accentForeground: '#000000',
        border: '#000000',
        ring: '#ccff00',
    },
    radius: 'none',
    shadow: 'none', // Custom shadow implementation often
    typography: {
        fontFamily: 'system-ui, sans-serif',
        headingWeight: 900,
        bodyWeight: 700,
        letterSpacing: '-0.05em',
    },
}
