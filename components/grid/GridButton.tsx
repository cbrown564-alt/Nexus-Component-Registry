import React from 'react';
import { motion } from 'framer-motion';

interface GridButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    status?: 'online' | 'warning' | 'offline' | 'idle';
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const GridButton: React.FC<GridButtonProps> = ({
    children,
    variant = 'secondary',
    size = 'md',
    icon,
    status,
    className = '',
    disabled = false,
    onClick,
}) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2.5',
        lg: 'px-6 py-3',
    };

    // Industrial beveled/inset styling
    const variantStyles = {
        primary: 'bg-blue-900/40 text-blue-100 border border-blue-500/60 shadow-[inset_0_1px_0_0_rgba(59,130,246,0.3),inset_0_-1px_0_0_rgba(0,0,0,0.3)] hover:bg-blue-800/50 hover:border-blue-400/70 hover:shadow-[inset_0_1px_0_0_rgba(96,165,250,0.4),0_0_20px_rgba(59,130,246,0.15)] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)]',
        secondary: 'bg-slate-900/60 text-slate-300 border border-blue-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1),inset_0_-1px_0_0_rgba(0,0,0,0.2)] hover:bg-slate-800/50 hover:border-blue-800/60 hover:text-slate-200 active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)]',
        danger: 'bg-red-950/50 text-red-300 border border-red-800/60 shadow-[inset_0_1px_0_0_rgba(248,113,113,0.2),inset_0_-1px_0_0_rgba(0,0,0,0.3)] hover:bg-red-900/50 hover:border-red-600/70 hover:text-red-200 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.4)]',
    };

    const statusColors = {
        online: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
        warning: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-pulse',
        offline: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]',
        idle: 'bg-slate-500',
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.97 }}
            transition={{ duration: 0.1 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Corner markers like GridCard */}
            <span className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-500/50" />
            <span className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-500/50" />
            <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-500/50" />
            <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-500/50" />

            {/* Status LED indicator */}
            {status && (
                <span className={`h-2 w-2 rounded-full shrink-0 ${statusColors[status]}`} />
            )}

            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
        </motion.button>
    );
};

export default GridButton;
