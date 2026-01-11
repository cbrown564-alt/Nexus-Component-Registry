import { PlaygroundTheme } from './types';

export const magazine: PlaygroundTheme = {
    id: 'magazine',
    name: 'The Edit',
    description: 'Editorial elegance with high contrast',
    mode: 'light',
    colors: {
        background: '#fdfbf7', // Warm off-white paper
        foreground: '#171717', // Neutral-900
        card: '#ffffff',
        cardForeground: '#171717',
        primary: '#171717', // Black
        primaryForeground: '#ffffff',
        secondary: '#f5f5f5', // Neutral-100
        secondaryForeground: '#171717',
        muted: '#e5e5e5', // Neutral-200
        mutedForeground: '#737373', // Neutral-500
        accent: '#171717',
        accentForeground: '#ffffff',
        border: '#e5e5e5',
        ring: '#171717',
    },
    radius: 'none', // Sharp corners for editorial look
    shadow: 'none',
    typography: {
        fontFamily: '"Playfair Display", serif',
        headingWeight: 500,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
