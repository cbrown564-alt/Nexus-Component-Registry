import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

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
    const { theme } = useTheme();

    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-black uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    // Base classes that don't rely on theme colors directly or are handled via style
    const sizeStyles = {
        sm: 'px-4 py-2 text-[10px] rounded-full',
        md: 'px-6 py-3 text-xs rounded-full',
        lg: 'px-10 py-4 text-sm rounded-full',
    };

    // We'll apply colors via style to use theme tokens
    // But keeping some gradient/shadow logic via classes if strictly visual/festival specific?
    // The instruction is to remove hardcoded tailwind colors (text-white, bg-black, etc).

    // Primary: fuchsia gradient (semantic to festival?). 
    // If we want to fully theme it, we should use theme.colors.primary.
    // But festival theme might *be* fuchsia. 
    // Let's assume for Primary we keep the vibrant gradient if it's "FestivalButton", 
    // BUT we should avoid `text-white` if possible, using `theme.colors.primaryForeground`.

    const variantClasses = {
        primary: 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-fuchsia-600 shadow-[0_0_25px_rgba(192,38,211,0.5)] border border-fuchsia-400/50 hover:shadow-[0_0_40px_rgba(192,38,211,0.7)] hover:border-fuchsia-300 focus:ring-fuchsia-500',
        secondary: 'backdrop-blur-xl border hover:border-fuchsia-500/50 focus:ring-white/50',
        icon: 'backdrop-blur-xl border hover:border-fuchsia-400 p-3 focus:ring-fuchsia-500',
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    color: theme.colors.white || '#ffffff', // Primary usually has white text on vibrant bg
                    // Focus ring offset
                    outlineColor: theme.colors.background
                };
            case 'secondary':
                return {
                    backgroundColor: theme.colors.black ? `${theme.colors.black}66` : 'rgba(0,0,0,0.4)', // black/40
                    color: theme.colors.foreground, // white
                    borderColor: theme.colors.white ? `${theme.colors.white}1A` : 'rgba(255,255,255,0.1)', // white/10
                };
            case 'icon':
                return {
                    backgroundColor: theme.colors.black ? `${theme.colors.black}66` : 'rgba(0,0,0,0.4)',
                    color: theme.colors.mutedForeground, // zinc-400
                    borderColor: theme.colors.white ? `${theme.colors.white}1A` : 'rgba(255,255,255,0.1)',
                };
            default: return {};
        }
    };

    // To properly support token replacement for "bg-black/40", we need the actual hex value or use `theme.colors.background` if it maps to black. 
    // Assuming `theme.colors` has standard palette. 
    // If I cannot use tailwind classes for theme colors (e.g. `bg-${theme.colors.background}` is invalid), I use style.

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            initial={variant === 'primary' ? { backgroundPosition: '0% 50%' } : {}}
            animate={variant === 'primary' ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : {}}
            transition={variant === 'primary' ? { duration: 3, repeat: Infinity, ease: 'linear' } : { type: 'spring', stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantClasses[variant]} ${className}`}
            style={{
                ...getVariantStyles(),
                ...(variant === 'primary' ? { backgroundSize: '200% 200%' } : {}),
                '--tw-ring-offset-color': theme.colors.background
            } as React.CSSProperties}
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
