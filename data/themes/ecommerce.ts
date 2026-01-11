import { PlaygroundTheme } from './types';

export const ecommerce: PlaygroundTheme = {
    id: 'ecommerce',
    name: 'Storefront',
    description: 'Clean, product-focused retail interface',
    mode: 'light',
    colors: {
        background: '#ffffff',
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
    radius: 'none', // Sharp for modern retail
    shadow: 'sm',
    typography: {
        fontFamily: '"Inter", sans-serif',
        headingWeight: 500,
        bodyWeight: 400,
        letterSpacing: '0.02em',
    },
}
