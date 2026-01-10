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
import FintechButton from '@/components/fintech/FintechButton'
import FintechButtonSource from '@/components/fintech/FintechButton?raw'
import FintechCard from '@/components/fintech/FintechCard'
import FintechCardSource from '@/components/fintech/FintechCard?raw'
import CurrencyConverter from '@/components/fintech/CurrencyConverter'
import CurrencyConverterSource from '@/components/fintech/CurrencyConverter?raw'
import SparklineChart from '@/components/fintech/SparklineChart'
import SparklineChartSource from '@/components/fintech/SparklineChart?raw'

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
import CockpitCard from '@/components/cockpit/CockpitCard'
import CockpitCardSource from '@/components/cockpit/CockpitCard?raw'

// Game Components
import CharacterProfile from '@/components/game/CharacterProfile'
import CharacterProfileSource from '@/components/game/CharacterProfile?raw'
import InventoryGrid from '@/components/game/InventoryGrid'
import InventoryGridSource from '@/components/game/InventoryGrid?raw'
import LeaderboardWidget from '@/components/game/LeaderboardWidget'
import LeaderboardWidgetSource from '@/components/game/LeaderboardWidget?raw'

import QuestLog from '@/components/game/QuestLog'
import QuestLogSource from '@/components/game/QuestLog?raw'
import GameButton from '@/components/game/GameButton'
import GameButtonSource from '@/components/game/GameButton?raw'
import GameCard from '@/components/game/GameCard'
import GameCardSource from '@/components/game/GameCard?raw'
import AchievementBadge from '@/components/game/AchievementBadge'
import AchievementBadgeSource from '@/components/game/AchievementBadge?raw'
import HealthBar from '@/components/game/HealthBar'
import HealthBarSource from '@/components/game/HealthBar?raw'

// Scifi Components
import SciFiCard from '@/components/scifi/SciFiCard'
import SciFiCardSource from '@/components/scifi/SciFiCard?raw'
import BodyScanner from '@/components/scifi/BodyScanner'
import BodyScannerSource from '@/components/scifi/BodyScanner?raw'
import DNAList from '@/components/scifi/DNAList'
import DNAListSource from '@/components/scifi/DNAList?raw'
import VitalsMonitor from '@/components/scifi/VitalsMonitor'
import VitalsMonitorSource from '@/components/scifi/VitalsMonitor?raw'
import HolographicTable from '@/components/scifi/HolographicTable'
import HolographicTableSource from '@/components/scifi/HolographicTable?raw'
import GlitchHeading from '@/components/scifi/GlitchHeading'
import GlitchHeadingSource from '@/components/scifi/GlitchHeading?raw'
import NeonToggle from '@/components/scifi/NeonToggle'
import NeonToggleSource from '@/components/scifi/NeonToggle?raw'

// Education Components
import CourseCard from '@/components/education/CourseCard'
import CourseCardSource from '@/components/education/CourseCard?raw'
import UpcomingSchedule from '@/components/education/UpcomingSchedule'
import UpcomingScheduleSource from '@/components/education/UpcomingSchedule?raw'
import EducationButton from '@/components/education/EducationButton'
import EducationButtonSource from '@/components/education/EducationButton?raw'
import EducationCard from '@/components/education/EducationCard'
import EducationCardSource from '@/components/education/EducationCard?raw'
import StudyStats from '@/components/education/StudyStats'
import StudyStatsSource from '@/components/education/StudyStats?raw'

// Social Components
import FeedPost from '@/components/social/FeedPost'
import FeedPostSource from '@/components/social/FeedPost?raw'
import { ProfileSummary } from '@/components/social/ProfileSidebar'
import ProfileSidebarSource from '@/components/social/ProfileSidebar?raw'
import SocialButton from '@/components/social/SocialButton'
import SocialButtonSource from '@/components/social/SocialButton?raw'
import SocialCard from '@/components/social/SocialCard'
import SocialCardSource from '@/components/social/SocialCard?raw'
import StoryRail from '@/components/social/StoryRail'
import StoryRailSource from '@/components/social/StoryRail?raw'

// Ecommerce Components
import ProductCard from '@/components/ecommerce/ProductCard'
import ProductCardSource from '@/components/ecommerce/ProductCard?raw'
import CartSummary from '@/components/ecommerce/CartSummary'
import CartSummarySource from '@/components/ecommerce/CartSummary?raw'
import CommerceCard from '@/components/ecommerce/CommerceCard'
import CommerceCardSource from '@/components/ecommerce/CommerceCard?raw'
import PromoBanner from '@/components/ecommerce/PromoBanner'
import PromoBannerSource from '@/components/ecommerce/PromoBanner?raw'

// Legacy Components
import LegacyWindow from '@/components/legacy/LegacyWindow'
import LegacyWindowSource from '@/components/legacy/LegacyWindow?raw'
import LegacyButton from '@/components/legacy/LegacyButton'
import LegacyButtonSource from '@/components/legacy/LegacyButton?raw'
import DesktopIcon from '@/components/legacy/DesktopIcon'
import DesktopIconSource from '@/components/legacy/DesktopIcon?raw'
import LegacyAlert from '@/components/legacy/LegacyAlert'
import LegacyAlertSource from '@/components/legacy/LegacyAlert?raw'

// Engineering Components
import EngineeringCard from '@/components/engineering/EngineeringCard'
import EngineeringCardSource from '@/components/engineering/EngineeringCard?raw'
import EngineeringButton from '@/components/engineering/EngineeringButton'
import EngineeringButtonSource from '@/components/engineering/EngineeringButton?raw'
import PipelineSteps from '@/components/engineering/PipelineSteps'
import PipelineStepsSource from '@/components/engineering/PipelineSteps?raw'
import CodeBlock from '@/components/engineering/CodeBlock'
import CodeBlockSource from '@/components/engineering/CodeBlock?raw'
import ConsoleOutput from '@/components/engineering/ConsoleOutput'
import ConsoleOutputSource from '@/components/engineering/ConsoleOutput?raw'
import GitDiffView from '@/components/engineering/GitDiffView'
import GitDiffViewSource from '@/components/engineering/GitDiffView?raw'
import ServerStatBadge from '@/components/engineering/ServerStatBadge'
import ServerStatBadgeSource from '@/components/engineering/ServerStatBadge?raw'

// Food Components
import FoodButton from '@/components/food/FoodButton'
import FoodButtonSource from '@/components/food/FoodButton?raw'
import FoodCard from '@/components/food/FoodCard'
import FoodCardSource from '@/components/food/FoodCard?raw'
import HeroDish from '@/components/food/HeroDish'
import HeroDishSource from '@/components/food/HeroDish?raw'
import MenuGrid from '@/components/food/MenuGrid'
import MenuGridSource from '@/components/food/MenuGrid?raw'
import CartWidget from '@/components/food/CartWidget'
import CartWidgetSource from '@/components/food/CartWidget?raw'

// Magazine Components
import EditorialButton from '@/components/magazine/EditorialButton'
import EditorialButtonSource from '@/components/magazine/EditorialButton?raw'
import MagazineCard from '@/components/magazine/MagazineCard'
import MagazineCardSource from '@/components/magazine/MagazineCard?raw'
import FeatureStory from '@/components/magazine/FeatureStory'
import FeatureStorySource from '@/components/magazine/FeatureStory?raw'
import Newsletter from '@/components/magazine/Newsletter'
import NewsletterSource from '@/components/magazine/Newsletter?raw'
import TrendingList from '@/components/magazine/TrendingList'
import TrendingListSource from '@/components/magazine/TrendingList?raw'

// Ecommerce Button Component
import ShopButton from '@/components/ecommerce/ShopButton'
import ShopButtonSource from '@/components/ecommerce/ShopButton?raw'

// Productivity Components
import FlowButton from '@/components/productivity/FlowButton'
import FlowButtonSource from '@/components/productivity/FlowButton?raw'
import ProductivityCard from '@/components/productivity/ProductivityCard'
import ProductivityCardSource from '@/components/productivity/ProductivityCard?raw'
import FocusTimer from '@/components/productivity/FocusTimer'
import FocusTimerSource from '@/components/productivity/FocusTimer?raw'
import TaskInbox from '@/components/productivity/TaskInbox'
import TaskInboxSource from '@/components/productivity/TaskInbox?raw'
import KanbanBoard from '@/components/productivity/KanbanBoard'
import KanbanBoardSource from '@/components/productivity/KanbanBoard?raw'

