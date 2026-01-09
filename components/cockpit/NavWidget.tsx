import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import CockpitCard from './CockpitCard';

const NavWidget = () => {
  return (
    <CockpitCard className="flex flex-col justify-between" label="Next Turn">
        <div className="flex items-start justify-between">
            <ArrowUpRight className="w-32 h-32 text-white" strokeWidth={1.5} />
            <div className="text-right">
                <span className="block text-6xl font-bold text-white tracking-tighter">500</span>
                <span className="text-xl text-zinc-500 font-bold uppercase">Feet</span>
            </div>
        </div>
        
        <div>
            <h3 className="text-2xl font-bold text-white mb-1">Exit 42A</h3>
            <div className="flex items-center gap-2 text-zinc-400 font-medium">
                <MapPin className="w-5 h-5" />
                <span>Downtown / Convention Ctr</span>
            </div>
        </div>
        
        {/* Progress Bar to Turn */}
        <div className="mt-6 h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-white w-2/3" />
        </div>
    </CockpitCard>
  );
};

export default NavWidget;