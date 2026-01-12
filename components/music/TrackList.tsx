import React from 'react';
import { Play, Clock, MoreHorizontal, BarChart2 } from 'lucide-react';
import MusicCard from './MusicCard';

const TrackList = () => {
    const tracks = [
        { id: 1, title: 'Midnight City', artist: 'M83', album: 'Hurry Up, We\'re Dreaming', duration: '4:03', plays: '842,102,400', active: true },
        { id: 2, title: 'Intro', artist: 'The xx', album: 'xx', duration: '2:07', plays: '402,192,100', active: false },
        { id: 3, title: 'Instant Crush', artist: 'Daft Punk', album: 'Random Access Memories', duration: '5:37', plays: '621,882,000', active: false },
        { id: 4, title: 'Kids', artist: 'MGMT', album: 'Oracular Spectacular', duration: '5:02', plays: '992,101,230', active: false },
        { id: 5, title: 'Something About Us', artist: 'Daft Punk', album: 'Discovery', duration: '3:51', plays: '312,442,100', active: false },
    ];

    return (
        <MusicCard className="flex flex-col h-full p-0 bg-transparent border-none shadow-none backdrop-blur-none">
            <div className="px-6 py-4 border-b flex items-center text-xs font-bold uppercase tracking-wider" style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#71717a' }}>
                <div className="w-12 text-center">#</div>
                <div className="flex-1">Title</div>
                <div className="w-40 hidden md:block">Album</div>
                <div className="w-32 hidden lg:block text-right pr-8">Plays</div>
                <div className="w-16 text-right"><Clock className="h-4 w-4 ml-auto" /></div>
            </div>

            <div className="flex-1 overflow-y-auto">
                {tracks.map((track, i) => (
                    <div
                        key={i}
                        className={`group flex items-center px-6 py-3 hover:bg-white/5 transition-colors cursor-pointer rounded-lg mx-2 ${track.active ? 'bg-white/10' : ''
                            }`}
                    >
                        <div className="w-12 text-center text-sm font-mono relative" style={{ color: '#71717a' }}>
                            <span className={`group-hover:hidden ${track.active ? 'text-rose-500' : ''}`}>
                                {track.active ? <BarChart2 className="h-4 w-4 mx-auto animate-pulse" /> : i + 1}
                            </span>
                            <Play className="h-4 w-4 mx-auto hidden group-hover:block" style={{ fill: '#ffffff', color: '#ffffff' }} />
                        </div>

                        <div className="flex-1 flex items-center gap-4">
                            <img
                                src={[
                                    "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?auto=format&fit=crop&q=80&w=100"
                                ][i % 5]}
                                alt="Art"
                                className="h-10 w-10 rounded object-cover"
                                style={{ backgroundColor: '#27272a' }}
                            />
                            <div>
                                <div className={`font-medium ${track.active ? 'text-rose-400' : ''}`} style={!track.active ? { color: '#e4e4e7' } : undefined}>
                                    {track.title}
                                </div>
                                <div className="text-xs" style={{ color: '#71717a' }}>
                                    {track.artist}
                                </div>
                            </div>
                        </div>

                        <div className="w-40 hidden md:block text-sm truncate pr-4" style={{ color: '#71717a' }}>
                            {track.album}
                        </div>

                        <div className="w-32 hidden lg:block text-right pr-8 text-sm font-mono" style={{ color: '#52525b' }}>
                            {track.plays}
                        </div>

                        <div className="w-16 text-right text-sm font-mono flex items-center justify-end gap-4" style={{ color: '#71717a' }}>
                            {track.active ? <span style={{ color: '#ffffff' }}>2:41</span> : track.duration}
                            <button className="opacity-0 group-hover:opacity-100" style={{ color: '#a1a1aa' }}>
                                <MoreHorizontal className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </MusicCard>
    );
};

export default TrackList;