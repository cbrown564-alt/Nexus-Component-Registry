import React from 'react';
import DraggableWindow from '../components/paradox/DraggableWindow';
import GlitchText from '../components/paradox/GlitchText';
import RawInput from '../components/paradox/RawInput';
import { AlertTriangle, Terminal, Cpu, Bug } from 'lucide-react';

const ParadoxDashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#008080] font-mono overflow-hidden relative selection:bg-[#ff00ff] selection:text-white">

            {/* Desktop Icons */}
            <div className="absolute top-20 left-6 grid gap-8 text-white text-center w-20">
                <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10 p-2 border border-transparent hover:border-white/20 border-dotted">
                    <Terminal size={32} />
                    <span className="text-xs bg-[#008080] px-1">ROOT.EXE</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10 p-2 border border-transparent hover:border-white/20 border-dotted">
                    <Cpu size={32} />
                    <span className="text-xs bg-[#008080] px-1">SYSTEM_MON</span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10 p-2 border border-transparent hover:border-white/20 border-dotted">
                    <Bug size={32} />
                    <span className="text-xs bg-[#008080] px-1">VIRUS_VAULT</span>
                </div>
            </div>

            {/* Window 1: Main Control */}
            <DraggableWindow title="MAIN_TERMINAL" initialX={150} initialY={100} width="600px">
                <div className="space-y-4">
                    <GlitchText as="h1" text="SYSTEM FAILURE DETECTED" className="text-4xl font-bold text-[#ff0000]" intensity="high" />
                    <p>Error Code: 0x88492211. Memory leak in Sector 7G.</p>
                    <div className="h-4 w-full bg-gray-300 border border-black relative">
                        <div className="absolute top-0 left-0 h-full bg-[#000080] w-[72%]" />
                    </div>
                    <p className="text-xs">Compiling entropy...</p>

                    <div className="mt-8 border-t border-black pt-4">
                        <label className="block mb-2 text-xs uppercase">Override Command:</label>
                        <div className="flex gap-2">
                            <RawInput placeholder="ENTER_KEY" />
                            <button className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black px-4 active:border-t-black active:border-l-black active:border-r-white active:border-b-white">
                                EXEC
                            </button>
                        </div>
                    </div>
                </div>
            </DraggableWindow>

            {/* Window 2: Alert Popup */}
            <DraggableWindow title="WARNING" initialX={600} initialY={300} width="300px" className="z-20">
                <div className="flex items-start gap-4">
                    <AlertTriangle size={48} className="text-[#ffff00] flex-shrink-0 drop-shadow-[2px_2px_0_#000000]" strokeWidth={2} />
                    <div>
                        <h3 className="font-bold mb-2">Unauthorized Access</h3>
                        <p className="text-xs mb-4">Tracing IP address... <br /> 192.168.0.X</p>
                        <button className="w-full bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-black border-b-black py-1 active:border-t-black active:border-l-black active:border-r-white active:border-b-white">
                            ABORT
                        </button>
                    </div>
                </div>
            </DraggableWindow>

            {/* Window 3: Visual Noise */}
            <DraggableWindow title="SIGNAL" initialX={800} initialY={50} width="400px">
                <div className="grid grid-cols-8 gap-1">
                    {[...Array(64)].map((_, i) => (
                        <div
                            key={i}
                            className="w-full aspect-square bg-black animate-pulse"
                            style={{
                                animationDelay: `${Math.random()}s`,
                                backgroundColor: Math.random() > 0.5 ? '#ff00ff' : '#00ffff'
                            }}
                        />
                    ))}
                </div>
            </DraggableWindow>

        </div>
    );
};

export default ParadoxDashboard;