// Swiss Components
import SwissButton from '@/components/swiss/SwissButton'
import SwissButtonSource from '@/components/swiss/SwissButton?raw'
import SwissGrid from '@/components/swiss/SwissGrid'
import SwissGridSource from '@/components/swiss/SwissGrid?raw'
import SwissTypography from '@/components/swiss/SwissTypography'
import SwissTypographySource from '@/components/swiss/SwissTypography?raw'
import SwissDivider from '@/components/swiss/SwissDivider'
import SwissDividerSource from '@/components/swiss/SwissDivider?raw'
import SwissCard from '@/components/swiss/SwissCard'
import SwissCardSource from '@/components/swiss/SwissCard?raw'
import SwissMetric from '@/components/swiss/SwissMetric'
import SwissMetricSource from '@/components/swiss/SwissMetric?raw'

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
import JournalEntry from '@/components/wellness/JournalEntry'
import JournalEntrySource from '@/components/wellness/JournalEntry?raw'
import MeditationTimer from '@/components/wellness/MeditationTimer'
import MeditationTimerSource from '@/components/wellness/MeditationTimer?raw'
import HabitCheckbox from '@/components/wellness/HabitCheckbox'
import HabitCheckboxSource from '@/components/wellness/HabitCheckbox?raw'

// SaaS Components
import MetricCard from '@/components/saas/MetricCard'
import MetricCardSource from '@/components/saas/MetricCard?raw'
import RevenueChart from '@/components/saas/RevenueChart'
import RevenueChartSource from '@/components/saas/RevenueChart?raw'
import CustomerTable from '@/components/saas/CustomerTable'
import CustomerTableSource from '@/components/saas/CustomerTable?raw'
import SaasCard from '@/components/saas/SaasCard'
import SaasCardSource from '@/components/saas/SaasCard?raw'
import SaasButton from '@/components/saas/SaasButton'
import SaasButtonSource from '@/components/saas/SaasButton?raw'

// Music Components
import NowPlaying from '@/components/music/NowPlaying'
import NowPlayingSource from '@/components/music/NowPlaying?raw'
import TrackList from '@/components/music/TrackList'
import TrackListSource from '@/components/music/TrackList?raw'
import AlbumGrid from '@/components/music/AlbumGrid'
import AlbumGridSource from '@/components/music/AlbumGrid?raw'
import MusicCard from '@/components/music/MusicCard'
import MusicCardSource from '@/components/music/MusicCard?raw'
import MusicButton from '@/components/music/MusicButton'
import MusicButtonSource from '@/components/music/MusicButton?raw'
import VolumeSlider from '@/components/music/VolumeSlider'
import VolumeSliderSource from '@/components/music/VolumeSlider?raw'
import EqualizerBars from '@/components/music/EqualizerBars'
import EqualizerBarsSource from '@/components/music/EqualizerBars?raw'

// Grid Components
import CityMap from '@/components/grid/CityMap'
import CityMapSource from '@/components/grid/CityMap?raw'
import ResourceGauge from '@/components/grid/ResourceGauge'
import ResourceGaugeSource from '@/components/grid/ResourceGauge?raw'
import SystemControls from '@/components/grid/SystemControls'
import SystemControlsSource from '@/components/grid/SystemControls?raw'
import GridCard from '@/components/grid/GridCard'
import GridCardSource from '@/components/grid/GridCard?raw'
import GridButton from '@/components/grid/GridButton'
import GridButtonSource from '@/components/grid/GridButton?raw'
import AlertBanner from '@/components/grid/AlertBanner'
import AlertBannerSource from '@/components/grid/AlertBanner?raw'

// Brutalist Components
import MarqueeHeader from '@/components/brutalist/MarqueeHeader'
import MarqueeHeaderSource from '@/components/brutalist/MarqueeHeader?raw'
import ArtGrid from '@/components/brutalist/ArtGrid'
import ArtGridSource from '@/components/brutalist/ArtGrid?raw'
import Manifesto from '@/components/brutalist/Manifesto'
import ManifestoSource from '@/components/brutalist/Manifesto?raw'
import BrutalistCard from '@/components/brutalist/BrutalistCard'
import BrutalistCardSource from '@/components/brutalist/BrutalistCard?raw'
import BrutalistButton from '@/components/brutalist/BrutalistButton'
import BrutalistButtonSource from '@/components/brutalist/BrutalistButton?raw'
import StampBadge from '@/components/brutalist/StampBadge'
import StampBadgeSource from '@/components/brutalist/StampBadge?raw'

// Kitchen Components
import ActiveStep from '@/components/kitchen/ActiveStep'
import ActiveStepSource from '@/components/kitchen/ActiveStep?raw'
import IngredientScale from '@/components/kitchen/IngredientScale'
import IngredientScaleSource from '@/components/kitchen/IngredientScale?raw'
import SmartTimer from '@/components/kitchen/SmartTimer'
import SmartTimerSource from '@/components/kitchen/SmartTimer?raw'
import KitchenCard from '@/components/kitchen/KitchenCard'
import KitchenCardSource from '@/components/kitchen/KitchenCard?raw'
import KitchenButton from '@/components/kitchen/KitchenButton'
import KitchenButtonSource from '@/components/kitchen/KitchenButton?raw'
import RecipeProgress from '@/components/kitchen/RecipeProgress'
import RecipeProgressSource from '@/components/kitchen/RecipeProgress?raw'

// Kids Components
import KidsCard from '@/components/kids/KidsCard'
import KidsCardSource from '@/components/kids/KidsCard?raw'
import BigIconNav from '@/components/kids/BigIconNav'
import BigIconNavSource from '@/components/kids/BigIconNav?raw'
import StarProgress from '@/components/kids/StarProgress'
import StarProgressSource from '@/components/kids/StarProgress?raw'
import Mascot from '@/components/kids/Mascot'
import MascotSource from '@/components/kids/Mascot?raw'
import KidsButton from '@/components/kids/KidsButton'
import KidsButtonSource from '@/components/kids/KidsButton?raw'
import RewardStar from '@/components/kids/RewardStar'
import RewardStarSource from '@/components/kids/RewardStar?raw'
import SpeechBubble from '@/components/kids/SpeechBubble'
import SpeechBubbleSource from '@/components/kids/SpeechBubble?raw'

// E-Ink Components
import EInkSidebar from '@/components/eink/EInkSidebar'
import EInkSidebarSource from '@/components/eink/EInkSidebar?raw'
import ReaderContent from '@/components/eink/ReaderContent'
import ReaderContentSource from '@/components/eink/ReaderContent?raw'
import LibraryGrid from '@/components/eink/LibraryGrid'
import LibraryGridSource from '@/components/eink/LibraryGrid?raw'
import EInkCard from '@/components/eink/EInkCard'
import EInkCardSource from '@/components/eink/EInkCard?raw'
import EInkButton from '@/components/eink/EInkButton'
import EInkButtonSource from '@/components/eink/EInkButton?raw'
import ReadingProgress from '@/components/eink/ReadingProgress'
import ReadingProgressSource from '@/components/eink/ReadingProgress?raw'

// Solarpunk Components
import EnergySun from '@/components/solarpunk/EnergySun'
import EnergySunSource from '@/components/solarpunk/EnergySun?raw'
import AirQualityLeaf from '@/components/solarpunk/AirQualityLeaf'
import AirQualityLeafSource from '@/components/solarpunk/AirQualityLeaf?raw'
import SolarCard from '@/components/solarpunk/SolarCard'
import SolarCardSource from '@/components/solarpunk/SolarCard?raw'
import SolarpunkButton from '@/components/solarpunk/SolarpunkButton'
import SolarpunkButtonSource from '@/components/solarpunk/SolarpunkButton?raw'
import EcoStats from '@/components/solarpunk/EcoStats'
import EcoStatsSource from '@/components/solarpunk/EcoStats?raw'
import PlantProgress from '@/components/solarpunk/PlantProgress'
import PlantProgressSource from '@/components/solarpunk/PlantProgress?raw'

