import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Maximize2, X, ZoomIn, ZoomOut, Move } from 'lucide-react';
import CyberContainer from './CyberContainer';
import BracketConnector from './BracketConnector';

interface MatchProps {
    teamA: string;
    teamB: string;
    scoreA?: number;
    scoreB?: number;
    winner?: 'A' | 'B';
    round: number;
    isMini?: boolean;
    status?: 'scheduled' | 'live' | 'finished';
}

// Helper for Team Logo placeholder
const TeamLogo = ({ name, color, isMini }: { name: string, color: string, isMini?: boolean }) => (
    <div className={`
        rounded-full flex items-center justify-center font-black text-slate-900
        ${isMini ? 'w-4 h-4 text-[6px]' : 'w-8 h-8 text-xs'}
    `} style={{ backgroundColor: color }}>
        {name.substring(0, 1)}
    </div>
);

const MatchNode: React.FC<MatchProps> = ({ teamA, teamB, scoreA, scoreB, winner, isMini, status = 'finished' }) => {
    const isLive = status === 'live';

    return (
        <div className={`
            relative flex flex-col backdrop-blur-md transition-all duration-300
            ${isMini ? 'w-32 text-[10px]' : 'w-64'}
            ${isLive ? 'shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'shadow-lg'}
        `}>
            {/* Tech Header / Status Bar */}
            <div className="h-1 bg-slate-800 w-full flex">
                <div className={`h-full ${winner === 'A' ? 'bg-blue-500 w-full' : winner === 'B' ? 'bg-transparent' : 'bg-slate-600 w-1/2'}`} />
                <div className={`h-full ${winner === 'B' ? 'bg-blue-500 w-full' : winner === 'A' ? 'bg-transparent' : 'bg-slate-600 w-1/2'}`} />
            </div>

            {/* Team A Row */}
            <div className={`
                flex justify-between items-center ${isMini ? 'p-1' : 'p-3'} 
                ${winner === 'A' ? 'bg-slate-800/90' : 'bg-slate-900/90'}
                border-l-2 ${winner === 'A' ? 'border-blue-500' : 'border-slate-700'}
            `}>
                <div className="flex items-center gap-2">
                    {!isMini && <TeamLogo name={teamA} color={winner === 'A' ? '#3b82f6' : '#64748b'} />}
                    <span className={`font-bold font-mono ${winner === 'A' ? 'text-white' : 'text-slate-400'}`}>{teamA}</span>
                </div>
                <div className="flex items-center gap-2">
                    {winner === 'A' && !isMini && <Trophy size={14} className="text-yellow-500" />}
                    <span className={`font-black font-mono ${winner === 'A' ? 'text-blue-400' : 'text-slate-600'}`}>{scoreA}</span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-slate-800 w-full" />

            {/* Team B Row */}
            <div className={`
                flex justify-between items-center ${isMini ? 'p-1' : 'p-3'}
                ${winner === 'B' ? 'bg-slate-800/90' : 'bg-slate-900/90'}
                 border-l-2 ${winner === 'B' ? 'border-blue-500' : 'border-slate-700'}
            `}>
                <div className="flex items-center gap-2">
                    {!isMini && <TeamLogo name={teamB} color={winner === 'B' ? '#3b82f6' : '#64748b'} />}
                    <span className={`font-bold font-mono ${winner === 'B' ? 'text-white' : 'text-slate-400'}`}>{teamB}</span>
                </div>
                <div className="flex items-center gap-2">
                    {winner === 'B' && !isMini && <Trophy size={14} className="text-yellow-500" />}
                    <span className={`font-black font-mono ${winner === 'B' ? 'text-blue-400' : 'text-slate-600'}`}>{scoreB}</span>
                </div>
            </div>

            {/* Live Indicator */}
            {isLive && (
                <div className="absolute -top-3 right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm animate-pulse shadow-[0_0_10px_#ef4444]">
                    Live
                </div>
            )}
        </div>
    );
};

