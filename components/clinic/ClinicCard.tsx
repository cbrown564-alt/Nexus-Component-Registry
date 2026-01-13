import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ClinicCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    style?: React.CSSProperties;
    hover?: boolean;
}

const ClinicCard: React.FC<ClinicCardProps> = ({
    children,
    className = '',
    delay = 0,
    style,
    hover = false
}) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} // Slow, luxurious ease
            className={`p-0 ${className}`} // Removed padding for full bleed options
            style={{
                backgroundColor: 'transparent',
                color: theme.colors.cardForeground,
                ...style
            }}
        >
            {children}
        </motion.div>
    );
};

export default ClinicCard;