// Legal Components
import LegalPaper from '@/components/legal/LegalPaper'
import LegalPaperSource from '@/components/legal/LegalPaper?raw'
import Clause from '@/components/legal/Clause'
import ClauseSource from '@/components/legal/Clause?raw'
import RedlineSidebar from '@/components/legal/RedlineSidebar'
import RedlineSidebarSource from '@/components/legal/RedlineSidebar?raw'
import DiffViewer from '@/components/legal/DiffViewer'
import DiffViewerSource from '@/components/legal/DiffViewer?raw'
import LegalButton from '@/components/legal/LegalButton'
import LegalButtonSource from '@/components/legal/LegalButton?raw'
import DocumentStatus from '@/components/legal/DocumentStatus'
import DocumentStatusSource from '@/components/legal/DocumentStatus?raw'

// Soft Plastic Components
import NeumorphicCard from '@/components/softplastic/NeumorphicCard'
import NeumorphicCardSource from '@/components/softplastic/NeumorphicCard?raw'
import NeumorphicButton from '@/components/softplastic/NeumorphicButton'
import NeumorphicButtonSource from '@/components/softplastic/NeumorphicButton?raw'
import ThermostatDial from '@/components/softplastic/ThermostatDial'
import ThermostatDialSource from '@/components/softplastic/ThermostatDial?raw'
import DeviceToggle from '@/components/softplastic/DeviceToggle'
import DeviceToggleSource from '@/components/softplastic/DeviceToggle?raw'
import NeumorphicSlider from '@/components/softplastic/NeumorphicSlider'
import NeumorphicSliderSource from '@/components/softplastic/NeumorphicSlider?raw'

// Festival Components
import FestivalCard from '@/components/festival/FestivalCard'
import FestivalCardSource from '@/components/festival/FestivalCard?raw'
import SoundwaveTimeline from '@/components/festival/SoundwaveTimeline'
import SoundwaveTimelineSource from '@/components/festival/SoundwaveTimeline?raw'
import CrowdHeatmap from '@/components/festival/CrowdHeatmap'
import CrowdHeatmapSource from '@/components/festival/CrowdHeatmap?raw'
import TicketWallet from '@/components/festival/TicketWallet'
import TicketWalletSource from '@/components/festival/TicketWallet?raw'
import FestivalButton from '@/components/festival/FestivalButton'
import FestivalButtonSource from '@/components/festival/FestivalButton?raw'
import ArtistCard from '@/components/festival/ArtistCard'
import ArtistCardSource from '@/components/festival/ArtistCard?raw'

// Acid Components
import AcidCard from '@/components/acid/AcidCard'
import AcidCardSource from '@/components/acid/AcidCard?raw'
import GlitchText from '@/components/acid/GlitchText'
import GlitchTextSource from '@/components/acid/GlitchText?raw'
import Sticker from '@/components/acid/Sticker'
import StickerSource from '@/components/acid/Sticker?raw'
import Marquee from '@/components/acid/Marquee'
import MarqueeSource from '@/components/acid/Marquee?raw'
import AcidButton from '@/components/acid/AcidButton'
import AcidButtonSource from '@/components/acid/AcidButton?raw'
import ChromaShift from '@/components/acid/ChromaShift'
import ChromaShiftSource from '@/components/acid/ChromaShift?raw'

// Claymorphism Components
import ClayCard from '@/components/clay/ClayCard'
import ClayCardSource from '@/components/clay/ClayCard?raw'
import ClayButton from '@/components/clay/ClayButton'
import ClayButtonSource from '@/components/clay/ClayButton?raw'
import ClayToggle from '@/components/clay/ClayToggle'
import ClayToggleSource from '@/components/clay/ClayToggle?raw'
import ClayProgress from '@/components/clay/ClayProgress'
import ClayProgressSource from '@/components/clay/ClayProgress?raw'

