import { PlaygroundTheme } from './types';

export const nomad: PlaygroundTheme = {
    id: 'nomad',
    name: 'Nomad',
    description: 'Eco-travel journal & itinerary',
    mode: 'light',
    colors: {
        background: '#f5f5f0', // Stone-100/Warm Paper
        foreground: '#292524', // Stone-800
        card: '#ffffff',
        cardForeground: '#292524',
        primary: '#4d7c0f', // Lime-700 (Moss)
        primaryForeground: '#ffffff',
        secondary: '#e7e5e4', // Stone-200
        secondaryForeground: '#44403c',
        muted: '#d6d3d1', // Stone-300
        mutedForeground: '#78716c',
        accent: '#b45309', // Amber-700 (Clay)
        accentForeground: '#ffffff',
        border: '#d6d3d1',
        ring: '#4d7c0f',
    },
    radius: 'lg', // Soft, organic feel (we'll override with specific 'blob' shapes in components)
    shadow: 'sm',
    typography: {
        fontFamily: '"Domine", "Georgia", serif', // Editorial/Bookish
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0em',
    },
}
