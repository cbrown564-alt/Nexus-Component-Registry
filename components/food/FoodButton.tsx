import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FoodButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    className?: string;
    style?: React.CSSProperties;
}

const FoodButton: React.FC<FoodButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    style,
    ...props
}) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    const getBaseStyles = () => {
        let base = "font-bold transition-all duration-200 flex items-center justify-center ";
        if (size === 'sm') base += "px-3 py-1.5 text-xs ";
        else if (size === 'md') base += "px-5 py-2.5 text-sm ";
        else if (size === 'lg') base += "px-8 py-3.5 text-base ";
        else if (size === 'icon') base += "p-2 ";

        base += "rounded-xl ";

        return base;
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Subtle shadow
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
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    border: `1px solid ${theme.colors.border}`,
                    color: theme.colors.foreground,
                };
            default: return {};
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${getBaseStyles()} ${className}`}
            style={{
                ...getVariantStyles(),
                ...style
            }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default FoodButton;
