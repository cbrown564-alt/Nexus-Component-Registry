import { PlaygroundTheme } from './types';

export const kitchen: PlaygroundTheme = {
    id: 'kitchen',
    name: 'Mise',
    description: 'Clean functional utility',
    mode: 'light',
    colors: {
        background: '#F7F5F2', // Warm light gray/beige
        foreground: '#1c1917', // Stone-900
        card: '#ffffff',
        cardForeground: '#1c1917',
        primary: '#f97316', // Orange-500 (Consistent with Food but potentially fresher)
        primaryForeground: '#ffffff',
        secondary: '#e7e5e4', // Stone-200
        secondaryForeground: '#1c1917',
        muted: '#f5f5f4', // Stone-100
        mutedForeground: '#78716c', // Stone-500
        accent: '#10b981', // Emerald-500 for status/freshness
        accentForeground: '#ffffff',
        border: '#e7e5e4',
        ring: '#f97316',
    },
    radius: 'lg',
    shadow: 'sm',
    typography: {
        fontFamily: '"Domine", serif', // Serif for recipes often feels more "cookbook" like
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
