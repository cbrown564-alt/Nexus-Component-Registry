import React from 'react';
import { Play, SkipForward, SkipBack, Music2 } from 'lucide-react';
import CockpitCard from './CockpitCard';

const MediaWidget = () => {
  return (
    <CockpitCard className="flex flex-col" label="Media">
        <div className="flex-1 flex items-center gap-6">
            <div className="h-24 w-24 bg-zinc-800 rounded-xl flex items-center justify-center shadow-inner">
                <Music2 className="w-10 h-10 text-zinc-600" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white leading-tight">Nightcall</h3>
                <p className="text-xl text-zinc-500 font-medium">Kavinsky</p>
            </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
            <button className="h-20 w-20 flex items-center justify-center rounded-2xl bg-zinc-800 active:bg-zinc-700 active:scale-95 transition-all text-white">
                <SkipBack className="w-8 h-8 fill-current" />
            </button>
            <button className="flex-1 h-20 flex items-center justify-center rounded-2xl bg-blue-600 active:bg-blue-500 active:scale-95 transition-all text-white shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <Play className="w-10 h-10 fill-current ml-1" />
            </button>
            <button className="h-20 w-20 flex items-center justify-center rounded-2xl bg-zinc-800 active:bg-zinc-700 active:scale-95 transition-all text-white">
                <SkipForward className="w-8 h-8 fill-current" />
            </button>
        </div>
    </CockpitCard>
  );
};

export default MediaWidget;