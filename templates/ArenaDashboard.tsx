import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import TournamentBracket from '../components/arena/TournamentBracket';
import HypeMetric from '../components/arena/HypeMetric';
import BentoStream from '../components/arena/BentoStream';
import CyberContainer from '../components/arena/CyberContainer';
import { Swords, Twitch, Youtube } from 'lucide-react';

const ArenaDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    useEffect(() => {
        setPlaygroundTheme('arena');
    }, []);

    return (
        <div
            className="min-h-screen p-6 font-sans bg-[#0f172a] text-slate-100 relative overflow-x-hidden"
            style={{ fontFamily: theme.typography.fontFamily }}
        >
            {/* Hex Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.3v34.6L30 69.2 0 51.9V17.3zM30 104l30-17.3V52.1L30 34.8 0 52.1v34.6z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                }}
            />

            {/* Header */}
            <div className="relative z-10 flex justify-between items-end mb-8 border-b-2 border-slate-800 pb-6">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-cyan-400 opacity-50" />
                        <Swords size={32} className="text-white relative z-10" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter leading-none italic text-white drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
                            Nexus<span className="text-blue-500">Arena</span>
                        </h1>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] pl-1">Global Finals 2026</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="bg-[#6441a5] hover:bg-[#7d5bbe] text-white px-6 py-3 font-black text-sm uppercase tracking-wider flex items-center gap-2 transition-all skew-x-[-10deg] hover:skew-x-[-15deg] hover:shadow-[0_0_20px_rgba(100,65,165,0.4)]">
                        <span className="skew-x-[10deg] flex items-center gap-2"><Twitch size={18} /> Connect</span>
                    </button>
                </div>
            </div>

            {/* Main Layout */}
            <div className="relative z-10 grid grid-cols-12 gap-6">

                {/* Top Row: Hype Metrics */}
                <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <HypeMetric label="Crowd Hype" value={92} />
                    <HypeMetric label="Peak Viewers" value={45} />
                    <HypeMetric label="APM Average" value={78} />
                    <CyberContainer className="p-6 flex items-center justify-center bg-slate-900/50" variant="secondary">
                        <div className="text-center">
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Match Duration</div>
                            <div className="text-4xl font-mono font-black text-white">24:12</div>
                        </div>
                    </CyberContainer>
                </div>

                {/* Mid: Stream Area */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="mb-4 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-red-600 animate-spin" />
                        <span className="text-xs font-bold uppercase text-red-500 tracking-widest">Live Main Stage</span>
                    </div>
                    <BentoStream />
                </div>

                {/* Right: Bracket */}
                <div className="col-span-12 lg:col-span-4 flex flex-col">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="text-xs font-bold uppercase text-blue-500 tracking-widest">Tournament Tree</span>
                    </div>
                    <TournamentBracket />

                    <CyberContainer className="mt-6 flex-1 bg-slate-900/50 p-6" variant="primary">
                        <h3 className="text-xs font-black uppercase text-slate-500 mb-4 tracking-widest">Upcoming Matches</h3>
                        <div className="space-y-4">
                            {[
                                { t1: "G2", t2: "T1", time: "18:00" },
                                { t1: "FNC", t2: "JDG", time: "20:00" },
                                { t1: "C9", t2: "TL", time: "22:00" },
                            ].map((match, i) => (
                                <div key={i} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0 hover:bg-white/5 p-2 transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3 font-mono">
                                        <span className="font-bold w-8 text-right text-white group-hover:text-blue-400">{match.t1}</span>
                                        <span className="text-xs text-slate-600">VS</span>
                                        <span className="font-bold w-8 text-white group-hover:text-blue-400">{match.t2}</span>
                                    </div>
                                    <span className="font-mono text-slate-500 text-xs">{match.time}</span>
                                </div>
                            ))}
                        </div>
                    </CyberContainer>
                </div>

            </div>
        </div>
    );
};

export default ArenaDashboard;
