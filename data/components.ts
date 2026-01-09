import type { ComponentType } from 'react'

// Shared UI Components
import SpotlightCard from '@/components/ui/SpotlightCard'
import GlowButton from '@/components/ui/GlowButton'
import Terminal from '@/components/ui/Terminal'
import StatsCard from '@/components/ui/StatsCard'
import ActivityFeed from '@/components/ui/ActivityFeed'
import FileTree from '@/components/ui/FileTree'
import PlanPicker from '@/components/ui/PlanPicker'
import TeamMembers from '@/components/ui/TeamMembers'
import ShortcutGuide from '@/components/ui/ShortcutGuide'
import DeploymentPipeline from '@/components/ui/DeploymentPipeline'
import IntegrationToggle from '@/components/ui/IntegrationToggle'
import BentoCard from '@/components/ui/BentoCard'

// Fintech Components
import DigitalCard from '@/components/fintech/DigitalCard'
import MarketTicker from '@/components/fintech/MarketTicker'
import PortfolioChart from '@/components/fintech/PortfolioChart'
import TransactionList from '@/components/fintech/TransactionList'

// Cockpit Components
import Speedometer from '@/components/cockpit/Speedometer'
import ClimateControl from '@/components/cockpit/ClimateControl'
import LaneAssist from '@/components/cockpit/LaneAssist'
import MediaWidget from '@/components/cockpit/MediaWidget'
import NavWidget from '@/components/cockpit/NavWidget'

// Game Components
import CharacterProfile from '@/components/game/CharacterProfile'
import InventoryGrid from '@/components/game/InventoryGrid'
import QuestLog from '@/components/game/QuestLog'

// Legacy Components
import LegacyWindow from '@/components/legacy/LegacyWindow'
import LegacyButton from '@/components/legacy/LegacyButton'
import DesktopIcon from '@/components/legacy/DesktopIcon'

export type ComponentCategory =
    | 'layout'
    | 'data-display'
    | 'forms'
    | 'navigation'
    | 'feedback'
    | 'interactive'
    | 'visualization'

export interface ComponentMeta {
    id: string
    name: string
    description: string
    theme: string
    category: ComponentCategory
    component: ComponentType<unknown>
    tags: string[]
}

