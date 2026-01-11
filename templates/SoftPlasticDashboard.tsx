import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home,
    Lightbulb,
    Lock,
    Tv,
    Wifi,
    Music,
    Settings,
    Thermometer,
    Power,
    Grid,
    Sun,
    Moon,
    Wind,
    Droplets,
    Cloud
} from 'lucide-react';
import NeumorphicCard from '../components/softplastic/NeumorphicCard';
import NeumorphicButton from '../components/softplastic/NeumorphicButton';
import ThermostatDial from '../components/softplastic/ThermostatDial';
import DeviceToggle from '../components/softplastic/DeviceToggle';
import { useTheme } from '@/context/ThemeContext';

const SoftPlasticDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    useEffect(() => {
        setScopedTheme('experimental', 'soft-plastic');
    }, []);

    const [activeRoom, setActiveRoom] = useState('Living Room');
    const [lightingColor, setLightingColor] = useState('#60A5FA'); // Default blue

    const rooms = ['Living Room', 'Bedroom', 'Kitchen', 'Office', 'Garage'];
    const scenes = [
        { id: 'morning', icon: Sun, label: 'Morning' },
        { id: 'away', icon: Lock, label: 'Away' },
        { id: 'movie', icon: Tv, label: 'Movie' },
        { id: 'sleep', icon: Moon, label: 'Sleep' },
    ];

    return (
        <div
            className="min-h-screen font-sans p-6 md:p-10 overflow-x-hidden selection:bg-slate-300 selection:text-slate-800"
            style={{ backgroundColor: theme.colors.background, color: theme.colors.foreground }}
        >

            {/* Top Bar */}
            <header className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                    <NeumorphicButton icon={Grid} variant="square" className="h-14 w-14 rounded-2xl" style={{ color: theme.colors.mutedForeground }} />
                    <div>
                        <h1 className="text-3xl font-black tracking-tight" style={{ color: theme.colors.cardForeground }}>My Home</h1>
                        <p className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.colors.mutedForeground }}>Good Morning, Alex</p>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full shadow-[inset_4px_4px_8px_#D1D9E6,inset_-4px_-4px_8px_#FFFFFF]" style={{ backgroundColor: theme.colors.background }}>
                        <Cloud className="w-5 h-5" style={{ color: theme.colors.mutedForeground }} />
                        <span className="font-bold" style={{ color: theme.colors.foreground }}>72°F</span>
                    </div>
                    <div className="h-14 w-14 rounded-full overflow-hidden border-4 shadow-[6px_6px_12px_#D1D9E6,-6px_-6px_12px_#FFFFFF]" style={{ borderColor: theme.colors.background }}>
                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="Profile" className="h-full w-full bg-slate-200" />
                    </div>
                </div>
            </header>

            {/* Room Selector (Horizontal Scroll) */}
            <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide mb-2">
                {rooms.map((room) => (
                    <NeumorphicButton
                        key={room}
                        label={room}
                        active={activeRoom === room}
                        onClick={() => setActiveRoom(room)}
                        variant="pill"
                        className="shrink-0 text-sm font-bold"
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Main Controls Column */}
                <div className="lg:col-span-8 flex flex-col gap-8">

                    {/* Scenes / Quick Actions */}
                    <div>
                        <h2 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: theme.colors.cardForeground }}>
                            <span className="w-2 h-2 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]" style={{ backgroundColor: theme.colors.secondary }} />
                            Scenes
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {scenes.map((scene) => (
                                <NeumorphicButton
                                    key={scene.id}
                                    icon={scene.icon}
                                    label={scene.label}
                                    className="rounded-3xl aspect-square flex-col !gap-3 text-lg"
                                    onClick={() => { }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Devices List */}
                    <div className="flex-1">
                        <h2 className="text-lg font-bold mb-6 flex items-center gap-2" style={{ color: theme.colors.cardForeground }}>
                            <span className="w-2 h-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" style={{ backgroundColor: theme.colors.primary }} />
                            Devices
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <DeviceToggle label="Main Lights" icon={Lightbulb} initialState={true} />
                            <DeviceToggle label="Smart Lock" icon={Lock} initialState={true} />
                            <DeviceToggle label="Living Room TV" icon={Tv} initialState={false} />
                            <DeviceToggle label="Air Purifier" icon={Wind} initialState={true} />
                            <DeviceToggle label="Humidifier" icon={Droplets} initialState={false} />
                            <DeviceToggle label="Floor Lamp" icon={Lightbulb} initialState={false} />
                        </div>
                    </div>

                </div>

                {/* Right Column: Interactive Widgets */}
                <div className="lg:col-span-4 flex flex-col gap-8">

                    {/* Thermostat */}
                    <div className="aspect-square relative">
                        <div className="absolute inset-0 rounded-full shadow-[20px_20px_40px_#D1D9E6,-20px_-20px_40px_#FFFFFF]" style={{ backgroundColor: theme.colors.background }} />
                        <div className="relative z-10">
                            <ThermostatDial />
                        </div>
                    </div>

                    {/* New: Ambiance Controller (Color Picker) */}
                    <NeumorphicCard className="p-8 flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-6 w-full text-left flex justify-between items-center" style={{ color: theme.colors.mutedForeground }}>
                            <span>Ambiance</span>
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lightingColor }} />
                        </h3>

                        <div className="grid grid-cols-3 gap-6 w-full max-w-[200px]">
                            {['#F87171', '#FB923C', '#FACC15', '#4ADE80', '#60A5FA', '#A78BFA'].map((color) => (
                                <motion.button
                                    key={color}
                                    onClick={() => setLightingColor(color)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 rounded-full relative"
                                    style={{ backgroundColor: color }}
                                >
                                    {/* Glossy overlay */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/10 to-white/40 pointer-events-none" />

                                    {/* Selection Indicator */}
                                    {lightingColor === color && (
                                        <motion.div
                                            layoutId="activeColor"
                                            className="absolute -inset-2 rounded-full border-4 shadow-[6px_6px_12px_#D1D9E6,-6px_-6px_12px_#FFFFFF]"
                                            style={{ borderColor: theme.colors.background }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Slider simulation */}
                        <div className="mt-10 w-full h-4 rounded-full shadow-[inset_3px_3px_6px_#D1D9E6,inset_-3px_-3px_6px_#FFFFFF] relative" style={{ backgroundColor: theme.colors.background }}>
                            <div
                                className="absolute top-1/2 -translate-y-1/2 h-8 w-8 rounded-full shadow-[4px_4px_8px_#D1D9E6,-4px_-4px_8px_#FFFFFF] cursor-pointer"
                                style={{ left: '60%', backgroundColor: theme.colors.background }}
                            >
                                <div className="absolute inset-2 rounded-full bg-slate-300/50" />
                            </div>
                            <div className="absolute -top-6 left-0 right-0 flex justify-between text-xs font-bold" style={{ color: theme.colors.mutedForeground }}>
                                <span className="opacity-50">Dim</span>
                                <span>Bright</span>
                            </div>
                        </div>

                    </NeumorphicCard>
                </div>

            </div>
        </div>
    );
};

export default SoftPlasticDashboard;