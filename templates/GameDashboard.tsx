import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Coins, Gem, Settings, Bell, Plus, Trophy } from 'lucide-react';
import CharacterProfile from '../components/game/CharacterProfile';
import InventoryGrid from '../components/game/InventoryGrid';
import QuestLog from '../components/game/QuestLog';
import LeaderboardWidget from '../components/game/LeaderboardWidget';
import GameCard from '../components/game/GameCard';
import GameButton from '../components/game/GameButton';
import { useTheme } from '@/context/ThemeContext';

const GameDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    useEffect(() => {
        setPlaygroundTheme('arcade');
    }, []);

    return (
        <div
            className="container mx-auto min-h-screen p-4 md:p-8 font-display overflow-hidden"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Top HUD */}
            <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-3 backdrop-blur-md p-2 pr-6 rounded-full border"
                    style={{
                        backgroundColor: `${theme.colors.card}66`, // 40% opacity
                        borderColor: `${theme.colors.border}20`
                    }}
                >
                    <div
                        className="h-10 w-10 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                            backgroundColor: theme.colors.primary,
                            '--tw-shadow-color': theme.colors.primary
                        } as React.CSSProperties}
                    >
                        <Gamepad2 className="h-6 w-6" style={{ color: '#ffffff' }} />
                    </div>
                    <h1 className="text-xl font-bold tracking-wider">ARCADE<span style={{ color: theme.colors.primary }}>OS</span></h1>
                </motion.div>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4"
                >
                    {/* Resources */}
                    <div className="flex items-center gap-2 backdrop-blur-md px-3 py-1.5 rounded-full border" style={{ backgroundColor: `${theme.colors.card}66`, borderColor: `${theme.colors.accent}4d` }}>
                        <Coins className="h-4 w-4" style={{ color: theme.colors.accent }} />
                        <span className="font-mono text-sm font-bold" style={{ color: `${theme.colors.accent}e6` }}>24,500</span>
                        <button
                            className="h-4 w-4 rounded flex items-center justify-center transition-colors"
                            style={{ backgroundColor: `${theme.colors.accent}33`, color: theme.colors.accent }}
                        >
                            <Plus className="h-3 w-3" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 backdrop-blur-md px-3 py-1.5 rounded-full border" style={{ backgroundColor: `${theme.colors.card}66`, borderColor: `${theme.colors.secondary}4d` }}>
                        <Gem className="h-4 w-4" style={{ color: theme.colors.secondary }} />
                        <span className="font-mono text-sm font-bold" style={{ color: `${theme.colors.secondary}e6` }}>1,204</span>
                        <button
                            className="h-4 w-4 rounded flex items-center justify-center transition-colors"
                            style={{ backgroundColor: `${theme.colors.secondary}33`, color: theme.colors.secondary }}
                        >
                            <Plus className="h-3 w-3" />
                        </button>
                    </div>

                    <GameButton variant="icon" size="icon" icon={<Bell className="h-5 w-5" />} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
                    <GameButton variant="icon" size="icon" icon={<Settings className="h-5 w-5" />} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
                </motion.div>
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Left Column: Character + Quick Actions */}
                <div className="lg:col-span-3 flex flex-col gap-6 pt-12">
                    <CharacterProfile />

                    {/* Quick Menu */}
                    <div className="flex gap-3">
                        <GameCard
                            className="flex-1 flex flex-col items-center justify-center gap-2 py-4 cursor-pointer transition-colors group"
                            variant="secondary"
                            delay={0.1}
                            style={{ ':hover': { backgroundColor: `${theme.colors.foreground}0d` } } as any}
                        >
                            <div className="h-10 w-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${theme.colors.secondary}33` }}>
                                <Gamepad2 className="h-5 w-5" style={{ color: theme.colors.secondary }} />
                            </div>
                            <span className="font-bold text-sm" style={{ color: `${theme.colors.secondary}e6` }}>Story</span>
                        </GameCard>
                        <GameCard
                            className="flex-1 flex flex-col items-center justify-center gap-2 py-4 cursor-pointer transition-colors group"
                            variant="accent"
                            delay={0.2}
                            style={{ ':hover': { backgroundColor: `${theme.colors.foreground}0d` } } as any}
                        >
                            <div className="h-10 w-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${theme.colors.accent}33` }}>
                                <Trophy className="h-5 w-5" style={{ color: theme.colors.accent }} />
                            </div>
                            <span className="font-bold text-sm" style={{ color: `${theme.colors.accent}e6` }}>Ranked</span>
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
                            <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent" style={{ '--tw-gradient-from': theme.colors.background } as any} />
                        </div>
                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-2 shadow-lg" style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}>
                                Live Event
                            </span>
                            <h2 className="text-2xl font-bold mb-2 drop-shadow-md" style={{ color: theme.colors.foreground }}>The Neon Tournament</h2>
                            <p className="max-w-md text-sm mb-3" style={{ color: theme.colors.mutedForeground }}>Join the battle arena and earn exclusive legendary rewards. Ends in 24h.</p>
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

export default GameDashboard;