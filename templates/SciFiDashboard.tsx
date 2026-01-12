import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Activity, Dna, Settings, Database, Hexagon, Power, Shield, Scan, AlertTriangle, Radio } from 'lucide-react';
import SciFiCard from '../components/scifi/SciFiCard';
import BodyScanner from '../components/scifi/BodyScanner';
import VitalsMonitor from '../components/scifi/VitalsMonitor';
import DNAList from '../components/scifi/DNAList';
import SciFiButton from '../components/scifi/SciFiButton';
import { useTheme } from '@/context/ThemeContext';

const SciFiDashboard = () => {
    const [scanActive, setScanActive] = useState(false);
    const [activeTab, setActiveTab] = useState('vitals');
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    // Set scoped theme
    React.useEffect(() => {
        setScopedTheme('cyberpunk', 'scifi');
    }, []);

    return (
        <div
            className="min-h-screen font-mono p-4 md:p-6 overflow-hidden relative selection:bg-cyan-500/30 cursor-crosshair"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Dynamic Background Grid (Moving) */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div
                    className="absolute inset-0 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
                    style={{
                        backgroundImage: `linear-gradient(${theme.colors.primary}1a 1px, transparent 1px), linear-gradient(90deg, ${theme.colors.primary}1a 1px, transparent 1px)`
                    }}
                />
            </div>
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background: `linear-gradient(to top, ${theme.colors.background}, transparent, ${theme.colors.background}cc)`
                }}
            />

            {/* CRT Scanline Effect */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20" />

            {/* Main HUD Container */}
            <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-48px)] overflow-y-auto pb-12 scrollbar-hide">

                {/* Left Column: Tactical Menu */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="mb-4">
                        <h1 className="text-4xl font-black italic tracking-tighter opacity-50" style={{ color: theme.colors.primary }}>HELIX</h1>
                        <div className="text-[10px] tracking-[0.5em] pl-1" style={{ color: theme.colors.mutedForeground }}>BIO_INTERFACE_V9</div>
                    </div>

                    <SciFiCard className="flex-1 flex flex-col gap-1 p-2">
                        <div className="text-[10px] mb-2 px-2 border-b pb-1" style={{ color: theme.colors.mutedForeground, borderColor: theme.colors.border }}>MODULES</div>
                        {[
                            { id: 'vitals', icon: Activity, label: 'VITALS_MONITOR' },
                            { id: 'dna', icon: Dna, label: 'GENOME_SEQ' },
                            { id: 'scan', icon: Scan, label: 'FULL_BODY_SCAN' },
                            { id: 'shield', icon: Shield, label: 'DEFENSE_SYS' },
                        ].map((item) => (
                            <SciFiButton
                                key={item.id}
                                variant={activeTab === item.id ? 'primary' : 'command'}
                                size="sm"
                                icon={<item.icon className="w-4 h-4" />}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full justify-start border-l-2 rounded-none ${activeTab === item.id ? 'border-l-current' : 'border-l-transparent'}`}
                            >
                                {item.label}
                            </SciFiButton>
                        ))}
                    </SciFiCard>

                    <div className="p-4 rounded border" style={{ backgroundColor: '#450a0a20', borderColor: '#7f1d1d50' }}>
                        <div className="flex items-center gap-2 mb-2" style={{ color: '#ef4444' }}>
                            <AlertTriangle className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-widest">THREAT DETECTED</span>
                        </div>
                        <div className="text-[10px] font-mono" style={{ color: '#f87171b3' }}>
                            Unidentified bio-signature in Sector 7.
                        </div>
                    </div>
                </div>

                {/* Center Column: The Scanner (Hero) */}
                <div className="lg:col-span-7 flex flex-col relative group">
                    {/* Top Info Bar */}
                    <div className="flex justify-between items-center px-4 py-2 border-b mb-4" style={{ backgroundColor: `${theme.colors.secondary}20`, borderColor: `${theme.colors.border}50` }}>
                        <div className="flex items-center gap-4">
                            <div className="text-xs" style={{ color: theme.colors.mutedForeground }}>SUBJECT: <span className="font-bold" style={{ color: theme.colors.secondaryForeground }}>ALEX_M</span></div>
                            <div className="text-xs" style={{ color: theme.colors.mutedForeground }}>ID: <span className="font-bold" style={{ color: theme.colors.secondaryForeground }}>XJ-928</span></div>
                        </div>
                        <div
                            className={`text-xs font-bold px-2 py-0.5 rounded border`}
                            style={{
                                backgroundColor: scanActive ? theme.colors.primary : 'transparent',
                                color: scanActive ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                borderColor: scanActive ? 'transparent' : theme.colors.border
                            }}
                        >
                            {scanActive ? 'SCANNING...' : 'IDLE'}
                        </div>
                    </div>

                    {/* Main Visual */}
                    <div className="flex-1 relative flex items-center justify-center border-x" style={{ borderColor: `${theme.colors.border}30`, backgroundColor: `${theme.colors.secondary}10` }}>
                        {/* Corner Brackets */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: `${theme.colors.primary}80` }} />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: `${theme.colors.primary}80` }} />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: `${theme.colors.primary}80` }} />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: `${theme.colors.primary}80` }} />

                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <div className="w-[500px] h-[500px] border rounded-full animate-pulse" style={{ borderColor: `${theme.colors.primary}30` }} />
                            <div className="absolute w-[300px] h-[300px] border rounded-full" style={{ borderColor: `${theme.colors.primary}30` }} />
                        </div>

                        <div className="h-[80%] w-full max-w-md relative">
                            <BodyScanner />

                            {/* Overlay Scan Line */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 right-0 h-px z-20"
                                style={{ backgroundColor: theme.colors.accent, boxShadow: `0 0 10px ${theme.colors.accent}` }}
                            >
                                <div className="absolute top-0 right-0 text-[10px] px-1 -mt-4" style={{ color: theme.colors.accent, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>SCANNING_LAYERS</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Vitals Strip */}
                    <div className="h-32 mt-4 border-t p-2" style={{ borderColor: `${theme.colors.border}50`, backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <VitalsMonitor />
                    </div>
                </div>

                {/* Right Column: Data Analysis */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    {/* Neural Sync - now properly above the genetic markers */}
                    <div className="p-4 border" style={{ backgroundColor: `${theme.colors.secondary}20`, borderColor: `${theme.colors.border}50` }}>
                        <h3 className="text-xs mb-3 font-bold flex items-center gap-2" style={{ color: theme.colors.primary }}>
                            <Radio className="w-3 h-3" />
                            NEURAL_SYNC
                        </h3>
                        <div className="flex items-center justify-center py-4">
                            <div className="relative w-20 h-20">
                                <svg className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" stroke={theme.colors.border} strokeWidth="1" fill="none" />
                                    <path d="M50 5 A 45 45 0 0 1 95 50" stroke={theme.colors.secondaryForeground} strokeWidth="2" fill="none" />
                                    <path d="M50 95 A 45 45 0 0 1 5 50" stroke={theme.colors.muted} strokeWidth="2" fill="none" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: theme.colors.secondaryForeground }}>
                                    98%
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-[10px]" style={{ color: theme.colors.mutedForeground }}>
                                <span>Alpha Waves</span>
                                <span style={{ color: theme.colors.accent }}>Normal</span>
                            </div>
                            <div className="h-1 w-full" style={{ backgroundColor: `${theme.colors.border}50` }}>
                                <div className="h-full w-[80%]" style={{ backgroundColor: theme.colors.muted }} />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-hidden flex flex-col">
                        <h3 className="text-xs mb-2 font-bold px-1" style={{ color: theme.colors.primary }}>GENETIC_MARKERS</h3>
                        <div className="flex-1 border overflow-auto" style={{ borderColor: `${theme.colors.border}50`, backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                            <DNAList />
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer Status Bar */}
            <footer
                className="fixed bottom-0 left-0 right-0 h-6 flex items-center justify-between px-4 text-[10px] uppercase tracking-widest z-50 backdrop-blur-sm border-t"
                style={{
                    backgroundColor: `${theme.colors.secondary}30`,
                    borderColor: `${theme.colors.border}80`,
                    color: theme.colors.mutedForeground
                }}
            >
                <div className="flex gap-4">
                    <span>System: <span style={{ color: theme.colors.primary }}>ONLINE</span></span>
                    <span>Network: <span style={{ color: theme.colors.accent }}>SECURE_V3</span></span>
                </div>
                <div className="animate-pulse">
                    AWAITING_INPUT...
                </div>
            </footer>
        </div>
    );
};

export default SciFiDashboard;