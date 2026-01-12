import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Heart, Volume2, ListMusic } from 'lucide-react';
import MusicCard from './MusicCard';

const NowPlaying = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [liked, setLiked] = useState(true);

    return (
        <MusicCard className="h-full flex flex-col p-6 !bg-black/20 !border-0 !border-l !border-white/5 !rounded-none">
            <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: '#a1a1aa' }}>Now Playing</h3>
                <button style={{ color: '#71717a' }}>
                    <ListMusic className="h-5 w-5" />
                </button>
            </div>

            {/* Album Art */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl mb-8 group">
                <img
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600"
                    alt="Album Art"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Reflection / Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Info */}
            <div className="mb-8">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-1" style={{ color: '#ffffff' }}>Midnight City</h2>
                        <p style={{ color: '#a1a1aa' }}>M83 • Hurry Up, We're Dreaming</p>
                    </div>
                    <button
                        onClick={() => setLiked(!liked)}
                        className={`transition-colors ${liked ? 'text-rose-500' : 'text-zinc-600 hover:text-white'}`}
                    >
                        <Heart className={`h-6 w-6 ${liked ? 'fill-current' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Progress */}
            <div className="mb-8 group">
                <div className="h-1 w-full rounded-full mb-2 cursor-pointer relative overflow-hidden" style={{ backgroundColor: '#27272a' }}>
                    <div className="absolute inset-y-0 left-0 w-1/3 rounded-full group-hover:bg-rose-500 transition-colors" style={{ backgroundColor: '#ffffff' }} />
                </div>
                <div className="flex justify-between text-xs font-medium font-mono" style={{ color: '#71717a' }}>
                    <span>1:24</span>
                    <span>4:03</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mb-10">
                <button className="transition-colors" style={{ color: '#52525b' }}>
                    <Shuffle className="h-5 w-5" />
                </button>
                <button className="transition-colors" style={{ color: '#d4d4d8' }}>
                    <SkipBack className="h-7 w-7 fill-current" />
                </button>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="h-16 w-16 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
                    style={{ backgroundColor: '#ffffff', color: '#000000', boxShadow: '0 10px 15px -3px rgba(255,255,255,0.1)' }}
                >
                    {isPlaying ? <Pause className="h-8 w-8 fill-current" /> : <Play className="h-8 w-8 fill-current ml-1" />}
                </button>
                <button className="transition-colors" style={{ color: '#d4d4d8' }}>
                    <SkipForward className="h-7 w-7 fill-current" />
                </button>
                <button className="transition-colors" style={{ color: '#52525b' }}>
                    <Repeat className="h-5 w-5" />
                </button>
            </div>

            {/* Visualizer (Simulated) */}
            <div className="flex items-end justify-center gap-1 h-12 mt-auto opacity-50">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="w-1 bg-rose-500 rounded-t-full animate-[music-bar_1s_ease-in-out_infinite]"
                        style={{
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.05}s`
                        }}
                    />
                ))}
            </div>

            <style>{`
         @keyframes music-bar {
           0%, 100% { height: 10%; }
           50% { height: 100%; }
         }
       `}</style>
        </MusicCard>
    );
};

export default NowPlaying;