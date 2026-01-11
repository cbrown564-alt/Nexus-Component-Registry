import { PlaygroundTheme } from '../playgroundThemes'

export const festival: PlaygroundTheme = {
    id: 'festival',
    name: 'Festival',
    description: 'Vibrant music festival aesthetics',
    mode: 'dark',
    colors: {
        background: '#0a0a0a', // Dark background
        foreground: '#ffffff',
        card: '#1a1a1a', // Dark card
        cardForeground: '#ffffff',
        primary: '#d946ef', // Fuchsia-500
        primaryForeground: '#ffffff',
        secondary: '#8b5cf6', // Violet-500
        secondaryForeground: '#ffffff',
        muted: '#27272a',
        mutedForeground: '#a1a1aa',
        accent: '#f43f5e', // Rose-500
        accentForeground: '#ffffff',
        border: '#27272a',
        ring: '#d946ef',
    },
    radius: 'xl', // Rounded friendly
    shadow: 'glow', // Neon glow
    typography: {
        fontFamily: '"Outfit", system-ui, sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0.02em',
    },
}
