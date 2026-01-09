import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Maximize2,
    MousePointer2,
    Move,
    Type,
    Pencil,
    Square,
    Circle,
    Minus,
    RotateCcw,
    Copy,
    Trash2,
    Eye,
    EyeOff,
    Lock,
    Unlock,
    DraftingCompass,
    Ruler,
    Grid3X3,
    ZoomIn,
    ZoomOut,
    Save,
    Download,
    Undo,
    Redo
} from 'lucide-react';
import BlueprintCard from '../components/blueprint/BlueprintCard';
import CadViewer from '../components/blueprint/CadViewer';
import LayerControl from '../components/blueprint/LayerControl';

const BlueprintDashboard = () => {
    const [layers, setLayers] = useState({
        'Structure': true,
        'Dimensions': true,
        'Furniture': true,
        'Electrical': false,
        'Plumbing': false,
    });
    const [activeTool, setActiveTool] = useState('select');
    const [zoom, setZoom] = useState(100);
    const [gridVisible, setGridVisible] = useState(true);

    const toggleLayer = (layer: string) => {
        setLayers(prev => ({ ...prev, [layer]: !prev[layer] as boolean }));
    };

    const tools = [
        { id: 'select', icon: MousePointer2, label: 'Select' },
        { id: 'move', icon: Move, label: 'Move' },
        { id: 'line', icon: Minus, label: 'Line' },
        { id: 'rect', icon: Square, label: 'Rectangle' },
        { id: 'circle', icon: Circle, label: 'Circle' },
        { id: 'text', icon: Type, label: 'Text' },
        { id: 'measure', icon: Ruler, label: 'Measure' },
    ];

    return (
        <div className="h-screen bg-[#1e3a8a] text-white font-sans overflow-hidden flex flex-col selection:bg-cyan-500 selection:text-black">

            {/* Top Ribbon */}
            <header className="h-12 bg-[#172554] border-b-2 border-white flex items-center px-4 justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest">
                        <DraftingCompass className="w-5 h-5" />
                        NEXUS_CAD <span className="text-white/50 text-[10px]">v.24.0.1</span>
                    </div>

                    {/* File Actions */}
                    <div className="h-6 w-px bg-white/20" />
                    <div className="flex gap-1">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 hover:bg-white/10 rounded text-white/70 hover:text-cyan-400 transition-colors"
                        >
                            <Save size={14} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 hover:bg-white/10 rounded text-white/70 hover:text-cyan-400 transition-colors"
                        >
                            <Download size={14} />
                        </motion.button>
                        <div className="w-px bg-white/10 mx-1" />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 hover:bg-white/10 rounded text-white/70 hover:text-white transition-colors"
                        >
                            <Undo size={14} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 hover:bg-white/10 rounded text-white/70 hover:text-white transition-colors"
                        >
                            <Redo size={14} />
                        </motion.button>
                    </div>
                </div>

                {/* View Info */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                        <span>X: 2491.04</span>
                        <span>Y: 882.12</span>
                        <span>Z: 0.00</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded text-xs">
                        <span className="text-cyan-400 font-bold">{zoom}%</span>
                    </div>
                </div>
            </header>

            {/* Main Workspace */}
            <div className="flex-1 flex overflow-hidden">

                {/* Left Sidebar - Project & Layers */}
                <div className="w-64 bg-[#1e3a8a] border-r-2 border-white flex flex-col shrink-0">
                    <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
                        <BlueprintCard title="Project Info" code="PRJ-A1">
                            <div className="space-y-2 text-xs text-white/90">
                                <div className="flex justify-between border-b border-white/20 pb-1">
                                    <span className="text-white/50">Client:</span>
                                    <span className="font-bold">Stark Industries</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-1">
                                    <span className="text-white/50">Date:</span>
                                    <span>2024-10-24</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-1">
                                    <span className="text-white/50">Scale:</span>
                                    <span>1:50</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/50">Drafter:</span>
                                    <span>A. Morrison</span>
                                </div>
                            </div>
                        </BlueprintCard>

                        <LayerControl layers={layers} toggleLayer={toggleLayer} />

                        <BlueprintCard title="Quick Tools" code="TOOL">
                            <div className="grid grid-cols-4 gap-1">
                                {tools.map((tool) => (
                                    <motion.button
                                        key={tool.id}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setActiveTool(tool.id)}
                                        className={`p-2 rounded flex items-center justify-center transition-all ${activeTool === tool.id
                                                ? 'bg-cyan-500 text-black'
                                                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                                            }`}
                                        title={tool.label}
                                    >
                                        <tool.icon size={16} />
                                    </motion.button>
                                ))}
                            </div>
                        </BlueprintCard>
                    </div>
                </div>

                {/* Canvas Area */}
                <div className="flex-1 relative bg-[#172554] p-4 overflow-hidden">
                    <div className="w-full h-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-2 border-white relative">
                        <CadViewer activeLayers={layers} />

                        {/* Floating Toolbar */}
                        <div className="absolute top-4 left-4 bg-[#1e3a8a]/95 backdrop-blur border border-white/50 p-1 flex gap-1">
                            {tools.slice(0, 5).map((tool) => (
                                <motion.button
                                    key={tool.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTool(tool.id)}
                                    className={`p-2 transition-all ${activeTool === tool.id
                                            ? 'bg-cyan-500 text-black'
                                            : 'text-white/70 hover:text-cyan-400'
                                        }`}
                                    title={tool.label}
                                >
                                    <tool.icon size={16} />
                                </motion.button>
                            ))}
                        </div>

                        {/* View Controls Overlay */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setGridVisible(!gridVisible)}
                                className={`bg-[#1e3a8a] border border-white p-2 transition-colors ${gridVisible ? 'text-cyan-400' : 'text-white/50'
                                    }`}
                            >
                                <Grid3X3 size={14} />
                            </motion.button>
                            <div className="bg-[#1e3a8a] border border-white p-2 flex gap-2 items-center">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setZoom(Math.max(25, zoom - 25))}
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    <ZoomOut size={14} />
                                </motion.button>
                                <span className="text-xs font-mono w-12 text-center">{zoom}%</span>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setZoom(Math.min(400, zoom + 25))}
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    <ZoomIn size={14} />
                                </motion.button>
                                <div className="w-px bg-white/50 mx-1 h-4" />
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    <Maximize2 size={14} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Properties */}
                <div className="w-56 bg-[#1e3a8a] border-l-2 border-white flex flex-col shrink-0">
                    <div className="p-4 flex-1 flex flex-col gap-4">
                        <BlueprintCard title="Selection" code="SEL">
                            <div className="text-xs text-white/50 font-mono">
                                No object selected
                            </div>
                        </BlueprintCard>

                        <BlueprintCard title="Properties" code="PROP" className="flex-1">
                            <div className="text-[10px] font-mono space-y-4 text-white/70">
                                <div>
                                    <span className="block text-cyan-400 mb-1 uppercase tracking-wider">Position</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-black/30 px-2 py-1 rounded">X: 0</div>
                                        <div className="bg-black/30 px-2 py-1 rounded">Y: 0</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-cyan-400 mb-1 uppercase tracking-wider">Size</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-black/30 px-2 py-1 rounded">W: —</div>
                                        <div className="bg-black/30 px-2 py-1 rounded">H: —</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-cyan-400 mb-1 uppercase tracking-wider">Rotation</span>
                                    <div className="bg-black/30 px-2 py-1 rounded">0°</div>
                                </div>
                            </div>
                        </BlueprintCard>

                        <BlueprintCard title="Actions" code="ACT">
                            <div className="grid grid-cols-3 gap-1">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 bg-white/5 rounded text-white/50 hover:text-white hover:bg-white/10 transition-all"
                                    title="Duplicate"
                                >
                                    <Copy size={14} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 bg-white/5 rounded text-white/50 hover:text-white hover:bg-white/10 transition-all"
                                    title="Rotate"
                                >
                                    <RotateCcw size={14} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 bg-white/5 rounded text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all"
                                    title="Delete"
                                >
                                    <Trash2 size={14} />
                                </motion.button>
                            </div>
                        </BlueprintCard>
                    </div>

                    {/* Status */}
                    <div className="p-4 border-t border-white/20">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Ready</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Command Line */}
            <footer className="h-8 bg-black border-t-2 border-white flex items-center px-4 text-xs font-mono shrink-0">
                <span className="text-white/50 mr-2">COMMAND:</span>
                <span className="text-cyan-400">{activeTool.toUpperCase()}</span>
                <span className="text-white animate-pulse ml-1">_</span>
                <span className="ml-auto text-white/30">Press F1 for help</span>
            </footer>

        </div>
    );
};

export default BlueprintDashboard;