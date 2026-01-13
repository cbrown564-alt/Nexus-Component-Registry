import React from 'react';
import { motion } from 'framer-motion';

interface OrganicContainerProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'glass';
    delay?: number;
}

const OrganicContainer: React.FC<OrganicContainerProps> = ({ children, className = '', variant = 'glass', delay = 0 }) => {

    // Choose styles based on variant
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary': return 'bg-[#78866b] text-white shadow-lg';
            case 'secondary': return 'bg-[#e0d0b8] text-slate-800 shadow-md';
            case 'accent': return 'bg-[#bc5f4e] text-white shadow-lg';
            case 'glass': default: return 'bg-white/60 backdrop-blur-md border border-white/40 shadow-sm';
        }
    };

    // Pre-defined organic shapes (border-radius values)
    // In a real production app, these might be randomized or SVG paths
    const shapes = [
        '30% 70% 70% 30% / 30% 30% 70% 70%',
        '55% 45% 33% 67% / 55% 58% 42% 45%',
        '64% 36% 47% 53% / 66% 56% 44% 34%',
        '43% 57% 65% 35% / 52% 38% 62% 48%'
    ];

    // Pick a shape based on... let's just use random for now, but usually deterministic is better for hydration.
    // For this demo, using a fixed one or a prop would be safer, but let's try a stable random-ish one based on string length of children? 
    // Simplified: Just use a nice consistent organic radius for now, and animate it slightly.

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                borderRadius: [
                    '20px 20px 20px 20px',
                    '25px 35px 20px 30px',
                    '20px 20px 20px 20px'
                ]
            }}
            transition={{
                duration: 0.8,
                delay,
                borderRadius: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className={`p-6 relative overflow-hidden ${getVariantStyles()} ${className}`}
            style={{ borderRadius: '24px' }} // Fallback
        >
            {children}
        </motion.div>
    );
};

export default OrganicContainer;
