import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Palette, Check, FlaskConical } from 'lucide-react'
import { Template, ThemeVariant } from '@/lib/registry'
import { getPlaygroundThemeById, playgroundThemes } from '@/data/playgroundThemes'
import { useTheme } from '@/context/ThemeContext'

interface ThemeSwitcherProps {
    template: Template
}

export default function ThemeSwitcher({ template }: ThemeSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [exploreMode, setExploreMode] = useState(false)
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const { setTheme } = useTheme()

    const variants = template.themeVariants

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleVariantSelect = (variant: ThemeVariant) => {
        setSelectedVariant(variant.id)
        setTheme(variant.playgroundThemeId)
        setIsOpen(false)
    }

    const handleExploreSelect = (themeId: string) => {
        setSelectedVariant(themeId)
        setTheme(themeId)
        setIsOpen(false)
    }

    // In explore mode, always show the switcher; otherwise, only show if variants exist
    const hasVariants = variants && variants.length > 1
    const showSwitcher = exploreMode || hasVariants

    // Get current display name
    const currentDisplayName = (() => {
        if (exploreMode && selectedVariant) {
            const pgTheme = getPlaygroundThemeById(selectedVariant)
            return pgTheme?.name || 'Select Theme'
        }
        if (selectedVariant && variants) {
            const v = variants.find(v => v.id === selectedVariant)
            return v?.name || variants[0]?.name || 'Theme'
        }
        return variants?.[0]?.name || 'Default'
    })()

    return (
        <div className="flex items-center gap-2" ref={dropdownRef}>
            {/* Explore Mode Toggle */}
            <button
                onClick={() => setExploreMode(!exploreMode)}
                title={exploreMode ? 'Exit Explore Mode' : 'Explore All Themes'}
                className="flex items-center justify-center h-8 w-8 rounded-lg border transition-colors"
                style={{
                    backgroundColor: exploreMode ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                    borderColor: exploreMode ? '#f59e0b' : '#3f3f46',
                    color: exploreMode ? '#f59e0b' : '#a1a1aa'
                }}
            >
                <FlaskConical className="h-4 w-4" />
            </button>

            {/* Theme Dropdown */}
            {showSwitcher && (
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-colors"
                        style={{
                            backgroundColor: isOpen ? '#27272a' : 'transparent',
                            borderColor: exploreMode ? '#f59e0b' : '#3f3f46',
                            color: '#e4e4e7'
                        }}
                    >
                        <Palette className="h-4 w-4" style={{ color: exploreMode ? '#f59e0b' : '#a1a1aa' }} />
                        <span>
                            {currentDisplayName}
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: '#71717a' }} />
                    </button>

                    {isOpen && (
                        <div
                            className="absolute top-full right-0 mt-2 w-56 py-1 rounded-lg shadow-xl z-50 border max-h-80 overflow-y-auto"
                            style={{ backgroundColor: '#18181b', borderColor: exploreMode ? '#f59e0b' : '#3f3f46' }}
                        >
                            <div
                                className="px-3 py-2 text-xs uppercase tracking-wider border-b flex items-center gap-2"
                                style={{ color: exploreMode ? '#f59e0b' : '#71717a', borderColor: '#27272a' }}
                            >
                                {exploreMode ? (
                                    <>
                                        <FlaskConical className="h-3 w-3" />
                                        Explore Mode
                                    </>
                                ) : (
                                    'Theme Variants'
                                )}
                            </div>

                            {exploreMode ? (
                                // Explore Mode: Show all playground themes
                                playgroundThemes.map((pgTheme) => {
                                    const isSelected = selectedVariant === pgTheme.id
                                    return (
                                        <button
                                            key={pgTheme.id}
                                            onClick={() => handleExploreSelect(pgTheme.id)}
                                            className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-800"
                                            style={{
                                                backgroundColor: isSelected ? '#27272a' : 'transparent',
                                                color: isSelected ? '#ffffff' : '#d4d4d8'
                                            }}
                                        >
                                            <div
                                                className="h-3 w-3 rounded-full border"
                                                style={{
                                                    borderColor: '#52525b',
                                                    backgroundColor: pgTheme.colors.background || '#09090b',
                                                }}
                                            />
                                            <span className="flex-1">{pgTheme.name}</span>
                                            {isSelected && <Check className="h-4 w-4 text-amber-400" />}
                                        </button>
                                    )
                                })
                            ) : (
                                // Default Mode: Show curated themeVariants
                                variants?.map((variant) => {
                                    const isSelected = selectedVariant === variant.id || (!selectedVariant && variant === variants[0])
                                    const playgroundTheme = getPlaygroundThemeById(variant.playgroundThemeId)

                                    return (
                                        <button
                                            key={variant.id}
                                            onClick={() => handleVariantSelect(variant)}
                                            className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors"
                                            style={{
                                                backgroundColor: isSelected ? '#27272a' : 'transparent',
                                                color: isSelected ? '#ffffff' : '#d4d4d8'
                                            }}
                                        >
                                            <div
                                                className="h-3 w-3 rounded-full border"
                                                style={{
                                                    borderColor: '#52525b',
                                                    backgroundColor: playgroundTheme?.colors.background || '#09090b',
                                                }}
                                            />
                                            <span className="flex-1">{variant.name}</span>
                                            {isSelected && <Check className="h-4 w-4 text-emerald-400" />}
                                        </button>
                                    )
                                })
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

