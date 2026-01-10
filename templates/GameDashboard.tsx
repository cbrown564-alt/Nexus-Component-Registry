import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Coins, Gem, Settings, Bell, Plus } from 'lucide-react';
import CharacterProfile from '../components/game/CharacterProfile';
import InventoryGrid from '../components/game/InventoryGrid';
import QuestLog from '../components/game/QuestLog';
import LeaderboardWidget from '../components/game/LeaderboardWidget';
import GameCard from '../components/game/GameCard';
import GameButton from '../components/game/GameButton';

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

                    <GameButton variant="icon" size="icon" icon={<Bell className="h-5 w-5" />} className="bg-black/40" />
                    <GameButton variant="icon" size="icon" icon={<Settings className="h-5 w-5" />} className="bg-black/40" />
                </motion.div>
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column: Character + Quick Actions */}
                <div className="lg:col-span-3 flex flex-col gap-6 pt-12">
                    <CharacterProfile />

                    {/* Quick Menu */}
                    <div className="flex gap-3">
                        <GameCard className="flex-1 flex flex-col items-center justify-center gap-2 py-4 cursor-pointer hover:bg-white/5 transition-colors group" variant="secondary" delay={0.1}>
                            <div className="h-10 w-10 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Gamepad2 className="h-5 w-5 text-cyan-400" />
                            </div>
                            <span className="font-bold text-cyan-100 text-sm">Story</span>
                        </GameCard>
                        <GameCard className="flex-1 flex flex-col items-center justify-center gap-2 py-4 cursor-pointer hover:bg-white/5 transition-colors group" variant="accent" delay={0.2}>
                            <div className="h-10 w-10 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Trophy className="h-5 w-5 text-amber-400" />
                            </div>
                            <span className="font-bold text-amber-100 text-sm">Ranked</span>
                        </GameCard>
                    </div>
                </div>

                {/* Center Column: Featured + Quests */}
                <div className="lg:col-span-6 space-y-6">

                    {/* Featured Banner */}
                    <GameCard className="relative h-56 flex items-end p-6 group cursor-pointer overflow-hidden" variant="primary">
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
                            <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-md">The Neon Tournament</h2>
                            <p className="text-zinc-300 max-w-md text-sm mb-3">Join the battle arena and earn exclusive legendary rewards. Ends in 24h.</p>
                            <GameButton variant="primary" size="md">
                                Enter Arena
                            </GameButton>
                        </div>
                    </GameCard>

                    <QuestLog />
                </div>

                {/* Right Column: Inventory + Leaderboard */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    <InventoryGrid />
                    <LeaderboardWidget />
                </div>

            </div>
        </div>
    );
};

import { Trophy } from 'lucide-react';

export default GameDashboard;