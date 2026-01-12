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

    // Size styles are just padding
    const sizeStyles = {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-2.5',
        lg: 'px-6 py-3',
    };

    // Style generation helper
    const getStyles = () => {
        const base: React.CSSProperties = {};
        const hover: any = {};

        switch (variant) {
            case 'primary':
                base.backgroundColor = 'rgba(30, 58, 138, 0.4)'; // blue-900/40
                base.color = '#dbeafe'; // blue-100
                base.borderColor = 'rgba(59, 130, 246, 0.6)'; // blue-500/60
                base.boxShadow = 'inset 0 1px 0 0 rgba(59,130,246,0.3), inset 0 -1px 0 0 rgba(0,0,0,0.3)';
                hover.backgroundColor = 'rgba(30, 78, 162, 0.5)'; // blue-800/50 approx
                hover.borderColor = 'rgba(96, 165, 250, 0.7)'; // blue-400/70
                hover.boxShadow = 'inset 0 1px 0 0 rgba(96,165,250,0.4), 0 0 20px rgba(59,130,246,0.15)';
                break;
            case 'secondary':
                base.backgroundColor = 'rgba(15, 23, 42, 0.6)'; // slate-900/60
                base.color = '#cbd5e1'; // slate-300
                base.borderColor = 'rgba(30, 58, 138, 0.5)'; // blue-900/50
                base.boxShadow = 'inset 0 1px 0 0 rgba(148,163,184,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.2)';
                hover.backgroundColor = 'rgba(30, 41, 59, 0.5)'; // slate-800/50
                hover.borderColor = 'rgba(30, 64, 175, 0.6)'; // blue-800/60
                hover.color = '#e2e8f0'; // slate-200
                break;
            case 'danger':
                base.backgroundColor = 'rgba(69, 10, 10, 0.5)'; // red-950/50
                base.color = '#fca5a5'; // red-300
                base.borderColor = 'rgba(153, 27, 27, 0.6)'; // red-800/60
                base.boxShadow = 'inset 0 1px 0 0 rgba(248,113,113,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.3)';
                hover.backgroundColor = 'rgba(127, 29, 29, 0.5)'; // red-900/50
                hover.borderColor = 'rgba(220, 38, 38, 0.7)'; // red-600/70
                hover.color = '#fecaca'; // red-200
                hover.boxShadow = '0 0 20px rgba(239,68,68,0.15)';
                break;
        }
        return { base, hover };
    };

    const { base, hover } = getStyles();

    const getStatusStyle = (s: string) => {
        switch (s) {
            case 'online': return { backgroundColor: '#34d399', boxShadow: '0 0 8px rgba(52,211,153,0.6)' };
            case 'warning': return { backgroundColor: '#fbbf24', boxShadow: '0 0 8px rgba(251,191,36,0.6)' };
            case 'offline': return { backgroundColor: '#ef4444', boxShadow: '0 0 8px rgba(239,68,68,0.6)' };
            case 'idle': return { backgroundColor: '#64748b' };
            default: return {};
        }
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02, ...hover }}
            whileTap={{ scale: disabled ? 1 : 0.97 }}
            transition={{ duration: 0.1 }}
            className={`${baseStyles} ${sizeStyles[size]} border ${className}`}
            style={base}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Corner markers like GridCard */}
            <span className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l" style={{ borderColor: 'rgba(59, 130, 246, 0.5)' }} />
            <span className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r" style={{ borderColor: 'rgba(59, 130, 246, 0.5)' }} />
            <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l" style={{ borderColor: 'rgba(59, 130, 246, 0.5)' }} />
            <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r" style={{ borderColor: 'rgba(59, 130, 246, 0.5)' }} />

            {/* Status LED indicator */}
            {status && (
                <span className={`h-2 w-2 rounded-full shrink-0 ${status === 'warning' ? 'animate-pulse' : ''}`} style={getStatusStyle(status)} />
            )}

            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
        </motion.button>
    );
};

export default GridButton;
