import React from 'react';
import { motion } from 'framer-motion';

interface SaasButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'control';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    active?: boolean;
}

const SaasButton: React.FC<SaasButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    active = false,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-slate-900 rounded-md';

    const sizeStyles = {
        xs: 'px-2.5 py-1 text-xs',
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-5 py-2.5 text-sm',
    };

    const variantStyles = {
        primary: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm shadow-indigo-900/20 border border-transparent focus:ring-indigo-500',
        secondary: 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-600 focus:ring-slate-500',
        ghost: 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50 focus:ring-slate-500',
        control: `text-xs font-medium transition-colors ${active ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`,
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.01 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default SaasButton;
