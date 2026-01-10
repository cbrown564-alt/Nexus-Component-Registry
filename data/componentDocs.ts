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
    'cockpit-card': {
        id: 'cockpit-card',
        props: [
            { name: 'children', type: 'ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'label', type: 'string', required: false, description: 'Header label text' },
            { name: 'alert', type: 'boolean', required: false, defaultValue: 'false', description: 'Alert state with red border' },
        ],
        notes: ['Dark automotive aesthetic with matte texture', 'Optional alert state for warnings'],
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
    'legacy-alert': {
        id: 'legacy-alert',
        props: [],
        notes: ['Classic Windows 95/98 error dialog', 'Uses LegacyWindow and LegacyButton internally', 'Authentic retro styling'],
    },

    // Game components (continued)
    'leaderboard-widget': {
        id: 'leaderboard-widget',
        props: [],
        notes: ['Mock data implementation of a multiplayer leaderboard', 'Uses GameCard as a container'],
    },

    // Scifi Components
    'scifi-card': {
        id: 'scifi-card',
        props: [
            {
                name: 'children',
                type: 'React.ReactNode',
                required: true,
                description: 'Card content',
            },
            {
                name: 'title',
                type: 'string',
                required: false,
                description: 'Optional header title',
            },
            {
                name: 'delay',
                type: 'number',
                required: false,
                default: '0',
                description: 'Animation delay in seconds',
            },
        ],
        notes: ['Features corner accents and scanline background effect'],
    },

    'body-scanner': {
        id: 'body-scanner',
        props: [],
        notes: ['Animated visualization of biometric scanning', 'Purely presentational (mock data)'],
    },

    'dna-list': {
        id: 'dna-list',
        props: [],
        notes: ['Display list for genomic data sequences', 'Includes hover states and status indicators'],
    },

    'vitals-monitor': {
        id: 'vitals-monitor',
        props: [],
        notes: ['Dashboard of 3 distinct vital sign cards', 'Uses SVG animations for waveforms'],
    },

    // Education Components
    'course-card': {
        id: 'course-card',
        props: [
            {
                name: 'title',
                type: 'string',
                required: true,
                description: 'Title of the course',
            },
            {
                name: 'category',
                type: 'string',
                required: true,
                description: 'Subject category (e.g. Design, Code)',
            },
            {
                name: 'progress',
                type: 'number',
                required: true,
                description: 'Completion percentage (0-100)',
            },
            {
                name: 'totalModules',
                type: 'number',
                required: true,
                description: 'Total number of modules',
            },
            {
                name: 'completedModules',
                type: 'number',
                required: true,
                description: 'Number of completed modules',
            },
            {
                name: 'image',
                type: 'string',
                required: true,
                description: 'Background image URL or pattern',
            },
            {
                name: 'color',
                type: 'string',
                required: true,
                description: 'Tailwind color class for the bar (e.g., bg-violet-500)',
            },
        ],
    },

    'upcoming-schedule': {
        id: 'upcoming-schedule',
        props: [],
        notes: ['Timeline view of daily events', 'Includes "live" pulsing indicator state'],
    },
    'education-button': {
        id: 'education-button',
        props: [
            { name: 'children', type: 'ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'outline'", required: false, defaultValue: "'primary'", description: 'Visual style variant' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, defaultValue: "'md'", description: 'Button size' },
            { name: 'icon', type: 'ReactNode', required: false, description: 'Optional leading icon' },
            { name: 'disabled', type: 'boolean', required: false, defaultValue: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        examples: [{ name: 'Primary', code: '<EducationButton>Start Learning</EducationButton>' }],
        notes: ['Gradient shine effect on primary variant', 'Includes pulsing progress dot'],
    },
    'education-card': {
        id: 'education-card',
        props: [
            { name: 'children', type: 'ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, defaultValue: '0', description: 'Animation delay in seconds' },
            { name: 'featured', type: 'boolean', required: false, defaultValue: 'false', description: 'Featured purple variant' },
        ],
        examples: [{ name: 'Featured Card', code: '<EducationCard featured>Special Offer</EducationCard>' }],
        notes: ['Animated entry with fade and slide', 'Featured variant has purple gradient background'],
    },
    'study-stats': {
        id: 'study-stats',
        props: [],
        notes: ['Displays 4 key metrics: Hours, Assignments, Grade, Courses', 'Uses EducationCard internally'],
    },

    // Social Components
    'feed-post': {
        id: 'feed-post',
        props: [
            {
                name: 'author',
                type: '{ name: string; handle: string; avatar: string; time: string }',
                required: true,
                description: 'Author details object',
            },
            {
                name: 'content',
                type: 'string',
                required: true,
                description: 'Text content of the post',
            },
            {
                name: 'image',
                type: 'string',
                required: false,
                description: 'Optional post image URL',
            },
            {
                name: 'stats',
                type: '{ likes: number; comments: number; shares: number }',
                required: true,
                description: 'Interaction counts',
            },
        ],
        notes: ['Interactive like button with counter animation'],
    },

    'profile-summary': {
        id: 'profile-summary',
        props: [],
        notes: ['Profile sidebar card with cover photo and stats', 'Exported as ProfileSummary from ProfileSidebar.tsx'],
    },

    // Ecommerce Components
    'product-card': {
        id: 'product-card',
        props: [
            {
                name: 'title',
                type: 'string',
                required: true,
                description: 'Product name',
            },
            {
                name: 'category',
                type: 'string',
                required: true,
                description: 'Product category',
            },
            {
                name: 'price',
                type: 'string',
                required: true,
                description: 'Formatted price string',
            },
            {
                name: 'image',
                type: 'string',
                required: true,
                description: 'Product image URL',
            },
            {
                name: 'badge',
                type: 'string',
                required: false,
                description: 'Optional badge text (e.g. NEW)',
            },
        ],
        notes: ['Hover effects for "Quick Add" and image zoom'],
    },

    'cart-summary': {
        id: 'cart-summary',
        props: [],
        notes: ['Shopping bag summary with item list and totals', 'Glassmorphism background effect'],
    },

    // ============================================
    // TIER 1: SciFi Visibility-Related Components
    // ============================================

    'neon-toggle': {
        id: 'neon-toggle',
        props: [
            { name: 'label', type: 'string', required: false, description: 'Text label displayed next to the toggle' },
            { name: 'initialState', type: 'boolean', required: false, default: 'false', description: 'Initial toggle state' },
            { name: 'onChange', type: '(state: boolean) => void', required: false, description: 'Callback when toggle state changes' },
            { name: 'color', type: '"cyan" | "magenta" | "green" | "amber"', required: false, default: '"cyan"', description: 'Neon glow color theme' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        examples: [
            { title: 'Basic Toggle', code: '<NeonToggle label="Power" initialState={true} color="cyan" />' },
        ],
        notes: ['Uses Framer Motion for smooth knob animation', 'Glow effect changes based on on/off state'],
    },

    'glitch-heading': {
        id: 'glitch-heading',
        props: [
            { name: 'text', type: 'string', required: true, description: 'The heading text to display' },
            { name: 'size', type: '"sm" | "md" | "lg" | "xl"', required: false, default: '"lg"', description: 'Text size variant' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'color', type: 'string', required: false, default: '"text-cyan-400"', description: 'Tailwind text color class' },
        ],
        examples: [
            { title: 'Cyberpunk Title', code: '<GlitchHeading text="CYBERPUNK" size="xl" />' },
        ],
        notes: ['Random glitch effect triggers every 3 seconds', 'Hover triggers immediate glitch', 'Uses CSS clip-path animations'],
    },

    'holographic-table': {
        id: 'holographic-table',
        props: [
            { name: 'columns', type: 'Column[]', required: false, description: 'Array of column definitions with key, header, and optional width' },
            { name: 'data', type: 'any[]', required: false, description: 'Array of row data objects' },
            { name: 'title', type: 'string', required: false, default: '"System Data"', description: 'Table header title' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        examples: [
            { title: 'System Data Table', code: `<HolographicTable 
  columns={[{ key: 'id', header: 'ID' }, { key: 'status', header: 'Status' }]}
  data={[{ id: '01', status: 'Online' }]}
/>` },
        ],
        notes: ['Scanline hover effect on rows', 'Wrapped in SciFiCard container', 'Cyan color theme'],
    },

    // ============================================
    // TIER 2: High-Value Interactive Components
    // ============================================

    'code-block': {
        id: 'code-block',
        props: [
            { name: 'code', type: 'string', required: true, description: 'The code content to display' },
            { name: 'language', type: 'string', required: false, default: '"typescript"', description: 'Programming language for the badge' },
            { name: 'filename', type: 'string', required: false, description: 'Optional filename to show in header' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes for inner container' },
            { name: 'wrapperClassName', type: 'string', required: false, description: 'Additional CSS classes for outer container' },
            { name: 'showLineNumbers', type: 'boolean', required: false, default: 'false', description: 'Display line numbers' },
        ],
        examples: [
            { title: 'TypeScript Example', code: '<CodeBlock code="const x = 1;" language="typescript" filename="example.ts" />' },
        ],
        notes: ['Includes copy-to-clipboard functionality', 'Traffic light decorations in header'],
    },

    'pipeline-steps': {
        id: 'pipeline-steps',
        props: [
            { name: 'steps', type: 'Step[]', required: false, description: 'Array of step objects with name and status (pending/running/success/failed)' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        examples: [
            { title: 'CI/CD Pipeline', code: `<PipelineSteps steps={[
  { name: 'Build', status: 'success' },
  { name: 'Deploy', status: 'running' }
]} />` },
        ],
        notes: ['Animated spinner for running status', 'Connectors change color based on completion'],
    },

    'metric-card': {
        id: 'metric-card',
        props: [
            { name: 'label', type: 'string', required: true, description: 'Metric label text' },
            { name: 'value', type: 'string', required: true, description: 'Main metric value' },
            { name: 'trend', type: 'string', required: true, description: 'Trend percentage string' },
            { name: 'trendUp', type: 'boolean', required: true, description: 'Whether trend is positive' },
            { name: 'icon', type: 'LucideIcon', required: true, description: 'Icon component to display' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay in seconds' },
        ],
        notes: ['Uses SaasCard as container', 'Trend arrow color based on direction'],
    },

    'clay-toggle': {
        id: 'clay-toggle',
        props: [
            { name: 'checked', type: 'boolean', required: true, description: 'Toggle checked state' },
            { name: 'onChange', type: '() => void', required: true, description: 'Callback when toggled' },
            { name: 'color', type: 'string', required: false, default: '"bg-emerald-400"', description: 'Tailwind background color when checked' },
            { name: 'aria-label', type: 'string', required: false, default: '"Toggle"', description: 'Accessible label' },
        ],
        notes: ['Neumorphic clay styling with soft shadows', 'Checkmark appears when checked'],
    },

    'device-toggle': {
        id: 'device-toggle',
        props: [
            { name: 'label', type: 'string', required: true, description: 'Device name label' },
            { name: 'icon', type: 'React.ElementType', required: true, description: 'Icon component for the device' },
            { name: 'initialState', type: 'boolean', required: false, default: 'false', description: 'Initial toggle state' },
        ],
        notes: ['Smart home style toggle', 'Uses NeumorphicCard container', 'Full accessible button semantics'],
    },

    // ============================================
    // Engineering Theme
    // ============================================

    'engineering-card': {
        id: 'engineering-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'variant', type: '"default" | "highlight" | "dark"', required: false, default: '"default"', description: 'Visual style variant' },
        ],
        notes: ['Subtle gradient overlay', 'Dark theme optimized'],
    },

    'engineering-button': {
        id: 'engineering-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost"', required: false, default: '"primary"', description: 'Button style variant' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Shine effect on hover', 'Focus ring styled for dark backgrounds'],
    },

    'console-output': {
        id: 'console-output',
        props: [
            { name: 'logs', type: 'LogEntry[]', required: false, description: 'Array of log entries with id, type, message, and optional timestamp' },
            { name: 'title', type: 'string', required: false, default: '"Console"', description: 'Header title' },
            { name: 'maxHeight', type: 'string', required: false, default: '"300px"', description: 'Maximum height of log area' },
            { name: 'showTimestamps', type: 'boolean', required: false, default: 'true', description: 'Show timestamps on each log' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'autoScroll', type: 'boolean', required: false, default: 'true', description: 'Auto-scroll to new logs' },
        ],
        notes: ['Log types: info, warn, error, success, debug', 'Live indicator animation', 'Scroll-to-bottom button'],
    },

    'git-diff-view': {
        id: 'git-diff-view',
        props: [
            { name: 'files', type: 'DiffFile[]', required: false, description: 'Array of file diffs with lines and stats' },
            { name: 'compact', type: 'boolean', required: false, default: 'false', description: 'Show only file headers without line details' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Line numbers for old and new versions', 'Color-coded additions/deletions', 'Unified diff format'],
    },

    'server-stat-badge': {
        id: 'server-stat-badge',
        props: [
            { name: 'label', type: 'string', required: false, default: '"Server Status"', description: 'Metric label' },
            { name: 'value', type: 'string | number', required: false, default: '"99.9%"', description: 'Metric value' },
            { name: 'status', type: '"healthy" | "warning" | "critical" | "offline"', required: false, default: '"healthy"', description: 'Server status' },
            { name: 'metric', type: '"cpu" | "memory" | "disk" | "network" | "custom"', required: false, default: '"custom"', description: 'Metric type for auto-icon' },
            { name: 'icon', type: 'LucideIcon', required: false, description: 'Custom icon override' },
            { name: 'trend', type: '"up" | "down" | "stable"', required: false, description: 'Trend direction' },
            { name: 'trendValue', type: 'string', required: false, description: 'Trend percentage text' },
            { name: 'showPulse', type: 'boolean', required: false, default: 'true', description: 'Show pulsing status indicator' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Badge size' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Animated pulse for live status', 'Auto-selects icon based on metric type'],
    },

    // ============================================
    // Wellness Theme
    // ============================================

    'wellness-card': {
        id: 'wellness-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay in seconds' },
        ],
        notes: ['Glassmorphism effect with backdrop blur', 'Organic rounded corners', 'Hover lift animation'],
    },

    'wellness-button': {
        id: 'wellness-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost" | "soft"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Optional icon element' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Sage green color palette', 'Soft, calming animations'],
    },

    'breath-player': {
        id: 'breath-player',
        props: [],
        notes: ['Interactive breathing exercise with play/pause', 'Animated glowing rings', 'Fixed 4s inhale, 4s hold, 6s exhale timing'],
    },

    'sleep-graph': {
        id: 'sleep-graph',
        props: [],
        notes: ['7-day sleep duration bar chart', 'Dark theme variant of WellnessCard', 'Hover tooltips showing hours'],
    },

    'mood-selector': {
        id: 'mood-selector',
        props: [],
        notes: ['4 mood options with icons', 'Weekly balance indicator', 'Selection state with subtle highlight'],
    },

    'journal-entry': {
        id: 'journal-entry',
        props: [
            { name: 'date', type: 'string', required: false, description: 'Display date for the entry (defaults to current date)' },
            { name: 'prompt', type: 'string', required: false, default: '"What made you smile today?"', description: 'Writing prompt to inspire reflection' },
            { name: 'initialText', type: 'string', required: false, default: '""', description: 'Pre-filled journal text' },
            { name: 'onSave', type: '(text: string) => void', required: false, description: 'Callback when entry is saved' },
            { name: 'gratitudeMode', type: 'boolean', required: false, default: 'false', description: 'Enables gratitude styling with heart icon' },
        ],
        examples: [
            {
                title: 'Gratitude Journal',
                code: `<JournalEntry 
  gratitudeMode={true}
  prompt="What are you grateful for today?"
  onSave={(text) => console.log('Saved:', text)}
/>`,
            },
            {
                title: 'Reflection Journal',
                code: `<JournalEntry 
  prompt="What did you learn today?"
  date="Monday, January 10"
/>`,
            },
        ],
        notes: ['Lined paper aesthetic with repeating gradient', 'Character count display', 'Save confirmation animation'],
    },

    'meditation-timer': {
        id: 'meditation-timer',
        props: [
            { name: 'duration', type: 'number', required: false, default: '10', description: 'Default duration in minutes' },
            { name: 'onComplete', type: '() => void', required: false, description: 'Callback when timer completes' },
            { name: 'soundEnabled', type: 'boolean', required: false, default: 'true', description: 'Initial sound toggle state' },
            { name: 'presets', type: 'number[]', required: false, default: '[5, 10, 15, 20]', description: 'Available duration presets in minutes' },
        ],
        examples: [
            {
                title: 'Basic Timer',
                code: `<MeditationTimer 
  duration={10}
  onComplete={() => alert('Session complete!')}
/>`,
            },
            {
                title: 'Custom Presets',
                code: `<MeditationTimer 
  presets={[3, 5, 10, 20, 30]}
  soundEnabled={false}
/>`,
            },
        ],
        notes: ['Circular progress ring with gradient', 'Breathing glow animation when running', 'Play/pause and reset controls'],
    },

    'habit-checkbox': {
        id: 'habit-checkbox',
        props: [
            { name: 'label', type: 'string', required: true, description: 'Habit name/title' },
            { name: 'description', type: 'string', required: false, description: 'Secondary description text' },
            { name: 'icon', type: '"flame" | "droplets" | "moon" | "sun" | "heart" | "dumbbell" | "book" | "salad"', required: false, default: '"flame"', description: 'Icon to display' },
            { name: 'streak', type: 'number', required: false, default: '0', description: 'Current streak count' },
            { name: 'checked', type: 'boolean', required: false, description: 'Controlled checked state' },
            { name: 'onToggle', type: '(checked: boolean) => void', required: false, description: 'Toggle callback' },
            { name: 'color', type: '"sage" | "amber" | "rose" | "sky" | "violet"', required: false, default: '"sage"', description: 'Color theme' },
        ],
        examples: [
            {
                title: 'Morning Habit',
                code: `<HabitCheckbox 
  label="Morning meditation"
  description="10 minutes of mindfulness"
  icon="sun"
  streak={7}
  color="amber"
/>`,
            },
            {
                title: 'Hydration Tracker',
                code: `<HabitCheckbox 
  label="Drink 8 glasses"
  icon="droplets"
  color="sky"
  onToggle={(checked) => console.log(checked)}
/>`,
            },
        ],
        notes: ['Celebration particles on check', 'Streak counter with flame icon', 'Keyboard accessible'],
    },

    // ============================================
    // SaaS Theme
    // ============================================

    'saas-card': {
        id: 'saas-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
            { name: 'noPadding', type: 'boolean', required: false, default: 'false', description: 'Remove default padding' },
        ],
        notes: ['Dark slate theme', 'Subtle backdrop blur'],
    },

    'saas-button': {
        id: 'saas-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost" | "control"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"xs" | "sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Optional icon' },
            { name: 'active', type: 'boolean', required: false, default: 'false', description: 'Active state for control variant' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Indigo accent color', 'Control variant for tab-like buttons'],
    },

    'revenue-chart': {
        id: 'revenue-chart',
        props: [],
        notes: ['SVG-based area chart', 'Time range selector', 'Tooltip with hover data'],
    },

    'customer-table': {
        id: 'customer-table',
        props: [],
        notes: ['Transaction list with search and filter', 'Status badges', 'Hover reveal for actions'],
    },

    // ============================================
    // Music Theme
    // ============================================

    'music-card': {
        id: 'music-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['Dark glass effect with backdrop blur', 'Rose accent color'],
    },

    'music-button': {
        id: 'music-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost" | "pill"', required: false, default: '"secondary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg" | "icon"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Spotify-inspired aesthetics', 'Glow effect on primary icon size'],
    },

    'now-playing': {
        id: 'now-playing',
        props: [],
        notes: ['Album art with hover zoom', 'Play/pause controls', 'Like button', 'Animated visualizer bars'],
    },

    'track-list': {
        id: 'track-list',
        props: [],
        notes: ['Playlist view with album art thumbnails', 'Active track indicator', 'Play count display'],
    },

    'album-grid': {
        id: 'album-grid',
        props: [],
        notes: ['Responsive album card grid', 'Hover play button reveal', 'Staggered entrance animation'],
    },

    // ============================================
    // Grid Theme (City Builder)
    // ============================================

    'grid-card': {
        id: 'grid-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
            { name: 'title', type: 'string', required: false, description: 'Optional header title' },
            { name: 'noPadding', type: 'boolean', required: false, default: 'false', description: 'Remove default padding' },
        ],
        notes: ['Blueprint grid background', 'Corner markers', 'Industrial blue theme'],
    },

    'grid-button': {
        id: 'grid-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "danger"', required: false, default: '"secondary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'status', type: '"online" | "warning" | "offline" | "idle"', required: false, description: 'LED status indicator' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Industrial beveled styling', 'Status LED indicator', 'Corner decorations'],
    },

    'city-map': {
        id: 'city-map',
        props: [],
        notes: ['Interactive zone hover tooltips', 'Animated ping indicators', 'Status-based zone coloring', 'Legend overlay'],
    },

    'resource-gauge': {
        id: 'resource-gauge',
        props: [],
        notes: ['Circular SVG progress gauges', 'Power, Water, Bandwidth metrics', 'Animated fill on mount'],
    },

    'system-controls': {
        id: 'system-controls',
        props: [],
        notes: ['Toggle switches for system settings', 'Uptime and security stats', 'System diagnostics button'],
    },

    // ============================================
    // Brutalist Theme
    // ============================================

    'brutalist-card': {
        id: 'brutalist-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'color', type: 'string', required: false, default: '"bg-white"', description: 'Tailwind background color class' },
        ],
        notes: ['Hard shadow offset effect', 'Hover reduces shadow for press effect', 'Thick black borders'],
    },

    'brutalist-button': {
        id: 'brutalist-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"neo" | "reverse" | "outline"', required: false, default: '"neo"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg" | "icon"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'color', type: 'string', required: false, description: 'Custom background color override' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Hard shadow with active press animation', 'Monospace uppercase text'],
    },

    'marquee-header': {
        id: 'marquee-header',
        props: [
            { name: 'text', type: 'string', required: false, default: '"BRUTALISM // ARCHIVE // RAW // UNPOLISHED // "', description: 'Scrolling text content' },
        ],
        notes: ['CSS animation infinite scroll', 'Yellow background with black text', 'Border top and bottom'],
    },

    'art-grid': {
        id: 'art-grid',
        props: [],
        notes: ['Masonry-style image grid', 'Grayscale to color on hover', 'Yellow overlay with project title'],
    },

    'manifesto': {
        id: 'manifesto',
        props: [],
        notes: ['Decorative design manifesto text', 'Mixed typography styles', 'Floating sticker decoration'],
    },

    // ============================================
    // Kitchen Theme
    // ============================================

    'kitchen-card': {
        id: 'kitchen-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Warm cream background', 'Soft shadow offset', 'Rounded corners'],
    },

    'kitchen-button': {
        id: 'kitchen-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost" | "icon"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg" | "icon"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'isActive', type: 'boolean', required: false, default: 'false', description: 'Active state for secondary' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Orange accent color', 'Tactile offset shadow'],
    },

    'active-step': {
        id: 'active-step',
        props: [],
        notes: ['Recipe step display', 'Progress bar', 'Timer action button', 'Navigation controls'],
    },

    'ingredient-scale': {
        id: 'ingredient-scale',
        props: [],
        notes: ['Dynamic serving size scaling', 'Checkbox ingredient list', 'Amount auto-calculates'],
    },

    'smart-timer': {
        id: 'smart-timer',
        props: [],
        notes: ['Fixed position timer widget', 'Multiple timer support', 'Collapsible interface', 'Progress bars'],
    },

    // ============================================
    // Kids Theme
    // ============================================

    'kids-card': {
        id: 'kids-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'color', type: 'string', required: false, default: '"bg-white"', description: 'Background color class' },
            { name: 'borderColor', type: 'string', required: false, default: '"border-zinc-200"', description: 'Border color class' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Bouncy spring animation', 'Thick playful borders', 'Random rotation on hover'],
    },

    'kids-button': {
        id: 'kids-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "accent" | "success"', required: false, default: '"primary"', description: 'Color variant' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"lg"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'color', type: 'string', required: false, description: 'Custom color override' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Thick bottom border for 3D effect', 'Glossy top reflection', 'Wiggle animation on hover'],
    },

    'big-icon-nav': {
        id: 'big-icon-nav',
        props: [],
        notes: ['Large colorful icon buttons', 'Bounce animation on hover', 'Frosted glass container'],
    },

    'star-progress': {
        id: 'star-progress',
        props: [],
        notes: ['5-star progress indicator', 'Click to cycle through stars', 'Bounce and wiggle animations'],
    },

    'mascot': {
        id: 'mascot',
        props: [],
        notes: ['Animated character with floating animation', 'Moving eyes', 'Speech bubble with delay'],
    },

    // ============================================
    // E-Ink Theme
    // ============================================

    'eink-card': {
        id: 'eink-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'noBorder', type: 'boolean', required: false, default: 'false', description: 'Remove border' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Paper texture overlay', 'Black and white aesthetic', 'Sharp borders'],
    },

    'eink-button': {
        id: 'eink-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "ghost" | "icon"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['E-ink screen refresh flash effect on click', 'High contrast black/white'],
    },

    'eink-sidebar': {
        id: 'eink-sidebar',
        props: [
            { name: 'activeTab', type: 'string', required: true, description: 'Currently active tab ID' },
            { name: 'setActiveTab', type: '(tab: string) => void', required: true, description: 'Tab change handler' },
        ],
        notes: ['Navigation menu', 'Battery and WiFi status indicators', 'Underline for active item'],
    },

    'reader-content': {
        id: 'reader-content',
        props: [],
        notes: ['Book reading view', 'Drop cap for first letter', 'Progress bar with handwritten style', 'Page navigation'],
    },

    'library-grid': {
        id: 'library-grid',
        props: [],
        notes: ['Book cover grid', 'Grayscale images', 'Progress indicator bar', 'Browse store placeholder'],
    },

    // ============================================
    // Solarpunk Theme
    // ============================================

    'solar-card': {
        id: 'solar-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['Organic asymmetric rounded corners', 'Decorative gradient blurs', 'Glassmorphism effect'],
    },

    'solarpunk-button': {
        id: 'solarpunk-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Emerald/teal gradient', 'Leaf pattern overlay', 'Organic glow animation'],
    },

    'energy-sun': {
        id: 'energy-sun',
        props: [],
        notes: ['Rotating sun ray animation', 'Solar harvest metric display', 'Storage and grid feed stats'],
    },

    'air-quality-leaf': {
        id: 'air-quality-leaf',
        props: [],
        notes: ['Leaf-shaped SVG progress', 'AQI visualization', 'PM2.5, humidity, CO2 metrics'],
    },

    // ============================================
    // Legal Theme
    // ============================================

    'legal-paper': {
        id: 'legal-paper',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Paper content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'title', type: 'string', required: false, description: 'Document title' },
        ],
        notes: ['Hole punch decorations', 'Red margin line', 'Legal document styling'],
    },

    'clause': {
        id: 'clause',
        props: [
            { name: 'number', type: 'string', required: true, description: 'Clause number' },
            { name: 'title', type: 'string', required: false, description: 'Clause title' },
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Clause content' },
            { name: 'isActive', type: 'boolean', required: false, default: 'false', description: 'Highlight state' },
            { name: 'hasComment', type: 'boolean', required: false, default: 'false', description: 'Show comment indicator' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Paragraph numbering', 'Hover comment action', 'Blue highlight for active'],
    },

    'legal-button': {
        id: 'legal-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "toolbar" | "ghost"', required: false, default: '"secondary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'type', type: '"button" | "submit" | "reset"', required: false, default: '"button"', description: 'HTML button type' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Professional, authoritative styling', 'Ghost variant has underline animation'],
    },

    'redline-sidebar': {
        id: 'redline-sidebar',
        props: [],
        notes: ['Comment and change thread display', 'Accept/reject change actions', 'Active comment highlighting'],
    },

    'diff-viewer': {
        id: 'diff-viewer',
        props: [],
        notes: ['Side-by-side version comparison', 'Highlighted additions/deletions', 'Version labels'],
    },

    // ============================================
    // Soft Plastic / Neumorphic Theme
    // ============================================

    'neumorphic-card': {
        id: 'neumorphic-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'inset', type: 'boolean', required: false, default: 'false', description: 'Use inset shadow style' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Classic neumorphic shadows', 'Light gray base color', 'Toggle between raised/inset'],
    },

    'neumorphic-button': {
        id: 'neumorphic-button',
        props: [
            { name: 'icon', type: 'React.ElementType', required: false, description: 'Icon component' },
            { name: 'label', type: 'string', required: false, description: 'Button label' },
            { name: 'active', type: 'boolean', required: false, default: 'false', description: 'Active/pressed state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
            { name: 'variant', type: '"circle" | "pill" | "square"', required: false, default: '"square"', description: 'Shape variant' },
            { name: 'aria-label', type: 'string', required: false, description: 'Accessible label' },
        ],
        notes: ['Shadow inverts when active', 'Active indicator dot', 'Multiple shape variants'],
    },

    'thermostat-dial': {
        id: 'thermostat-dial',
        props: [],
        notes: ['Circular temperature dial', 'Nested neumorphic rings', 'Temperature +/- controls', 'Humidity display'],
    },

    // ============================================
    // Festival Theme
    // ============================================

    'festival-card': {
        id: 'festival-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
            { name: 'gradient', type: 'string', required: false, default: '"from-fuchsia-500 via-purple-500 to-cyan-500"', description: 'Top border gradient' },
        ],
        notes: ['Vibrant gradient top border', 'Dark glass background', 'Ambient corner glow'],
    },

    'festival-button': {
        id: 'festival-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "icon"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
            { name: 'onClick', type: '() => void', required: false, description: 'Click handler' },
        ],
        notes: ['Animated gradient background', 'Shimmer overlay', 'Pulsing ring effect'],
    },

    'soundwave-timeline': {
        id: 'soundwave-timeline',
        props: [],
        notes: ['Animated audio waveform bars', 'Interactive time markers', 'Live indicator', 'Playhead line'],
    },

    'crowd-heatmap': {
        id: 'crowd-heatmap',
        props: [],
        notes: ['Interactive venue map', 'Density zones with tooltips', 'User location marker', 'Ping animations'],
    },

    'ticket-wallet': {
        id: 'ticket-wallet',
        props: [],
        notes: ['QR code ticket display', 'Holographic hover effect', 'Scan line animation', 'Entry info'],
    },

    // ============================================
    // Acid Theme
    // ============================================

    'acid-card': {
        id: 'acid-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'rotate', type: 'number', required: false, default: '0', description: 'Rotation angle in degrees' },
            { name: 'color', type: 'string', required: false, default: '"bg-white"', description: 'Background color class' },
            { name: 'hoverRotate', type: 'boolean', required: false, default: 'true', description: 'Counter-rotate on hover' },
        ],
        notes: ['Hard black shadow', 'Thick borders', 'Rotation support'],
    },

    'acid-button': {
        id: 'acid-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "black"', required: false, default: '"primary"', description: 'Color variant' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Neon yellow/magenta colors', 'Hard shadow press effect', 'Bold uppercase text'],
    },

    'glitch-text': {
        id: 'glitch-text',
        props: [
            { name: 'text', type: 'string', required: true, description: 'Text to display' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'as', type: '"h1" | "h2" | "h3" | "p" | "span"', required: false, default: '"span"', description: 'HTML element to render' },
        ],
        notes: ['RGB split effect on hover', 'Red and cyan offset layers'],
    },

    'sticker': {
        id: 'sticker',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Sticker content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
            { name: 'rotation', type: 'number', required: false, default: '12', description: 'Rotation angle' },
        ],
        notes: ['Bouncy spring entrance', 'Yellow background', 'Absolute positioning'],
    },

    'marquee': {
        id: 'marquee',
        props: [
            { name: 'text', type: 'string', required: true, description: 'Scrolling text content' },
            { name: 'direction', type: '"left" | "right" | "up" | "down"', required: false, default: '"left"', description: 'Scroll direction' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'speed', type: 'string', required: false, default: '"10s"', description: 'Animation duration' },
        ],
        notes: ['Infinite scroll animation', 'Supports vertical and horizontal', 'Text repeats 10x for seamless loop'],
    },

    // ============================================
    // Clay / Claymorphism Theme
    // ============================================

    'clay-card': {
        id: 'clay-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'color', type: 'string', required: false, default: '"bg-white"', description: 'Background color class' },
            { name: 'shadowColor', type: 'string', required: false, default: '"#cad4e0"', description: 'Shadow base color (hex)' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['3D clay effect with multiple shadows', 'Inner highlight and shadow', 'Bouncy spring animation'],
    },

    'clay-button': {
        id: 'clay-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "danger"', required: false, default: '"primary"', description: 'Color variant' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Multi-layer shadow for depth', 'Color-matched shadows', 'Scale animation'],
    },

    // ============================================
    // Blueprint Theme
    // ============================================

    'blueprint-card': {
        id: 'blueprint-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'title', type: 'string', required: false, description: 'Title in header block' },
            { name: 'code', type: 'string', required: false, description: 'Code identifier in header' },
        ],
        notes: ['Corner registration marks', 'Title block with code prefix', 'White border on blue background'],
    },

    'cad-viewer': {
        id: 'cad-viewer',
        props: [
            { name: 'activeLayers', type: 'Record<string, boolean>', required: true, description: 'Layer visibility states' },
        ],
        notes: ['SVG floor plan display', 'Layer-based visibility', 'Crosshair cursor on hover', 'Multiple layer types: Structure, Furniture, Electrical, Dimensions'],
    },

    'layer-control': {
        id: 'layer-control',
        props: [
            { name: 'layers', type: 'Record<string, boolean>', required: true, description: 'Layer visibility states' },
            { name: 'toggleLayer', type: '(layer: string) => void', required: true, description: 'Layer toggle handler' },
        ],
        notes: ['Toggle buttons for each layer', 'Visual checkbox indicators', 'Eye icon for visibility state'],
    },

    // ============================================
    // Swiss Theme
    // ============================================

    'swiss-button': {
        id: 'swiss-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Swiss red primary color', 'Bold uppercase typography', 'Diagonal stripe pattern on hover'],
    },

    'swiss-grid': {
        id: 'swiss-grid',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Grid items' },
            { name: 'columns', type: '2 | 3 | 4 | 6 | 12', required: false, default: '12', description: 'Number of columns' },
            { name: 'gap', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Gap size' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['12-column grid system', 'Responsive breakpoints', 'Use with SwissGridItem for column spans'],
    },

    'swiss-typography': {
        id: 'swiss-typography',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Text content' },
            { name: 'variant', type: '"display" | "headline" | "title" | "body" | "caption"', required: false, default: '"body"', description: 'Typography style' },
            { name: 'color', type: '"black" | "red" | "muted"', required: false, default: '"black"', description: 'Text color' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'as', type: 'React.ElementType', required: false, default: '"div"', description: 'HTML element to render' },
        ],
        notes: ['Swiss design typography scale', 'Tight letter-spacing for display sizes', 'Caption uses wide letter-spacing'],
    },

    'swiss-divider': {
        id: 'swiss-divider',
        props: [
            { name: 'variant', type: '"horizontal" | "vertical"', required: false, default: '"horizontal"', description: 'Divider orientation' },
            { name: 'weight', type: '"thin" | "medium" | "thick"', required: false, default: '"medium"', description: 'Line thickness' },
            { name: 'color', type: '"black" | "red"', required: false, default: '"black"', description: 'Divider color' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Animated scale-in on mount', 'Swiss red accent option'],
    },
    'swiss-card': {
        id: 'swiss-card',
        props: [
            { name: 'children', type: 'ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'bordered', type: 'boolean', required: false, defaultValue: 'false', description: 'Add black border' },
            { name: 'inverted', type: 'boolean', required: false, defaultValue: 'false', description: 'International red background' },
            { name: 'black', type: 'boolean', required: false, defaultValue: 'false', description: 'Black background variant' },
            { name: 'delay', type: 'number', required: false, defaultValue: '0', description: 'Animation delay' },
        ],
        notes: ['Sharp rectangular corners for Swiss aesthetic', 'Three variants: white, red (inverted), black'],
    },
    'swiss-metric': {
        id: 'swiss-metric',
        props: [
            { name: 'label', type: 'string', required: true, description: 'Metric label text' },
            { name: 'value', type: 'string', required: true, description: 'Large display value' },
            { name: 'description', type: 'string', required: false, description: 'Optional description text' },
            { name: 'size', type: '"large" | "medium" | "small"', required: false, defaultValue: '"medium"', description: 'Typography size' },
        ],
        notes: ['Animated border expansion on hover', 'Massive typography for data visualization'],
    },

    // ============================================
    // Single Button Components (Various Themes)
    // ============================================

    'food-button': {
        id: 'food-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "outline" | "ghost"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Orange accent color', 'Gradient overlay on primary', 'Warm, inviting aesthetic'],
    },

    'editorial-button': {
        id: 'editorial-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "link" | "outline"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Serif typography', 'Link variant with arrow', 'Hover fill effect for primary'],
    },
    'magazine-card': {
        id: 'magazine-card',
        props: [
            { name: 'children', type: 'ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, defaultValue: '0', description: 'Animation delay' },
            { name: 'hoverEffect', type: 'boolean', required: false, defaultValue: 'true', description: 'Enable hover lift effect' },
            { name: 'noPadding', type: 'boolean', required: false, defaultValue: 'false', description: 'Remove default padding' },
        ],
        notes: ['Elegant editorial feel with custom bezier animation', 'Shadow lift on hover'],
    },
    'feature-story': {
        id: 'feature-story',
        props: [],
        notes: ['Full-width hero article component', 'Large image with overlay text', 'Uses EditorialButton for CTA'],
    },
    'newsletter': {
        id: 'newsletter',
        props: [],
        notes: ['Dark themed signup card', 'Minimal email input with inline submit', 'Uses MagazineCard internally'],
    },
    'trending-list': {
        id: 'trending-list',
        props: [],
        notes: ['Numbered list (01-04) of trending articles', 'Hover underline effect', 'Category tags'],
    },

    'shop-button': {
        id: 'shop-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "add-to-cart"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Add-to-cart variant includes shopping bag icon', 'Slide-in background on hover', 'Uppercase tracking'],
    },
    'commerce-card': {
        id: 'commerce-card',
        props: [
            { name: 'children', type: 'ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, defaultValue: '0', description: 'Animation delay' },
        ],
        notes: ['Clean minimal white card', 'Fade-up animation on mount'],
    },
    'promo-banner': {
        id: 'promo-banner',
        props: [],
        notes: ['Full-width promotional hero', 'Background image with gradient overlay', 'CTA with arrow animation'],
    },

    'flow-button': {
        id: 'flow-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
        ],
        notes: ['Amber accent color', 'Pulsing ring effect for primary', 'Focus ring styled for dark background'],
    },

    // ============================================
    // Extended Components (Jan 2026)
    // ============================================

    // Game Extended
    'game-button': {
        id: 'game-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "accent" | "ghost" | "icon"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg" | "icon"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
        ],
        notes: ['Neon gradient glow', 'Arcade-style uppercase font', 'Animated gradient background for primary'],
    },

    'game-card': {
        id: 'game-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'variant', type: '"primary" | "secondary" | "accent"', required: false, default: '"primary"', description: 'Color variant' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['Fuchsia/cyan/amber color variants', 'Glossy sheen overlay', 'Spring bounce animation'],
    },

    'achievement-badge': {
        id: 'achievement-badge',
        props: [
            { name: 'title', type: 'string', required: true, description: 'Achievement title' },
            { name: 'description', type: 'string', required: false, description: 'Achievement description' },
            { name: 'icon', type: '"trophy" | "star" | "target" | "zap" | "crown" | "medal" | "award" | "gem"', required: false, default: '"trophy"', description: 'Badge icon' },
            { name: 'rarity', type: '"common" | "rare" | "epic" | "legendary"', required: false, default: '"common"', description: 'Rarity level' },
            { name: 'unlocked', type: 'boolean', required: false, default: 'true', description: 'Unlock state' },
            { name: 'progress', type: 'number', required: false, description: 'Progress percentage (0-100) for locked badges' },
            { name: 'compact', type: 'boolean', required: false, default: 'false', description: 'Compact icon-only mode' },
        ],
        notes: ['Rarity-based gradient colors', 'Legendary has rotating shine effect', 'Progress ring for locked badges'],
    },

    'health-bar': {
        id: 'health-bar',
        props: [
            { name: 'type', type: '"health" | "shield" | "energy" | "mana" | "rage"', required: false, default: '"health"', description: 'Resource type' },
            { name: 'current', type: 'number', required: true, description: 'Current value' },
            { name: 'max', type: 'number', required: true, description: 'Maximum value' },
            { name: 'label', type: 'string', required: false, description: 'Label text' },
            { name: 'showNumbers', type: 'boolean', required: false, default: 'true', description: 'Show numeric values' },
            { name: 'animated', type: 'boolean', required: false, default: 'true', description: 'Enable animations' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Bar size' },
            { name: 'compact', type: 'boolean', required: false, default: 'false', description: 'Compact mode' },
        ],
        notes: ['Pulsing animation when low', 'Critical flash at 10% or below', 'Segmented background for visual style'],
    },

    // Fintech Extended
    'fintech-button': {
        id: 'fintech-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost"', required: false, default: '"secondary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
        ],
        notes: ['Emerald green primary', 'Shimmer effect on hover', 'Professional banking aesthetic'],
    },

    'fintech-card': {
        id: 'fintech-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['Dark zinc background', 'Subtle border styling', 'Fade-in scale animation'],
    },

    'currency-converter': {
        id: 'currency-converter',
        props: [
            { name: 'currencies', type: 'Currency[]', required: false, description: 'Available currencies' },
            { name: 'exchangeRates', type: 'Record<string, number>', required: false, description: 'Exchange rates relative to USD' },
            { name: 'initialFrom', type: 'string', required: false, default: '"USD"', description: 'Initial from currency' },
            { name: 'initialTo', type: 'string', required: false, default: '"EUR"', description: 'Initial to currency' },
            { name: 'onConvert', type: '(from, to, amount, result) => void', required: false, description: 'Conversion callback' },
        ],
        notes: ['Swap button with rotation animation', 'Live conversion display', 'Default currencies: USD, EUR, GBP, JPY, BTC'],
    },

    'sparkline-chart': {
        id: 'sparkline-chart',
        props: [
            { name: 'data', type: 'number[]', required: true, description: 'Data points array' },
            { name: 'label', type: 'string', required: false, description: 'Label text' },
            { name: 'value', type: 'string', required: false, description: 'Current value display' },
            { name: 'change', type: 'number', required: false, description: 'Percentage change' },
            { name: 'color', type: '"emerald" | "rose" | "amber" | "cyan" | "auto"', required: false, default: '"auto"', description: 'Line color' },
            { name: 'height', type: 'number', required: false, default: '40', description: 'Chart height in pixels' },
            { name: 'showDot', type: 'boolean', required: false, default: 'true', description: 'Show end dot' },
            { name: 'animated', type: 'boolean', required: false, default: 'true', description: 'Enable animations' },
        ],
        notes: ['SVG path animation', 'Auto color based on trend', 'Area fill gradient'],
    },

    // Social Extended
    'social-button': {
        id: 'social-button',
        props: [
            { name: 'children', type: 'React.ReactNode', required: false, description: 'Button content' },
            { name: 'variant', type: '"primary" | "secondary" | "ghost" | "icon" | "follow"', required: false, default: '"primary"', description: 'Button style' },
            { name: 'size', type: '"sm" | "md" | "lg" | "icon" | "fab"', required: false, default: '"md"', description: 'Button size' },
            { name: 'icon', type: 'React.ReactNode', required: false, description: 'Icon element' },
            { name: 'fullWidth', type: 'boolean', required: false, default: 'false', description: 'Full width mode' },
        ],
        notes: ['Sky blue primary', 'Pill-shaped rounded corners', 'FAB size for floating action'],
    },

    'social-card': {
        id: 'social-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['Glass-effect background', 'Dark mode optimized', 'Fade-up animation'],
    },

    'story-rail': {
        id: 'story-rail',
        props: [],
        notes: ['Horizontal scrolling stories', 'Gradient rings for unseen stories', 'Add story button on first item', 'Zoom effect on hover'],
    },

    // Productivity Extended
    'productivity-card': {
        id: 'productivity-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['Clean dark theme', 'Subtle border and shadow', 'Backdrop blur effect'],
    },

    'focus-timer': {
        id: 'focus-timer',
        props: [],
        notes: ['Pomodoro-style timer', 'Circular progress ring', 'Amber accent color', 'Deep Work status indicator'],
    },

    'task-inbox': {
        id: 'task-inbox',
        props: [],
        notes: ['Task list with due dates', 'Project labels on hover', 'Quick add input field', 'Today items highlighted in amber'],
    },

    'kanban-board': {
        id: 'kanban-board',
        props: [],
        notes: ['Three columns: To Do, In Progress, Review', 'Priority badges', 'Dashed add card button', 'Horizontal scroll container'],
    },

    // Food Extended
    'food-card': {
        id: 'food-card',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Card content' },
            { name: 'className', type: 'string', required: false, description: 'Additional CSS classes' },
            { name: 'delay', type: 'number', required: false, default: '0', description: 'Animation delay' },
        ],
        notes: ['Warm dark stone colors', 'Extra-rounded corners', 'Subtle shadow'],
    },

    'hero-dish': {
        id: 'hero-dish',
        props: [],
        notes: ['Large featured image', 'Gradient overlay', 'Trending badge', 'Star rating display', 'Add to order button with price'],
    },

    'menu-grid': {
        id: 'menu-grid',
        props: [],
        notes: ['Category filter tabs', 'Food item grid with images', 'Best Seller/Popular/Healthy tags', 'Heart favorite button'],
    },

    'cart-widget': {
        id: 'cart-widget',
        props: [],
        notes: ['Order summary sidebar', 'Item quantity controls', 'Table number/Dine-in indicator', 'Subtotal/service charge/total breakdown'],
    },

    // Kids Extended
    'reward-star': {
        id: 'reward-star',
        props: [
            { name: 'type', type: '"star" | "crown" | "trophy" | "gift" | "heart" | "sparkle"', required: false, default: '"star"', description: 'Reward icon type' },
            { name: 'count', type: 'number', required: false, description: 'Badge counter' },
            { name: 'label', type: 'string', required: false, description: 'Label text below badge' },
            { name: 'color', type: '"yellow" | "pink" | "blue" | "green" | "purple"', required: false, default: '"yellow"', description: 'Color theme' },
            { name: 'size', type: '"sm" | "md" | "lg"', required: false, default: '"md"', description: 'Badge size' },
            { name: 'animated', type: 'boolean', required: false, default: 'true', description: 'Enable animations' },
            { name: 'earned', type: 'boolean', required: false, default: 'true', description: 'Earned/locked state' },
        ],
        notes: ['Sparkle particle effects', 'Scale animation on mount', 'Glow pulse for earned badges', 'Grayscale for unearned'],
    },

    'speech-bubble': {
        id: 'speech-bubble',
        props: [
            { name: 'children', type: 'React.ReactNode', required: true, description: 'Bubble content' },
            { name: 'direction', type: '"left" | "right" | "bottom"', required: false, default: '"left"', description: 'Tail direction' },
            { name: 'color', type: '"white" | "blue" | "pink" | "yellow" | "green"', required: false, default: '"white"', description: 'Background color' },
            { name: 'animated', type: 'boolean', required: false, default: 'true', description: 'Enable animations' },
            { name: 'character', type: 'string', required: false, description: 'Emoji character for avatar' },
        ],
        notes: ['Comic-style speech bubble', 'Character avatar integration', 'Spring bounce animation', 'Tail pointer in direction specified'],
    },

    // Solarpunk Extended
    'eco-stats': {
        id: 'eco-stats',
        props: [],
        notes: ['4-column stats grid', 'Icon badges with colors', 'Water, Growth, Compost, Temperature metrics', 'Hover scale effect'],
    },

    'plant-progress': {
        id: 'plant-progress',
        props: [
            { name: 'name', type: 'string', required: true, description: 'Plant name' },
            { name: 'stage', type: '"seed" | "sprout" | "growing" | "mature" | "flowering"', required: false, default: '"growing"', description: 'Growth stage' },
            { name: 'waterLevel', type: 'number', required: false, default: '60', description: 'Water level 0-100' },
            { name: 'sunLevel', type: 'number', required: false, default: '80', description: 'Sunlight level 0-100' },
            { name: 'daysOld', type: 'number', required: false, default: '14', description: 'Age in days' },
            { name: 'nextWater', type: 'string', required: false, default: '"2 hours"', description: 'Time until next watering' },
            { name: 'image', type: 'string', required: false, description: 'Plant image URL' },
        ],
        notes: ['Stage emoji indicators', 'Growth progress bar', 'Water and sun gauges', 'Low water warning at 30%'],
    },

    // Blueprint Extended
    'measurement-label': {
        id: 'measurement-label',
        props: [
            { name: 'value', type: 'string', required: true, description: 'Measurement value with unit' },
            { name: 'width', type: 'string', required: false, default: '"100%"', description: 'Label width/height' },
            { name: 'orientation', type: '"horizontal" | "vertical"', required: false, default: '"horizontal"', description: 'Label orientation' },
        ],
        notes: ['Technical dimension label', 'End caps with border lines', 'Value centered on line', 'Blueprint blue background'],
    },
}

export const getComponentDoc = (id: string): ComponentDoc | undefined => {
    return componentDocs[id]
}
