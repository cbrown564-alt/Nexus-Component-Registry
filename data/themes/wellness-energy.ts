import { PlaygroundTheme } from './types'

export const wellnessEnergy: PlaygroundTheme = {
    id: 'wellness-energy',
    name: 'Energy',
    description: 'Vibrant, active wellness with teal and lime',
    mode: 'light',
    colors: {
        background: '#f0fdf4', // Green-50
        foreground: '#064e3b', // Emerald-900
        card: '#ffffff',
        cardForeground: '#064e3b',
        primary: '#10b981', // Emerald-500
        primaryForeground: '#ffffff',
        secondary: '#dcfce7', // Emerald-100
        secondaryForeground: '#166534', // Emerald-800
        muted: '#f0fdf4', // Green-50
        mutedForeground: '#15803d', // Green-700
        accent: '#34d399', // Emerald-400
        accentForeground: '#022c22',
        border: '#86efac', // Green-300
        ring: '#10b981',
    },
    radius: 'lg',
    shadow: 'sm',
    typography: {
        fontFamily: '"Outfit", system-ui, sans-serif', // More active/modern than serif
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '0em',
    },
}
