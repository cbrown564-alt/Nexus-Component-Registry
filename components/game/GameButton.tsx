import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface GameButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'icon';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const { theme } = useTheme();

    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-bold font-display uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs rounded-lg',
        md: 'px-5 py-2.5 text-sm rounded-xl',
        lg: 'px-8 py-3.5 text-base rounded-2xl',
        icon: 'p-3 rounded-full',
    };

    // Keep semantic game colors for primary/secondary/accent, use theme for ghost/icon
    const variantStyles = {
        primary: 'bg-gradient-to-r from-fuchsia-600 to-purple-600 shadow-lg shadow-fuchsia-500/30 border border-fuchsia-400/50 hover:shadow-fuchsia-500/50 hover:border-fuchsia-300',
        secondary: 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-900/50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]',
        accent: 'bg-amber-500/20 text-amber-400 border border-amber-500/50 hover:bg-amber-500 hover:border-amber-400 shadow-amber-500/10 hover:shadow-amber-500/50',
        ghost: 'bg-transparent border border-transparent hover:bg-white/10',
        icon: 'bg-black/40 border border-white/10 hover:bg-white/10 hover:border-white/30 backdrop-blur-md',
    };

    // Determine text color based on variant
    const getTextColor = () => {
        if (variant === 'primary') return theme.colors.foreground;
        if (variant === 'secondary') return undefined; // Keep cyan-400
        if (variant === 'accent') return undefined; // Keep amber-400
        if (variant === 'ghost') return theme.colors.mutedForeground;
        if (variant === 'icon') return theme.colors.mutedForeground;
        return theme.colors.foreground;
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            initial={variant === 'primary' ? { backgroundPosition: '0% 50%' } : {}}
            animate={variant === 'primary' ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : {}}
            transition={variant === 'primary' ? { duration: 3, repeat: Infinity, ease: 'linear' } : { type: 'spring', stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            style={{
                backgroundSize: variant === 'primary' ? '200% 200%' : undefined,
                color: getTextColor(),
            }}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Glow overlay for secondary/accent */}
            {(variant === 'secondary' || variant === 'accent') && (
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]`} />
            )}

            {icon && <span className="shrink-0 relative z-10">{icon}</span>}
            {children && <span className="relative z-10">{children}</span>}
        </motion.button>
    );
};

export default GameButton;
