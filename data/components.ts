import type { ComponentType } from 'react'

// Shared UI Components
import SpotlightCard from '@/components/ui/SpotlightCard'
import SpotlightCardSource from '@/components/ui/SpotlightCard?raw'
import GlowButton from '@/components/ui/GlowButton'
import GlowButtonSource from '@/components/ui/GlowButton?raw'
import Terminal from '@/components/ui/Terminal'
import TerminalSource from '@/components/ui/Terminal?raw'
import StatsCard from '@/components/ui/StatsCard'
import StatsCardSource from '@/components/ui/StatsCard?raw'
import ActivityFeed from '@/components/ui/ActivityFeed'
import ActivityFeedSource from '@/components/ui/ActivityFeed?raw'
import FileTree from '@/components/ui/FileTree'
import FileTreeSource from '@/components/ui/FileTree?raw'
import PlanPicker from '@/components/ui/PlanPicker'
import PlanPickerSource from '@/components/ui/PlanPicker?raw'
import TeamMembers from '@/components/ui/TeamMembers'
import TeamMembersSource from '@/components/ui/TeamMembers?raw'
import ShortcutGuide from '@/components/ui/ShortcutGuide'
import ShortcutGuideSource from '@/components/ui/ShortcutGuide?raw'
import DeploymentPipeline from '@/components/ui/DeploymentPipeline'
import DeploymentPipelineSource from '@/components/ui/DeploymentPipeline?raw'
import IntegrationToggle from '@/components/ui/IntegrationToggle'
import IntegrationToggleSource from '@/components/ui/IntegrationToggle?raw'
import BentoCard from '@/components/ui/BentoCard'
import BentoCardSource from '@/components/ui/BentoCard?raw'

// Fintech Components
import DigitalCard from '@/components/fintech/DigitalCard'
import DigitalCardSource from '@/components/fintech/DigitalCard?raw'
import MarketTicker from '@/components/fintech/MarketTicker'
import MarketTickerSource from '@/components/fintech/MarketTicker?raw'
import PortfolioChart from '@/components/fintech/PortfolioChart'
import PortfolioChartSource from '@/components/fintech/PortfolioChart?raw'
import TransactionList from '@/components/fintech/TransactionList'
import TransactionListSource from '@/components/fintech/TransactionList?raw'

// Cockpit Components
import Speedometer from '@/components/cockpit/Speedometer'
import SpeedometerSource from '@/components/cockpit/Speedometer?raw'
import ClimateControl from '@/components/cockpit/ClimateControl'
import ClimateControlSource from '@/components/cockpit/ClimateControl?raw'
import LaneAssist from '@/components/cockpit/LaneAssist'
import LaneAssistSource from '@/components/cockpit/LaneAssist?raw'
import MediaWidget from '@/components/cockpit/MediaWidget'
import MediaWidgetSource from '@/components/cockpit/MediaWidget?raw'
import NavWidget from '@/components/cockpit/NavWidget'
import NavWidgetSource from '@/components/cockpit/NavWidget?raw'

// Game Components
import CharacterProfile from '@/components/game/CharacterProfile'
import CharacterProfileSource from '@/components/game/CharacterProfile?raw'
import InventoryGrid from '@/components/game/InventoryGrid'
import InventoryGridSource from '@/components/game/InventoryGrid?raw'
import LeaderboardWidget from '@/components/game/LeaderboardWidget'
import LeaderboardWidgetSource from '@/components/game/LeaderboardWidget?raw'

import QuestLog from '@/components/game/QuestLog'
import QuestLogSource from '@/components/game/QuestLog?raw'

// Scifi Components
import SciFiCard from '@/components/scifi/SciFiCard'
import SciFiCardSource from '@/components/scifi/SciFiCard?raw'
import BodyScanner from '@/components/scifi/BodyScanner'
import BodyScannerSource from '@/components/scifi/BodyScanner?raw'
import DNAList from '@/components/scifi/DNAList'
import DNAListSource from '@/components/scifi/DNAList?raw'
import VitalsMonitor from '@/components/scifi/VitalsMonitor'
import VitalsMonitorSource from '@/components/scifi/VitalsMonitor?raw'

