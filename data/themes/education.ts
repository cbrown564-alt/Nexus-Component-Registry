import { PlaygroundTheme } from './types';

export const education: PlaygroundTheme = {
    id: 'education',
    name: 'LMS Pro',
    description: 'Clean, focused academic interface',
    mode: 'light',
    colors: {
        background: '#f8fafc', // Slate-50
        foreground: '#0f172a', // Slate-900
        card: '#ffffff',
        cardForeground: '#0f172a',
        primary: '#7c3aed', // Violet-600
        primaryForeground: '#ffffff',
        secondary: '#f1f5f9', // Slate-100
        secondaryForeground: '#475569', // Slate-600
        muted: '#e2e8f0', // Slate-200
        mutedForeground: '#64748b', // Slate-500
        accent: '#818cf8', // Indigo-400
        accentForeground: '#ffffff',
        border: '#e2e8f0',
        ring: '#7c3aed',
    },
    radius: 'md',
    shadow: 'md',
    typography: {
        fontFamily: '"Inter", sans-serif',
        headingWeight: 700,
        bodyWeight: 400,
        letterSpacing: '-0.01em',
    },
}
