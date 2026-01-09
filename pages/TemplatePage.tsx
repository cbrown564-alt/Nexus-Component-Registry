import type { ComponentType } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Box, ExternalLink } from 'lucide-react'
import { useEffect } from 'react'
import { getThemeById } from '@/data/themes'
import { useTheme } from '@/context/ThemeContext'

// Import all dashboards
import EngineeringDashboard from '@/templates/EngineeringDashboard'
import WellnessDashboard from '@/templates/WellnessDashboard'
import EducationDashboard from '@/templates/EducationDashboard'
import SaasDashboard from '@/templates/SaasDashboard'
import MagazineDashboard from '@/templates/MagazineDashboard'
import EcommerceDashboard from '@/templates/EcommerceDashboard'
import SocialDashboard from '@/templates/SocialDashboard'
import FintechDashboard from '@/templates/FintechDashboard'
import ProductivityDashboard from '@/templates/ProductivityDashboard'
import GameDashboard from '@/templates/GameDashboard'
import MusicDashboard from '@/templates/MusicDashboard'
import FoodDashboard from '@/templates/FoodDashboard'
import GridDashboard from '@/templates/GridDashboard'
import BrutalistDashboard from '@/templates/BrutalistDashboard'
import KitchenDashboard from '@/templates/KitchenDashboard'
import KidsDashboard from '@/templates/KidsDashboard'
import SciFiDashboard from '@/templates/SciFiDashboard'
import EInkDashboard from '@/templates/EInkDashboard'
import SolarpunkDashboard from '@/templates/SolarpunkDashboard'
import LegalDashboard from '@/templates/LegalDashboard'
import SoftPlasticDashboard from '@/templates/SoftPlasticDashboard'
import FestivalDashboard from '@/templates/FestivalDashboard'
import AcidDashboard from '@/templates/AcidDashboard'
import LegacyOSDashboard from '@/templates/LegacyOSDashboard'
import CockpitDashboard from '@/templates/CockpitDashboard'
import ClaymorphismDashboard from '@/templates/ClaymorphismDashboard'
import BlueprintDashboard from '@/templates/BlueprintDashboard'
import SwissDashboard from '@/templates/SwissDashboard'

const dashboardComponents: Record<string, ComponentType> = {
    engineering: EngineeringDashboard,
    wellness: WellnessDashboard,
    education: EducationDashboard,
    saas: SaasDashboard,
    magazine: MagazineDashboard,
    ecommerce: EcommerceDashboard,
    social: SocialDashboard,
    fintech: FintechDashboard,
    productivity: ProductivityDashboard,
    game: GameDashboard,
    music: MusicDashboard,
    food: FoodDashboard,
    grid: GridDashboard,
    brutalist: BrutalistDashboard,
    kitchen: KitchenDashboard,
    kids: KidsDashboard,
    scifi: SciFiDashboard,
    eink: EInkDashboard,
    solarpunk: SolarpunkDashboard,
    legal: LegalDashboard,
    softplastic: SoftPlasticDashboard,
    festival: FestivalDashboard,
    acid: AcidDashboard,
    legacy: LegacyOSDashboard,
    cockpit: CockpitDashboard,
    clay: ClaymorphismDashboard,
    blueprint: BlueprintDashboard,
    swiss: SwissDashboard,
}

export default function TemplatePage() {
    const { id } = useParams<{ id: string }>()
    const { setTheme } = useTheme()

    const theme = id ? getThemeById(id) : undefined
    const DashboardComponent = id ? dashboardComponents[id] : undefined

    // Update the global theme when viewing a template
    useEffect(() => {
        if (id) {
            setTheme(id)
        }
    }, [id, setTheme])

    if (!theme || !DashboardComponent) {
        return <Navigate to="/templates" replace />
    }

    return (
        <div className="relative z-10">
            {/* Floating Navigation Bar */}
            <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
                <div className="flex items-center gap-4">
                    <Link
                        to="/templates"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Gallery
                    </Link>
                    <div className="h-4 w-px bg-zinc-800" />
                    <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${theme.colorClass}`} />
                        <span className="font-medium text-white">{theme.name}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        to={`/components?theme=${theme.id}`}
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        <Box className="h-4 w-4" />
                        View Components
                    </Link>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white text-zinc-950 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Open Fullscreen
                    </button>
                </div>
            </div>

            {/* Dashboard Content */}
            <DashboardComponent />
        </div>
    )
}
