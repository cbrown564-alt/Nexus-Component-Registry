import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import CockpitCard from './CockpitCard';
import { useTheme } from '@/context/ThemeContext';

const NavWidget = () => {
    const { theme } = useTheme();

    return (
        <CockpitCard className="flex flex-col justify-between" label="Next Turn">
            <div className="flex items-start justify-between">
                <ArrowUpRight
                    className="w-32 h-32"
                    strokeWidth={1.5}
                    style={{ color: theme.colors.foreground }}
                />
                <div className="text-right">
                    <span
                        className="block text-6xl font-bold tracking-tighter"
                        style={{ color: theme.colors.foreground }}
                    >
                        500
                    </span>
                    <span
                        className="text-xl font-bold uppercase"
                        style={{ color: theme.colors.mutedForeground }}
                    >
                        Feet
                    </span>
                </div>
            </div>

            <div>
                <h3
                    className="text-2xl font-bold mb-1"
                    style={{ color: theme.colors.foreground }}
                >
                    Exit 42A
                </h3>
                <div
                    className="flex items-center gap-2 font-medium"
                    style={{ color: theme.colors.mutedForeground }}
                >
                    <MapPin className="w-5 h-5" />
                    <span>Downtown / Convention Ctr</span>
                </div>
            </div>

            {/* Progress Bar to Turn */}
            <div
                className="mt-6 h-3 w-full rounded-full overflow-hidden"
                style={{ backgroundColor: theme.colors.secondary }}
            >
                <div
                    className="h-full w-2/3"
                    style={{ backgroundColor: theme.colors.foreground }}
                />
            </div>
        </CockpitCard>
    );
};

export default NavWidget;