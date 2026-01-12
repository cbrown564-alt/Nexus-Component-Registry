import React, { useState, useEffect } from 'react';
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
import { useTheme } from '@/context/ThemeContext';

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
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    useEffect(() => {
        setPlaygroundTheme('blueprint');
    }, []);

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
        <div
            className="h-screen font-sans overflow-hidden flex flex-col selection:bg-cyan-500 selection:text-[#000000]"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Top Ribbon */}
            <header
                className="h-12 border-b-2 flex items-center px-4 justify-between shrink-0"
                style={{
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.border
                }}
            >
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 font-bold uppercase tracking-widest" style={{ color: theme.colors.accent }}>
                        <DraftingCompass className="w-5 h-5" />
                        NEXUS_CAD <span className="text-[10px]" style={{ color: theme.colors.mutedForeground }}>v.24.0.1</span>
                    </div>

                    {/* File Actions */}
                    <div className="h-6 w-px" style={{ backgroundColor: `${theme.colors.foreground}33` }} />
                    <div className="flex gap-1">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 rounded transition-colors"
                            style={{ color: `${theme.colors.foreground}b3` }}
                        >
                            <Save size={14} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 rounded transition-colors"
                            style={{ color: `${theme.colors.foreground}b3` }}
                        >
                            <Download size={14} />
                        </motion.button>
                        <div className="w-px mx-1" style={{ backgroundColor: `${theme.colors.foreground}1a` }} />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 rounded transition-colors"
                            style={{ color: `${theme.colors.foreground}b3` }}
                        >
                            <Undo size={14} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-1.5 rounded transition-colors"
                            style={{ color: `${theme.colors.foreground}b3` }}
                        >
                            <Redo size={14} />
                        </motion.button>
                    </div>
                </div>

                {/* View Info */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono" style={{ color: theme.colors.mutedForeground }}>
                        <span>X: 2491.04</span>
                        <span>Y: 882.12</span>
                        <span>Z: 0.00</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded text-xs" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                        <span className="font-bold" style={{ color: theme.colors.accent }}>{zoom}%</span>
                    </div>
                </div>
            </header>

            {/* Main Workspace */}
            <div className="flex-1 flex overflow-hidden">

                {/* Left Sidebar - Project & Layers */}
                <div
                    className="w-64 border-r-2 flex flex-col shrink-0"
                    style={{
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.border
                    }}
                >
                    <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
                        <BlueprintCard title="Project Info" code="PRJ-A1">
                            <div className="space-y-2 text-xs" style={{ color: `${theme.colors.foreground}e6` }}>
                                <div className="flex justify-between border-b pb-1" style={{ borderColor: `${theme.colors.border}33` }}>
                                    <span style={{ color: theme.colors.mutedForeground }}>Client:</span>
                                    <span className="font-bold">Stark Industries</span>
                                </div>
                                <div className="flex justify-between border-b pb-1" style={{ borderColor: `${theme.colors.border}33` }}>
                                    <span style={{ color: theme.colors.mutedForeground }}>Date:</span>
                                    <span>2024-10-24</span>
                                </div>
                                <div className="flex justify-between border-b pb-1" style={{ borderColor: `${theme.colors.border}33` }}>
                                    <span style={{ color: theme.colors.mutedForeground }}>Scale:</span>
                                    <span>1:50</span>
                                </div>
                                <div className="flex justify-between">
                                    <span style={{ color: theme.colors.mutedForeground }}>Drafter:</span>
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
                                            ? ''
                                            : 'hover:bg-[#ffffff1a]'
                                            }`}
                                        style={{
                                            backgroundColor: activeTool === tool.id ? theme.colors.accent : 'rgba(255, 255, 255, 0.05)',
                                            color: activeTool === tool.id ? '#000000' : theme.colors.mutedForeground
                                        }}
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
                <div
                    className="flex-1 relative p-4 overflow-hidden"
                    style={{ backgroundColor: theme.colors.secondary }}
                >
                    <div
                        className="w-full h-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-2 relative"
                        style={{ borderColor: theme.colors.border }}
                    >
                        <CadViewer activeLayers={layers} />

                        {/* Floating Toolbar */}
                        <div
                            className="absolute top-4 left-4 backdrop-blur border p-1 flex gap-1"
                            style={{
                                backgroundColor: `${theme.colors.background}f2`, // 95% opacity
                                borderColor: `${theme.colors.border}80`
                            }}
                        >
                            {tools.slice(0, 5).map((tool) => (
                                <motion.button
                                    key={tool.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveTool(tool.id)}
                                    className="p-2 transition-all"
                                    style={{
                                        backgroundColor: activeTool === tool.id ? theme.colors.accent : 'transparent',
                                        color: activeTool === tool.id ? theme.colors.background : theme.colors.mutedForeground
                                    }}
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
                                className="border p-2 transition-colors"
                                style={{
                                    backgroundColor: theme.colors.background,
                                    borderColor: theme.colors.border,
                                    color: gridVisible ? theme.colors.accent : theme.colors.mutedForeground
                                }}
                            >
                                <Grid3X3 size={14} />
                            </motion.button>
                            <div
                                className="border p-2 flex gap-2 items-center"
                                style={{
                                    backgroundColor: theme.colors.background,
                                    borderColor: theme.colors.border
                                }}
                            >
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
                                <div className="w-px mx-1 h-4" style={{ backgroundColor: `${theme.colors.foreground}80` }} />
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
                <div
                    className="w-56 border-l-2 flex flex-col shrink-0"
                    style={{
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.border
                    }}
                >
                    <div className="p-4 flex-1 flex flex-col gap-4">
                        <BlueprintCard title="Selection" code="SEL">
                            <div className="text-xs font-mono" style={{ color: theme.colors.mutedForeground }}>
                                No object selected
                            </div>
                        </BlueprintCard>

                        <BlueprintCard title="Properties" code="PROP" className="flex-1">
                            <div className="text-[10px] font-mono space-y-4" style={{ color: `${theme.colors.foreground}b3` }}>
                                <div>
                                    <span className="block mb-1 uppercase tracking-wider" style={{ color: theme.colors.accent }}>Position</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>X: 0</div>
                                        <div className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>Y: 0</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="block mb-1 uppercase tracking-wider" style={{ color: theme.colors.accent }}>Size</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>W: —</div>
                                        <div className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>H: —</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="block mb-1 uppercase tracking-wider" style={{ color: theme.colors.accent }}>Rotation</span>
                                    <div className="px-2 py-1 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>0°</div>
                                </div>
                            </div>
                        </BlueprintCard>

                        <BlueprintCard title="Actions" code="ACT">
                            <div className="grid grid-cols-3 gap-1">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 rounded hover:bg-[#ffffff1a] transition-all"
                                    style={{ color: theme.colors.mutedForeground, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                    title="Duplicate"
                                >
                                    <Copy size={14} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 rounded hover:bg-[#ffffff1a] transition-all"
                                    style={{ color: theme.colors.mutedForeground, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                    title="Rotate"
                                >
                                    <RotateCcw size={14} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 rounded hover:text-red-400 hover:bg-red-500/10 transition-all"
                                    style={{ color: theme.colors.mutedForeground, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                    title="Delete"
                                >
                                    <Trash2 size={14} />
                                </motion.button>
                            </div>
                        </BlueprintCard>
                    </div>

                    {/* Status */}
                    <div className="p-4 border-t" style={{ borderColor: `${theme.colors.border}33` }}>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Ready</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Command Line */}
            <footer
                className="h-8 border-t-2 flex items-center px-4 text-xs font-mono shrink-0"
                style={{
                    backgroundColor: '#000000',
                    borderColor: theme.colors.border
                }}
            >
                <span className="mr-2" style={{ color: theme.colors.mutedForeground }}>COMMAND:</span>
                <span style={{ color: theme.colors.accent }}>{activeTool.toUpperCase()}</span>
                <span className="animate-pulse ml-1" style={{ color: theme.colors.foreground }}>_</span>
                <span className="ml-auto opacity-30">Press F1 for help</span>
            </footer>

        </div>
    );
};

export default BlueprintDashboard;