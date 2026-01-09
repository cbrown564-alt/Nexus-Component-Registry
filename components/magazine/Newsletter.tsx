import React from 'react';
import { Mail } from 'lucide-react';
import MagazineCard from './MagazineCard';

const Newsletter = () => {
  return (
    <MagazineCard className="bg-neutral-900 text-white text-center py-12">
      <Mail className="mx-auto mb-6 h-8 w-8 text-neutral-400" />
      <h3 className="mb-2 font-serif text-3xl text-white">The Sunday Digest</h3>
      <p className="mx-auto mb-8 max-w-xs text-sm text-neutral-400 leading-relaxed">
        Curated perspectives on design, technology, and culture. Delivered weekly.
      </p>
      
      <div className="relative mx-auto max-w-xs">
        <input 
            type="email" 
            placeholder="Email address" 
            className="w-full border-b border-neutral-700 bg-transparent py-3 pr-8 text-center text-sm text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
        />
        <button className="absolute right-0 top-0 h-full text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
            Join
        </button>
      </div>
    </MagazineCard>
  );
};

export default Newsletter;