import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Box, Layers, Sparkles, Puzzle } from 'lucide-react'
import { getThemeById } from '@/data/themes'
import { getAllTemplateComponents } from '@/data/templateComponents'
import { type ComponentMeta, type ComponentCategory } from '@/data/components'
import { useTheme } from '@/context/ThemeContext'

/**
 * Extract CSS color value from Tailwind bg class
 * e.g., 'bg-[#F5F5F5]' -> '#F5F5F5'
 *       'bg-zinc-950' -> undefined (let Tailwind handle it)
 */
function extractBackgroundColor(bgClass: string): string | undefined {
    // Handle arbitrary values like bg-[#F5F5F5]
    const arbitraryMatch = bgClass.match(/bg-\[([^\]]+)\]/)
    if (arbitraryMatch) {
        return arbitraryMatch[1]
    }
    // For Tailwind color classes, we'll use a mapping for common ones
    const tailwindColors: Record<string, string> = {
        'bg-zinc-950': '#09090b',
        'bg-zinc-900': '#18181b',
        'bg-white': '#ffffff',
        'bg-black': '#000000',
        'bg-slate-50': '#f8fafc',
        'bg-slate-950': '#020617',
    }
    return tailwindColors[bgClass]
}

interface ComponentCardProps {
    comp: ComponentMeta
    index: number
    isLight: boolean
    themeBackgroundColor: string
    isSharedComponent?: boolean
}

