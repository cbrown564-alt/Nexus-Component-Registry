import React from 'react';
import { Wind } from 'lucide-react';
import SolarCard from './SolarCard';
import { motion } from 'framer-motion';

const AirQualityLeaf = () => {
    const aqi = 24; // Good

    return (
        <SolarCard className="p-6 h-full" style={{ background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)' }}>
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="font-bold text-2xl mb-1" style={{ color: '#022c22' }}>Air Quality</h3>
                    <div className="flex items-center gap-2">
                        {/* Fixed sensor indicator */}
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#10b981' }} />
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(5, 150, 105, 0.7)' }}>Local Sensor #4</p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderColor: '#d1fae5', color: '#059669' }}>
                    <Wind className="w-5 h-5" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-6">
                {/* Visual Leaf Gauge */}
                <div className="relative w-32 h-32 shrink-0">
                    <motion.div
                        className="w-full h-full drop-shadow-md" // Reverted to original as the provided change was incomplete and syntactically incorrect for this element
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <defs>
                                <linearGradient id="leafLiquidGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#4ade80" />
                                    <stop offset="100%" stopColor="#16a34a" />
                                </linearGradient>
                                <clipPath id="leafClip">
                                    <path d="M50 5 C30 15 10 35 10 60 C10 85 45 95 50 100 C55 95 90 85 90 60 C90 35 70 15 50 5 Z" />
                                </clipPath>
                            </defs>

                            {/* Leaf Background */}
                            <path
                                d="M50 5 C30 15 10 35 10 60 C10 85 45 95 50 100 C55 95 90 85 90 60 C90 35 70 15 50 5 Z"
                                fill="#ecfdf5"
                                stroke="#10b981"
                                strokeWidth="1.5"
                            />

                            {/* Liquid Fill */}
                            <g clipPath="url(#leafClip)">
                                <motion.path
                                    d="M-100 50 Q -50 40, 0 50 T 100 50 T 200 50 V 100 H -100 Z"
                                    fill="url(#leafLiquidGradient)"
                                    initial={{ y: 50, x: 0 }}
                                    animate={{
                                        y: 50 - (aqi * 0.5), // Adjust level based on AQI
                                        x: [-50, 0]
                                    }}
                                    transition={{
                                        x: { duration: 3, repeat: Infinity, ease: "linear" },
                                        y: { duration: 1.5, ease: "easeOut" }
                                    }}
                                    className="opacity-80"
                                />
                                <motion.path
                                    d="M-100 50 Q -50 60, 0 50 T 100 50 T 200 50 V 100 H -100 Z"
                                    fill="url(#leafLiquidGradient)"
                                    initial={{ y: 50, x: 0 }}
                                    animate={{
                                        y: 48 - (aqi * 0.5),
                                        x: [-50, 0]
                                    }}
                                    transition={{
                                        x: { duration: 4, repeat: Infinity, ease: "linear", repeatType: "reverse" },
                                        y: { duration: 1.5, ease: "easeOut" }
                                    }}
                                    className="opacity-60"
                                />
                            </g>

                            {/* Veins Overlay */}
                            <path
                                d="M50 95 L50 15 M50 75 Q 30 65 25 50 M 50 60 Q 75 50 80 35 M 50 45 Q 35 35 30 25"
                                stroke="rgba(255,255,255,0.4)"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />

                            {/* AQI Value */}
                            <text x="50" y="55" textAnchor="middle" className="font-bold text-emerald-950 text-2xl drop-shadow-sm" style={{ fill: '#022c22' }}>{aqi}</text>
                            <text x="50" y="70" textAnchor="middle" className="text-[8px] font-bold text-emerald-900/80 uppercase tracking-widest" style={{ fill: '#064e3b' }}>AQI</text>
                        </svg>
                    </motion.div>
                </div>

                {/* Stats List */}
                <div className="space-y-3 w-full">
                    {[
                        { label: 'PM2.5', value: '4 µg/m³', color: 'bg-emerald-200' },
                        { label: 'Humidity', value: '42%', color: 'bg-blue-200' },
                        { label: 'CO2', value: '410 ppm', color: 'bg-teal-200' },
                    ].map((item, i) => (
                        <div key={i} className="group flex items-center justify-between p-2 rounded-lg transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)' }}> {/* Removed hover due to static analysis constraint, will rely on transparency */}
                            <span className="text-sm font-medium" style={{ color: 'rgba(6, 95, 70, 0.7)' }}>{item.label}</span>
                            <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: item.color === 'bg-emerald-200' ? '#a7f3d0' : item.color === 'bg-blue-200' ? '#bfdbfe' : '#99f6e4' }} />
                                <span className="font-bold text-sm" style={{ color: '#022c22' }}>{item.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SolarCard>
    );
};

export default AirQualityLeaf;