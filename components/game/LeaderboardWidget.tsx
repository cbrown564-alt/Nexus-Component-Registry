import React from 'react';
import { Trophy, ChevronUp, ChevronDown, Minus } from 'lucide-react';
import GameCard from './GameCard';

const LeaderboardWidget = () => {
  const players = [
    { rank: 1, name: "NightStalker", score: "2,401,920", change: "up", avatar: "bg-amber-500" },
    { rank: 2, name: "PixelQueen", score: "2,388,400", change: "same", avatar: "bg-zinc-400" },
    { rank: 3, name: "CyberNinja", score: "2,100,550", change: "down", avatar: "bg-orange-700" }, // User
    { rank: 4, name: "VoidWalker", score: "1,940,200", change: "up", avatar: "bg-purple-500" },
  ];

  return (
    <GameCard className="p-5 h-full" variant="primary">
       <div className="flex items-center justify-between mb-6">
           <div className="flex items-center gap-2">
               <Trophy className="h-5 w-5 text-yellow-400" />
               <h3 className="font-display font-bold text-white">Top Players</h3>
           </div>
           <span className="text-xs text-fuchsia-300">Global Region</span>
       </div>

       <div className="space-y-2">
           {players.map((p, i) => (
               <div 
                key={i} 
                className={`flex items-center gap-3 p-2 rounded-lg border ${
                    p.name === 'CyberNinja' 
                    ? 'bg-fuchsia-500/20 border-fuchsia-500/50' 
                    : 'bg-black/20 border-transparent hover:bg-black/40'
                }`}
               >
                   <div className={`flex h-6 w-6 items-center justify-center rounded text-xs font-bold ${
                       p.rank === 1 ? 'text-yellow-400' : p.rank === 2 ? 'text-zinc-300' : p.rank === 3 ? 'text-orange-400' : 'text-zinc-600'
                   }`}>
                       #{p.rank}
                   </div>
                   
                   <div className={`h-8 w-8 rounded-lg ${p.avatar} border border-white/10`} />
                   
                   <div className="flex-1">
                       <div className={`text-sm font-bold ${p.name === 'CyberNinja' ? 'text-fuchsia-200' : 'text-zinc-300'}`}>
                           {p.name}
                       </div>
                       <div className="text-[10px] font-mono text-zinc-500">{p.score}</div>
                   </div>

                   <div className="text-zinc-500">
                       {p.change === 'up' && <ChevronUp className="h-3 w-3 text-emerald-500" />}
                       {p.change === 'down' && <ChevronDown className="h-3 w-3 text-rose-500" />}
                       {p.change === 'same' && <Minus className="h-3 w-3" />}
                   </div>
               </div>
           ))}
       </div>
    </GameCard>
  );
};

export default LeaderboardWidget;