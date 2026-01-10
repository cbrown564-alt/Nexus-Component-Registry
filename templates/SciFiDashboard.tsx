import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Activity, Dna, Settings, Database, Hexagon, Power, Shield, Scan, AlertTriangle, Radio } from 'lucide-react';
import SciFiCard from '../components/scifi/SciFiCard';
import BodyScanner from '../components/scifi/BodyScanner';
import VitalsMonitor from '../components/scifi/VitalsMonitor';
import DNAList from '../components/scifi/DNAList';
import SciFiButton from '../components/scifi/SciFiButton';

const SciFiDashboard = () => {
    const [scanActive, setScanActive] = useState(false);
    const [activeTab, setActiveTab] = useState('vitals');

    return (
        <div className="min-h-screen bg-[#020408] text-cyan-100 font-mono p-4 md:p-6 overflow-hidden relative selection:bg-cyan-500/30 cursor-crosshair">

            {/* Dynamic Background Grid (Moving) */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>
            <div className="fixed inset-0 bg-gradient-to-t from-[#020408] via-transparent to-[#020408]/80 z-0 pointer-events-none" />

            {/* CRT Scanline Effect */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20" />

            {/* Main HUD Container */}
            <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-48px)] overflow-y-auto pb-12 scrollbar-hide">

                {/* Left Column: Tactical Menu */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="mb-4">
                        <h1 className="text-4xl font-black italic tracking-tighter text-cyan-500 opacity-50">HELIX</h1>
                        <div className="text-[10px] text-cyan-700 tracking-[0.5em] pl-1">BIO_INTERFACE_V9</div>
                    </div>

                    <SciFiCard className="flex-1 flex flex-col gap-1 p-2 border-cyan-500/30">
                        <div className="text-[10px] text-cyan-600 mb-2 px-2 border-b border-cyan-900/50 pb-1">MODULES</div>
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
                                className={`w-full justify-start border-l-2 rounded-none ${activeTab === item.id ? 'border-l-cyan-400' : 'border-l-transparent'}`}
                            >
                                {item.label}
                            </SciFiButton>
                        ))}
                    </SciFiCard>

                    <div className="p-4 bg-red-950/10 border border-red-900/30 rounded">
                        <div className="flex items-center gap-2 text-red-500 mb-2">
                            <AlertTriangle className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-widest">THREAT DETECTED</span>
                        </div>
                        <div className="text-[10px] text-red-400/70 font-mono">
                            Unidentified bio-signature in Sector 7.
                        </div>
                    </div>
                </div>

                {/* Center Column: The Scanner (Hero) */}
                <div className="lg:col-span-7 flex flex-col relative group">
                    {/* Top Info Bar */}
                    <div className="flex justify-between items-center px-4 py-2 bg-cyan-950/10 border-b border-cyan-900/30 mb-4">
                        <div className="flex items-center gap-4">
                            <div className="text-xs text-cyan-600">SUBJECT: <span className="text-cyan-300 font-bold">ALEX_M</span></div>
                            <div className="text-xs text-cyan-600">ID: <span className="text-cyan-300 font-bold">XJ-928</span></div>
                        </div>
                        <div className={`text-xs font-bold px-2 py-0.5 rounded ${scanActive ? 'bg-cyan-500 text-black' : 'bg-transparent text-cyan-600 border border-cyan-800'}`}>
                            {scanActive ? 'SCANNING...' : 'IDLE'}
                        </div>
                    </div>

                    {/* Main Visual */}
                    <div className="flex-1 relative flex items-center justify-center border-x border-cyan-900/10 bg-cyan-950/5">
                        {/* Corner Brackets */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50" />

                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                            <div className="w-[500px] h-[500px] border border-cyan-500/20 rounded-full animate-pulse" />
                            <div className="absolute w-[300px] h-[300px] border border-cyan-500/20 rounded-full" />
                        </div>

                        <div className="h-[80%] w-full max-w-md relative">
                            <BodyScanner />

                            {/* Overlay Scan Line */}
                            <motion.div
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute left-0 right-0 h-px bg-cyan-400 shadow-[0_0_10px_#22d3ee] z-20"
                            >
                                <div className="absolute top-0 right-0 text-[10px] text-cyan-400 bg-black/50 px-1 -mt-4">SCANNING_LAYERS</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Vitals Strip */}
                    <div className="h-32 mt-4 bg-black/40 border-t border-cyan-900/30 p-2">
                        <VitalsMonitor />
                    </div>
                </div>

                {/* Right Column: Data Analysis */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    {/* Neural Sync - now properly above the genetic markers */}
                    <div className="bg-cyan-950/10 p-4 border border-cyan-900/30">
                        <h3 className="text-xs text-cyan-500 mb-3 font-bold flex items-center gap-2">
                            <Radio className="w-3 h-3" />
                            NEURAL_SYNC
                        </h3>
                        <div className="flex items-center justify-center py-4">
                            <div className="relative w-20 h-20">
                                <svg className="animate-spin-slow w-full h-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" className="text-cyan-800" />
                                    <path d="M50 5 A 45 45 0 0 1 95 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-cyan-400" />
                                    <path d="M50 95 A 45 45 0 0 1 5 50" stroke="currentColor" strokeWidth="2" fill="none" className="text-cyan-600" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-cyan-300">
                                    98%
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-cyan-600">
                                <span>Alpha Waves</span>
                                <span className="text-cyan-400">Normal</span>
                            </div>
                            <div className="h-1 w-full bg-cyan-900/30">
                                <div className="h-full w-[80%] bg-cyan-600" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-hidden flex flex-col">
                        <h3 className="text-xs text-cyan-500 mb-2 font-bold px-1">GENETIC_MARKERS</h3>
                        <div className="flex-1 border border-cyan-900/30 bg-black/20 overflow-auto">
                            <DNAList />
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer Status Bar */}
            <footer className="fixed bottom-0 left-0 right-0 h-6 bg-cyan-950/20 border-t border-cyan-900/50 flex items-center justify-between px-4 text-[10px] text-cyan-700 uppercase tracking-widest z-50 backdrop-blur-sm">
                <div className="flex gap-4">
                    <span>System: <span className="text-emerald-500">ONLINE</span></span>
                    <span>Network: <span className="text-cyan-400">SECURE_V3</span></span>
                </div>
                <div className="animate-pulse">
                    AWAITING_INPUT...
                </div>
            </footer>
        </div>
    );
};

export default SciFiDashboard;