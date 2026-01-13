import React from 'react';
import { motion } from 'framer-motion';

const DNASpiral: React.FC = () => {
    // Generate DNA base pairs
    const pairs = Array.from({ length: 12 });

    return (
        <div className="h-full w-full relative flex items-center justify-center overflow-hidden bg-[#064e3b]/5 rounded-3xl border border-[#064e3b]/10 p-8">
            <div className="text-center absolute top-6 left-0 w-full z-10">
                <h3 className="text-[#064e3b] font-serif text-xl italic">Genetic Diversity</h3>
                <p className="text-[#8f9e8a] text-xs uppercase tracking-widest">Sequencing Active</p>
            </div>

            <div className="relative h-[200px] w-[100px] perspective-[1000px] mt-8">
                {pairs.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute left-0 w-full flex items-center justify-between"
                        style={{ top: `${i * 15}px` }}
                        animate={{
                            rotateY: 360,
                            z: [0, 50, 0, -50, 0],
                            scale: [1, 1.1, 1, 0.9, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.2
                        }}
                    >
                        {/* Node Left */}
                        <div className="w-3 h-3 rounded-full bg-[#064e3b] shadow-sm" />

                        {/* Connection Line */}
                        <div className="h-[2px] w-full bg-[#064e3b]/20" />

                        {/* Node Right */}
                        <div className="w-3 h-3 rounded-full bg-[#fbbf24] shadow-sm" />
                    </motion.div>
                ))}
            </div>

            {/* Data Overlay */}
            <div className="absolute bottom-6 flex gap-8">
                <div>
                    <div className="text-2xl font-black text-[#064e3b]">98.4%</div>
                    <div className="text-[10px] uppercase text-[#8f9e8a] tracking-wider">Viability</div>
                </div>
                <div>
                    <div className="text-2xl font-black text-[#064e3b]">A-T</div>
                    <div className="text-[10px] uppercase text-[#8f9e8a] tracking-wider">Base Pair</div>
                </div>
            </div>
        </div>
    );
};

export default DNASpiral;
