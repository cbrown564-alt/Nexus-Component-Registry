import React, { useState } from 'react';
import { MapPin, Wifi, AlertTriangle, Zap, Droplets } from 'lucide-react';
import GridCard from './GridCard';

const CityMap = () => {
    const [activeZone, setActiveZone] = useState<number | null>(null);

    const zones = [
        { id: 1, name: "Industrial Sector A", status: "warning", x: "20%", y: "30%", load: "85%" },
        { id: 2, name: "Residential District", status: "normal", x: "60%", y: "40%", load: "42%" },
        { id: 3, name: "Downtown Core", status: "critical", x: "45%", y: "65%", load: "98%" },
        { id: 4, name: "Port Facility", status: "normal", x: "80%", y: "20%", load: "30%" },
    ];

    return (
        <GridCard className="h-full min-h-[500px]" title="Geospatial Overview" noPadding={true}>
            <div className="relative h-full w-full bg-[#0b1121] overflow-hidden">

                {/* Map Background (Abstract SVG) */}
                <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 40 L30 40 L40 20 L70 20 L80 0" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
                    <path d="M20 100 L20 70 L50 60 L60 80 L100 80" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
                    <path d="M0 60 L100 60" stroke="#1e40af" strokeWidth="0.2" strokeDasharray="2 2" fill="none" />
                    <path d="M40 0 L40 100" stroke="#1e40af" strokeWidth="0.2" strokeDasharray="2 2" fill="none" />
                    {/* City Blocks */}
                    <rect x="10" y="10" width="15" height="20" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
                    <rect x="55" y="35" width="20" height="15" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
                    <rect x="35" y="60" width="25" height="25" stroke="#3b82f6" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Interactive Zones */}
                {zones.map((zone) => (
                    <div
                        key={zone.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                        style={{ left: zone.x, top: zone.y }}
                        onMouseEnter={() => setActiveZone(zone.id)}
                        onMouseLeave={() => setActiveZone(null)}
                    >
                        {/* Ping Animation */}
                        <div className={`absolute inset-0 animate-ping rounded-full h-4 w-4 opacity-75 ${zone.status === 'critical' ? 'bg-red-500' :
                                zone.status === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'
                            }`} />

                        {/* Node Icon */}
                        <div className={`relative flex h-4 w-4 items-center justify-center rounded-full border border-black shadow-lg ${zone.status === 'critical' ? 'bg-red-500 text-white' :
                                zone.status === 'warning' ? 'bg-amber-500 text-black' : 'bg-emerald-500 text-black'
                            }`}>
                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        </div>

                        {/* Tooltip */}
                        {activeZone === zone.id && (
                            <div className="absolute left-6 top-0 z-50 w-48 -translate-y-1/4 rounded bg-slate-900/90 p-3 text-xs border border-blue-500/30 backdrop-blur-md">
                                <div className="mb-1 font-bold text-blue-100">{zone.name}</div>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-slate-400">Status</span>
                                    <span className={`font-mono font-bold uppercase ${zone.status === 'critical' ? 'text-red-400' :
                                            zone.status === 'warning' ? 'text-amber-400' : 'text-emerald-400'
                                        }`}>{zone.status}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-400">Grid Load</span>
                                    <span className="font-mono text-blue-200">{zone.load}</span>
                                </div>
                                {/* Mini Chart */}
                                <div className="mt-2 flex gap-0.5 h-4 items-end">
                                    {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                                        <div key={i} className="w-full bg-blue-500/30" style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Map Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <button className="h-8 w-8 flex items-center justify-center bg-slate-800 border border-blue-900 text-blue-400 hover:bg-slate-700 hover:text-white rounded transition-colors">
                        <span className="text-lg font-bold">+</span>
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center bg-slate-800 border border-blue-900 text-blue-400 hover:bg-slate-700 hover:text-white rounded transition-colors">
                        <span className="text-lg font-bold">−</span>
                    </button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-slate-900/80 border border-blue-900/50 p-2 rounded backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-[10px] text-slate-300 mb-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" /> Normal
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-300 mb-1">
                        <span className="h-2 w-2 rounded-full bg-amber-500" /> Warning
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-300">
                        <span className="h-2 w-2 rounded-full bg-red-500" /> Critical
                    </div>
                </div>

            </div>
        </GridCard>
    );
};

export default CityMap;