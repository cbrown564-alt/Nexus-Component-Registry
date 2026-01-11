import { PlaygroundTheme } from './types';

export const productivity: PlaygroundTheme = {
    id: 'productivity',
    name: 'Flow',
    description: 'Minimalist focus-oriented workspace',
    mode: 'light',
    colors: {
        background: '#fafaf9', // Stone-50
        foreground: '#1c1917', // Stone-900
        card: '#ffffff',
        cardForeground: '#1c1917',
        primary: '#ea580c', // Orange-600
        primaryForeground: '#ffffff',
        secondary: '#f5f5f4', // Stone-100
        secondaryForeground: '#44403c', // Stone-700
        muted: '#e7e5e4', // Stone-200
        mutedForeground: '#78716c', // Stone-500
        accent: '#fdba74', // Orange-300
        accentForeground: '#1c1917',
        border: '#d6d3d1', // Stone-300
        ring: '#ea580c',
    },
    radius: 'md',
    shadow: 'sm',
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
