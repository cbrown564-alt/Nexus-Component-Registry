import { ComponentMeta, getComponentById, getComponentsByTheme, components } from './components'

export interface TemplateComponentMapping {
    id: string
    name: string
    usedComponentIds: string[]      // Component IDs actually imported in the dashboard
    extendedComponentIds: string[]  // Same-theme components not used in layout
    sharedComponentIds: string[]    // Curated universal components that pair well with theme
}

// Shared component IDs available in components/ui
const SHARED_COMPONENT_IDS = [
    'spotlight-card',
    'glow-button',
    'terminal',
    'stats-card',
    'activity-feed',
    'file-tree',
    'plan-picker',
    'team-members',
    'shortcut-guide',
    'deployment-pipeline',
    'integration-toggle',
    'bento-card',
] as const

// Curated shared component sets by visual style
const SHARED_SETS = {
    dark: ['spotlight-card', 'glow-button', 'stats-card', 'activity-feed'],
    light: ['bento-card', 'stats-card', 'team-members', 'activity-feed'],
    developer: ['terminal', 'file-tree', 'shortcut-guide', 'deployment-pipeline', 'stats-card'],
    business: ['stats-card', 'plan-picker', 'team-members', 'integration-toggle', 'bento-card'],
    technical: ['terminal', 'deployment-pipeline', 'stats-card', 'integration-toggle'],
    creative: ['spotlight-card', 'glow-button', 'activity-feed'],
}

export const templateComponentMap: TemplateComponentMapping[] = [
    // Engineering - Nebula IDE theme
    {
        id: 'engineering',
        name: 'Engineering',
        usedComponentIds: ['engineering-card', 'engineering-button', 'pipeline-steps', 'code-block'],
        extendedComponentIds: [], // All theme components are used
        sharedComponentIds: SHARED_SETS.developer,
    },

    // Game - Arcade theme
    {
        id: 'game',
        name: 'Game',
        usedComponentIds: ['character-profile', 'inventory-grid', 'quest-log', 'leaderboard-widget'],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'glow-button', 'activity-feed'],
    },

    // Fintech - Banking theme
    {
        id: 'fintech',
        name: 'Fintech',
        usedComponentIds: ['portfolio-chart', 'digital-card', 'market-ticker', 'transaction-list'],
        extendedComponentIds: [],
        sharedComponentIds: SHARED_SETS.business,
    },

    // Scifi - Helix Bio Interface
    {
        id: 'scifi',
        name: 'SciFi',
        usedComponentIds: ['scifi-card', 'body-scanner', 'vitals-monitor', 'dna-list'],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'glow-button', 'stats-card'],
    },

    // Legacy OS - Retro Windows
    {
        id: 'legacy',
        name: 'Legacy OS',
        usedComponentIds: ['legacy-window', 'legacy-button', 'desktop-icon'],
        extendedComponentIds: [],
        sharedComponentIds: [], // Retro theme doesn't mix well with modern components
    },

    // Cockpit - Automotive dashboard
    {
        id: 'cockpit',
        name: 'Cockpit',
        usedComponentIds: ['speedometer', 'climate-control', 'lane-assist', 'media-widget', 'nav-widget'],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card'],
    },

    // Wellness - Meditation/Health
    {
        id: 'wellness',
        name: 'Wellness',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: SHARED_SETS.light,
    },

    // Education - Learning platform
    {
        id: 'education',
        name: 'Education',
        usedComponentIds: ['course-card', 'upcoming-schedule'],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card', 'activity-feed', 'bento-card'],
    },

    // SaaS - Analytics dashboard
    {
        id: 'saas',
        name: 'SaaS',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: SHARED_SETS.business,
    },

    // Magazine - Editorial
    {
        id: 'magazine',
        name: 'Magazine',
        usedComponentIds: ['editorial-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'activity-feed'],
    },

    // Ecommerce - Shop
    {
        id: 'ecommerce',
        name: 'E-commerce',
        usedComponentIds: ['product-card', 'cart-summary', 'shop-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'stats-card'],
    },

    // Social - Feed
    {
        id: 'social',
        name: 'Social',
        usedComponentIds: ['feed-post', 'profile-summary'],
        extendedComponentIds: [],
        sharedComponentIds: ['activity-feed', 'stats-card'],
    },

    // Productivity - Task management
    {
        id: 'productivity',
        name: 'Productivity',
        usedComponentIds: ['flow-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card', 'activity-feed', 'integration-toggle'],
    },

    // Music - Streaming
    {
        id: 'music',
        name: 'Music',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'glow-button'],
    },

    // Food - Restaurant/Delivery
    {
        id: 'food',
        name: 'Food',
        usedComponentIds: ['food-button'],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'stats-card'],
    },

    // Grid - City infrastructure
    {
        id: 'grid',
        name: 'Grid',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: SHARED_SETS.technical,
    },

    // Brutalist - High contrast
    {
        id: 'brutalist',
        name: 'Brutalist',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: [], // Pure brutalist aesthetic
    },

    // Kitchen - Cooking app
    {
        id: 'kitchen',
        name: 'Kitchen',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: ['bento-card', 'stats-card'],
    },

    // Kids - Children's app
    {
        id: 'kids',
        name: 'Kids',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: [], // Unique playful aesthetic
    },

    // E-Ink - Reading device
    {
        id: 'eink',
        name: 'E-Ink',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: [], // Minimal grayscale aesthetic
    },

    // Solarpunk - Eco/sustainability
    {
        id: 'solarpunk',
        name: 'Solarpunk',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card', 'activity-feed'],
    },

    // Legal - Contract review
    {
        id: 'legal',
        name: 'Legal',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card', 'activity-feed'],
    },

    // Soft Plastic - Neumorphic
    {
        id: 'softplastic',
        name: 'Soft Plastic',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: [], // Pure neumorphic aesthetic
    },

    // Festival - Event/Concert
    {
        id: 'festival',
        name: 'Festival',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: ['spotlight-card', 'glow-button'],
    },

    // Acid - Glitch/experimental
    {
        id: 'acid',
        name: 'Acid',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: ['glow-button'], // Limited shared - very unique aesthetic
    },

    // Clay - Claymorphism
    {
        id: 'clay',
        name: 'Claymorphism',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: [],
    },

    // Blueprint - Technical drawings
    {
        id: 'blueprint',
        name: 'Blueprint',
        usedComponentIds: [],
        extendedComponentIds: [],
        sharedComponentIds: ['stats-card'],
    },

    // Swiss - International typography
    {
        id: 'swiss',
        name: 'Swiss',
        usedComponentIds: ['swiss-button', 'swiss-grid', 'swiss-typography', 'swiss-divider'],
        extendedComponentIds: [],
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
