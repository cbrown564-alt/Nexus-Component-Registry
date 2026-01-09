import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Activity, Dna, Settings, Database, Hexagon, Power } from 'lucide-react';
import SciFiCard from '../components/scifi/SciFiCard';
import BodyScanner from '../components/scifi/BodyScanner';
import VitalsMonitor from '../components/scifi/VitalsMonitor';
import DNAList from '../components/scifi/DNAList';

const SciFiDashboard = () => {
  return (
    <div className="min-h-screen bg-[#020408] text-cyan-100 font-sans p-6 overflow-hidden relative selection:bg-cyan-500/30">
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      <div className="fixed inset-0 bg-gradient-to-t from-[#020408] via-transparent to-[#020408]/80 z-0 pointer-events-none" />

      {/* HUD Header */}
      <header className="relative z-10 flex items-center justify-between mb-8 border-b border-cyan-900/50 pb-4">
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 border-2 border-cyan-500/50 flex items-center justify-center relative">
                  <div className="absolute inset-0 border border-cyan-500/20 blur-[2px]" />
                  <Hexagon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                  <h1 className="text-2xl font-mono font-bold tracking-[0.2em] text-cyan-50 text-shadow-cyan">HELIX<span className="text-cyan-600">.OS</span></h1>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-600">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      SYSTEM ONLINE // V.9.0.1
                  </div>
              </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
              <div className="text-right">
                  <div className="text-cyan-600">SUBJECT</div>
                  <div className="text-cyan-100 font-bold">ALEX_M</div>
              </div>
              <div className="h-8 w-px bg-cyan-900/50" />
              <div className="text-right">
                  <div className="text-cyan-600">STATUS</div>
                  <div className="text-emerald-400 font-bold">STABLE</div>
              </div>
              <button className="p-2 border border-red-900/50 bg-red-950/20 text-red-400 hover:bg-red-900/40 hover:text-red-200 transition-all">
                  <Power className="w-4 h-4" />
              </button>
          </div>
      </header>

      {/* Main Interface */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)]">
          
          {/* Left Column: Navigation & Stats */}
          <div className="lg:col-span-2 flex flex-col gap-4">
              <SciFiCard className="flex-1 flex flex-col gap-2 p-2">
                  {[
                      { icon: Activity, label: 'Vitals', active: true },
                      { icon: Dna, label: 'Genomics', active: false },
                      { icon: Database, label: 'History', active: false },
                      { icon: Crosshair, label: 'Scan', active: false },
                      { icon: Settings, label: 'Config', active: false },
                  ].map((item, i) => (
                      <button 
                        key={i}
                        className={`flex items-center gap-3 p-3 text-xs font-mono tracking-wider transition-all border border-transparent ${
                            item.active 
                            ? 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                            : 'text-cyan-700 hover:text-cyan-400 hover:bg-cyan-950/20'
                        }`}
                      >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                      </button>
                  ))}
              </SciFiCard>
              
              <SciFiCard className="h-32 flex items-center justify-center text-center">
                  <div>
                      <div className="text-[10px] text-cyan-600 mb-1">GLOBAL ALERT LEVEL</div>
                      <div className="text-3xl font-mono font-bold text-yellow-400 animate-pulse">LOW</div>
                  </div>
              </SciFiCard>
          </div>

          {/* Center Column: Scanner & Vitals */}
          <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="h-2/3">
                  <BodyScanner />
              </div>
              <div className="h-1/3">
                  <VitalsMonitor />
              </div>
          </div>

          {/* Right Column: Data */}
          <div className="lg:col-span-3 flex flex-col gap-6">
              <DNAList />
              
              <SciFiCard title="Neural Link" className="flex-1">
                  <div className="h-full flex items-center justify-center">
                      <div className="relative w-32 h-32">
                          <div className="absolute inset-0 border-4 border-cyan-900/30 rounded-full" />
                          <div className="absolute inset-0 border-t-4 border-cyan-500 rounded-full animate-spin" />
                          <div className="absolute inset-4 border-4 border-cyan-900/30 rounded-full" />
                          <div className="absolute inset-4 border-r-4 border-teal-500 rounded-full animate-spin-slow" />
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-cyan-400 animate-pulse">
                              SYNCING
                          </div>
                      </div>
                  </div>
              </SciFiCard>
          </div>

      </main>
    </div>
  );
};

export default SciFiDashboard;