// Blueprint Components
import BlueprintCard from '@/components/blueprint/BlueprintCard'
import BlueprintCardSource from '@/components/blueprint/BlueprintCard?raw'
import CadViewer from '@/components/blueprint/CadViewer'
import CadViewerSource from '@/components/blueprint/CadViewer?raw'
import LayerControl from '@/components/blueprint/LayerControl'
import LayerControlSource from '@/components/blueprint/LayerControl?raw'
import MeasurementLabel from '@/components/blueprint/MeasurementLabel'
import MeasurementLabelSource from '@/components/blueprint/MeasurementLabel?raw'

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
        theme: 'engineering',
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
        theme: 'engineering',
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
        theme: 'saas',
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
        theme: 'engineering',
        category: 'feedback',
        component: ShortcutGuide,
        source: ShortcutGuideSource,
        tags: ['shortcuts', 'keyboard', 'help', 'guide'],
    },
    {
        id: 'deployment-pipeline',
        name: 'DeploymentPipeline',
        description: 'CI/CD visualization with stage indicators',
        theme: 'engineering',
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
    {
        id: 'fintech-button',
        name: 'FintechButton',
        description: 'Professional banking button with shimmer effect',
        theme: 'fintech',
        category: 'interactive',
        component: FintechButton,
        source: FintechButtonSource,
        tags: ['button', 'fintech', 'banking', 'professional'],
        previewProps: {
            children: 'Transfer',
            variant: 'primary'
        }
    },
    {
        id: 'fintech-card',
        name: 'FintechCard',
        description: 'Dark, professional card for financial dashboards',
        theme: 'fintech',
        category: 'layout',
        component: FintechCard,
        source: FintechCardSource,
        tags: ['card', 'fintech', 'container', 'dark'],
        previewProps: {
            children: 'Financial Data',
            className: 'p-6'
        }
    },
    {
        id: 'currency-converter',
        name: 'CurrencyConverter',
        description: 'Interactive currency exchange widget with swap functionality',
        theme: 'fintech',
        category: 'interactive',
        component: CurrencyConverter,
        source: CurrencyConverterSource,
        tags: ['currency', 'converter', 'exchange', 'fintech'],
    },
    {
        id: 'sparkline-chart',
        name: 'SparklineChart',
        description: 'Compact inline chart for trend visualization',
        theme: 'fintech',
        category: 'visualization',
        component: SparklineChart,
        source: SparklineChartSource,
        tags: ['chart', 'sparkline', 'trend', 'fintech', 'graph'],
        previewProps: {
            data: [20, 25, 18, 30, 28, 35, 32, 40, 38, 45],
            label: 'AAPL',
            value: '$178.50',
            change: 2.34
        }
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
    {
        id: 'cockpit-card',
        name: 'CockpitCard',
        description: 'Dark automotive card with matte texture and optional alert state',
        theme: 'cockpit',
        category: 'layout',
        component: CockpitCard,
        source: CockpitCardSource,
        tags: ['card', 'container', 'automotive', 'dashboard'],
        previewProps: { children: 'Cockpit Card Content', label: 'Status' },
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
    {
        id: 'game-button',
        name: 'GameButton',
        description: 'Neon arcade-style button with gradient glow effects',
        theme: 'game',
        category: 'interactive',
        component: GameButton,
        source: GameButtonSource,
        tags: ['button', 'game', 'arcade', 'neon', 'glow'],
        previewProps: {
            children: 'START GAME',
            variant: 'primary'
        }
    },
    {
        id: 'game-card',
        name: 'GameCard',
        description: 'Gaming container with glossy sheen and color variants',
        theme: 'game',
        category: 'layout',
        component: GameCard,
        source: GameCardSource,
        tags: ['card', 'game', 'container', 'arcade'],
        previewProps: {
            children: 'Game Content',
            variant: 'primary',
            className: 'p-6'
        }
    },
    {
        id: 'achievement-badge',
        name: 'AchievementBadge',
        description: 'Rarity-based achievement badge with unlock progress',
        theme: 'game',
        category: 'data-display',
        component: AchievementBadge,
        source: AchievementBadgeSource,
        tags: ['badge', 'achievement', 'unlock', 'game', 'rarity'],
        previewProps: {
            title: 'First Blood',
            description: 'Win your first match',
            icon: 'trophy',
            rarity: 'epic',
            unlocked: true
        }
    },
    {
        id: 'health-bar',
        name: 'HealthBar',
        description: 'Animated resource bar with multiple types (HP, mana, energy)',
        theme: 'game',
        category: 'visualization',
        component: HealthBar,
        source: HealthBarSource,
        tags: ['health', 'bar', 'game', 'status', 'resource'],
        previewProps: {
            type: 'health',
            current: 75,
            max: 100,
            label: 'HP'
        }
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
    {
        id: 'holographic-table',
        name: 'HolographicTable',
        description: 'Transparent data table with scanline hover effects',
        theme: 'scifi',
        category: 'data-display',
        component: HolographicTable,
        source: HolographicTableSource,
        tags: ['table', 'hologram', 'data', 'scifi'],
        previewProps: {
            columns: [
                { key: 'id', header: 'ID', width: '20%' },
                { key: 'system', header: 'System', width: '40%' },
                { key: 'status', header: 'Status', width: '40%' },
            ],
            data: [
                { id: 'SYS-01', system: 'Navigation', status: 'Online' },
                { id: 'SYS-02', system: 'Life Support', status: 'Optimal' },
                { id: 'SYS-03', system: 'Shields', status: 'Charging' },
            ],
            title: 'System Diagnostics'
        }
    },
    {
        id: 'glitch-heading',
        name: 'GlitchHeading',
        description: 'Cyberpunk heading with glitch animation effects',
        theme: 'scifi',
        category: 'layout',
        component: GlitchHeading,
        source: GlitchHeadingSource,
        tags: ['heading', 'text', 'glitch', 'animation'],
        previewProps: {
            text: 'CYBERPUNK',
            size: 'lg'
        }
    },
    {
        id: 'neon-toggle',
        name: 'NeonToggle',
        description: 'Neon tube style toggle switch with glow',
        theme: 'scifi',
        category: 'forms',
        component: NeonToggle,
        source: NeonToggleSource,
        tags: ['toggle', 'switch', 'neon', 'glow'],
        previewProps: {
            label: 'Power',
            initialState: true,
            color: 'cyan'
        }
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
    {
        id: 'education-button',
        name: 'EducationButton',
        description: 'Vibrant button with gradient and shine effect for learning apps',
        theme: 'education',
        category: 'interactive',
        component: EducationButton,
        source: EducationButtonSource,
        tags: ['button', 'education', 'gradient', 'learning'],
    },
    {
        id: 'education-card',
        name: 'EducationCard',
        description: 'Card container with featured state for education content',
        theme: 'education',
        category: 'layout',
        component: EducationCard,
        source: EducationCardSource,
        tags: ['card', 'container', 'education', 'featured'],
        previewProps: { children: 'Education Card Content', featured: false },
    },
    {
        id: 'study-stats',
        name: 'StudyStats',
        description: 'Dashboard grid showing study metrics like hours, assignments, and grades',
        theme: 'education',
        category: 'data-display',
        component: StudyStats,
        source: StudyStatsSource,
        tags: ['stats', 'metrics', 'dashboard', 'education'],
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
    {
        id: 'social-button',
        name: 'SocialButton',
        description: 'Social media button with follow and icon variants',
        theme: 'social',
        category: 'interactive',
        component: SocialButton,
        source: SocialButtonSource,
        tags: ['button', 'social', 'follow', 'interactive'],
        previewProps: {
            children: 'Follow',
            variant: 'primary'
        }
    },
    {
        id: 'social-card',
        name: 'SocialCard',
        description: 'Glass-effect card for social media content',
        theme: 'social',
        category: 'layout',
        component: SocialCard,
        source: SocialCardSource,
        tags: ['card', 'social', 'container', 'glass'],
        previewProps: {
            children: 'Social Content',
            className: 'p-6'
        }
    },
    {
        id: 'story-rail',
        name: 'StoryRail',
        description: 'Horizontal scrolling story avatars with gradient rings',
        theme: 'social',
        category: 'navigation',
        component: StoryRail,
        source: StoryRailSource,
        tags: ['stories', 'avatars', 'social', 'feed'],
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
    {
        id: 'legacy-alert',
        name: 'LegacyAlert',
        description: 'Classic Windows 95/98 style error dialog box',
        theme: 'legacy',
        category: 'feedback',
        component: LegacyAlert,
        source: LegacyAlertSource,
        tags: ['dialog', 'error', 'alert', 'retro', 'windows'],
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
    {
        id: 'journal-entry',
        name: 'JournalEntry',
        description: 'Gratitude and reflection journal with lined paper aesthetic',
        theme: 'wellness',
        category: 'forms',
        component: JournalEntry,
        source: JournalEntrySource,
        tags: ['journal', 'gratitude', 'writing', 'wellness', 'mindfulness'],
        previewProps: {
            prompt: "What are you grateful for today?",
            gratitudeMode: true
        }
    },
    {
        id: 'meditation-timer',
        name: 'MeditationTimer',
        description: 'Circular countdown timer with breathing animations for meditation sessions',
        theme: 'wellness',
        category: 'interactive',
        component: MeditationTimer,
        source: MeditationTimerSource,
        tags: ['timer', 'meditation', 'mindfulness', 'wellness', 'countdown'],
        previewProps: {
            duration: 5,
            presets: [5, 10, 15, 20]
        }
    },
    {
        id: 'habit-checkbox',
        name: 'HabitCheckbox',
        description: 'Animated checkbox for habit tracking with streak counter and celebration effects',
        theme: 'wellness',
        category: 'forms',
        component: HabitCheckbox,
        source: HabitCheckboxSource,
        tags: ['habit', 'checkbox', 'tracker', 'wellness', 'streak'],
        previewProps: {
            label: "Morning meditation",
            description: "10 minutes of mindfulness",
            icon: "sun",
            streak: 7,
            color: "sage"
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
    {
        id: 'console-output',
        name: 'ConsoleOutput',
        description: 'Live console log viewer with typed log entries and auto-scroll',
        theme: 'engineering',
        category: 'data-display',
        component: ConsoleOutput,
        source: ConsoleOutputSource,
        tags: ['console', 'logs', 'terminal', 'output', 'developer'],
    },
    {
        id: 'git-diff-view',
        name: 'GitDiffView',
        description: 'Git diff visualization with line numbers and syntax highlighting',
        theme: 'engineering',
        category: 'data-display',
        component: GitDiffView,
        source: GitDiffViewSource,
        tags: ['git', 'diff', 'code', 'changes', 'version-control'],
    },
    {
        id: 'server-stat-badge',
        name: 'ServerStatBadge',
        description: 'Server status badge with health indicators and metrics',
        theme: 'engineering',
        category: 'data-display',
        component: ServerStatBadge,
        source: ServerStatBadgeSource,
        tags: ['server', 'status', 'health', 'badge', 'monitoring'],
        previewProps: {
            label: 'Uptime',
            value: '99.9%',
            status: 'healthy',
            metric: 'network',
            trend: 'up',
            trendValue: '0.1%'
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
    {
        id: 'food-card',
        name: 'FoodCard',
        description: 'Warm dark card with rounded corners for food apps',
        theme: 'food',
        category: 'layout',
        component: FoodCard,
        source: FoodCardSource,
        tags: ['card', 'food', 'container', 'warm'],
        previewProps: {
            children: 'Menu Item',
            className: 'p-6'
        }
    },
    {
        id: 'hero-dish',
        name: 'HeroDish',
        description: 'Large featured dish card with image overlay and details',
        theme: 'food',
        category: 'data-display',
        component: HeroDish,
        source: HeroDishSource,
        tags: ['hero', 'dish', 'food', 'featured', 'menu'],
    },
    {
        id: 'menu-grid',
        name: 'MenuGrid',
        description: 'Food menu grid with category filters and item cards',
        theme: 'food',
        category: 'data-display',
        component: MenuGrid,
        source: MenuGridSource,
        tags: ['menu', 'grid', 'food', 'categories'],
    },
    {
        id: 'cart-widget',
        name: 'CartWidget',
        description: 'Order summary sidebar with items and checkout',
        theme: 'food',
        category: 'interactive',
        component: CartWidget,
        source: CartWidgetSource,
        tags: ['cart', 'order', 'food', 'checkout'],
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
    {
        id: 'magazine-card',
        name: 'MagazineCard',
        description: 'Editorial card with elegant hover animation and optional padding',
        theme: 'magazine',
        category: 'layout',
        component: MagazineCard,
        source: MagazineCardSource,
        tags: ['card', 'editorial', 'magazine', 'container'],
        previewProps: { children: 'Magazine Card Content', hoverEffect: true },
    },
    {
        id: 'feature-story',
        name: 'FeatureStory',
        description: 'Hero article component with large image and elegant typography',
        theme: 'magazine',
        category: 'data-display',
        component: FeatureStory,
        source: FeatureStorySource,
        tags: ['article', 'hero', 'feature', 'editorial'],
    },
    {
        id: 'newsletter',
        name: 'Newsletter',
        description: 'Dark themed newsletter signup with elegant styling',
        theme: 'magazine',
        category: 'form',
        component: Newsletter,
        source: NewsletterSource,
        tags: ['newsletter', 'email', 'signup', 'form'],
    },
    {
        id: 'trending-list',
        name: 'TrendingList',
        description: 'Numbered list of trending articles with category tags',
        theme: 'magazine',
        category: 'data-display',
        component: TrendingList,
        source: TrendingListSource,
        tags: ['list', 'trending', 'articles', 'editorial'],
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
    {
        id: 'commerce-card',
        name: 'CommerceCard',
        description: 'Clean minimal card container for e-commerce content',
        theme: 'ecommerce',
        category: 'layout',
        component: CommerceCard,
        source: CommerceCardSource,
        tags: ['card', 'container', 'ecommerce', 'minimal'],
        previewProps: { children: 'Commerce Card Content' },
    },
    {
        id: 'promo-banner',
        name: 'PromoBanner',
        description: 'Full-width promotional banner with background image and CTA',
        theme: 'ecommerce',
        category: 'marketing',
        component: PromoBanner,
        source: PromoBannerSource,
        tags: ['banner', 'promo', 'hero', 'marketing'],
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
    {
        id: 'productivity-card',
        name: 'ProductivityCard',
        description: 'Clean card container for productivity dashboards',
        theme: 'productivity',
        category: 'layout',
        component: ProductivityCard,
        source: ProductivityCardSource,
        tags: ['card', 'productivity', 'container', 'clean'],
        previewProps: {
            children: 'Task Content',
            className: 'p-6'
        }
    },
    {
        id: 'focus-timer',
        name: 'FocusTimer',
        description: 'Pomodoro-style focus session timer with ring progress',
        theme: 'productivity',
        category: 'interactive',
        component: FocusTimer,
        source: FocusTimerSource,
        tags: ['timer', 'pomodoro', 'focus', 'productivity'],
    },
    {
        id: 'task-inbox',
        name: 'TaskInbox',
        description: 'Task list inbox with due dates and quick add',
        theme: 'productivity',
        category: 'data-display',
        component: TaskInbox,
        source: TaskInboxSource,
        tags: ['tasks', 'inbox', 'todo', 'productivity'],
    },
    {
        id: 'kanban-board',
        name: 'KanbanBoard',
        description: 'Kanban-style task board with columns and cards',
        theme: 'productivity',
        category: 'data-display',
        component: KanbanBoard,
        source: KanbanBoardSource,
        tags: ['kanban', 'board', 'tasks', 'productivity', 'project'],
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
    {
        id: 'swiss-card',
        name: 'SwissCard',
        description: 'Bold Swiss design card with inverted/black variants',
        theme: 'swiss',
        category: 'layout',
        component: SwissCard,
        source: SwissCardSource,
        tags: ['card', 'container', 'swiss', 'minimal'],
        previewProps: { children: 'Swiss Card Content', bordered: true },
    },
    {
        id: 'swiss-metric',
        name: 'SwissMetric',
        description: 'Large typography metric display with animated border',
        theme: 'swiss',
        category: 'data-display',
        component: SwissMetric,
        source: SwissMetricSource,
        tags: ['metric', 'stats', 'typography', 'swiss'],
        previewProps: { label: 'Projects', value: '147', description: 'Active this quarter' },
    },

    // SaaS Components
    {
        id: 'metric-card',
        name: 'MetricCard',
        description: 'Key metric display with trend indicator',
        theme: 'saas',
        category: 'data-display',
        component: MetricCard,
        source: MetricCardSource,
        tags: ['metric', 'card', 'saas', 'stats'],
        previewProps: {
            label: 'Total Revenue',
            value: '$45,231',
            trend: '+20.1%',
            trendUp: true,
            icon: Box
        }
    },
    {
        id: 'revenue-chart',
        name: 'RevenueChart',
        description: 'Revenue analytics chart with period toggle',
        theme: 'saas',
        category: 'visualization',
        component: RevenueChart,
        source: RevenueChartSource,
        tags: ['chart', 'revenue', 'analytics', 'graph'],
    },
    {
        id: 'customer-table',
        name: 'CustomerTable',
        description: 'Data table with status badges and actions',
        theme: 'saas',
        category: 'data-display',
        component: CustomerTable,
        source: CustomerTableSource,
        tags: ['table', 'customers', 'data', 'list'],
    },
    {
        id: 'saas-card',
        name: 'SaasCard',
        description: 'Clean card container for SaaS dashboards',
        theme: 'saas',
        category: 'layout',
        component: SaasCard,
        source: SaasCardSource,
        tags: ['card', 'container', 'saas', 'layout'],
        previewProps: {
            children: 'Card Content',
            className: 'p-4'
        }
    },
    {
        id: 'saas-button',
        name: 'SaasButton',
        description: 'Professional button with multiple variants',
        theme: 'saas',
        category: 'interactive',
        component: SaasButton,
        source: SaasButtonSource,
        tags: ['button', 'saas', 'interactive', 'control'],
        previewProps: {
            children: 'Action',
            variant: 'primary'
        }
    },

    // Music Components
    {
        id: 'now-playing',
        name: 'NowPlaying',
        description: 'Music player control bar with album art',
        theme: 'music',
        category: 'interactive',
        component: NowPlaying,
        source: NowPlayingSource,
        tags: ['player', 'music', 'controls', 'media'],
    },
    {
        id: 'track-list',
        name: 'TrackList',
        description: 'Sortable list of music tracks',
        theme: 'music',
        category: 'data-display',
        component: TrackList,
        source: TrackListSource,
        tags: ['list', 'tracks', 'music', 'playlist'],
    },
    {
        id: 'album-grid',
        name: 'AlbumGrid',
        description: 'Grid display of album covers',
        theme: 'music',
        category: 'data-display',
        component: AlbumGrid,
        source: AlbumGridSource,
        tags: ['grid', 'albums', 'music', 'covers'],
    },
    {
        id: 'music-card',
        name: 'MusicCard',
        description: 'Dark themed card for music applications',
        theme: 'music',
        category: 'layout',
        component: MusicCard,
        source: MusicCardSource,
        tags: ['card', 'music', 'dark', 'container'],
        previewProps: {
            children: 'Music Content',
            className: 'p-6'
        }
    },
    {
        id: 'music-button',
        name: 'MusicButton',
        description: 'Rounded button with gradient accents',
        theme: 'music',
        category: 'interactive',
        component: MusicButton,
        source: MusicButtonSource,
        tags: ['button', 'music', 'interactive', 'play'],
        previewProps: {
            children: 'Play',
            variant: 'primary'
        }
    },
    {
        id: 'volume-slider',
        name: 'VolumeSlider',
        description: 'Volume control slider with mute toggle and gradient fill',
        theme: 'music',
        category: 'interactive',
        component: VolumeSlider,
        source: VolumeSliderSource,
        tags: ['slider', 'volume', 'audio', 'control'],
        previewProps: { initialVolume: 70 },
    },
    {
        id: 'equalizer-bars',
        name: 'EqualizerBars',
        description: 'Animated audio equalizer visualization bars',
        theme: 'music',
        category: 'visualization',
        component: EqualizerBars,
        source: EqualizerBarsSource,
        tags: ['equalizer', 'audio', 'animation', 'visualizer'],
        previewProps: { isPlaying: true, barCount: 5 },
    },

    // Grid Components
    {
        id: 'city-map',
        name: 'CityMap',
        description: 'Interactive city infrastructure map overlay',
        theme: 'grid',
        category: 'visualization',
        component: CityMap,
        source: CityMapSource,
        tags: ['map', 'city', 'grid', 'infrastructure'],
    },
    {
        id: 'resource-gauge',
        name: 'ResourceGauge',
        description: 'Circular gauge for resource monitoring',
        theme: 'grid',
        category: 'visualization',
        component: ResourceGauge,
        source: ResourceGaugeSource,
        tags: ['gauge', 'resource', 'monitoring', 'chart'],
    },
    {
        id: 'system-controls',
        name: 'SystemControls',
        description: 'Control panel with toggles and status',
        theme: 'grid',
        category: 'interactive',
        component: SystemControls,
        source: SystemControlsSource,
        tags: ['controls', 'system', 'panel', 'grid'],
    },
    {
        id: 'grid-card',
        name: 'GridCard',
        description: 'Technical data container with header',
        theme: 'grid',
        category: 'layout',
        component: GridCard,
        source: GridCardSource,
        tags: ['card', 'grid', 'container', 'technical'],
        previewProps: {
            title: 'System Status',
            children: 'Operational',
            className: 'h-32'
        }
    },
    {
        id: 'grid-button',
        name: 'GridButton',
        description: 'Technical button with status indicator',
        theme: 'grid',
        category: 'interactive',
        component: GridButton,
        source: GridButtonSource,
        tags: ['button', 'grid', 'technical', 'control'],
        previewProps: {
            children: 'Execute',
            variant: 'primary',
            status: 'online'
        }
    },
    {
        id: 'alert-banner',
        name: 'AlertBanner',
        description: 'System alert notification with type variants',
        theme: 'grid',
        category: 'feedback',
        component: AlertBanner,
        source: AlertBannerSource,
        tags: ['alert', 'notification', 'warning', 'status'],
        previewProps: { type: 'warning', title: 'Grid Overload Warning' },
    },

    // Brutalist Components
    {
        id: 'marquee-header',
        name: 'MarqueeHeader',
        description: 'Scrolling text marquee header',
        theme: 'brutalist',
        category: 'navigation',
        component: MarqueeHeader,
        source: MarqueeHeaderSource,
        tags: ['marquee', 'header', 'scrolling', 'brutalist'],
    },
    {
        id: 'art-grid',
        name: 'ArtGrid',
        description: 'Masonry-style grid for art display',
        theme: 'brutalist',
        category: 'layout',
        component: ArtGrid,
        source: ArtGridSource,
        tags: ['grid', 'art', 'masonry', 'gallery'],
    },
    {
        id: 'manifesto',
        name: 'Manifesto',
        description: 'Bold text block with brutalist typography',
        theme: 'brutalist',
        category: 'data-display',
        component: Manifesto,
        source: ManifestoSource,
        tags: ['text', 'typography', 'brutalist', 'manifesto'],
    },
    {
        id: 'brutalist-card',
        name: 'BrutalistCard',
        description: 'Hard-edge card with heavy borders',
        theme: 'brutalist',
        category: 'layout',
        component: BrutalistCard,
        source: BrutalistCardSource,
        tags: ['card', 'brutalist', 'border', 'bold'],
        previewProps: {
            children: 'Brutalist Content',
            className: 'p-6 bg-yellow-400'
        }
    },
    {
        id: 'brutalist-button',
        name: 'BrutalistButton',
        description: 'High-contrast button with hard shadows',
        theme: 'brutalist',
        category: 'interactive',
        component: BrutalistButton,
        source: BrutalistButtonSource,
        tags: ['button', 'brutalist', 'bold', 'contrast'],
        previewProps: {
            children: 'CLICK ME',
            variant: 'neo'
        }
    },
    {
        id: 'stamp-badge',
        name: 'StampBadge',
        description: 'Retro rubber stamp badge with animated entrance',
        theme: 'brutalist',
        category: 'feedback',
        component: StampBadge,
        source: StampBadgeSource,
        tags: ['stamp', 'badge', 'approved', 'brutalist'],
        previewProps: { text: 'APPROVED', variant: 'approved' },
    },

    // Kitchen Components
    {
        id: 'active-step',
        name: 'ActiveStep',
        description: 'Current cooking step with voice controls',
        theme: 'kitchen',
        category: 'data-display',
        component: ActiveStep,
        source: ActiveStepSource,
        tags: ['step', 'recipe', 'cooking', 'instructions'],
    },
    {
        id: 'ingredient-scale',
        name: 'IngredientScale',
        description: 'Smart scale visualization for ingredients',
        theme: 'kitchen',
        category: 'visualization',
        component: IngredientScale,
        source: IngredientScaleSource,
        tags: ['scale', 'ingredients', 'measure', 'kitchen'],
    },
    {
        id: 'smart-timer',
        name: 'SmartTimer',
        description: 'Countdown timer with notifications',
        theme: 'kitchen',
        category: 'interactive',
        component: SmartTimer,
        source: SmartTimerSource,
        tags: ['timer', 'countdown', 'kitchen', 'clock'],
    },
    {
        id: 'kitchen-card',
        name: 'KitchenCard',
        description: 'Clean, airy card with soft shadows',
        theme: 'kitchen',
        category: 'layout',
        component: KitchenCard,
        source: KitchenCardSource,
        tags: ['card', 'kitchen', 'clean', 'recipe'],
        previewProps: {
            children: 'Kitchen Content',
            className: 'p-6'
        }
    },
    {
        id: 'kitchen-button',
        name: 'KitchenButton',
        description: 'Minimalist button with rounded corners',
        theme: 'kitchen',
        category: 'interactive',
        component: KitchenButton,
        source: KitchenButtonSource,
        tags: ['button', 'kitchen', 'minimal', 'clean'],
        previewProps: {
            children: 'Start Cooking',
            variant: 'primary'
        }
    },
    {
        id: 'recipe-progress',
        name: 'RecipeProgress',
        description: 'Recipe step tracker with progress bar and step list',
        theme: 'kitchen',
        category: 'data-display',
        component: RecipeProgress,
        source: RecipeProgressSource,
        tags: ['recipe', 'progress', 'cooking', 'steps'],
    },

    // Kids Components
    {
        id: 'kids-card',
        name: 'KidsCard',
        description: 'Colorful playful card with bounce effects',
        theme: 'kids',
        category: 'layout',
        component: KidsCard,
        source: KidsCardSource,
        tags: ['card', 'kids', 'playful', 'colorful'],
        previewProps: {
            children: 'Play!',
            color: 'bg-red-400',
            borderColor: 'border-red-600',
            className: 'p-4 aspect-square flex items-center justify-center text-white font-bold'
        }
    },
    {
        id: 'big-icon-nav',
        name: 'BigIconNav',
        description: 'Large touch-friendly navigation bar',
        theme: 'kids',
        category: 'navigation',
        component: BigIconNav,
        source: BigIconNavSource,
        tags: ['nav', 'kids', 'icons', 'touch'],
    },
    {
        id: 'star-progress',
        name: 'StarProgress',
        description: 'Gamified progress bar with stars',
        theme: 'kids',
        category: 'visualization',
        component: StarProgress,
        source: StarProgressSource,
        tags: ['progress', 'stars', 'gamification', 'kids'],
    },
    {
        id: 'mascot',
        name: 'Mascot',
        description: 'Animated character assistant',
        theme: 'kids',
        category: 'data-display',
        component: Mascot,
        source: MascotSource,
        tags: ['mascot', 'character', 'kids', 'animation'],
    },
    {
        id: 'kids-button',
        name: 'KidsButton',
        description: 'Chunky button with pop animation',
        theme: 'kids',
        category: 'interactive',
        component: KidsButton,
        source: KidsButtonSource,
        tags: ['button', 'kids', 'chunky', 'animation'],
        previewProps: {
            children: 'Go!',
            variant: 'primary'
        }
    },
    {
        id: 'reward-star',
        name: 'RewardStar',
        description: 'Animated reward badge with sparkle effects',
        theme: 'kids',
        category: 'data-display',
        component: RewardStar,
        source: RewardStarSource,
        tags: ['reward', 'star', 'badge', 'kids', 'gamification'],
        previewProps: {
            type: 'star',
            count: 3,
            label: 'Great Job!',
            color: 'yellow'
        }
    },
    {
        id: 'speech-bubble',
        name: 'SpeechBubble',
        description: 'Playful speech bubble for character dialogue',
        theme: 'kids',
        category: 'data-display',
        component: SpeechBubble,
        source: SpeechBubbleSource,
        tags: ['speech', 'bubble', 'dialogue', 'kids', 'character'],
        previewProps: {
            children: "Great job! You're doing amazing! 🎉",
            color: 'blue',
            character: '🦊'
        }
    },

    // E-Ink Components
    {
        id: 'eink-sidebar',
        name: 'EInkSidebar',
        description: 'Sidebar navigation with E-Ink refresh effect',
        theme: 'eink',
        category: 'navigation',
        component: EInkSidebar,
        source: EInkSidebarSource,
        tags: ['sidebar', 'eink', 'navigation', 'grayscale'],
    },
    {
        id: 'reader-content',
        name: 'ReaderContent',
        description: 'Readable text layout for E-Ink displays',
        theme: 'eink',
        category: 'data-display',
        component: ReaderContent,
        source: ReaderContentSource,
        tags: ['reader', 'text', 'eink', 'layout'],
    },
    {
        id: 'library-grid',
        name: 'LibraryGrid',
        description: 'Book cover grid for E-Ink library',
        theme: 'eink',
        category: 'data-display',
        component: LibraryGrid,
        source: LibraryGridSource,
        tags: ['library', 'grid', 'books', 'eink'],
    },
    {
        id: 'eink-card',
        name: 'EInkCard',
        description: 'High contrast card for E-Ink legibility',
        theme: 'eink',
        category: 'layout',
        component: EInkCard,
        source: EInkCardSource,
        tags: ['card', 'eink', 'contrast', 'layout'],
        previewProps: {
            children: 'E-Ink Content',
            className: 'p-6'
        }
    },
    {
        id: 'eink-button',
        name: 'EInkButton',
        description: 'High contrast button with ghosting effects',
        theme: 'eink',
        category: 'interactive',
        component: EInkButton,
        source: EInkButtonSource,
        tags: ['button', 'eink', 'contrast', 'interactive'],
        previewProps: {
            children: 'Refresh',
            variant: 'primary'
        }
    },
    {
        id: 'reading-progress',
        name: 'ReadingProgress',
        description: 'Book reading progress card with page count and time estimate',
        theme: 'eink',
        category: 'data-display',
        component: ReadingProgress,
        source: ReadingProgressSource,
        tags: ['reading', 'progress', 'book', 'ereader'],
    },

    // Solarpunk Components
    {
        id: 'energy-sun',
        name: 'EnergySun',
        description: 'Solar energy visualization',
        theme: 'solarpunk',
        category: 'visualization',
        component: EnergySun,
        source: EnergySunSource,
        tags: ['sun', 'energy', 'solar', 'visualization'],
    },
    {
        id: 'air-quality-leaf',
        name: 'AirQualityLeaf',
        description: 'Air quality gauge shaped like a leaf',
        theme: 'solarpunk',
        category: 'visualization',
        component: AirQualityLeaf,
        source: AirQualityLeafSource,
        tags: ['leaf', 'air', 'quality', 'gauge'],
    },
    {
        id: 'solar-card',
        name: 'SolarCard',
        description: 'Organic card with soft gradients',
        theme: 'solarpunk',
        category: 'layout',
        component: SolarCard,
        source: SolarCardSource,
        tags: ['card', 'organic', 'solarpunk', 'soft'],
        previewProps: {
            children: 'Solar Content',
            className: 'p-6'
        }
    },
    {
        id: 'solarpunk-button',
        name: 'SolarpunkButton',
        description: 'Organic button with nature-inspired colors',
        theme: 'solarpunk',
        category: 'interactive',
        component: SolarpunkButton,
        source: SolarpunkButtonSource,
        tags: ['button', 'organic', 'solarpunk', 'nature'],
        previewProps: {
            children: 'Plant',
            variant: 'primary'
        }
    },
    {
        id: 'eco-stats',
        name: 'EcoStats',
        description: 'Environmental statistics grid with icons',
        theme: 'solarpunk',
        category: 'data-display',
        component: EcoStats,
        source: EcoStatsSource,
        tags: ['stats', 'eco', 'environment', 'solarpunk'],
    },
    {
        id: 'plant-progress',
        name: 'PlantProgress',
        description: 'Plant growth tracker with water and sun levels',
        theme: 'solarpunk',
        category: 'data-display',
        component: PlantProgress,
        source: PlantProgressSource,
        tags: ['plant', 'progress', 'growth', 'solarpunk', 'garden'],
        previewProps: {
            name: 'Tomato Plant',
            stage: 'growing',
            waterLevel: 60,
            sunLevel: 80
        }
    },

    // Legal Components
    {
        id: 'legal-paper',
        name: 'LegalPaper',
        description: 'Document interface for contracts',
        theme: 'legal',
        category: 'layout',
        component: LegalPaper,
        source: LegalPaperSource,
        tags: ['paper', 'legal', 'document', 'contract'],
        previewProps: {
            title: 'Terms of Service',
            children: 'This agreement...'
        }
    },
    {
        id: 'clause',
        name: 'Clause',
        description: 'Contract clause with highlighting',
        theme: 'legal',
        category: 'data-display',
        component: Clause,
        source: ClauseSource,
        tags: ['clause', 'legal', 'contract', 'text'],
        previewProps: {
            number: '1.0',
            title: 'Scope',
            children: 'This is a clause.'
        }
    },
    {
        id: 'redline-sidebar',
        name: 'RedlineSidebar',
        description: 'Sidebar for tracking document changes',
        theme: 'legal',
        category: 'data-display',
        component: RedlineSidebar,
        source: RedlineSidebarSource,
        tags: ['sidebar', 'changes', 'redline', 'legal'],
    },
    {
        id: 'diff-viewer',
        name: 'DiffViewer',
        description: 'Visual diff comparison tool',
        theme: 'legal',
        category: 'visualization',
        component: DiffViewer,
        source: DiffViewerSource,
        tags: ['diff', 'compare', 'legal', 'changes'],
    },
    {
        id: 'legal-button',
        name: 'LegalButton',
        description: 'Formal serif button',
        theme: 'legal',
        category: 'interactive',
        component: LegalButton,
        source: LegalButtonSource,
        tags: ['button', 'legal', 'formal', 'serif'],
        previewProps: {
            children: 'Sign Agreement',
            variant: 'primary'
        }
    },
    {
        id: 'document-status',
        name: 'DocumentStatus',
        description: 'Document status indicator with state variants',
        theme: 'legal',
        category: 'feedback',
        component: DocumentStatus,
        source: DocumentStatusSource,
        tags: ['document', 'status', 'approval', 'workflow'],
        previewProps: { status: 'pending', documentName: 'Service Agreement v2.4' },
    },

    // Soft Plastic Components
    {
        id: 'neumorphic-card',
        name: 'NeumorphicCard',
        description: 'Soft UI card with neumorphic shadows',
        theme: 'softplastic',
        category: 'layout',
        component: NeumorphicCard,
        source: NeumorphicCardSource,
        tags: ['card', 'neumorphic', 'soft', 'shadow'],
        previewProps: {
            children: 'Soft Content',
            className: 'p-6 h-32'
        }
    },
    {
        id: 'neumorphic-button',
        name: 'NeumorphicButton',
        description: 'Soft UI button with pressed state',
        theme: 'softplastic',
        category: 'interactive',
        component: NeumorphicButton,
        source: NeumorphicButtonSource,
        tags: ['button', 'neumorphic', 'soft', 'shadow'],
        previewProps: {
            children: 'Press Me',
            variant: 'pill'
        }
    },
    {
        id: 'thermostat-dial',
        name: 'ThermostatDial',
        description: 'Interactive rotary dial for temperature',
        theme: 'softplastic',
        category: 'interactive',
        component: ThermostatDial,
        source: ThermostatDialSource,
        tags: ['dial', 'thermostat', 'neumorphic', 'control'],
    },
    {
        id: 'device-toggle',
        name: 'DeviceToggle',
        description: 'Toggle switch for smart devices',
        theme: 'softplastic',
        category: 'interactive',
        component: DeviceToggle,
        source: DeviceToggleSource,
        tags: ['toggle', 'switch', 'device', 'control'],
        previewProps: {
            label: 'Lights',
            initialState: true,
            icon: Box
        }
    },
    {
        id: 'neumorphic-slider',
        name: 'NeumorphicSlider',
        description: 'Neumorphic range slider with soft UI shadows',
        theme: 'softplastic',
        category: 'interactive',
        component: NeumorphicSlider,
        source: NeumorphicSliderSource,
        tags: ['slider', 'range', 'neumorphic', 'control'],
        previewProps: { label: 'Brightness', initialValue: 75 },
    },

    // Festival Components
    {
        id: 'festival-card',
        name: 'FestivalCard',
        description: 'Vibrant gradient card for events',
        theme: 'festival',
        category: 'layout',
        component: FestivalCard,
        source: FestivalCardSource,
        tags: ['card', 'festival', 'gradient', 'event'],
        previewProps: {
            children: 'Event Details',
            className: 'p-6',
            gradient: 'from-purple-500 to-pink-500'
        }
    },
    {
        id: 'soundwave-timeline',
        name: 'SoundwaveTimeline',
        description: 'Interactive schedule timeline',
        theme: 'festival',
        category: 'visualization',
        component: SoundwaveTimeline,
        source: SoundwaveTimelineSource,
        tags: ['timeline', 'soundwave', 'schedule', 'festival'],
    },
    {
        id: 'crowd-heatmap',
        name: 'CrowdHeatmap',
        description: 'Heatmap visualization of crowd density',
        theme: 'festival',
        category: 'visualization',
        component: CrowdHeatmap,
        source: CrowdHeatmapSource,
        tags: ['heatmap', 'crowd', 'map', 'festival'],
    },
    {
        id: 'ticket-wallet',
        name: 'TicketWallet',
        description: 'Digital ticket display',
        theme: 'festival',
        category: 'data-display',
        component: TicketWallet,
        source: TicketWalletSource,
        tags: ['ticket', 'wallet', 'pass', 'festival'],
    },
    {
        id: 'festival-button',
        name: 'FestivalButton',
        description: 'Bold button with glowing gradients',
        theme: 'festival',
        category: 'interactive',
        component: FestivalButton,
        source: FestivalButtonSource,
        tags: ['button', 'festival', 'gradient', 'glow'],
        previewProps: {
            children: 'Get Tickets',
            variant: 'primary'
        }
    },
    {
        id: 'artist-card',
        name: 'ArtistCard',
        description: 'Festival artist profile card with set time and favorite toggle',
        theme: 'festival',
        category: 'data-display',
        component: ArtistCard,
        source: ArtistCardSource,
        tags: ['artist', 'festival', 'profile', 'lineup'],
    },

    // Acid Components
    {
        id: 'acid-card',
        name: 'AcidCard',
        description: 'Chaotic card with brutalist elements',
        theme: 'acid',
        category: 'layout',
        component: AcidCard,
        source: AcidCardSource,
        tags: ['card', 'acid', 'chaotic', 'brutalist'],
        previewProps: {
            children: 'ACID CONTENT',
            rotate: 2,
            color: 'bg-yellow-400'
        }
    },
    {
        id: 'glitch-text',
        name: 'GlitchText',
        description: 'Text with glitch animation effects',
        theme: 'acid',
        category: 'data-display',
        component: GlitchText,
        source: GlitchTextSource,
        tags: ['text', 'glitch', 'animation', 'acid'],
        previewProps: {
            text: 'ERROR'
        }
    },
    {
        id: 'sticker',
        name: 'Sticker',
        description: 'Decorative sticker element',
        theme: 'acid',
        category: 'data-display',
        component: Sticker,
        source: StickerSource,
        tags: ['sticker', 'decoration', 'acid', 'fun'],
        previewProps: {
            children: 'NEW!'
        }
    },
    {
        id: 'marquee',
        name: 'Marquee',
        description: 'Scrolling text banner',
        theme: 'acid',
        category: 'navigation',
        component: Marquee,
        source: MarqueeSource,
        tags: ['marquee', 'scroll', 'banner', 'acid'],
        previewProps: {
            text: 'BREAKING NEWS'
        }
    },
    {
        id: 'acid-button',
        name: 'AcidButton',
        description: 'High energy button with hover effects',
        theme: 'acid',
        category: 'interactive',
        component: AcidButton,
        source: AcidButtonSource,
        tags: ['button', 'acid', 'energy', 'interactive'],
        previewProps: {
            children: 'CLICK ME',
            variant: 'black'
        }
    },
    {
        id: 'chroma-shift',
        name: 'ChromaShift',
        description: 'RGB chromatic aberration text effect with animation',
        theme: 'acid',
        category: 'visualization',
        component: ChromaShift,
        source: ChromaShiftSource,
        tags: ['glitch', 'chromatic', 'text', 'effect'],
        previewProps: { text: 'CHROMATIC' },
    },

    // Claymorphism Components
    {
        id: 'clay-card',
        name: 'ClayCard',
        description: 'Soft 3D card with clay-like appearance',
        theme: 'clay',
        category: 'layout',
        component: ClayCard,
        source: ClayCardSource,
        tags: ['card', 'clay', '3d', 'soft'],
        previewProps: {
            children: 'Clay Content',
            className: 'p-6'
        }
    },
    {
        id: 'clay-button',
        name: 'ClayButton',
        description: 'Soft 3D button that depresses when clicked',
        theme: 'clay',
        category: 'interactive',
        component: ClayButton,
        source: ClayButtonSource,
        tags: ['button', 'clay', '3d', 'soft'],
        previewProps: {
            children: 'Press',
            variant: 'primary'
        }
    },
    {
        id: 'clay-toggle',
        name: 'ClayToggle',
        description: 'Soft 3D toggle switch',
        theme: 'clay',
        category: 'interactive',
        component: ClayToggle,
        source: ClayToggleSource,
        tags: ['toggle', 'clay', '3d', 'switch'],
        previewProps: {
            checked: true
        }
    },
    {
        id: 'clay-progress',
        name: 'ClayProgress',
        description: 'Soft 3D progress bar with color variants',
        theme: 'clay',
        category: 'feedback',
        component: ClayProgress,
        source: ClayProgressSource,
        tags: ['progress', 'clay', '3d', 'bar'],
        previewProps: { value: 65, label: 'Progress', color: 'blue' },
    },

    // Blueprint Components
    {
        id: 'blueprint-card',
        name: 'BlueprintCard',
        description: 'Technical drawing card style',
        theme: 'blueprint',
        category: 'layout',
        component: BlueprintCard,
        source: BlueprintCardSource,
        tags: ['card', 'blueprint', 'technical', 'drawing'],
        previewProps: {
            title: 'Schematic',
            code: 'A-01',
            children: 'Diagram content'
        }
    },
    {
        id: 'cad-viewer',
        name: 'CadViewer',
        description: 'Interactive CAD-like viewer',
        theme: 'blueprint',
        category: 'visualization',
        component: CadViewer,
        source: CadViewerSource,
        tags: ['cad', 'viewer', 'blueprint', 'technical'],
        previewProps: {
            activeLayers: { 'Structure': true, 'Furniture': true }
        }
    },
    {
        id: 'layer-control',
        name: 'LayerControl',
        description: 'Layer visibility toggle panel',
        theme: 'blueprint',
        category: 'interactive',
        component: LayerControl,
        source: LayerControlSource,
        tags: ['layers', 'controls', 'blueprint', 'panel'],
        previewProps: {
            layers: { 'Layer 1': true, 'Layer 2': false },
            toggleLayer: () => { }
        }
    },
    {
        id: 'measurement-label',
        name: 'MeasurementLabel',
        description: 'Technical dimension label for blueprints',
        theme: 'blueprint',
        category: 'data-display',
        component: MeasurementLabel,
        source: MeasurementLabelSource,
        tags: ['measurement', 'dimension', 'blueprint', 'technical'],
        previewProps: {
            value: '2.5m',
            orientation: 'horizontal'
        }
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
