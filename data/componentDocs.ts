export interface PropDefinition {
    name: string
    type: string
    required: boolean
    default?: string
    description: string
}

export interface ComponentDoc {
    id: string
    props: PropDefinition[]
    examples?: {
        title: string
        code: string
    }[]
    notes?: string[]
}

// Documentation for shared UI components
export const componentDocs: Record<string, ComponentDoc> = {
    'spotlight-card': {
        id: 'spotlight-card',
        props: [
            {
                name: 'children',
                type: 'React.ReactNode',
                required: true,
                description: 'Content to render inside the card',
            },
            {
                name: 'className',
                type: 'string',
                required: false,
                default: '""',
                description: 'Additional CSS classes to apply to the card container',
            },
            {
                name: 'spotlightColor',
                type: 'string',
                required: false,
                default: '"rgba(255, 255, 255, 0.1)"',
                description: 'Color of the spotlight effect on hover',
            },
        ],
        examples: [
            {
                title: 'Basic Usage',
                code: `<SpotlightCard>
  <div className="p-6">
    <h3>Card Title</h3>
    <p>Card content here</p>
  </div>
</SpotlightCard>`,
            },
            {
                title: 'Custom Spotlight Color',
                code: `<SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)">
  <div className="p-6">Blue spotlight effect</div>
</SpotlightCard>`,
            },
        ],
        notes: [
            'Uses Framer Motion for smooth opacity transitions',
            'Spotlight follows mouse position within the card bounds',
        ],
    },

    'glow-button': {
        id: 'glow-button',
        props: [
            {
                name: 'children',
                type: 'React.ReactNode',
                required: true,
                description: 'Button label or content',
            },
            {
                name: 'className',
                type: 'string',
                required: false,
                default: '""',
                description: 'Additional CSS classes',
            },
            {
                name: 'onClick',
                type: '() => void',
                required: false,
                description: 'Click handler function',
            },
        ],
        examples: [
            {
                title: 'Basic Usage',
                code: '<GlowButton>Get Started</GlowButton>',
            },
        ],
    },

    terminal: {
        id: 'terminal',
        props: [],
        notes: [
            'This is a presentational component with no configurable props',
            'Uses SpotlightCard internally for the container effect',
        ],
    },

    'stats-card': {
        id: 'stats-card',
        props: [
            {
                name: 'title',
                type: 'string',
                required: true,
                description: 'Label for the statistic',
            },
            {
                name: 'value',
                type: 'string | number',
                required: true,
                description: 'The main metric value to display',
            },
            {
                name: 'change',
                type: 'number',
                required: false,
                description: 'Percentage change, positive or negative',
            },
            {
                name: 'icon',
                type: 'LucideIcon',
                required: false,
                description: 'Icon component to display',
            },
        ],
        examples: [
            {
                title: 'Basic Usage',
                code: '<StatsCard title="Total Users" value="12,345" change={12.5} />',
            },
        ],
    },

    'activity-feed': {
        id: 'activity-feed',
        props: [
            {
                name: 'activities',
                type: 'Activity[]',
                required: false,
                description: 'Array of activity items to display',
            },
            {
                name: 'maxItems',
                type: 'number',
                required: false,
                default: '5',
                description: 'Maximum number of items to show',
            },
        ],
    },

    'file-tree': {
        id: 'file-tree',
        props: [
            {
                name: 'items',
                type: 'FileTreeItem[]',
                required: false,
                description: 'Array of file/folder items',
            },
        ],
        notes: ['Supports nested folder structures with expand/collapse'],
    },

    'plan-picker': {
        id: 'plan-picker',
        props: [
            {
                name: 'plans',
                type: 'Plan[]',
                required: false,
                description: 'Array of pricing plans to display',
            },
            {
                name: 'onSelect',
                type: '(planId: string) => void',
                required: false,
                description: 'Callback when a plan is selected',
            },
        ],
    },

    'team-members': {
        id: 'team-members',
        props: [
            {
                name: 'members',
                type: 'TeamMember[]',
                required: false,
                description: 'Array of team members with name and avatar',
            },
            {
                name: 'max',
                type: 'number',
                required: false,
                default: '4',
                description: 'Max avatars to show before +N overflow',
            },
        ],
    },

    'shortcut-guide': {
        id: 'shortcut-guide',
        props: [],
        notes: ['Displays predefined keyboard shortcuts, no configuration needed'],
    },

    'deployment-pipeline': {
        id: 'deployment-pipeline',
        props: [
            {
                name: 'stages',
                type: 'Stage[]',
                required: false,
                description: 'Array of pipeline stages with status',
            },
        ],
    },

    'integration-toggle': {
        id: 'integration-toggle',
        props: [
            {
                name: 'name',
                type: 'string',
                required: true,
                description: 'Name of the integration',
            },
            {
                name: 'enabled',
                type: 'boolean',
                required: true,
                description: 'Whether the toggle is on or off',
            },
            {
                name: 'onToggle',
                type: '(enabled: boolean) => void',
                required: true,
                description: 'Callback when toggle state changes',
            },
            {
                name: 'icon',
                type: 'LucideIcon',
                required: false,
                description: 'Icon to display next to the name',
            },
        ],
    },

    'bento-card': {
        id: 'bento-card',
        props: [
            {
                name: 'children',
                type: 'React.ReactNode',
                required: true,
                description: 'Card content',
            },
            {
                name: 'className',
                type: 'string',
                required: false,
                description: 'Additional CSS classes',
            },
            {
                name: 'colSpan',
                type: '1 | 2',
                required: false,
                default: '1',
                description: 'Number of grid columns to span',
            },
            {
                name: 'rowSpan',
                type: '1 | 2',
                required: false,
                default: '1',
                description: 'Number of grid rows to span',
            },
        ],
        examples: [
            {
                title: 'Wide Card',
                code: '<BentoCard colSpan={2}>Wide content</BentoCard>',
            },
        ],
    },

    // Fintech components
    'digital-card': {
        id: 'digital-card',
        props: [
            {
                name: 'cardNumber',
                type: 'string',
                required: false,
                default: '"**** **** **** 4242"',
                description: 'Card number to display (usually masked)',
            },
            {
                name: 'holderName',
                type: 'string',
                required: false,
                default: '"JANE DOE"',
                description: 'Cardholder name',
            },
            {
                name: 'expiry',
                type: 'string',
                required: false,
                default: '"12/28"',
                description: 'Expiration date',
            },
        ],
    },

    'market-ticker': {
        id: 'market-ticker',
        props: [
            {
                name: 'stocks',
                type: 'Stock[]',
                required: false,
                description: 'Array of stock data with symbol, price, and change',
            },
        ],
    },

    'portfolio-chart': {
        id: 'portfolio-chart',
        props: [
            {
                name: 'data',
                type: 'ChartData[]',
                required: false,
                description: 'Array of data points for the chart',
            },
            {
                name: 'timeframe',
                type: '"1D" | "1W" | "1M" | "1Y"',
                required: false,
                default: '"1M"',
                description: 'Time period to display',
            },
        ],
    },

    'transaction-list': {
        id: 'transaction-list',
        props: [
            {
                name: 'transactions',
                type: 'Transaction[]',
                required: false,
                description: 'Array of transaction objects',
            },
        ],
    },

    // Cockpit components
    speedometer: {
        id: 'speedometer',
        props: [
            {
                name: 'speed',
                type: 'number',
                required: false,
                default: '0',
                description: 'Current speed value',
            },
            {
                name: 'maxSpeed',
                type: 'number',
                required: false,
                default: '200',
                description: 'Maximum speed on the gauge',
            },
            {
                name: 'unit',
                type: '"mph" | "km/h"',
                required: false,
                default: '"mph"',
                description: 'Speed unit label',
            },
        ],
    },

    'climate-control': {
        id: 'climate-control',
        props: [
            {
                name: 'temperature',
                type: 'number',
                required: false,
                default: '72',
                description: 'Current temperature setting',
            },
            {
                name: 'onTemperatureChange',
                type: '(temp: number) => void',
                required: false,
                description: 'Callback when temperature is adjusted',
            },
        ],
    },

    'lane-assist': {
        id: 'lane-assist',
        props: [
            {
                name: 'active',
                type: 'boolean',
                required: false,
                default: 'true',
                description: 'Whether lane assist is currently active',
            },
        ],
    },

    'media-widget': {
        id: 'media-widget',
        props: [
            {
                name: 'track',
                type: 'Track',
                required: false,
                description: 'Currently playing track info',
            },
            {
                name: 'isPlaying',
                type: 'boolean',
                required: false,
                default: 'false',
                description: 'Playback state',
            },
        ],
    },

    'nav-widget': {
        id: 'nav-widget',
        props: [
            {
                name: 'destination',
                type: 'string',
                required: false,
                description: 'Destination address or name',
            },
            {
                name: 'eta',
                type: 'string',
                required: false,
                description: 'Estimated time of arrival',
            },
        ],
    },

    // Game components
    'character-profile': {
        id: 'character-profile',
        props: [
            {
                name: 'name',
                type: 'string',
                required: false,
                description: 'Character name',
            },
            {
                name: 'level',
                type: 'number',
                required: false,
                description: 'Character level',
            },
            {
                name: 'stats',
                type: 'CharacterStats',
                required: false,
                description: 'Object with HP, MP, strength, etc.',
            },
        ],
    },

    'inventory-grid': {
        id: 'inventory-grid',
        props: [
            {
                name: 'items',
                type: 'InventoryItem[]',
                required: false,
                description: 'Array of inventory items',
            },
            {
                name: 'slots',
                type: 'number',
                required: false,
                default: '20',
                description: 'Total number of inventory slots',
            },
        ],
    },

    'quest-log': {
        id: 'quest-log',
        props: [
            {
                name: 'quests',
                type: 'Quest[]',
                required: false,
                description: 'Array of quests with objectives',
            },
        ],
    },

    // Legacy components
    'legacy-window': {
        id: 'legacy-window',
        props: [
            {
                name: 'title',
                type: 'string',
                required: true,
                description: 'Window title bar text',
            },
            {
                name: 'children',
                type: 'React.ReactNode',
                required: true,
                description: 'Window content',
            },
            {
                name: 'onClose',
                type: '() => void',
                required: false,
                description: 'Callback when X button is clicked',
            },
        ],
    },

    'legacy-button': {
        id: 'legacy-button',
        props: [
            {
                name: 'children',
                type: 'React.ReactNode',
                required: true,
                description: 'Button label',
            },
            {
                name: 'onClick',
                type: '() => void',
                required: false,
                description: 'Click handler',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                default: 'false',
                description: 'Disabled state',
            },
        ],
    },

    'desktop-icon': {
        id: 'desktop-icon',
        props: [
            {
                name: 'icon',
                type: 'string',
                required: true,
                description: 'Icon image source or emoji',
            },
            {
                name: 'label',
                type: 'string',
                required: true,
                description: 'Icon label text',
            },
            {
                name: 'onDoubleClick',
                type: '() => void',
                required: false,
                description: 'Double-click handler',
            },
        ],
    },
}

export const getComponentDoc = (id: string): ComponentDoc | undefined => {
    return componentDocs[id]
}
