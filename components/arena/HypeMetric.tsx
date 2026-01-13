import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';
import CyberContainer from './CyberContainer';

interface HypeMetricProps {
    label: string;
    value: number; // 0-100
    className?: string;
}

const HypeMetric: React.FC<HypeMetricProps> = ({ label, value, className = '' }) => {
    const isHighHype = value > 80;

    return (
        <CyberContainer className={`overflow-hidden p-6 ${className}`} variant={isHighHype ? 'danger' : 'primary'}>
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 100%)',
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="flex justify-between items-start z-10 relative">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{label}</span>
                {isHighHype && (
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        className="text-orange-500"
                    >
                        <Flame size={20} fill="currentColor" />
                    </motion.div>
                )}
            </div>

            <div className="relative mt-4 z-10 flex items-baseline">
                <span className={`text-5xl font-black italic tracking-tighter ${isHighHype ? 'text-white' : 'text-slate-200'} font-sans`}
                    style={{ textShadow: isHighHype ? '0 0 20px rgba(255,100,0,0.5)' : 'none' }}>
                    {value}
                </span>
                <span className="text-xl font-bold opacity-50 ml-1">%</span>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-full h-2 bg-slate-800 skew-x-[-20deg] overflow-hidden z-10 relative border border-slate-700">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    className={`h-full ${isHighHype ? 'bg-gradient-to-r from-orange-500 to-red-600' : 'bg-gradient-to-r from-blue-500 to-cyan-400'}`}
                />
            </div>

            {/* Particle Effects (Simulated CSS) */}
            {isHighHype && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-500 rounded-full"
                            initial={{ bottom: 0, left: `${Math.random() * 100}%`, opacity: 0 }}
                            animate={{
                                bottom: '100%',
                                opacity: [0, 1, 0],
                                x: Math.random() * 40 - 20
                            }}
                            transition={{
                                duration: 1 + Math.random(),
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeOut"
                            }}
                        />
                    ))}
                </div>
            )}
        </CyberContainer>
    );
};

export default HypeMetric;
