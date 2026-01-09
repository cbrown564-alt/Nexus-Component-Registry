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
            <div className="px-6 py-4 border-b border-white/5 flex items-center text-xs font-bold text-zinc-500 uppercase tracking-wider">
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
                        <div className="w-12 text-center text-sm font-mono text-zinc-500 relative">
                            <span className={`group-hover:hidden ${track.active ? 'text-rose-500' : ''}`}>
                                {track.active ? <BarChart2 className="h-4 w-4 mx-auto animate-pulse" /> : i + 1}
                            </span>
                            <Play className="h-4 w-4 mx-auto hidden group-hover:block fill-white text-white" />
                        </div>

                        <div className="flex-1 flex items-center gap-4">
                            <img
                                src={[
                                    "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=100",
                                    "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=100"
                                ][i % 5]}
                                alt="Art"
                                className="h-10 w-10 rounded bg-zinc-800 object-cover"
                            />
                            <div>
                                <div className={`font-medium ${track.active ? 'text-rose-400' : 'text-zinc-200 group-hover:text-white'}`}>
                                    {track.title}
                                </div>
                                <div className="text-xs text-zinc-500 group-hover:text-zinc-400">
                                    {track.artist}
                                </div>
                            </div>
                        </div>

                        <div className="w-40 hidden md:block text-sm text-zinc-500 group-hover:text-zinc-400 truncate pr-4">
                            {track.album}
                        </div>

                        <div className="w-32 hidden lg:block text-right pr-8 text-sm font-mono text-zinc-600 group-hover:text-zinc-500">
                            {track.plays}
                        </div>

                        <div className="w-16 text-right text-sm font-mono text-zinc-500 flex items-center justify-end gap-4">
                            {track.active ? <span className="text-white">2:41</span> : track.duration}
                            <button className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-white">
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