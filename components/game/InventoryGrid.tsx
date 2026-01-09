import React from 'react';
import { Backpack, Gem, Crown, ShieldHalf, FlaskConical } from 'lucide-react';
import GameCard from './GameCard';

const InventoryGrid = () => {
  // Rarity: common (zinc), rare (blue), epic (purple), legendary (amber)
  const items = [
    { icon: Crown, rarity: 'legendary', bg: 'bg-amber-500', color: 'text-amber-100', glow: 'shadow-amber-500/50' },
    { icon: ShieldHalf, rarity: 'epic', bg: 'bg-purple-500', color: 'text-purple-100', glow: 'shadow-purple-500/50' },
    { icon: FlaskConical, rarity: 'rare', bg: 'bg-cyan-500', color: 'text-cyan-100', glow: 'shadow-cyan-500/50' },
    { icon: Gem, rarity: 'common', bg: 'bg-zinc-600', color: 'text-zinc-100', glow: 'shadow-zinc-500/50' },
    null, null, null, null, // Empty slots
  ];

  return (
    <GameCard variant="secondary" className="p-5 h-full">
       <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-2">
               <Backpack className="h-5 w-5 text-cyan-400" />
               <h3 className="font-display font-bold text-white">Inventory</h3>
           </div>
           <span className="text-xs font-bold text-cyan-400 bg-cyan-950 px-2 py-1 rounded-md border border-cyan-800">
               4 / 8
           </span>
       </div>

       <div className="grid grid-cols-4 gap-3">
           {items.map((item, i) => (
               <div 
                key={i} 
                className={`aspect-square rounded-xl border-2 flex items-center justify-center relative group transition-all duration-200 cursor-pointer ${
                    item 
                    ? `border-${item.rarity === 'legendary' ? 'amber' : item.rarity === 'epic' ? 'purple' : item.rarity === 'rare' ? 'cyan' : 'zinc'}-500/50 bg-black/40`
                    : 'border-white/5 bg-black/20 hover:border-white/10'
                }`}
               >
                   {item && (
                       <>
                           <div className={`absolute inset-2 opacity-20 blur-md ${item.bg}`} />
                           <item.icon className={`relative z-10 h-6 w-6 ${item.color} drop-shadow-md group-hover:scale-110 transition-transform`} />
                           {item.rarity === 'legendary' && (
                               <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-400 animate-pulse" />
                           )}
                       </>
                   )}
               </div>
           ))}
       </div>
       
       <button className="mt-4 w-full py-3 rounded-xl bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 font-bold text-sm hover:bg-cyan-600/30 transition-colors uppercase tracking-wider">
           View All Items
       </button>
    </GameCard>
  );
};

export default InventoryGrid;