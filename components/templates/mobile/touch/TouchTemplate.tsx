import { touchDevices } from '@/data/templates/touch';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Thermometer, Lock, Unlock, Speaker, Power, Home, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const icons: Record<string, any> = {
    Zap,
    Thermometer,
    Lock,
    Speaker
};

export default function TouchTemplate() {
    return (
        <div className="fixed inset-0 bg-[#e0e5ec] text-[#4a5568] overflow-y-auto no-scrollbar font-sans select-none">
            {/* Header */}
            <div className="flex items-center justify-between px-8 pt-10 pb-6">
                <Link to="/mobile/templates">
                    <NeumorphicButton size={12} icon={ArrowLeft} />
                </Link>
                <div className="text-center">
                    <h2 className="text-xl font-bold tracking-tight">My Home</h2>
                    <p className="text-xs font-semibold opacity-50 uppercase tracking-widest">Active Mode</p>
                </div>
                <NeumorphicButton size={12} icon={Settings} />
            </div>

            {/* Environmental Dial */}
            <div className="flex justify-center my-8">
                <div className="w-64 h-64 rounded-full bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex items-center justify-center relative">
                    <div className="absolute inset-4 rounded-full border-[10px] border-[#e0e5ec] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]" />
                    <div className="text-center z-10">
                        <span className="text-6xl font-black text-[#4a5568]">72°</span>
                        <p className="font-medium text-[#718096] mt-2">Cooling</p>
                    </div>
                    {/* Dial Indicator */}
                    <div className="absolute w-4 h-4 rounded-full bg-blue-500 top-8 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
            </div>

            {/* Device Grid */}
            <div className="px-6 grid grid-cols-2 gap-6 pb-24">
                {touchDevices.map(device => (
                    <DeviceCard key={device.id} device={device} />
                ))}
            </div>

            {/* Bottom Nav */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
                <NeumorphicButton size={16} icon={Home} active />
                <NeumorphicButton size={16} icon={Power} color="text-red-500" />
            </div>
        </div>
    );
}

function NeumorphicButton({ size = 12, icon: Icon, active, color = "text-[#4a5568]" }: any) {
    return (
        <button
            className={`
                w-${size} h-${size} rounded-2xl flex items-center justify-center transition-all duration-200
                ${active
                    ? 'shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] text-blue-500'
                    : 'shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff] hover:shadow-[6px_6px_10px_#bebebe,-6px_-6px_10px_#ffffff] active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]'
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
                aspect-square rounded-3xl p-5 flex flex-col justify-between text-left transition-all duration-300
                ${isOn
                    ? 'bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]'
                    : 'bg-[#e0e5ec] shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff]'
                }
            `}
        >
            <div className="flex justify-between items-start w-full">
                <Icon className={`w-8 h-8 ${isOn ? 'text-blue-500' : 'text-[#a0aec0]'}`} />
                <div className={`w-3 h-3 rounded-full ${isOn ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-[#cbd5e0]'}`} />
            </div>

            <div>
                <h3 className={`font-bold text-lg leading-tight ${isOn ? 'text-[#2d3748]' : 'text-[#a0aec0]'}`}>
                    {device.name}
                </h3>
                <p className="text-xs font-semibold mt-1 opacity-60">
                    {isOn ? (device.value ? `${device.value}${device.unit}` : 'On') : 'Off'}
                </p>
            </div>
        </button>
    )
}
