import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Palette, Type, Maximize, Layers, Sun, Grid3X3 } from 'lucide-react'
import { tokens, tokenCategories, getColorToken, resolveTokenReference } from '@/data/tokenUtils'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

function TokenSection({
    title,
    description,
    icon: Icon,
    children
}: {
    title: string
    description: string
    icon: typeof Palette
    children: React.ReactNode
}) {
    return (
        <section className="mb-12">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                    <Icon size={20} className="text-blue-400" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
                    <p className="text-sm text-zinc-500">{description}</p>
                </div>
            </div>
            <div className="mt-6">
                {children}
            </div>
        </section>
    )
}

function ColorSwatch({
    name,
    value,
    shade
}: {
    name: string
    value: string
    shade?: string
}) {
    const { copied, copy } = useCopyToClipboard()
    const displayName = shade ? `${name}-${shade}` : name
    const cssVar = shade ? `--color-${name}-${shade}` : `--color-${name}`

    return (
        <button
            onClick={() => copy(value)}
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
        >
            <div
                className="w-16 h-16 rounded-lg border border-zinc-700 shadow-md flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: value }}
            >
                {copied ? (
                    <Check size={16} className="text-white drop-shadow-md" />
                ) : (
                    <Copy size={14} className="text-white/0 group-hover:text-white/80 transition-colors drop-shadow-md" />
                )}
            </div>
            <div className="text-center">
                <div className="text-xs font-medium text-zinc-300">{shade || name}</div>
                <div className="text-[10px] text-zinc-500 font-mono">{value}</div>
            </div>
        </button>
    )
}

function ColorPalette({ name, shades }: { name: string; shades: Record<string, string> }) {
    return (
        <div className="mb-8">
            <h3 className="text-sm font-medium text-zinc-400 mb-4 capitalize">{name}</h3>
            <div className="flex flex-wrap gap-4">
                {Object.entries(shades).map(([shade, value]) => (
                    <ColorSwatch key={shade} name={name} shade={shade} value={value} />
                ))}
            </div>
        </div>
    )
}