export const components: ComponentMeta[] = [
    // Shared UI Components
    {
        id: 'spotlight-card',
        name: 'SpotlightCard',
        description: 'Mouse-tracking spotlight effect card with gradient hover',
        theme: 'shared',
        category: 'layout',
        component: SpotlightCard,
        tags: ['card', 'hover', 'spotlight', 'mouse-tracking'],
    },
    {
        id: 'glow-button',
        name: 'GlowButton',
        description: 'Gradient border button with animated glow effect',
        theme: 'shared',
        category: 'interactive',
        component: GlowButton,
        tags: ['button', 'glow', 'gradient', 'cta'],
    },
    {
        id: 'terminal',
        name: 'Terminal',
        description: 'Fake terminal display with typing animation',
        theme: 'shared',
        category: 'data-display',
        component: Terminal,
        tags: ['terminal', 'code', 'animation', 'developer'],
    },
    {
        id: 'stats-card',
        name: 'StatsCard',
        description: 'Metric display card with value and trend indicator',
        theme: 'shared',
        category: 'data-display',
        component: StatsCard,
        tags: ['metrics', 'stats', 'dashboard', 'numbers'],
    },
    {
        id: 'activity-feed',
        name: 'ActivityFeed',
        description: 'Live activity log with timestamps and icons',
        theme: 'shared',
        category: 'data-display',
        component: ActivityFeed,
        tags: ['feed', 'activity', 'log', 'timeline'],
    },
    {
        id: 'file-tree',
        name: 'FileTree',
        description: 'Directory explorer with expandable folders',
        theme: 'shared',
        category: 'navigation',
        component: FileTree,
        tags: ['files', 'tree', 'explorer', 'folders'],
    },
    {
        id: 'plan-picker',
        name: 'PlanPicker',
        description: 'Pricing tier selector with feature comparison',
        theme: 'shared',
        category: 'interactive',
        component: PlanPicker,
        tags: ['pricing', 'plans', 'tiers', 'selector'],
    },
    {
        id: 'team-members',
        name: 'TeamMembers',
        description: 'Avatar group display with member count',
        theme: 'shared',
        category: 'data-display',
        component: TeamMembers,
        tags: ['team', 'avatars', 'users', 'members'],
    },
    {
        id: 'shortcut-guide',
        name: 'ShortcutGuide',
        description: 'Keyboard shortcuts panel with key combinations',
        theme: 'shared',
        category: 'feedback',
        component: ShortcutGuide,
        tags: ['shortcuts', 'keyboard', 'help', 'guide'],
    },
    {
        id: 'deployment-pipeline',
        name: 'DeploymentPipeline',
        description: 'CI/CD visualization with stage indicators',
        theme: 'shared',
        category: 'visualization',
        component: DeploymentPipeline,
        tags: ['pipeline', 'ci-cd', 'deployment', 'stages'],
    },
    {
        id: 'integration-toggle',
        name: 'IntegrationToggle',
        description: 'Feature toggle switch with label and status',
        theme: 'shared',
        category: 'forms',
        component: IntegrationToggle,
        tags: ['toggle', 'switch', 'integration', 'settings'],
    },
    {
        id: 'bento-card',
        name: 'BentoCard',
        description: 'Grid layout card for bento-style dashboards',
        theme: 'shared',
        category: 'layout',
        component: BentoCard,
        tags: ['bento', 'grid', 'card', 'layout'],
    },

    // Fintech Components
    {
        id: 'digital-card',
        name: 'DigitalCard',
        description: 'Credit/debit card display with chip and numbers',
        theme: 'fintech',
        category: 'data-display',
        component: DigitalCard,
        tags: ['card', 'payment', 'credit', 'banking'],
    },
    {
        id: 'market-ticker',
        name: 'MarketTicker',
        description: 'Stock market ticker with live price updates',
        theme: 'fintech',
        category: 'data-display',
        component: MarketTicker,
        tags: ['stocks', 'ticker', 'market', 'prices'],
    },
    {
        id: 'portfolio-chart',
        name: 'PortfolioChart',
        description: 'Investment portfolio visualization chart',
        theme: 'fintech',
        category: 'visualization',
        component: PortfolioChart,
        tags: ['chart', 'portfolio', 'investment', 'graph'],
    },
    {
        id: 'transaction-list',
        name: 'TransactionList',
        description: 'Financial transaction history with categories',
        theme: 'fintech',
        category: 'data-display',
        component: TransactionList,
        tags: ['transactions', 'history', 'payments', 'list'],
    },

    // Cockpit Components
    {
        id: 'speedometer',
        name: 'Speedometer',
        description: 'Automotive speedometer gauge with needle',
        theme: 'cockpit',
        category: 'visualization',
        component: Speedometer,
        tags: ['gauge', 'speed', 'automotive', 'dial'],
    },
    {
        id: 'climate-control',
        name: 'ClimateControl',
        description: 'Temperature and AC control panel',
        theme: 'cockpit',
        category: 'interactive',
        component: ClimateControl,
        tags: ['climate', 'temperature', 'ac', 'controls'],
    },
    {
        id: 'lane-assist',
        name: 'LaneAssist',
        description: 'Lane keeping assist visualization',
        theme: 'cockpit',
        category: 'visualization',
        component: LaneAssist,
        tags: ['lane', 'assist', 'driving', 'safety'],
    },
    {
        id: 'media-widget',
        name: 'MediaWidget',
        description: 'Audio playback controls widget',
        theme: 'cockpit',
        category: 'interactive',
        component: MediaWidget,
        tags: ['media', 'audio', 'music', 'player'],
    },
    {
        id: 'nav-widget',
        name: 'NavWidget',
        description: 'Navigation map widget with directions',
        theme: 'cockpit',
        category: 'navigation',
        component: NavWidget,
        tags: ['navigation', 'map', 'gps', 'directions'],
    },

    // Game Components
    {
        id: 'character-profile',
        name: 'CharacterProfile',
        description: 'RPG character stats and avatar display',
        theme: 'game',
        category: 'data-display',
        component: CharacterProfile,
        tags: ['character', 'profile', 'rpg', 'avatar'],
    },
    {
        id: 'inventory-grid',
        name: 'InventoryGrid',
        description: 'Game inventory grid with item slots',
        theme: 'game',
        category: 'interactive',
        component: InventoryGrid,
        tags: ['inventory', 'items', 'grid', 'slots'],
    },
    {
        id: 'quest-log',
        name: 'QuestLog',
        description: 'Quest tracker with objectives and progress',
        theme: 'game',
        category: 'data-display',
        component: QuestLog,
        tags: ['quests', 'objectives', 'progress', 'tracker'],
    },

    // Legacy Components
    {
        id: 'legacy-window',
        name: 'LegacyWindow',
        description: 'Windows 95/98 style window with title bar',
        theme: 'legacy',
        category: 'layout',
        component: LegacyWindow,
        tags: ['window', 'retro', 'win95', 'nostalgic'],
    },
    {
        id: 'legacy-button',
        name: 'LegacyButton',
        description: 'Classic Windows button with 3D border',
        theme: 'legacy',
        category: 'interactive',
        component: LegacyButton,
        tags: ['button', 'retro', 'win95', 'classic'],
    },
    {
        id: 'desktop-icon',
        name: 'DesktopIcon',
        description: 'Desktop shortcut icon with label',
        theme: 'legacy',
        category: 'navigation',
        component: DesktopIcon,
        tags: ['icon', 'desktop', 'shortcut', 'retro'],
    },
]

export const getComponentById = (id: string): ComponentMeta | undefined => {
    return components.find((c) => c.id === id)
}

export const getComponentsByTheme = (theme: string): ComponentMeta[] => {
    return components.filter((c) => c.theme === theme)
}

export const getComponentsByCategory = (category: ComponentCategory): ComponentMeta[] => {
    return components.filter((c) => c.category === category)
}

export const allThemes = ['shared', 'fintech', 'cockpit', 'game', 'legacy'] as const
export const allCategories: ComponentCategory[] = [
    'layout',
    'data-display',
    'forms',
    'navigation',
    'feedback',
    'interactive',
    'visualization',
]
