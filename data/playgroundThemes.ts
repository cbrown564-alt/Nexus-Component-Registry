import {
    // Types
    PlaygroundTheme,
    // SciFi / Retro themes
    helix,
    legacy,
    cockpit,
    blueprint,
    arcade,
    eink,
    // Experimental themes
    swiss,
    brutalist,
    acid,
    solarpunk,
    festival,
    clay,
    softPlastic,
    // Base themes (original playground themes)
    midnight,
    emeraldTier,
    ember,
    neon,
    forest,
    paper,
    ocean,
    sand,
    mono,
    // Professional themes
    fintech,
    fintechLight,
    saas,
    productivity,
    grid,
    legal,
    // Consumer themes
    wellness,
    education,
    magazine,
    ecommerce,
    social,
    music,
    food,
    kitchen,
    kids,
    // Variants
    legalModern,
    scifiOrange,
    wellnessEnergy,
    gameMinimal,
    clinic,
    departure,
    estate,
    nomad,
    vault,
    arena,
} from './themes'
import { evergreen } from './themes/evergreen';

// Re-export type for compatibility
export type { PlaygroundTheme } from './themes'

// All available themes for the playground
export const playgroundThemes: PlaygroundTheme[] = [
    // Base themes (most generic, good defaults)
    midnight,
    emeraldTier,
    ember,
    neon,
    forest,
    paper,
    ocean,
    sand,
    mono,
    // Professional & Enterprise
    fintech,
    fintechLight,
    saas,
    productivity,
    grid,
    legal,
    // Consumer & Lifestyle
    wellness,
    education,
    magazine,
    ecommerce,
    social,
    music,
    food,
    kitchen,
    kids,
    // Cyberpunk & SciFi
    helix,
    cockpit,
    blueprint,
    arcade,
    // Brutalist & Raw
    brutalist,
    acid,
    legacy,
    // Organic & Nature
    solarpunk,
    // Skeuomorphic
    softPlastic,
    clay,
    eink,
    // Experimental
    swiss,
    festival,
    // New Phase 4 templates
    clinic,
    departure,
    estate,
    nomad,
    vault,
    arena,
    // Variants
    legalModern,
    scifiOrange,
    wellnessEnergy,
    gameMinimal,
]

export const getPlaygroundThemeById = (id: string): PlaygroundTheme | undefined => {
    return playgroundThemes.find((t) => t.id === id)
}

export const defaultPlaygroundTheme = playgroundThemes[0]
