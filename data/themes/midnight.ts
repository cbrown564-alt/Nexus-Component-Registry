import { PlaygroundTheme } from './types';

export const midnight: PlaygroundTheme = {
    id: 'midnight',
    name: 'Midnight',
    description: 'Deep zinc with cool blue accents',
    mode: 'dark',
    colors: {
        background: '#09090b',
        foreground: '#fafafa',
        card: '#18181b',
        cardForeground: '#fafafa',
        primary: '#3b82f6',
        primaryForeground: '#ffffff',
        secondary: '#27272a',
        secondaryForeground: '#a1a1aa',
        muted: '#27272a',
        mutedForeground: '#71717a',
        accent: '#6366f1', // Indigo-500, distinct from primary Blue-500
        accentForeground: '#ffffff',
        border: '#27272a',
        ring: '#3b82f6',
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
