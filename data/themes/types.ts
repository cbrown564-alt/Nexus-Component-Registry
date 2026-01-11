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
    radius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
    shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'glow'
    typography: {
        fontFamily: string
        headingWeight: number
        bodyWeight: number
        letterSpacing: string
    }
}
