import React from 'react';
import { Backpack, Gem, Crown, ShieldHalf, FlaskConical } from 'lucide-react';
import GameCard from './GameCard';
import { useTheme } from '@/context/ThemeContext';

const InventoryGrid = () => {
    const { theme } = useTheme();

    // Rarity colors - these are semantic and intentionally kept as distinct from theme
    // Legendary = Gold, Epic = Purple, Rare = Cyan, Common = uses theme
    const items = [
        { icon: Crown, rarity: 'legendary', bg: '#f59e0b', color: '#fef3c7' },
        { icon: ShieldHalf, rarity: 'epic', bg: '#a855f7', color: '#f3e8ff' },
        { icon: FlaskConical, rarity: 'rare', bg: '#06b6d4', color: '#cffafe' },
        { icon: Gem, rarity: 'common', bg: '', color: '' },
        null, null, null, null, // Empty slots
    ];

    const getRarityStyles = (rarity: string) => {
        switch (rarity) {
            case 'legendary': return { borderColor: 'rgba(245, 158, 11, 0.5)' };
            case 'epic': return { borderColor: 'rgba(168, 85, 247, 0.5)' };
            case 'rare': return { borderColor: 'rgba(6, 182, 212, 0.5)' };
            case 'common': return { borderColor: `${theme.colors.border}80` };
            default: return { borderColor: `${theme.colors.border}0d` };
        }
    };

    return (
        <GameCard variant="secondary" className="p-5 h-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Backpack className="h-5 w-5" style={{ color: theme.colors.secondary }} />
                    <h3
                        className="font-display font-bold"
                        style={{ color: theme.colors.foreground }}
                    >
                        Inventory
                    </h3>
                </div>
                <span
                    className="text-xs font-bold px-2 py-1 rounded-md border"
                    style={{
                        color: theme.colors.secondary,
                        backgroundColor: `${theme.colors.secondary}1a`,
                        borderColor: `${theme.colors.secondary}4d`,
                    }}
                >
                    4 / 8
                </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`aspect-square rounded-xl border-2 flex items-center justify-center relative group transition-all duration-200 cursor-pointer`}
                        style={{
                            backgroundColor: item ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)',
                            ...(item ? getRarityStyles(item.rarity) : { borderColor: `${theme.colors.border}0d` })
                        }}
                    >
                        {item && (
                            <>
                                <div className="absolute inset-2 opacity-20 blur-md" style={{ backgroundColor: item.bg || theme.colors.muted }} />
                                <item.icon
                                    className="relative z-10 h-6 w-6 drop-shadow-md group-hover:scale-110 transition-transform"
                                    style={{
                                        color: item.rarity === 'common' ? theme.colors.foreground : item.color
                                    }}
                                />
                                {item.rarity === 'legendary' && (
                                    <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full animate-pulse" style={{ backgroundColor: '#fbbf24' }} />
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>

            <button
                className="mt-4 w-full py-3 rounded-xl border font-bold text-sm transition-colors uppercase tracking-wider"
                style={{
                    backgroundColor: `${theme.colors.secondary}33`,
                    borderColor: `${theme.colors.secondary}80`,
                    color: theme.colors.secondary,
                }}
            >
                View All Items
            </button>
        </GameCard>
    );
};

export default InventoryGrid;