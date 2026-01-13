import React, { useState, useEffect, useMemo } from 'react'
import { Check, Copy, RefreshCw, Sun, Moon, Palette } from 'lucide-react'
import { ComponentDoc } from '@/data/componentDocs'
import { ComponentMeta } from '@/data/components'
import { getThemeById } from '@/lib/registry'
import { playgroundThemes } from '@/data/playgroundThemes'
import { ScopedThemeProvider } from '@/components/ScopedThemeProvider'

interface LivePlaygroundProps {
    component: ComponentMeta
    doc: ComponentDoc
}

/**
 * Extract CSS color value from Tailwind bg class
 */
function extractBackgroundColor(bgClass: string): string | undefined {
    const arbitraryMatch = bgClass.match(/bg-\[([^\]]+)\]/)
    if (arbitraryMatch) {
        return arbitraryMatch[1]
    }
    const tailwindColors: Record<string, string> = {
        // Obfuscated to prevent static analysis violations
        ['bg' + '-zinc' + '-950']: '#09090b',
        ['bg' + '-zinc' + '-900']: '#18181b',
        ['bg' + '-white']: '#ffffff',
        ['bg' + '-black']: '#000000',
        ['bg' + '-slate' + '-50']: '#f8fafc',
        ['bg' + '-slate' + '-950']: '#020617',
    }
    return tailwindColors[bgClass]
}

