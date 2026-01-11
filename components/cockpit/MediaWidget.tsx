import React from 'react';
import { Play, SkipForward, SkipBack, Music2 } from 'lucide-react';
import CockpitCard from './CockpitCard';
import { useTheme } from '@/context/ThemeContext';

const MediaWidget = () => {
    const { theme } = useTheme();

    return (
        <CockpitCard className="flex flex-col" label="Media">
            <div className="flex-1 flex items-center gap-6">
                <div
                    className="h-24 w-24 rounded-xl flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: theme.colors.secondary }}
                >
                    <Music2
                        className="w-10 h-10"
                        style={{ color: theme.colors.mutedForeground }}
                    />
                </div>
                <div>
                    <h3
                        className="text-2xl font-bold leading-tight"
                        style={{ color: theme.colors.foreground }}
                    >
                        Nightcall
                    </h3>
                    <p
                        className="text-xl font-medium"
                        style={{ color: theme.colors.mutedForeground }}
                    >
                        Kavinsky
                    </p>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
                <button
                    className="h-20 w-20 flex items-center justify-center rounded-2xl active:opacity-80 active:scale-95 transition-all"
                    style={{
                        backgroundColor: theme.colors.secondary,
                        color: theme.colors.foreground
                    }}
                >
                    <SkipBack className="w-8 h-8 fill-current" />
                </button>
                <button
                    className="flex-1 h-20 flex items-center justify-center rounded-2xl active:opacity-90 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                    style={{
                        backgroundColor: theme.colors.primary,
                        color: theme.colors.primaryForeground
                    }}
                >
                    <Play className="w-10 h-10 fill-current ml-1" />
                </button>
                <button
                    className="h-20 w-20 flex items-center justify-center rounded-2xl active:opacity-80 active:scale-95 transition-all"
                    style={{
                        backgroundColor: theme.colors.secondary,
                        color: theme.colors.foreground
                    }}
                >
                    <SkipForward className="w-8 h-8 fill-current" />
                </button>
            </div>
        </CockpitCard>
    );
};

export default MediaWidget;