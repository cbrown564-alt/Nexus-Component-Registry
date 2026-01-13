import React from 'react';
import { motion } from 'framer-motion';

const SunburstLoader: React.FC = () => {
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Center */}
            <div className="w-4 h-4 bg-[#cda45e] rounded-full z-10" />

            {/* Rays */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[2px] h-16 bg-gradient-to-t from-[#cda45e] to-transparent origin-bottom"
                    style={{
                        bottom: '50%',
                        rotate: i * 30,
                        transformOrigin: "bottom center"
                    }}
                    animate={{
                        height: ['40px', '60px', '40px'],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Outer Ring */}
            <motion.div
                className="absolute inset-0 border border-[#cda45e]/20 rounded-full"
                animate={{ scale: [0.8, 1, 0.8], opacity: [0, 0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </div>
    );
};

export default SunburstLoader;
