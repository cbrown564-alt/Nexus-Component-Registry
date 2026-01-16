import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';

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
    const { theme } = useTheme();

    const baseStyles = 'group relative inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-[0.3em] transition-all duration-200 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed overflow-visible';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-[10px]',
        md: 'px-5 py-2.5 text-xs',
        lg: 'px-8 py-3.5 text-sm',
    };

    // Dynamic styles based on theme
    const getVariantStyles = () => {
        const primaryBg = theme.colors.primary;
        const accentColor = theme.colors.accent;
        const borderColor = theme.colors.border;
        const mutedColor = theme.colors.muted;

        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: `${primaryBg}1a`,
                    color: accentColor,
                    border: `1px solid ${primaryBg}80`,
                };
            case 'command':
                return {
                    backgroundColor: 'transparent',
                    color: mutedColor,
                    border: `1px solid ${borderColor}80`,
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: mutedColor,
                    border: '1px solid transparent',
                };
            case 'icon':
                return {
                    backgroundColor: `${theme.colors.secondary}4d`,
                    color: mutedColor,
                    border: `1px solid ${borderColor}80`,
                    padding: '0.75rem',
                };
            default:
                return {};
        }
    };

    const dynamicStyles = getVariantStyles();

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ ...motionTokens.transition.spring }}
            className={`${baseStyles} ${sizeStyles[size]} ${className}`}
            style={dynamicStyles}
            disabled={disabled}
            onClick={onClick}
        >
            {/* Corner Brackets (visible on hover) */}
            <span className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: theme.colors.accent }} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: theme.colors.accent }} />
            <span className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b border-l opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: theme.colors.accent }} />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: theme.colors.accent }} />

            {/* Scanline effect */}
            <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 h-[2px] opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                style={{ background: `linear-gradient(to right, transparent, ${theme.colors.accent}4d, transparent)` }}
            />

            {icon && <span className="shrink-0 relative z-10">{icon}</span>}
            {children && (
                <span
                    className="relative z-10"
                    style={{ color: variant === 'primary' ? theme.colors.foreground : undefined }}
                >
                    {children}
                </span>
            )}
        </motion.button>
    );
};

export default SciFiButton;
