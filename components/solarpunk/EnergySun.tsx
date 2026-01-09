import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import SolarCard from './SolarCard';

const EnergySun = () => {
  return (
    <SolarCard className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[320px]">
      <h3 className="font-serif text-xl text-emerald-900 mb-6">Solar Harvest</h3>
      
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Rotating Rays */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-200/50 rounded-full blur-sm"
              style={{ 
                transform: `rotate(${i * 30}deg) translateY(-60px)`,
                transformOrigin: 'center 84px'
              }}
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-yellow-400 to-transparent rounded-full opacity-60"
              style={{ 
                transform: `rotate(${i * 30}deg) translateY(-80px)`,
                transformOrigin: 'center 104px'
              }}
            />
          ))}
        </motion.div>

        {/* Center Sun Core */}
        <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full shadow-[0_0_40px_rgba(253,224,71,0.6)] flex flex-col items-center justify-center border-4 border-white/30 backdrop-blur-sm">
            <Zap className="w-6 h-6 text-orange-600 mb-1" fill="currentColor" />
            <span className="font-serif text-2xl font-bold text-orange-900">4.8</span>
            <span className="text-xs font-bold text-orange-700 uppercase tracking-widest">kW/h</span>
        </div>
      </div>

      <div className="mt-8 flex gap-8">
          <div className="text-center">
              <div className="text-xs text-emerald-600 uppercase tracking-wider font-bold">Storage</div>
              <div className="font-serif text-lg text-emerald-900">94%</div>
          </div>
          <div className="text-center">
              <div className="text-xs text-emerald-600 uppercase tracking-wider font-bold">Grid Feed</div>
              <div className="font-serif text-lg text-emerald-900">1.2 kW</div>
          </div>
      </div>
    </SolarCard>
  );
};

export default EnergySun;