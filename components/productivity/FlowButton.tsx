import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FlowButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const FlowButton: React.FC<FlowButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-lg shadow-amber-500/20';
            case 'secondary':
                return 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700';
            case 'ghost':
                return 'bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50';
            default:
                return 'bg-amber-500 text-zinc-950';
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'px-3 py-1 text-xs rounded-md';
            case 'lg':
                return 'px-6 py-3 text-base rounded-lg';
            default:
                return 'px-4 py-2 text-sm rounded-md';
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`
        relative inline-flex items-center justify-center 
        font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
            {...props}
        >
            {/* Pulse effect for primary */}
            {variant === 'primary' && (
                <motion.span
                    className="absolute inset-0 rounded-md bg-amber-400"
                    initial={{ opacity: 0, scale: 1 }}
                    whileHover={{
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.1, 1.2],
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default FlowButton;
