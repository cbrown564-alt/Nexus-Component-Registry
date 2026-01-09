import React, { useState } from 'react';
import WellnessCard from './WellnessCard';
import { Sun, Cloud, CloudRain, CloudLightning } from 'lucide-react';

const MoodSelector = () => {
  const [selected, setSelected] = useState<string | null>(null);
  
  const moods = [
    { icon: Sun, label: 'Radiant', color: 'text-orange-400', bg: 'bg-orange-50' },
    { icon: Cloud, label: 'Calm', color: 'text-blue-400', bg: 'bg-blue-50' },
    { icon: CloudRain, label: 'Melancholy', color: 'text-indigo-400', bg: 'bg-indigo-50' },
    { icon: CloudLightning, label: 'Anxious', color: 'text-stone-500', bg: 'bg-stone-100' },
  ];

  return (
    <WellnessCard>
       <h3 className="mb-1 font-serif text-xl text-stone-800">How do you feel?</h3>
       <p className="mb-6 text-sm text-stone-600">Check in with yourself today.</p>

       <div className="grid grid-cols-2 gap-3">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelected(mood.label)}
              className={`group flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-300 ${
                selected === mood.label 
                  ? `${mood.bg} ring-1 ring-inset ring-black/5 scale-[0.98]` 
                  : 'hover:bg-stone-50'
              }`}
            >
               <mood.icon className={`mb-2 h-6 w-6 transition-transform group-hover:scale-110 ${mood.color}`} />
               <span className={`text-xs font-medium ${selected === mood.label ? 'text-stone-800' : 'text-stone-500'}`}>
                 {mood.label}
               </span>
            </button>
          ))}
       </div>

       <div className="mt-6">
         <div className="h-1 w-full overflow-hidden rounded-full bg-stone-100">
           <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-orange-200 to-sage-300" />
         </div>
         <div className="mt-2 flex justify-between text-[10px] text-stone-500">
           <span>Weekly Balance</span>
           <span>68% Positive</span>
         </div>
       </div>
    </WellnessCard>
  );
};

export default MoodSelector;