import React from 'react';
import {
    Home,
    Search,
    Library,
    PlusSquare,
    Heart,
    Globe,
    Radio,
    Mic2,
    Play
} from 'lucide-react';
import NowPlaying from '../components/music/NowPlaying';
import TrackList from '../components/music/TrackList';
import AlbumGrid from '../components/music/AlbumGrid';
import MusicCard from '../components/music/MusicCard';
import MusicButton from '../components/music/MusicButton';

import { useTheme } from '@/context/ThemeContext';

const MusicDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    React.useEffect(() => {
        setScopedTheme('consumer', 'music');
    }, []);

    return (
        <div
            className="flex h-screen w-full font-sans overflow-hidden"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily
            }}
        >

            {/* Navigation Sidebar */}
            <div className="hidden w-64 flex-col border-r p-6 lg:flex" style={{ backgroundColor: `${theme.colors.card}90`, borderColor: theme.colors.border }}>
                <div className="flex items-center gap-2 mb-10 px-2">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(to top right, ${theme.colors.primary}, ${theme.colors.accent})` }}>
                        <Radio className="h-4 w-4" style={{ color: '#ffffff' }} />
                    </div>
                    <span className="font-bold text-xl tracking-tight" style={{ color: theme.colors.foreground }}>Sonic</span>
                </div>

                <nav className="space-y-6 flex-1">
                    <div className="space-y-1">
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium" style={{ backgroundColor: theme.colors.secondary, color: theme.colors.foreground }}>
                            <Home className="h-5 w-5" />
                            Home
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#ffffff0d]" style={{ color: theme.colors.mutedForeground }}>
                            <Search className="h-5 w-5" />
                            Search
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#ffffff0d]" style={{ color: theme.colors.mutedForeground }}>
                            <Library className="h-5 w-5" />
                            Your Library
                        </button>
                    </div>

                    <div className="pt-6 border-t" style={{ borderColor: theme.colors.border }}>
                        <div className="px-3 mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: theme.colors.mutedForeground }}>Playlists</div>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#ffffff0d]" style={{ color: theme.colors.mutedForeground }}>
                            <PlusSquare className="h-5 w-5" />
                            Create Playlist
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#ffffff0d]" style={{ color: theme.colors.mutedForeground }}>
                            <Heart className="h-5 w-5 p-1 rounded-sm box-content" style={{ background: `linear-gradient(to bottom right, ${theme.colors.accent}, ${theme.colors.primary})`, color: '#ffffff' }} />
                            Liked Songs
                        </button>
                    </div>

                    <div className="space-y-1 overflow-y-auto max-h-64 pt-2">
                        {['Chill Vibes', 'Gym Motivation', 'Coding Focus', 'Indie Mix 2024', 'Late Night Drive', 'Synthwave'].map((playlist) => (
                            <button key={playlist} className="flex w-full items-center gap-3 rounded-md px-3 py-1.5 text-sm transition-colors hover:text-[#ffffff]" style={{ color: theme.colors.mutedForeground }}>
                                {playlist}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative overflow-hidden" style={{ background: `linear-gradient(to bottom, ${theme.colors.accent}40, ${theme.colors.background})` }}>

                {/* Top Bar (Transparent) */}
                <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/60 to-transparent">
                    <div className="flex gap-4">
                        <button className="h-8 w-8 rounded-full flex items-center justify-center hover:opacity-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: theme.colors.mutedForeground }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg>
                        </button>
                        <button className="h-8 w-8 rounded-full flex items-center justify-center hover:opacity-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: theme.colors.mutedForeground }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <MusicButton variant="pill" size="sm">
                            Upgrade to Pro
                        </MusicButton>
                        <div className="h-8 w-8 rounded-full overflow-hidden" style={{ border: `2px solid ${theme.colors.border}` }}>
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto pt-20 pb-8 px-8 scrollbar-hide">
                    {/* Hero Banner */}
                    <div className="mb-8 flex items-end gap-6 pb-6">
                        <div className="h-52 w-52 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-md overflow-hidden shrink-0">
                            <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600" className="h-full w-full object-cover" />
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.colors.foreground }}>Album</span>
                            <h1 className="text-6xl font-black mt-2 mb-4 tracking-tighter" style={{ color: theme.colors.foreground }}>Midnight City</h1>
                            <div className="flex items-center gap-2 text-sm font-medium" style={{ color: theme.colors.foreground }}>
                                <div className="h-6 w-6 rounded-full" style={{ backgroundColor: '#3f3f46' }}></div>
                                <span className="hover:underline cursor-pointer">M83</span>
                                <span style={{ color: theme.colors.mutedForeground }}>• 2011 • 22 songs, 1 hr 14 min</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center gap-8 mb-8">
                        <MusicButton variant="primary" size="icon" icon={<Play className="h-6 w-6 ml-1" fill="currentColor" />} />
                        <MusicButton variant="ghost" size="icon" className="h-10 w-10" icon={<Heart className="h-7 w-7" />} />
                        <MusicButton variant="ghost" size="icon" className="h-10 w-10">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </MusicButton>
                    </div>

                    <TrackList />

                    <div className="mt-12">
                        <AlbumGrid />
                    </div>

                </main>
            </div>

            {/* Right Sidebar (Player) */}
            <div className="hidden xl:block w-80 shrink-0">
                <NowPlaying />
            </div>

        </div>
    );
};

export default MusicDashboard;