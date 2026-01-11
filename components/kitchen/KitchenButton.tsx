import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface KitchenButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}

const KitchenButton: React.FC<KitchenButtonProps> = ({
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
        let base = "font-medium transition-all duration-200 flex items-center justify-center ";
        if (size === 'sm') base += "px-3 py-1.5 text-xs ";
        else if (size === 'md') base += "px-4 py-2 text-sm ";
        else if (size === 'lg') base += "px-6 py-3 text-base ";
        else if (size === 'icon') base += "p-2 ";

        base += "rounded-lg ";

        return base;
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                };
            case 'secondary':
                return {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.secondaryForeground,
                    border: `1px solid ${theme.colors.border}`,
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.mutedForeground,
                };
            case 'icon':
                return {
                    backgroundColor: theme.colors.secondary,
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
            {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
            {children}
        </motion.button>
    );
};

export default KitchenButton;
