import React from 'react';
import { Shield, Zap, Sword } from 'lucide-react';
import GameCard from './GameCard';
import { useTheme } from '@/context/ThemeContext';

const CharacterProfile = () => {
    const { theme } = useTheme();

    return (
        <GameCard className="p-1 flex flex-col items-center text-center relative overflow-visible" variant="primary">
            {/* Avatar */}
            <div className="absolute -top-10 h-24 w-24 rounded-2xl border-4 border-[#130f26] bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-xl flex items-center justify-center overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="h-full w-full object-cover" />
            </div>

            <div className="pt-16 pb-6 px-6 w-full">
                <div className="mb-1 inline-block rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-bold text-fuchsia-300 border border-fuchsia-500/50">
                    LEVEL 42
                </div>
                <h2
                    className="font-display text-2xl font-bold tracking-wide"
                    style={{ color: theme.colors.foreground }}
                >
                    Cyber Ninja
                </h2>
                <p className="text-xs text-fuchsia-200/60 mb-6">Shadow Assassin Class</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col items-center gap-1 rounded-xl bg-[#130f26]/50 p-2 border border-white/5">
                        <Sword className="h-4 w-4 text-rose-400" />
                        <span
                            className="text-sm font-bold"
                            style={{ color: theme.colors.foreground }}
                        >
                            2.4k
                        </span>
                        <span
                            className="text-[10px]"
                            style={{ color: theme.colors.mutedForeground }}
                        >
                            ATK
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-xl bg-[#130f26]/50 p-2 border border-white/5">
                        <Shield className="h-4 w-4 text-cyan-400" />
                        <span
                            className="text-sm font-bold"
                            style={{ color: theme.colors.foreground }}
                        >
                            850
                        </span>
                        <span
                            className="text-[10px]"
                            style={{ color: theme.colors.mutedForeground }}
                        >
                            DEF
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-1 rounded-xl bg-[#130f26]/50 p-2 border border-white/5">
                        <Zap className="h-4 w-4 text-amber-400" />
                        <span
                            className="text-sm font-bold"
                            style={{ color: theme.colors.foreground }}
                        >
                            145
                        </span>
                        <span
                            className="text-[10px]"
                            style={{ color: theme.colors.mutedForeground }}
                        >
                            SPD
                        </span>
                    </div>
                </div>

                {/* XP Bar */}
                <div className="w-full">
                    <div
                        className="flex justify-between text-[10px] font-bold mb-1"
                        style={{ color: theme.colors.mutedForeground }}
                    >
                        <span>XP</span>
                        <span>8,420 / 10,000</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-[#130f26] border border-white/10 p-0.5">
                        <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 w-[84%] shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
                    </div>
                </div>
            </div>
        </GameCard>
    );
};

export default CharacterProfile;