import React from 'react';
import { motion } from 'framer-motion';

interface SwissGridProps {
    children: React.ReactNode;
    columns?: 2 | 3 | 4 | 6 | 12;
    gap?: 'sm' | 'md' | 'lg';
    className?: string;
}

const SwissGrid: React.FC<SwissGridProps> = ({
    children,
    columns = 12,
    gap = 'md',
    className = ""
}) => {
    const getColumnsClass = () => {
        switch (columns) {
            case 2: return 'grid-cols-1 md:grid-cols-2';
            case 3: return 'grid-cols-1 md:grid-cols-3';
            case 4: return 'grid-cols-2 md:grid-cols-4';
            case 6: return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
            case 12: return 'grid-cols-4 md:grid-cols-12';
            default: return 'grid-cols-1 md:grid-cols-12';
        }
    };

    const getGapClass = () => {
        switch (gap) {
            case 'sm': return 'gap-2 md:gap-4';
            case 'lg': return 'gap-8 md:gap-12';
            default: return 'gap-4 md:gap-8';
        }
    };

    return (
        <div className={`grid ${getColumnsClass()} ${getGapClass()} ${className}`}>
            {children}
        </div>
    );
};

interface SwissGridItemProps {
    children: React.ReactNode;
    span?: 1 | 2 | 3 | 4 | 6 | 8 | 12;
    className?: string;
}

export const SwissGridItem: React.FC<SwissGridItemProps> = ({
    children,
    span = 1,
    className = ""
}) => {
    const getSpanClass = () => {
        switch (span) {
            case 1: return 'col-span-1';
            case 2: return 'col-span-1 md:col-span-2';
            case 3: return 'col-span-1 md:col-span-3';
            case 4: return 'col-span-2 md:col-span-4';
            case 6: return 'col-span-2 md:col-span-6';
            case 8: return 'col-span-4 md:col-span-8';
            case 12: return 'col-span-4 md:col-span-12';
            default: return 'col-span-1';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${getSpanClass()} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default SwissGrid;
