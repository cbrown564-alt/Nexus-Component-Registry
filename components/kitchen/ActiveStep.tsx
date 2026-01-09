import React from 'react';
import { Check, ChevronRight, ChevronLeft, Clock } from 'lucide-react';
import KitchenCard from './KitchenCard';

const ActiveStep = () => {
  return (
    <KitchenCard className="h-full flex flex-col p-8 md:p-12 relative overflow-hidden bg-white border-orange-100 shadow-[8px_8px_0px_rgba(251,146,60,0.2)]">
      
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-stone-100">
          <div className="h-full bg-orange-500 w-[60%]" />
      </div>

      <div className="flex justify-between items-center mb-8">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-sm bg-orange-50 px-3 py-1 rounded-full">
              Step 3 of 5
          </span>
          <div className="flex items-center gap-2 text-stone-500 font-medium">
              <Clock className="h-5 w-5" />
              <span>15 min</span>
          </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight mb-6">
              Sauté the aromatics until golden brown.
          </h2>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
              Heat the olive oil in a large pot over medium heat. Add the diced onion and garlic. Cook, stirring occasionally, until soft and fragrant.
          </p>
      </div>

      {/* Embedded Timer Action */}
      <div className="mt-8 mb-8">
          <button className="flex items-center gap-3 bg-stone-100 hover:bg-stone-200 text-stone-800 px-6 py-4 rounded-2xl transition-colors w-full md:w-auto">
              <div className="h-8 w-8 rounded-full border-2 border-stone-400 flex items-center justify-center">
                  <div className="h-2 w-2 bg-stone-400 rounded-full" />
              </div>
              <span className="text-lg font-bold">Start 5 min timer</span>
          </button>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-auto pt-8 border-t border-stone-100">
          <button className="flex items-center gap-2 text-stone-400 hover:text-stone-600 font-bold text-lg px-4 py-2">
              <ChevronLeft className="h-6 w-6" /> Back
          </button>
          
          <button className="flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg shadow-green-700/20 transition-transform active:scale-95">
              Next Step <ChevronRight className="h-6 w-6" />
          </button>
      </div>
    </KitchenCard>
  );
};

export default ActiveStep;