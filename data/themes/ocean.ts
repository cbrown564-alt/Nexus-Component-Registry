import { PlaygroundTheme } from './types';

export const ocean: PlaygroundTheme = {
    id: 'ocean',
    name: 'Ocean',
    description: 'Cool white with blue depth',
    mode: 'light',
    colors: {
        background: '#f0f9ff',
        foreground: '#0c4a6e',
        card: '#ffffff',
        cardForeground: '#0c4a6e',
        primary: '#0284c7',
        primaryForeground: '#ffffff',
        secondary: '#e0f2fe',
        secondaryForeground: '#075985',
        muted: '#e0f2fe',
        mutedForeground: '#0369a1',
        accent: '#38bdf8',
        accentForeground: '#0c4a6e',
        border: '#bae6fd',
        ring: '#0284c7',
    },
    radius: 'md',
    shadow: 'md',
    typography: {
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        headingWeight: 700,
        bodyWeight: 500,
        letterSpacing: '-0.02em',
    },
}
