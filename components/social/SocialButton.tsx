import React from 'react';
import { motion } from 'framer-motion';

interface SocialButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon' | 'follow';
    size?: 'sm' | 'md' | 'lg' | 'icon' | 'fab';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    fullWidth?: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    fullWidth = false,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs rounded-full',
        md: 'px-5 py-2 text-sm rounded-full',
        lg: 'px-8 py-3 text-base rounded-full',
        icon: 'p-2 rounded-full',
        fab: 'h-14 w-14 rounded-full shadow-lg',
    };

    const variantStyles = {
        primary: 'bg-sky-500 text-white hover:bg-sky-600 shadow-sm active:scale-95',
        secondary: 'bg-white text-black hover:bg-zinc-200 active:scale-95',
        ghost: 'bg-transparent text-zinc-400 hover:text-sky-500 hover:bg-sky-500/10 active:scale-95',
        icon: 'text-zinc-500 hover:bg-sky-500/10 hover:text-sky-500 active:scale-90',
        follow: 'bg-white text-black hover:bg-zinc-200 active:scale-95',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default SocialButton;
