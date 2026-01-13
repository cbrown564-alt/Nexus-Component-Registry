import { PlaygroundTheme, playgroundThemes } from '@/data/playgroundThemes'

// --- Layer 1: Visual Languages (5 consolidated categories) ---
export type VisualLanguageId = 'professional' | 'consumer' | 'cyberpunk' | 'organic' | 'brutalist'

export interface VisualLanguage {
    id: VisualLanguageId
    name: string
    description: string
}

export const visualLanguages: VisualLanguage[] = [
    { id: 'professional', name: 'Professional & Data', description: 'Clean, functional interfaces for serious work—data-dense, minimal decoration' },
    { id: 'consumer', name: 'Consumer & Lifestyle', description: 'Friendly, accessible designs for everyday apps—warm, approachable, photography-centric' },
    { id: 'cyberpunk', name: 'Cyberpunk & Futurism', description: 'High-tech aesthetics with neon, sci-fi elements, and precision instruments' },
    { id: 'organic', name: 'Organic & Skeuomorphic', description: 'Tactile, natural, or materially-inspired designs—soft shadows, earth tones' },
    { id: 'brutalist', name: 'Brutalist & Experimental', description: 'Bold, rule-breaking, statement designs—high contrast, unconventional layouts' },
]

// --- Layer 2: Templates (The "Body") ---
export interface ThemeVariant {
    id: string              // e.g., 'fintech-light'
    name: string            // e.g., 'Light Mode'
    playgroundThemeId: string  // Reference to PlaygroundTheme id
}

export interface Template {
    id: string
    name: string
    description: string
    visualLanguageId: VisualLanguageId
    // Optional theme variants specific to this template
    themeVariants?: ThemeVariant[]
    // Legacy compatibility fields
    category: 'dark' | 'light' | 'colorful'
    tags: string[]
    // These are "default" presentational values until fully decoupled
    colorClass: string
    backgroundColor: string
    textColorClass: string
    sidebarStyles: string
}

