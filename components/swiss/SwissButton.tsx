import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';

interface SwissButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const SwissButton: React.FC<SwissButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const getVariantStyles = (): React.CSSProperties => {
        switch (variant) {
            case 'primary':
                return { backgroundColor: '#DC2626', color: '#ffffff' };
            case 'secondary':
                return { backgroundColor: '#000000', color: '#ffffff' };
            case 'ghost':
                return { backgroundColor: 'transparent', color: '#000000', borderWidth: '2px', borderColor: '#000000' };
            default:
                return { backgroundColor: '#DC2626', color: '#ffffff' };
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'px-4 py-2 text-xs';
            case 'lg':
                return 'px-10 py-4 text-lg';
            default:
                return 'px-8 py-3 text-sm';
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden font-black uppercase tracking-[0.15em] transition-all duration-200 ${getSizeStyles()} ${className}`}
            style={getVariantStyles()}
            {...props}
        >
            {/* Diagonal stripe pattern on hover */}
            <motion.span
                className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: motionTokens.duration.fast }}
            />

            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export default SwissButton;
