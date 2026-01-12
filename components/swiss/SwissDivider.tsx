import React from 'react';
import { motion } from 'framer-motion';

interface SwissDividerProps {
    variant?: 'horizontal' | 'vertical';
    weight?: 'thin' | 'medium' | 'thick';
    color?: 'black' | 'red';
    className?: string;
}

const SwissDivider: React.FC<SwissDividerProps> = ({
    variant = 'horizontal',
    weight = 'medium',
    color = 'black',
    className = ""
}) => {
    const getWeightStyles = () => {
        if (variant === 'vertical') {
            switch (weight) {
                case 'thin': return 'w-[1px]';
                case 'thick': return 'w-[4px]';
                default: return 'w-[2px]';
            }
        }
        switch (weight) {
            case 'thin': return 'h-[1px]';
            case 'thick': return 'h-[4px]';
            default: return 'h-[2px]';
        }
    };

    const getColorStyle = (): React.CSSProperties => {
        switch (color) {
            case 'red':
                return { backgroundColor: '#DC2626' };
            default:
                return { backgroundColor: '#000000' };
        }
    };

    const getOrientationStyles = () => {
        return variant === 'vertical' ? 'h-full' : 'w-full';
    };

    return (
        <motion.div
            initial={{ scaleX: variant === 'horizontal' ? 0 : 1, scaleY: variant === 'vertical' ? 0 : 1 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`${getWeightStyles()} ${getOrientationStyles()} origin-left ${className}`}
            style={getColorStyle()}
        />
    );
};

export default SwissDivider;
