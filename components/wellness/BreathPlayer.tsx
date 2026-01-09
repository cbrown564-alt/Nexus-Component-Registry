import React, { useState } from 'react';
import { Play, Pause, Wind } from 'lucide-react';
import WellnessCard from './WellnessCard';
import { motion } from 'framer-motion';

const BreathPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <WellnessCard className="flex flex-col items-center justify-center text-center h-full">
      <div className="mb-2 flex items-center gap-2 text-stone-600">
        <Wind className="h-4 w-4" />
        <span className="text-xs font-medium uppercase tracking-widest">Resonance</span>
      </div>
      <h3 className="font-serif text-2xl text-stone-800">Breathe & Reset</h3>
      
      <div className="relative mt-12 mb-12 flex h-48 w-48 items-center justify-center">
        {/* Outer glowing rings */}
        <motion.div 
          animate={isPlaying ? { scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-sage-300 blur-xl"
        />
        <motion.div 
          animate={isPlaying ? { scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute inset-4 rounded-full bg-sage-200 blur-lg"
        />
        
        {/* Main Circle */}
        <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-white to-stone-50 shadow-lg ring-1 ring-stone-100">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-800 text-white transition-transform hover:scale-105 active:scale-95"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-1" />}
          </button>
        </div>
      </div>

      <div className="flex gap-12 text-sm mt-auto mb-4">
        <div className="flex flex-col">
          <span className="font-serif text-xl text-stone-800">4s</span>
          <span className="text-xs text-stone-500 font-medium">Inhale</span>
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-xl text-stone-800">4s</span>
          <span className="text-xs text-stone-500 font-medium">Hold</span>
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-xl text-stone-800">6s</span>
          <span className="text-xs text-stone-500 font-medium">Exhale</span>
        </div>
      </div>
    </WellnessCard>
  );
};

export default BreathPlayer;