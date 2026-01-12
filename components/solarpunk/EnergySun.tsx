import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import SolarCard from './SolarCard';

const EnergySun = () => {
  return (
    <SolarCard className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[320px]" style={{ background: 'linear-gradient(to bottom right, #fffbeb, #fef3c7)' }}>
      <div className="mb-8">
        <h3 className="font-bold text-2xl mb-1" style={{ color: '#022c22' }}>Solar Harvest</h3>
        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(5, 150, 105, 0.6)' }}>Current Output</p>
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Animated Sun Rays Container */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" style={{ color: '#facc15' }}>
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
          <div className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse" style={{ backgroundColor: '#facc15' }} />

          {/* Main Core */}
          <div className="absolute inset-0 rounded-full shadow-inner border-[3px] flex flex-col items-center justify-center group overflow-hidden"
            style={{ background: 'linear-gradient(to bottom right, #fde047, #fb923c)', borderColor: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to top, rgba(249, 115, 22, 0.2), transparent)' }} />

            <Zap className="w-6 h-6 mb-0.5 relative z-10" fill="currentColor" style={{ color: '#c2410c' }} />
            <div className="flex items-baseline gap-0.5 relative z-10">
              <span className="text-3xl font-bold tracking-tight" style={{ color: '#431407' }}>4.8</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest relative z-10" style={{ color: '#9a3412' }}>kW/h</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-[240px]">
        <div className="text-center p-3 rounded-xl border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderColor: 'rgba(255, 255, 255, 0.6)' }}>
          <div className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#059669' }}>Storage</div>
          <div className="font-sans font-bold text-lg" style={{ color: '#064e3b' }}>94%</div>
        </div>
        <div className="text-center p-3 rounded-xl border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderColor: 'rgba(255, 255, 255, 0.6)' }}>
          <div className="text-[10px] uppercase tracking-wider font-bold mb-1" style={{ color: '#059669' }}>Grid Feed</div>
          <div className="font-sans font-bold text-lg" style={{ color: '#064e3b' }}>1.2 kW</div>
        </div>
      </div>
    </SolarCard>
  );
};

export default EnergySun;