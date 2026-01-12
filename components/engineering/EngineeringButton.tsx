import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface EngineeringButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const EngineeringButton: React.FC<EngineeringButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const { theme } = useTheme();

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'px-3 py-1.5 text-xs';
            case 'lg':
                return 'px-8 py-3 text-base';
            default:
                return 'px-6 py-2 text-sm';
        }
    };

    const getVariantStyle = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.foreground, // White on dark
                    color: theme.colors.background, // Black on white
                    boxShadow: `0 10px 15px -3px ${theme.colors.foreground}1A`
                };
            case 'secondary':
                return {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.foreground,
                    borderColor: theme.colors.border,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.mutedForeground,
                    borderColor: theme.colors.border,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                };
            default:
                return {};
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 ${getSizeStyles()} ${className}`}
            style={{
                ...getVariantStyle(),
                outlineColor: theme.colors.primary
            }}
            {...props}
        >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default EngineeringButton;
