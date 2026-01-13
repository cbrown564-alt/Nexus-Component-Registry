import React from 'react';
import { motion } from 'framer-motion';

interface GlitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
}

const GlitchButton: React.FC<GlitchButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {

    const getColors = () => {
        switch (variant) {
            case 'secondary': return 'border-pink-500 text-pink-500 hover:text-pink-400 group-hover:text-pink-400';
            case 'danger': return 'border-red-500 text-red-500 hover:text-red-400 group-hover:text-red-400';
            default: return 'border-green-500 text-green-500 hover:text-green-400 group-hover:text-green-400';
        }
    };

    const getShadow = () => {
        switch (variant) {
            case 'secondary': return 'hover:shadow-[4px_4px_0px_#ec4899]';
            case 'danger': return 'hover:shadow-[4px_4px_0px_#ef4444]';
            default: return 'hover:shadow-[4px_4px_0px_#22c55e]';
        }
    };

    return (
        <button
            className={`group relative px-8 py-3 bg-black border border-current font-mono uppercase tracking-widest text-sm font-bold transition-all duration-100 ${getColors()} ${getShadow()} ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-75">
                {children}
            </span>

            {/* Glitch Layers */}
            <span className="absolute top-0 left-0 w-full h-full bg-current opacity-0 group-hover:opacity-20 translate-x-1 translate-y-1 transition-all duration-75 pointer-events-none" />
            <span className="absolute top-0 left-0 w-full h-full border border-current opacity-0 group-hover:opacity-100 translate-x-1 translate-y-1 transition-all duration-75 pointer-events-none mix-blend-difference" />

        </button>
    );
};

export default GlitchButton;
