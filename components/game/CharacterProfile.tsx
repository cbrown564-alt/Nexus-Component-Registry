import React from 'react';
import { Shield, Zap, Sword } from 'lucide-react';
import GameCard from './GameCard';
import { useTheme } from '@/context/ThemeContext';

const CharacterProfile = () => {
    const { theme } = useTheme();

    return (
        <GameCard className="p-1 flex flex-col items-center text-center relative overflow-visible" variant="primary">
            {/* Avatar */}
            <div
                className="absolute -top-10 h-24 w-24 rounded-2xl border-4 shadow-xl flex items-center justify-center overflow-hidden"
                style={{
                    borderColor: theme.colors.background,
                    background: `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                }}
            >
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="h-full w-full object-cover" />
            </div>

            <div className="pt-16 pb-6 px-6 w-full">
                <div
                    className="mb-1 inline-block rounded-full px-3 py-1 text-xs font-bold border"
                    style={{
                        backgroundColor: `${theme.colors.primary}33`,
                        color: theme.colors.accent,
                        borderColor: `${theme.colors.primary}80`,
                    }}
                >
                    LEVEL 42
                </div>
                <h2
                    className="font-display text-2xl font-bold tracking-wide"
                    style={{ color: theme.colors.foreground }}
                >
                    Cyber Ninja
                </h2>
                <p className="text-xs mb-6" style={{ color: `${theme.colors.mutedForeground}99` }}>Shadow Assassin Class</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                    <div
                        className="flex flex-col items-center gap-1 rounded-xl p-2 border"
                        style={{ backgroundColor: `${theme.colors.background}80`, borderColor: `${theme.colors.border}0d` }}
                    >
                        <Sword className="h-4 w-4" style={{ color: theme.colors.accent }} />
                        <span className="text-sm font-bold" style={{ color: theme.colors.foreground }}>2.4k</span>
                        <span className="text-[10px]" style={{ color: theme.colors.mutedForeground }}>ATK</span>
                    </div>
                    <div
                        className="flex flex-col items-center gap-1 rounded-xl p-2 border"
                        style={{ backgroundColor: `${theme.colors.background}80`, borderColor: `${theme.colors.border}0d` }}
                    >
                        <Shield className="h-4 w-4" style={{ color: theme.colors.secondary }} />
                        <span className="text-sm font-bold" style={{ color: theme.colors.foreground }}>850</span>
                        <span className="text-[10px]" style={{ color: theme.colors.mutedForeground }}>DEF</span>
                    </div>
                    <div
                        className="flex flex-col items-center gap-1 rounded-xl p-2 border"
                        style={{ backgroundColor: `${theme.colors.background}80`, borderColor: `${theme.colors.border}0d` }}
                    >
                        <Zap className="h-4 w-4" style={{ color: theme.colors.accent }} />
                        <span className="text-sm font-bold" style={{ color: theme.colors.foreground }}>145</span>
                        <span className="text-[10px]" style={{ color: theme.colors.mutedForeground }}>SPD</span>
                    </div>
                </div>

                {/* XP Bar */}
                <div className="w-full">
                    <div className="flex justify-between text-[10px] font-bold mb-1" style={{ color: theme.colors.mutedForeground }}>
                        <span>XP</span>
                        <span>8,420 / 10,000</span>
                    </div>
                    <div
                        className="h-3 w-full rounded-full border p-0.5"
                        style={{ backgroundColor: theme.colors.background, borderColor: `${theme.colors.border}1a` }}
                    >
                        <div
                            className="h-full rounded-full w-[84%]"
                            style={{
                                background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                                boxShadow: `0 0 10px ${theme.colors.primary}80`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </GameCard>
    );
};

export default CharacterProfile;