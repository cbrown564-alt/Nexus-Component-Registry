import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Box, Palette, Github, CheckCircle2, ArrowRight } from 'lucide-react'
import { featuredThemes, getThemeById } from '@/data/themes'
import ThemePreview from '@/components/ui/ThemePreview'

const stats = [
    { label: 'Design Themes', value: '28' },
    { label: 'Components', value: '120+' },
    { label: 'Hooks', value: '8' },
]

const features = [
    {
        icon: Palette,
        title: '28 Design Themes',
        description: 'From brutalist to futuristic, find the perfect aesthetic for your project.',
    },
    {
        icon: Box,
        title: '120+ Components',
        description: 'Production-ready components with multiple variants and states.',
    },
    {
        icon: CheckCircle2,
        title: 'Production Ready',
        description: 'Battle-tested components built with React, TypeScript, and Tailwind.',
    },
    {
        icon: Github,
        title: 'Open Source',
        description: 'Free to use, modify, and distribute. MIT licensed.',
    },
]

export default function HomePage() {
    return (
        <div className="relative z-10 mx-auto max-w-7xl px-8 py-16">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-24"
            >
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-1.5 mb-6">
                    {stats.map((stat, i) => (
                        <span key={stat.label} className="flex items-center gap-1.5 text-sm">
                            <span className="font-semibold text-white">{stat.value}</span>
                            <span className="text-zinc-400">{stat.label}</span>
                            {i < stats.length - 1 && <span className="text-zinc-600 ml-2">•</span>}
                        </span>
                    ))}
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                    28 Design Systems.
                    <br />
                    One Registry.
                </h1>

                <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                    Explore a curated collection of React components across 28 unique design themes.
                    Find inspiration, copy code, ship faster.
                </p>

                <div className="flex justify-center gap-4">
                    <Link
                        to="/components"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-zinc-950 px-6 py-3 font-semibold hover:bg-zinc-200 transition-colors"
                    >
                        Browse Components
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        to="/templates"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
                    >
                        Explore Themes
                    </Link>
                </div>
            </motion.section>

            {/* Theme Preview Grid */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-24"
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">Featured Themes</h2>
                    <Link to="/templates" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                        View all 28 themes <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {featuredThemes.map((themeId, index) => {
                        const theme = getThemeById(themeId)
                        if (!theme) return null

                        return (
                            <motion.div
                                key={theme.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link
                                    to={`/templates/${theme.id}`}
                                    className="group block rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-700 transition-all hover:scale-[1.02]"
                                >
                                    <div className="aspect-video relative overflow-hidden">
                                        <ThemePreview theme={theme} className="absolute inset-0" />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className={`h-2 w-2 rounded-full ${theme.colorClass}`} />
                                            <span className="font-medium text-white group-hover:text-zinc-100">{theme.name}</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 line-clamp-1">{theme.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.section>

            {/* Features Grid */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-2xl font-bold text-white text-center mb-12">Why Nexus?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 mb-4">
                                <feature.icon className="h-5 w-5 text-zinc-400" />
                            </div>
                            <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-zinc-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    )
}
