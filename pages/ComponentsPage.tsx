import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import {
    Search,
    SlidersHorizontal,
    ArrowUpDown,
    TerminalSquare,
    Building2,
    LineChart,
    CheckCircle2,
    PenTool,
    Scale,
    Stethoscope,
    Plane,
    Bell,
    Heart,
    GraduationCap,
    Newspaper,
    ShoppingBag,
    MessageCircle,
    Music,
    Smile,
    Home,
    Utensils,
    ChefHat,
    BookOpen,
    Sun,
    Box,
    Circle,
    Map,
    Sprout,
    Gamepad,
    Grid,
    Cpu,
    Gauge,
    Speaker,
    Trophy,
    Square,
    Zap,
    Save,
    LayoutGrid,
    Lock,
    AlertTriangle,
    Sparkles,
    Terminal
} from 'lucide-react'
import LiveComponentCard from '@/components/ui/LiveComponentCard'
import {
    components,
    allThemes,
    allCategories,
    type ComponentCategory,
} from '@/data/components'
import { visualLanguages, getTemplateById, VisualLanguageId } from '@/lib/registry'

type ThemeFilter = typeof allThemes[number] | 'all'
type CategoryFilter = ComponentCategory | 'all'
type VisualLanguageFilter = VisualLanguageId | 'all'

