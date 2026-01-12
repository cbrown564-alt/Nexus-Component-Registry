import React from 'react';
import { Mail } from 'lucide-react';
import MagazineCard from './MagazineCard';
import { useTheme } from '@/context/ThemeContext';

const Newsletter = () => {
  const { currentPlaygroundTheme: theme } = useTheme();

  return (
    <MagazineCard
      className="text-center py-12"
      style={{
        backgroundColor: theme.colors.accent,
        color: theme.colors.accentForeground
      }}
    >
      <Mail className="mx-auto mb-6 h-8 w-8" style={{ color: theme.colors.accentForeground }} />
      <h3 className="mb-2 font-serif text-3xl" style={{ color: theme.colors.accentForeground }}>The Sunday Digest</h3>
      <p className="mx-auto mb-8 max-w-xs text-sm leading-relaxed opacity-80" style={{ color: theme.colors.accentForeground }}>
        Curated perspectives on design, technology, and culture. Delivered weekly.
      </p>

      <div className="relative mx-auto max-w-xs">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border-b bg-transparent py-3 pr-8 text-center text-sm focus:outline-none transition-colors placeholder:opacity-60"
          style={{
            borderColor: theme.colors.accentForeground,
            color: theme.colors.accentForeground,
          }}
        />
        <button
          className="absolute right-0 top-0 h-full text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
          style={{ color: theme.colors.accentForeground }}
        >
          Join
        </button>
      </div>
    </MagazineCard>
  );
};

export default Newsletter;