import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface EducationButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const EducationButton: React.FC<EducationButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    style
}) => {
    const { currentPlaygroundTheme } = useTheme()
    const theme = currentPlaygroundTheme

    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    boxShadow: `0 4px 6px -1px ${theme.colors.primary}40`,
                }
            case 'secondary':
                return {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.primary, // Often primary color on secondary bg looks good
                }
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    border: `2px solid ${theme.colors.border}`,
                    color: theme.colors.primaryForeground, // Assuming outline is used on dark bg often in this template
                }
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.primary,
                }
            default: return {}
        }
    }

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
            whileTap={{ scale: disabled ? 1 : 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${sizeStyles[size]} ${className}`}
            disabled={disabled}
            onClick={onClick}
            style={{
                borderRadius: theme.radius === 'lg' ? '0.75rem' : theme.radius === 'md' ? '0.5rem' : '0.25rem',
                ...getVariantStyles(),
                ...style
            }}
        >
            {/* Progress indicator dot for learning context - keeping simplistic for now */}
            {variant === 'primary' && (
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="shrink-0">{icon}</span>}
                {children}
            </span>
        </motion.button>
    );
};

export default EducationButton;
