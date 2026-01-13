import React from 'react';
import { motion } from 'framer-motion';

const BioViz = () => {
    return (
        <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-[#f5f5f4]">
            {/* Liquid Background Layer */}
            <div className="absolute inset-0 opacity-60">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#d1fae5] rounded-full blur-3xl mix-blend-multiply" // Emerald-100
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#cffafe] rounded-full blur-3xl mix-blend-multiply" // Cyan-100
                />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-[#ecfccb] rounded-full blur-3xl mix-blend-multiply" // Lime-100
                />
            </div>

            {/* Glass Surface / Scan Lines */}
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_1px,transparent_1px)] bg-[size:100%_4px] opacity-10 pointer-events-none" />

            {/* Content Overlay */}
            <div className="absolute bottom-8 left-8 z-10">
                <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Live Metric</span>
                </div>
                <h3 className="text-3xl font-serif text-stone-800">
                    Cellular
                    <br />
                    <span className="italic text-stone-500">Resonance</span>
                </h3>
            </div>

            {/* Scientific Marking */}
            <div className="absolute top-6 right-6 font-mono text-[10px] text-stone-400 opacity-50">
                BIO-SCAN v4.2<br />
                Hz: 432
            </div>
        </div>
    );
};

export default BioViz;
