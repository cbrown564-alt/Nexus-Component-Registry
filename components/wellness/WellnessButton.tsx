import React from 'react';
import { motion } from 'framer-motion';

interface WellnessButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'soft';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const WellnessButton: React.FC<WellnessButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
        sm: 'px-4 py-2 text-xs rounded-xl',
        md: 'px-6 py-3 text-sm rounded-2xl',
        lg: 'px-8 py-4 text-base rounded-2xl',
    };

    // Calm, serene wellness aesthetic - sage greens, soft transitions
    const variantStyles = {
        primary: 'bg-gradient-to-br from-sage-500 to-sage-600 text-white shadow-md shadow-sage-200/50 hover:shadow-lg hover:shadow-sage-300/50 hover:from-sage-400 hover:to-sage-500 focus:ring-sage-400',
        secondary: 'bg-stone-100 text-stone-700 hover:bg-stone-200 focus:ring-stone-400',
        soft: 'bg-white/80 backdrop-blur-sm border border-stone-200 text-stone-700 hover:bg-white hover:border-stone-300 focus:ring-stone-300 shadow-sm',
        ghost: 'bg-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100/50 focus:ring-stone-300',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Soft glow for primary */}
            {variant === 'primary' && (
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sage-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="shrink-0">{icon}</span>}
                {children}
            </span>
        </motion.button>
    );
};

export default WellnessButton;
