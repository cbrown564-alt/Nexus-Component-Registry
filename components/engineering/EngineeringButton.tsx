import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface EngineeringButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const EngineeringButton: React.FC<EngineeringButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-lg shadow-white/10';
            case 'secondary':
                return 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700';
            case 'ghost':
                return 'bg-transparent text-zinc-300 hover:bg-zinc-800/50 hover:text-white border border-zinc-800 hover:border-zinc-700';
            default:
                return 'bg-white text-zinc-950 hover:bg-zinc-200';
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'px-3 py-1.5 text-xs';
            case 'lg':
                return 'px-8 py-3 text-base';
            default:
                return 'px-6 py-2 text-sm';
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950 ${getVariantStyles()} ${getSizeStyles()} ${className}`}
            {...props}
        >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default EngineeringButton;
