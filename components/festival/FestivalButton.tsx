import React from 'react';
import { motion } from 'framer-motion';

interface FestivalButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'icon';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const FestivalButton: React.FC<FestivalButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-black uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-4 py-2 text-[10px] rounded-full',
        md: 'px-6 py-3 text-xs rounded-full',
        lg: 'px-10 py-4 text-sm rounded-full',
    };

    const variantStyles = {
        primary: 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600 text-white shadow-[0_0_25px_rgba(192,38,211,0.5)] border border-fuchsia-400/50 hover:shadow-[0_0_40px_rgba(192,38,211,0.7)] hover:border-fuchsia-300 focus:ring-fuchsia-500',
        secondary: 'bg-black/40 backdrop-blur-xl text-white border border-white/10 hover:bg-white/10 hover:border-fuchsia-500/50 focus:ring-white/50',
        icon: 'bg-black/40 backdrop-blur-xl text-zinc-400 border border-white/10 hover:text-white hover:bg-fuchsia-500 hover:border-fuchsia-400 p-3 focus:ring-fuchsia-500',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            initial={variant === 'primary' ? { backgroundPosition: '0% 50%' } : {}}
            animate={variant === 'primary' ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : {}}
            transition={variant === 'primary' ? { duration: 3, repeat: Infinity, ease: 'linear' } : { type: 'spring', stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            style={variant === 'primary' ? { backgroundSize: '200% 200%' } : {}}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Shimmer overlay for primary */}
            {variant === 'primary' && (
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: ['100%', '-100%'], opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 z-0"
                />
            )}

            {/* Pulse ring for primary */}
            {variant === 'primary' && !disabled && (
                <motion.div
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full bg-fuchsia-500/30 z-[-1]"
                />
            )}

            {icon && <span className="shrink-0 relative z-10">{icon}</span>}
            {children && <span className="relative z-10">{children}</span>}
        </motion.button>
    );
};

export default FestivalButton;
