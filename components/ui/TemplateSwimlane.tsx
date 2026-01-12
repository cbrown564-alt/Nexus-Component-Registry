import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { LegacyTheme as Theme } from '@/lib/registry'
import TemplatePreview from './TemplatePreview'

interface TemplateSwimlaneProps {
    title: string
    themes: Theme[]
    viewAllLink?: string
}

export default function TemplateSwimlane({ title, themes, viewAllLink }: TemplateSwimlaneProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // buffer
        }
    }

    useEffect(() => {
        checkScroll()
        window.addEventListener('resize', checkScroll)
        return () => window.removeEventListener('resize', checkScroll)
    }, [themes])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current
            const scrollAmount = clientWidth * 0.75
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className="mb-12 group/lane relative">
            <div className="flex items-center justify-between px-8 mb-4">
                <h2 className="text-xl font-semibold tracking-wide" style={{ color: '#ffffff' }}>{title}</h2>
                {viewAllLink && (
                    <Link
                        to={viewAllLink}
                        className="text-xs font-medium hover:text-[#ffffff] transition-colors flex items-center gap-1 group"
                        style={{ color: '#71717a' }}
                    >
                        View all <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                )}
            </div>

            <div className="relative group/scroll">
                {/* Left Control */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-0 bottom-8 z-30 w-12 backdrop-blur-sm opacity-0 group-hover/scroll:opacity-100 transition-opacity flex items-center justify-center hover:bg-[#000000]/80 transition-colors"
                        style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#ffffff' }}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="w-full overflow-x-auto pb-8 -mb-4 px-8 flex gap-6 snap-x snap-mandatory scroll-pl-8 no-scrollbar scroll-smooth"
                >
                    {themes.map((theme, index) => (
                        <Link
                            key={theme.id}
                            to={`/templates/${theme.id}`}
                            className="relative flex-none w-[280px] md:w-[360px] aspect-video group snap-start transition-transform duration-300 hover:z-10"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-full h-full rounded-lg overflow-hidden border shadow-lg relative origin-center"
                                style={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Preview */}
                                <div className="absolute inset-0">
                                    <TemplatePreview theme={theme} className="w-full h-full object-cover" />
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                                    <h3
                                        className="text-lg font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                                        style={{ color: '#ffffff' }}
                                    >
                                        {theme.name}
                                    </h3>
                                    <div className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <div className={`w-2 h-2 rounded-full ${theme.colorClass}`} />
                                        <span className="text-xs capitalize" style={{ color: '#d4d4d8' }}>{theme.category}</span>
                                    </div>
                                    <div className="mt-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {theme.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#d4d4d8' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Right Control */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-0 bottom-8 z-30 w-12 backdrop-blur-sm opacity-0 group-hover/scroll:opacity-100 transition-opacity flex items-center justify-center hover:bg-[#000000]/80 transition-colors"
                        style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: '#ffffff' }}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                )}
            </div>
        </div>
    )
}
