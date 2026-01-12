import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

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
    const { currentPlaygroundTheme: theme } = useTheme();

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
                base.backgroundColor = theme.colors.primary;
                base.color = theme.colors.primaryForeground;
                base.borderColor = theme.colors.primary;
                base.boxShadow = `inset 0 1px 0 0 ${theme.colors.primary}, inset 0 -1px 0 0 rgba(0,0,0,0.3)`;
                // For hover we can just rely on opacity or css filters, but let's try to match the "glow" effect
                hover.opacity = 0.9;
                hover.boxShadow = `0 0 15px ${theme.colors.primary}`; // Glow effect
                break;
            case 'secondary':
                base.backgroundColor = theme.colors.secondary;
                base.color = theme.colors.secondaryForeground;
                base.borderColor = theme.colors.border;
                base.boxShadow = 'inset 0 1px 0 0 rgba(255,255,255,0.05), inset 0 -1px 0 0 rgba(0,0,0,0.2)';
                hover.backgroundColor = theme.colors.muted;
                hover.borderColor = theme.colors.accent; // Highlight border on hover
                hover.color = theme.colors.foreground;
                break;
            case 'danger':
                // Semantic danger colors
                base.backgroundColor = 'rgba(69, 10, 10, 0.5)'; // red-950/50
                base.color = '#fca5a5'; // red-300
                base.borderColor = 'rgba(153, 27, 27, 0.6)'; // red-800/60
                base.boxShadow = 'inset 0 1px 0 0 rgba(248,113,113,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.3)';
                hover.backgroundColor = 'rgba(127, 29, 29, 0.5)';
                hover.borderColor = '#ef4444';
                hover.boxShadow = '0 0 15px rgba(239, 68, 68, 0.4)';
                break;
        }
        return { base, hover };
    };

    const { base, hover } = getStyles();

    const getStatusStyle = (s: string) => {
        switch (s) {
            case 'online': return { backgroundColor: theme.colors.ring, boxShadow: `0 0 8px ${theme.colors.ring}` };
            case 'warning': return { backgroundColor: '#fbbf24', boxShadow: '0 0 8px rgba(251,191,36,0.6)' };
            case 'offline': return { backgroundColor: '#ef4444', boxShadow: '0 0 8px rgba(239,68,68,0.6)' };
            case 'idle': return { backgroundColor: theme.colors.mutedForeground };
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
            {/* Corner markers like GridCard - using theme border color */}
            <span className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l" style={{ borderColor: theme.colors.accent }} />
            <span className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r" style={{ borderColor: theme.colors.accent }} />
            <span className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l" style={{ borderColor: theme.colors.accent }} />
            <span className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r" style={{ borderColor: theme.colors.accent }} />

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
