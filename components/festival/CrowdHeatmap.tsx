import React from 'react';
import FestivalCard from './FestivalCard';
import { MapPin, Users } from 'lucide-react';

const CrowdHeatmap = () => {
  const zones = [
    { name: "Main Stage", density: "High", color: "bg-red-500", top: "30%", left: "50%" },
    { name: "Techno Tent", density: "Med", color: "bg-yellow-500", top: "60%", left: "20%" },
    { name: "Food Court", density: "Low", color: "bg-green-500", top: "70%", left: "80%" },
  ];

  return (
    <FestivalCard className="h-full min-h-[300px] p-0 overflow-hidden" gradient="from-cyan-500 via-blue-500 to-indigo-500">
      <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <Users className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Crowd Density</span>
          </div>
      </div>

      {/* Map Background */}
      <div className="relative w-full h-full bg-[#0a0a0a]">
          {/* Abstract Map Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" stroke="white" strokeWidth="0.5" fill="none">
              <path d="M0 50 Q 50 20 100 50" />
              <path d="M20 100 Q 50 50 80 100" />
              <circle cx="50%" cy="30%" r="15%" />
              <circle cx="20%" cy="60%" r="10%" />
              <circle cx="80%" cy="70%" r="12%" />
          </svg>

          {/* Heat Zones */}
          {zones.map((zone, i) => (
              <div 
                key={i}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
                style={{ top: zone.top, left: zone.left }}
              >
                  <div className={`relative w-24 h-24 rounded-full ${zone.color} opacity-20 blur-xl animate-pulse`} />
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${zone.color} border-2 border-white shadow-lg`} />
                  
                  {/* Tooltip */}
                  <div className="absolute top-full mt-2 bg-black/80 backdrop-blur border border-white/20 px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                      <div className="text-xs font-bold text-white">{zone.name}</div>
                      <div className="text-[10px] text-zinc-400">{zone.density} Density</div>
                  </div>
              </div>
          ))}
          
          {/* User Location */}
          <div className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <MapPin className="w-6 h-6 text-cyan-400 fill-cyan-400/20 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-bounce" />
              <div className="w-8 h-2 bg-cyan-400/50 rounded-full blur-sm" />
          </div>
      </div>
    </FestivalCard>
  );
};

export default CrowdHeatmap;