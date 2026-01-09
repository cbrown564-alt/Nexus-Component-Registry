import React from 'react';
import { motion } from 'framer-motion';

interface FintechButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const FintechButton: React.FC<FintechButtonProps> = ({
    children,
    variant = 'secondary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    type = 'button',
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs rounded-md',
        md: 'px-4 py-2.5 text-sm rounded-lg',
        lg: 'px-6 py-3 text-base rounded-lg',
    };

    const variantStyles = {
        primary: 'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-400 hover:to-emerald-500 focus:ring-emerald-500 active:shadow-emerald-500/20',
        secondary: 'bg-gradient-to-b from-zinc-800 to-zinc-900 text-zinc-100 border border-zinc-700 hover:from-zinc-700 hover:to-zinc-800 hover:border-zinc-600 focus:ring-zinc-500 shadow-sm',
        ghost: 'bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 focus:ring-zinc-500',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {/* Shimmer effect for primary variant */}
            {variant === 'primary' && (
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:animate-[shimmer_1.5s_ease-in-out]" />
            )}

            {/* Inner highlight for depth */}
            {variant !== 'ghost' && (
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="shrink-0">{icon}</span>}
                {children}
            </span>
        </motion.button>
    );
};

export default FintechButton;
