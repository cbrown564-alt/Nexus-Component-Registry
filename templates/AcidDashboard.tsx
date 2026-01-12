import React, { useEffect } from 'react';
import { Zap, Eye, MessageSquare, Heart, Share2, Music, Smile } from 'lucide-react';
import AcidCard from '../components/acid/AcidCard';
import GlitchText from '../components/acid/GlitchText';
import Sticker from '../components/acid/Sticker';
import Marquee from '../components/acid/Marquee';
import AcidButton from '../components/acid/AcidButton';
import { useTheme } from '@/context/ThemeContext';

const AcidDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    useEffect(() => {
        setScopedTheme('brutalist', 'acid');
    }, []);

    return (
        <div
            className="min-h-screen font-sans p-4 md:p-8 overflow-hidden relative selection:text-[#000000]"
            style={{
                backgroundColor: theme.colors.background,
                '--tw-selection-bg': theme.colors.primary,
            } as React.CSSProperties}
        >
            <style>{`::selection { background-color: ${theme.colors.primary}; color: black; }`}</style>

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Background Marquee */}
            <div className="fixed left-0 top-0 h-full w-12 border-r-4 z-0 hidden lg:block" style={{ borderColor: theme.colors.border, backgroundColor: '#ffffff' }}>
                <Marquee text="CHAOS MODE //" direction="up" speed="5s" className="text-xl" style={{ color: '#000000' }} />
            </div>
            <div className="fixed right-0 top-0 h-full w-12 border-l-4 z-0 hidden lg:block" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.primary }}>
                <Marquee text="ACID POP //" direction="down" speed="3s" className="text-xl" style={{ color: '#000000' }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto lg:pl-12 lg:pr-12">

                {/* Header */}
                <header className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                    <div className="relative">
                        <Sticker className="-top-6 -right-6 rotate-12" style={{ backgroundColor: theme.colors.secondary, color: '#ffffff' }}>v3.0</Sticker>
                        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.8] mix-blend-hard-light" style={{ color: theme.colors.foreground }}>
                            <GlitchText text="ACID" /><br />
                            <span className="text-stroke-2 text-transparent stroke-black">POP</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <div className="p-2 font-mono text-xs font-bold border-2 border-transparent" style={{ backgroundColor: theme.colors.foreground, color: theme.colors.primary }}>
                            USER: GHOST_IN_THE_SHELL
                        </div>
                        <AcidButton variant="black" className="w-full">
                            Connect Wallet
                        </AcidButton>
                    </div>
                </header>

                {/* Grid Layout - Intentionally Broken */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Profile Card */}
                    <div className="relative">
                        <Sticker className="-top-4 -left-4 -rotate-6" style={{ backgroundColor: theme.colors.accent }}>Online</Sticker>
                        <AcidCard rotate={-2} className="p-0 h-full">
                            <div className="h-32 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center border-b-4 filter contrast-125" style={{ borderColor: theme.colors.border }} />
                            <div className="p-6 text-center -mt-16">
                                <div className="w-24 h-24 mx-auto border-4 rounded-none mb-4 overflow-hidden" style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.border }}>
                                    <img src="https://api.dicebear.com/7.x/big-smile/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-2xl font-black uppercase" style={{ color: theme.colors.foreground }}>Cyber_Rat</h2>
                                <p className="font-mono text-xs mb-4 inline-block px-2" style={{ backgroundColor: theme.colors.foreground, color: '#ffffff' }}>Lvl. 99 Troll</p>
                                <div className="flex justify-center gap-4 text-sm font-bold border-t-4 pt-4 mt-2" style={{ borderColor: theme.colors.border, color: theme.colors.foreground }}>
                                    <div className="flex flex-col">
                                        <span>12k</span>
                                        <span className="text-xs" style={{ color: '#6b7280' }}>Posts</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>84k</span>
                                        <span className="text-xs" style={{ color: '#6b7280' }}>Followers</span>
                                    </div>
                                </div>
                            </div>
                        </AcidCard>
                    </div>

                    {/* Main Feed Item */}
                    <div className="md:col-span-1 lg:col-span-2 md:mt-12">
                        <AcidCard rotate={1} className="p-0" style={{ backgroundColor: '#ffffff' }}>
                            <div className="border-b-4 p-3 flex justify-between items-center" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.primary }}>
                                <span className="font-mono text-xs font-bold">POST_ID: #88291</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#000000' }} />
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#000000' }} />
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="font-bold text-2xl leading-tight mb-4 uppercase" style={{ color: theme.colors.foreground }}>
                                    Just dropped a new track. It sounds like a dial-up modem fighting a blender. 🔥
                                </p>
                                <div className="border-4 p-1 mb-4 transform -rotate-1" style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.foreground }}>
                                    <div className="p-4 h-32 flex items-center justify-center relative overflow-hidden group cursor-pointer" style={{ backgroundColor: '#ffffff' }}>
                                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity duration-100 grayscale group-hover:grayscale-0" />
                                        <Music className="w-12 h-12 relative z-10 animate-bounce" style={{ color: '#000000' }} />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <AcidButton className="flex-1 py-2 text-xs flex items-center justify-center gap-2">
                                        <Heart className="w-4 h-4" /> 4.2k
                                    </AcidButton>
                                    <AcidButton variant="secondary" className="flex-1 py-2 text-xs flex items-center justify-center gap-2">
                                        <MessageSquare className="w-4 h-4" /> 842
                                    </AcidButton>
                                    <AcidButton variant="black" className="py-2 px-3">
                                        <Share2 className="w-4 h-4" />
                                    </AcidButton>
                                </div>
                            </div>
                        </AcidCard>
                    </div>

                    {/* Sticker Dump */}
                    <div className="relative h-64 md:h-auto">
                        <AcidCard rotate={3} className="h-full flex items-center justify-center p-8 text-center" style={{ backgroundColor: theme.colors.secondary, color: '#ffffff' }}>
                            <div className="border-4 border-white p-4">
                                <h3 className="font-black text-3xl uppercase leading-none mb-2">Daily<br />Vibe</h3>
                                <div className="p-1" style={{ backgroundColor: '#ffffff', color: '#000000' }}>CHAOTIC GOOD</div>
                            </div>
                        </AcidCard>
                        <Sticker className="top-4 -left-8 -rotate-12 bg-yellow-400 text-3xl">😎</Sticker>
                        <Sticker className="bottom-8 -right-4 rotate-6" style={{ backgroundColor: theme.colors.accent }}>
                            <Eye className="w-8 h-8" />
                        </Sticker>
                    </div>

                    {/* Trending */}
                    <div className="lg:col-span-2">
                        <div className="p-2 font-mono text-xs font-bold border-4 border-black mb-2 inline-block" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
                            HOT TOPICS
                        </div>
                        <AcidCard rotate={-1} className="p-0">
                            {[
                                { tag: "#GLITCHCORE", count: "12.4k posts" },
                                { tag: "#Y2K_AESTHETIC", count: "8.1k posts" },
                                { tag: "#BRUTALISM", count: "5.2k posts" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border-b-4 border-black last:border-b-0 hover:bg-[#ccff00] transition-colors cursor-pointer group">
                                    <span className="font-black text-xl italic group-hover:translate-x-2 transition-transform">{item.tag}</span>
                                    <span className="font-mono text-xs px-2 py-1" style={{ backgroundColor: '#000000', color: '#ffffff' }}>{item.count}</span>
                                </div>
                            ))}
                        </AcidCard>
                    </div>

                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-8 right-8 z-50">
                    <button
                        className="w-16 h-16 border-4 shadow-[6px_6px_0px_#000] flex items-center justify-center active:translate-y-1 active:shadow-[2px_2px_0px_#000] transition-all hover:rotate-12"
                        style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.border, color: theme.colors.foreground }}
                    >
                        <Zap className="w-8 h-8 fill-current" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AcidDashboard;