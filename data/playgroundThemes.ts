import {
    midnight,
    emeraldTier,
    ember,
    neon,
    forest,
    paper,
    ocean,
    sand,
    mono,
    PlaygroundTheme
} from './themes'

// Re-export type for compatibility
export type { PlaygroundTheme } from './themes'

// Use the new definitions to populate the legacy array
export const playgroundThemes: PlaygroundTheme[] = [
    midnight,
    emeraldTier, // Note: exported as camelCase, id is still 'emerald_tier' inside the object
    ember,
    neon,
    forest,
    paper,
    ocean,
    sand,
    mono
]

export const getPlaygroundThemeById = (id: string): PlaygroundTheme | undefined => {
    return playgroundThemes.find((t) => t.id === id)
}

export const defaultPlaygroundTheme = playgroundThemes[0]
