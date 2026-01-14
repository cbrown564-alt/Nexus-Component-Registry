import { motion } from 'framer-motion'
import { useState } from 'react'
import { Zap, Copy, Check, Play, Code } from 'lucide-react'
import { hooks, type HookMeta } from '@/data/hooks'
import { useTheme } from '@/context/ThemeContext'
import { getRadius } from '@/data/variants'
import { HookPreview, type KnobConfig } from '@/components/hooks'
import {
    SpotlightDemo,
    DebounceDemo,
    MousePositionDemo,
    ClickOutsideDemo,
    CopyToClipboardDemo,
    AnimatedMountDemo,
    MediaQueryDemo,
} from '@/components/hooks/demos'

type TabType = 'demo' | 'code'

// Define which hooks have interactive demos and their knob configs
const hookDemos: Record<string, {
    component: React.ComponentType<{ values: Record<string, number | string | boolean> }>
    knobs?: KnobConfig[]
}> = {
    'use-spotlight': { component: SpotlightDemo },
    'use-mouse-position': { component: MousePositionDemo },
    'use-debounce': {
        component: DebounceDemo,
        knobs: [{ id: 'delay', label: 'Delay (ms)', type: 'number', value: 300, min: 50, max: 1000, step: 50 }],
    },
    'use-media-query': { component: MediaQueryDemo },
    'use-click-outside': { component: ClickOutsideDemo },
    'use-copy-to-clipboard': { component: CopyToClipboardDemo },
    'use-animated-mount': {
        component: AnimatedMountDemo,
        knobs: [{ id: 'staggerDelay', label: 'Stagger Delay (ms)', type: 'number', value: 50, min: 10, max: 200, step: 10 }],
    },
}

