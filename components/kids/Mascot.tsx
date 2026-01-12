import React from 'react';
import { motion } from 'framer-motion';

const Mascot = () => {
    return (
        <div className="relative group cursor-pointer">
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] border-4 relative flex items-center justify-center z-20"
                style={{ backgroundColor: '#3b82f6', borderColor: '#1d4ed8', boxShadow: '0 8px 0 rgba(29,78,216,0.5)' }}
            >
                {/* Eyes */}
                <div className="flex gap-3 md:gap-4 mb-2">
                    <div className="w-5 h-7 md:w-6 md:h-8 rounded-full relative" style={{ backgroundColor: '#ffffff' }}>
                        <motion.div
                            animate={{ x: [-1, 1, -1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-2 h-3 rounded-full absolute top-3 right-1"
                            style={{ backgroundColor: '#000000' }}
                        />
                    </div>
                    <div className="w-5 h-7 md:w-6 md:h-8 rounded-full relative" style={{ backgroundColor: '#ffffff' }}>
                        <motion.div
                            animate={{ x: [-1, 1, -1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="w-2 h-3 rounded-full absolute top-3 right-1"
                            style={{ backgroundColor: '#000000' }}
                        />
                    </div>
                </div>
                {/* Mouth */}
                <div className="w-6 h-3 md:w-8 md:h-4 border-b-4 rounded-full absolute bottom-6 md:bottom-8" style={{ borderColor: '#ffffff' }} />

                {/* Antenna */}
                <div className="absolute -top-6 w-2 h-6 left-1/2 -translate-x-1/2" style={{ backgroundColor: '#1d4ed8' }}>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 animate-pulse" style={{ backgroundColor: '#facc15', borderColor: '#f97316' }} />
                </div>
            </motion.div>

            {/* Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full blur-sm z-10" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} />

            {/* Speech Bubble */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -right-24 -top-16 md:-top-12 border-4 p-3 md:p-4 rounded-3xl rounded-bl-none shadow-lg z-30"
                style={{ backgroundColor: '#ffffff', borderColor: '#000000' }}
            >
                <span className="font-sans font-black text-lg md:text-xl whitespace-nowrap" style={{ color: '#000000' }}>Let's Play!</span>
            </motion.div>
        </div>
    );
};

export default Mascot;