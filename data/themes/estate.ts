import { PlaygroundTheme } from './types';

export const estate: PlaygroundTheme = {
    id: 'estate',
    name: 'Estate',
    description: 'Luxury real estate listings & portfolio',
    mode: 'light',
    colors: {
        background: '#fcfafa', // Warm Alabaster
        foreground: '#1c1917', // Stone-900
        card: '#ffffff',
        cardForeground: '#1c1917',
        primary: '#b45309', // Amber-700 (Bronze/Gold)
        primaryForeground: '#ffffff',
        secondary: '#f5f5f4', // Stone-100
        secondaryForeground: '#44403c', // Stone-700
        muted: '#e7e5e4', // Stone-200
        mutedForeground: '#78716c', // Stone-500
        accent: '#f59e0b', // Amber-500
        accentForeground: '#ffffff',
        border: '#e7e5e4',
        ring: '#b45309',
    },
    radius: 'none', // Sharp corners for images, elegant
    shadow: 'sm', // subtle elevation
    typography: {
        fontFamily: '"Playfair Display", "Times New Roman", serif', // Luxury serif
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
