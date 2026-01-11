import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ComponentMeta } from '@/data/components'

class PreviewErrorBoundary extends React.Component<
    { fallback: React.ReactNode; children: React.ReactNode },
    { hasError: boolean }
> {
    constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }
}

interface LiveComponentCardProps {
    component: ComponentMeta
    priority?: boolean
}

export default function LiveComponentCard({ component, priority = false }: LiveComponentCardProps) {
    const [isVisible, setIsVisible] = useState(priority)
    const cardRef = useRef<HTMLDivElement>(null)
    const Component = component.component

    useEffect(() => {
        if (priority) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '200px' }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => observer.disconnect()
    }, [priority])

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

    const GenericPreview = () => (
        <div className="h-full w-full flex items-center justify-center bg-zinc-950">
            <div className="text-4xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
                {'</>'}
            </div>
            {/* Theme indicator */}
            <div className={`absolute top-3 right-3 h-2 w-2 rounded-full ${getThemeColor(component.theme)}`} />
        </div>
    )

    return (
        <Link
            to={`/components/${component.theme}/${component.id}`}
            className="group block rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-950/50 transition-all relative"
            onMouseEnter={() => {
                // Optional: Trigger any hover states in the preview if possible, 
                // but usually we just let the CSS hover do the work on the container
            }}
        >
            {/* Preview Area */}
            <div
                ref={cardRef}
                className="h-48 bg-zinc-950 border-b border-zinc-800 relative overflow-hidden flex items-center justify-center"
            >
                {isVisible ? (
                    <PreviewErrorBoundary fallback={<GenericPreview />}>
                        <div className="w-[200%] h-[200%] absolute top-0 left-0 flex items-center justify-center origin-top-left transform scale-50 pointer-events-none select-none p-8">
                            {/* We wrap in a container to center it effectively before scaling */}
                            <div className="relative flex items-center justify-center min-w-max min-h-max">
                                {component.previewProps ? (
                                    // @ts-ignore - Dynamic component props
                                    <Component {...component.previewProps} />
                                ) : (
                                    // @ts-ignore
                                    <Component />
                                )}
                            </div>
                        </div>
                        {/* Overlay to catch clicks and prevent interaction with the preview */}
                        <div className="absolute inset-0 z-10 bg-transparent" />
                    </PreviewErrorBoundary>
                ) : (
                    <GenericPreview />
                )}

                {/* Theme indicator (always visible) */}
                <div className={`absolute top-3 right-3 h-2 w-2 rounded-full z-20 ${getThemeColor(component.theme)}`} />

                {/* Category Badge (optional overlay) */}
                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-zinc-400 bg-zinc-900/90 rounded border border-zinc-800">
                        {component.category}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-4 bg-zinc-900/30">
                <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-white group-hover:text-zinc-100 transition-colors truncate">
                        {component.name}
                    </h3>
                </div>
                <p className="text-xs text-zinc-500 line-clamp-2 h-8 leading-relaxed">
                    {component.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    {component.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 text-[10px] text-zinc-500 bg-zinc-800/50 rounded">#{tag}</span>
                    ))}
                    {component.tags.length > 2 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-zinc-500">+ {component.tags.length - 2}</span>
                    )}
                </div>
            </div>
        </Link>
    )
}
