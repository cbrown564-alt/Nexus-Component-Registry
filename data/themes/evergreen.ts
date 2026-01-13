import { ThemeDefinition } from './index';

export const evergreen: ThemeDefinition = {
    id: 'evergreen',
    name: 'Evergreen',
    colors: {
        background: '#fdfcf8', // Limestone / Rich Cream
        foreground: '#1a2e1a', // Very Dark Green (almost black)
        primary: '#064e3b',    // Deep Emerald / Forest
        secondary: '#dfae7e',  // Warm Soil / Sandstone
        accent: '#fbbf24',     // Golden Hour / Amber
        border: '#c3bca8',     // Stone
        muted: '#8f9e8a',      // Muted Moss
    },
    typography: {
        fontFamily: '"Nunito", "Inter", sans-serif',
        headingFont: '"Domine", serif',
        scale: {
            h1: '4rem',
            h2: '3rem',
            h3: '2rem',
            body: '1rem',
            small: '0.875rem',
        },
    },
    borderRadius: '1.5rem', // Large organic radius
    shadows: {
        sm: '0 4px 6px -1px rgba(6, 78, 59, 0.1), 0 2px 4px -1px rgba(6, 78, 59, 0.06)',
        md: '0 10px 15px -3px rgba(6, 78, 59, 0.1), 0 4px 6px -2px rgba(6, 78, 59, 0.05)',
        lg: '0 20px 25px -5px rgba(6, 78, 59, 0.1), 0 10px 10px -5px rgba(6, 78, 59, 0.04)',
    },
};
