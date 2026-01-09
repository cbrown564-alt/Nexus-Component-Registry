import React from 'react';
import { motion } from 'framer-motion';

interface KitchenButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    isActive?: boolean;
}

const KitchenButton: React.FC<KitchenButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    isActive = false,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-bold transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs rounded-xl',
        md: 'px-5 py-2.5 text-sm rounded-2xl',
        lg: 'px-8 py-3.5 text-base rounded-2xl',
        icon: 'p-3 rounded-xl',
    };

    // Warm, tactile cooking feel
    const variantStyles = {
        primary: 'bg-orange-500 text-white border-2 border-orange-600 shadow-[4px_4px_0px_#fed7aa] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#fed7aa] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none',
        secondary: `bg-[#FFFBF7] text-stone-700 border-2 border-stone-200 shadow-[4px_4px_0px_#e7e5e4] hover:bg-white hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_#e7e5e4] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none ${isActive ? 'bg-orange-50 border-orange-200 text-orange-700' : ''}`,
        ghost: 'bg-transparent text-stone-500 hover:bg-stone-100/50 hover:text-stone-800 border-2 border-transparent',
        icon: 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default KitchenButton;
