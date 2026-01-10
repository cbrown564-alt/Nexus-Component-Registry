import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import SolarCard from './SolarCard';

const EnergySun = () => {
  return (
    <SolarCard className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[320px] bg-gradient-to-br from-[#fffbeb] to-[#fef3c7]">
      <div className="mb-8">
        <h3 className="font-bold text-2xl text-emerald-950 mb-1">Solar Harvest</h3>
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600/60">Current Output</p>
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Animated Sun Rays Container */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm text-yellow-400">
            {/* Rays */}
            {[...Array(12)].map((_, i) => (
              <motion.path
                key={i}
                d="M50 15 L50 5"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                transform={`rotate(${i * 30} 50 50)`}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                  repeatType: "reverse"
                }}
              />
            ))}

            {/* Secondary shorter rays */}
            {[...Array(12)].map((_, i) => (
              <path
                key={`s-${i}`}
                d="M50 22 L50 26"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${i * 30 + 15} 50 50)`}
                className="opacity-40"
              />
            ))}
          </svg>
        </motion.div>

        {/* Center Sun Core */}
        <div className="relative z-10 w-28 h-28">
          {/* Glowing Backdrop */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-40 animate-pulse" />

          {/* Main Core */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-inner border-[3px] border-white/50 flex flex-col items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <Zap className="w-6 h-6 text-orange-700 mb-0.5 relative z-10" fill="currentColor" />
            <div className="flex items-baseline gap-0.5 relative z-10">
              <span className="text-3xl font-bold text-orange-950 tracking-tight">4.8</span>
            </div>
            <span className="text-[10px] font-bold text-orange-800 uppercase tracking-widest relative z-10">kW/h</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-[240px]">
        <div className="text-center p-3 bg-white/40 rounded-xl border border-white/60">
          <div className="text-[10px] text-emerald-600 uppercase tracking-wider font-bold mb-1">Storage</div>
          <div className="font-sans font-bold text-lg text-emerald-900">94%</div>
        </div>
        <div className="text-center p-3 bg-white/40 rounded-xl border border-white/60">
          <div className="text-[10px] text-emerald-600 uppercase tracking-wider font-bold mb-1">Grid Feed</div>
          <div className="font-sans font-bold text-lg text-emerald-900">1.2 kW</div>
        </div>
      </div>
    </SolarCard>
  );
};

export default EnergySun;