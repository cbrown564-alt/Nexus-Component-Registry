import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface LegalButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'toolbar';
    icon?: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
}

const LegalButton: React.FC<LegalButtonProps> = ({
    children,
    variant = 'secondary',
    icon,
    className = "",
    size = 'md',
    style
}) => {
    const { currentPlaygroundTheme } = useTheme()
    const theme = currentPlaygroundTheme

    const sizeClasses = {
        sm: "px-2 py-1 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    border: 'none'
                }
            case 'toolbar':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.mutedForeground,
                    border: 'none'
                }
            case 'secondary':
            default:
                return {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.secondaryForeground,
                    border: `1px solid ${theme.colors.border}`,
                }
        }
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors
        ${sizeClasses[size]}
        ${className}
      `}
            style={{
                borderRadius: theme.radius === 'none' ? '0' : theme.radius === 'full' ? '9999px' : '0.375rem',
                ...getVariantStyles(),
                ...style
            }}
        >
            {icon}
            {children}
        </motion.button>
    );
};

export default LegalButton;
