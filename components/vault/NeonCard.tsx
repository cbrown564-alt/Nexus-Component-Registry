import React from 'react';
import { motion } from 'framer-motion';

interface NeonCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'stable' | 'critical' | 'warning';
}

const NeonCard: React.FC<NeonCardProps> = ({ children, className = '', variant = 'stable' }) => {

    const getBorderColor = () => {
        switch (variant) {
            case 'critical': return 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]';
            case 'warning': return 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]';
            default: return 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`relative bg-black/80 backdrop-blur-sm border ${getBorderColor()} p-6 ${className}`}
        >
            {/* Corner Accents */}
            <div className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-current`} />
            <div className={`absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-current`} />
            <div className={`absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-current`} />
            <div className={`absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-current`} />

            {children}

            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
        </motion.div>
    );
};

export default NeonCard;
