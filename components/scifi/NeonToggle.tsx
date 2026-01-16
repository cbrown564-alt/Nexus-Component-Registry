import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';

interface NeonToggleProps {
    label?: string;
    initialState?: boolean;
    onChange?: (state: boolean) => void;
    color?: string;
    className?: string;
}

const NeonToggle: React.FC<NeonToggleProps> = ({
    label,
    initialState = false,
    onChange,
    color = "cyan", // cyan, magenta, green, etc.
    className = ""
}) => {
    const [isOn, setIsOn] = useState(initialState);
    const { theme } = useTheme();

    const handleToggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        if (onChange) onChange(newState);
    };

    // Color mapping for shadow glow
    const glowColors: Record<string, string> = {
        cyan: 'shadow-[0_0_15px_rgba(6,182,212,0.8)] border-cyan-400 bg-cyan-400',
        magenta: 'shadow-[0_0_15px_rgba(232,121,249,0.8)] border-fuchsia-400 bg-fuchsia-400',
        green: 'shadow-[0_0_15px_rgba(34,197,94,0.8)] border-green-400 bg-green-400',
        amber: 'shadow-[0_0_15px_rgba(245,158,11,0.8)] border-amber-400 bg-amber-400',
    };

    const textColors: Record<string, string> = {
        cyan: 'text-cyan-400',
        magenta: 'text-fuchsia-400',
        green: 'text-green-400',
        amber: 'text-amber-400',
    };

    const activeFormat = glowColors[color] || glowColors.cyan;
    const activeText = textColors[color] || textColors.cyan;

    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <button
                onClick={handleToggle}
                className={`relative w-16 h-8 rounded-full border-2 transition-all duration-300 ${isOn
                    ? `border-opacity-100 ${activeFormat.replace('bg-', 'bg-opacity-10 ')}`
                    : 'shadow-none'
                    }`}
                style={{
                    borderColor: !isOn ? theme.colors.border : undefined,
                    backgroundColor: !isOn ? theme.colors.secondary : undefined
                }}
                aria-pressed={isOn}
                role="switch"
            >
                {/* Toggle Head */}
                <motion.div
                    className={`absolute top-1 left-1 w-5 h-5 rounded-full shadow-md transition-all duration-300 ${isOn ? activeFormat : ''
                        }`}
                    style={{ backgroundColor: !isOn ? theme.colors.muted : undefined }}
                    animate={{ x: isOn ? 32 : 0 }}
                    transition={{ ...motionTokens.transition.spring }}
                >
                    {/* Shine effect on the knob */}
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full opacity-40" style={{ backgroundColor: '#ffffff' }} />
                </motion.div>

                {/* Track lines for detail */}
                <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none opacity-20">
                    <div className="w-full h-[1px] bg-current" />
                </div>
            </button>

            {label && (
                <span
                    className={`font-mono text-sm uppercase tracking-wider transition-all duration-300 ${isOn
                        ? `${activeText} font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`
                        : ''
                        }`}
                    style={{ color: !isOn ? theme.colors.mutedForeground : undefined }}
                >
                    {label}
                </span>
            )}
        </div>
    );
};

export default NeonToggle;
