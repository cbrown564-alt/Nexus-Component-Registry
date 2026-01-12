import React, { useEffect } from 'react';
import { Move } from 'lucide-react';
import BrutalistCard from '../components/brutalist/BrutalistCard';
import BrutalistButton from '../components/brutalist/BrutalistButton';
import ArtGrid from '../components/brutalist/ArtGrid';
import Manifesto from '../components/brutalist/Manifesto';
import { useTheme } from '@/context/ThemeContext';

const BrutalistDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    useEffect(() => {
        setScopedTheme('brutalist', 'brutalist');
    }, []);

    return (
        <div
            className="min-h-screen font-sans"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >
            {/* Marquee - inline version */}
            <div
                className="w-full border-y-4 py-4 overflow-hidden"
                style={{
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.border
                }}
            >
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                    <span className="font-mono text-3xl font-bold uppercase" style={{ color: theme.colors.primaryForeground }}>
                        BRUTALISM // ARCHIVE // RAW // UNPOLISHED // BRUTALISM // ARCHIVE // RAW // UNPOLISHED // BRUTALISM // ARCHIVE // RAW // UNPOLISHED //
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
                    ARCHIVE<span className="opacity-30">_01</span>
                </h1>

                <div className="flex gap-4 mb-12">
                    <BrutalistButton variant="neo" color="text-white hover:bg-opacity-80 transition-colors" style={{ backgroundColor: theme.colors.secondary } as any}>
                        Explore Works
                    </BrutalistButton>
                    <BrutalistButton variant="neo">
                        Read Info
                    </BrutalistButton>
                </div>

                {/* Filter Bar */}
                <div
                    className="flex justify-between px-6 py-2 border-y-2 font-mono text-xs uppercase font-bold mb-6"
                    style={{
                        backgroundColor: theme.colors.card,
                        borderColor: theme.colors.border,
                        color: theme.colors.foreground
                    }}
                >
                    <span>Filter: All</span>
                    <span>Sort: Chaos</span>
                    <span>View: Grid</span>
                </div>

                {/* Art Grid - using original component */}
                <ArtGrid />

                {/* Manifesto - using original component */}
                <Manifesto />

                {/* Footer */}
                <footer
                    className="border-t-4 p-6 -mx-6"
                    style={{
                        backgroundColor: theme.colors.card,
                        borderColor: theme.colors.border
                    }}
                >
                    <div className="flex justify-between font-mono text-sm">
                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-60 px-1 transition-opacity" style={{ backgroundColor: theme.colors.primary }}>Email</a>
                            <a href="#" className="hover:opacity-60 px-1 transition-opacity" style={{ backgroundColor: theme.colors.primary }}>Instagram</a>
                        </div>
                        <span className="font-bold">© 2024 RAW_THEME</span>
                    </div>
                </footer>
            </main>

            {/* Floating Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <BrutalistButton
                    variant="neo"
                    size="icon"
                    icon={<Move className="h-6 w-6" />}
                    className="w-14 h-14 rounded-full"
                    style={{
                        backgroundColor: theme.colors.foreground,
                        color: theme.colors.primary
                    } as any}
                />
            </div>
        </div>
    );
};

export default BrutalistDashboard;