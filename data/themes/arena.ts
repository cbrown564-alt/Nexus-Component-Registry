import { PlaygroundTheme } from './types';

export const arena: PlaygroundTheme = {
    id: 'arena',
    name: 'Arena',
    description: 'Esports & Tournament Command Center',
    mode: 'dark',
    colors: {
        background: '#0f172a', // Slate-900 (Deep Blue/Grey)
        foreground: '#f8fafc', // Slate-50
        card: '#1e293b', // Slate-800
        cardForeground: '#f8fafc',
        primary: '#3b82f6', // Blue-500 (Electric Blue)
        primaryForeground: '#ffffff',
        secondary: '#8b5cf6', // Violet-500 (Gaming Purple)
        secondaryForeground: '#ffffff',
        muted: '#1e293b',
        mutedForeground: '#94a3b8',
        accent: '#f59e0b', // Amber-500 (Gold/Victory)
        accentForeground: '#000000',
        border: '#1e293b',
        ring: '#3b82f6',
    },
    radius: 'sm',
    shadow: 'lg',
    typography: {
        fontFamily: '"Chakra Petch", sans-serif', // Sci-fi/Gaming aesthetic (fallback to sans)
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '0.05em',
    },
}
