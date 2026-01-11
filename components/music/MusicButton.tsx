import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface MusicButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'pill';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    icon?: React.ReactNode;
    style?: React.CSSProperties;
}

const MusicButton: React.FC<MusicButtonProps> = ({
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
        else if (size === 'md') base += "px-5 py-2.5 text-sm ";
        else if (size === 'lg') base += "px-8 py-3 text-base ";
        else if (size === 'icon') base += "p-2 ";

        if (size !== 'icon') base += "rounded-full "; // Music apps love rounded buttons
        else base += "rounded-full "; // Icons too

        return base;
    };

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    boxShadow: theme.shadow === 'lg' ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
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
            case 'pill':
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

export default MusicButton;
