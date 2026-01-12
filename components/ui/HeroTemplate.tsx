import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Info } from 'lucide-react'
import { LegacyTheme as Theme } from '@/lib/registry'
import TemplatePreview from './TemplatePreview'
import { useTheme } from '@/context/ThemeContext'

interface HeroTemplateProps {
    theme: Theme
}

export default function HeroTemplate({ theme: templateTheme }: HeroTemplateProps) {
    const { theme } = useTheme()

    return (
        <div
            className="relative h-[70vh] w-full overflow-hidden mb-8 group"
            style={{ backgroundColor: theme.colors.background }}
        >
            {/* Background Image (blurred/dimmed) */}
            <div className="absolute inset-0 top-20">
                <TemplatePreview
                    theme={templateTheme}
                    className="w-full h-full origin-top object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-linear"
                />
            </div>
            {/* Vignette Gradients - Using theme background to fade out */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to top, ${theme.colors.background} 0%, ${theme.colors.background}40 60%, transparent 100%)`
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to right, ${theme.colors.background}E6 0%, transparent 100%)`
                }}
            />

            {/* Content Content */}
            <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-24 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span
                            className="px-2 py-1 backdrop-blur-sm border rounded text-[10px] font-bold uppercase tracking-wider"
                            style={{
                                backgroundColor: `${theme.colors.background}1A`, // 10% opacity
                                borderColor: `${theme.colors.foreground}33`,
                                color: theme.colors.foreground
                            }}
                        >
                            Featured Template
                        </span>
                        <span
                            className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-opacity-80`}
                            // Keeping the templateTheme specific color/category style, but ensuring text is readable
                            // The original had `text-white`. We might want to keep it white if the badge color is dark.
                            // Assuming templateTheme.colorClass provides a background color.
                            style={{ color: '#ffffff' }}
                        >
                            {/* We append the colorClass from the template which sets background */}
                            <span className={templateTheme.colorClass}>{templateTheme.category}</span>
                        </span>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                        style={{ color: theme.colors.foreground }}
                    >
                        {templateTheme.name}
                    </h1>

                    <p
                        className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl line-clamp-3"
                        style={{ color: theme.colors.mutedForeground }}
                    >
                        {templateTheme.description}
                    </p>

                    <div className="flex gap-4">
                        <Link
                            to={`/templates/${templateTheme.id}`}
                            className="px-8 py-3 font-bold rounded-lg transition-colors flex items-center gap-2"
                            style={{
                                backgroundColor: theme.colors.foreground,
                                color: theme.colors.background
                            }}
                        >
                            <Play className="w-5 h-5 fill-current" />
                            View Template
                        </Link>
                        <button
                            className="px-8 py-3 font-bold rounded-lg transition-colors backdrop-blur-sm flex items-center gap-2"
                            style={{
                                backgroundColor: `${theme.colors.foreground}1A`, // 10%
                                color: theme.colors.foreground,
                            }}
                        >
                            <Info className="w-5 h-5" />
                            More Info
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
