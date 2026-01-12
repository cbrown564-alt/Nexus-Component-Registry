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
                        <div
                            className="absolute inset-0 animate-ping rounded-full h-4 w-4 opacity-75"
                            style={{ backgroundColor: zone.status === 'critical' ? '#ef4444' : zone.status === 'warning' ? '#f59e0b' : '#10b981' }}
                        />

                        {/* Node Icon */}
                        <div
                            className="relative flex h-4 w-4 items-center justify-center rounded-full border shadow-lg"
                            style={{
                                backgroundColor: zone.status === 'critical' ? '#ef4444' : zone.status === 'warning' ? '#f59e0b' : '#10b981',
                                color: zone.status === 'warning' ? '#000000' : zone.status === 'critical' ? '#ffffff' : '#000000',
                                borderColor: '#000000'
                            }}
                        >
                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                        </div>

                        {/* Tooltip */}
                        {activeZone === zone.id && (
                            <div className="absolute left-6 top-0 z-50 w-48 -translate-y-1/4 rounded p-3 text-xs border backdrop-blur-md" style={{ backgroundColor: 'rgba(15,23,42,0.9)', borderColor: 'rgba(59,130,246,0.3)' }}>
                                <div className="mb-1 font-bold" style={{ color: '#dbeafe' }}>{zone.name}</div>
                                <div className="flex items-center justify-between mb-1">
                                    <span style={{ color: '#94a3b8' }}>Status</span>
                                    <span
                                        className="font-mono font-bold uppercase"
                                        style={{ color: zone.status === 'critical' ? '#f87171' : zone.status === 'warning' ? '#fbbf24' : '#34d399' }}
                                    >{zone.status}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span style={{ color: '#94a3b8' }}>Grid Load</span>
                                    <span className="font-mono" style={{ color: '#bfdbfe' }}>{zone.load}</span>
                                </div>
                                {/* Mini Chart */}
                                <div className="mt-2 flex gap-0.5 h-4 items-end">
                                    {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                                        <div key={i} className="w-full" style={{ height: `${h}%`, backgroundColor: 'rgba(59,130,246,0.3)' }} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Map Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                    <button className="h-8 w-8 flex items-center justify-center border rounded transition-colors" style={{ backgroundColor: '#1e293b', borderColor: '#1e3a8a', color: '#60a5fa' }}>
                        <span className="text-lg font-bold">+</span>
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center border rounded transition-colors" style={{ backgroundColor: '#1e293b', borderColor: '#1e3a8a', color: '#60a5fa' }}>
                        <span className="text-lg font-bold">−</span>
                    </button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 border px-3 py-2 rounded backdrop-blur-sm" style={{ backgroundColor: 'rgba(15,23,42,0.9)', borderColor: 'rgba(30,58,138,0.5)' }}>
                    <div className="flex items-center gap-4 text-[10px]" style={{ color: '#cbd5e1' }}>
                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#10b981' }} /> Normal</span>
                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#f59e0b' }} /> Warning</span>
                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#ef4444' }} /> Critical</span>
                    </div>
                </div>

            </div>
        </GridCard>
    );
};

export default CityMap;