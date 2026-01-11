import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface WellnessButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'soft';
    icon?: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
}

const WellnessButton: React.FC<WellnessButtonProps> = ({
    children,
    variant = 'primary',
    icon,
    className = "",
    size = 'md',
    style
}) => {
    const { currentPlaygroundTheme } = useTheme()
    const theme = currentPlaygroundTheme

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                }
            case 'soft':
                return {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.secondaryForeground,
                }
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.mutedForeground,
                }
            case 'secondary':
            default:
                return {
                    backgroundColor: 'transparent',
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.foreground,
                }
        }
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        inline-flex items-center justify-center gap-2 rounded-full font-serif font-medium transition-colors
        ${sizeClasses[size]}
        ${className}
      `}
            style={{
                borderRadius: '9999px', // Always pill shaped for wellness
                ...getVariantStyles(),
                ...style
            }}
        >
            {icon}
            {children}
        </motion.button>
    );
};

export default WellnessButton;
