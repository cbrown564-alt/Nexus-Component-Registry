import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';

interface GameButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'icon';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const GameButton: React.FC<GameButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    style,
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
    // Keep semantic game colors for primary/secondary/accent, use theme for ghost/icon
    const variantStyles = {
        primary: {
            background: 'linear-gradient(to right, #c026d3, #9333ea)', // fuchsia-600 to purple-600
            boxShadow: '0 10px 15px -3px rgba(217, 70, 239, 0.3)', // fuchsia-500/30
            borderColor: 'rgba(232, 121, 249, 0.5)', // fuchsia-400/50
        },
        secondary: {
            backgroundColor: 'rgba(8, 51, 68, 0.5)', // cyan-950/50
            color: '#22d3ee', // cyan-400
            borderColor: 'rgba(6, 182, 212, 0.3)', // cyan-500/30
        },
        accent: {
            backgroundColor: 'rgba(245, 158, 11, 0.2)', // amber-500/20
            color: '#fbbf24', // amber-400
            borderColor: 'rgba(245, 158, 11, 0.5)', // amber-500/50
            boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.1)', // amber-500/10
        },
        ghost: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
        },
        icon: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px)',
        },
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
            transition={variant === 'primary' ? { duration: 3, repeat: Infinity, ease: 'linear' } : { type: 'spring', ...motionTokens.transition.spring }}
            className={`${baseStyles} ${sizeStyles[size]} ${className}`}
            style={{
                ...variantStyles[variant],
                backgroundSize: variant === 'primary' ? '200% 200%' : undefined,
                color: getTextColor() || (variantStyles[variant] as any).color,
                ...style,
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