function ComponentCard({ comp, index, isLight, themeBackgroundColor, isSharedComponent = false }: ComponentCardProps) {
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

    const PreviewComponent = comp.component

    return (
        <motion.div
            key={comp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
        >
            <Link
                to={`/components/${comp.theme}/${comp.id}`}
                className={`group block rounded-xl border overflow-hidden transition-all ${isLight
                        ? 'bg-white border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md'
                        : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-600'
                    }`}
            >
                {/* Live Preview Area */}
                {/* For template components: use actual template background for accurate preview */}
                {/* For shared components: use dark background (their native context) */}
                <div 
                    className={`h-40 flex items-center justify-center border-b relative overflow-hidden p-4 ${
                        isSharedComponent 
                            ? 'bg-zinc-950 border-zinc-800' 
                            : isLight 
                                ? 'border-zinc-200' 
                                : 'border-zinc-800'
                    }`}
                    style={!isSharedComponent ? { backgroundColor: extractBackgroundColor(themeBackgroundColor) } : undefined}
                >
                    <div className="transform scale-75 origin-center pointer-events-none">
                        <PreviewComponent {...(comp.previewProps || {})} />
                    </div>
                    {/* Hover overlay to emphasize clickability */}
                    <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${isLight ? 'from-zinc-200' : 'from-zinc-950'
                        }`} />
                </div>

                {/* Info */}
                <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className={`font-semibold transition-colors ${isLight ? 'text-zinc-900 group-hover:text-zinc-700' : 'text-white group-hover:text-zinc-100'
                            }`}>
                            {comp.name}
                        </h3>
                        <span className={`px-1.5 py-0.5 text-[10px] rounded ${getCategoryColor(comp.category)}`}>
                            {comp.category}
                        </span>
                    </div>
                    <p className="text-sm text-zinc-500 line-clamp-2">{comp.description}</p>
                </div>
            </Link>
        </motion.div>
    )
}

interface ComponentSectionProps {
    title: string
    description: string
    icon: React.ReactNode
    components: ComponentMeta[]
    startIndex: number
    accentColor?: string
    isLight: boolean
    themeBackgroundColor: string
    isSharedSection?: boolean
}

function ComponentSection({ 
    title, 
    description, 
    icon, 
    components, 
    startIndex, 
    accentColor = 'text-zinc-400', 
    isLight,
    themeBackgroundColor,
    isSharedSection = false
}: ComponentSectionProps) {
    if (components.length === 0) return null

    return (
        <section className="mb-12">
            <div className="flex items-center gap-3 mb-2">
                <div className={accentColor}>{icon}</div>
                <h2 className={`text-xl font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>{title}</h2>
                <span className={`px-2 py-0.5 text-xs rounded-full ${isLight ? 'bg-zinc-200 text-zinc-600' : 'bg-zinc-800 text-zinc-400'}`}>
                    {components.length}
                </span>
            </div>
            <p className="text-sm text-zinc-500 mb-6 ml-9">{description}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {components.map((comp, i) => (
                    <ComponentCard 
                        key={comp.id} 
                        comp={comp} 
                        index={startIndex + i} 
                        isLight={isLight} 
                        themeBackgroundColor={themeBackgroundColor}
                        isSharedComponent={isSharedSection}
                    />
                ))}
            </div>
        </section>
    )
}

export default function TemplateComponentsPage() {
    const { id } = useParams<{ id: string }>()
    const { setTheme } = useTheme()

    const theme = id ? getThemeById(id) : undefined
    const templateComponents = id ? getAllTemplateComponents(id) : null

    // Set the theme when viewing template components (keeps us in template mode)
    useEffect(() => {
        if (id) {
            setTheme(id)
        }
    }, [id, setTheme])

    if (!theme || !templateComponents) {
        return <Navigate to="/templates" replace />
    }

    const totalComponents =
        templateComponents.used.length +
        templateComponents.extended.length +
        templateComponents.shared.length

    const isLight = theme.category === 'light'

    return (
        <div className={`relative z-10 min-h-screen ${isLight ? 'bg-zinc-50' : 'bg-zinc-950'}`}>
            {/* Floating Navigation Bar */}
            <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
                <div className="flex items-center gap-4">
                    <Link
                        to={`/templates/${id}`}
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Template
                    </Link>
                    <div className="h-4 w-px bg-zinc-800" />
                    <div className="flex items-center gap-2">
                        <div className={`h-3 w-3 rounded-full ${theme.colorClass}`} />
                        <span className="font-medium text-white">{theme.name}</span>
                        <span className="text-zinc-500">·</span>
                        <span className="text-zinc-400 text-sm">Component Library</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        to="/components"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        <Box className="h-4 w-4" />
                        All Components
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-7xl px-8 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-12"
                >
                    <h1 className={`text-4xl font-bold mb-4 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                        {theme.name} Components
                    </h1>
                    <p className={`text-lg max-w-2xl ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Explore {totalComponents} components that power and complement this template.
                        Each component is designed to work seamlessly with the {theme.name} visual style.
                    </p>
                </motion.div>

                {/* Used Components Section */}
                <ComponentSection
                    title="In This Template"
                    description="Components actively used in the template layout. These form the foundation of this design system."
                    icon={<Layers className="h-5 w-5" />}
                    components={templateComponents.used}
                    startIndex={0}
                    accentColor="text-emerald-400"
                    isLight={isLight}
                    themeBackgroundColor={theme.backgroundColor}
                />

                {/* Extended Components Section */}
                <ComponentSection
                    title="Extended Collection"
                    description="Additional theme components that complement the design. Use these to expand the template's capabilities."
                    icon={<Puzzle className="h-5 w-5" />}
                    components={templateComponents.extended}
                    startIndex={templateComponents.used.length}
                    accentColor="text-blue-400"
                    isLight={isLight}
                    themeBackgroundColor={theme.backgroundColor}
                />

                {/* Shared Components Section */}
                <ComponentSection
                    title="Compatible Shared Components"
                    description="Universal components curated to pair well with this theme's aesthetic. Shown on dark background (their native context)."
                    icon={<Sparkles className="h-5 w-5" />}
                    components={templateComponents.shared}
                    startIndex={templateComponents.used.length + templateComponents.extended.length}
                    accentColor="text-amber-400"
                    isLight={isLight}
                    themeBackgroundColor={theme.backgroundColor}
                    isSharedSection={true}
                />

                {/* Empty State */}
                {totalComponents === 0 && (
                    <div className="text-center py-16">
                        <p className="text-zinc-500 mb-2">No documented components for this template yet.</p>
                        <Link
                            to="/components"
                            className="text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            Browse all components
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
