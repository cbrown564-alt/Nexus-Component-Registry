import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { Check, Search, Palette, Bell, Settings, User, ChevronRight, Mail, Star, Zap } from 'lucide-react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'

// Helper to get CSS variable style from theme
function getThemeStyles(theme: PlaygroundTheme): React.CSSProperties {
    return {
        '--pg-background': theme.colors.background,
        '--pg-foreground': theme.colors.foreground,
        '--pg-card': theme.colors.card,
        '--pg-card-foreground': theme.colors.cardForeground,
        '--pg-primary': theme.colors.primary,
        '--pg-primary-foreground': theme.colors.primaryForeground,
        '--pg-secondary': theme.colors.secondary,
        '--pg-secondary-foreground': theme.colors.secondaryForeground,
        '--pg-muted': theme.colors.muted,
        '--pg-muted-foreground': theme.colors.mutedForeground,
        '--pg-accent': theme.colors.accent,
        '--pg-accent-foreground': theme.colors.accentForeground,
        '--pg-border': theme.colors.border,
        '--pg-ring': theme.colors.ring,
    } as React.CSSProperties
}

function getRadius(radius: PlaygroundTheme['radius']): string {
    switch (radius) {
        case 'none': return '0px'
        case 'sm': return '4px'
        case 'md': return '8px'
        case 'lg': return '12px'
        case 'xl': return '20px'
    }
}

function getShadow(shadow: PlaygroundTheme['shadow'], theme: PlaygroundTheme): string {
    switch (shadow) {
        case 'none': return 'none'
        case 'sm': return '0 1px 2px 0 rgb(0 0 0 / 0.05)'
        case 'md': return '0 4px 6px -1px rgb(0 0 0 / 0.1)'
        case 'lg': return '0 10px 15px -3px rgb(0 0 0 / 0.1)'
        case 'glow': return `0 0 20px ${theme.colors.primary}40, 0 0 40px ${theme.colors.primary}20`
    }
}

// === GENERIC PLAYGROUND COMPONENTS ===

function PlaygroundButton({ children, variant = 'primary', theme }: {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    theme: PlaygroundTheme
}) {
    const baseStyles: React.CSSProperties = {
        borderRadius: getRadius(theme.radius),
        padding: '10px 20px',
        fontSize: '14px',
        fontWeight: theme.typography.bodyWeight,
        fontFamily: theme.typography.fontFamily,
        letterSpacing: theme.typography.letterSpacing,
        cursor: 'pointer',
        transition: 'all 0.2s',
        border: 'none',
    }

    const variants = {
        primary: {
            backgroundColor: theme.colors.primary,
            color: theme.colors.primaryForeground,
        },
        secondary: {
            backgroundColor: theme.colors.secondary,
            color: theme.colors.secondaryForeground,
        },
        outline: {
            backgroundColor: 'transparent',
            color: theme.colors.foreground,
            border: `1px solid ${theme.colors.border}`,
        },
    }

    return (
        <button style={{ ...baseStyles, ...variants[variant] }}>
            {children}
        </button>
    )
}

function PlaygroundCard({ title, description, theme, children }: {
    title: string
    description?: string
    theme: PlaygroundTheme
    children?: React.ReactNode
}) {
    return (
        <div
            style={{
                backgroundColor: theme.colors.card,
                color: theme.colors.cardForeground,
                borderRadius: getRadius(theme.radius),
                border: `1px solid ${theme.colors.border}`,
                boxShadow: getShadow(theme.shadow, theme),
                padding: '24px',
            }}
        >
            <h3 style={{ fontSize: '18px', fontWeight: theme.typography.headingWeight, marginBottom: '8px', fontFamily: theme.typography.fontFamily }}>{title}</h3>
            {description && (
                <p style={{ color: theme.colors.mutedForeground, fontSize: '14px', marginBottom: '16px' }}>
                    {description}
                </p>
            )}
            {children}
        </div>
    )
}

function PlaygroundInput({ placeholder, theme }: { placeholder: string; theme: PlaygroundTheme }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            style={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.foreground,
                borderRadius: getRadius(theme.radius),
                border: `1px solid ${theme.colors.border}`,
                padding: '10px 14px',
                fontSize: '14px',
                width: '100%',
                outline: 'none',
            }}
        />
    )
}

function PlaygroundBadge({ children, theme }: { children: React.ReactNode; theme: PlaygroundTheme }) {
    return (
        <span
            style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.primaryForeground,
                borderRadius: getRadius(theme.radius === 'none' ? 'sm' : theme.radius),
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: 500,
            }}
        >
            {children}
        </span>
    )
}

function PlaygroundToggle({ checked, theme }: { checked: boolean; theme: PlaygroundTheme }) {
    return (
        <div
            style={{
                width: '44px',
                height: '24px',
                backgroundColor: checked ? theme.colors.primary : theme.colors.muted,
                borderRadius: '9999px',
                padding: '2px',
                cursor: 'pointer',
                transition: 'all 0.2s',
            }}
        >
            <div
                style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: checked ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                    borderRadius: '9999px',
                    transform: checked ? 'translateX(20px)' : 'translateX(0)',
                    transition: 'all 0.2s',
                }}
            />
        </div>
    )
}

function PlaygroundListItem({ icon: Icon, title, description, theme }: {
    icon: typeof Bell
    title: string
    description: string
    theme: PlaygroundTheme
}) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px',
                backgroundColor: theme.colors.secondary,
                borderRadius: getRadius(theme.radius),
                cursor: 'pointer',
            }}
        >
            <div
                style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: getRadius(theme.radius),
                    backgroundColor: theme.colors.muted,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Icon size={18} style={{ color: theme.colors.mutedForeground }} />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 500 }}>{title}</div>
                <div style={{ fontSize: '12px', color: theme.colors.mutedForeground }}>{description}</div>
            </div>
            <ChevronRight size={16} style={{ color: theme.colors.mutedForeground }} />
        </div>
    )
}

