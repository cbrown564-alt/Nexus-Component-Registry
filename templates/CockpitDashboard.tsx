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

                    {/* Drive Mode Selector - Floating */}
                    <motion.div
                        className="absolute top-20 left-1/2 -translate-x-1/2 z-50"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <motion.button
                            onClick={() => setShowDriveModes(!showDriveModes)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border transition-all ${driveMode === 'sport+' ? 'bg-red-500/20 border-red-500/50 text-red-400' :
                                    driveMode === 'sport' ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' :
                                        driveMode === 'eco' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' :
                                            'bg-blue-500/20 border-blue-500/50 text-blue-400'
                                }`}
                        >
                            <span className="text-lg">{currentMode.icon}</span>
                            <span className="font-bold uppercase tracking-widest text-sm">{currentMode.label}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${showDriveModes ? 'rotate-180' : ''}`} />
                        </motion.button>

                        <AnimatePresence>
                            {showDriveModes && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl overflow-hidden"
                                >
                                    {driveModes.map((mode) => (
                                        <motion.button
                                            key={mode.id}
                                            onClick={() => {
                                                setDriveMode(mode.id);
                                                setShowDriveModes(false);
                                            }}
                                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                                            className={`flex items-center gap-3 px-6 py-3 w-full transition-colors ${driveMode === mode.id ? `text-${mode.color}-400` : 'text-zinc-400'
                                                }`}
                                        >
                                            <span className="text-lg">{mode.icon}</span>
                                            <span className="font-bold uppercase tracking-widest text-sm">{mode.label}</span>
                                            {driveMode === mode.id && (
                                                <span className={`ml-auto h-2 w-2 rounded-full bg-${mode.color}-500`} />
                                            )}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Main Instrument Cluster */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">

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

                        {/* Center Column - Driving View */}
                        <div className="lg:col-span-6 flex flex-col gap-4 relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="h-[60%]"
                            >
                                <LaneAssist />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="h-[40%]"
                            >
                                <Speedometer />
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
                                    whileHover={{ scale: 1.02, borderColor: 'rgb(34, 197, 94)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-zinc-900/80 backdrop-blur border-2 border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-colors"
                                >
                                    <Phone className="w-7 h-7 text-emerald-500" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Phone</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02, borderColor: 'rgb(59, 130, 246)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-zinc-900/80 backdrop-blur border-2 border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-colors"
                                >
                                    <Mic className="w-7 h-7 text-blue-500" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Voice</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02, borderColor: 'rgb(168, 85, 247)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-zinc-900/80 backdrop-blur border-2 border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-colors"
                                >
                                    <Volume2 className="w-7 h-7 text-violet-500" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Audio</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02, borderColor: 'rgb(156, 163, 175)' }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-zinc-900/80 backdrop-blur border-2 border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-colors"
                                >
                                    <Menu className="w-7 h-7 text-zinc-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Apps</span>
                                </motion.button>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Physical Controls Bar */}
            <footer className="h-20 bg-gradient-to-t from-zinc-900 to-black/0 border-t border-zinc-800/50 flex items-center justify-center gap-8 px-8">
                {/* Climate Quick Controls */}
                <div className="flex items-center gap-4 bg-zinc-900/80 rounded-full px-4 py-2 border border-zinc-800">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTemperature(t => Math.max(60, t - 1))}
                        className="p-2 text-blue-400 hover:text-blue-300"
                    >
                        <ChevronDown className="h-5 w-5" />
                    </motion.button>
                    <div className="flex items-center gap-2 px-4">
                        <Thermometer className="h-5 w-5 text-zinc-500" />
                        <span className="text-xl font-bold w-12 text-center">{temperature}°</span>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setTemperature(t => Math.min(85, t + 1))}
                        className="p-2 text-red-400 hover:text-red-300"
                    >
                        <ChevronUp className="h-5 w-5" />
                    </motion.button>
                </div>

                {/* Home Indicator */}
                <div className="w-32 h-1 bg-zinc-700 rounded-full" />

                {/* Settings */}
                <motion.button
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-zinc-900/80 rounded-full border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                    <Settings className="h-5 w-5" />
                </motion.button>
            </footer>

        </div>
    );
};

export default CockpitDashboard;