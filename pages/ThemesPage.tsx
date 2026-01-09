import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { Check, Search, Palette, Bell, Settings, User, Star, Zap, ChevronDown, Sparkles } from 'lucide-react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import { getRadius, getShadow, Size, ButtonVariant, BadgeVariant, CardSize } from '@/data/variants'

// Import extracted playground components
import {
    PlaygroundButton,
    PlaygroundCard,
    PlaygroundInput,
    PlaygroundBadge,
    PlaygroundToggle,
    PlaygroundListItem,
} from '@/components/playground'

// Variant options for interactive controls
const sizeOptions: Size[] = ['sm', 'md', 'lg']
const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'accent', 'destructive', 'outline', 'ghost']
const badgeVariants: BadgeVariant[] = ['primary', 'secondary', 'accent', 'destructive', 'outline']
const cardSizes: CardSize[] = ['compact', 'default', 'spacious']

export default function ThemesPage() {
    const { currentPlaygroundTheme, setPlaygroundTheme, playgroundThemes } = useTheme()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedSize, setSelectedSize] = useState<Size>('md')
    const [selectedButtonVariant, setSelectedButtonVariant] = useState<ButtonVariant>('primary')
    const theme = currentPlaygroundTheme

    // Helper to get the active color based on selected variant
    const getActiveColor = () => {
        switch (selectedButtonVariant) {
            case 'primary':
                return theme.colors.primary
            case 'accent':
                return theme.colors.accent
            case 'destructive':
                return '#ef4444'
            default:
                return theme.colors.primary
        }
    }

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
                        gap: '24px',
                        boxShadow: getShadow('md', theme),
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={14} style={{ color: getActiveColor() }} />
                        <span style={{ fontSize: selectedSize === 'sm' ? '11px' : selectedSize === 'lg' ? '13px' : '12px', fontWeight: 600, color: getActiveColor(), transition: 'font-size 0.2s, color 0.2s' }}>
                            Controls
                        </span>
                    </div>

                    <div style={{ width: '1px', height: '20px', backgroundColor: theme.colors.border }} />

                    {/* Size Control */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '11px', color: theme.colors.mutedForeground, fontWeight: 500 }}>
                            SIZE
                        </span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            {sizeOptions.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    style={{
                                        padding: '4px 12px',
                                        borderRadius: getRadius(theme.radius),
                                        border: `1px solid ${selectedSize === size ? getActiveColor() : theme.colors.border}`,
                                        backgroundColor: selectedSize === size ? getActiveColor() : 'transparent',
                                        color: selectedSize === size ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                        fontSize: '11px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                        transition: 'all 0.15s',
                                    }}
                                >
                                    {size.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ width: '1px', height: '20px', backgroundColor: theme.colors.border }} />

                    {/* Button Variant Control */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '11px', color: theme.colors.mutedForeground, fontWeight: 500 }}>
                            COLOR
                        </span>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            {[
                                { variant: 'primary', color: theme.colors.primary, label: 'Brand' },
                                { variant: 'accent', color: theme.colors.accent, label: 'Accent' },
                                { variant: 'destructive', color: '#ef4444', label: 'Destructive' },
                            ].map(({ variant, color, label }) => (
                                <button
                                    key={variant}
                                    onClick={() => setSelectedButtonVariant(variant as ButtonVariant)}
                                    title={label}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        backgroundColor: color,
                                        border: `2px solid ${theme.colors.background}`,
                                        boxShadow: selectedButtonVariant === variant
                                            ? `0 0 0 2px ${theme.colors.foreground}`
                                            : `0 0 0 1px ${theme.colors.border}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        transform: selectedButtonVariant === variant ? 'scale(1.1)' : 'scale(1)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ maxWidth: '1000px', margin: '0 auto' }}
                >
                    {/* Header */}
                    <div style={{ marginBottom: '48px' }}>
                        <PlaygroundBadge size={selectedSize === 'lg' ? 'md' : 'sm'} variant={selectedButtonVariant as any} theme={theme}>{theme.mode.toUpperCase()}</PlaygroundBadge>
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
                            maxWidth: '500px',
                            fontWeight: theme.typography.bodyWeight,
                            fontFamily: theme.typography.fontFamily,
                            transition: 'font-size 0.2s',
                        }}>
                            {theme.description}. See how components transform with different visual DNA.
                        </p>
                    </div>

                    {/* Component Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>

                        {/* Buttons Card */}
                        <PlaygroundCard title="Buttons" description="Primary actions and controls" theme={theme}>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <PlaygroundButton variant={selectedButtonVariant} size={selectedSize} theme={theme}>Primary</PlaygroundButton>
                                <PlaygroundButton variant="secondary" size={selectedSize} theme={theme}>Secondary</PlaygroundButton>
                                <PlaygroundButton variant="outline" size={selectedSize} theme={theme}>Outline</PlaygroundButton>
                            </div>
                        </PlaygroundCard>

                        {/* Input Card */}
                        <PlaygroundCard title="Form Elements" description="Inputs and controls" theme={theme}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <PlaygroundInput placeholder="Enter your email..." size={selectedSize} theme={theme} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: selectedSize === 'sm' ? '12px' : selectedSize === 'lg' ? '16px' : '14px' }}>Enable notifications</span>
                                    <PlaygroundToggle checked={true} size={selectedSize === 'lg' ? 'md' : selectedSize} theme={{ ...theme, colors: { ...theme.colors, primary: getActiveColor() } }} />
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
                                            padding: selectedSize === 'sm' ? '12px' : selectedSize === 'lg' ? '20px' : '16px',
                                            backgroundColor: theme.colors.secondary,
                                            borderRadius: getRadius(theme.radius),
                                            textAlign: 'center',
                                            transition: 'padding 0.2s',
                                        }}
                                    >
                                        <stat.icon size={selectedSize === 'sm' ? 16 : selectedSize === 'lg' ? 24 : 20} style={{ color: getActiveColor(), marginBottom: '8px', transition: 'color 0.2s' }} />
                                        <div style={{ fontSize: selectedSize === 'sm' ? '18px' : selectedSize === 'lg' ? '28px' : '24px', fontWeight: 700, transition: 'font-size 0.2s' }}>{stat.value}</div>
                                        <div style={{ fontSize: selectedSize === 'sm' ? '10px' : selectedSize === 'lg' ? '14px' : '12px', color: theme.colors.mutedForeground, transition: 'font-size 0.2s' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </PlaygroundCard>

                    </div>
                </motion.div>
            </main >
        </div >
    )
}
