import React, { useEffect } from 'react';
import { Map, Music, Ticket, Heart, Zap, Menu, User } from 'lucide-react';
import FestivalCard from '../components/festival/FestivalCard';
import SoundwaveTimeline from '../components/festival/SoundwaveTimeline';
import CrowdHeatmap from '../components/festival/CrowdHeatmap';
import TicketWallet from '../components/festival/TicketWallet';
import FestivalButton from '../components/festival/FestivalButton';
import { useTheme } from '@/context/ThemeContext';

const FestivalDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    useEffect(() => {
        setScopedTheme('experimental', 'festival');
    }, []);

    const lineup = [
        { name: "Neon Void", time: "20:00", stage: "Main Stage", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300", live: true },
        { name: "Cyber Sunset", time: "21:30", stage: "Techno Tent", img: "https://images.unsplash.com/photo-1571266028243-371695039989?auto=format&fit=crop&q=80&w=300", live: false },
        { name: "Electric Dreams", time: "23:00", stage: "Main Stage", img: "https://images.unsplash.com/photo-1459749411177-3c0714939a6e?auto=format&fit=crop&q=80&w=300", live: false },
    ];

    return (
        <div
            className="min-h-screen font-sans overflow-hidden relative selection:text-white"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                '--tw-selection-bg': theme.colors.primary,
            } as React.CSSProperties}
        >
            <style>{`::selection { background-color: ${theme.colors.primary}; color: ${theme.colors.foreground}; }`}</style>

            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ backgroundColor: `${theme.colors.secondary}4d` }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[100px] mix-blend-screen" style={{ backgroundColor: `${theme.colors.primary}4d` }} />
            </div>

            <div className="relative z-10 max-w-md mx-auto md:max-w-6xl p-4 md:p-8 flex flex-col h-full gap-6">

                {/* Header */}
                <header className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.foreground }}>
                            <Zap className="w-6 h-6" style={{ color: theme.colors.background, fill: theme.colors.background }} />
                        </div>
                        <h1 className="text-2xl font-black italic tracking-tighter" style={{ color: theme.colors.foreground }}>PULSE<span style={{ color: theme.colors.primary }}>24</span></h1>
                    </div>
                    <FestivalButton variant="icon" size="sm">
                        <Menu className="w-6 h-6" />
                    </FestivalButton>
                </header>

                {/* Mobile Grid / Desktop Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">

                    {/* Left Col (Desktop: Timeline & Lineup) */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6">

                        {/* Timeline */}
                        <FestivalCard className="p-4" gradient={`from-[${theme.colors.primary}] to-[${theme.colors.secondary}]`}>
                            <SoundwaveTimeline />
                        </FestivalCard>

                        {/* Lineup List */}
                        <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-end px-2">
                                <h2 className="text-xl font-bold uppercase italic" style={{ color: theme.colors.foreground }}>Up Next</h2>
                                <FestivalButton variant="secondary" size="sm">View Full Schedule</FestivalButton>
                            </div>

                            {lineup.map((artist, i) => (
                                <div key={i} className="group relative overflow-hidden rounded-2xl border transition-colors" style={{ backgroundColor: `${theme.colors.card}80`, borderColor: `${theme.colors.border}33` }}>
                                    <div className="absolute inset-0">
                                        <img src={artist.img} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-r to-transparent" style={{ '--tw-gradient-from': theme.colors.background, '--tw-gradient-via': `${theme.colors.background}cc` } as React.CSSProperties} />
                                    </div>
                                    <div className="relative z-10 p-4 flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <div className="text-center">
                                                <div className="text-xs font-mono mb-1" style={{ color: theme.colors.mutedForeground }}>{artist.time}</div>
                                                {artist.live && (
                                                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider animate-pulse" style={{ backgroundColor: theme.colors.accent, color: theme.colors.foreground }}>
                                                        Live
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold" style={{ color: theme.colors.foreground }}>{artist.name}</h3>
                                                <p className="text-sm flex items-center gap-1" style={{ color: theme.colors.mutedForeground }}>
                                                    <Map className="w-3 h-3" /> {artist.stage}
                                                </p>
                                            </div>
                                        </div>
                                        <FestivalButton variant="icon" size="sm">
                                            <Heart className="w-5 h-5" />
                                        </FestivalButton>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Col (Desktop: Map & Wallet) */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
                        <div className="h-64 md:h-auto md:flex-1">
                            <CrowdHeatmap />
                        </div>
                        <div>
                            <TicketWallet />
                        </div>
                    </div>

                </div>

                {/* Bottom Nav (Mobile Only style, but visible on desktop for this demo) */}
                <nav className="backdrop-blur-lg border-t p-4 rounded-2xl md:hidden" style={{ backgroundColor: `${theme.colors.background}cc`, borderColor: `${theme.colors.border}33` }}>
                    <div className="flex justify-around items-center">
                        <button className="flex flex-col items-center gap-1" style={{ color: theme.colors.primary }}>
                            <Music className="w-6 h-6" />
                            <span className="text-[10px] font-bold uppercase">Lineup</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 transition-colors hover:text-white" style={{ color: theme.colors.mutedForeground }}>
                            <Map className="w-6 h-6" />
                            <span className="text-[10px] font-bold uppercase">Map</span>
                        </button>
                        <div className="relative -top-8">
                            <button
                                className="w-16 h-16 rounded-full flex items-center justify-center border-4"
                                style={{
                                    background: `linear-gradient(to top right, ${theme.colors.primary}, ${theme.colors.secondary})`,
                                    boxShadow: `0 0 20px ${theme.colors.primary}80`,
                                    borderColor: theme.colors.background
                                }}
                            >
                                <Ticket className="w-8 h-8" style={{ color: theme.colors.foreground }} />
                            </button>
                        </div>
                        <button className="flex flex-col items-center gap-1 transition-colors hover:text-white" style={{ color: theme.colors.mutedForeground }}>
                            <Heart className="w-6 h-6" />
                            <span className="text-[10px] font-bold uppercase">Saved</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 transition-colors hover:text-white" style={{ color: theme.colors.mutedForeground }}>
                            <User className="w-6 h-6" />
                            <span className="text-[10px] font-bold uppercase">Me</span>
                        </button>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default FestivalDashboard;