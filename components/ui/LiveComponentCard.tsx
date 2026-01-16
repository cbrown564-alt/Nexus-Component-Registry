import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ComponentMeta } from '@/data/components'
import { useTheme } from '@/context/ThemeContext'

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
    const { theme } = useTheme()
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

    const getThemeColor = (themeName: string) => {
        const colors: Record<string, string> = {
            shared: '#52525b',
            fintech: '#10b981',
            cockpit: '#2563eb',
            game: '#d946ef',
            legacy: '#0d9488',
        }
        return colors[themeName] || '#52525b'
    }

    const GenericPreview = () => (
        <div
            className="h-full w-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--background)' }}
        >
            <div
                className="text-4xl font-bold transition-colors"
                style={{ color: 'var(--muted-foreground)' }}
            >
                {'</>'}
            </div>
            {/* Theme indicator */}
            <div
                className={`absolute top-3 right-3 h-2 w-2 rounded-full`}
                style={{ backgroundColor: getThemeColor(component.theme) }}
            />
        </div>
    )

    return (
        <Link
            to={`/components/${component.theme}/${component.id}`}
            className="group block rounded-xl border overflow-hidden hover:shadow-2xl transition-all relative"
            style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--secondary)'
            }}
            onMouseEnter={() => {
                // Optional: Trigger any hover states in the preview if possible
            }}
        >
            {/* Preview Area */}
            <div
                ref={cardRef}
                className="h-48 border-b relative overflow-hidden flex items-center justify-center"
                style={{
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--border)'
                }}
            >
                {isVisible ? (
                    <PreviewErrorBoundary fallback={<GenericPreview />}>
                        <div className="w-[200%] h-[200%] absolute top-0 left-0 flex items-center justify-center origin-top-left transform scale-50 pointer-events-none select-none p-8">
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
                        <div className="absolute inset-0 z-10 bg-transparent" />
                    </PreviewErrorBoundary>
                ) : (
                    <GenericPreview />
                )}

                <div
                    className={`absolute top-3 right-3 h-2 w-2 rounded-full z-20`}
                    style={{ backgroundColor: getThemeColor(component.theme) }}
                />

                <div className="absolute bottom-3 left-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span
                        className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded border"
                        style={{
                            color: 'var(--muted-foreground)',
                            backgroundColor: 'var(--secondary)',
                            borderColor: 'var(--border)'
                        }}
                    >
                        {component.category}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div
                className="p-4"
                style={{ backgroundColor: 'var(--secondary)', opacity: 0.8 }}
            >
                <div className="flex items-center justify-between gap-2 mb-1">
                    <h3
                        className="font-semibold transition-colors truncate"
                        style={{ color: 'var(--foreground)' }}
                    >
                        {component.name}
                    </h3>
                </div>
                <p
                    className="text-xs line-clamp-2 h-8 leading-relaxed"
                    style={{ color: 'var(--muted-foreground)' }}
                >
                    {component.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    {component.tags.slice(0, 2).map(tag => (
                        <span
                            key={tag}
                            className="px-1.5 py-0.5 text-[10px] rounded"
                            style={{
                                color: 'var(--muted-foreground)',
                                backgroundColor: 'var(--muted)'
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                    {component.tags.length > 2 && (
                        <span
                            className="px-1.5 py-0.5 text-[10px]"
                            style={{ color: 'var(--muted-foreground)' }}
                        >
                            + {component.tags.length - 2}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}
