import React, { useState } from 'react';
import { Maximize2, MousePointer2, Move, Type, MousePointerClick, DraftingCompass } from 'lucide-react';
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

  const toggleLayer = (layer: string) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] as boolean }));
  };

  return (
    <div className="min-h-screen bg-[#1e3a8a] text-white font-sans overflow-hidden flex flex-col relative selection:bg-cyan-500 selection:text-black">
      
      {/* Top Ribbon */}
      <header className="h-12 bg-[#172554] border-b-2 border-white flex items-center px-4 justify-between shrink-0">
          <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-cyan-400 font-code font-bold uppercase tracking-widest">
                  <DraftingCompass className="w-5 h-5" />
                  NEXUS_CAD <span className="text-white/50 text-[10px]">v.24.0.1</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex gap-2">
                  <button className="p-1 hover:bg-white/10 rounded"><MousePointer2 size={16} /></button>
                  <button className="p-1 hover:bg-white/10 rounded"><Move size={16} /></button>
                  <button className="p-1 hover:bg-white/10 rounded"><Type size={16} /></button>
              </div>
          </div>
          <div className="font-code text-xs text-white/70">
              X: 2491.04 Y: 882.12 Z: 0.00
          </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
          
          {/* Left Toolbar */}
          <div className="w-64 bg-[#1e3a8a] border-r-2 border-white p-4 flex flex-col gap-4 z-10 shrink-0">
              <BlueprintCard title="Project Info" code="PRJ-A1">
                  <div className="space-y-2 text-xs font-arch text-white/90">
                      <div className="flex justify-between border-b border-white/20 pb-1">
                          <span>Client:</span> <span>Stark Ind.</span>
                      </div>
                      <div className="flex justify-between border-b border-white/20 pb-1">
                          <span>Date:</span> <span>24-10-24</span>
                      </div>
                      <div className="flex justify-between border-b border-white/20 pb-1">
                          <span>Scale:</span> <span>1:50</span>
                      </div>
                      <div className="flex justify-between pt-1">
                          <span>Drafter:</span> <span>A.M.</span>
                      </div>
                  </div>
              </BlueprintCard>

              <LayerControl layers={layers} toggleLayer={toggleLayer} />

              <BlueprintCard title="Properties" code="PROP" className="flex-1">
                  <div className="text-[10px] font-code space-y-4 text-white/70">
                      <div>
                          <span className="block text-cyan-400 mb-1">SELECTION</span>
                          No Object Selected
                      </div>
                      <div>
                          <span className="block text-cyan-400 mb-1">COORDINATES</span>
                          Rel: 0,0
                      </div>
                      <div className="mt-auto pt-4 border-t border-white/20">
                          <span className="block text-cyan-400 mb-1">STATUS</span>
                          <span className="text-emerald-400">READY</span>
                      </div>
                  </div>
              </BlueprintCard>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 relative bg-[#172554] p-8 overflow-hidden">
              <div className="w-full h-full shadow-[0_0_50px_rgba(0,0,0,0.5)] border-2 border-white relative">
                  <CadViewer activeLayers={layers} />
                  
                  {/* View Controls Overlay */}
                  <div className="absolute bottom-4 right-4 bg-[#1e3a8a] border border-white p-2 flex gap-2">
                      <button className="hover:text-cyan-400 transition-colors text-xs font-bold font-code">-</button>
                      <span className="text-xs font-code">100%</span>
                      <button className="hover:text-cyan-400 transition-colors text-xs font-bold font-code">+</button>
                      <div className="w-px bg-white/50 mx-1" />
                      <button className="hover:text-cyan-400 transition-colors"><Maximize2 size={12} /></button>
                  </div>
              </div>
          </div>

      </div>

      {/* Command Line Bottom Bar */}
      <footer className="h-8 bg-black border-t-2 border-white flex items-center px-2 text-xs font-code">
          <span className="text-white/50 mr-2">COMMAND:</span>
          <span className="text-white animate-pulse">_</span>
      </footer>

    </div>
  );
};

export default BlueprintDashboard;