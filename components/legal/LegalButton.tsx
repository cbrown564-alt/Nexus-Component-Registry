import React from 'react';
import { motion } from 'framer-motion';

interface LegalButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'toolbar' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const LegalButton: React.FC<LegalButtonProps> = ({
    children,
    variant = 'secondary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    type = 'button',
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-2.5 py-1.5 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    // Professional, authoritative styling - sharp corners, subtle borders
    const variantStyles = {
        primary: 'bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 hover:shadow-md focus:ring-blue-500 active:bg-blue-800 font-semibold',
        secondary: 'bg-white text-stone-700 border border-stone-300 rounded-md shadow-sm hover:bg-stone-50 hover:border-stone-400 focus:ring-stone-500 active:bg-stone-100',
        toolbar: 'bg-transparent text-stone-600 rounded hover:bg-stone-100 hover:text-stone-900 focus:ring-stone-400 active:bg-stone-200',
        ghost: 'bg-transparent text-stone-600 hover:text-stone-900 focus:ring-stone-400 group',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled || variant === 'ghost' ? 1 : 1.01 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.1 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            <span className="relative">
                {children}
                {/* Underline animation for ghost variant */}
                {variant === 'ghost' && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-px bg-stone-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                )}
            </span>
        </motion.button>
    );
};

export default LegalButton;
