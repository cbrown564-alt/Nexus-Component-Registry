import { PlaygroundTheme } from './types';

export const kids: PlaygroundTheme = {
    id: 'kids',
    name: 'Play',
    description: 'Playful and vibrant interface',
    mode: 'light',
    colors: {
        background: '#7dd3fc', // Sky-300
        foreground: '#0f172a', // Slate-900
        card: '#ffffff',
        cardForeground: '#0f172a',
        primary: '#fbbf24', // Amber-400 (Star/Gold)
        primaryForeground: '#000000',
        secondary: '#f0f9ff', // Sky-50
        secondaryForeground: '#0284c7', // Sky-600
        muted: '#e0f2fe', // Sky-100
        mutedForeground: '#0369a1', // Sky-700
        accent: '#f472b6', // Pink-400
        accentForeground: '#ffffff',
        border: '#ffffff', // White borders are common in this design
        ring: '#fbbf24',
    },
    radius: 'full', // Very rounded
    shadow: 'xl',
    typography: {
        fontFamily: '"Comic Neue", "Comic Sans MS", sans-serif', // Playful font
        headingWeight: 900,
        bodyWeight: 600,
        letterSpacing: '0.05em',
    },
}
