import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Plane, AlertTriangle } from 'lucide-react';

interface Flight {
    no: string;
    destination: string;
    gate: string;
    time: string;
    status: 'ON TIME' | 'DELAYED' | 'BOARDING' | 'CANCELLED';
    airline: string;
}

interface FlightBoardProps {
    flights: Flight[];
    delay?: number;
    type?: 'DEPARTURES' | 'ARRIVALS';
}

const FlightBoard: React.FC<FlightBoardProps> = ({ flights, delay = 0, type = 'DEPARTURES' }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    const getStatusColor = (status: Flight['status']) => {
        switch (status) {
            case 'ON TIME': return '#10b981'; // Emerald-500
            case 'BOARDING': return theme.colors.primary; // Amber-500
            case 'DELAYED': return '#f43f5e'; // Rose-500
            case 'CANCELLED': return '#71717a'; // Zinc-500
            default: return theme.colors.foreground;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            className="w-full overflow-hidden border-2 rounded-sm relative"
            style={{
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-2" style={{ borderColor: theme.colors.border }}>
                <div className="flex items-center gap-3">
                    <Plane className={`w-5 h-5 ${type === 'ARRIVALS' ? 'rotate-90' : ''}`} style={{ color: theme.colors.primary }} />
                    <h2 className="text-xl font-bold tracking-wider" style={{ color: theme.colors.foreground }}>
                        {type}
                    </h2>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ef4444' }}></span>
                    <span className="text-xs font-mono" style={{ color: theme.colors.mutedForeground }}>LIVE DATA</span>
                </div>
            </div>

            {/* Grid Header */}
            <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-mono opacity-50 border-b"
                style={{ borderColor: theme.colors.border, color: theme.colors.mutedForeground }}>
                <span className="col-span-1">FLIGHT</span>
                <span className="col-span-1">AIRLINE</span>
                <span className="col-span-4">DESTINATION</span>
                <span className="col-span-2 text-center">GATE</span>
                <span className="col-span-2 text-right">TIME</span>
                <span className="col-span-2 text-right">STATUS</span>
            </div>

            {/* Rows */}
            <div className="font-mono text-sm">
                {flights.map((flight, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + (i * 0.05) }}
                        className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 items-center hover:bg-white/5 transition-colors"
                        style={{ color: theme.colors.foreground }}
                    >
                        <span className="col-span-1 text-white">{flight.no}</span>
                        <span className="col-span-1 opacity-70 truncate">{flight.airline}</span>
                        <span className="col-span-4 font-bold tracking-wide truncate">{flight.destination.toUpperCase()}</span>

                        <div className="col-span-2 flex justify-center">
                            <span className="px-2 py-0.5 bg-zinc-800 rounded text-center min-w-[3ch] border border-zinc-700">
                                {flight.gate}
                            </span>
                        </div>

                        <span className="col-span-2 text-right opacity-80">{flight.time}</span>

                        <div className="col-span-2 text-right">
                            <span
                                className={`inline-block ${flight.status === 'BOARDING' ? 'animate-pulse' : ''}`}
                                style={{
                                    color: getStatusColor(flight.status),
                                    backgroundColor: `${getStatusColor(flight.status)}20`,
                                    border: `1px solid ${getStatusColor(flight.status)}40`
                                }}
                            >
                                {flight.status}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-2 border-t flex justify-between items-center bg-zinc-950/50" style={{ borderColor: theme.colors.border }}>
                <div className="flex gap-4 text-[10px] opacity-40 font-mono">
                    <span>UPDATED: 14:02:45 ZULU</span>
                    <span>TERM: 2A</span>
                </div>
                <div className="text-[10px] opacity-40 font-mono">
                    SYS: ONLINE
                </div>
            </div>

            {/* Scanlines Overlay for retro feel */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: "100% 2px, 3px 100%" }} />
        </motion.div>
    );
};

export default FlightBoard;
