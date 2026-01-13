import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Palette, Check } from 'lucide-react'
import { Template, ThemeVariant } from '@/lib/registry'
import { getPlaygroundThemeById } from '@/data/playgroundThemes'
import { useTheme } from '@/context/ThemeContext'

interface ThemeSwitcherProps {
    template: Template
}

export default function ThemeSwitcher({ template }: ThemeSwitcherProps) {
    const [isOpen, setIsOpen] = useState(false)
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

    // Don't show switcher if no variants defined
    if (!variants || variants.length <= 1) {
        return null
    }

    // Get current variant display name
    const currentVariant = selectedVariant
        ? variants.find(v => v.id === selectedVariant)
        : variants[0]

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border transition-colors"
                style={{
                    backgroundColor: isOpen ? '#27272a' : 'transparent',
                    borderColor: '#3f3f46',
                    color: '#e4e4e7'
                }}
            >
                <Palette className="h-4 w-4" style={{ color: '#a1a1aa' }} />
                <span>
                    {currentVariant?.name || 'Theme'}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} style={{ color: '#71717a' }} />
            </button>

            {isOpen && (
                <div
                    className="absolute top-full right-0 mt-2 w-48 py-1 rounded-lg shadow-xl z-50 border"
                    style={{ backgroundColor: '#18181b', borderColor: '#3f3f46' }}
                >
                    <div
                        className="px-3 py-2 text-xs uppercase tracking-wider border-b"
                        style={{ color: '#71717a', borderColor: '#27272a' }}
                    >
                        Theme Variants
                    </div>
                    {variants.map((variant) => {
                        const isSelected = selectedVariant === variant.id || (!selectedVariant && variant === variants[0])
                        const playgroundTheme = getPlaygroundThemeById(variant.playgroundThemeId)

                        return (
                            <button
                                key={variant.id}
                                onClick={() => handleVariantSelect(variant)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors`}
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
                    })}
                </div>
            )}
        </div>
    )
}
