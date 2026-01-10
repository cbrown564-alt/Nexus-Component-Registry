import React from 'react';
import { Wind } from 'lucide-react';
import SolarCard from './SolarCard';
import { motion } from 'framer-motion';

const AirQualityLeaf = () => {
    const aqi = 24; // Good

    return (
        <SolarCard className="p-6 h-full bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7]">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="font-bold text-2xl text-emerald-950 mb-1">Air Quality</h3>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600/70">Local Sensor #4</p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/60 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                    <Wind className="w-5 h-5" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-6">
                {/* Visual Leaf Gauge */}
                <div className="relative w-32 h-32 shrink-0">
                    <motion.div
                        className="w-full h-full drop-shadow-md"
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
                        <div key={i} className="group flex items-center justify-between p-2 rounded-lg hover:bg-white/40 transition-colors">
                            <span className="text-emerald-800/70 text-sm font-medium">{item.label}</span>
                            <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                <span className="text-emerald-950 font-bold text-sm">{item.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SolarCard>
    );
};

export default AirQualityLeaf;