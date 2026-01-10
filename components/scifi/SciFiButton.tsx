import React from 'react';
import { motion } from 'framer-motion';

interface SciFiButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'command' | 'ghost' | 'icon';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const SciFiButton: React.FC<SciFiButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
}) => {
    const baseStyles = 'group relative inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-[0.3em] transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-[#020408] disabled:opacity-40 disabled:cursor-not-allowed overflow-visible';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-[10px]',
        md: 'px-5 py-2.5 text-xs',
        lg: 'px-8 py-3.5 text-sm',
    };

    const variantStyles = {
        primary: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-black hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
        command: 'bg-transparent text-cyan-600 border border-cyan-900/50 hover:bg-cyan-950/50 hover:text-cyan-300 hover:border-cyan-700',
        ghost: 'bg-transparent text-cyan-700 border border-transparent hover:text-cyan-400 hover:bg-cyan-950/30',
        icon: 'bg-cyan-950/30 text-cyan-600 border border-cyan-900/50 p-3 hover:text-cyan-300 hover:bg-cyan-900/50 hover:border-cyan-700',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Corner Brackets (visible on hover) */}
            <span className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b border-l border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Scanline effect */}
            <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none z-0"
            />

            {icon && <span className="shrink-0 relative z-10">{icon}</span>}
            {children && <span className="relative z-10">{children}</span>}
        </motion.button>
    );
};

export default SciFiButton;
