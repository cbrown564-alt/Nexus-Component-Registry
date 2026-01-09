import React from 'react';
import {
    Home,
    Search,
    Library,
    PlusSquare,
    Heart,
    Globe,
    Radio,
    Mic2
} from 'lucide-react';
import NowPlaying from '../components/music/NowPlaying';
import TrackList from '../components/music/TrackList';
import AlbumGrid from '../components/music/AlbumGrid';
import MusicCard from '../components/music/MusicCard';

const MusicDashboard = () => {
    return (
        <div className="flex h-screen w-full bg-[#0a0a0a] text-white font-sans overflow-hidden">

            {/* Navigation Sidebar */}
            <div className="hidden w-64 flex-col bg-black/20 border-r border-white/5 p-6 lg:flex">
                <div className="flex items-center gap-2 mb-10 px-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-500 to-violet-600 flex items-center justify-center">
                        <Radio className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Sonic</span>
                </div>

                <nav className="space-y-6 flex-1">
                    <div className="space-y-1">
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white bg-white/10">
                            <Home className="h-5 w-5" />
                            Home
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                            <Search className="h-5 w-5" />
                            Search
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                            <Library className="h-5 w-5" />
                            Your Library
                        </button>
                    </div>

                    <div className="pt-6 border-t border-white/5">
                        <div className="px-3 mb-2 text-xs font-bold text-zinc-500 uppercase tracking-wider">Playlists</div>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                            <PlusSquare className="h-5 w-5" />
                            Create Playlist
                        </button>
                        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                            <Heart className="h-5 w-5 bg-gradient-to-br from-indigo-500 to-purple-500 p-1 rounded-sm text-white box-content" />
                            Liked Songs
                        </button>
                    </div>

                    <div className="space-y-1 overflow-y-auto max-h-64 pt-2">
                        {['Chill Vibes', 'Gym Motivation', 'Coding Focus', 'Indie Mix 2024', 'Late Night Drive', 'Synthwave'].map((playlist) => (
                            <button key={playlist} className="flex w-full items-center gap-3 rounded-md px-3 py-1.5 text-sm text-zinc-500 hover:text-white transition-colors">
                                {playlist}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative overflow-hidden bg-gradient-to-b from-indigo-900/20 via-[#0a0a0a] to-[#0a0a0a]">

                {/* Top Bar (Transparent) */}
                <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/60 to-transparent">
                    <div className="flex gap-4">
                        <button className="h-8 w-8 rounded-full bg-black/50 flex items-center justify-center text-zinc-200 hover:text-white">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" /></svg>
                        </button>
                        <button className="h-8 w-8 rounded-full bg-black/50 flex items-center justify-center text-zinc-200 hover:text-white">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-black hover:scale-105 transition-transform">
                            Upgrade to Pro
                        </button>
                        <div className="h-8 w-8 rounded-full bg-zinc-800 border-2 border-zinc-700 overflow-hidden">
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
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Album</span>
                            <h1 className="text-6xl font-black text-white mt-2 mb-4 tracking-tighter">Midnight City</h1>
                            <div className="flex items-center gap-2 text-sm font-medium text-white">
                                <div className="h-6 w-6 rounded-full bg-zinc-700"></div>
                                <span className="hover:underline cursor-pointer">M83</span>
                                <span className="text-zinc-400">• 2011 • 22 songs, 1 hr 14 min</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center gap-8 mb-8">
                        <button className="h-14 w-14 rounded-full bg-rose-500 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-rose-500/30">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        </button>
                        <button className="text-zinc-400 hover:text-white transition-colors">
                            <Heart className="h-8 w-8" />
                        </button>
                        <button className="text-zinc-400 hover:text-white transition-colors">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                        </button>
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