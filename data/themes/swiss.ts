import { PlaygroundTheme } from '../playgroundThemes'

export const swiss: PlaygroundTheme = {
    id: 'swiss',
    name: 'Swiss',
    description: 'International Typographic Style',
    mode: 'light',
    colors: {
        background: '#F5F5F5', // Off-white/Gray-100
        foreground: '#000000',
        card: '#ffffff',
        cardForeground: '#000000',
        primary: '#DC2626', // Red-600
        primaryForeground: '#ffffff',
        secondary: '#f0f0f0', // Very light gray for grids
        secondaryForeground: '#000000',
        muted: '#f0f0f0',
        mutedForeground: '#737373', // Neutral-500
        accent: '#DC2626',
        accentForeground: '#ffffff',
        border: '#000000',
        ring: '#DC2626',
    },
    radius: 'none',
    shadow: 'none',
    typography: {
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
