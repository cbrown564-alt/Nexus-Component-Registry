import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Coins, Gem, Settings, Bell, Plus } from 'lucide-react';
import CharacterProfile from '../components/game/CharacterProfile';
import InventoryGrid from '../components/game/InventoryGrid';
import QuestLog from '../components/game/QuestLog';
import LeaderboardWidget from '../components/game/LeaderboardWidget';
import GameCard from '../components/game/GameCard';

const GameDashboard = () => {
  return (
    <div className="container mx-auto min-h-screen p-4 md:p-8 font-display text-white overflow-hidden">
      
      {/* Top HUD */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 pr-6 rounded-full border border-white/10"
          >
              <div className="h-10 w-10 rounded-full bg-fuchsia-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/50">
                  <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold tracking-wider">ARCADE<span className="text-fuchsia-500">OS</span></h1>
          </motion.div>

          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
               {/* Resources */}
               <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/30">
                   <Coins className="h-4 w-4 text-amber-400" />
                   <span className="font-mono text-sm font-bold text-amber-100">24,500</span>
                   <button className="h-4 w-4 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors">
                       <Plus className="h-3 w-3" />
                   </button>
               </div>
               
               <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/30">
                   <Gem className="h-4 w-4 text-cyan-400" />
                   <span className="font-mono text-sm font-bold text-cyan-100">1,204</span>
                   <button className="h-4 w-4 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-colors">
                       <Plus className="h-3 w-3" />
                   </button>
               </div>

               <button className="h-10 w-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                   <Bell className="h-5 w-5" />
               </button>
               <button className="h-10 w-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                   <Settings className="h-5 w-5" />
               </button>
          </motion.div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Left Column: Character */}
          <div className="lg:col-span-1">
             <CharacterProfile />
          </div>

          {/* Center Column: Gameplay/Menu */}
          <div className="lg:col-span-2 space-y-6">
              
              {/* Featured Banner */}
              <GameCard className="relative h-64 flex items-end p-8 group cursor-pointer overflow-hidden" variant="primary">
                  <div className="absolute inset-0">
                      <img 
                        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" 
                        alt="Event" 
                        className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#130f26] via-transparent to-transparent" />
                  </div>
                  <div className="relative z-10">
                      <span className="inline-block px-3 py-1 rounded bg-fuchsia-600 text-xs font-bold uppercase tracking-widest mb-2 shadow-lg shadow-fuchsia-500/40">
                          Live Event
                      </span>
                      <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-md">The Neon Tournament</h2>
                      <p className="text-zinc-300 max-w-md text-sm">Join the battle arena and earn exclusive legendary rewards. Ends in 24h.</p>
                      <button className="mt-4 px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-fuchsia-400 hover:text-white transition-colors">
                          Enter Arena
                      </button>
                  </div>
              </GameCard>

              {/* Menu Grid */}
              <div className="grid grid-cols-2 gap-4 h-48">
                  <GameCard className="flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white/5 transition-colors group" variant="secondary" delay={0.1}>
                      <div className="h-12 w-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Gamepad2 className="h-6 w-6 text-cyan-400" />
                      </div>
                      <span className="font-bold text-cyan-100">Story Mode</span>
                  </GameCard>
                  <GameCard className="flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white/5 transition-colors group" variant="accent" delay={0.2}>
                       <div className="h-12 w-12 rounded-2xl bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Trophy className="h-6 w-6 text-amber-400" />
                      </div>
                      <span className="font-bold text-amber-100">Ranked</span>
                  </GameCard>
              </div>
              
              <div className="h-64">
                   <QuestLog />
              </div>
          </div>

          {/* Right Column: Social/Items */}
          <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="h-1/2 min-h-[300px]">
                 <InventoryGrid />
              </div>
              <div className="h-1/2 min-h-[300px]">
                 <LeaderboardWidget />
              </div>
          </div>

      </div>
    </div>
  );
};

import { Trophy } from 'lucide-react';

export default GameDashboard;