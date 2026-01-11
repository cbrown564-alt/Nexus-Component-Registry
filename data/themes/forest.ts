import { PlaygroundTheme } from './types';

export const forest: PlaygroundTheme = {
    id: 'forest',
    name: 'Forest',
    description: 'Deep green-black with emerald accents',
    mode: 'dark',
    colors: {
        background: '#022c22',
        foreground: '#ecfdf5',
        card: '#064e3b',
        cardForeground: '#ecfdf5',
        primary: '#10b981',
        primaryForeground: '#022c22',
        secondary: '#065f46',
        secondaryForeground: '#a7f3d0',
        muted: '#065f46',
        mutedForeground: '#6ee7b7',
        accent: '#34d399',
        accentForeground: '#022c22',
        border: '#047857',
        ring: '#10b981',
    },
    radius: 'lg',
    shadow: 'sm',
    typography: {
        fontFamily: '"DM Sans", system-ui, sans-serif',
        headingWeight: 600,
        bodyWeight: 400,
        letterSpacing: '0',
    },
}
