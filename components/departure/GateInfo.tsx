import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { ArrowUpRight, QrCode } from 'lucide-react';

interface GateInfoProps {
    gate: string;
    boardingTime: string;
    zone: number;
    seat: string;
    delay?: number;
}

const GateInfo: React.FC<GateInfoProps> = ({ gate, boardingTime, zone, seat, delay = 0 }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4 }}
            className="w-full relative h-full min-h-[200px] flex flex-col"
            style={{
                color: theme.colors.foreground
            }}
        >
            <div className="flex-1 bg-amber-500 text-black p-6 rounded-t-sm relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 p-4">
                    <QrCode size={120} />
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <p className="font-mono text-xs font-bold tracking-widest opacity-60 mb-1">GATE</p>
                        <h2 className="text-8xl font-bold font-mono tracking-tighter leading-none">{gate}</h2>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="font-mono text-xs font-bold tracking-widest opacity-60">BOARDING</p>
                            <p className="text-2xl font-bold font-mono">{boardingTime}</p>
                        </div>
                        <div className="bg-black/10 px-3 py-1 rounded backdrop-blur-sm">
                            <span className="font-mono text-xs font-bold">ZONE {zone}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-800 p-4 rounded-b-sm border-2 border-t-0 flex justify-between items-center" style={{ borderColor: theme.colors.border }}>
                <div>
                    <p className="font-mono text-[10px] opacity-50 tracking-widest mb-0.5">SEAT</p>
                    <p className="text-xl font-bold font-mono text-white">{seat}</p>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold font-mono hover:text-amber-500 transition-colors uppercase">
                    View Pass <ArrowUpRight size={14} />
                </button>
            </div>
        </motion.div>
    );
};

export default GateInfo;
