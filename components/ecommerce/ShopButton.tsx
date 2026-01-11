import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ShopButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'add-to-cart';
    size?: 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
}

const ShopButton: React.FC<ShopButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    style,
    ...props
}) => {
    const { currentPlaygroundTheme } = useTheme()
    const theme = currentPlaygroundTheme

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'px-4 py-2 text-xs';
            case 'lg':
                return 'px-10 py-4 text-base';
            default:
                return 'px-6 py-3 text-sm';
        }
    };

    if (variant === 'add-to-cart') {
        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden font-medium tracking-wide uppercase ${getSizeStyles()} transition-all duration-300 ${className}`}
                style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.primaryForeground,
                    ...style
                }}
                {...props}
            >
                <motion.span
                    className="absolute inset-0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{ backgroundColor: theme.colors.secondary }} /* Hover fill color */
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>{children}</span>
                </span>
            </motion.button>
        );
    }

    if (variant === 'secondary') {
        return (
            <motion.button
                whileHover={{ backgroundColor: theme.colors.secondary }}
                whileTap={{ scale: 0.98 }}
                className={`font-medium tracking-wide uppercase border-b pb-1 transition-all duration-300 ${className}`}
                style={{
                    color: theme.colors.secondaryForeground,
                    borderColor: theme.colors.muted,
                    ...style
                }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative font-medium tracking-wide uppercase ${getSizeStyles()} transition-all duration-200 ${className}`}
            style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.primaryForeground,
                ...style
            }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default ShopButton;
