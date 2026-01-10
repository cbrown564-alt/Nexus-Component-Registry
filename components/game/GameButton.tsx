import React from 'react';
import { motion } from 'framer-motion';

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
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-bold font-display uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs rounded-lg',
        md: 'px-5 py-2.5 text-sm rounded-xl',
        lg: 'px-8 py-3.5 text-base rounded-2xl',
        icon: 'p-3 rounded-full',
    };

    const variantStyles = {
        primary: 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-500/30 border border-fuchsia-400/50 hover:shadow-fuchsia-500/50 hover:border-fuchsia-300',
        secondary: 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-900/50 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]',
        accent: 'bg-amber-500/20 text-amber-400 border border-amber-500/50 hover:bg-amber-500 hover:text-black hover:border-amber-400 shadow-amber-500/10 hover:shadow-amber-500/50',
        ghost: 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/10 border border-transparent',
        icon: 'bg-black/40 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            initial={variant === 'primary' ? { backgroundPosition: '0% 50%' } : {}}
            animate={variant === 'primary' ? { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] } : {}}
            transition={variant === 'primary' ? { duration: 3, repeat: Infinity, ease: 'linear' } : { type: 'spring', stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            style={variant === 'primary' ? { backgroundSize: '200% 200%' } : {}}
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
