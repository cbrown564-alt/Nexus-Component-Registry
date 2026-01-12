import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import MagazineCard from './MagazineCard';
import EditorialButton from './EditorialButton';
import { useTheme } from '@/context/ThemeContext';

const FeatureStory = () => {
  const { currentPlaygroundTheme: theme } = useTheme();

  return (
    <MagazineCard className="group overflow-hidden border-0 bg-transparent" hoverEffect={false} noPadding={true}>
      <div className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-opacity group-hover:opacity-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
          alt="Feature"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute top-6 left-6">
          <span
            className="px-3 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: theme.colors.card, color: theme.colors.foreground }}
          >
            Architecture
          </span>
        </div>
      </div>

      <div className="mt-8 px-4 pb-4">
        <div
          className="mb-3 flex items-center gap-2 text-xs font-medium"
          style={{ color: theme.colors.mutedForeground }}
        >
          <span>Oct 24, 2024</span>
          <span className="h-px w-8" style={{ backgroundColor: theme.colors.muted }} />
          <span>5 min read</span>
        </div>
        <h2
          className="font-serif text-4xl font-medium leading-tight group-hover:opacity-70 transition-colors cursor-pointer"
          style={{ color: theme.colors.foreground }}
        >
          The Renaissance of Minimalist Workspace Design in 2024
        </h2>
        <p
          className="mt-4 text-lg leading-relaxed font-serif"
          style={{ color: theme.colors.mutedForeground }}
        >
          As remote work settles into permanence, architects are reimagining the home office not just as a place of productivity, but as a sanctuary of thought.
        </p>

        <EditorialButton variant="link" className="mt-6">
          Read Full Story
        </EditorialButton>
      </div>
    </MagazineCard>
  );
};

export default FeatureStory;