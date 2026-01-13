import { PlaygroundTheme } from './types';

export const clinic: PlaygroundTheme = {
    id: 'clinic',
    name: 'Clinic',
    description: 'Ultra-premium concierge wellness interface',
    mode: 'light',
    colors: {
        background: '#FAFAF9', // Stone-50 (Warm Alabaster)
        foreground: '#1C1917', // Stone-900 (Warm Black)
        card: '#FFFFFF',
        cardForeground: '#1C1917',
        primary: '#47463f', // Dark Olive/Bronze
        primaryForeground: '#FFFFFF',
        secondary: '#E7E5E4', // Stone-200
        secondaryForeground: '#44403C', // Stone-700
        muted: '#F5F5F4', // Stone-100
        mutedForeground: '#78716C', // Stone-500
        accent: '#D6D3D1', // Stone-300
        accentForeground: '#1C1917',
        border: '#E7E5E4',
        ring: '#47463f',
    },
    radius: 'none', // Sharp, editorial look (or very minimal radius)
    shadow: 'none', // Flat, print-like aesthetic
    typography: {
        fontFamily: '"Domine", "Bodoni Moda", "Times New Roman", serif', // Strong editorial serif
        headingWeight: 500,
        bodyWeight: 400,
        letterSpacing: '-0.03em', // Tight, editorial tracking
    },
}
