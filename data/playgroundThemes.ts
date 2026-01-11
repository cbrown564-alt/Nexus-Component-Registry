// Playground-specific themes: 8 truly distinct themes for the Themes Playground
// Each theme has unique visual DNA across color, radius, shadow, typography, and feel

export interface PlaygroundTheme {
    id: string
    name: string
    description: string
    mode: 'dark' | 'light'
    colors: {
        background: string
        foreground: string
        card: string
        cardForeground: string
        primary: string
        primaryForeground: string
        secondary: string
        secondaryForeground: string
        muted: string
        mutedForeground: string
        accent: string
        accentForeground: string
        border: string
        ring: string
    }
    radius: 'none' | 'sm' | 'md' | 'lg' | 'xl'
    shadow: 'none' | 'sm' | 'md' | 'lg' | 'glow'
    typography: {
        fontFamily: string
        headingWeight: number
        bodyWeight: number
        letterSpacing: string
    }
}

export const playgroundThemes: PlaygroundTheme[] = [
    // === DARK THEMES ===
    {
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
    },
    {
        id: 'emerald_tier',
        name: 'Emerald Tier',
        description: 'Professional fintech dark mode with emerald and orange accents',
        mode: 'dark',
        colors: {
            background: '#09090b', // Zinc-950
            foreground: '#fafafa',
            card: '#18181b', // Zinc-900
            cardForeground: '#fafafa',
            primary: '#10b981', // Emerald-500 (Restoring "Green")
            primaryForeground: '#ffffff',
            secondary: '#27272a', // Zinc-800
            secondaryForeground: '#a1a1aa',
            muted: '#27272a',
            mutedForeground: '#71717a',
            accent: '#f97316', // Orange-500 (Restoring "Orange")
            accentForeground: '#ffffff',
            border: '#27272a', // Zinc-800 (Subtle grey, preventing "stark white")
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
    },
    {
        id: 'ember',
        name: 'Ember',
        description: 'Warm charcoal with orange glow',
        mode: 'dark',
        colors: {
            background: '#1c1917',
            foreground: '#fafaf9',
            card: '#292524',
            cardForeground: '#fafaf9',
            primary: '#f97316',
            primaryForeground: '#ffffff',
            secondary: '#44403c',
            secondaryForeground: '#d6d3d1',
            muted: '#44403c',
            mutedForeground: '#a8a29e',
            accent: '#fb923c',
            accentForeground: '#1c1917',
            border: '#44403c',
            ring: '#f97316',
        },
        radius: 'lg',
        shadow: 'md',
        typography: {
            fontFamily: '"Outfit", system-ui, sans-serif',
            headingWeight: 700,
            bodyWeight: 400,
            letterSpacing: '0',
        },
    },
    {
        id: 'neon',
        name: 'Neon',
        description: 'Pure black with vibrant cyan glow',
        mode: 'dark',
        colors: {
            background: '#000000',
            foreground: '#ffffff',
            card: '#0a0a0a',
            cardForeground: '#ffffff',
            primary: '#06b6d4',
            primaryForeground: '#000000',
            secondary: '#171717',
            secondaryForeground: '#d4d4d4',
            muted: '#171717',
            mutedForeground: '#737373',
            accent: '#ec4899',
            accentForeground: '#000000',
            border: '#262626',
            ring: '#06b6d4',
        },
        radius: 'none',
        shadow: 'glow',
        typography: {
            fontFamily: '"JetBrains Mono", monospace',
            headingWeight: 700,
            bodyWeight: 400,
            letterSpacing: '0.02em',
        },
    },
    {
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
    },

    // === LIGHT THEMES ===
    {
        id: 'paper',
        name: 'Paper',
        description: 'Warm white with stone accents',
        mode: 'light',
        colors: {
            background: '#faf8f5',
            foreground: '#1c1917',
            card: '#ffffff',
            cardForeground: '#1c1917',
            primary: '#78716c',
            primaryForeground: '#ffffff',
            secondary: '#f5f5f4',
            secondaryForeground: '#44403c',
            muted: '#e7e5e4',
            mutedForeground: '#78716c',
            accent: '#a8a29e',
            accentForeground: '#1c1917',
            border: '#d6d3d1',
            ring: '#78716c',
        },
        radius: 'sm',
        shadow: 'none',
        typography: {
            fontFamily: '"Lora", Georgia, serif',
            headingWeight: 600,
            bodyWeight: 400,
            letterSpacing: '0',
        },
    },
    {
        id: 'ocean',
        name: 'Ocean',
        description: 'Cool white with blue depth',
        mode: 'light',
        colors: {
            background: '#f0f9ff',
            foreground: '#0c4a6e',
            card: '#ffffff',
            cardForeground: '#0c4a6e',
            primary: '#0284c7',
            primaryForeground: '#ffffff',
            secondary: '#e0f2fe',
            secondaryForeground: '#075985',
            muted: '#e0f2fe',
            mutedForeground: '#0369a1',
            accent: '#38bdf8',
            accentForeground: '#0c4a6e',
            border: '#bae6fd',
            ring: '#0284c7',
        },
        radius: 'md',
        shadow: 'md',
        typography: {
            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
            headingWeight: 700,
            bodyWeight: 500,
            letterSpacing: '-0.02em',
        },
    },
    {
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
        radius: 'xl',  // Changed from 'full' to prevent text overflow
        shadow: 'lg',
        typography: {
            fontFamily: '"Sora", system-ui, sans-serif',
            headingWeight: 600,
            bodyWeight: 400,
            letterSpacing: '0',
        },
    },
    {
        id: 'mono',
        name: 'Mono',
        description: 'Pure white with stark black contrast',
        mode: 'light',
        colors: {
            background: '#ffffff',
            foreground: '#000000',
            card: '#fafafa',
            cardForeground: '#000000',
            primary: '#000000',
            primaryForeground: '#ffffff',
            secondary: '#f5f5f5',
            secondaryForeground: '#171717',
            muted: '#e5e5e5',
            mutedForeground: '#525252',
            accent: '#737373',
            accentForeground: '#000000',
            border: '#d4d4d4',
            ring: '#000000',
        },
        radius: 'none',
        shadow: 'sm',
        typography: {
            fontFamily: '"Space Grotesk", system-ui, sans-serif',
            headingWeight: 700,
            bodyWeight: 500,
            letterSpacing: '-0.03em',
        },
    },
]

export const getPlaygroundThemeById = (id: string): PlaygroundTheme | undefined => {
    return playgroundThemes.find((t) => t.id === id)
}

export const defaultPlaygroundTheme = playgroundThemes[0]

