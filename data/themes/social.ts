import { PlaygroundTheme } from './types';

export const social: PlaygroundTheme = {
    id: 'social',
    name: 'Stream',
    description: 'Dynamic social feed aesthetic',
    mode: 'dark',
    colors: {
        background: '#09090b', // Zinc-950
        foreground: '#e4e4e7', // Zinc-200
        card: '#18181b', // Zinc-900
        cardForeground: '#e4e4e7',
        primary: '#0ea5e9', // Sky-500
        primaryForeground: '#ffffff',
        secondary: '#27272a', // Zinc-800
        secondaryForeground: '#fafafa',
        muted: '#27272a', // Zinc-800
        mutedForeground: '#71717a', // Zinc-500
        accent: '#0ea5e9',
        accentForeground: '#ffffff',
        border: '#27272a', // Zinc-800
        ring: '#0ea5e9',
    },
    radius: 'lg', // Friendly curves
    shadow: 'none',
    typography: {
        fontFamily: '"Inter", sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
