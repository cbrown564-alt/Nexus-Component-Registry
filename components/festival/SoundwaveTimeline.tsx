import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SoundwaveTimeline = () => {
  const [activeTime, setActiveTime] = useState('20:00');
  
  const schedule = [
    { time: '18:00', label: 'Doors Open' },
    { time: '19:00', label: 'Opening Act' },
    { time: '20:00', label: 'Main Event' },
    { time: '21:30', label: 'Headliner' },
    { time: '23:00', label: 'Afterparty' },
  ];

  // Generate mock waveform data
  const bars = Array.from({ length: 60 }, (_, i) => ({
    height: Math.max(20, Math.random() * 100),
    active: i > 25 && i < 35 // Mock "active" area around 20:00
  }));

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-between items-end mb-4 px-4">
        <h3 className="text-white font-bold uppercase tracking-widest text-sm">Timeline</h3>
        <span className="text-cyan-400 font-mono text-xs">LIVE NOW</span>
      </div>

      <div className="relative h-28 w-full flex items-center gap-[2px] overflow-x-auto px-4 scrollbar-hide mask-fade-sides overflow-y-hidden">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            initial={{ height: 10 }}
            animate={{ 
              height: bar.active ? [bar.height, bar.height * 0.8, bar.height] : bar.height,
              backgroundColor: bar.active ? '#f0abfc' : '#3f3f46' 
            }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.02 }}
            className={`w-1.5 rounded-full flex-shrink-0 transition-colors duration-300 ${
                bar.active ? 'bg-fuchsia-400 shadow-[0_0_10px_#e879f9]' : 'bg-zinc-700'
            }`}
            style={{ height: `${bar.height}%` }}
          />
        ))}
        
        {/* Playhead Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_15px_white] z-20 pointer-events-none"></div>
      </div>

      <div className="flex justify-between px-4 mt-2 font-mono text-xs text-zinc-500">
          {schedule.map((slot, i) => (
              <div 
                key={i} 
                className={`cursor-pointer transition-colors ${activeTime === slot.time ? 'text-white font-bold' : 'hover:text-zinc-300'}`}
                onClick={() => setActiveTime(slot.time)}
              >
                  {slot.time}
              </div>
          ))}
      </div>
    </div>
  );
};

export default SoundwaveTimeline;