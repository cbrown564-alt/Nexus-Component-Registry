import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, ShieldCheck, Wifi } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import FlightBoard from '../components/departure/FlightBoard';
import WeatherRadar from '../components/departure/WeatherWidget';
import GateInfo from '../components/departure/GateInfo';

const DepartureDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setPlaygroundTheme('departure');
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const flights = [
        { no: 'NX-204', destination: 'Tokyo (HND)', airline: 'Nexus Air', gate: 'A4', time: '14:30', status: 'ON TIME' as const },
        { no: 'NX-892', destination: 'London (LHR)', airline: 'British A.', gate: 'B2', time: '15:15', status: 'BOARDING' as const },
        { no: 'UA-455', destination: 'San Francisco', airline: 'United', gate: 'C1', time: '16:00', status: 'DELAYED' as const },
        { no: 'LH-112', destination: 'Frankfurt', airline: 'Lufthansa', gate: 'A1', time: '16:45', status: 'ON TIME' as const },
        { no: 'DL-990', destination: 'New York (JFK)', airline: 'Delta', gate: 'D5', time: '17:30', status: 'ON TIME' as const },
        { no: 'NX-101', destination: 'Singapore', airline: 'Singapore', gate: 'A9', time: '18:15', status: 'ON TIME' as const },
    ];

    const weather = {
        city: 'Tokyo',
        code: 'RJTT',
        temp: 18,
        condition: 'Partly Cloudy',
        windSpeed: 12,
        windDir: 'NW',
        humidity: 65,
        visibility: '10km'
    };

    return (
        <div
            className="min-h-screen p-4 md:p-8 font-mono relative overflow-hidden selection:bg-amber-500/30"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                backgroundImage: `radial-gradient(circle at 50% 50%, #18181b 0%, #09090b 100%)`
            }}
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(${theme.colors.border} 1px, transparent 1px), linear-gradient(90deg, ${theme.colors.border} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Header Bar */}
            <header className="flex justify-between items-center mb-8 border-b-2 pb-4 relative z-10" style={{ borderColor: theme.colors.border }}>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight mb-1 flex items-center gap-2">
                        <Globe className="w-6 h-6 text-amber-500" />
                        DEPARTURE<span className="opacity-50 font-normal">.OS</span>
                    </h1>
                    <p className="text-[10px] tracking-[0.2em] opacity-50">SYSTEM STATUS: NOMINAL</p>
                </div>
                <div className="text-right">
                    <h2 className="text-3xl font-bold tabular-nums tracking-wider text-amber-500">
                        {time.toLocaleTimeString('en-US', { hour12: false })} <span className="text-xs text-zinc-500 font-normal">LCL</span>
                    </h2>
                    <p className="text-xs opacity-50">UTC {time.toISOString().split('T')[1].split('.')[0]}Z</p>
                </div>
            </header>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

                {/* Left Column: Flight Board */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {/* Main Board */}
                    <FlightBoard flights={flights} />

                    {/* Bottom Widgets Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Security Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="border-2 rounded-sm p-4 flex items-center justify-center gap-4 bg-zinc-900/50"
                            style={{ borderColor: theme.colors.border }}
                        >
                            <ShieldCheck size={32} className="text-emerald-500" />
                            <div>
                                <p className="text-[10px] font-bold tracking-widest opacity-50">SECURITY LEVEL</p>
                                <p className="text-xl font-bold text-emerald-500">CLEAR / LOW</p>
                            </div>
                        </motion.div>

                        {/* Network Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="border-2 rounded-sm p-4 flex items-center justify-center gap-4 bg-zinc-900/50"
                            style={{ borderColor: theme.colors.border }}
                        >
                            <div className="relative">
                                <Wifi size={32} className="text-sky-500" />
                                <span className="absolute -top-1 -right-1 w-2 h-2 bg-sky-400 rounded-full animate-ping" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold tracking-widest opacity-50">NETWORK</p>
                                <p className="text-xl font-bold text-sky-500">CONNECTED</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Personal Info */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <GateInfo gate="A4" boardingTime="14:00" zone={2} seat="12F" delay={0.2} />

                    <WeatherRadar data={weather} delay={0.3} />

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex-1 min-h-[150px] border-2 rounded-sm relative overflow-hidden bg-zinc-900"
                        style={{ borderColor: theme.colors.border }}
                    >
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]" />
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-amber-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-2 left-2 text-[10px] font-mono text-amber-500">LIVE TRACKER</div>
                    </motion.div>
                </div>

            </div>
            {/* Ticker Tape Footer */}
            <div className="fixed bottom-0 left-0 right-0 h-8 bg-amber-500 text-black font-mono text-sm leading-8 overflow-hidden whitespace-nowrap z-50">
                <div className="animate-marquee inline-block">
                    *** SYSTEM ALERT: HEAVY TRAFFIC SECTOR 7 *** WEATHER UPDATE: STORM FRONT APPROACHING RJTT *** FLIGHT NX-204 GATE CHANGE TO A12 *** SECURITY LEVEL: NOMINAL ***
                    *** SYSTEM ALERT: HEAVY TRAFFIC SECTOR 7 *** WEATHER UPDATE: STORM FRONT APPROACHING RJTT *** FLIGHT NX-204 GATE CHANGE TO A12 *** SECURITY LEVEL: NOMINAL ***
                </div>
            </div>
        </div>
    );
};

export default DepartureDashboard;
