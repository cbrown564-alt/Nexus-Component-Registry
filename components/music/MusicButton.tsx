import React from 'react';
import { motion } from 'framer-motion';

interface MusicButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'pill';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const MusicButton: React.FC<MusicButtonProps> = ({
    children,
    variant = 'secondary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs rounded-md',
        md: 'px-4 py-2 text-sm rounded-lg',
        lg: 'px-6 py-3 text-base rounded-lg',
        icon: 'h-12 w-12 rounded-full',
    };

    // Spotify/music app aesthetic - rose/violet accent, dark theme
    const variantStyles = {
        primary: 'bg-rose-500 text-white hover:bg-rose-400 hover:scale-105 shadow-lg shadow-rose-500/30 active:scale-95',
        secondary: 'bg-white/10 text-white border border-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/20 active:scale-95',
        ghost: 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/5',
        pill: 'bg-white text-black font-bold hover:scale-105 active:scale-95 rounded-full',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : (variant === 'ghost' ? 1 : 1.05) }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Glow effect for primary play button */}
            {variant === 'primary' && size === 'icon' && (
                <span className="absolute inset-0 rounded-full bg-rose-500/50 blur-md -z-10" />
            )}

            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default MusicButton;