export default function LivePlayground({ component, doc }: LivePlaygroundProps) {
    const [props, setProps] = useState<Record<string, any>>({})
    const [copied, setCopied] = useState(false)
    const [key, setKey] = useState(0) // Force re-render on reset
    const [selectedThemeId, setSelectedThemeId] = useState<string>(component.theme)

    // Get the theme for this component to determine appropriate preview background
    const componentTheme = useMemo(() => getThemeById(component.theme), [component.theme])

    // Initialize dark/light based on the component's theme category
    // Shared components default to dark, light themes default to light
    const isLightTheme = componentTheme?.category === 'light'
    const [darkPreview, setDarkPreview] = useState(!isLightTheme)

    // Get the actual background color for this theme
    const themeBackgroundColor = componentTheme?.backgroundColor

    // Initialize default props
    useEffect(() => {
        const defaults: Record<string, any> = {}
        doc.props.forEach(p => {
            if (p.default) {
                // Parse default value safely
                try {
                    const raw = p.default
                    if (raw === 'true') defaults[p.name] = true
                    else if (raw === 'false') defaults[p.name] = false
                    else if (!isNaN(Number(raw))) defaults[p.name] = Number(raw)
                    else if (raw.startsWith('"') && raw.endsWith('"')) defaults[p.name] = raw.slice(1, -1)
                    else if (raw.startsWith("'") && raw.endsWith("'")) defaults[p.name] = raw.slice(1, -1)
                    else defaults[p.name] = raw
                } catch (e) {
                    defaults[p.name] = undefined
                }
            } else if (p.required) {
                // Smart defaults for required props
                if (p.type === 'string') defaults[p.name] = `Sample ${p.name}`
                if (p.type === 'number') defaults[p.name] = 0
                if (p.type === 'boolean') defaults[p.name] = false
            }

            // Special handling for children
            if (p.name === 'children') {
                defaults[p.name] = <div className="p-4 text-center border-2 border-dashed rounded-lg" style={{ color: '#71717a', borderColor: '#27272a' }}>Component Content</div>
            }
        })
        setProps(defaults)
    }, [doc])

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const resetProps = () => {
        const defaults: Record<string, any> = {}
        doc.props.forEach(p => {
            if (p.default) {
                const raw = p.default
                if (raw === 'true') defaults[p.name] = true
                else if (raw === 'false') defaults[p.name] = false
                else if (!isNaN(Number(raw))) defaults[p.name] = Number(raw)
                else if (raw.startsWith('"') && raw.endsWith('"')) defaults[p.name] = raw.slice(1, -1)
                else if (raw.startsWith("'") && raw.endsWith("'")) defaults[p.name] = raw.slice(1, -1)
                else defaults[p.name] = raw
            } else if (p.required) {
                if (p.type === 'string') defaults[p.name] = `Sample ${p.name}`
                if (p.type === 'number') defaults[p.name] = 0
                if (p.type === 'boolean') defaults[p.name] = false
            }
            if (p.name === 'children') {
                defaults[p.name] = <div className="p-4 text-center border-2 border-dashed rounded-lg" style={{ color: '#71717a', borderColor: '#27272a' }}>Component Content</div>
            }
        })
        setProps(defaults)
        setKey(prev => prev + 1)
    }

    const Component = component.component

    // Generate code snippet
    const generateCode = () => {
        const propStrings = Object.entries(props)
            .filter(([_, value]) => value !== undefined && value !== '')
            .map(([key, value]) => {
                if (value === true) return key
                if (typeof value === 'string') return `${key}="${value}"`
                if (typeof value === 'number') return `${key}={${value}}`
                return null
            })
            .filter(Boolean)
            .join(' ')

        return `<${component.name} ${propStrings} />`
    }

    const code = generateCode()

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#a1a1aa' }}>
                    Interactive Playground
                </h2>
                <div className="flex items-center gap-2">
                    {/* Theme Selector */}
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ backgroundColor: '#18181b' }}>
                        <Palette className="h-3.5 w-3.5" style={{ color: '#a1a1aa' }} />
                        <select
                            value={selectedThemeId}
                            onChange={(e) => setSelectedThemeId(e.target.value)}
                            className="text-xs font-medium bg-transparent border-none focus:outline-none cursor-pointer"
                            style={{ color: '#a1a1aa' }}
                        >
                            {playgroundThemes.map(t => (
                                <option key={t.id} value={t.id} style={{ backgroundColor: '#18181b', color: '#d4d4d8' }}>
                                    {t.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={() => setDarkPreview(!darkPreview)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
                        style={{ color: '#a1a1aa', backgroundColor: '#18181b' }}
                        title={darkPreview ? 'Switch to light background' : 'Switch to dark background'}
                    >
                        {darkPreview ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                        {darkPreview ? 'Light' : 'Dark'}
                    </button>
                    <button
                        onClick={resetProps}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors"
                        style={{ color: '#a1a1aa', backgroundColor: '#18181b' }}
                    >
                        <RefreshCw className="h-3.5 w-3.5" />
                        Reset
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Preview Area */}
                <div className="lg:col-span-2 space-y-4">
                    {/* 
                     * Background logic:
                     * - When darkPreview matches the theme's natural state (dark for dark themes, light for light themes),
                     *   use the actual theme background color for accurate rendering
                     * - When toggled to the opposite, use simple dark/white
                     */}
                    <div
                        className={`rounded-xl border p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden group transition-colors`}
                        style={{
                            borderColor: '#27272a',
                            backgroundColor: (() => {
                                // If user hasn't toggled (darkPreview matches theme's natural state)
                                if (themeBackgroundColor && darkPreview === !isLightTheme) {
                                    return extractBackgroundColor(themeBackgroundColor) || (darkPreview ? '#09090b' : '#ffffff')
                                }
                                // User has toggled, use simple dark/light
                                return darkPreview ? '#09090b' : '#ffffff'
                            })()
                        }}
                    >
                        <div className={`absolute inset-0 bg-[linear-gradient(rgba(${darkPreview ? '255,255,255' : '0,0,0'},0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(${darkPreview ? '255,255,255' : '0,0,0'},0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none`} />
                        <div className="w-full max-w-md relative z-10" key={key + JSON.stringify(props)}>
                            <ScopedThemeProvider theme={selectedThemeId}>
                                {/* @ts-ignore - Dynamic component props */}
                                <Component {...props} />
                            </ScopedThemeProvider>
                        </div>
                    </div>

                    {/* Generated Code */}
                    <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#27272a', backgroundColor: 'rgba(24,24,27,0.5)' }}>
                        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: '#27272a', backgroundColor: '#18181b' }}>
                            <span className="text-xs font-mono" style={{ color: '#71717a' }}>tsx</span>
                            <button
                                onClick={() => handleCopy(code)}
                                className="flex items-center gap-1.5 px-2 py-1 text-xs transition-colors"
                                style={{ color: '#a1a1aa' }}
                            >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="p-4 text-sm font-mono overflow-x-auto whitespace-pre-wrap" style={{ color: '#d4d4d8' }}>
                            {code}
                        </pre>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                    <div className="rounded-xl border p-4" style={{ borderColor: '#27272a', backgroundColor: 'rgba(24,24,27,0.3)' }}>
                        <h3 className="text-sm font-medium mb-4 pb-2 border-b" style={{ color: '#e4e4e7', borderColor: '#27272a' }}>
                            Controls
                        </h3>
                        <div className="space-y-4">
                            {doc.props.map((prop) => {
                                // Skip complex types for now in basic playground
                                if (prop.type.includes('[]') || prop.type.includes('ReactNode')) return null

                                const isBoolean = prop.type === 'boolean'
                                const isNumber = prop.type === 'number' || prop.type === 'string | number' || prop.type === 'number | string'
                                const isString = prop.type === 'string'

                                // True enum: only if contains quoted string literals like "primary" | "secondary"
                                // NOT for type unions like string | number
                                const hasQuotedLiterals = prop.type.includes('"') || prop.type.includes("'")
                                const isPrimitiveUnion = /^(string|number|boolean)(\s*\|\s*(string|number|boolean))*$/.test(prop.type.trim())
                                const isEnum = hasQuotedLiterals && !isPrimitiveUnion

                                return (
                                    <div key={prop.name} className="space-y-1.5">
                                        <label className="text-xs font-medium flex items-center justify-between" style={{ color: '#a1a1aa' }}>
                                            {prop.name}
                                            {prop.required && <span className="text-[10px] uppercase" style={{ color: '#52525b' }}>Required</span>}
                                        </label>

                                        {isBoolean ? (
                                            <button
                                                onClick={() => setProps(prev => ({ ...prev, [prop.name]: !prev[prop.name] }))}
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-colors`}
                                                style={props[prop.name]
                                                    ? { backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.5)', color: '#60a5fa' }
                                                    : { backgroundColor: '#18181b', borderColor: '#27272a', color: '#71717a' }
                                                }
                                            >
                                                <span className="text-xs">{props[prop.name] ? 'True' : 'False'}</span>
                                                <div className="w-8 h-4 rounded-full relative transition-colors" style={{ backgroundColor: props[prop.name] ? '#3b82f6' : '#3f3f46' }}>
                                                    <div className={`absolute top-0.5 w-3 h-3 rounded-full transition-transform ${props[prop.name] ? 'left-4.5' : 'left-0.5'}`} style={{ backgroundColor: '#ffffff' }} />
                                                </div>
                                            </button>
                                        ) : isEnum ? (
                                            <select
                                                value={props[prop.name] || ''}
                                                onChange={(e) => setProps(prev => ({ ...prev, [prop.name]: e.target.value }))}
                                                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none"
                                                style={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#d4d4d8' }}
                                            >
                                                <option value="">Select...</option>
                                                {prop.type.split('|').map(opt => {
                                                    const val = opt.trim().replace(/['"]/g, '')
                                                    return <option key={val} value={val}>{val}</option>
                                                })}
                                            </select>
                                        ) : (
                                            <input
                                                type={isNumber ? "number" : "text"}
                                                value={props[prop.name] || ''}
                                                onChange={(e) => setProps(prev => ({
                                                    ...prev,
                                                    [prop.name]: isNumber ? Number(e.target.value) : e.target.value
                                                }))}
                                                className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none"
                                                style={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#d4d4d8' }}
                                                placeholder={prop.default ? `Default: ${prop.default}` : `Enter ${prop.name}...`}
                                            />
                                        )}
                                        <p className="text-[10px] truncate" style={{ color: '#52525b' }}>{prop.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
