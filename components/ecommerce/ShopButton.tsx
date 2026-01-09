import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

interface ShopButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'add-to-cart';
    size?: 'sm' | 'md' | 'lg';
}

const ShopButton: React.FC<ShopButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
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
                className={`group relative overflow-hidden bg-neutral-900 text-white font-medium tracking-wide uppercase ${getSizeStyles()} transition-all duration-300 ${className}`}
                {...props}
            >
                <motion.span
                    className="absolute inset-0 bg-neutral-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
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
                whileHover={{ backgroundColor: 'rgb(245, 245, 244)' }}
                whileTap={{ scale: 0.98 }}
                className={`font-medium tracking-wide uppercase text-neutral-600 hover:text-neutral-900 border-b border-neutral-400 hover:border-neutral-900 pb-1 transition-all duration-300 ${className}`}
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
            className={`relative bg-neutral-900 text-white font-medium tracking-wide uppercase ${getSizeStyles()} transition-all duration-200 hover:bg-neutral-800 ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default ShopButton;
