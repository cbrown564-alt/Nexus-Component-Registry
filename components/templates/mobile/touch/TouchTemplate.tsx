import { touchDevices } from '@/data/templates/touch';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { ArrowLeft, Zap, Thermometer, Lock, Unlock, Speaker, Power, Home, Settings, Menu, GripHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const icons: Record<string, any> = {
    Zap,
    Thermometer,
    Lock,
    Speaker
};

export default function TouchTemplate() {
    return (
        <div className="fixed inset-0 bg-[#e0e5ec] text-[#4a5568] overflow-hidden font-sans select-none flex flex-col">
            {/* Subtle Plastic Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Header / Status LCD */}
            <div className="relative z-10 pt-12 pb-6 px-8 flex justify-between items-end">
                <Link to="/mobile/templates">
                    <NeumorphicButton size={12} icon={ArrowLeft} />
                </Link>
                <div className="flex flex-col items-center">
                    <div className="bg-[#c8d0da] px-4 py-1 rounded shadow-[inset_2px_2px_5px_#a6b4c3,inset_-2px_-2px_5px_#ffffff] mb-2 border-b border-white/50">
                        <span className="font-mono text-[10px] tracking-widest text-[#718096] uppercase">System Online</span>
                    </div>
                    <h2 className="text-lg font-bold tracking-tight text-[#4a5568]">Living Room</h2>
                </div>
                <NeumorphicButton size={12} icon={Settings} />
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto no-scrollbar pb-32 relative z-10">
                {/* Environmental Dial */}
                <div className="flex justify-center my-6">
                    <ThermostatDial />
                </div>

                {/* Device Grid */}
                <div className="px-6 grid grid-cols-2 gap-5">
                    {touchDevices.map(device => (
                        <DeviceCard key={device.id} device={device} />
                    ))}
                </div>
            </div>

            {/* Bottom Control Deck */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <ControlDeck />
            </div>
        </div>
    );
}

function ThermostatDial() {
    const [temp, setTemp] = useState(72);
    const [isDragging, setIsDragging] = useState(false);
    const dialRef = useRef<HTMLDivElement>(null);
    const center = useRef({ x: 0, y: 0 });

    const handlePanStart = () => {
        setIsDragging(true);
        if (dialRef.current) {
            const rect = dialRef.current.getBoundingClientRect();
            center.current = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            };
        }
    };

    const handlePan = (_: any, info: any) => {
        const deltaX = info.point.x - center.current.x;
        const deltaY = info.point.y - center.current.y;
        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        if (angle < 0) angle += 360;

        // Map angle to temp (60-90 range)
        // 0 degrees = 90 (bottom/max-ish), 180 = 60 (top/min-ish) - let's adjust mapping
        // Let's use 90deg (bottom) as the "break" point
        // Map 120deg (bottom left) -> 60deg (bottom right) clockwise
        // Clamping logic:
        // If angle is between 90 and 120, ignore (dead zone)

        // Simplified full circle mapping for smoothness:
        const newTemp = Math.round(60 + (angle / 360) * 30);

        if (newTemp !== temp) {
            setTemp(newTemp);
            if (navigator.vibrate) navigator.vibrate(5);
        }
    };

    const rotation = ((temp - 60) / 30) * 360;

    return (
        <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Base Shadow & Ring */}
            <div className="absolute inset-0 rounded-full bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]" />

            {/* Rotating Knob */}
            <motion.div
                ref={dialRef}
                className="absolute inset-4 rounded-full bg-[#e0e5ec] border-[1px] border-white/20 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
                style={{ rotate: rotation }}
                onPanStart={handlePanStart}
                onPan={handlePan}
                onPanEnd={() => setIsDragging(false)}
            >
                {/* Physical Texture/Grip */}
                <div className="absolute inset-0 rounded-full opacity-50"
                    style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(0,0,0,0.03) 50%, transparent 100%)' }} />

                {/* Skeuomorphic Indicator (Dimple with LED) */}
                <div className="absolute top-6 left-1/2 -ml-3 w-6 h-6 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isDragging ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'bg-blue-500/50'}`} />
                </div>
            </motion.div>

            {/* Static Center Display (Floating above) */}
            <div className="absolute inset-24 rounded-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex flex-col items-center justify-center pointer-events-none z-10 border border-white/10">
                <span className="text-5xl font-black text-[#4a5568] tracking-tighter drop-shadow-sm select-none">{temp}°</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 transition-colors ${temp < 72 ? 'text-blue-500' : temp > 75 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {temp < 72 ? 'Cooling' : temp > 75 ? 'Heating' : 'Eco'}
                </span>
            </div>
        </div>
    )
}

