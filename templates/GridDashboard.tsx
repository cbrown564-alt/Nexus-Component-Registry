import React from 'react';
import { motion } from 'framer-motion';
import { Radio, AlertTriangle, ShieldCheck, Cpu, Zap, Server, RotateCcw, Power } from 'lucide-react';
import CityMap from '../components/grid/CityMap';
import ResourceGauge from '../components/grid/ResourceGauge';
import SystemControls from '../components/grid/SystemControls';
import GridCard from '../components/grid/GridCard';
import GridButton from '../components/grid/GridButton';

const GridDashboard = () => {
    return (
        <div className="container mx-auto min-h-screen p-4 md:p-6 font-sans text-slate-200 overflow-hidden bg-[#0b1121]">

            {/* Header */}
            <header className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-blue-900/50 pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-blue-900/30 border border-blue-500/50 rounded text-blue-400">
                        <Cpu className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold uppercase tracking-[0.2em] text-white">Grid Operator</h1>
                        <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            SYSTEM ONLINE // SECTOR 7
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 font-mono text-xs">
                    <div className="px-4 py-2 bg-slate-900 border border-blue-900/50 rounded">
                        <span className="text-slate-500 block text-[10px] uppercase">Temperature</span>
                        <span className="text-blue-200">24°C</span>
                    </div>
                    <div className="px-4 py-2 bg-slate-900 border border-blue-900/50 rounded">
                        <span className="text-slate-500 block text-[10px] uppercase">Wind Speed</span>
                        <span className="text-blue-200">12 km/h NW</span>
                    </div>
                    <div className="px-4 py-2 bg-slate-900 border border-blue-900/50 rounded">
                        <span className="text-slate-500 block text-[10px] uppercase">Alert Level</span>
                        <span className="text-emerald-400">LEVEL 5</span>
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
                            <div className="space-y-0 text-xs font-mono h-32 overflow-y-auto">
                                {[
                                    { time: '10:42:05', type: 'WARN', msg: 'Pressure spike in Sector 4A', color: 'text-amber-500' },
                                    { time: '10:41:58', type: 'INFO', msg: 'Grid synchronization complete', color: 'text-blue-400' },
                                    { time: '10:40:12', type: 'INFO', msg: 'Backup generator test passed', color: 'text-emerald-500' },
                                    { time: '10:35:00', type: 'ERR', msg: 'Connection timeout node #892', color: 'text-red-500' },
                                    { time: '10:32:45', type: 'INFO', msg: 'Morning load balancing active', color: 'text-blue-400' },
                                ].map((log, i) => (
                                    <div key={i} className="flex gap-4 py-1.5 border-b border-blue-900/20 last:border-0 hover:bg-white/5 cursor-pointer">
                                        <span className="text-slate-500">{log.time}</span>
                                        <span className={`w-10 font-bold ${log.color}`}>{log.type}</span>
                                        <span className="text-slate-300">{log.msg}</span>
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
                        <div className="flex flex-col gap-4 text-xs font-mono text-blue-200">
                            <div className="flex items-center justify-between p-2 bg-slate-900 border border-blue-900/30 rounded">
                                <span className="flex items-center gap-2"><Radio className="h-3 w-3 text-blue-500" /> Main Relay</span>
                                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />Connected</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-slate-900 border border-blue-900/30 rounded">
                                <span className="flex items-center gap-2"><ShieldCheck className="h-3 w-3 text-purple-500" /> Firewall</span>
                                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />Active</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-slate-900 border border-blue-900/30 rounded">
                                <span className="flex items-center gap-2"><Server className="h-3 w-3 text-cyan-500" /> Backup Node</span>
                                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)] animate-pulse" />Standby</span>
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

                    <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded text-amber-500 text-xs font-mono flex items-start gap-2">
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