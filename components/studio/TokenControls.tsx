import React from 'react'
import { Sliders, Type, Palette, Component, Box, Maximize } from 'lucide-react'
import type { PlaygroundTheme } from '@/data/playgroundThemes'
import { getRadius, Size } from '@/data/variants'
import { ColorPicker } from './ColorPicker'

interface TokenControlsProps {
    theme: PlaygroundTheme
    onUpdate: (newTheme: PlaygroundTheme) => void
    height?: string
    selectedSize: Size
    onSizeChange: (size: Size) => void
}

export function TokenControls({ theme, onUpdate, height = 'calc(100vh - 64px)', selectedSize, onSizeChange }: TokenControlsProps) {
    const updateColor = (key: keyof PlaygroundTheme['colors'], value: string) => {
        onUpdate({
            ...theme,
            colors: {
                ...theme.colors,
                [key]: value
            }
        })
    }

    const updateTypography = (key: keyof PlaygroundTheme['typography'], value: string | number) => {
        onUpdate({
            ...theme,
            typography: {
                ...theme.typography,
                [key]: value
            }
        })
    }

    const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            marginTop: '24px',
            paddingBottom: '8px',
            borderBottom: `1px solid ${theme.colors.border}`,
            color: theme.colors.foreground,
            fontSize: '13px',
            fontWeight: 600
        }}>
            <Icon size={14} style={{ color: theme.colors.primary }} />
            {title}
        </div>
    )

    return (
        <div style={{
            width: '320px',
            height,
            backgroundColor: theme.colors.card,
            borderLeft: `1px solid ${theme.colors.border}`,
            borderRight: `1px solid ${theme.colors.border}`,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{ marginBottom: '8px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: 600, color: theme.colors.foreground }}>Studio</h2>
                <p style={{ fontSize: '13px', color: theme.colors.mutedForeground }}>
                    Customize design tokens
                </p>
            </div>

            {/* Preview Scale Section */}
            <SectionHeader icon={Maximize} title="Preview Scale" />
            <div style={{ display: 'flex', gap: '4px', backgroundColor: theme.colors.muted, padding: '4px', borderRadius: getRadius(theme.radius) }}>
                {(['sm', 'md', 'lg'] as Size[]).map((size) => (
                    <button
                        key={size}
                        onClick={() => onSizeChange(size)}
                        style={{
                            flex: 1,
                            padding: '8px 0',
                            fontSize: '12px',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: selectedSize === size ? theme.colors.primary : 'transparent',
                            color: selectedSize === size ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                            cursor: 'pointer',
                            boxShadow: selectedSize === size ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                            transition: 'all 0.2s',
                            fontWeight: selectedSize === size ? 600 : 400
                        }}
                    >
                        {size.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Colors Section */}
            <SectionHeader icon={Palette} title="Colors" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ColorPicker
                    label="Primary"
                    color={theme.colors.primary}
                    onChange={(c) => updateColor('primary', c)}
                    theme={theme}
                />
                <ColorPicker
                    label="Background"
                    color={theme.colors.background}
                    onChange={(c) => updateColor('background', c)}
                    theme={theme}
                />
                <ColorPicker
                    label="App Accent"
                    color={theme.colors.accent}
                    onChange={(c) => updateColor('accent', c)}
                    theme={theme}
                />
                <ColorPicker
                    label="Foreground (Text)"
                    color={theme.colors.foreground}
                    onChange={(c) => updateColor('foreground', c)}
                    theme={theme}
                />
                <ColorPicker
                    label="Muted"
                    color={theme.colors.muted}
                    onChange={(c) => updateColor('muted', c)}
                    theme={theme}
                />
                <ColorPicker
                    label="Border"
                    color={theme.colors.border}
                    onChange={(c) => updateColor('border', c)}
                    theme={theme}
                />
            </div>

            {/* Radius Section */}
            <SectionHeader icon={Box} title="Radius & Shape" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: theme.colors.mutedForeground }}>
                    Corner Radius: <span style={{ color: theme.colors.primary }}>{theme.radius}</span>
                </label>
                <div style={{ display: 'flex', gap: '4px', backgroundColor: theme.colors.muted, padding: '4px', borderRadius: getRadius(theme.radius) }}>
                    {['none', 'sm', 'md', 'lg', 'xl', 'full'].map((r) => (
                        <button
                            key={r}
                            onClick={() => onUpdate({ ...theme, radius: r as any })}
                            style={{
                                flex: 1,
                                padding: '6px 0',
                                fontSize: '11px',
                                borderRadius: '4px',
                                border: 'none',
                                backgroundColor: theme.radius === r ? theme.colors.background : 'transparent',
                                color: theme.radius === r ? theme.colors.foreground : theme.colors.mutedForeground,
                                cursor: 'pointer',
                                boxShadow: theme.radius === r ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                                transition: 'all 0.2s',
                                fontWeight: theme.radius === r ? 600 : 400
                            }}
                        >
                            {r === 'none' ? '0' : r.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Typography Section */}
            <SectionHeader icon={Type} title="Typography" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Font Family */}
                <div>
                    <label style={{ fontSize: '12px', fontWeight: 500, color: theme.colors.mutedForeground }}>Font Family</label>
                    <select
                        value={theme.typography.fontFamily.split(',')[0].replace(/"/g, '')}
                        onChange={(e) => updateTypography('fontFamily', `"${e.target.value}", system-ui, sans-serif`)}
                        style={{
                            width: '100%',
                            marginTop: '6px',
                            padding: '8px',
                            backgroundColor: theme.colors.secondary,
                            border: `1px solid ${theme.colors.border}`,
                            color: theme.colors.foreground,
                            borderRadius: getRadius('sm'),
                            fontSize: '13px',
                            outline: 'none'
                        }}
                    >
                        <option value="Inter">Inter (Default)</option>
                        <option value="Helvetica Neue">Helvetica Neue</option>
                        <option value="Geist Mono">Geist Mono</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New (Code)</option>
                    </select>
                </div>

                {/* Weights */}
                <div>
                    <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 500, color: theme.colors.mutedForeground, marginBottom: '6px' }}>
                        Heading Weight: <span style={{ color: theme.colors.primary }}>{theme.typography.headingWeight}</span>
                    </label>
                    <input
                        type="range"
                        min="100"
                        max="900"
                        step="100"
                        value={theme.typography.headingWeight}
                        onChange={(e) => updateTypography('headingWeight', parseInt(e.target.value))}
                        style={{ width: '100%', accentColor: theme.colors.primary }}
                    />
                </div>
            </div>

            {/* Effects Section */}
            <SectionHeader icon={Component} title="Effects" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '12px', fontWeight: 500, color: theme.colors.mutedForeground }}>
                    Shadow Depth: <span style={{ color: theme.colors.primary }}>{theme.shadow}</span>
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px', backgroundColor: theme.colors.muted, padding: '4px', borderRadius: getRadius(theme.radius) }}>
                    {['none', 'sm', 'md', 'lg', 'xl'].map((s) => (
                        <button
                            key={s}
                            onClick={() => onUpdate({ ...theme, shadow: s as any })}
                            style={{
                                padding: '6px 0',
                                fontSize: '11px',
                                borderRadius: '4px',
                                border: 'none',
                                backgroundColor: theme.shadow === s ? theme.colors.background : 'transparent',
                                color: theme.shadow === s ? theme.colors.foreground : theme.colors.mutedForeground,
                                cursor: 'pointer',
                                boxShadow: theme.shadow === s ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                                transition: 'all 0.2s',
                                fontWeight: theme.shadow === s ? 600 : 400
                            }}
                        >
                            {s === 'none' ? '0' : s.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    )
}
