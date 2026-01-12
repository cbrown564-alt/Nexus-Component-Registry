import React from 'react';
import { Mail } from 'lucide-react';
import MagazineCard from './MagazineCard';

const Newsletter = () => {
  return (
    <MagazineCard className="text-center py-12" style={{ backgroundColor: '#171717', color: '#ffffff' }}>
      <Mail className="mx-auto mb-6 h-8 w-8" style={{ color: '#a3a3a3' }} />
      <h3 className="mb-2 font-serif text-3xl" style={{ color: '#ffffff' }}>The Sunday Digest</h3>
      <p className="mx-auto mb-8 max-w-xs text-sm leading-relaxed" style={{ color: '#a3a3a3' }}>
        Curated perspectives on design, technology, and culture. Delivered weekly.
      </p>

      <div className="relative mx-auto max-w-xs">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border-b bg-transparent py-3 pr-8 text-center text-sm focus:outline-none transition-colors"
          style={{
            borderColor: '#404040',
            color: '#ffffff',
            '--tw-placeholder-color': '#525252'
          } as React.CSSProperties}
        />
        <button className="absolute right-0 top-0 h-full text-xs font-bold uppercase tracking-widest transition-colors hover:text-white" style={{ color: '#a3a3a3' }}>
          Join
        </button>
      </div>
    </MagazineCard>
  );
};

export default Newsletter;