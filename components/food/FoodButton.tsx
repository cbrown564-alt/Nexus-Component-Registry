import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FoodButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const FoodButton: React.FC<FoodButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-orange-500 text-white hover:bg-orange-400 shadow-lg shadow-orange-500/25';
            case 'secondary':
                return 'bg-stone-800 text-stone-100 hover:bg-stone-700 border border-stone-700';
            case 'outline':
                return 'bg-transparent text-stone-300 hover:text-white border border-stone-700 hover:border-orange-500 hover:bg-orange-500/10';
            case 'ghost':
                return 'bg-stone-900/50 border border-stone-800 text-stone-400 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10';
            default:
                return 'bg-orange-500 text-white hover:bg-orange-400';
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'px-3 py-1.5 text-xs rounded-lg';
            case 'lg':
                return 'px-8 py-4 text-base rounded-2xl';
            default:
                return 'px-6 py-3 text-sm rounded-xl';
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 ${getVariantStyles()} ${getSizeStyles()} ${className}`}
            {...props}
        >
            {variant === 'primary' && (
                <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-orange-600/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            )}
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default FoodButton;