export default function ComponentsPage() {
    const [visualLanguageFilter, setVisualLanguageFilter] = useState<VisualLanguageFilter>('all')
    const [themeFilter, setThemeFilter] = useState<ThemeFilter>('all')
    const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredComponents = useMemo(() => {
        return components.filter((comp) => {
            // Visual Language filter
            if (visualLanguageFilter !== 'all') {
                const template = getTemplateById(comp.theme)
                if (!template || template.visualLanguageId !== visualLanguageFilter) return false
            }
            // Theme filter
            if (themeFilter !== 'all' && comp.theme !== themeFilter) return false
            // Category filter
            if (categoryFilter !== 'all' && comp.category !== categoryFilter) return false
            // Search
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase()
                return (
                    comp.name.toLowerCase().includes(query) ||
                    comp.description.toLowerCase().includes(query) ||
                    comp.tags.some((tag) => tag.toLowerCase().includes(query))
                )
            }
            return true
        })
    }, [visualLanguageFilter, themeFilter, categoryFilter, searchQuery])

    const getThemeColor = (themeId: string) => {
        const template = getTemplateById(themeId)
        // Extract just the color class part if needed, assuming valid Tailwind classes
        // Fallback to grey if not found
        return template?.colorClass || 'bg-zinc-600'
    }

    const getThemeIcon = (themeId: string) => {
        const icons: Record<string, typeof TerminalSquare> = {
            // Professional
            engineering: TerminalSquare,
            saas: Building2,
            fintech: LineChart,
            productivity: CheckCircle2,
            blueprint: PenTool,
            legal: Scale,
            clinic: Stethoscope,
            departure: Plane,
            concierge: Bell,
            terminal: Terminal,

            // Consumer
            wellness: Heart,
            education: GraduationCap,
            magazine: Newspaper,
            ecommerce: ShoppingBag,
            social: MessageCircle,
            music: Music,
            kids: Smile,
            estate: Home,

            // Organic
            food: Utensils,
            kitchen: ChefHat,
            eink: BookOpen,
            solarpunk: Sun,
            softplastic: Box,
            clay: Circle,
            nomad: Map,
            evergreen: Sprout,

            // Cyberpunk
            game: Gamepad,
            grid: Grid,
            scifi: Cpu,
            cockpit: Gauge,
            festival: Speaker,
            arena: Trophy,

            // Brutalist
            brutalist: Square,
            acid: Zap,
            legacy: Save,
            swiss: LayoutGrid,
            vault: Lock, // Or LockKeyhole
            paradox: AlertTriangle,
        }
        return icons[themeId] || Circle
    }

    return (
        <div className="relative z-10 mx-auto max-w-[1600px] px-8 py-12">

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto no-scrollbar">
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Filter components..."
                                className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 outline-none focus:border-zinc-700 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Browse by Style (Visual Language -> Themes) */}
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">Browse by Style</h3>
                        <div className="space-y-4">
                            <button
                                onClick={() => {
                                    setVisualLanguageFilter('all')
                                    setThemeFilter('all')
                                }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group ${visualLanguageFilter === 'all'
                                    ? 'bg-white text-zinc-950 font-medium'
                                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                                    }`}
                            >
                                <span>All Styles</span>
                            </button>

                            {visualLanguages.map((lang) => {
                                const isLangActive = visualLanguageFilter === lang.id
                                const langTemplates = components.reduce((acc, comp) => {
                                    const t = getTemplateById(comp.theme)
                                    if (t && t.visualLanguageId === lang.id && !acc.includes(t.id)) {
                                        acc.push(t.id)
                                    }
                                    return acc
                                }, [] as string[])

                                // Only show languages that have components
                                if (langTemplates.length === 0) return null

                                return (
                                    <div key={lang.id} className="space-y-1">
                                        <button
                                            onClick={() => {
                                                setVisualLanguageFilter(lang.id)
                                                setThemeFilter('all')
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group ${isLangActive
                                                ? 'bg-zinc-800 text-white font-medium shadow-sm border border-zinc-700'
                                                : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                                                }`}
                                        >
                                            <span>{lang.name}</span>
                                            {isLangActive && <span className="text-xs text-zinc-500">Active</span>}
                                        </button>

                                        {/* Nested Themes */}
                                        {isLangActive && (
                                            <div className="pl-4 space-y-1 border-l border-zinc-800 ml-3">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        setVisualLanguageFilter(lang.id)
                                                        setThemeFilter('all')
                                                    }}
                                                    className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between group ${themeFilter === 'all'
                                                        ? 'text-white font-medium bg-zinc-800/50'
                                                        : 'text-zinc-500 hover:text-zinc-300'
                                                        }`}
                                                >
                                                    <span>All {lang.name.split(' ')[0]}</span>
                                                </button>
                                                {langTemplates.map((themeId) => {
                                                    const template = getTemplateById(themeId)
                                                    if (!template) return null
                                                    const count = components.filter((c) => c.theme === themeId).length
                                                    const isThemeActive = themeFilter === themeId

                                                    const Icon = getThemeIcon(themeId)

                                                    return (
                                                        <button
                                                            key={themeId}
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setThemeFilter(themeId as ThemeFilter)
                                                            }}
                                                            className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between group ${isThemeActive
                                                                ? 'text-white font-medium bg-zinc-800/50'
                                                                : 'text-zinc-500 hover:text-zinc-300'
                                                                }`}
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-1.5 h-1.5 rounded-full ${getThemeColor(themeId)}`} />
                                                                <Icon className="w-3.5 h-3.5 opacity-70" />
                                                                <span>{template.name}</span>
                                                            </div>
                                                            <span className="text-zinc-600">{count}</span>
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">Categories</h3>
                        <div className="space-y-1">
                            <button
                                onClick={() => setCategoryFilter('all')}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group ${categoryFilter === 'all'
                                    ? 'bg-white text-zinc-950 font-medium'
                                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                                    }`}
                            >
                                <span>All Categories</span>
                            </button>
                            {allCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setCategoryFilter(category)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group ${categoryFilter === category
                                        ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                                        : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                                        }`}
                                >
                                    <span className="capitalize">{category.replace('-', ' ')}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Component Vault</h1>
                            <p className="text-zinc-400">
                                {filteredComponents.length} result{filteredComponents.length !== 1 ? 's' : ''} found
                                {themeFilter !== 'all' && <span className="text-zinc-500"> in <span className="text-zinc-300 capitalize">{themeFilter}</span></span>}
                                {categoryFilter !== 'all' && <span className="text-zinc-500"> type <span className="text-zinc-300 capitalize">{categoryFilter}</span></span>}
                            </p>
                        </div>

                        {/* Sort/Actions could go here */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredComponents.map((comp, index) => (
                            <motion.div
                                key={comp.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.02 }}
                            >
                                <LiveComponentCard component={comp} />
                            </motion.div>
                        ))}
                    </div>

                    {filteredComponents.length === 0 && (
                        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-xl">
                            <h3 className="text-zinc-300 font-medium mb-2">No components found</h3>
                            <button
                                onClick={() => {
                                    setVisualLanguageFilter('all')
                                    setThemeFilter('all')
                                    setCategoryFilter('all')
                                    setSearchQuery('')
                                }}
                                className="text-sm text-zinc-500 hover:text-white transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
