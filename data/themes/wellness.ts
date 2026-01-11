import { PlaygroundTheme } from './types';

export const wellness: PlaygroundTheme = {
    id: 'wellness',
    name: 'Nature Distilled',
    description: 'Biophilic, organic, and calming',
    mode: 'light',
    colors: {
        background: '#fcfbf9', // Stone-50-ish warmth
        foreground: '#1c1917', // Stone-900
        card: '#ffffff',
        cardForeground: '#1c1917',
        primary: '#44403c', // Stone-700
        primaryForeground: '#ffffff',
        secondary: '#f5f5f4', // Stone-100
        secondaryForeground: '#57534e', // Stone-600
        muted: '#e7e5e4', // Stone-200
        mutedForeground: '#a8a29e', // Stone-400
        accent: '#d6d3d1', // Stone-300
        accentForeground: '#1c1917',
        border: '#e7e5e4',
        ring: '#a8a29e',
    },
    radius: 'lg', // Organic roundedness
    shadow: 'sm',
    typography: {
        fontFamily: '"Newsreader", serif', // Elegant serif
        headingWeight: 500,
        bodyWeight: 400,
        letterSpacing: '0.02em',
    },
}
