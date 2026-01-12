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
        primary: 'bg-indigo-600 hover:bg-indigo-500 shadow-sm shadow-indigo-900/20 border border-transparent focus:ring-indigo-500',
        secondary: 'border focus:ring-slate-500',
        ghost: 'bg-transparent focus:ring-slate-500',
        control: `text-xs font-medium transition-colors`,
    };

    const getVariantInlineStyles = () => {
        switch (variant) {
            case 'primary':
                return { color: '#ffffff' };
            case 'secondary':
                return {
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    borderColor: '#334155'
                };
            case 'ghost':
                return { color: '#94a3b8' };
            case 'control':
                return active
                    ? { backgroundColor: '#1e293b', color: '#ffffff', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }
                    : { color: '#94a3b8' };
            default:
                return { color: '#ffffff' };
        }
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.01 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            style={getVariantInlineStyles()}
            disabled={disabled}
            onClick={onClick}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </motion.button>
    );
};

export default SaasButton;
