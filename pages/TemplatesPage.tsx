import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { themes, type Theme } from '@/data/themes'

type CategoryFilter = 'all' | Theme['category']

const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'dark', label: 'Dark' },
    { id: 'light', label: 'Light' },
    { id: 'colorful', label: 'Colorful' },
]

export default function TemplatesPage() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')

    const filteredThemes = useMemo(() => {
        if (activeCategory === 'all') return themes
        return themes.filter((theme) => theme.category === activeCategory)
    }, [activeCategory])

    const getCounts = () => ({
        all: themes.length,
        dark: themes.filter((t) => t.category === 'dark').length,
        light: themes.filter((t) => t.category === 'light').length,
        colorful: themes.filter((t) => t.category === 'colorful').length,
    })

    const counts = getCounts()

    return (
        <div className="relative z-10 mx-auto max-w-7xl px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Template Gallery</h1>
                <p className="text-lg text-zinc-400 max-w-2xl">
                    Explore all 28 design themes. Each template is a complete dashboard showcasing
                    how components work together in context.
                </p>
            </motion.div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-2 ${activeCategory === category.id
                                ? 'bg-white text-zinc-950'
                                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                            }`}
                    >
                        {category.label}
                        <span
                            className={`text-xs ${activeCategory === category.id ? 'text-zinc-500' : 'text-zinc-600'
                                }`}
                        >
                            {counts[category.id]}
                        </span>
                    </button>
                ))}
            </div>

            {/* Theme Grid */}
            <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {filteredThemes.map((theme, index) => (
                    <motion.div
                        key={theme.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.03 }}
                    >
                        <Link
                            to={`/templates/${theme.id}`}
                            className="group block rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-600 transition-all hover:scale-[1.01]"
                        >
                            {/* Preview Area */}
                            <div className={`aspect-video ${theme.backgroundColor} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`h-12 w-12 rounded-xl ${theme.colorClass} shadow-lg`} />
                                </div>
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`h-3 w-3 rounded-full ${theme.colorClass}`} />
                                    <h3 className="font-semibold text-white text-lg">{theme.name}</h3>
                                    <span
                                        className={`ml-auto px-2 py-0.5 text-xs rounded-full ${theme.category === 'dark'
                                                ? 'bg-zinc-800 text-zinc-300'
                                                : theme.category === 'light'
                                                    ? 'bg-zinc-700 text-zinc-200'
                                                    : 'bg-fuchsia-900/50 text-fuchsia-300'
                                            }`}
                                    >
                                        {theme.category}
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-400 mb-3">{theme.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {theme.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-xs bg-zinc-800/50 text-zinc-500 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Empty State */}
            {filteredThemes.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-zinc-500">No themes found in this category.</p>
                </div>
            )}
        </div>
    )
}