function SpacingScale() {
    // Curated subset of the most commonly used spacing values, sorted numerically
    const coreSpacing = ['0', '1', '2', '3', '4', '6', '8', '12', '16', '24', '32']

    return (
        <div className="space-y-6">
            {/* Horizontal bar comparison */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <h3 className="text-sm font-medium text-zinc-400 mb-6">Scale Comparison</h3>
                <div className="space-y-3">
                    {coreSpacing.map((key) => {
                        const value = tokens.spacing[key]
                        return (
                            <div key={key} className="flex items-center gap-4">
                                <code className="text-xs text-zinc-500 w-8 text-right font-mono">{key}</code>
                                <div className="flex-1 flex items-center gap-3">
                                    <div
                                        className="bg-blue-500 rounded-sm h-6"
                                        style={{ width: value, minWidth: '2px' }}
                                    />
                                    <span className="text-xs text-zinc-500 font-mono">{value}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Reference table */}
            <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-zinc-800">
                            <th className="text-left px-4 py-3 text-zinc-400 font-medium">Token</th>
                            <th className="text-left px-4 py-3 text-zinc-400 font-medium">Value</th>
                            <th className="text-left px-4 py-3 text-zinc-400 font-medium">CSS Variable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coreSpacing.map((key) => (
                            <tr key={key} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                                <td className="px-4 py-2 font-medium text-zinc-200">{key}</td>
                                <td className="px-4 py-2 font-mono text-zinc-400">{tokens.spacing[key]}</td>
                                <td className="px-4 py-2 font-mono text-zinc-500">--spacing-{key}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TypographyShowcase() {
    return (
        <div className="space-y-8">
            {/* Font Families */}
            <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-4">Font Families</h3>
                <div className="space-y-4">
                    {Object.entries(tokens.typography.fontFamilies).map(([name, value]) => (
                        <div key={name} className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                            <div className="text-2xl text-zinc-100 mb-2" style={{ fontFamily: value }}>
                                The quick brown fox jumps over the lazy dog
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-zinc-300 capitalize">{name}</span>
                                <code className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">--font-{name}</code>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Sizes */}
            <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-4">Font Sizes</h3>
                <div className="space-y-3">
                    {Object.entries(tokens.typography.fontSizes).map(([name, value]) => (
                        <div key={name} className="flex items-baseline gap-4 py-2 border-b border-zinc-800">
                            <code className="text-xs text-zinc-500 w-16">--text-{name}</code>
                            <span className="text-zinc-500 text-sm w-12">{value}</span>
                            <span className="text-zinc-100" style={{ fontSize: value }}>
                                Design Tokens
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Font Weights */}
            <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-4">Font Weights</h3>
                <div className="flex flex-wrap gap-6">
                    {Object.entries(tokens.typography.fontWeights).map(([name, value]) => (
                        <div key={name} className="text-center">
                            <div className="text-3xl text-zinc-100 mb-2" style={{ fontWeight: value }}>
                                Aa
                            </div>
                            <div className="text-sm text-zinc-400 capitalize">{name}</div>
                            <div className="text-xs text-zinc-500">{value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function RadiiShowcase() {
    return (
        <div className="flex flex-wrap gap-6">
            {Object.entries(tokens.radii).map(([name, value]) => (
                <div key={name} className="text-center">
                    <div
                        className="w-20 h-20 bg-blue-500 mb-3"
                        style={{ borderRadius: value }}
                    />
                    <div className="text-sm font-medium text-zinc-300">{name}</div>
                    <div className="text-xs text-zinc-500 font-mono">{value}</div>
                </div>
            ))}
        </div>
    )
}

function ShadowsShowcase() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(tokens.shadows).map(([name, value]) => {
                const resolvedValue = resolveTokenReference(value)
                return (
                    <div key={name} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 flex flex-col group">
                        {/* Light background area to make dark shadows visible */}
                        <div className="bg-zinc-100 h-40 flex items-center justify-center relative transition-colors duration-500">
                            {/* Grid pattern for contrast */}
                            <div
                                className="absolute inset-0 opacity-[0.03]"
                                style={{
                                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                                    backgroundSize: '16px 16px'
                                }}
                            />

                            {/* The element casting the shadow */}
                            <div
                                className="w-20 h-20 rounded-xl bg-white transition-all duration-300 border border-zinc-200"
                                style={{ boxShadow: resolvedValue }}
                            />
                        </div>

                        {/* Label area */}
                        <div className="p-4 border-t border-zinc-800 bg-zinc-900/50 group-hover:bg-zinc-900 transition-colors">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-zinc-200 capitalize">{name}</span>
                                <code className="text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">--shadow-{name}</code>
                            </div>
                            <div className="text-xs text-zinc-500 font-mono truncate" title={resolvedValue}>
                                {name === 'none' ? 'none' : resolvedValue.slice(0, 30) + (resolvedValue.length > 30 ? '...' : '')}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function SemanticColorsShowcase() {
    const semanticColors = tokens.colors.semantic

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(semanticColors).map(([category, values]) => {
                if (typeof values === 'string') {
                    const resolved = resolveTokenReference(values)
                    return (
                        <div key={category} className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                            <div
                                className="w-full h-12 rounded-md mb-3 border border-zinc-700"
                                style={{ backgroundColor: resolved }}
                            />
                            <div className="text-sm font-medium text-zinc-300 capitalize">{category}</div>
                            <code className="text-xs text-zinc-500">{resolved}</code>
                        </div>
                    )
                }

                return (
                    <div key={category} className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                        <div className="text-sm font-medium text-zinc-300 capitalize mb-3">{category}</div>
                        <div className="space-y-2">
                            {Object.entries(values).map(([key, value]) => {
                                const resolved = resolveTokenReference(value)
                                return (
                                    <div key={key} className="flex items-center gap-2">
                                        <div
                                            className="w-6 h-6 rounded border border-zinc-700"
                                            style={{ backgroundColor: resolved }}
                                        />
                                        <span className="text-xs text-zinc-400">{key}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function TokensPage() {
    const [activeCategory, setActiveCategory] = useState<string>('colors')

    const categoryIcons = {
        colors: Palette,
        spacing: Grid3X3,
        typography: Type,
        radii: Maximize,
        shadows: Layers,
        transitions: Sun,
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-zinc-100 mb-4">Design Tokens</h1>
                    <p className="text-lg text-zinc-400 max-w-2xl">
                        The foundational building blocks of our design system. Tokens ensure consistency
                        across all components and make theming straightforward.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-zinc-800">
                    {tokenCategories.map((category) => {
                        const Icon = categoryIcons[category.id as keyof typeof categoryIcons]
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === category.id
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : 'bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 border border-zinc-700'
                                    }`}
                            >
                                <Icon size={16} />
                                {category.name}
                            </button>
                        )
                    })}
                </div>

                {/* Content */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {activeCategory === 'colors' && (
                        <>
                            <TokenSection
                                title="Primitive Colors"
                                description="Raw color values organized by hue"
                                icon={Palette}
                            >
                                {Object.entries(tokens.colors.primitives).map(([name, shades]) => (
                                    <ColorPalette key={name} name={name} shades={shades} />
                                ))}
                            </TokenSection>

                            <TokenSection
                                title="Semantic Colors"
                                description="Purpose-driven color assignments"
                                icon={Palette}
                            >
                                <SemanticColorsShowcase />
                            </TokenSection>
                        </>
                    )}

                    {activeCategory === 'spacing' && (
                        <TokenSection
                            title="Spacing Scale"
                            description="Consistent spacing based on 4px increments"
                            icon={Grid3X3}
                        >
                            <SpacingScale />
                        </TokenSection>
                    )}

                    {activeCategory === 'typography' && (
                        <TokenSection
                            title="Typography"
                            description="Font families, sizes, and weights"
                            icon={Type}
                        >
                            <TypographyShowcase />
                        </TokenSection>
                    )}

                    {activeCategory === 'radii' && (
                        <TokenSection
                            title="Border Radii"
                            description="Corner rounding presets"
                            icon={Maximize}
                        >
                            <RadiiShowcase />
                        </TokenSection>
                    )}

                    {activeCategory === 'shadows' && (
                        <TokenSection
                            title="Shadows"
                            description="Elevation and depth with box shadows"
                            icon={Layers}
                        >
                            <ShadowsShowcase />
                        </TokenSection>
                    )}

                    {activeCategory === 'transitions' && (
                        <TokenSection
                            title="Transitions"
                            description="Animation timing and easing"
                            icon={Sun}
                        >
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-sm font-medium text-zinc-400 mb-4">Durations</h3>
                                    <div className="space-y-4">
                                        {Object.entries(tokens.transitions.durations).map(([name, value]) => (
                                            <div key={name} className="flex items-center gap-4">
                                                <code className="text-xs text-zinc-500 w-24">--duration-{name}</code>
                                                <span className="text-sm text-zinc-300">{value}</span>
                                                <div className="flex-1 h-2 bg-zinc-800 rounded overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-blue-500"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: '100%' }}
                                                        transition={{
                                                            duration: parseInt(value) / 1000,
                                                            repeat: Infinity,
                                                            repeatDelay: 1
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-medium text-zinc-400 mb-4">Easings</h3>
                                    <div className="space-y-3">
                                        {Object.entries(tokens.transitions.easings).map(([name, value]) => (
                                            <div key={name} className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                                                <div className="text-sm font-medium text-zinc-300 capitalize mb-1">{name}</div>
                                                <code className="text-xs text-zinc-500">{value}</code>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TokenSection>
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}