// Education Components
import CourseCard from '@/components/education/CourseCard'
import CourseCardSource from '@/components/education/CourseCard?raw'
import UpcomingSchedule from '@/components/education/UpcomingSchedule'
import UpcomingScheduleSource from '@/components/education/UpcomingSchedule?raw'

// Social Components
import FeedPost from '@/components/social/FeedPost'
import FeedPostSource from '@/components/social/FeedPost?raw'
import { ProfileSummary } from '@/components/social/ProfileSidebar'
import ProfileSidebarSource from '@/components/social/ProfileSidebar?raw'

// Ecommerce Components
import ProductCard from '@/components/ecommerce/ProductCard'
import ProductCardSource from '@/components/ecommerce/ProductCard?raw'
import CartSummary from '@/components/ecommerce/CartSummary'
import CartSummarySource from '@/components/ecommerce/CartSummary?raw'

// Legacy Components
import LegacyWindow from '@/components/legacy/LegacyWindow'
import LegacyWindowSource from '@/components/legacy/LegacyWindow?raw'
import LegacyButton from '@/components/legacy/LegacyButton'
import LegacyButtonSource from '@/components/legacy/LegacyButton?raw'
import DesktopIcon from '@/components/legacy/DesktopIcon'
import DesktopIconSource from '@/components/legacy/DesktopIcon?raw'

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
    source?: string
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
        source: SpotlightCardSource,
        tags: ['card', 'hover', 'spotlight', 'mouse-tracking'],
    },
    {
        id: 'glow-button',
        name: 'GlowButton',
        description: 'Gradient border button with animated glow effect',
        theme: 'shared',
        category: 'interactive',
        component: GlowButton,
        source: GlowButtonSource,
        tags: ['button', 'glow', 'gradient', 'cta'],
    },
    {
        id: 'terminal',
        name: 'Terminal',
        description: 'Fake terminal display with typing animation',
        theme: 'shared',
        category: 'data-display',
        component: Terminal,
        source: TerminalSource,
        tags: ['terminal', 'code', 'animation', 'developer'],
    },
    {
        id: 'stats-card',
        name: 'StatsCard',
        description: 'Metric display card with value and trend indicator',
        theme: 'shared',
        category: 'data-display',
        component: StatsCard,
        source: StatsCardSource,
        tags: ['metrics', 'stats', 'dashboard', 'numbers'],
    },
    {
        id: 'activity-feed',
        name: 'ActivityFeed',
        description: 'Live activity log with timestamps and icons',
        theme: 'shared',
        category: 'data-display',
        component: ActivityFeed,
        source: ActivityFeedSource,
        tags: ['feed', 'activity', 'log', 'timeline'],
    },
    {
        id: 'file-tree',
        name: 'FileTree',
        description: 'Directory explorer with expandable folders',
        theme: 'shared',
        category: 'navigation',
        component: FileTree,
        source: FileTreeSource,
        tags: ['files', 'tree', 'explorer', 'folders'],
    },
    {
        id: 'plan-picker',
        name: 'PlanPicker',
        description: 'Pricing tier selector with feature comparison',
        theme: 'shared',
        category: 'interactive',
        component: PlanPicker,
        source: PlanPickerSource,
        tags: ['pricing', 'plans', 'tiers', 'selector'],
    },
    {
        id: 'team-members',
        name: 'TeamMembers',
        description: 'Avatar group display with member count',
        theme: 'shared',
        category: 'data-display',
        component: TeamMembers,
        source: TeamMembersSource,
        tags: ['team', 'avatars', 'users', 'members'],
    },
    {
        id: 'shortcut-guide',
        name: 'ShortcutGuide',
        description: 'Keyboard shortcuts panel with key combinations',
        theme: 'shared',
        category: 'feedback',
        component: ShortcutGuide,
        source: ShortcutGuideSource,
        tags: ['shortcuts', 'keyboard', 'help', 'guide'],
    },
    {
        id: 'deployment-pipeline',
        name: 'DeploymentPipeline',
        description: 'CI/CD visualization with stage indicators',
        theme: 'shared',
        category: 'visualization',
        component: DeploymentPipeline,
        source: DeploymentPipelineSource,
        tags: ['pipeline', 'ci-cd', 'deployment', 'stages'],
    },
    {
        id: 'integration-toggle',
        name: 'IntegrationToggle',
        description: 'Feature toggle switch with label and status',
        theme: 'shared',
        category: 'forms',
        component: IntegrationToggle,
        source: IntegrationToggleSource,
        tags: ['toggle', 'switch', 'integration', 'settings'],
    },
    {
        id: 'bento-card',
        name: 'BentoCard',
        description: 'Grid layout card for bento-style dashboards',
        theme: 'shared',
        category: 'layout',
        component: BentoCard,
        source: BentoCardSource,
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
        source: DigitalCardSource,
        tags: ['card', 'payment', 'credit', 'banking'],
    },
    {
        id: 'market-ticker',
        name: 'MarketTicker',
        description: 'Stock market ticker with live price updates',
        theme: 'fintech',
        category: 'data-display',
        component: MarketTicker,
        source: MarketTickerSource,
        tags: ['stocks', 'ticker', 'market', 'prices'],
    },
    {
        id: 'portfolio-chart',
        name: 'PortfolioChart',
        description: 'Investment portfolio visualization chart',
        theme: 'fintech',
        category: 'visualization',
        component: PortfolioChart,
        source: PortfolioChartSource,
        tags: ['chart', 'portfolio', 'investment', 'graph'],
    },
    {
        id: 'transaction-list',
        name: 'TransactionList',
        description: 'Financial transaction history with categories',
        theme: 'fintech',
        category: 'data-display',
        component: TransactionList,
        source: TransactionListSource,
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
        source: SpeedometerSource,
        tags: ['gauge', 'speed', 'automotive', 'dial'],
    },
    {
        id: 'climate-control',
        name: 'ClimateControl',
        description: 'Temperature and AC control panel',
        theme: 'cockpit',
        category: 'interactive',
        component: ClimateControl,
        source: ClimateControlSource,
        tags: ['climate', 'temperature', 'ac', 'controls'],
    },
    {
        id: 'lane-assist',
        name: 'LaneAssist',
        description: 'Lane keeping assist visualization',
        theme: 'cockpit',
        category: 'visualization',
        component: LaneAssist,
        source: LaneAssistSource,
        tags: ['lane', 'assist', 'driving', 'safety'],
    },
    {
        id: 'media-widget',
        name: 'MediaWidget',
        description: 'Audio playback controls widget',
        theme: 'cockpit',
        category: 'interactive',
        component: MediaWidget,
        source: MediaWidgetSource,
        tags: ['media', 'audio', 'music', 'player'],
    },
    {
        id: 'nav-widget',
        name: 'NavWidget',
        description: 'Navigation map widget with directions',
        theme: 'cockpit',
        category: 'navigation',
        component: NavWidget,
        source: NavWidgetSource,
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
        source: CharacterProfileSource,
        tags: ['character', 'profile', 'rpg', 'avatar'],
    },
    {
        id: 'inventory-grid',
        name: 'InventoryGrid',
        description: 'Game inventory grid with item slots',
        theme: 'game',
        category: 'interactive',
        component: InventoryGrid,
        source: InventoryGridSource,
        tags: ['inventory', 'items', 'grid', 'slots'],
    },
    {
        id: 'quest-log',
        name: 'QuestLog',
        description: 'Quest tracker with objectives and progress',
        theme: 'game',
        category: 'data-display',
        component: QuestLog,
        source: QuestLogSource,
        tags: ['quests', 'objectives', 'progress', 'tracker'],
    },
    {
        id: 'leaderboard-widget',
        name: 'LeaderboardWidget',
        description: 'Multiplayer leaderboard with rank changes',
        theme: 'game',
        category: 'data-display',
        component: LeaderboardWidget,
        source: LeaderboardWidgetSource,
        tags: ['leaderboard', 'rank', 'multiplayer', 'score'],
    },

    // Scifi Components
    {
        id: 'scifi-card',
        name: 'SciFiCard',
        description: 'Futuristic container with corner accents',
        theme: 'scifi',
        category: 'layout',
        component: SciFiCard,
        source: SciFiCardSource,
        tags: ['container', 'scifi', 'hud', 'futuristic'],
    },
    {
        id: 'body-scanner',
        name: 'BodyScanner',
        description: 'Biometric scanning visualization',
        theme: 'scifi',
        category: 'visualization',
        component: BodyScanner,
        source: BodyScannerSource,
        tags: ['scanner', 'medical', 'biometric', 'hud'],
    },
    {
        id: 'dna-list',
        name: 'DNAList',
        description: 'Genomic sequence data list',
        theme: 'scifi',
        category: 'data-display',
        component: DNAList,
        source: DNAListSource,
        tags: ['dna', 'list', 'data', 'genetics'],
    },
    {
        id: 'vitals-monitor',
        name: 'VitalsMonitor',
        description: 'Real-time vital signs monitoring',
        theme: 'scifi',
        category: 'visualization',
        component: VitalsMonitor,
        source: VitalsMonitorSource,
        tags: ['vitals', 'monitor', 'health', 'graph'],
    },

    // Education Components
    {
        id: 'course-card',
        name: 'CourseCard',
        description: 'Course progress and details card',
        theme: 'education',
        category: 'data-display',
        component: CourseCard,
        source: CourseCardSource,
        tags: ['course', 'learning', 'education', 'progress'],
    },
    {
        id: 'upcoming-schedule',
        name: 'UpcomingSchedule',
        description: 'Timeline of upcoming classes and events',
        theme: 'education',
        category: 'data-display',
        component: UpcomingSchedule,
        source: UpcomingScheduleSource,
        tags: ['schedule', 'calendar', 'timeline', 'events'],
    },

    // Social Components
    {
        id: 'feed-post',
        name: 'FeedPost',
        description: 'Social media post with interactions',
        theme: 'social',
        category: 'data-display',
        component: FeedPost,
        source: FeedPostSource,
        tags: ['post', 'social', 'feed', 'interactions'],
    },
    {
        id: 'profile-summary',
        name: 'ProfileSummary',
        description: 'User profile sidebar widget',
        theme: 'social',
        category: 'data-display',
        component: ProfileSummary,
        source: ProfileSidebarSource,
        tags: ['profile', 'user', 'card', 'sidebar'],
    },

    // Ecommerce Components
    {
        id: 'product-card',
        name: 'ProductCard',
        description: 'Product display with quick add',
        theme: 'ecommerce',
        category: 'data-display',
        component: ProductCard,
        source: ProductCardSource,
        tags: ['product', 'shop', 'card', 'ecommerce'],
    },
    {
        id: 'cart-summary',
        name: 'CartSummary',
        description: 'Shopping cart summary panel',
        theme: 'ecommerce',
        category: 'data-display',
        component: CartSummary,
        source: CartSummarySource,
        tags: ['cart', 'checkout', 'shop', 'summary'],
    },

    // Legacy Components
    {
        id: 'legacy-window',
        name: 'LegacyWindow',
        description: 'Windows 95/98 style window with title bar',
        theme: 'legacy',
        category: 'layout',
        component: LegacyWindow,
        source: LegacyWindowSource,
        tags: ['window', 'retro', 'win95', 'nostalgic'],
    },
    {
        id: 'legacy-button',
        name: 'LegacyButton',
        description: 'Classic Windows button with 3D border',
        theme: 'legacy',
        category: 'interactive',
        component: LegacyButton,
        source: LegacyButtonSource,
        tags: ['button', 'retro', 'win95', 'classic'],
    },
    {
        id: 'desktop-icon',
        name: 'DesktopIcon',
        description: 'Desktop shortcut icon with label',
        theme: 'legacy',
        category: 'navigation',
        component: DesktopIcon,
        source: DesktopIconSource,
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

export const allThemes = ['shared', 'fintech', 'cockpit', 'game', 'legacy', 'scifi', 'education', 'social', 'ecommerce'] as const
export const allCategories: ComponentCategory[] = [
    'layout',
    'data-display',
    'forms',
    'navigation',
    'feedback',
    'interactive',
    'visualization',
]