// Map existing "themes" to "Templates"
export const templates: Template[] = [
    {
        id: 'engineering',
        name: 'Engineering',
        description: 'Developer-focused dark theme with terminal aesthetics',
        visualLanguageId: 'professional',
        colorClass: 'bg-blue-500',
        backgroundColor: 'bg-zinc-950',
        textColorClass: 'text-zinc-100',
        sidebarStyles: 'border-zinc-800 bg-zinc-950',
        category: 'dark',
        tags: ['developer', 'terminal', 'dark', 'minimal'],
    },
    {
        id: 'wellness',
        name: 'Wellness',
        description: 'Calm, organic theme for health and wellness apps',
        visualLanguageId: 'consumer', // Was 'consumer' (mapped from collection)
        colorClass: 'bg-sage-500',
        backgroundColor: 'bg-[#fcfbf9]',
        textColorClass: 'text-stone-800',
        sidebarStyles: 'border-stone-200 bg-white/80 backdrop-blur-md',
        category: 'light',
        tags: ['health', 'calm', 'organic', 'light'],
        themeVariants: [
            { id: 'wellness-calm', name: 'Calm Nature', playgroundThemeId: 'wellness' },
            { id: 'wellness-energy', name: 'Energy Teal', playgroundThemeId: 'wellness-energy' },
        ],
    },
    {
        id: 'education',
        name: 'Education',
        description: 'Clean, academic theme for learning platforms',
        visualLanguageId: 'consumer',
        colorClass: 'bg-violet-500',
        backgroundColor: 'bg-slate-50',
        textColorClass: 'text-slate-800',
        sidebarStyles: 'border-slate-200 bg-white',
        category: 'light',
        tags: ['academic', 'clean', 'learning', 'light'],
    },
    {
        id: 'saas',
        name: 'B2B SaaS',
        description: 'Professional dark theme for enterprise software',
        visualLanguageId: 'professional',
        colorClass: 'bg-indigo-500',
        backgroundColor: 'bg-slate-950',
        textColorClass: 'text-slate-200',
        sidebarStyles: 'border-slate-800 bg-slate-950',
        category: 'dark',
        tags: ['enterprise', 'professional', 'dark', 'business'],
    },
    {
        id: 'magazine',
        name: 'Magazine',
        description: 'Editorial theme with classic typography',
        visualLanguageId: 'consumer',
        colorClass: 'bg-neutral-900',
        backgroundColor: 'bg-[#fdfbf7]',
        textColorClass: 'text-neutral-900',
        sidebarStyles: 'border-neutral-200 bg-[#fdfbf7]',
        category: 'light',
        tags: ['editorial', 'typography', 'classic', 'light'],
    },
    {
        id: 'ecommerce',
        name: 'Storefront',
        description: 'Clean shopping experience with product focus',
        visualLanguageId: 'consumer',
        colorClass: 'bg-black',
        backgroundColor: 'bg-white',
        textColorClass: 'text-neutral-900',
        sidebarStyles: 'border-neutral-100 bg-white',
        category: 'light',
        tags: ['shopping', 'retail', 'clean', 'light'],
    },
    {
        id: 'social',
        name: 'Stream',
        description: 'Dark social media theme with vibrant accents',
        visualLanguageId: 'consumer',
        colorClass: 'bg-sky-500',
        backgroundColor: 'bg-black',
        textColorClass: 'text-zinc-200',
        sidebarStyles: 'border-zinc-800 bg-black',
        category: 'dark',
        tags: ['social', 'media', 'dark', 'vibrant'],
    },
    {
        id: 'fintech',
        name: 'Terminal',
        description: 'Financial dashboard with data-dense layouts',
        visualLanguageId: 'professional',
        themeVariants: [
            { id: 'fintech-dark', name: 'Dark Mode', playgroundThemeId: 'fintech' },
            { id: 'fintech-light', name: 'Light Mode', playgroundThemeId: 'fintech-light' },
        ],
        colorClass: 'bg-emerald-500',
        backgroundColor: 'bg-[#09090b]',
        textColorClass: 'text-zinc-200',
        sidebarStyles: 'border-zinc-800 bg-zinc-950',
        category: 'dark',
        tags: ['finance', 'data', 'dark', 'professional'],
    },
    {
        id: 'productivity',
        name: 'Flow',
        description: 'Focus-first productivity theme',
        visualLanguageId: 'professional',
        colorClass: 'bg-amber-500',
        backgroundColor: 'bg-[#09090b]',
        textColorClass: 'text-zinc-200',
        sidebarStyles: 'border-zinc-800 bg-zinc-950',
        category: 'dark',
        tags: ['productivity', 'focus', 'dark', 'minimal'],
    },
    {
        id: 'game',
        name: 'Arcade',
        description: 'Vibrant gaming theme with neon aesthetics',
        visualLanguageId: 'cyberpunk',
        colorClass: 'bg-fuchsia-500',
        backgroundColor: 'bg-[#130f26]',
        textColorClass: 'text-white',
        sidebarStyles: 'border-white/10 bg-[#130f26]/90 backdrop-blur-md',
        category: 'colorful',
        tags: ['gaming', 'neon', 'vibrant', 'dark'],
        themeVariants: [
            { id: 'game-arcade', name: 'Arcade Neon', playgroundThemeId: 'arcade' },
            { id: 'game-minimal', name: 'Minimal', playgroundThemeId: 'game-minimal' },
        ],
    },
    {
        id: 'music',
        name: 'Sonic',
        description: 'Audio-focused theme with waveform visuals',
        visualLanguageId: 'consumer',
        colorClass: 'bg-rose-500',
        backgroundColor: 'bg-[#0a0a0a]',
        textColorClass: 'text-white',
        sidebarStyles: 'border-white/5 bg-black/90 backdrop-blur-md',
        category: 'dark',
        tags: ['music', 'audio', 'dark', 'media'],
    },
    {
        id: 'food',
        name: 'Crave',
        description: 'Warm food delivery theme with appetite appeal',
        visualLanguageId: 'organic',
        colorClass: 'bg-orange-500',
        backgroundColor: 'bg-[#0c0a09]',
        textColorClass: 'text-stone-200',
        sidebarStyles: 'border-stone-800 bg-[#0c0a09]',
        category: 'dark',
        tags: ['food', 'delivery', 'warm', 'dark'],
    },
    {
        id: 'grid',
        name: 'Matrix',
        description: 'Data-grid focused theme for analytics',
        visualLanguageId: 'cyberpunk',
        colorClass: 'bg-blue-600',
        backgroundColor: 'bg-[#0b1121]',
        textColorClass: 'text-blue-100',
        sidebarStyles: 'border-blue-900/30 bg-[#0b1121]',
        category: 'dark',
        tags: ['data', 'analytics', 'grid', 'dark'],
    },
    {
        id: 'brutalist',
        name: 'Raw',
        description: 'Bold brutalist design with stark contrasts',
        visualLanguageId: 'brutalist',
        colorClass: 'bg-yellow-400',
        backgroundColor: 'bg-[#e0e0e0]',
        textColorClass: 'text-black',
        sidebarStyles: 'border-black border-r-[3px] bg-white',
        category: 'light',
        tags: ['brutalist', 'bold', 'stark', 'light'],
    },
    {
        id: 'kitchen',
        name: 'Mise',
        description: 'Warm culinary theme for kitchen displays',
        visualLanguageId: 'organic',
        colorClass: 'bg-orange-500',
        backgroundColor: 'bg-[#F7F5F2]',
        textColorClass: 'text-stone-800',
        sidebarStyles: 'border-stone-200 bg-white',
        category: 'light',
        tags: ['culinary', 'warm', 'kitchen', 'light'],
    },
    {
        id: 'kids',
        name: 'Play',
        description: 'Fun, colorful theme for children',
        visualLanguageId: 'consumer',
        colorClass: 'bg-red-500',
        backgroundColor: 'bg-[#7dd3fc]',
        textColorClass: 'text-slate-900',
        sidebarStyles: 'border-sky-200 bg-white',
        category: 'colorful',
        tags: ['kids', 'fun', 'colorful', 'playful'],
    },
    {
        id: 'scifi',
        name: 'Helix',
        description: 'Futuristic sci-fi interface with holographic effects',
        visualLanguageId: 'cyberpunk',
        colorClass: 'bg-cyan-500',
        backgroundColor: 'bg-[#020408]',
        textColorClass: 'text-cyan-50',
        sidebarStyles: 'border-cyan-900/50 bg-[#050b14]',
        category: 'dark',
        tags: ['scifi', 'futuristic', 'holographic', 'dark'],
        themeVariants: [
            { id: 'scifi-cyan', name: 'Helix Cyan', playgroundThemeId: 'scifi' },
            { id: 'scifi-orange', name: 'Mars Orange', playgroundThemeId: 'scifi-orange' },
        ],
    },
    {
        id: 'eink',
        name: 'Canvas',
        description: 'E-ink inspired minimal reading theme',
        visualLanguageId: 'organic',
        colorClass: 'bg-white',
        backgroundColor: 'bg-[#f4f4f3]',
        textColorClass: 'text-black',
        sidebarStyles: 'border-black border-r-2 bg-[#f4f4f3]',
        category: 'light',
        tags: ['eink', 'minimal', 'reading', 'light'],
    },
    {
        id: 'solarpunk',
        name: 'Eden',
        description: 'Eco-optimist theme with organic shapes',
        visualLanguageId: 'organic',
        colorClass: 'bg-emerald-500',
        backgroundColor: 'bg-[#F0F7F4]',
        textColorClass: 'text-emerald-900',
        sidebarStyles: 'border-emerald-200 bg-[#F0F7F4]',
        category: 'light',
        tags: ['eco', 'organic', 'green', 'light'],
    },
    {
        id: 'legal',
        name: 'Eagle',
        description: 'Professional legal/government theme',
        visualLanguageId: 'professional',
        colorClass: 'bg-red-700',
        backgroundColor: 'bg-[#e5e5e4]',
        textColorClass: 'text-stone-900',
        sidebarStyles: 'border-stone-300 bg-[#e5e5e4]',
        category: 'light',
        tags: ['legal', 'professional', 'government', 'light'],
        themeVariants: [
            { id: 'legal-classic', name: 'Classic Serif', playgroundThemeId: 'legal' },
            { id: 'legal-modern', name: 'Modern Sans', playgroundThemeId: 'legal-modern' },
        ],
    },
    {
        id: 'softplastic',
        name: 'Plastic',
        description: 'Neumorphic soft plastic aesthetic',
        visualLanguageId: 'organic',
        colorClass: 'bg-slate-400',
        backgroundColor: 'bg-[#EFEEEE]',
        textColorClass: 'text-slate-600',
        sidebarStyles: 'border-slate-200 bg-[#EFEEEE]',
        category: 'light',
        tags: ['neumorphic', 'soft', 'plastic', 'light'],
    },
    {
        id: 'festival',
        name: 'Pulse',
        description: 'High-energy festival and event theme',
        visualLanguageId: 'cyberpunk',
        colorClass: 'bg-fuchsia-500',
        backgroundColor: 'bg-black',
        textColorClass: 'text-white',
        sidebarStyles: 'border-white/10 bg-black/90 backdrop-blur-md',
        category: 'colorful',
        tags: ['festival', 'event', 'energy', 'dark'],
    },
    {
        id: 'acid',
        name: 'Acid',
        description: 'Bold acid graphics with high contrast',
        visualLanguageId: 'brutalist',
        colorClass: 'bg-[#ccff00]',
        backgroundColor: 'bg-[#E0E7FF]',
        textColorClass: 'text-black',
        sidebarStyles: 'border-black border-r-4 bg-white',
        category: 'colorful',
        tags: ['acid', 'bold', 'contrast', 'colorful'],
    },
    {
        id: 'legacy',
        name: 'Legacy',
        description: 'Retro Windows 95/98 nostalgic interface',
        visualLanguageId: 'brutalist',
        colorClass: 'bg-[#008080]',
        backgroundColor: 'bg-[#008080]',
        textColorClass: 'text-black',
        sidebarStyles: 'border-white border-r-2 bg-[#c0c0c0] shadow-[2px_0_0_#808080]',
        category: 'colorful',
        tags: ['retro', 'windows', 'nostalgic', 'classic'],
    },
    {
        id: 'cockpit',
        name: 'Cockpit',
        description: 'Automotive dashboard with instrument cluster',
        visualLanguageId: 'cyberpunk',
        colorClass: 'bg-blue-600',
        backgroundColor: 'bg-[#121212]',
        textColorClass: 'text-white',
        sidebarStyles: 'border-zinc-800 bg-[#1a1a1a]',
        category: 'dark',
        tags: ['automotive', 'dashboard', 'instruments', 'dark'],
    },
    {
        id: 'clay',
        name: 'Clay',
        description: 'Soft claymorphism with rounded shapes',
        visualLanguageId: 'organic',
        colorClass: 'bg-sky-400',
        backgroundColor: 'bg-[#f0f4f8]',
        textColorClass: 'text-slate-700',
        sidebarStyles: 'border-white/50 bg-white/50 backdrop-blur-lg',
        category: 'light',
        tags: ['clay', 'soft', 'rounded', 'light'],
    },
    {
        id: 'blueprint',
        name: 'Blueprint',
        description: 'Technical blueprint with schematic style',
        visualLanguageId: 'professional',
        colorClass: 'bg-[#1e3a8a]',
        backgroundColor: 'bg-[#1e3a8a]',
        textColorClass: 'text-white',
        sidebarStyles: 'border-white/30 bg-[#1e3a8a]',
        category: 'dark',
        tags: ['blueprint', 'technical', 'schematic', 'dark'],
    },
    {
        id: 'swiss',
        name: 'Swiss',
        description: 'Clean Swiss design with grid perfection',
        visualLanguageId: 'brutalist',
        colorClass: 'bg-[#DC2626]',
        backgroundColor: 'bg-[#F5F5F5]',
        textColorClass: 'text-black',
        sidebarStyles: 'border-transparent bg-white',
        category: 'light',
        tags: ['swiss', 'grid', 'clean', 'minimal'],
    },
    // --- Phase 4: New Templates ---
    {
        id: 'clinic',
        name: 'Clinic',
        description: 'Concierge medical patient portal',
        visualLanguageId: 'professional',
        colorClass: 'bg-emerald-600',
        backgroundColor: 'bg-slate-50',
        textColorClass: 'text-slate-900',
        sidebarStyles: 'border-slate-200 bg-white',
        category: 'light',
        tags: ['healthcare', 'medical', 'patient', 'clinical'],
    },
    {
        id: 'departure',
        name: 'Departure',
        description: 'Aviation and transit status board',
        visualLanguageId: 'professional',
        colorClass: 'bg-amber-500',
        backgroundColor: 'bg-zinc-950',
        textColorClass: 'text-zinc-200',
        sidebarStyles: 'border-zinc-800 bg-zinc-950',
        category: 'dark',
        tags: ['aviation', 'transit', 'data', 'dark'],
    },
    {
        id: 'estate',
        name: 'Estate',
        description: 'Luxury real estate listings & portfolio',
        visualLanguageId: 'consumer',
        colorClass: 'bg-amber-700',
        backgroundColor: 'bg-stone-50',
        textColorClass: 'text-stone-900',
        sidebarStyles: 'border-stone-200 bg-white',
        category: 'light',
        tags: ['real-estate', 'luxury', 'portfolio', 'gallery'],
    },
    {
        id: 'nomad',
        name: 'Nomad',
        description: 'Eco-travel journal & itinerary',
        visualLanguageId: 'organic',
        colorClass: 'bg-lime-700',
        backgroundColor: 'bg-stone-50',
        textColorClass: 'text-stone-800',
        sidebarStyles: 'border-stone-200 bg-stone-100',
        category: 'light',
        tags: ['travel', 'blog', 'journal', 'nature'],
    },
    {
        id: 'vault',
        name: 'Vault',
        description: 'DeFi & Crypto Dashboard',
        visualLanguageId: 'brutalist',
        colorClass: 'bg-green-500',
        backgroundColor: 'bg-zinc-950',
        textColorClass: 'text-zinc-200',
        sidebarStyles: 'border-zinc-800 bg-zinc-950',
        category: 'dark',
        tags: ['defi', 'crypto', 'dark', 'brutalist'],
    },
    {
        id: 'arena',
        name: 'Arena',
        description: 'Command Center for Gaming & Esports tournaments.',
        visualLanguageId: 'cyberpunk',
        colorClass: 'bg-blue-600',
        backgroundColor: 'bg-slate-950',
        textColorClass: 'text-white',
        sidebarStyles: 'border-slate-800 bg-slate-950',
        category: 'dark',
        tags: ['esports', 'gaming', 'tournament'],
    },
    {
        id: 'evergreen',
        name: 'Evergreen',
        description: 'Deep Ecology impact tracker and sustainability dashboard.',
        visualLanguageId: 'organic', // Changed from 'nature' to 'organic'
        colorClass: 'bg-[#78866b]',
        backgroundColor: 'bg-[#f4f1ea]',
        textColorClass: 'text-[#3d3a3a]',
        sidebarStyles: 'border-[#d6cfc2] bg-[#f4f1ea]',
        category: 'light',
        tags: ['ecology', 'sustainability', 'nature'],
    },
]

