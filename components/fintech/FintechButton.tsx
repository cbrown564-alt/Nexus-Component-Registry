import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface FintechButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const FintechButton: React.FC<FintechButtonProps> = ({
    children,
    variant = 'secondary',
    size = 'md',
    icon,
    className = '',
    disabled = false,
    onClick,
    type = 'button',
}) => {
    const { currentPlaygroundTheme } = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs rounded-md',
        md: 'px-4 py-2.5 text-sm rounded-lg',
        lg: 'px-6 py-3 text-base rounded-lg',
    };

    // Calculate dynamic styles
    const getVariantStyles = () => {
        const { primary, primaryForeground, secondary, secondaryForeground, accent } = currentPlaygroundTheme.colors;

        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: primary,
                    color: primaryForeground,
                    boxShadow: isHovered ? `0 0 15px ${primary}66` : `0 0 0 transparent` // Dynamic glow
                };
            case 'secondary':
                return {
                    backgroundColor: secondary,
                    color: secondaryForeground,
                    borderColor: currentPlaygroundTheme.colors.border
                };
            case 'ghost':
                return {
                    backgroundColor: isHovered ? secondary : 'transparent',
                    color: secondaryForeground
                };
        }
    };

    const variantStyle = getVariantStyles();

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`${baseStyles} ${sizeStyles[size]} ${className} ${variant === 'secondary' ? 'border' : ''}`}
            style={variantStyle}
            disabled={disabled}
            onClick={onClick}
            type={type}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Shimmer effect for primary variant */}
            {variant === 'primary' && (
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:animate-[shimmer_1.5s_ease-in-out]" />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="shrink-0">{icon}</span>}
                {children}
            </span>
        </motion.button>
    );
};

export default FintechButton;