export default function HooksPage() {
    const { currentPlaygroundTheme: theme } = useTheme()
    const [selectedHook, setSelectedHook] = useState<HookMeta | null>(null)
    const [copied, setCopied] = useState(false)
    const [activeTab, setActiveTab] = useState<TabType>('demo')

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const getCategoryColor = (category: HookMeta['category']) => {
        const colors: Record<HookMeta['category'], { bg: string; text: string }> = {
            interaction: { bg: `${theme.colors.primary}20`, text: theme.colors.primary },
            state: { bg: '#3b82f620', text: '#3b82f6' },
            utility: { bg: '#f59e0b20', text: '#f59e0b' },
            animation: { bg: '#a855f720', text: '#a855f7' },
            context: { bg: '#10b98120', text: '#10b981' },
        }
        return colors[category]
    }

    const hasDemo = selectedHook ? hookDemos[selectedHook.id] : false

    return (
        <div
            style={{
                position: 'relative',
                zIndex: 10,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '48px 32px',
                fontFamily: theme.typography.fontFamily,
            }}
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: '48px' }}
            >
                <h1
                    style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: theme.colors.foreground,
                        marginBottom: '12px',
                    }}
                >
                    Hooks Laboratory
                </h1>
                <p style={{ fontSize: '16px', color: theme.colors.mutedForeground, maxWidth: '600px' }}>
                    {hooks.length} reusable React hooks with interactive demos. Experiment with parameters
                    in real-time and copy to your project.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '32px' }}>
                {/* Hook List */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                >
                    {hooks.map((hook) => {
                        const isSelected = selectedHook?.id === hook.id
                        const categoryColors = getCategoryColor(hook.category)
                        const demoAvailable = Boolean(hookDemos[hook.id])

                        return (
                            <button
                                key={hook.id}
                                onClick={() => {
                                    setSelectedHook(hook)
                                    setActiveTab(demoAvailable ? 'demo' : 'code')
                                }}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '14px 16px',
                                    borderRadius: getRadius(theme.radius),
                                    border: `1px solid ${isSelected ? theme.colors.primary : theme.colors.border}`,
                                    backgroundColor: isSelected ? `${theme.colors.primary}10` : theme.colors.card,
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '8px',
                                            backgroundColor: categoryColors.bg,
                                        }}
                                    >
                                        <Zap size={16} style={{ color: categoryColors.text }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <code
                                            style={{
                                                fontSize: '13px',
                                                fontWeight: 600,
                                                color: theme.colors.foreground,
                                            }}
                                        >
                                            {hook.name}
                                        </code>
                                        {demoAvailable && (
                                            <span
                                                style={{
                                                    marginLeft: '8px',
                                                    padding: '2px 6px',
                                                    fontSize: '9px',
                                                    fontWeight: 600,
                                                    textTransform: 'uppercase',
                                                    backgroundColor: theme.colors.primary,
                                                    color: theme.colors.primaryForeground,
                                                    borderRadius: '4px',
                                                }}
                                            >
                                                Live
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p
                                    style={{
                                        fontSize: '12px',
                                        color: theme.colors.mutedForeground,
                                        paddingLeft: '44px',
                                        lineHeight: 1.4,
                                        display: '-webkit-box',
                                        WebkitLineClamp: 1,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {hook.description}
                                </p>
                            </button>
                        )
                    })}
                </motion.div>

                {/* Hook Detail */}
                <div style={{ minHeight: '600px' }}>
                    {selectedHook ? (
                        <motion.div
                            key={selectedHook.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                        >
                            {/* Header */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <code
                                        style={{
                                            fontSize: '24px',
                                            fontWeight: 700,
                                            color: theme.colors.foreground,
                                        }}
                                    >
                                        {selectedHook.name}
                                    </code>
                                    <span
                                        style={{
                                            padding: '4px 10px',
                                            fontSize: '11px',
                                            fontWeight: 500,
                                            backgroundColor: getCategoryColor(selectedHook.category).bg,
                                            color: getCategoryColor(selectedHook.category).text,
                                            borderRadius: '6px',
                                        }}
                                    >
                                        {selectedHook.category}
                                    </span>
                                </div>
                                <p style={{ fontSize: '15px', color: theme.colors.mutedForeground }}>
                                    {selectedHook.description}
                                </p>
                            </div>

                            {/* Tab Navigation */}
                            {hasDemo && (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '4px',
                                        padding: '4px',
                                        backgroundColor: theme.colors.secondary,
                                        borderRadius: getRadius(theme.radius),
                                        width: 'fit-content',
                                    }}
                                >
                                    <button
                                        onClick={() => setActiveTab('demo')}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '8px 16px',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            borderRadius: getRadius(theme.radius),
                                            border: 'none',
                                            backgroundColor: activeTab === 'demo' ? theme.colors.card : 'transparent',
                                            color: activeTab === 'demo' ? theme.colors.foreground : theme.colors.mutedForeground,
                                            cursor: 'pointer',
                                            transition: 'all 0.15s',
                                            boxShadow: activeTab === 'demo' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                                        }}
                                    >
                                        <Play size={14} />
                                        Live Demo
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('code')}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '8px 16px',
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            borderRadius: getRadius(theme.radius),
                                            border: 'none',
                                            backgroundColor: activeTab === 'code' ? theme.colors.card : 'transparent',
                                            color: activeTab === 'code' ? theme.colors.foreground : theme.colors.mutedForeground,
                                            cursor: 'pointer',
                                            transition: 'all 0.15s',
                                            boxShadow: activeTab === 'code' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                                        }}
                                    >
                                        <Code size={14} />
                                        API Reference
                                    </button>
                                </div>
                            )}

                            {/* Live Demo Tab */}
                            {activeTab === 'demo' && hasDemo && (
                                <HookPreview
                                    title={`${selectedHook.name} Demo`}
                                    description={`Interactive demonstration of the ${selectedHook.name} hook`}
                                    knobs={hookDemos[selectedHook.id]?.knobs}
                                >
                                    {(values) => {
                                        const DemoComponent = hookDemos[selectedHook.id]?.component
                                        return DemoComponent ? <DemoComponent values={values} /> : null
                                    }}
                                </HookPreview>
                            )}

                            {/* API Reference Tab */}
                            {(activeTab === 'code' || !hasDemo) && (
                                <>
                                    {/* Parameters */}
                                    {selectedHook.parameters.length > 0 && (
                                        <div>
                                            <h3
                                                style={{
                                                    fontSize: '11px',
                                                    fontWeight: 600,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    color: theme.colors.mutedForeground,
                                                    marginBottom: '12px',
                                                }}
                                            >
                                                Parameters
                                            </h3>
                                            <div
                                                style={{
                                                    borderRadius: getRadius(theme.radius),
                                                    border: `1px solid ${theme.colors.border}`,
                                                    backgroundColor: theme.colors.card,
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                    <thead>
                                                        <tr style={{ borderBottom: `1px solid ${theme.colors.border}`, backgroundColor: theme.colors.secondary }}>
                                                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: theme.colors.mutedForeground }}>Name</th>
                                                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: theme.colors.mutedForeground }}>Type</th>
                                                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: theme.colors.mutedForeground }}>Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {selectedHook.parameters.map((param, i) => (
                                                            <tr key={param.name} style={{ borderBottom: i < selectedHook.parameters.length - 1 ? `1px solid ${theme.colors.border}` : 'none' }}>
                                                                <td style={{ padding: '10px 16px' }}>
                                                                    <code style={{ fontSize: '13px', color: theme.colors.foreground }}>
                                                                        {param.name}
                                                                        {param.optional && <span style={{ color: theme.colors.mutedForeground }}>?</span>}
                                                                    </code>
                                                                </td>
                                                                <td style={{ padding: '10px 16px' }}>
                                                                    <code style={{ fontSize: '12px', color: '#f59e0b' }}>{param.type}</code>
                                                                </td>
                                                                <td style={{ padding: '10px 16px', fontSize: '13px', color: theme.colors.mutedForeground }}>{param.description}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}

                                    {/* Returns */}
                                    <div>
                                        <h3
                                            style={{
                                                fontSize: '11px',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                color: theme.colors.mutedForeground,
                                                marginBottom: '12px',
                                            }}
                                        >
                                            Returns
                                        </h3>
                                        <div
                                            style={{
                                                borderRadius: getRadius(theme.radius),
                                                border: `1px solid ${theme.colors.border}`,
                                                backgroundColor: theme.colors.card,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                <thead>
                                                    <tr style={{ borderBottom: `1px solid ${theme.colors.border}`, backgroundColor: theme.colors.secondary }}>
                                                        <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: theme.colors.mutedForeground }}>Name</th>
                                                        <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: theme.colors.mutedForeground }}>Type</th>
                                                        <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: theme.colors.mutedForeground }}>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedHook.returns.map((ret, i) => (
                                                        <tr key={ret.name} style={{ borderBottom: i < selectedHook.returns.length - 1 ? `1px solid ${theme.colors.border}` : 'none' }}>
                                                            <td style={{ padding: '10px 16px' }}>
                                                                <code style={{ fontSize: '13px', color: theme.colors.foreground }}>{ret.name}</code>
                                                            </td>
                                                            <td style={{ padding: '10px 16px' }}>
                                                                <code style={{ fontSize: '12px', color: '#10b981' }}>{ret.type}</code>
                                                            </td>
                                                            <td style={{ padding: '10px 16px', fontSize: '13px', color: theme.colors.mutedForeground }}>{ret.description}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Example */}
                                    <div>
                                        <h3
                                            style={{
                                                fontSize: '11px',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                color: theme.colors.mutedForeground,
                                                marginBottom: '12px',
                                            }}
                                        >
                                            Example
                                        </h3>
                                        <div
                                            style={{
                                                borderRadius: getRadius(theme.radius),
                                                border: `1px solid ${theme.colors.border}`,
                                                backgroundColor: theme.colors.card,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '8px 16px',
                                                    borderBottom: `1px solid ${theme.colors.border}`,
                                                    backgroundColor: theme.colors.secondary,
                                                }}
                                            >
                                                <span style={{ fontSize: '11px', fontFamily: 'monospace', color: theme.colors.mutedForeground }}>tsx</span>
                                                <button
                                                    onClick={() => handleCopy(selectedHook.example)}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        padding: '4px 8px',
                                                        fontSize: '11px',
                                                        color: theme.colors.mutedForeground,
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        borderRadius: '4px',
                                                        transition: 'color 0.15s',
                                                    }}
                                                >
                                                    {copied ? <Check size={12} /> : <Copy size={12} />}
                                                    {copied ? 'Copied!' : 'Copy'}
                                                </button>
                                            </div>
                                            <pre
                                                style={{
                                                    padding: '16px',
                                                    fontSize: '13px',
                                                    fontFamily: 'monospace',
                                                    color: theme.colors.foreground,
                                                    overflowX: 'auto',
                                                    margin: 0,
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {selectedHook.example}
                                            </pre>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                minHeight: '400px',
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <Zap size={48} style={{ color: theme.colors.muted, marginBottom: '16px' }} />
                                <p style={{ color: theme.colors.mutedForeground }}>Select a hook to explore</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
