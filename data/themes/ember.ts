import { PlaygroundTheme } from './types';

export const ember: PlaygroundTheme = {
    id: 'ember',
    name: 'Ember',
    description: 'Warm charcoal with orange glow',
    mode: 'dark',
    colors: {
        background: '#1c1917',
        foreground: '#fafaf9',
        card: '#292524',
        cardForeground: '#fafaf9',
        primary: '#f97316',
        primaryForeground: '#ffffff',
        secondary: '#44403c',
        secondaryForeground: '#d6d3d1',
        muted: '#44403c',
        mutedForeground: '#a8a29e',
        accent: '#fb923c',
        accentForeground: '#1c1917',
        border: '#44403c',
        ring: '#f97316',
    },
    radius: 'lg',
    shadow: 'md',
    typography: {
        fontFamily: '"Outfit", system-ui, sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