function ControlDeck() {
    return (
        <div className="relative pt-6 pb-8 px-8 bg-[#e0e5ec] rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border-t border-white/50">
            {/* Screws */}
            <Screw className="absolute top-6 left-6" />
            <Screw className="absolute top-6 right-6" />

            {/* Deck Surface */}
            <div className="flex justify-center items-center gap-10 mt-2">
                <DeckButton icon={Home} label="HOME" active />
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#cbd5e0] to-transparent" />
                <DeckButton icon={Menu} label="ZONES" />
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#cbd5e0] to-transparent" />
                <DeckButton icon={Power} label="SYSTEM" color="text-rose-500" />
            </div>

            {/* Grip Texture */}
            <div className="w-20 mx-auto mt-6 flex gap-1 justify-center opacity-20">
                {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-black" />)}
            </div>
        </div>
    )
}

function Screw({ className }: { className?: string }) {
    return (
        <div className={`w-3 h-3 rounded-full bg-gradient-to-br from-[#d4dce6] to-[#a0aec0] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),1px_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center ${className}`}>
            <div className="w-full h-[1px] bg-[#718096] rotate-45 opacity-60" />
            <div className="absolute w-full h-[1px] bg-[#718096] -rotate-45 opacity-60" />
        </div>
    )
}

function DeckButton({ icon: Icon, label, active, color = "text-[#4a5568]" }: any) {
    return (
        <button className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
            <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-200
                ${active
                    ? 'shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff] bg-[#e0e5ec]'
                    : 'shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] bg-gradient-to-tl from-[#e0e5ec] to-[#f0f5fa]'
                }
            `}>
                <Icon className={`w-6 h-6 ${active ? 'text-blue-500' : color} transition-colors`} strokeWidth={2.5} />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-[#718096] opacity-60 group-hover:opacity-100 transition-opacity">
                {label}
            </span>
        </button>
    )
}

function NeumorphicButton({ size = 12, icon: Icon, active, color = "text-[#4a5568]" }: any) {
    return (
        <button
            className={`
                w-${size} h-${size} rounded-xl flex items-center justify-center transition-all duration-200 active:scale-95
                ${active
                    ? 'shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] text-blue-500'
                    : 'shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] hover:shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff]'
                }
                ${!active && color}
            `}
        >
            <Icon className="w-1/2 h-1/2" strokeWidth={2.5} />
        </button>
    )
}

function DeviceCard({ device }: { device: any }) {
    const [isOn, setIsOn] = useState(device.state);
    const Icon = icons[device.icon] || Zap;

    return (
        <button
            onClick={() => setIsOn(!isOn)}
            className={`
                aspect-square rounded-[2rem] p-5 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden group
                ${isOn
                    ? 'shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]'
                    : 'shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:translate-y-[-2px]'
                }
            `}
        >
            {/* LED Status Light */}
            <div className={`absolute top-5 right-5 w-2 h-2 rounded-full transition-colors duration-300 ${isOn ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-[#cbd5e0] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]'}`} />

            <div className={`transition-colors duration-300 ${isOn ? 'text-blue-600' : 'text-[#a0aec0]'}`}>
                <Icon className="w-8 h-8" strokeWidth={2} />
            </div>

            <div>
                <h3 className={`font-bold text-lg leading-tight transition-colors duration-300 ${isOn ? 'text-[#2d3748]' : 'text-[#718096]'}`}>
                    {device.name}
                </h3>
                <p className="text-[10px] font-bold mt-1 text-[#a0aec0] uppercase tracking-wider">
                    {isOn ? (device.value ? `${device.value}${device.unit}` : 'Active') : 'Standby'}
                </p>
            </div>
        </button>
    )
}
