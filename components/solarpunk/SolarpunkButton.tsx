import React from 'react';
import { motion } from 'framer-motion';

interface SolarpunkButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const SolarpunkButton: React.FC<SolarpunkButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-sans font-bold uppercase tracking-[0.15em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#F0F7F4] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-4 py-2 text-[10px] rounded-xl',
        md: 'px-6 py-3 text-xs rounded-2xl',
        lg: 'px-10 py-4 text-sm rounded-3xl',
    };

    const variantStyles = {
        primary: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:shadow-xl',
        secondary: 'bg-white/60 backdrop-blur-sm text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-400 shadow-sm',
        ghost: 'bg-transparent text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100/50',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Organic glow for primary */}
            {variant === 'primary' && !disabled && (
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-inherit bg-gradient-to-r from-emerald-400 to-teal-400 blur-xl z-[-1]"
                />
            )}

            {/* Leaf pattern overlay for primary */}
            {variant === 'primary' && (
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0c2 4 4 6 10 6-4 2-6 4-6 10 0-6-2-8-6-10 4 0 6-2 6-6h-4z' fill='%23fff' fill-opacity='1'/%3E%3C/svg%3E")`,
                        backgroundSize: '20px 20px',
                    }}
                />
            )}

            {icon && <span className="shrink-0 relative z-10">{icon}</span>}
            {children && <span className="relative z-10">{children}</span>}
        </motion.button>
    );
};

export default SolarpunkButton;
