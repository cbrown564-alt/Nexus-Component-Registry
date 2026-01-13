import React from 'react';
import { motion } from 'framer-motion';
import { Scan, AlertTriangle } from 'lucide-react';
import SciFiCard from './SciFiCard';
import { useTheme } from '@/context/ThemeContext';

const BodyScanner = () => {
    const { theme } = useTheme();

    return (
        <SciFiCard title="Bio-Scan Analysis" className="h-full flex flex-col">
            <div className="flex-1 relative flex items-center justify-center overflow-hidden min-h-[300px]">

                {/* Grid Floor */}
                <div
                    className="absolute bottom-10 w-full h-24 bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)]"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${theme.colors.primary}1a 1px, transparent 1px), linear-gradient(to bottom, ${theme.colors.primary}1a 1px, transparent 1px)`,
                    }}
                />

                {/* Human Silhouette Wireframe (CSS constructed) */}
                <div className="relative h-64 w-32 opacity-80">
                    {/* Scanner Bar */}
                    <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-[-20%] w-[140%] h-1 z-20"
                        style={{
                            backgroundColor: `${theme.colors.accent}80`,
                            boxShadow: `0 0 15px ${theme.colors.accent}cc`,
                        }}
                    />

                    {/* Body Shape */}
                    <svg viewBox="0 0 100 200" className="h-full w-full" style={{ filter: `drop-shadow(0 0 8px ${theme.colors.primary}80)` }}>
                        <path
                            d="M50 10 C 60 10, 65 15, 65 25 C 65 35, 60 40, 50 40 C 40 40, 35 35, 35 25 C 35 15, 40 10, 50 10 M 35 45 L 20 60 L 20 110 L 30 110 L 30 190 L 45 190 L 45 130 L 55 130 L 55 190 L 70 190 L 70 110 L 80 110 L 80 60 L 65 45 Z"
                            fill="none"
                            stroke={theme.colors.primary}
                            strokeWidth="1"
                            strokeDasharray="4 2"
                        />
                        {/* Organs / Highlights */}
                        <circle cx="50" cy="55" r="4" className="animate-pulse" style={{ fill: '#ef444480' }} />
                        <rect x="45" y="70" width="10" height="15" style={{ fill: `${theme.colors.primary}33` }} />
                    </svg>

                    {/* Target Markers */}
                    <motion.div
                        className="absolute top-[25%] left-[50%] w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ border: `1px solid #ef444480` }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-1 h-1 bg-red-500" />
                    </motion.div>
                </div>

                {/* Floating Data Points */}
                <div
                    className="absolute top-10 right-4 text-[10px] font-mono space-y-1 text-right"
                    style={{ color: `${theme.colors.mutedForeground}b3` }}
                >
                    <div>SCAN_ID: #8821X</div>
                    <div>DENSITY: 1.042</div>
                    <div>TEMP: 37.2°C</div>
                </div>
            </div>

            <div className="mt-4 border-t pt-4 flex gap-4" style={{ borderColor: `${theme.colors.border}4d` }}>
                <div className="flex-1 p-2 rounded flex items-center gap-2" style={{ backgroundColor: '#450a0a4d', border: '1px solid #7f1d1d80' }}>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <div className="text-[10px] font-mono text-red-300">
                        <div className="font-bold">ANOMALY DETECTED</div>
                        <div>Sector 4 (Thoracic)</div>
                    </div>
                </div>
                <button
                    className="px-4 text-xs font-mono uppercase transition-colors"
                    style={{
                        backgroundColor: `${theme.colors.secondary}80`,
                        border: `1px solid ${theme.colors.primary}4d`,
                        color: theme.colors.accent,
                    }}
                >
                    Full Report
                </button>
            </div>
        </SciFiCard>
    );
};

export default BodyScanner;