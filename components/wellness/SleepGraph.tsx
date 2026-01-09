import React from 'react';
import WellnessCard from './WellnessCard';
import { Moon } from 'lucide-react';

const SleepGraph = () => {
  const data = [6.5, 7.2, 6.8, 8.1, 7.5, 8.4, 7.9];
  const max = Math.max(...data);

  return (
    <WellnessCard className="!bg-stone-900 !border-stone-800 !text-stone-200">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-xl text-stone-100">Sleep Quality</h3>
          <p className="text-sm text-stone-400">Last 7 Days</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-purple-300">
          <Moon className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((value, i) => (
          <div key={i} className="group relative flex w-full flex-col items-center gap-2">
            <div 
              className="w-full rounded-t-lg bg-stone-800 transition-all duration-500 group-hover:bg-purple-400/80"
              style={{ height: `${(value / max) * 100}%` }}
            >
               {/* Tooltip */}
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs font-medium text-stone-200">{value}h</span>
               </div>
            </div>
            <span className="text-[10px] text-stone-400">
              {['M','T','W','T','F','S','S'][i]}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4">
        <span className="text-sm text-stone-400">Average</span>
        <span className="font-serif text-2xl text-stone-100">7.8<span className="text-sm font-sans text-stone-400 ml-1">hrs</span></span>
      </div>
    </WellnessCard>
  );
};

export default SleepGraph;