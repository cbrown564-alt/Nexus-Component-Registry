import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mic,
    Phone,
    Menu,
    Thermometer,
    Wind,
    Car,
    Gauge,
    Battery,
    Zap,
    Settings,
    Volume2,
    Bluetooth,
    Wifi,
    ChevronUp,
    ChevronDown
} from 'lucide-react';
import Speedometer from '../components/cockpit/Speedometer';
import LaneAssist from '../components/cockpit/LaneAssist';
import NavWidget from '../components/cockpit/NavWidget';
import MediaWidget from '../components/cockpit/MediaWidget';
import ClimateControl from '../components/cockpit/ClimateControl';

const CockpitDashboard = () => {
    const [driveMode, setDriveMode] = useState('comfort');
    const [temperature, setTemperature] = useState(72);
    const [showDriveModes, setShowDriveModes] = useState(false);

    const driveModes = [
        { id: 'eco', label: 'ECO', color: 'emerald', icon: '🍃' },
        { id: 'comfort', label: 'COMFORT', color: 'blue', icon: '☁️' },
        { id: 'sport', label: 'SPORT', color: 'orange', icon: '🔥' },
        { id: 'sport+', label: 'SPORT+', color: 'red', icon: '⚡' },
    ];

    const currentMode = driveModes.find(m => m.id === driveMode) || driveModes[1];

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden flex flex-col">

            {/* Top Status Bar */}
            <header className="h-12 bg-gradient-to-b from-zinc-900 to-black/0 flex items-center justify-between px-6 z-50">
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    <span className="flex items-center gap-2">
                        <Wifi className="h-3.5 w-3.5" />
                        Connected
                    </span>
                    <span className="flex items-center gap-2">
                        <Bluetooth className="h-3.5 w-3.5 text-blue-500" />
                        iPhone
                    </span>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium">
                    <span className="text-white">10:42 AM</span>
                    <span className="text-zinc-500">|</span>
                    <span className="text-white">{temperature}°F</span>
                    <span className="text-zinc-500">|</span>
                    <div className="flex items-center gap-1">
                        <Battery className="h-4 w-4 text-emerald-500" />
                        <span className="text-emerald-500">78%</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    <span className="flex items-center gap-2">
                        <Zap className="h-3.5 w-3.5 text-amber-500" />
                        <span className="text-amber-500">Fast Charging</span>
                    </span>
                </div>
            </header>

            {/* Main Dashboard Area */}
            <div
                className="flex-1 p-4 lg:p-8 flex flex-col items-center justify-center"
                style={{ perspective: '2000px' }}
            >
                <div
                    className="w-full max-w-[1600px] flex-1 flex flex-col gap-6"
                    style={{ transform: 'rotateX(3deg)' }}
                >



                    {/* Main Instrument Cluster */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

                        {/* Left Column */}
                        <div className="lg:col-span-3 flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex-1"
                            >
                                <NavWidget />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="h-1/3"
                            >
                                <ClimateControl />
                            </motion.div>
                        </div>

                        {/* Center Column - Unified Driver Display */}
                        <div className="lg:col-span-6 h-full relative group perspective-[1000px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-full w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl"
                            >
                                <LaneAssist
                                    activeMode={driveMode}
                                    onModeChange={setDriveMode}
                                    className="relative"
                                >
                                    <Speedometer embedded />
                                </LaneAssist>
                            </motion.div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-3 flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex-1"
                            >
                                <MediaWidget />
                            </motion.div>

                            {/* Quick Actions */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="grid grid-cols-2 gap-3"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgb(34, 197, 94)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all shadow-lg ring-1 ring-white/5"
                                >
                                    <Phone className="w-6 h-6 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Phone</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgb(59, 130, 246)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all shadow-lg ring-1 ring-white/5"
                                >
                                    <Mic className="w-6 h-6 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Voice</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgb(168, 85, 247)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all shadow-lg ring-1 ring-white/5"
                                >
                                    <Volume2 className="w-6 h-6 text-violet-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Audio</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgb(255, 255, 255)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all shadow-lg ring-1 ring-white/5"
                                >
                                    <Menu className="w-6 h-6 text-zinc-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Apps</span>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Physical Controls Bar */}
            <footer className="h-24 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-center gap-12 px-8 pb-4">
                {/* Climate Quick Controls */}
                <div className="flex items-center gap-6 bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10 ring-1 ring-white/5 shadow-2xl">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTemperature(t => Math.max(60, t - 1))}
                        className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <ChevronDown className="h-6 w-6" />
                    </motion.button>
                    <div className="flex items-center gap-3 px-4 border-x border-white/5">
                        <Thermometer className="h-5 w-5 text-zinc-500" />
                        <span className="text-2xl font-black w-14 text-center text-white">{temperature}°</span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTemperature(t => Math.min(85, t + 1))}
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                    >
                        <ChevronUp className="h-6 w-6" />
                    </motion.button>
                </div>

                {/* Home Indicator */}
                <div className="w-32 h-1.5 bg-zinc-800/50 rounded-full backdrop-blur-md" />

                {/* Settings */}
                <motion.button
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 ring-1 ring-white/5 text-zinc-400 hover:text-white transition-colors shadow-xl"
                >
                    <Settings className="h-6 w-6" />
                </motion.button>
            </footer>

        </div>
    );
};

export default CockpitDashboard;