import React from 'react';
import { motion } from 'framer-motion';

interface KidsButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'success';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    color?: string; // Allow custom color override
}

const KidsButton: React.FC<KidsButtonProps> = ({
    children,
    variant = 'primary',
    size = 'lg',
    icon,
    className = '',
    disabled = false,
    onClick,
    color,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-3 font-black uppercase tracking-wider transition-all border-b-4 active:border-b-0 active:translate-y-1 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm rounded-xl',
        md: 'px-6 py-3 text-lg rounded-2xl',
        lg: 'px-8 py-4 text-xl rounded-3xl',
    };

    const defaultColors = {
        primary: 'bg-orange-400 border-orange-600 text-white hover:bg-orange-300',
        secondary: 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50',
        accent: 'bg-sky-400 border-sky-600 text-white hover:bg-sky-300',
        success: 'bg-green-400 border-green-600 text-white hover:bg-green-300',
    };

    const colorStyle = color ? `bg-${color}-400 border-${color}-600 text-white hover:bg-${color}-300` : defaultColors[variant];

    return (
        <motion.button
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1] }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className={`${baseStyles} ${sizeStyles[size]} ${colorStyle} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Glossy top reflection */}
            <span className="absolute top-1 left-2 right-2 h-1/3 bg-white/20 rounded-full blur-[1px]" />

            {icon && <span className="shrink-0 drop-shadow-sm">{icon}</span>}
            <span className="drop-shadow-sm">{children}</span>
        </motion.button>
    );
};

export default KidsButton;
