import React, { useState, useEffect, useMemo } from 'react'
import { Check, Copy, RefreshCw, Sun, Moon } from 'lucide-react'
import { ComponentDoc } from '@/data/componentDocs'
import { ComponentMeta } from '@/data/components'
import { getThemeById } from '@/data/themes'

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
        'bg-zinc-950': '#09090b',
        'bg-zinc-900': '#18181b',
        'bg-white': '#ffffff',
        'bg-black': '#000000',
        'bg-slate-50': '#f8fafc',
        'bg-slate-950': '#020617',
    }
    return tailwindColors[bgClass]
}

export default function LivePlayground({ component, doc }: LivePlaygroundProps) {
    const [props, setProps] = useState<Record<string, any>>({})
    const [copied, setCopied] = useState(false)
    const [key, setKey] = useState(0) // Force re-render on reset
    
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
                defaults[p.name] = <div className="p-4 text-center text-zinc-500 border-2 border-dashed border-zinc-800 rounded-lg">Component Content</div>
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
                defaults[p.name] = <div className="p-4 text-center text-zinc-500 border-2 border-dashed border-zinc-800 rounded-lg">Component Content</div>
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
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                    Interactive Playground
                </h2>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setDarkPreview(!darkPreview)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 rounded-lg hover:text-white hover:bg-zinc-800 transition-colors"
                        title={darkPreview ? 'Switch to light background' : 'Switch to dark background'}
                    >
                        {darkPreview ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                        {darkPreview ? 'Light' : 'Dark'}
                    </button>
                    <button
                        onClick={resetProps}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 rounded-lg hover:text-white hover:bg-zinc-800 transition-colors"
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
                        className={`rounded-xl border border-zinc-800 p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden group transition-colors`}
                        style={{ 
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
                            {/* @ts-ignore - Dynamic component props */}
                            <Component {...props} />
                        </div>
                    </div>

                    {/* Generated Code */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900">
                            <span className="text-xs text-zinc-500 font-mono">tsx</span>
                            <button
                                onClick={() => handleCopy(code)}
                                className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white transition-colors"
                            >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                        <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap">
                            {code}
                        </pre>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-4">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
                        <h3 className="text-sm font-medium text-zinc-200 mb-4 pb-2 border-b border-zinc-800">
                            Controls
                        </h3>
                        <div className="space-y-4">
                            {doc.props.map((prop) => {
                                // Skip complex types for now in basic playground
                                if (prop.type.includes('[]') || prop.type.includes('ReactNode')) return null

                                const isBoolean = prop.type === 'boolean'
                                const isNumber = prop.type === 'number'
                                const isString = prop.type === 'string'
                                const isEnum = prop.type.includes('|') || prop.type.includes('"')

                                return (
                                    <div key={prop.name} className="space-y-1.5">
                                        <label className="text-xs font-medium text-zinc-400 flex items-center justify-between">
                                            {prop.name}
                                            {prop.required && <span className="text-[10px] text-zinc-600 uppercase">Required</span>}
                                        </label>

                                        {isBoolean ? (
                                            <button
                                                onClick={() => setProps(prev => ({ ...prev, [prop.name]: !prev[prop.name] }))}
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-colors ${props[prop.name]
                                                    ? 'bg-blue-500/10 border-blue-500/50 text-blue-400'
                                                    : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700'
                                                    }`}
                                            >
                                                <span className="text-xs">{props[prop.name] ? 'True' : 'False'}</span>
                                                <div className={`w-8 h-4 rounded-full relative transition-colors ${props[prop.name] ? 'bg-blue-500' : 'bg-zinc-700'}`}>
                                                    <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${props[prop.name] ? 'left-4.5' : 'left-0.5'}`} />
                                                </div>
                                            </button>
                                        ) : isEnum ? (
                                            <select
                                                value={props[prop.name] || ''}
                                                onChange={(e) => setProps(prev => ({ ...prev, [prop.name]: e.target.value }))}
                                                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 focus:outline-none focus:border-zinc-700"
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
                                                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 focus:outline-none focus:border-zinc-700 placeholder-zinc-700"
                                                placeholder={prop.default ? `Default: ${prop.default}` : `Enter ${prop.name}...`}
                                            />
                                        )}
                                        <p className="text-[10px] text-zinc-600 truncate">{prop.description}</p>
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
