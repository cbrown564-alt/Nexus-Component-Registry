import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';
import { Wind, Navigation, Droplets } from 'lucide-react';

interface WeatherData {
    city: string;
    code: string;
    temp: number;
    condition: string;
    windSpeed: number;
    windDir: string;
    humidity: number;
    visibility: string;
}

const WeatherRadar: React.FC<{ data: WeatherData; delay?: number }> = ({ data, delay = 0 }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="w-full relative overflow-hidden rounded-sm border-2 p-4 flex flex-col justify-between h-full min-h-[200px]"
            style={{
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.border,
                color: theme.colors.foreground
            }}
        >
            {/* Radar Sweep Animation */}
            <div className="absolute right-[-50px] top-[-50px] w-[200px] h-[200px] opacity-10 pointer-events-none">
                <div className="absolute inset-0 border border-current rounded-full opacity-20 " />
                <div className="absolute inset-[25%] border border-current rounded-full opacity-20" />
                <div className="absolute inset-[50%] border-current w-[1px] h-[50%] left-1/2 top-0 origin-bottom animate-[spin_4s_linear_infinite] bg-gradient-to-t from-transparent to-current opacity-50" />
            </div>

            <div className="flex justify-between items-start z-10">
                <div>
                    <h3 className="font-mono text-xs opacity-50 tracking-widest mb-1">METAR</h3>
                    <h2 className="text-3xl font-bold tracking-tight">{data.code}</h2>
                    <p className="text-sm font-mono opacity-70">{data.city.toUpperCase()}</p>
                </div>
                <div className="text-right">
                    <span className="text-4xl font-bold">{data.temp}°</span>
                    <p className="text-xs font-mono opacity-50 mt-1">{data.condition.toUpperCase()}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6 z-10">
                <div className="bg-zinc-900/50 p-2 rounded border border-white/5">
                    <div className="flex items-center gap-1 opacity-50 mb-1">
                        <Wind size={12} />
                        <span className="text-[10px] font-mono">WIND</span>
                    </div>
                    <span className="font-mono text-sm font-bold">{data.windDir} @ {data.windSpeed}kt</span>
                </div>
                <div className="bg-zinc-900/50 p-2 rounded border border-white/5">
                    <div className="flex items-center gap-1 opacity-50 mb-1">
                        <Droplets size={12} />
                        <span className="text-[10px] font-mono">HUM</span>
                    </div>
                    <span className="font-mono text-sm font-bold">{data.humidity}%</span>
                </div>
                <div className="bg-zinc-900/50 p-2 rounded border border-white/5">
                    <div className="flex items-center gap-1 opacity-50 mb-1">
                        <Navigation size={12} />
                        <span className="text-[10px] font-mono">VIS</span>
                    </div>
                    <span className="font-mono text-sm font-bold">{data.visibility}</span>
                </div>
            </div>

            <div className="absolute bottom-2 right-2 text-[8px] font-mono opacity-30">
                RADAR: ACTIVE | SCAN: 120ms
            </div>
        </motion.div>
    );
};

export default WeatherRadar;
