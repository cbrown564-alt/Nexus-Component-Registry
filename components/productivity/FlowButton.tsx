import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FlowButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const FlowButton: React.FC<FlowButtonProps> = ({
    children,
    className = "",
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const getVariantStyles = () => {
        const baseStyle: React.CSSProperties = {};
        const hoverStyle: any = {};

        switch (variant) {
            case 'primary':
                baseStyle.backgroundColor = '#f59e0b'; // amber-500
                baseStyle.color = '#09090b'; // zinc-950
                baseStyle.boxShadow = '0 10px 15px -3px rgba(245, 158, 11, 0.2)'; // shadow-amber-500/20
                hoverStyle.backgroundColor = '#fbbf24'; // amber-400
                break;
            case 'secondary':
                baseStyle.backgroundColor = '#27272a'; // zinc-800
                baseStyle.color = '#f4f4f5'; // zinc-100
                hoverStyle.backgroundColor = '#3f3f46'; // zinc-700
                break;
            case 'ghost':
                baseStyle.backgroundColor = 'transparent';
                baseStyle.color = '#a1a1aa'; // zinc-400
                hoverStyle.color = '#f4f4f5'; // zinc-100
                hoverStyle.backgroundColor = 'rgba(39, 39, 42, 0.5)'; // zinc-800/50
                break;
        }
        return { baseStyle, hoverStyle };
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return { padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '0.375rem' };
            case 'lg':
                return { padding: '0.75rem 1.5rem', fontSize: '1rem', borderRadius: '0.5rem' };
            default:
                return { padding: '0.5rem 1rem', fontSize: '0.875rem', borderRadius: '0.375rem' };
        }
    };

    const { baseStyle, hoverStyle } = getVariantStyles();
    const sizeStyle = getSizeStyles();

    return (
        <motion.button
            whileHover={{ scale: 1.03, ...hoverStyle }}
            whileTap={{ scale: 0.97 }}
            className={`
        relative inline-flex items-center justify-center 
        font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2
        ${className}
      `}
            style={{
                ...baseStyle,
                ...sizeStyle,
                ['--tw-ring-color' as any]: 'rgba(245, 158, 11, 0.5)', // amber-500/50
                ['--tw-ring-offset-color' as any]: '#09090b', // zinc-950
                ...props.style
            }}
            {...props}
        >
            {/* Pulse effect for primary */}
            {variant === 'primary' && (
                <motion.span
                    className="absolute inset-0 rounded-md"
                    style={{ backgroundColor: '#fbbf24' }}
                    initial={{ opacity: 0, scale: 1 }}
                    whileHover={{
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.1, 1.2],
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default FlowButton;
