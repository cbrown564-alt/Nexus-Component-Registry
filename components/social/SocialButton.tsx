import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface SocialButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
    size?: 'sm' | 'md' | 'lg' | 'icon' | 'fab'; // Added fab to type definition
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}

const SocialButton: React.FC<SocialButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    icon,
    style,
    ...props
}) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    const getBaseStyles = () => {
        let base = "font-bold transition-all duration-200 flex items-center justify-center ";
        if (size === 'sm') base += "px-3 py-1.5 text-xs ";
        else if (size === 'md') base += "px-4 py-2 text-sm ";
        else if (size === 'lg') base += "px-6 py-3 text-base ";
        else if (size === 'icon') base += "h-8 w-8 rounded-full ";
        else if (size === 'fab') base += "h-14 w-14 rounded-full shadow-lg ";

        if (variant !== 'icon' && variant !== 'ghost' && size !== 'fab') base += "rounded-full ";

        return base;
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                };
            case 'secondary':
                return {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.secondaryForeground,
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.mutedForeground,
                };
            case 'icon':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.primary, // Using primary color for icons like Twitter/BlueSky
                };
            default: return {};
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${getBaseStyles()} ${className}`}
            style={{
                ...getVariantStyles(),
                ...style
            }}
            {...props}
        >
            {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
            {children}
        </motion.button>
    );
};

export default SocialButton;
