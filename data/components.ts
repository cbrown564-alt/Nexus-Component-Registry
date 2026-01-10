import type { ComponentType } from 'react'
import { Box } from 'lucide-react'

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

// Engineering Components
import EngineeringCard from '@/components/engineering/EngineeringCard'
import EngineeringCardSource from '@/components/engineering/EngineeringCard?raw'
import EngineeringButton from '@/components/engineering/EngineeringButton'
import EngineeringButtonSource from '@/components/engineering/EngineeringButton?raw'
import PipelineSteps from '@/components/engineering/PipelineSteps'
import PipelineStepsSource from '@/components/engineering/PipelineSteps?raw'
import CodeBlock from '@/components/engineering/CodeBlock'
import CodeBlockSource from '@/components/engineering/CodeBlock?raw'

// Food Components
import FoodButton from '@/components/food/FoodButton'
import FoodButtonSource from '@/components/food/FoodButton?raw'

// Magazine Components
import EditorialButton from '@/components/magazine/EditorialButton'
import EditorialButtonSource from '@/components/magazine/EditorialButton?raw'

// Ecommerce Button Component
import ShopButton from '@/components/ecommerce/ShopButton'
import ShopButtonSource from '@/components/ecommerce/ShopButton?raw'

// Productivity Components
import FlowButton from '@/components/productivity/FlowButton'
import FlowButtonSource from '@/components/productivity/FlowButton?raw'

// Swiss Components
import SwissButton from '@/components/swiss/SwissButton'
import SwissButtonSource from '@/components/swiss/SwissButton?raw'
import SwissGrid from '@/components/swiss/SwissGrid'
import SwissGridSource from '@/components/swiss/SwissGrid?raw'
import SwissTypography from '@/components/swiss/SwissTypography'
import SwissTypographySource from '@/components/swiss/SwissTypography?raw'
import SwissDivider from '@/components/swiss/SwissDivider'
import SwissDividerSource from '@/components/swiss/SwissDivider?raw'

