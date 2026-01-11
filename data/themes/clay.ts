import { PlaygroundTheme } from '../playgroundThemes'

export const clay: PlaygroundTheme = {
    id: 'clay',
    name: 'Clay',
    description: 'Soft 3D pastel aesthetics',
    mode: 'light',
    colors: {
        background: '#e0e5ec', // Light Gray-Blue
        foreground: '#4b5563', // Gray-600
        card: '#e0e5ec', // Same as bg for neumorphic effect
        cardForeground: '#4b5563',
        primary: '#f87171', // Red-400 (Pastel)
        primaryForeground: '#ffffff',
        secondary: '#60a5fa', // Blue-400 (Pastel)
        secondaryForeground: '#ffffff',
        muted: '#d1d5db',
        mutedForeground: '#9ca3af',
        accent: '#34d399', // Emerald-400 (Pastel)
        accentForeground: '#ffffff',
        border: '#d1d5db',
        ring: '#f87171',
    },
    radius: 'xl', // Closest to 2xl
    shadow: 'lg', // Closest to xl
    typography: {
        fontFamily: '"Nunito", system-ui, sans-serif',
        headingWeight: 800,
        bodyWeight: 600,
        letterSpacing: '0.05em',
    },
}
