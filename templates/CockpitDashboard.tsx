import React from 'react';
import Speedometer from '../components/cockpit/Speedometer';
import LaneAssist from '../components/cockpit/LaneAssist';
import NavWidget from '../components/cockpit/NavWidget';
import MediaWidget from '../components/cockpit/MediaWidget';
import ClimateControl from '../components/cockpit/ClimateControl';
import { Mic, Phone, Menu } from 'lucide-react';

const CockpitDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 lg:p-8 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Dashboard Wrapper with perspective tilt */}
      <div 
        className="w-full max-w-[1600px] h-[80vh] flex flex-col gap-6"
        style={{ perspective: '2000px' }}
      >
          {/* Main Instrument Cluster (Rotated slightly towards viewer) */}
          <div 
            className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 origin-center transition-transform duration-500"
            style={{ transform: 'rotateX(5deg)' }}
          >
              
              {/* Left Column: Nav & Speed */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                  <div className="flex-1">
                      <NavWidget />
                  </div>
                  <div className="h-1/3">
                      <ClimateControl />
                  </div>
              </div>

              {/* Center Column: Driving View */}
              <div className="lg:col-span-6 flex flex-col gap-6 relative">
                  {/* Status Bar */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur px-6 py-2 rounded-full border border-zinc-800 flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
                      <span>10:42 AM</span>
                      <span className="text-white">72°F</span>
                      <span>LTE</span>
                  </div>

                  <div className="h-[60%]">
                      <LaneAssist />
                  </div>
                  <div className="h-[40%]">
                      <Speedometer />
                  </div>
              </div>

              {/* Right Column: Media & Apps */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                  <div className="flex-1">
                      <MediaWidget />
                  </div>
                  
                  {/* Quick Actions Grid */}
                  <div className="grid grid-cols-2 gap-4 h-1/3">
                      <button className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 active:border-blue-500 transition-colors">
                          <Phone className="w-8 h-8 text-green-500" />
                          <span className="text-xs font-bold uppercase tracking-wider">Phone</span>
                      </button>
                      <button className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 active:border-blue-500 transition-colors">
                          <Mic className="w-8 h-8 text-white" />
                          <span className="text-xs font-bold uppercase tracking-wider">Voice</span>
                      </button>
                      <button className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl flex flex-col items-center justify-center gap-2 active:border-blue-500 transition-colors col-span-2">
                          <Menu className="w-8 h-8 text-zinc-400" />
                          <span className="text-xs font-bold uppercase tracking-wider">All Apps</span>
                      </button>
                  </div>
              </div>

          </div>
      </div>

      {/* Bottom Bar (Simulated Physical Buttons) */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900 to-black border-t border-zinc-800 flex items-center justify-center gap-12 pointer-events-none">
          <div className="w-32 h-1 bg-zinc-800 rounded-full" />
      </div>

    </div>
  );
};

export default CockpitDashboard;