import { ComponentMeta, getComponentById, getComponentsByTheme, components } from './components'

export interface TemplateComponentMapping {
    id: string
    name: string
    usedComponentIds: string[]      // Component IDs actually imported in the dashboard
    extendedComponentIds: string[]  // Same-theme components not used in layout
    sharedComponentIds: string[]    // Curated universal components that pair well with theme
}

// Truly universal shared components (work well across all themes)
const SHARED_COMPONENT_IDS = [
    'spotlight-card',      // Universal visual effect for dark themes
    'glow-button',         // Universal button with glow
    'stats-card',          // Universal metrics display
    'activity-feed',       // Universal for any app
    'team-members',        // Universal for any app
    'integration-toggle',  // Universal toggle switch
    'bento-card',          // Universal layout card
] as const

// Curated shared component sets by visual style
const SHARED_SETS = {
    dark: ['spotlight-card', 'glow-button', 'stats-card', 'activity-feed'],
    light: ['bento-card', 'stats-card', 'team-members', 'activity-feed'],
    business: ['stats-card', 'team-members', 'integration-toggle', 'bento-card'],
    creative: ['spotlight-card', 'glow-button', 'activity-feed'],
    minimal: ['stats-card', 'bento-card', 'activity-feed'],
}

export const templateComponentMap: TemplateComponentMapping[] = [
    // Engineering - Nebula IDE theme
    {
        id: 'engineering',
        name: 'Engineering',
        usedComponentIds: ['engineering-card', 'engineering-button', 'pipeline-steps', 'code-block'],
        extendedComponentIds: [
            'console-output', 'git-diff-view', 'server-stat-badge',  // New components
            'terminal', 'file-tree', 'shortcut-guide', 'deployment-pipeline'  // Dev-specific (formerly shared)
        ],
        sharedComponentIds: SHARED_SETS.dark,
    },

    // Game - Arcade theme
    {
        id: 'game',
        name: 'Game',
        usedComponentIds: ['character-profile', 'inventory-grid', 'quest-log', 'leaderboard-widget'],
        extendedComponentIds: ['game-button', 'game-card', 'achievement-badge', 'health-bar'],
        sharedComponentIds: ['spotlight-card', 'glow-button', 'activity-feed'],
    },

    // Fintech - Banking theme
    {
        id: 'fintech',
        name: 'Fintech',
        usedComponentIds: ['portfolio-chart', 'digital-card', 'market-ticker', 'transaction-list'],
        extendedComponentIds: ['fintech-button', 'fintech-card', 'currency-converter', 'sparkline-chart'],
        sharedComponentIds: SHARED_SETS.business,
    },

    // Scifi - Helix Bio Interface
    {
        id: 'scifi',
        name: 'SciFi',
        usedComponentIds: ['scifi-card', 'body-scanner', 'vitals-monitor', 'dna-list'],
        extendedComponentIds: ['holographic-table', 'glitch-heading', 'neon-toggle'],
        sharedComponentIds: ['spotlight-card', 'glow-button', 'stats-card'],
    },

    // Legacy OS - Retro Windows
    {
        id: 'legacy',
        name: 'Legacy OS',
        usedComponentIds: ['legacy-window', 'legacy-button', 'desktop-icon'],
        extendedComponentIds: ['legacy-alert'],
        sharedComponentIds: [], // Retro theme doesn't mix well with modern components
    },

    // Cockpit - Automotive dashboard
    {
        id: 'cockpit',
        name: 'Cockpit',
        usedComponentIds: ['speedometer', 'climate-control', 'lane-assist', 'media-widget', 'nav-widget'],
        extendedComponentIds: ['cockpit-card'],
        sharedComponentIds: ['stats-card'],
    },

    // Wellness - Meditation/Health
    {
        id: 'wellness',
        name: 'Wellness',
        usedComponentIds: ['wellness-card', 'breath-player', 'sleep-graph', 'mood-selector', 'wellness-button'],
        extendedComponentIds: ['journal-entry', 'meditation-timer', 'habit-checkbox'],
        sharedComponentIds: SHARED_SETS.light,
    },

    // Education - Learning platform
    {
        id: 'education',
        name: 'Education',
        usedComponentIds: ['course-card', 'upcoming-schedule'],
        extendedComponentIds: ['education-button', 'education-card', 'study-stats'],
        sharedComponentIds: ['stats-card', 'activity-feed', 'bento-card'],
    },

    // SaaS - Analytics dashboard
    {
        id: 'saas',
        name: 'SaaS',
        usedComponentIds: ['metric-card', 'revenue-chart', 'customer-table', 'saas-card', 'saas-button'],
        extendedComponentIds: ['plan-picker'],  // Business-specific (formerly shared)
        sharedComponentIds: SHARED_SETS.business,
    },

    // Magazine - Editorial
    {
        id: 'magazine',
        name: 'Magazine',
        usedComponentIds: ['editorial-button'],
        extendedComponentIds: ['magazine-card', 'feature-story', 'newsletter', 'trending-list'],
        sharedComponentIds: ['spotlight-card', 'activity-feed'],
    },

    // Ecommerce - Shop
    {
        id: 'ecommerce',
        name: 'E-commerce',
        usedComponentIds: ['product-card', 'cart-summary', 'shop-button'],
        extendedComponentIds: ['commerce-card', 'promo-banner'],
        sharedComponentIds: ['spotlight-card', 'stats-card'],
    },

    // Social - Feed
    {
        id: 'social',
        name: 'Social',
        usedComponentIds: ['feed-post', 'profile-summary'],
        extendedComponentIds: ['social-button', 'social-card', 'story-rail'],
        sharedComponentIds: ['activity-feed', 'stats-card'],
    },

    // Productivity - Task management
    {
        id: 'productivity',
        name: 'Productivity',
        usedComponentIds: ['flow-button'],
        extendedComponentIds: ['productivity-card', 'focus-timer', 'task-inbox', 'kanban-board'],
        sharedComponentIds: ['stats-card', 'activity-feed', 'integration-toggle'],
    },

    // Music - Streaming
    {
        id: 'music',
        name: 'Music',
        usedComponentIds: ['now-playing', 'track-list', 'album-grid', 'music-card', 'music-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'glow-button'],
    },

    // Food - Restaurant/Delivery
    {
        id: 'food',
        name: 'Food',
        usedComponentIds: ['food-button'],
        extendedComponentIds: ['food-card', 'hero-dish', 'menu-grid', 'cart-widget'],
        sharedComponentIds: ['spotlight-card', 'stats-card'],
    },

    // Grid - City infrastructure
    {
        id: 'grid',
        name: 'Grid',
        usedComponentIds: ['city-map', 'resource-gauge', 'system-controls', 'grid-card', 'grid-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card', 'integration-toggle', 'activity-feed'],
    },

    // Brutalist - High contrast
    {
        id: 'brutalist',
        name: 'Brutalist',
        usedComponentIds: ['marquee-header', 'art-grid', 'manifesto', 'brutalist-card', 'brutalist-button'],
        extendedComponentIds: [],
        sharedComponentIds: [], // Pure brutalist aesthetic
    },

    // Kitchen - Cooking app
    {
        id: 'kitchen',
        name: 'Kitchen',
        usedComponentIds: ['active-step', 'ingredient-scale', 'smart-timer', 'kitchen-card', 'kitchen-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['bento-card', 'stats-card'],
    },

    // Kids - Children's app
    {
        id: 'kids',
        name: 'Kids',
        usedComponentIds: ['kids-card', 'big-icon-nav', 'star-progress', 'mascot', 'kids-button'],
        extendedComponentIds: ['reward-star', 'speech-bubble'],
        sharedComponentIds: [], // Unique playful aesthetic
    },

    // E-Ink - Reading device
    {
        id: 'eink',
        name: 'E-Ink',
        usedComponentIds: ['eink-sidebar', 'reader-content', 'library-grid', 'eink-card', 'eink-button'],
        extendedComponentIds: [],
        sharedComponentIds: [], // Minimal grayscale aesthetic
    },

    // Solarpunk - Eco/sustainability
    {
        id: 'solarpunk',
        name: 'Solarpunk',
        usedComponentIds: ['energy-sun', 'air-quality-leaf', 'solar-card', 'solarpunk-button'],
        extendedComponentIds: ['eco-stats', 'plant-progress'],
        sharedComponentIds: ['stats-card', 'activity-feed'],
    },

    // Legal - Contract review
    {
        id: 'legal',
        name: 'Legal',
        usedComponentIds: ['legal-paper', 'clause', 'redline-sidebar', 'diff-viewer', 'legal-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card', 'activity-feed'],
    },

    // Soft Plastic - Neumorphic
    {
        id: 'softplastic',
        name: 'Soft Plastic',
        usedComponentIds: ['neumorphic-card', 'neumorphic-button', 'thermostat-dial', 'device-toggle'],
        extendedComponentIds: [],
        sharedComponentIds: [], // Pure neumorphic aesthetic
    },

    // Festival - Event/Concert
    {
        id: 'festival',
        name: 'Festival',
        usedComponentIds: ['festival-card', 'soundwave-timeline', 'crowd-heatmap', 'ticket-wallet', 'festival-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'glow-button'],
    },

    // Acid - Glitch/experimental
    {
        id: 'acid',
        name: 'Acid',
        usedComponentIds: ['acid-card', 'glitch-text', 'sticker', 'marquee', 'acid-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['glow-button'], // Limited shared - very unique aesthetic
    },

    // Clay - Claymorphism
    {
        id: 'clay',
        name: 'Claymorphism',
        usedComponentIds: ['clay-card', 'clay-button', 'clay-toggle'],
        extendedComponentIds: [],
        sharedComponentIds: [],
    },

    // Blueprint - Technical drawings
    {
        id: 'blueprint',
        name: 'Blueprint',
        usedComponentIds: ['blueprint-card', 'cad-viewer', 'layer-control'],
        extendedComponentIds: ['measurement-label'],
        sharedComponentIds: ['stats-card'],
    },

    // Swiss - International typography
    {
        id: 'swiss',
        name: 'Swiss',
        usedComponentIds: ['swiss-button', 'swiss-grid', 'swiss-typography', 'swiss-divider'],
        extendedComponentIds: ['swiss-card', 'swiss-metric'],
        sharedComponentIds: ['stats-card'],
    },
]

/**
 * Get the component mapping for a specific template
 */
export function getTemplateComponents(templateId: string): TemplateComponentMapping | undefined {
    return templateComponentMap.find((t) => t.id === templateId)
}

/**
 * Get all resolved ComponentMeta objects for a template's used components
 */
export function getUsedComponents(templateId: string): ComponentMeta[] {
    const mapping = getTemplateComponents(templateId)
    if (!mapping) return []

    return mapping.usedComponentIds
        .map((id) => getComponentById(id))
        .filter((c): c is ComponentMeta => c !== undefined)
}

/**
 * Get all resolved ComponentMeta objects for a template's extended components
 * (theme components not used in the layout)
 */
export function getExtendedComponents(templateId: string): ComponentMeta[] {
    const mapping = getTemplateComponents(templateId)
    if (!mapping) return []

    // Get all components for the theme
    const themeComponents = getComponentsByTheme(templateId)

    // Filter to components NOT in the usedComponentIds
    return themeComponents.filter((c) => !mapping.usedComponentIds.includes(c.id))
}

/**
 * Get all resolved ComponentMeta objects for a template's curated shared components
 */
export function getSharedComponents(templateId: string): ComponentMeta[] {
    const mapping = getTemplateComponents(templateId)
    if (!mapping) return []

    return mapping.sharedComponentIds
        .map((id) => getComponentById(id))
        .filter((c): c is ComponentMeta => c !== undefined)
}

/**
 * Get all components for a template organized by section
 */
export function getAllTemplateComponents(templateId: string) {
    return {
        used: getUsedComponents(templateId),
        extended: getExtendedComponents(templateId),
        shared: getSharedComponents(templateId),
    }
}
