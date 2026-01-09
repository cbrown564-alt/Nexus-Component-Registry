import React from 'react';
import { ArrowRight } from 'lucide-react';
import CommerceCard from './CommerceCard';

const PromoBanner = () => {
  return (
    <CommerceCard className="relative h-[500px] w-full overflow-hidden bg-black text-white border-none">
      <div className="absolute inset-0 opacity-60">
        <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600" 
            alt="Collection" 
            className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      <div className="absolute bottom-0 left-0 p-8 md:p-12">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">
            Fall / Winter 2024
        </span>
        <h2 className="mb-6 max-w-lg font-serif text-5xl font-medium leading-tight md:text-6xl">
            Essentials for the Modern Minimalist.
        </h2>
        <button className="group flex items-center gap-3 border-b border-white pb-1 text-sm font-bold uppercase tracking-widest text-white transition-all hover:text-neutral-300 hover:border-neutral-300">
            Shop The Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </CommerceCard>
  );
};

export default PromoBanner;