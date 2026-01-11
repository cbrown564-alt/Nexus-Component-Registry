import { PlaygroundTheme } from './types';

export const food: PlaygroundTheme = {
    id: 'food',
    name: 'Crave',
    description: 'Appetizing culinary presentation',
    mode: 'dark',
    colors: {
        background: '#0c0a09', // Stone-950
        foreground: '#e7e5e4', // Stone-200
        card: '#1c1917', // Stone-900
        cardForeground: '#e7e5e4',
        primary: '#f97316', // Orange-500
        primaryForeground: '#ffffff',
        secondary: '#292524', // Stone-800
        secondaryForeground: '#fafaf9', // Stone-50
        muted: '#292524',
        mutedForeground: '#a8a29e', // Stone-400
        accent: '#fbbf24', // Amber-400
        accentForeground: '#0c0a09',
        border: '#292524',
        ring: '#f97316',
    },
    radius: 'xl', // Rounded friendly shapes
    shadow: 'lg',
    typography: {
        fontFamily: '"DM Sans", sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
