import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { Check, Search, Palette, Sparkles, ChevronDown, ChevronRight, Layout } from 'lucide-react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import { getRadius, getShadow, Size } from '@/data/variants'
import { visualLanguages, templates, type VisualLanguageId } from '@/lib/registry'

// Import extracted playground components
import {
    PlaygroundButton,
    PlaygroundCard,
    PlaygroundInput,
    PlaygroundBadge,
    PlaygroundToggle,
} from '@/components/playground'
import { TokenControls, ExportModal } from '@/components/studio'

// Import rich components for showcase
import KanbanBoard from '@/components/productivity/KanbanBoard'
import FeedPost from '@/components/social/FeedPost'
import ProductCard from '@/components/ecommerce/ProductCard'
import TransactionList from '@/components/fintech/TransactionList'


export default function ThemesPage() {
    const { currentPlaygroundTheme, setPlaygroundTheme, playgroundThemes } = useTheme()

    // Local "Draft" State
    const [draftTheme, setDraftTheme] = useState<PlaygroundTheme>(currentPlaygroundTheme)

    // Sync draft when global theme changes
    React.useEffect(() => {
        setDraftTheme(currentPlaygroundTheme)
    }, [currentPlaygroundTheme])

    const [isExportOpen, setIsExportOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedSize, setSelectedSize] = useState<Size>('md')

    // Use the draft theme for all rendering
    const theme = draftTheme || currentPlaygroundTheme

    // Early return if theme is not yet available
    if (!theme) {
        return <div className="flex h-[calc(100vh-64px)] items-center justify-center">Loading...</div>
    }

    // Grouping Logic
    const groupedThemes = useMemo(() => {
        // 1. Create buckets for each visual language + Base
        const groups: Record<string, PlaygroundTheme[]> = {
            base: [],
            ...visualLanguages.reduce((acc, lang) => ({ ...acc, [lang.id]: [] }), {})
        }

        // 2. Distribute themes
        playgroundThemes.forEach(pt => {
            // Check if matches search FIRST
            if (searchQuery && !pt.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return
            }

            // Find matching template in registry
            const matchedTemplate = templates.find(t =>
                t.id === pt.id ||
                t.themeVariants?.some(v => v.playgroundThemeId === pt.id)
            )

            if (matchedTemplate) {
                // It belongs to a specific visual language
                const langId = matchedTemplate.visualLanguageId
                if (groups[langId]) {
                    groups[langId].push(pt)
                } else {
                    groups.base.push(pt) // Fallback just in case
                }
            } else {
                // No template match? It's a Base theme (Midnight, Neon, etc.)
                groups.base.push(pt)
            }
        })

        return groups
    }, [searchQuery, playgroundThemes])

    // State for expanded groups
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['base', 'professional']))

    // Auto-expand group of active theme
    useEffect(() => {
        const activeThemeId = currentPlaygroundTheme.id
        // Find which group contains this theme
        let activeGroupId = 'base'

        // Check base first
        // Then check registry templates
        const matchedTemplate = templates.find(t =>
            t.id === activeThemeId ||
            t.themeVariants?.some(v => v.playgroundThemeId === activeThemeId)
        )

        if (matchedTemplate) {
            activeGroupId = matchedTemplate.visualLanguageId
        }

        setExpandedGroups(prev => {
            const next = new Set(prev)
            next.add(activeGroupId)
            return next
        })
    }, [currentPlaygroundTheme.id])

    const toggleGroup = (groupId: string) => {
        setExpandedGroups(prev => {
            const next = new Set(prev)
            if (next.has(groupId)) {
                next.delete(groupId)
            } else {
                next.add(groupId)
            }
            return next
        })
    }

    // Sample data for showcase components
    const samplePost = {
        author: {
            name: 'Design System',
            handle: 'designsystem',
            avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=design',
            time: '2h'
        },
        content: 'Just shipped a new theme! 🎨 The accent colors really pop with this one. What do you think?',
        stats: { likes: 42, comments: 8, shares: 3 }
    }

    const sampleProducts = [
        { image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=500&fit=crop', title: 'Premium Watch', category: 'Accessories', price: '$299', badge: 'New' },
        { image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=500&fit=crop', title: 'Leather Bag', category: 'Fashion', price: '$189' },
    ]

    return (
        <div className="flex h-[calc(100vh-64px)] overflow-hidden">
            <ExportModal
                isOpen={isExportOpen}
                onClose={() => setIsExportOpen(false)}
                theme={draftTheme}
            />

            {/* 1. Theme Sidebar */}
            <aside
                style={{
                    width: '260px',
                    borderRight: `1px solid ${theme.colors.border}`,
                    backgroundColor: theme.colors.card,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'background-color 0.3s',
                    zIndex: 20
                }}
            >
                <div style={{ padding: '20px', borderBottom: `1px solid ${theme.colors.border}` }}>
                    <h2 style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        marginBottom: '4px',
                        color: theme.colors.foreground,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <Palette size={18} style={{ color: theme.colors.primary }} />
                        Theme Playground
                    </h2>
                    <p style={{ fontSize: '12px', color: theme.colors.mutedForeground }}>
                        8 distinct themes
                    </p>

                    <div style={{ marginTop: '16px', position: 'relative' }}>
                        <Search
                            size={14}
                            style={{
                                position: 'absolute',
                                left: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: theme.colors.mutedForeground,
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Search themes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px 8px 8px 32px',
                                borderRadius: getRadius(theme.radius),
                                border: `1px solid ${theme.colors.border}`,
                                backgroundColor: theme.colors.secondary,
                                color: theme.colors.foreground,
                                fontSize: '13px',
                                outline: 'none',
                            }}
                        />
                    </div>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }} className="no-scrollbar space-y-4">

                    {/* Render Base Group First */}
                    {groupedThemes.base.length > 0 && (
                        <div className="space-y-1">
                            <button
                                onClick={() => toggleGroup('base')}
                                className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors group"
                            >
                                {expandedGroups.has('base') ?
                                    <ChevronDown size={14} className="text-muted-foreground" style={{ color: theme.colors.mutedForeground }} /> :
                                    <ChevronRight size={14} className="text-muted-foreground" style={{ color: theme.colors.mutedForeground }} />
                                }
                                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.mutedForeground }}>
                                    Base Colors
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {expandedGroups.has('base') && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pl-2 space-y-1 pt-1">
                                            {groupedThemes.base.map(t => (
                                                <ThemeButton
                                                    key={t.id}
                                                    t={t}
                                                    currentThemeId={currentPlaygroundTheme.id}
                                                    theme={theme}
                                                    onClick={() => setPlaygroundTheme(t.id)}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* Render Visual Language Groups */}
                    {visualLanguages.map(lang => {
                        const themesInGroup = groupedThemes[lang.id] || []
                        if (themesInGroup.length === 0) return null

                        const isActiveGroup = expandedGroups.has(lang.id)

                        return (
                            <div key={lang.id} className="space-y-1">
                                <button
                                    onClick={() => toggleGroup(lang.id)}
                                    className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors group"
                                >
                                    {isActiveGroup ?
                                        <ChevronDown size={14} style={{ color: theme.colors.mutedForeground }} /> :
                                        <ChevronRight size={14} style={{ color: theme.colors.mutedForeground }} />
                                    }
                                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.mutedForeground }}>
                                        {lang.name.split('&')[0].trim()} {/* Shorten name for sidebar */}
                                    </span>
                                    {isActiveGroup && (
                                        <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-white/10" style={{ color: theme.colors.mutedForeground }}>
                                            {themesInGroup.length}
                                        </span>
                                    )}
                                </button>

                                <AnimatePresence initial={false}>
                                    {isActiveGroup && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-2 space-y-1 pt-1">
                                                {themesInGroup.map(t => (
                                                    <ThemeButton
                                                        key={t.id}
                                                        t={t}
                                                        currentThemeId={currentPlaygroundTheme.id}
                                                        theme={theme}
                                                        onClick={() => setPlaygroundTheme(t.id)}
                                                    />
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </aside>

            {/* 2. Token Controls (Center Panel) */}
            <div className="hidden lg:block">
                <TokenControls
                    theme={draftTheme}
                    onUpdate={setDraftTheme}
                    selectedSize={selectedSize}
                    onSizeChange={setSelectedSize}
                />
            </div>


            {/* 3. Main Preview Area */}
            <main
                style={{
                    flex: 1,
                    backgroundColor: theme.colors.background,
                    color: theme.colors.foreground,
                    overflowY: 'auto',
                    padding: '48px',
                    transition: 'background-color 0.3s, color 0.3s',
                    fontFamily: theme.typography.fontFamily,
                    position: 'relative',
                }}
            >
                {/* Floating Controls Toolbar */}
                <div
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 10,
                        backgroundColor: theme.colors.card,
                        border: `1px solid ${theme.colors.border}`,
                        borderRadius: getRadius(theme.radius),
                        padding: '12px 20px',
                        marginBottom: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '24px',
                        boxShadow: getShadow('md', theme),
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={14} style={{ color: theme.colors.primary }} />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: theme.colors.primary }}>
                            Live Preview
                        </span>
                        <span style={{ fontSize: '11px', color: theme.colors.mutedForeground }}>
                            — Adjust tokens in the Studio panel
                        </span>
                    </div>

                    {/* Export Button */}
                    <button
                        onClick={() => setIsExportOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 12px',
                            borderRadius: getRadius(theme.radius),
                            backgroundColor: theme.colors.secondary,
                            border: `1px solid ${theme.colors.border}`,
                            color: theme.colors.foreground,
                            fontSize: '12px',
                            fontWeight: 500,
                            cursor: 'pointer',
                        }}
                    >
                        Export Config
                    </button>
                </div>

                <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ maxWidth: '1200px', margin: '0 auto' }}
                >
                    {/* Header */}
                    <div style={{ marginBottom: '48px' }}>
                        <PlaygroundBadge size={selectedSize === 'lg' ? 'md' : 'sm'} variant="primary" theme={theme}>{theme.mode.toUpperCase()}</PlaygroundBadge>
                        <h1 style={{
                            fontSize: selectedSize === 'sm' ? '36px' : selectedSize === 'lg' ? '60px' : '48px',
                            fontWeight: theme.typography.headingWeight,
                            marginTop: '16px',
                            letterSpacing: theme.typography.letterSpacing,
                            fontFamily: theme.typography.fontFamily,
                            transition: 'font-size 0.2s',
                        }}>
                            {theme.name}
                        </h1>
                        <p style={{
                            fontSize: selectedSize === 'sm' ? '14px' : selectedSize === 'lg' ? '20px' : '18px',
                            color: theme.colors.mutedForeground,
                            maxWidth: '600px',
                            fontWeight: theme.typography.bodyWeight,
                            fontFamily: theme.typography.fontFamily,
                            transition: 'font-size 0.2s',
                        }}>
                            {theme.description}. Experience how real-world components transform with different visual DNA.
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>

                        {/* Row 1: Controls + Social Post */}
                        <PlaygroundCard title="Form Controls" description="Inputs, toggles and buttons" theme={theme} style={{ gridColumn: 'span 4' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <PlaygroundInput placeholder="Enter your email..." size={selectedSize} theme={theme} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '14px' }}>Enable notifications</span>
                                    <PlaygroundToggle checked={true} size={selectedSize === 'lg' ? 'md' : selectedSize} theme={theme} />
                                </div>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <PlaygroundButton variant="primary" size={selectedSize} theme={theme}>Primary</PlaygroundButton>
                                    <PlaygroundButton variant="outline" size={selectedSize} theme={theme}>Outline</PlaygroundButton>
                                </div>
                            </div>
                        </PlaygroundCard>

                        <div style={{ gridColumn: 'span 8', backgroundColor: theme.colors.card, borderRadius: getRadius(theme.radius), border: `1px solid ${theme.colors.border}`, padding: '16px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: theme.colors.foreground }}>Social Feed</h3>
                            <FeedPost {...samplePost} theme={theme} />
                        </div>

                        {/* Row 2: Kanban Board (full width) */}
                        <div style={{ gridColumn: 'span 12', backgroundColor: theme.colors.card, borderRadius: getRadius(theme.radius), border: `1px solid ${theme.colors.border}`, padding: '24px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: theme.colors.foreground }}>Project Board</h3>
                            <KanbanBoard theme={theme} />
                        </div>

                        {/* Row 3: Product Cards + Transaction List */}
                        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 600, color: theme.colors.foreground }}>E-commerce</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                                {sampleProducts.map((product, i) => (
                                    <ProductCard key={i} {...product} theme={theme} />
                                ))}
                            </div>
                        </div>

                        <div style={{ gridColumn: 'span 8' }}>
                            <TransactionList />
                        </div>

                    </div>
                </motion.div>
            </main >
        </div >
    )
}

// Extracted Theme Button Component for cleaner Loop
const ThemeButton = ({ t, currentThemeId, theme, onClick }: { t: PlaygroundTheme, currentThemeId: string, theme: PlaygroundTheme, onClick: () => void }) => (
    <button
        onClick={onClick}
        style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 10px',
            borderRadius: getRadius(theme.radius),
            border: 'none',
            backgroundColor: currentThemeId === t.id ? theme.colors.muted : 'transparent',
            cursor: 'pointer',
            transition: 'all 0.15s',
        }}
        className="group/btn hover:bg-white/5"
    >
        <div
            style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${t.colors.primary}, ${t.colors.accent})`,
                boxShadow: currentThemeId === t.id ? `0 0 0 2px ${theme.colors.ring}` : 'none',
                opacity: currentThemeId === t.id ? 1 : 0.8
            }}
        />
        <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{
                fontSize: '13px',
                fontWeight: currentThemeId === t.id ? 600 : 400,
                color: theme.colors.foreground,
                opacity: currentThemeId === t.id ? 1 : 0.9
            }}>
                {t.name}
            </div>
        </div>
        {currentThemeId === t.id && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Check size={14} style={{ color: theme.colors.primary }} />
            </motion.div>
        )}
    </button>
)

