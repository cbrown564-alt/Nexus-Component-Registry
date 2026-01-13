import React from 'react';
import { motion } from 'framer-motion';

export interface SunburstLoaderProps {
    /** Number of rays in the sunburst */
    rayCount?: number;
    /** Primary color for the center and rays */
    color?: string;
    /** Size of the loader in pixels */
    size?: number;
    /** Animation duration in seconds */
    animationDuration?: number;
}

const SunburstLoader: React.FC<SunburstLoaderProps> = ({
    rayCount = 12,
    color = "#cda45e",
    size = 160,
    animationDuration = 3,
}) => {
    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            {/* Center */}
            <div
                className="w-4 h-4 rounded-full z-10"
                style={{ backgroundColor: color }}
            />

            {/* Rays */}
            {[...Array(rayCount)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[2px] origin-bottom"
                    style={{
                        bottom: '50%',
                        rotate: i * (360 / rayCount),
                        transformOrigin: "bottom center",
                        backgroundImage: `linear-gradient(to top, ${color}, transparent)`,
                    }}
                    animate={{
                        height: ['40px', '60px', '40px'],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: animationDuration,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Outer Ring */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: `1px solid ${color}20` }}
                animate={{ scale: [0.8, 1, 0.8], opacity: [0, 0.5, 0] }}
                transition={{ duration: animationDuration + 1, repeat: Infinity }}
            />
        </div>
    );
};

export default SunburstLoader;
