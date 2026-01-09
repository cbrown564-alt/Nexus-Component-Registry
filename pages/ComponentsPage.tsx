import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import {
    components,
    allThemes,
    allCategories,
    type ComponentCategory,
} from '@/data/components'

type ThemeFilter = typeof allThemes[number] | 'all'
type CategoryFilter = ComponentCategory | 'all'

export default function ComponentsPage() {
    const [themeFilter, setThemeFilter] = useState<ThemeFilter>('all')
    const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredComponents = useMemo(() => {
        return components.filter((comp) => {
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
    }, [themeFilter, categoryFilter, searchQuery])

    const getCategoryColor = (category: ComponentCategory) => {
        const colors: Record<ComponentCategory, string> = {
            layout: 'bg-blue-500/20 text-blue-400',
            'data-display': 'bg-emerald-500/20 text-emerald-400',
            forms: 'bg-purple-500/20 text-purple-400',
            navigation: 'bg-cyan-500/20 text-cyan-400',
            feedback: 'bg-amber-500/20 text-amber-400',
            interactive: 'bg-rose-500/20 text-rose-400',
            visualization: 'bg-indigo-500/20 text-indigo-400',
        }
        return colors[category]
    }

    const getThemeColor = (theme: string) => {
        const colors: Record<string, string> = {
            shared: 'bg-zinc-600',
            fintech: 'bg-emerald-500',
            cockpit: 'bg-blue-600',
            game: 'bg-fuchsia-500',
            legacy: 'bg-teal-600',
        }
        return colors[theme] || 'bg-zinc-600'
    }

    return (
        <div className="relative z-10 mx-auto max-w-7xl px-8 py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Component Gallery</h1>
                <p className="text-lg text-zinc-400 max-w-2xl">
                    Browse {components.length} components across {allThemes.length} themes.
                    Each component is production-ready with multiple variants and states.
                </p>
            </motion.div>

            {/* Filters */}
            <div className="flex flex-col gap-4 mb-8">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search components..."
                        className="w-full max-w-md pl-10 pr-4 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 outline-none focus:border-zinc-700 transition-colors"
                    />
                </div>

                {/* Theme Filter */}
                <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-zinc-500 mr-2 self-center">Theme:</span>
                    <button
                        onClick={() => setThemeFilter('all')}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${themeFilter === 'all'
                            ? 'bg-white text-zinc-950'
                            : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                            }`}
                    >
                        All ({components.length})
                    </button>
                    {allThemes.map((theme) => {
                        const count = components.filter((c) => c.theme === theme).length
                        return (
                            <button
                                key={theme}
                                onClick={() => setThemeFilter(theme)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${themeFilter === theme
                                        ? 'bg-white text-zinc-950'
                                        : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                    }`}
                            >
                                <span className={`h-2 w-2 rounded-full ${getThemeColor(theme)}`} />
                                {theme.charAt(0).toUpperCase() + theme.slice(1)} ({count})
                            </button>
                        )
                    })}
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-zinc-500 mr-2 self-center">Category:</span>
                    <button
                        onClick={() => setCategoryFilter('all')}
                        className={`px - 3 py - 1.5 text - sm font - medium rounded - lg transition - colors ${categoryFilter === 'all'
                                ? 'bg-white text-zinc-950'
                                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                            }`}
                    >
                        All
                    </button>
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setCategoryFilter(category)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${categoryFilter === category
                                ? 'bg-white text-zinc-950'
                                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                }`}
                        >
                            {category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-6 text-sm text-zinc-500">
                Showing {filteredComponents.length} of {components.length} components
            </div>

            {/* Component Grid */}
            <motion.div
                key={`${themeFilter}-${categoryFilter}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {filteredComponents.map((comp, index) => (
                    <motion.div
                        key={comp.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                    >
                        <Link
                            to={`/components/${comp.theme}/${comp.id}`}
                            className="group block rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-600 transition-all"
                        >
                            {/* Preview Area */}
                            <div className="h-32 bg-zinc-950 flex items-center justify-center border-b border-zinc-800 relative overflow-hidden">
                                <div className="text-4xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
                                    {'</>'}
                                </div>
                                {/* Theme indicator */}
                                <div className={`absolute top-3 right-3 h-2 w-2 rounded-full ${getThemeColor(comp.theme)}`} />
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-semibold text-white group-hover:text-zinc-100 transition-colors">
                                        {comp.name}
                                    </h3>
                                    <span className={`px-1.5 py-0.5 text-[10px] rounded ${getCategoryColor(comp.category)}`}>
                                        {comp.category}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-500 mb-3 line-clamp-2">{comp.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className={`h-2 w-2 rounded-full ${getThemeColor(comp.theme)}`} />
                                    <span className="text-xs text-zinc-600">{comp.theme}</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Empty State */}
            {
                filteredComponents.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-zinc-500 mb-2">No components found</p>
                        <button
                            onClick={() => {
                                setThemeFilter('all')
                                setCategoryFilter('all')
                                setSearchQuery('')
                            }}
                            className="text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            Clear filters
                        </button>
                    </div>
                )
            }
        </div >
    )
}
