import { PlaygroundTheme } from './types';

export const fintech: PlaygroundTheme = {
    id: 'fintech',
    name: 'Fintech',
    description: 'Professional financial data visualization',
    mode: 'dark',
    colors: {
        background: '#09090b', // Zinc-950
        foreground: '#fafafa', // Zinc-50
        card: '#18181b', // Zinc-900
        cardForeground: '#fafafa',
        primary: '#10b981', // Emerald-500
        primaryForeground: '#ffffff',
        secondary: '#27272a', // Zinc-800
        secondaryForeground: '#a1a1aa',
        muted: '#27272a',
        mutedForeground: '#a1a1aa',
        accent: '#f97316', // Orange-500
        accentForeground: '#ffffff',
        border: '#27272a',
        ring: '#10b981',
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
