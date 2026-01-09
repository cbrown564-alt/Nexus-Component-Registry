import React from 'react';
import { motion } from 'framer-motion';

interface EducationButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const EducationButton: React.FC<EducationButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-4 py-2 text-xs rounded-lg',
        md: 'px-6 py-3 text-sm rounded-xl',
        lg: 'px-8 py-4 text-base rounded-xl',
    };

    const variantStyles = {
        primary: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:from-violet-500 hover:to-indigo-500 focus:ring-violet-500 active:scale-95',
        secondary: 'bg-violet-100 text-violet-700 hover:bg-violet-200 focus:ring-violet-400 active:scale-95',
        outline: 'bg-transparent border-2 border-violet-600/50 text-violet-600 hover:bg-violet-50 hover:border-violet-600 focus:ring-violet-400',
        ghost: 'bg-transparent text-violet-600 hover:bg-violet-50 focus:ring-violet-400',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
            whileTap={{ scale: disabled ? 1 : 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Shine effect on primary */}
            {variant === 'primary' && (
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
            )}

            {/* Progress indicator dot for learning context */}
            {variant === 'primary' && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-white/30 animate-pulse" />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="shrink-0">{icon}</span>}
                {children}
            </span>
        </motion.button>
    );
};

export default EducationButton;
