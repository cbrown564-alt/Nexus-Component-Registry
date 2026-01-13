import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare } from 'lucide-react';
import CyberContainer from './CyberContainer';

const BentoStream: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-4 h-[600px]">
            {/* Main Stream (Video Placeholder) */}
            <div className="col-span-1 md:col-span-3 row-span-3 bg-black border-2 border-slate-800 relative overflow-hidden group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {/* Tech Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500 z-10" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500 z-10" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500 z-10" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500 z-10" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-slate-700 font-bold uppercase tracking-widest animate-pulse text-2xl font-mono">Signal Lost... Reconnecting</div>
                </div>
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 uppercase animate-pulse shadow-lg shadow-red-600/50">Live</span>
                    <span className="bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 flex items-center gap-2 border border-slate-700">
                        <Users size={12} className="text-red-500" /> 142,031
                    </span>
                </div>
            </div>

            {/* Chat */}
            <CyberContainer className="col-span-1 md:col-span-1 row-span-4 flex flex-col !bg-black/90" variant="primary">
                <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Stream Chat</span>
                    <MessageSquare size={14} className="text-blue-500" />
                </div>
                <div className="flex-1 p-3 space-y-3 overflow-hidden mask-image-b">
                    {[
                        { user: "xSlayer", msg: "TL winning this for sure", color: "text-blue-400" },
                        { user: "NoobMaster", msg: "KEKW", color: "text-purple-400" },
                        { user: "ArenaBot", msg: "Welcome to the stream!", color: "text-green-400" },
                        { user: "JinxMain", msg: "What was that play??", color: "text-pink-400" },
                        { user: "ProGamer", msg: "GG", color: "text-yellow-400" },
                        { user: "xSlayer", msg: "Incredible mechanics", color: "text-blue-400" },
                        { user: "NoobMaster", msg: "PogChamp", color: "text-purple-400" },
                        { user: "ArenaBot", msg: "Don't forget to follow!", color: "text-green-400" },
                    ].map((chat, i) => (
                        <div key={i} className="text-xs font-mono">
                            <span className={`font-bold ${chat.color} mr-2`}>{chat.user}:</span>
                            <span className="text-slate-300">{chat.msg}</span>
                        </div>
                    ))}
                </div>
                <div className="p-2 border-t border-slate-800">
                    <input type="text" placeholder="Send a message..." className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 px-3 py-2 text-xs focus:outline-none text-white placeholder:text-slate-600 font-mono" />
                </div>
            </CyberContainer>

            {/* Stats / Extras */}
            <CyberContainer className="col-span-1 md:col-span-1 row-span-1 p-4 flex flex-col justify-between" variant="secondary">
                <span className="text-xs text-purple-400 uppercase font-black tracking-widest">KDA Ratio</span>
                <span className="text-3xl font-mono text-white font-black drop-shadow-lg">4.2</span>
            </CyberContainer>
            <CyberContainer className="col-span-1 md:col-span-1 row-span-1 p-4 flex flex-col justify-between" variant="primary">
                <span className="text-xs text-yellow-500 uppercase font-black tracking-widest">Gold Diff</span>
                <span className="text-3xl font-mono text-white font-black">+2.1k</span>
            </CyberContainer>
            <CyberContainer className="col-span-1 md:col-span-1 row-span-1 p-4 flex flex-col justify-between" variant="danger">
                <span className="text-xs text-red-500 uppercase font-black tracking-widest">Dragons</span>
                <span className="text-3xl font-mono text-white font-black">3 / 4</span>
            </CyberContainer>
        </div>
    );
};

export default BentoStream;
