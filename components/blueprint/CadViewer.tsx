import React from 'react';


interface CadViewerProps {
    activeLayers: Record<string, boolean>;
}

const CadViewer: React.FC<CadViewerProps> = ({ activeLayers }) => {
    return (
        <div className="relative w-full h-full bg-[#172554] overflow-hidden border-2 border-white select-none cursor-crosshair group">
            {/* Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 0.5px, transparent 0.5px), linear-gradient(to bottom, #ffffff 0.5px, transparent 0.5px)`,
                    backgroundSize: '8px 8px'
                }}
            />

            {/* SVG Canvas */}
            <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                <defs>
                    {/* Concrete Hatch */}
                    <pattern id="concrete" patternUnits="userSpaceOnUse" width="4" height="4">
                        <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                    </pattern>
                    {/* Crosshatch */}
                    <pattern id="insulation" patternUnits="userSpaceOnUse" width="8" height="8">
                        <path d="M0,0 l8,8 M8,0 l-8,8" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
                    </pattern>
                </defs>

                <g transform="translate(100, 50) scale(0.8)">

                    {/* STRUCTURE LAYER */}
                    {activeLayers['Structure'] && (
                        <g id="walls">
                            {/* Outer Walls - Thick White Line */}
                            <path d="M50 50 L750 50 L750 550 L50 550 Z" fill="none" stroke="white" strokeWidth="4" />
                            {/* Inner fill for walls (poché) */}
                            <path d="M50 50 L750 50 L750 550 L50 550 Z" fill="url(#concrete)" opacity="0.5" />

                            {/* Interior Walls */}
                            <path d="M50 250 L400 250" stroke="white" strokeWidth="3" />
                            <path d="M400 50 L400 550" stroke="white" strokeWidth="3" />

                            {/* Doors - Arcs */}
                            <path d="M200 250 L200 200 A50 50 0 0 1 250 250" fill="none" stroke="cyan" strokeWidth="1" strokeDasharray="4 2" />
                            <line x1="200" y1="250" x2="200" y2="200" stroke="white" strokeWidth="2" />
                        </g>
                    )}

                    {/* FURNITURE LAYER */}
                    {activeLayers['Furniture'] && (
                        <g id="furniture" stroke="white" strokeWidth="1" fill="none">
                            {/* Table */}
                            <rect x="150" y="100" width="100" height="60" rx="5" />
                            <circle cx="140" cy="130" r="10" />
                            <circle cx="260" cy="130" r="10" />

                            {/* Sofa */}
                            <path d="M500 100 h150 v50 h-150 z" />
                            <path d="M500 100 v20 h150 v-20" fill="url(#insulation)" />
                        </g>
                    )}

                    {/* ELECTRICAL LAYER */}
                    {activeLayers['Electrical'] && (
                        <g id="electrical" stroke="yellow" strokeWidth="1" fill="none">
                            {/* Wiring path */}
                            <path d="M50 300 Q 100 300, 150 280 T 250 280" strokeDasharray="4 2" opacity="0.7" />

                            {/* Outlets */}
                            <g transform="translate(250, 280)">
                                <circle cx="0" cy="0" r="4" fill="black" stroke="yellow" />
                                <line x1="-4" y1="0" x2="4" y2="0" />
                            </g>
                            <g transform="translate(600, 550)">
                                <circle cx="0" cy="0" r="4" fill="black" stroke="yellow" />
                                <line x1="0" y1="-4" x2="0" y2="4" />
                            </g>
                        </g>
                    )}

                    {/* DIMENSIONS LAYER */}
                    {activeLayers['Dimensions'] && (
                        <g id="dimensions">
                            {/* Top Width */}
                            <line x1="50" y1="30" x2="750" y2="30" stroke="cyan" strokeWidth="0.5" />
                            <line x1="50" y1="25" x2="50" y2="35" stroke="cyan" strokeWidth="0.5" />
                            <line x1="750" y1="25" x2="750" y2="35" stroke="cyan" strokeWidth="0.5" />
                            <text x="400" y="20" fill="cyan" textAnchor="middle" fontSize="12" fontFamily="Architects Daughter">14.0m</text>

                            {/* Side Height */}
                            <line x1="30" y1="50" x2="30" y2="550" stroke="cyan" strokeWidth="0.5" />
                            <line x1="25" y1="50" x2="35" y2="50" stroke="cyan" strokeWidth="0.5" />
                            <line x1="25" y1="550" x2="35" y2="550" stroke="cyan" strokeWidth="0.5" />
                            <text x="20" y="300" fill="cyan" textAnchor="middle" fontSize="12" fontFamily="Architects Daughter" transform="rotate(-90, 20, 300)">10.0m</text>
                        </g>
                    )}

                </g>
            </svg>

            {/* Crosshair Cursor */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                <div className="absolute w-full h-px top-1/2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                <div className="absolute h-full w-px left-1/2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            </div>
        </div>
    );
};

export default CadViewer;