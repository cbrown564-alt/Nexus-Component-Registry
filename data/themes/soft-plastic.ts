import { PlaygroundTheme } from '../playgroundThemes'

export const softPlastic: PlaygroundTheme = {
    id: 'soft-plastic',
    name: 'Soft Plastic',
    description: 'Sleek, high-tech soft touch interface',
    mode: 'light',
    colors: {
        background: '#EFEEEE', // Light Gray
        foreground: '#475569', // Slate-600
        card: '#EFEEEE', // Same as bg for neumorphic effect
        cardForeground: '#334155', // Slate-700
        primary: '#3b82f6', // Blue-500
        primaryForeground: '#ffffff',
        secondary: '#c084fc', // Purple-400
        secondaryForeground: '#ffffff',
        muted: '#cbd5e1', // Slate-300
        mutedForeground: '#94a3b8', // Slate-400
        accent: '#22c55e', // Green-500
        accentForeground: '#ffffff',
        border: '#d1d9e6', // Shadow Dark
        ring: '#3b82f6',
    },
    radius: 'xl', // Rounded
    shadow: 'lg', // Soft shadows
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif',
        headingWeight: 900,
        bodyWeight: 500,
        letterSpacing: '0.02em',
    },
}
