import { PlaygroundTheme } from './types';

export const music: PlaygroundTheme = {
    id: 'music',
    name: 'Sonic',
    description: 'Immersive media experience',
    mode: 'dark',
    colors: {
        background: '#0a0a0a', // Deep black
        foreground: '#ffffff',
        card: '#171717', // Neutral-900
        cardForeground: '#ffffff',
        primary: '#1db954', // Brand Green (or could be distinct like Violet) - sticking to dashboard vibe (Indigo/Rose)
        // Actually, the dashboard uses rose-500 to violet-600 gradient. Let's pick a primary that fits.
        // Let's go with a rich Violet for primary action to match the "Sonic" vibe.
        primaryForeground: '#ffffff',
        secondary: '#262626', // Neutral-800
        secondaryForeground: '#e5e5e5',
        muted: '#171717',
        mutedForeground: '#a3a3a3', // Neutral-400
        accent: '#8b5cf6', // Violet-500
        accentForeground: '#ffffff',
        border: '#262626',
        ring: '#8b5cf6',
    },
    radius: 'md',
    shadow: 'lg',
    typography: {
        fontFamily: '"Inter", sans-serif', // Music apps often use clean sans
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '-0.02em',
    },
}
