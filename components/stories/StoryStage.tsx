import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { motion as motionTokens } from '@/data/motion'
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

        if (componentName === 'Box') {
            const { animate, transition, style, className, key } = props

            // Box specific styles
            const boxStyle: React.CSSProperties = {
                width: '100px',
                height: '100px',
                backgroundColor: theme.colors.primary,
                borderRadius: theme.radius === 'full' ? '50%' : '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: theme.shadow === 'none' ? 'none' : `0 10px 30px -10px ${theme.colors.foreground}`,
                ...style
            }

            // We need a container that allows movement. 
            // Since the animation is x: 200, we should probably start it offset to the left or have a wide container.
            // Let's make a track.

            return (
                <div className="w-full h-[200px] flex items-center justify-center relative">
                    {/* Track Line (Optional, for reference) */}
                    <div className="absolute h-1 w-[300px] bg-zinc-800 rounded-full" />

                    {/* The Box */}
                    {/* Initial x: -100 to start on left, animating to +100 relative to center, effectively moving left to right */}
                    {/* Range: -100 to 100 covers 200px of travel. With 100px box, fits perfectly in 300px track. */}
                    <motion.div
                        key={key} // Force remount when key changes
                        initial={{ x: -100 }}
                        animate={animate} // Expecting { x: 100 } from stories.ts? Or I should adjust stories to match.
                        // Stories has { x: 200 }. If I start at -100, x: 200 goes to +100. Correct.
                        transition={transition}
                        style={boxStyle}
                        className={className}
                    >
                        {/* Optional Icon or Content inside box */}
                        <div className="w-8 h-8 bg-white/20 rounded-full" />
                    </motion.div>
                </div>
            )
        }

        if (componentName === 'PerformanceList') {
            const { flashMode, activeInput, itemCount = 20 } = props

            // Generate dummy items
            const items = Array.from({ length: itemCount }).map((_, i) => ({ id: i, label: `Item ${i + 1}` }))

            return (
                <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col shadow-2xl">
                    {/* Header / Input */}
                    <div className="p-4 border-b border-zinc-800 bg-zinc-900 z-10">
                        <motion.div
                            animate={flashMode === 'all' || flashMode === 'input-only' ? {
                                backgroundColor: ['#ef4444', 'rgba(39, 39, 42, 0)'], // Red to Transparent
                            } : {}}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                            className="bg-zinc-800 rounded px-3 py-2 text-sm text-zinc-400 border border-zinc-700 flex items-center gap-2"
                        >
                            <span className="text-zinc-500">🔍</span>
                            {activeInput}
                        </motion.div>
                    </div>

                    {/* List */}
                    <div className="flex-1 overflow-y-auto max-h-[300px] p-2 space-y-1">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                animate={flashMode === 'all' ? {
                                    backgroundColor: ['#ef4444', 'rgba(39, 39, 42, 0)'], // Red to Transparent
                                } : {}}
                                // Stagger the flash slightly for a "waterfall" lag effect if we wanted, but synchronous flash is more accurate to how React commits.
                                transition={{ duration: motionTokens.duration.normal, repeat: Infinity, repeatDelay: 1 }}
                                className="px-3 py-2 rounded text-sm text-zinc-300 flex items-center justify-between hover:bg-zinc-800/50"
                            >
                                <span>{item.label}</span>
                                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        }

        if (componentName === 'ColorContrast') {
            const { bg, fg, showMath } = props

            // --- WCAG Contrast Helpers (Inline for now) ---
            const hexToRgb = (hex: string) => {
                const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }

            const getLuminance = (r: number, g: number, b: number) => {
                const a = [r, g, b].map(v => {
                    v /= 255;
                    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
                });
                return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
            }

            const getContrast = (rgb1: any, rgb2: any) => {
                const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
                const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
                const brightest = Math.max(lum1, lum2);
                const darkest = Math.min(lum1, lum2);
                return (brightest + 0.05) / (darkest + 0.05);
            }

            const rgbBg = hexToRgb(bg) || { r: 0, g: 0, b: 0 };
            const rgbFg = hexToRgb(fg) || { r: 0, g: 0, b: 0 };
            const ratio = getContrast(rgbBg, rgbFg);
            const ratioFormatted = ratio.toFixed(2);

            const passesAA = ratio >= 4.5;
            const passesAAA = ratio >= 7;
            const passesLargeAA = ratio >= 3;

            return (
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-64 h-32 rounded-xl flex items-center justify-center shadow-2xl transition-colors duration-500"
                        style={{ backgroundColor: bg, color: fg }}
                    >
                        <span className="text-xl font-bold">Contrast</span>
                    </motion.div>

                    <AnimatePresence>
                        {showMath && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl w-64 shadow-xl"
                            >
                                <div className="flex justify-between items-baseline mb-2">
                                    <span className="text-zinc-500 text-xs uppercase tracking-wider">Ratio</span>
                                    <span className={`text-2xl font-mono font-bold ${passesAA ? 'text-green-400' : 'text-red-400'}`}>
                                        {ratioFormatted}:1
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-zinc-400">AA Normal (4.5)</span>
                                        <span className={passesAA ? 'text-green-500' : 'text-red-500'}>{passesAA ? 'PASS' : 'FAIL'}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-zinc-400">AA Large (3.0)</span>
                                        <span className={passesLargeAA ? 'text-green-500' : 'text-red-500'}>{passesLargeAA ? 'PASS' : 'FAIL'}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )
        }

        if (componentName === 'BoxModelDemo') {
            const { boxSizing, padding, showMath } = props

            // Container is 400px fixed width in our story logic (visually represented)
            // But to make it responsive, we might just use a percentage based approach or a fixed max-width.
            // Let's use fixed 400px for clear visualization if space allows, otherwise scaled.

            return (
                <div className="flex flex-col items-center gap-4 w-full">
                    {/* Parent Container Label */}
                    <div className="text-xs text-zinc-500 font-mono">Parent Container (width: 400px)</div>

                    {/* The Parent Container */}
                    <div className="w-[400px] border-2 border-dashed border-zinc-600 bg-zinc-900/50 p-0 flex flex-wrap items-start relative overflow-hidden">

                        {/* Child 1 */}
                        <motion.div
                            layout
                            initial={false}
                            animate={{
                                width: '50%',
                                padding: `${padding}px`,
                                boxSizing: boxSizing
                            }}
                            className="h-32 bg-blue-500/80 border-2 border-blue-400 flex items-center justify-center relative backdrop-blur-sm"
                        >
                            <span className="text-white font-mono font-bold drop-shadow-md">50%</span>
                            {/* Inner Content Box Visual */}
                            <div className="absolute inset-0 m-[auto] border border-white/30 pointer-events-none"
                                style={{
                                    top: padding, left: padding, right: padding, bottom: padding,
                                    display: padding > 0 ? 'block' : 'none'
                                }}
                            />
                        </motion.div>

                        {/* Child 2 */}
                        <motion.div
                            layout
                            initial={false}
                            animate={{
                                width: '50%',
                                padding: `${padding}px`,
                                boxSizing: boxSizing
                            }}
                            className="h-32 bg-indigo-500/80 border-2 border-indigo-400 flex items-center justify-center relative backdrop-blur-sm"
                        >
                            <span className="text-white font-mono font-bold drop-shadow-md">50%</span>
                            <div className="absolute inset-0 m-[auto] border border-white/30 pointer-events-none"
                                style={{
                                    top: padding, left: padding, right: padding, bottom: padding,
                                    display: padding > 0 ? 'block' : 'none'
                                }}
                            />
                        </motion.div>

                        {/* Overflow Indicator (if wrapped) */}
                        <div className="absolute -right-2 top-0 h-full w-2 border-r border-red-500 opacity-50" />
                    </div>

                    {/* Math Overlay */}
                    <AnimatePresence>
                        {showMath && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="bg-black/80 backdrop-blur border border-zinc-800 p-4 rounded-xl text-xs font-mono"
                            >
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                    <div className="text-zinc-500">Declared Width</div>
                                    <div className="text-white text-right">200px (50%)</div>

                                    <div className="text-zinc-500">Padding (x2)</div>
                                    <div className="text-yellow-400 text-right">+{padding * 2}px</div>

                                    <div className="border-t border-zinc-700 col-span-2 my-1" />

                                    <div className="text-zinc-500">Actual Width</div>
                                    <div className={`text-right font-bold ${boxSizing === 'content-box' ? 'text-red-400' : 'text-green-400'}`}>
                                        {boxSizing === 'content-box' ? 200 + (padding * 2) : 200}px
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )
        }

        if (componentName === 'ModalAnatomy') {
            const { step } = props
            // Steps: 'basic', 'backdrop', 'trap', 'aria'

            return (
                <div className="w-full max-w-md h-[400px] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-300 relative shadow-2xl flex flex-col font-sans">
                    {/* Fake Browser Toolbar */}
                    <div className="h-8 bg-zinc-200 border-b border-zinc-300 flex items-center px-2 gap-2">
                        <div className="flex gap-1">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 bg-white h-5 rounded text-[10px] flex items-center px-2 text-zinc-400">nexus.com/profile</div>
                    </div>

                    {/* Page Content */}
                    <div className="flex-1 p-8 bg-white text-zinc-800 space-y-4 relative">
                        <h1 className="text-2xl font-bold">User Profile</h1>
                        <p className="text-sm text-zinc-500">
                            Welcome to your dashboard. Here you can manage your settings.
                        </p>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 bg-zinc-200 rounded text-xs">Settings</div>
                            <div className="px-3 py-1 bg-zinc-200 rounded text-xs">Logout</div>
                        </div>
                        {/* Fake Focus on background just to show it's possible if not trapped */}
                        {step === 'basic' && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="absolute top-[130px] left-8 w-[60px] h-[24px] ring-2 ring-blue-500 rounded bg-blue-100/20 pointer-events-none"
                            />
                        )}
                    </div>

                    {/* Backdrop */}
                    <AnimatePresence>
                        {(step === 'backdrop' || step === 'trap' || step === 'aria') && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/50 z-10"
                            />
                        )}
                    </AnimatePresence>

                    {/* Modal */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-[280px] bg-white rounded-lg shadow-xl p-6 text-center space-y-4 pointer-events-auto relative"
                        >
                            {/* ARIA Label Overlay */}
                            {step === 'aria' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute -top-3 -left-3 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded shadow-sm z-30 font-mono"
                                >
                                    role="dialog"
                                </motion.div>
                            )}

                            <h2 className="text-lg font-bold text-zinc-800">Edit Profile</h2>
                            <p className="text-xs text-zinc-500">Make changes to your profile here. Click save when you're done.</p>

                            <div className="flex flex-col gap-2">
                                <input disabled className="w-full border border-zinc-200 rounded px-2 py-1 text-sm bg-zinc-50" placeholder="Username" />
                                <div className="flex gap-2 justify-center mt-2">
                                    <button className="px-3 py-1.5 bg-zinc-200 rounded text-xs font-medium text-zinc-700">Cancel</button>
                                    <button className="px-3 py-1.5 bg-black text-white rounded text-xs font-medium">Save</button>
                                </div>
                            </div>

                            {/* Focus Trap Visuals */}
                            {step === 'trap' && (
                                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-40">
                                    <defs>
                                        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6" />
                                        </marker>
                                    </defs>
                                    {/* Line from Input to Cancel */}
                                    <motion.path
                                        d="M 140,110 Q 70,110 80,145"
                                        fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    {/* Line from Cancel to Save */}
                                    <motion.path
                                        d="M 100,160 Q 140,180 170,160"
                                        fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                    {/* Line from Save to Input (Loop) */}
                                    <motion.path
                                        d="M 210,150 Q 260,100 140,90"
                                        fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)"
                                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.0, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                </svg>
                            )}

                        </motion.div>
                    </div>
                </div>
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