// === MAIN PAGE ===

export default function ThemesPage() {
    const { currentPlaygroundTheme, setPlaygroundTheme, playgroundThemes } = useTheme()
    const [searchQuery, setSearchQuery] = useState('')
    const theme = currentPlaygroundTheme

    const filteredThemes = playgroundThemes.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="flex h-[calc(100vh-64px)] overflow-hidden">
            {/* Theme Sidebar */}
            <aside
                style={{
                    width: '280px',
                    borderRight: `1px solid ${theme.colors.border}`,
                    backgroundColor: theme.colors.card,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
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

                <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
                    {filteredThemes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setPlaygroundTheme(t.id)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 12px',
                                borderRadius: getRadius(theme.radius),
                                border: 'none',
                                backgroundColor: currentPlaygroundTheme.id === t.id ? theme.colors.muted : 'transparent',
                                cursor: 'pointer',
                                transition: 'all 0.15s',
                                marginBottom: '4px',
                            }}
                        >
                            <div
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${t.colors.primary}, ${t.colors.accent})`,
                                    boxShadow: currentPlaygroundTheme.id === t.id ? `0 0 0 2px ${theme.colors.ring}` : 'none',
                                }}
                            />
                            <div style={{ flex: 1, textAlign: 'left' }}>
                                <div style={{
                                    fontSize: '13px',
                                    fontWeight: currentPlaygroundTheme.id === t.id ? 600 : 500,
                                    color: theme.colors.foreground
                                }}>
                                    {t.name}
                                </div>
                                <div style={{ fontSize: '11px', color: theme.colors.mutedForeground }}>
                                    {t.mode}
                                </div>
                            </div>
                            {currentPlaygroundTheme.id === t.id && (
                                <Check size={16} style={{ color: theme.colors.primary }} />
                            )}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Preview Area */}
            <main
                style={{
                    flex: 1,
                    backgroundColor: theme.colors.background,
                    color: theme.colors.foreground,
                    overflowY: 'auto',
                    padding: '48px',
                    transition: 'all 0.3s',
                    fontFamily: theme.typography.fontFamily,
                }}
            >
                <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ maxWidth: '1000px', margin: '0 auto' }}
                >
                    {/* Header */}
                    <div style={{ marginBottom: '48px' }}>
                        <PlaygroundBadge theme={theme}>{theme.mode.toUpperCase()}</PlaygroundBadge>
                        <h1 style={{
                            fontSize: '48px',
                            fontWeight: theme.typography.headingWeight,
                            marginTop: '16px',
                            letterSpacing: theme.typography.letterSpacing,
                            fontFamily: theme.typography.fontFamily
                        }}>
                            {theme.name}
                        </h1>
                        <p style={{
                            fontSize: '18px',
                            color: theme.colors.mutedForeground,
                            maxWidth: '500px',
                            fontWeight: theme.typography.bodyWeight,
                            fontFamily: theme.typography.fontFamily
                        }}>
                            {theme.description}. See how components transform with different visual DNA.
                        </p>
                    </div>

                    {/* Component Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>

                        {/* Buttons Card */}
                        <PlaygroundCard title="Buttons" description="Primary actions and controls" theme={theme}>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <PlaygroundButton variant="primary" theme={theme}>Primary</PlaygroundButton>
                                <PlaygroundButton variant="secondary" theme={theme}>Secondary</PlaygroundButton>
                                <PlaygroundButton variant="outline" theme={theme}>Outline</PlaygroundButton>
                            </div>
                        </PlaygroundCard>

                        {/* Input Card */}
                        <PlaygroundCard title="Form Elements" description="Inputs and controls" theme={theme}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <PlaygroundInput placeholder="Enter your email..." theme={theme} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '14px' }}>Enable notifications</span>
                                    <PlaygroundToggle checked={true} theme={theme} />
                                </div>
                            </div>
                        </PlaygroundCard>

                        {/* List Card */}
                        <PlaygroundCard title="List Items" description="Navigation and menus" theme={theme}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <PlaygroundListItem icon={User} title="Profile" description="Manage your account" theme={theme} />
                                <PlaygroundListItem icon={Bell} title="Notifications" description="Configure alerts" theme={theme} />
                                <PlaygroundListItem icon={Settings} title="Settings" description="App preferences" theme={theme} />
                            </div>
                        </PlaygroundCard>

                        {/* Stats Card */}
                        <PlaygroundCard title="Metrics" description="Data visualization" theme={theme}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                                {[
                                    { label: 'Users', value: '12.4K', icon: User },
                                    { label: 'Reviews', value: '4.8', icon: Star },
                                    { label: 'Active', value: '89%', icon: Zap },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        style={{
                                            padding: '16px',
                                            backgroundColor: theme.colors.secondary,
                                            borderRadius: getRadius(theme.radius),
                                            textAlign: 'center',
                                        }}
                                    >
                                        <stat.icon size={20} style={{ color: theme.colors.primary, marginBottom: '8px' }} />
                                        <div style={{ fontSize: '24px', fontWeight: 700 }}>{stat.value}</div>
                                        <div style={{ fontSize: '12px', color: theme.colors.mutedForeground }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </PlaygroundCard>

                    </div>
                </motion.div>
            </main>
        </div>
    )
}