// --- Layer 3: Themes (The "Mood") ---
// Re-exporting PlaygroundThemes as "Theme" in the new structure
export type Theme = PlaygroundTheme
export { playgroundThemes as themes } // Exporting generic themes as "themes" for now, distinct from Templates

// --- Legacy Compatibility ---
export interface LegacyTheme extends Template {
    collection: VisualLanguageId
}

// Map new "templates" back to old "themes" structure for compatibility options effectively
// For code that imports 'themes' expecting the list of Templates (formerly themes.ts)
export const legacyThemes: LegacyTheme[] = templates.map(t => ({
    ...t,
    collection: t.visualLanguageId
}))

export const getTemplateById = (id: string): Template | undefined => {
    return templates.find((t) => t.id === id)
}

export const getTemplatesByLanguage = (languageId: VisualLanguageId): Template[] => {
    return templates.filter((t) => t.visualLanguageId === languageId)
}

// Forward compatibility for existing calls that look for getThemeById (meaning Template)
export const getThemeById = (id: string): LegacyTheme | undefined => {
    const t = getTemplateById(id)
    if (!t) return undefined
    return { ...t, collection: t.visualLanguageId }
}

export const getThemesByCategory = (category: Template['category']): LegacyTheme[] => {
    return legacyThemes.filter((t) => t.category === category)
}

export const featuredTemplates = [
    'engineering',
    'cockpit',
    'legacy',
    'fintech',
    'game',
    'scifi',
    'brutalist',
    'swiss',
]
// Alias for legacy
export const featuredThemes = featuredTemplates
