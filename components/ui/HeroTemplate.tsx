import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Info } from 'lucide-react'
import { Theme } from '@/data/themes'
import TemplatePreview from './TemplatePreview'

interface HeroTemplateProps {
    theme: Theme
}

export default function HeroTemplate({ theme }: HeroTemplateProps) {
    return (
        <div className={`relative h-[70vh] w-full overflow-hidden mb-8 group ${theme.backgroundColor}`}>
            {/* Background Image (blurred/dimmed) */}
            <div className="absolute inset-0 top-20">
                <TemplatePreview
                    theme={theme}
                    className="w-full h-full origin-top object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-linear"
                />
            </div>
            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-transparent to-transparent pointer-events-none" />

            {/* Content Content */}
            <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-24 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                            Featured Template
                        </span>
                        <span className={`px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider ${theme.colorClass} bg-opacity-80`}>
                            {theme.category}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                        {theme.name}
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed max-w-xl line-clamp-3">
                        {theme.description}
                    </p>

                    <div className="flex gap-4">
                        <Link
                            to={`/templates/${theme.id}`}
                            className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            View Template
                        </Link>
                        <button className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2">
                            <Info className="w-5 h-5" />
                            More Info
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
