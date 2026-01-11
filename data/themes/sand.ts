import { PlaygroundTheme } from './types';

export const sand: PlaygroundTheme = {
    id: 'sand',
    name: 'Sand',
    description: 'Warm cream with terracotta warmth',
    mode: 'light',
    colors: {
        background: '#fef7ed',
        foreground: '#431407',
        card: '#fffbf5',
        cardForeground: '#431407',
        primary: '#c2410c',
        primaryForeground: '#ffffff',
        secondary: '#fed7aa',
        secondaryForeground: '#9a3412',
        muted: '#ffedd5',
        mutedForeground: '#c2410c',
        accent: '#fb923c',
        accentForeground: '#431407',
        border: '#fdba74',
        ring: '#c2410c',
    },
    radius: 'xl',
    shadow: 'lg',
    typography: {
        fontFamily: '"Sora", system-ui, sans-serif',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
