import React from 'react';
import { Map, Music, Ticket, Heart, Zap, User, Menu } from 'lucide-react';
import FestivalCard from '../components/festival/FestivalCard';
import SoundwaveTimeline from '../components/festival/SoundwaveTimeline';
import CrowdHeatmap from '../components/festival/CrowdHeatmap';
import TicketWallet from '../components/festival/TicketWallet';

const FestivalDashboard = () => {
    const lineup = [
        { name: "Neon Void", time: "20:00", stage: "Main Stage", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300", live: true },
        { name: "Cyber Sunset", time: "21:30", stage: "Techno Tent", img: "https://images.unsplash.com/photo-1571266028243-371695039989?auto=format&fit=crop&q=80&w=300", live: false },
        { name: "Electric Dreams", time: "23:00", stage: "Main Stage", img: "https://images.unsplash.com/photo-1459749411177-3c0714939a6e?auto=format&fit=crop&q=80&w=300", live: false },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative selection:bg-fuchsia-500 selection:text-white">

            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-indigo-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-fuchsia-900/30 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-md mx-auto md:max-w-6xl p-4 md:p-8 flex flex-col h-full gap-6">

                {/* Header */}
                <header className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <Zap className="w-6 h-6 text-black fill-black" />
                        </div>
                        <h1 className="text-2xl font-black italic tracking-tighter">PULSE<span className="text-fuchsia-500">24</span></h1>
                    </div>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </header>

                {/* Mobile Grid / Desktop Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">

                    {/* Left Col (Desktop: Timeline & Lineup) */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6">

                        {/* Timeline */}
                        <FestivalCard className="p-4" gradient="from-cyan-400 to-blue-600">
                            <SoundwaveTimeline />
                        </FestivalCard>

                        {/* Lineup List */}
                        <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-end px-2">
                                <h2 className="text-xl font-bold uppercase italic">Up Next</h2>
                                <button className="text-xs text-fuchsia-400 font-bold uppercase tracking-widest hover:text-fuchsia-300">View Full Schedule</button>
                            </div>

                            {lineup.map((artist, i) => (
                                <div key={i} className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-fuchsia-500/50 transition-colors">
                                    <div className="absolute inset-0">
                                        <img src={artist.img} className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                                    </div>
                                    <div className="relative z-10 p-4 flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <div className="text-center">
                                                <div className="text-xs text-zinc-400 font-mono mb-1">{artist.time}</div>
                                                {artist.live && (
                                                    <span className="inline-block px-2 py-0.5 rounded bg-red-600 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                                                        Live
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{artist.name}</h3>
                                                <p className="text-sm text-zinc-400 flex items-center gap-1">
                                                    <Map className="w-3 h-3" /> {artist.stage}
                                                </p>
                                            </div>
                                        </div>
                                        <button className="p-3 rounded-full bg-white/5 hover:bg-fuchsia-500 hover:text-black transition-all">
                                            <Heart className="w-5 h-5" />
                                        </button>
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
                <nav className="bg-black/80 backdrop-blur-lg border-t border-white/10 p-4 rounded-2xl md:hidden">
                    <div className="flex justify-around items-center">
                        <button className="flex flex-col items-center gap-1 text-fuchsia-500">
                            <Music className="w-6 h-6" />
                            <span className="text-[10px] font-bold uppercase">Lineup</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
                            <Map className="w-6 h-6" />
                            <span className="text-[10px] font-bold uppercase">Map</span>
                        </button>
                        <div className="relative -top-8">
                            <button className="w-16 h-16 bg-gradient-to-tr from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(192,38,211,0.5)] border-4 border-black">
                                <Ticket className="w-8 h-8 text-white" />
                            </button>
                        </div>
                        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
                            <Heart className="w-6 h-6" />
                            <span className="text-[10px] font-bold uppercase">Saved</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors">
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