const TournamentBracket: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2));
    const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

    // Bracket Content (Reusable)
    // Structured as Columns: Round 1 -> Connector -> Round 2 -> Connector -> Finals
    const BracketContent = ({ isMini = false }: { isMini?: boolean }) => {
        // Dimensions for spacing
        const gapSize = isMini ? 16 : 40;
        const matchHeight = isMini ? 50 : 110;
        const connectorWidth = isMini ? 20 : 60;

        // Calculated connector height based on match spacing
        // Distance between centers of two adjacent matches in a round
        const r1Spacing = matchHeight + gapSize;
        const r2Spacing = (matchHeight * 2) + (gapSize * 3); // Spanning two matches + gaps

        return (
            <div className={`flex items-center ${isMini ? 'scale-75 origin-top-left' : ''}`}>

                {/* --- ROUND 1 --- */}
                <div className="flex flex-col gap-[40px]" style={{ gap: gapSize }}>
                    {/* Block A */}
                    <div className="flex flex-col gap-[20px]" style={{ gap: gapSize }}>
                        <MatchNode teamA="TL" teamB="C9" scoreA={2} scoreB={1} winner="A" round={1} isMini={isMini} />
                        <MatchNode teamA="G2" teamB="FNC" scoreA={0} scoreB={2} winner="B" round={1} isMini={isMini} />
                    </div>
                    {/* Block B */}
                    <div className="flex flex-col gap-[20px]" style={{ gap: gapSize }}>
                        <MatchNode teamA="T1" teamB="GEN" scoreA={2} scoreB={0} winner="A" round={1} isMini={isMini} />
                        <MatchNode teamA="JDG" teamB="BLG" scoreA={1} scoreB={2} winner="B" round={1} isMini={isMini} />
                    </div>
                </div>

                {/* Connectors R1 -> R2 */}
                <div className="flex flex-col justify-around h-full py-[40px]" style={{ gap: matchHeight + gapSize * 2 }}>
                    {/* Note: In a real app, these gaps are calculated dynamically.
                        Here we manually align 2 connectors for the 2 blocks. 
                    */}
                    <div className="flex flex-col" style={{ gap: isMini ? 120 : 250 }}>
                        <BracketConnector height={isMini ? 60 : 150} width={connectorWidth} />
                        <BracketConnector height={isMini ? 60 : 150} width={connectorWidth} />
                    </div>
                </div>

                {/* --- ROUND 2 --- */}
                <div className="flex flex-col justify-around" style={{ gap: isMini ? 80 : 250 }}>
                    <MatchNode teamA="TL" teamB="FNC" scoreA={3} scoreB={2} winner="A" round={2} isMini={isMini} status="finished" />
                    <MatchNode teamA="T1" teamB="BLG" scoreA={1} scoreB={3} winner="B" round={2} isMini={isMini} status="finished" />
                </div>

                {/* Connectors R2 -> Finals */}
                <div className="flex flex-col justify-center px-2">
                    <BracketConnector height={isMini ? 120 : 360} width={connectorWidth} />
                </div>

                {/* --- FINALS --- */}
                <div className={`flex flex-col justify-center`}>
                    <div className="mb-4 text-center text-yellow-500 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                        <Trophy size={16} /> Grand Finals
                    </div>
                    <MatchNode teamA="TL" teamB="BLG" scoreA={0} scoreB={0} round={3} isMini={isMini} status="live" />
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Interactive Preview Card */}
            <CyberContainer
                className="h-[400px] w-full overflow-hidden relative group cursor-pointer"
                variant="primary"
                onClick={() => setIsOpen(true)}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50 hover:bg-slate-900/40 transition-colors z-20">
                    <Maximize2 className="text-blue-500 mb-2 opacity-80 group-hover:scale-110 transition-transform" size={48} />
                    <span className="text-white font-bold uppercase tracking-widest text-sm bg-black/50 px-4 py-2 rounded backdrop-blur">
                        Click to Open Command Center
                    </span>
                </div>

                {/* Blurry Background Preview */}
                <div className="absolute inset-0 opacity-30 blur-sm pointer-events-none p-8 flex items-center justify-center overflow-hidden">
                    <BracketContent isMini={true} />
                </div>
            </CyberContainer>

            {/* Full Screen Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col"
                    >
                        {/* Header Overlay */}
                        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-[102] pointer-events-none">
                            <div>
                                <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    NEXUS<span className="text-blue-500">ARENA</span>
                                </h2>
                                <p className="text-slate-400 font-mono text-sm uppercase tracking-widest mt-1">Tournament Command Center // Global Finals</p>
                            </div>

                            {/* Controls Wrapper (pointer-events-auto) */}
                            <div className="flex items-center gap-4 pointer-events-auto">
                                <div className="flex items-center bg-slate-900/80 border border-slate-700 rounded-lg p-1">
                                    <button onClick={handleZoomOut} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors">
                                        <ZoomOut size={20} />
                                    </button>
                                    <span className="text-xs font-mono w-12 text-center text-slate-500">{Math.round(scale * 100)}%</span>
                                    <button onClick={handleZoomIn} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors">
                                        <ZoomIn size={20} />
                                    </button>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsOpen(false);
                                    }}
                                    className="bg-red-600 p-3 rounded-full hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.5)] group"
                                >
                                    <X className="text-white group-hover:rotate-90 transition-transform" size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Draggable Area */}
                        <div className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing relative bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100" ref={containerRef}>
                            {/* Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

                            <motion.div
                                drag
                                dragConstraints={{ left: -1000, right: 1000, top: -500, bottom: 500 }}
                                style={{ scale }} // Apply zoom scale here
                                className="absolute inset-0 flex items-center justify-center min-w-[2000px] min-h-[1500px]"
                            >
                                <BracketContent />
                            </motion.div>
                        </div>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] pointer-events-none flex items-center gap-2">
                            <Move size={12} /> Drag to Pan / Scroll to Zoom
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TournamentBracket;
