import React from 'react';
import { motion } from 'framer-motion';

const Mascot = () => {
  return (
    <div className="relative group cursor-pointer">
        <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32 bg-blue-500 rounded-[2.5rem] border-4 border-blue-700 relative flex items-center justify-center shadow-[0_8px_0_rgba(29,78,216,0.5)] z-20"
        >
            {/* Eyes */}
            <div className="flex gap-3 md:gap-4 mb-2">
                <div className="w-5 h-7 md:w-6 md:h-8 bg-white rounded-full relative">
                    <motion.div 
                        animate={{ x: [-1, 1, -1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-2 h-3 bg-black rounded-full absolute top-3 right-1" 
                    />
                </div>
                <div className="w-5 h-7 md:w-6 md:h-8 bg-white rounded-full relative">
                    <motion.div 
                        animate={{ x: [-1, 1, -1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-2 h-3 bg-black rounded-full absolute top-3 right-1" 
                    />
                </div>
            </div>
            {/* Mouth */}
            <div className="w-6 h-3 md:w-8 md:h-4 border-b-4 border-white rounded-full absolute bottom-6 md:bottom-8" />
            
            {/* Antenna */}
            <div className="absolute -top-6 w-2 h-6 bg-blue-700 left-1/2 -translate-x-1/2">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-2 border-orange-500 animate-pulse" />
            </div>
        </motion.div>
        
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/10 rounded-full blur-sm z-10" />

        {/* Speech Bubble */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -right-24 -top-16 md:-top-12 bg-white border-4 border-black p-3 md:p-4 rounded-3xl rounded-bl-none shadow-lg z-30"
        >
            <span className="font-sans font-black text-lg md:text-xl text-black whitespace-nowrap">Let's Play!</span>
        </motion.div>
    </div>
  );
};

export default Mascot;