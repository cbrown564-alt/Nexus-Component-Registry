import React from 'react';
import { motion } from 'framer-motion';
import { Radio, AlertTriangle, ShieldCheck, Cpu, Zap, Server, RotateCcw, Power } from 'lucide-react';
import CityMap from '../components/grid/CityMap';
import ResourceGauge from '../components/grid/ResourceGauge';
import SystemControls from '../components/grid/SystemControls';
import GridCard from '../components/grid/GridCard';
import GridButton from '../components/grid/GridButton';

import { useTheme } from '@/context/ThemeContext';

const GridDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    React.useEffect(() => {
        setScopedTheme('cyberpunk', 'grid');
    }, []);

    return (
        <div
            className="container mx-auto min-h-screen p-4 md:p-6 font-sans overflow-hidden"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily,
            }}
        >

            {/* Header */}
            <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-4" style={{ borderColor: theme.colors.border }}>
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border rounded" style={{ backgroundColor: theme.colors.secondary, borderColor: theme.colors.accent, color: theme.colors.primary }}>
                        <Cpu className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold uppercase tracking-[0.2em]" style={{ color: theme.colors.foreground }}>Grid Operator</h1>
                        <div className="flex items-center gap-2 text-xs font-mono" style={{ color: theme.colors.primary }}>
                            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.ring }} />
                            SYSTEM ONLINE // SECTOR 7
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 font-mono text-xs">
                    <div className="px-4 py-2 border rounded" style={{ backgroundColor: theme.colors.secondary, borderColor: theme.colors.border }}>
                        <span className="block text-[10px] uppercase" style={{ color: theme.colors.mutedForeground }}>Temperature</span>
                        <span style={{ color: theme.colors.foreground }}>24°C</span>
                    </div>
                    <div className="px-4 py-2 border rounded" style={{ backgroundColor: theme.colors.secondary, borderColor: theme.colors.border }}>
                        <span className="block text-[10px] uppercase" style={{ color: theme.colors.mutedForeground }}>Wind Speed</span>
                        <span style={{ color: theme.colors.foreground }}>12 km/h NW</span>
                    </div>
                    <div className="px-4 py-2 border rounded" style={{ backgroundColor: theme.colors.secondary, borderColor: theme.colors.border }}>
                        <span className="block text-[10px] uppercase" style={{ color: theme.colors.mutedForeground }}>Alert Level</span>
                        <span style={{ color: theme.colors.ring }}>LEVEL 5</span>
                    </div>
                </div>
            </header>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">

                {/* Left Column: Map */}
                <div className="lg:col-span-3 min-h-[500px] flex flex-col gap-6">
                    <CityMap />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ResourceGauge />
                        <GridCard title="Alert Log" className="overflow-hidden">
                            <div className="space-y-0 text-xs font-mono">
                                {[
                                    { time: '10:42:05', type: 'WARN', msg: 'Pressure spike in Sector 4A', color: 'text-amber-500' },
                                    { time: '10:41:58', type: 'INFO', msg: 'Grid synchronization complete', color: 'text-blue-400' },
                                    { time: '10:40:12', type: 'INFO', msg: 'Backup generator test passed', color: 'text-emerald-500' },
                                    { time: '10:35:00', type: 'ERR', msg: 'Connection timeout node #892', color: 'text-red-500' },
                                    { time: '10:32:45', type: 'INFO', msg: 'Morning load balancing active', color: 'text-blue-400' },
                                ].map((log, i) => (
                                    <div key={i} className="flex gap-4 py-1.5 border-b last:border-0 hover:bg-black/5 cursor-pointer" style={{ borderColor: theme.colors.border }}>
                                        <span style={{ color: theme.colors.mutedForeground }}>{log.time}</span>
                                        <span className={`w-10 font-bold`} style={{ color: theme.colors.foreground }}>{log.type}</span>
                                        <span style={{ color: theme.colors.secondaryForeground }}>{log.msg}</span>
                                    </div>
                                ))}
                            </div>
                        </GridCard>
                    </div>
                </div>

                {/* Right Column: Controls & Status */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    <SystemControls />

                    <GridCard title="Network Topology" className="flex-1 min-h-[200px]">
                        <div className="flex flex-col gap-4 text-xs font-mono" style={{ color: theme.colors.mutedForeground }}>
                            <div className="flex items-center justify-between p-2 border rounded" style={{ backgroundColor: theme.colors.muted, borderColor: theme.colors.border }}>
                                <span className="flex items-center gap-2" style={{ color: theme.colors.foreground }}><Radio className="h-3 w-3" /> Main Relay</span>
                                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.ring }} />Connected</span>
                            </div>
                            <div className="flex items-center justify-between p-2 border rounded" style={{ backgroundColor: theme.colors.muted, borderColor: theme.colors.border }}>
                                <span className="flex items-center gap-2" style={{ color: theme.colors.foreground }}><ShieldCheck className="h-3 w-3" /> Firewall</span>
                                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.ring }} />Active</span>
                            </div>
                            <div className="flex items-center justify-between p-2 border rounded" style={{ backgroundColor: theme.colors.muted, borderColor: theme.colors.border }}>
                                <span className="flex items-center gap-2" style={{ color: theme.colors.foreground }}><Server className="h-3 w-3" /> Backup Node</span>
                                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.accent }} />Standby</span>
                            </div>

                            {/* Control Actions */}
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                <GridButton variant="primary" size="sm" icon={<RotateCcw className="h-3 w-3" />} status="online">
                                    Sync All
                                </GridButton>
                                <GridButton variant="secondary" size="sm" icon={<Zap className="h-3 w-3" />} status="idle">
                                    Boost
                                </GridButton>
                                <GridButton variant="secondary" size="sm" icon={<Power className="h-3 w-3" />} status="online">
                                    Failover
                                </GridButton>
                                <GridButton variant="danger" size="sm" status="warning">
                                    E-Stop
                                </GridButton>
                            </div>
                        </div>
                    </GridCard>

                    <div className="p-4 border rounded text-xs font-mono flex items-start gap-2" style={{ backgroundColor: theme.colors.muted, borderColor: theme.colors.border, color: theme.colors.foreground }}>
                        <AlertTriangle className="h-4 w-4 shrink-0" />
                        <div>
                            <strong className="block mb-1">MAINTENANCE SCHEDULED</strong>
                            System update pending 23:00 UTC. Potential latency in Sector 3.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GridDashboard;