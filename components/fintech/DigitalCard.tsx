import React from 'react';
import { Wifi, ContactlessPayment } from 'lucide-react';
import FintechCard from './FintechCard';
import { motion } from 'framer-motion';

const DigitalCard = () => {
  return (
    <motion.div 
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
      className="relative h-56 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-black p-6 shadow-2xl border border-zinc-700/50 group perspective-1000"
    >
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 opacity-40" 
             style={{ 
                 background: 'radial-gradient(circle at 100% 0%, #4f46e5 0%, transparent 50%), radial-gradient(circle at 0% 100%, #10b981 0%, transparent 50%)' 
             }} 
        />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="h-8 w-12 rounded bg-gradient-to-r from-zinc-300 to-zinc-100" /> {/* Chip */}
                <Wifi className="h-6 w-6 text-zinc-500 rotate-90" />
            </div>

            <div className="space-y-6">
                <div className="font-mono text-xl tracking-[0.2em] text-zinc-200 text-shadow-sm">
                    4923  ••••  ••••  8821
                </div>

                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Cardholder</div>
                        <div className="font-medium tracking-wide text-zinc-300 text-sm">ALEXANDER MORGAN</div>
                    </div>
                    <div className="text-right">
                         <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Expires</div>
                         <div className="font-mono text-sm text-zinc-300">12/28</div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
    </motion.div>
  );
};

export default DigitalCard;