import React from 'react';
import { Check, ChevronRight, ChevronLeft, Clock } from 'lucide-react';
import KitchenCard from './KitchenCard';

const ActiveStep = () => {
    return (
        <KitchenCard className="h-full flex flex-col p-8 md:p-12 relative overflow-hidden bg-white border-orange-100 shadow-[8px_8px_0px_rgba(251,146,60,0.2)]">

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: '#f5f5f4' }}>
                <div className="h-full w-[60%]" style={{ backgroundColor: '#f97316' }} />
            </div>

            <div className="flex justify-between items-center mb-8">
                <span className="font-bold uppercase tracking-widest text-sm px-3 py-1 rounded-full" style={{ color: '#ea580c', backgroundColor: '#fff7ed' }}>
                    Step 3 of 5
                </span>
                <div className="flex items-center gap-2 font-medium" style={{ color: '#78716c' }}>
                    <Clock className="h-5 w-5" />
                    <span>15 min</span>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6" style={{ color: '#292524' }}>
                    Sauté the aromatics until golden brown.
                </h2>
                <p className="text-xl leading-relaxed max-w-2xl" style={{ color: '#57534e' }}>
                    Heat the olive oil in a large pot over medium heat. Add the diced onion and garlic. Cook, stirring occasionally, until soft and fragrant.
                </p>
            </div>

            {/* Embedded Timer Action */}
            <div className="mt-8 mb-8">
                <button className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-colors w-full md:w-auto" style={{ backgroundColor: '#f5f5f4', color: '#292524' }}>
                    <div className="h-8 w-8 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#a8a29e' }}>
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: '#a8a29e' }} />
                    </div>
                    <span className="text-lg font-bold">Start 5 min timer</span>
                </button>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-auto pt-8 border-t" style={{ borderColor: '#f5f5f4' }}>
                <button className="flex items-center gap-2 font-bold text-lg px-4 py-2" style={{ color: '#a8a29e' }}>
                    <ChevronLeft className="h-6 w-6" /> Back
                </button>

                <button className="flex items-center gap-3 px-8 py-4 rounded-full text-xl font-bold shadow-lg transition-transform active:scale-95" style={{ backgroundColor: '#15803d', color: '#ffffff', boxShadow: '0 10px 15px -3px rgba(21,128,61,0.2)' }}>
                    Next Step <ChevronRight className="h-6 w-6" />
                </button>
            </div>
        </KitchenCard>
    );
};

export default ActiveStep;