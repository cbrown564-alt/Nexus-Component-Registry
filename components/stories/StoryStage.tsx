import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getPlaygroundThemeById, defaultPlaygroundTheme } from '@/data/playgroundThemes'
import { Eye, Code } from 'lucide-react'

interface StoryStageProps {
    componentName: string
    props: Record<string, any>
    themeId: string
    highlight?: string
}

export default function StoryStage({ componentName, props, themeId, highlight }: StoryStageProps) {
    const theme = useMemo(() => getPlaygroundThemeById(themeId) || defaultPlaygroundTheme, [themeId])
    const [mobileView, setMobileView] = useState<'preview' | 'code'>('preview')
    const [showFullSource, setShowFullSource] = useState(false)

    // Reset view to preview when step changes (optional, but good for flow)
    // Actually, maybe better to persist preference? Let's keep it simple for now.

    const renderComponent = () => {
        if (componentName === 'Button') {
            const { children, className, style, ...rest } = props

            // Construct dynamic styles based on theme if not overridden by empty className
            // If themeId is 'brutalist', we want to enforce certain styles unless we are in the "raw" step

            const isShared = themeId === 'shared'
            const isBrutalist = themeId === 'brutalist'

            const baseStyles: React.CSSProperties = {
                fontFamily: theme.typography.fontFamily,
                borderRadius: theme.radius === 'none' ? '0px' : theme.radius === 'full' ? '9999px' : '0.5rem',
            }

            // Apply theme specific styles if we are in a themed step
            // Note: The story steps manually control 'className' to strip styles in the "raw" phase.
            // So we default to theme styles, but allow props to override/reset.

            // If the story passes a `className` (Manual Mode), filtering out theme styles to allow progressive disclosure.
            // If `className` is missing (Theme Mode), we apply the full theme.

            let autoStyle: React.CSSProperties = {}
            const isManualMode = !!className

            if (!isManualMode) {
                autoStyle = {
                    backgroundColor: props.variant === 'primary' ? theme.colors.primary : theme.colors.background,
                    color: props.variant === 'primary' ? theme.colors.primaryForeground : theme.colors.foreground,
                    border: `2px solid ${theme.colors.border}`,
                    boxShadow: theme.shadow === 'none' ? 'none' : `4px 4px 0px 0px ${theme.colors.foreground}`,
                    padding: '0.75rem 1.5rem',
                    fontWeight: theme.typography.bodyWeight,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                }
            }

            // Highlight logic
            // If a specific prop is highlighted, we might want to pulse it or show a tooltip.
            // For now, let's just use a motion wrapper to smooth the transition of the button itself.

            return (
                <motion.button
                    layout
                    className={className || ''}
                    style={{ ...baseStyles, ...autoStyle, ...style }}
                    {...rest}
                    whileHover={isBrutalist && !className ? { translate: '2px 2px', boxShadow: '0px 0px 0px 0px black' } : {}}
                    whileTap={isBrutalist && !className ? { translate: '4px 4px', boxShadow: '0px 0px 0px 0px black' } : {}}
                >
                    {children}
                </motion.button>
            )
        }

        return <div>Unknown Component: {componentName}</div>
    }

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: themeId === 'brutalist'
                        ? 'radial-gradient(circle, #000 1px, transparent 1px)'
                        : 'none',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Component Container */}
            {/* Mobile: Hidden if in 'code' mode. Desktop: Always visible. */}
            <div className={`${mobileView === 'code' ? 'hidden lg:flex' : 'flex'} flex-col items-center justify-center w-full h-full`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${themeId}-${componentName}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                        {renderComponent()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Code Snippet / Highlighter */}
            <AnimatePresence>
                {highlight && (
                    <motion.div
                        key={highlight}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={`
                            bg-black/80 border border-zinc-800 backdrop-blur-xl rounded-xl p-4 shadow-2xl overflow-hidden
                            
                            ${mobileView === 'code'
                                ? 'absolute inset-4 z-40 flex flex-col justify-center'
                                : 'hidden'
                            }
                            
                            lg:block lg:absolute lg:bottom-32 lg:left-1/2 lg:-translate-x-1/2 lg:min-w-[300px] lg:max-w-lg lg:w-auto lg:h-auto lg:z-10
                        `}
                    >
                        {/* Decorative header */}
                        <div className="flex items-center gap-2 mb-3 border-b border-zinc-800 pb-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <span className="text-[10px] font-mono text-zinc-500 ml-auto uppercase tracking-wider">Live Properties</span>
                            {highlight === 'FULL_SOURCE' && showFullSource && (
                                <button
                                    onClick={() => setShowFullSource(false)}
                                    className="ml-auto text-[10px] text-zinc-400 hover:text-white transition-colors"
                                >
                                    CLOSE
                                </button>
                            )}
                        </div>

                        <div className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                            {highlight === 'FULL_SOURCE' ? (
                                showFullSource ? (
                                    // Full Source View (Expanded)
                                    <div className="text-zinc-400 max-h-[300px] overflow-y-auto pr-2">
                                        <div><span className="text-purple-400">export</span> <span className="text-purple-400">const</span> <span className="text-yellow-300">BrutalistButton</span> <span className="text-zinc-500">=</span> <span className="text-blue-400">{'({ children, ...props })'}</span> <span className="text-zinc-500">{'=>'}</span> <span className="text-zinc-500">{'{'}</span></div>
                                        <div className="pl-4">
                                            <span className="text-purple-400">return</span> <span className="text-zinc-500">(</span>
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-zinc-500">{'<'}</span><span className="text-red-400">button</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-green-400">className</span><span className="text-zinc-500">=</span><span className="text-orange-300">"bg-yellow-400 text-black border-2 border-black..."</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-green-400">style</span><span className="text-zinc-500">={`{{`}</span> <span className="text-cyan-400">boxShadow:</span> <span className="text-orange-300">'4px 4px 0px 0px black'</span> <span className="text-zinc-500">{`}}`}</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-purple-400">{'{...props}'}</span>
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-zinc-500">{'>'}</span>
                                        </div>
                                        <div className="pl-12">
                                            <span className="text-zinc-500">{'{children}'}</span>
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-zinc-500">{'</'}</span><span className="text-red-400">button</span><span className="text-zinc-500">{'>'}</span>
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-zinc-500">)</span>
                                        </div>
                                        <div><span className="text-zinc-500">{'}'}</span></div>
                                    </div>
                                ) : (
                                    // Full Source View (Collapsed State)
                                    <div className="flex flex-col items-center justify-center py-2">
                                        <div className="text-zinc-500 mb-2 text-center text-xs">
                                            The component is now complete.
                                        </div>
                                        <button
                                            onClick={() => setShowFullSource(true)}
                                            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded border border-zinc-700 transition-colors"
                                        >
                                            View Implementation
                                        </button>
                                    </div>
                                )
                            ) : (
                                // Standard Property Highlight View
                                <>
                                    <div className="text-zinc-500 mb-1 flex items-center gap-2">
                                        <span className="text-purple-400">const</span>
                                        <span className="text-blue-400">props</span>
                                        <span className="text-zinc-600">=</span>
                                        <span className="text-zinc-600">{`{`}</span>
                                    </div>

                                    <div className="pl-4 py-1 bg-zinc-900/50 rounded border-l-2 border-orange-500/50">
                                        <span className="text-cyan-400">{highlight}</span>
                                        <span className="text-zinc-400">: </span>
                                        <span className="text-orange-300 break-all">
                                            {JSON.stringify(props[highlight!] || theme[highlight as keyof typeof theme])}
                                        </span>
                                    </div>

                                    <div className="text-zinc-600 mt-1">{`}`}</div>
                                </>
                            )}
                        </div>

                        {/* Subtle Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile View Toggles */}
            {highlight && (
                <div className="absolute bottom-4 left-4 lg:hidden z-50 flex gap-2">
                    <button
                        onClick={() => setMobileView('preview')}
                        className={`p-2 rounded-md border flex items-center gap-2 text-xs font-medium transition-colors ${mobileView === 'preview' ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-black/50 border-zinc-800 text-zinc-500 backdrop-blur-sm'}`}
                    >
                        <Eye className="w-3 h-3" />
                        Preview
                    </button>
                    <button
                        onClick={() => setMobileView('code')}
                        className={`p-2 rounded-md border flex items-center gap-2 text-xs font-medium transition-colors ${mobileView === 'code' ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-black/50 border-zinc-800 text-zinc-500 backdrop-blur-sm'}`}
                    >
                        <Code className="w-3 h-3" />
                        Code
                    </button>
                </div>
            )}
        </div>
    )
}
