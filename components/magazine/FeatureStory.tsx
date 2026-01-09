import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagazineCard from './MagazineCard';

const FeatureStory = () => {
  return (
    <MagazineCard className="group h-full p-0 overflow-hidden border-0 bg-transparent" hoverEffect={false}>
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900/20 transition-opacity group-hover:bg-neutral-900/10" />
        <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Feature" 
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute top-6 left-6">
            <span className="bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
                Architecture
            </span>
        </div>
      </div>
      
      <div className="mt-8 pr-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-neutral-500">
            <span>Oct 24, 2024</span>
            <span className="h-px w-8 bg-neutral-300" />
            <span>5 min read</span>
        </div>
        <h2 className="font-serif text-4xl font-medium leading-tight text-neutral-900 group-hover:text-neutral-600 transition-colors cursor-pointer">
            The Renaissance of Minimalist Workspace Design in 2024
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600 font-serif">
            As remote work settles into permanence, architects are reimagining the home office not just as a place of productivity, but as a sanctuary of thought.
        </p>
        
        <button className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 group/btn">
            Read Full Story 
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </button>
      </div>
    </MagazineCard>
  );
};

export default FeatureStory;