// Wellness Components
import WellnessCard from '@/components/wellness/WellnessCard'
import WellnessCardSource from '@/components/wellness/WellnessCard?raw'
import BreathPlayer from '@/components/wellness/BreathPlayer'
import BreathPlayerSource from '@/components/wellness/BreathPlayer?raw'
import SleepGraph from '@/components/wellness/SleepGraph'
import SleepGraphSource from '@/components/wellness/SleepGraph?raw'
import MoodSelector from '@/components/wellness/MoodSelector'
import MoodSelectorSource from '@/components/wellness/MoodSelector?raw'
import WellnessButton from '@/components/wellness/WellnessButton'
import WellnessButtonSource from '@/components/wellness/WellnessButton?raw'

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
    component: ComponentType<any>
    source?: string
    tags: string[]
    previewProps?: Record<string, any>
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
        previewProps: {
            initialLines: ['npm install nexus-ui', 'Installing dependencies...', 'Success!'],
            typingSpeed: 50
        }
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
        previewProps: {
            files: [
                { name: 'src', type: 'folder', children: [{ name: 'App.tsx', type: 'file' }] },
                { name: 'package.json', type: 'file' }
            ]
        }
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
        previewProps: {
            icon: Box,
            title: 'Bento Card',
            description: 'A sample bento grid card component.',
            className: 'min-h-[200px]'
        }
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
        previewProps: {
            title: 'Advanced React Patterns',
            category: 'Development',
            progress: 75,
            totalModules: 12,
            completedModules: 9,
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
            color: 'bg-violet-500',
        }
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
        previewProps: {
            author: {
                name: "Alex Rivera",
                handle: "arivera",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
                time: "2h ago"
            },
            content: "Just shipped the new dashboard update! 🚀 The performance improvements are insane. #engineering #webdev",
            stats: { likes: 128, comments: 24, shares: 12 }
        }
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
        previewProps: {
            icon: Box,
            label: 'My Computer',
            selected: false
        }
    },

    // Wellness Components
    {
        id: 'wellness-card',
        name: 'WellnessCard',
        description: 'Serene card container with glassmorphism',
        theme: 'wellness',
        category: 'layout',
        component: WellnessCard,
        source: WellnessCardSource,
        tags: ['card', 'container', 'wellness', 'glass'],
        previewProps: {
            children: "Wellness Card Content",
            className: "h-32 flex items-center justify-center text-stone-500"
        }
    },
    {
        id: 'breath-player',
        name: 'BreathPlayer',
        description: 'Breathing exercise visualizer with animations',
        theme: 'wellness',
        category: 'interactive',
        component: BreathPlayer,
        source: BreathPlayerSource,
        tags: ['breathing', 'health', 'animation', 'wellness'],
    },
    {
        id: 'sleep-graph',
        name: 'SleepGraph',
        description: 'Sleep quality visualization graph',
        theme: 'wellness',
        category: 'visualization',
        component: SleepGraph,
        source: SleepGraphSource,
        tags: ['graph', 'sleep', 'data', 'health'],
    },
    {
        id: 'mood-selector',
        name: 'MoodSelector',
        description: 'Interactive mood tracking component',
        theme: 'wellness',
        category: 'forms',
        component: MoodSelector,
        source: MoodSelectorSource,
        tags: ['mood', 'tracker', 'interactive', 'wellness'],
    },
    {
        id: 'wellness-button',
        name: 'WellnessButton',
        description: 'Soft, organic button styles',
        theme: 'wellness',
        category: 'interactive',
        component: WellnessButton,
        source: WellnessButtonSource,
        tags: ['button', 'wellness', 'organic', 'soft'],
        previewProps: {
            children: "Wellness Button",
            variant: 'primary'
        }
    },

    // Engineering Components
    {
        id: 'engineering-card',
        name: 'EngineeringCard',
        description: 'Card container with subtle gradient overlays for engineering dashboards',
        theme: 'engineering',
        category: 'layout',
        component: EngineeringCard,
        source: EngineeringCardSource,
        tags: ['card', 'container', 'engineering', 'dark'],
        previewProps: {
            children: "Engineering Card Content",
            className: "min-h-[100px] flex items-center justify-center text-zinc-400 text-sm"
        }
    },
    {
        id: 'engineering-button',
        name: 'EngineeringButton',
        description: 'Button with shine effect animation and multiple variants',
        theme: 'engineering',
        category: 'interactive',
        component: EngineeringButton,
        source: EngineeringButtonSource,
        tags: ['button', 'animation', 'shine', 'engineering'],
    },
    {
        id: 'pipeline-steps',
        name: 'PipelineSteps',
        description: 'CI/CD pipeline visualization with animated status indicators',
        theme: 'engineering',
        category: 'visualization',
        component: PipelineSteps,
        source: PipelineStepsSource,
        tags: ['pipeline', 'ci-cd', 'status', 'steps'],
        previewProps: {
            steps: [
                { name: 'Build', status: 'success' },
                { name: 'Test', status: 'running' },
                { name: 'Deploy', status: 'pending' }
            ]
        }
    },
    {
        id: 'code-block',
        name: 'CodeBlock',
        description: 'Styled code display with copy button and traffic light header',
        theme: 'engineering',
        category: 'data-display',
        component: CodeBlock,
        source: CodeBlockSource,
        tags: ['code', 'syntax', 'copy', 'developer'],
        previewProps: {
            code: "function hello() {\n  console.log('Hello World');\n}",
            language: 'typescript',
            filename: 'example.ts'
        }
    },

    // Food Button
    {
        id: 'food-button',
        name: 'FoodButton',
        description: 'Warm orange button with lift animation and glow effect',
        theme: 'food',
        category: 'interactive',
        component: FoodButton,
        source: FoodButtonSource,
        tags: ['button', 'animation', 'food', 'orange'],
    },

    // Magazine Button
    {
        id: 'editorial-button',
        name: 'EditorialButton',
        description: 'Serif typography button with fill animation for editorial layouts',
        theme: 'magazine',
        category: 'interactive',
        component: EditorialButton,
        source: EditorialButtonSource,
        tags: ['button', 'editorial', 'serif', 'magazine'],
    },

    // Ecommerce Button
    {
        id: 'shop-button',
        name: 'ShopButton',
        description: 'E-commerce button with add-to-cart sliding icon animation',
        theme: 'ecommerce',
        category: 'interactive',
        component: ShopButton,
        source: ShopButtonSource,
        tags: ['button', 'shop', 'cart', 'ecommerce'],
    },

    // Productivity Button
    {
        id: 'flow-button',
        name: 'FlowButton',
        description: 'Productivity button with amber accent and pulse animation',
        theme: 'productivity',
        category: 'interactive',
        component: FlowButton,
        source: FlowButtonSource,
        tags: ['button', 'productivity', 'amber', 'pulse'],
    },

    // Swiss Components
    {
        id: 'swiss-button',
        name: 'SwissButton',
        description: 'Bold Swiss design button with diagonal stripe hover effect',
        theme: 'swiss',
        category: 'interactive',
        component: SwissButton,
        source: SwissButtonSource,
        tags: ['button', 'swiss', 'bold', 'typography'],
    },
    {
        id: 'swiss-grid',
        name: 'SwissGrid',
        description: 'Mathematical 12-column grid system for Swiss design layouts',
        theme: 'swiss',
        category: 'layout',
        component: SwissGrid,
        source: SwissGridSource,
        tags: ['grid', 'layout', 'swiss', 'columns'],
    },
    {
        id: 'swiss-typography',
        name: 'SwissTypography',
        description: 'International Typographic Style text component with bold variants',
        theme: 'swiss',
        category: 'data-display',
        component: SwissTypography,
        source: SwissTypographySource,
        tags: ['typography', 'text', 'swiss', 'bold'],
    },
    {
        id: 'swiss-divider',
        name: 'SwissDivider',
        description: 'Graphic divider line with animation for Swiss design aesthetics',
        theme: 'swiss',
        category: 'layout',
        component: SwissDivider,
        source: SwissDividerSource,
        tags: ['divider', 'line', 'swiss', 'graphic'],
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

export const allThemes = ['shared', 'fintech', 'cockpit', 'game', 'legacy', 'scifi', 'education', 'social', 'ecommerce', 'engineering', 'food', 'magazine', 'productivity', 'swiss'] as const
export const allCategories: ComponentCategory[] = [
    'layout',
    'data-display',
    'forms',
    'navigation',
    'feedback',
    'interactive',
    'visualization',
]
