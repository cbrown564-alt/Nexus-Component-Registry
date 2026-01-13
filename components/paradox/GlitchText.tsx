import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    className?: string;
    intensity?: 'low' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Component = 'span', className = '', intensity = 'low' }) => {

    const jitter = {
        initial: { x: 0, opacity: 1 },
        animate: {
            x: [0, -2, 2, -1, 1, 0, 0, 0, -4, 4, 0],
            textShadow: [
                "2px 0 red, -2px 0 blue",
                "-2px 0 red, 2px 0 blue",
                "0 0 red, 0 0 blue",
            ],
            transition: {
                duration: intensity === 'high' ? 0.2 : 0.4,
                repeat: Infinity,
                repeatType: "mirror" as const, // Fix: Explicitly cast to allowed RepeactType string
                repeatDelay: intensity === 'high' ? 0.5 : 3
            }
        }
    };

    return (
        <motion.div
            className={`relative inline-block ${className}`}
            variants={jitter}
            initial="initial"
            animate="animate"
        >
            <Component className="relative z-10">{text}</Component>
            {/* Absolute clone for trails if needed, but textShadow handles simple chromatic aberration */}
        </motion.div>
    );
};

export default GlitchText;
