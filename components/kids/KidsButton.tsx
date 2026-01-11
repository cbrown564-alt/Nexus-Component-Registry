import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface KidsButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}

const KidsButton: React.FC<KidsButtonProps> = ({
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
        let base = "font-black tracking-wide uppercase transition-all duration-200 flex items-center justify-center ";
        if (size === 'sm') base += "px-4 py-2 text-sm ";
        else if (size === 'md') base += "px-6 py-3 text-base ";
        else if (size === 'lg') base += "px-8 py-4 text-xl ";

        base += "rounded-2xl border-4 "; // chunky borders

        return base;
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    borderColor: theme.colors.ring, // Using ring color for border contrast if available
                    boxShadow: '0 4px 0 rgba(0,0,0,0.2)',
                };
            case 'secondary':
                return {
                    backgroundColor: theme.colors.card,
                    color: theme.colors.foreground,
                    borderColor: theme.colors.mutedForeground,
                };
            case 'ghost':
                return {
                    backgroundColor: 'transparent',
                    color: theme.colors.foreground,
                    borderColor: 'transparent',
                };
            default: return {};
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
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

export default KidsButton;
