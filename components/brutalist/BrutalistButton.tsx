import React from 'react';
import { motion } from 'framer-motion';

interface BrutalistButtonProps {
    children?: React.ReactNode;
    variant?: 'neo' | 'reverse' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    color?: string; // Allow custom background colors for brutalist style
}

const BrutalistButton: React.FC<BrutalistButtonProps> = ({
    children,
    variant = 'neo',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    color,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wide border-2 border-black transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-8 py-4 text-base',
        icon: 'p-3',
    };

    // Base colors if not overridden
    const defaultColors = {
        neo: 'bg-white text-black',
        reverse: 'bg-black text-white',
        outline: 'bg-transparent text-black',
    };

    const shadowStyles = 'shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000]';

    const styleClass = color ? color : defaultColors[variant];

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${sizeStyles[size]} ${styleClass} ${variant !== 'outline' ? shadowStyles : 'shadow-none hover:bg-black hover:text-white'} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default BrutalistButton;
