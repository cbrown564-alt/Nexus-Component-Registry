import React from 'react';
import MagazineCard from './MagazineCard';
import { useTheme } from '@/context/ThemeContext';

const TrendingList = () => {
  const { currentPlaygroundTheme: theme } = useTheme();

  const stories = [
    { title: "Why Typography Matters More Than Ever", category: "Design" },
    { title: "The Hidden Economics of SaaS Pricing", category: "Business" },
    { title: "A Day in the Life of a Tokyo Creative", category: "Culture" },
    { title: "Sustainable Materials in Modern Tech", category: "Future" },
  ];

  return (
    <MagazineCard>
      <h3
        className="mb-8 font-serif text-2xl italic border-b pb-4"
        style={{ color: theme.colors.foreground, borderColor: theme.colors.border }}
      >
        Trending Now
      </h3>
      <div className="space-y-8">
        {stories.map((story, i) => (
          <div key={i} className="group flex items-start gap-4 cursor-pointer">
            <span
              className="font-serif text-4xl transition-colors group-hover:opacity-70"
              style={{ color: theme.colors.muted }}
            >
              0{i + 1}
            </span>
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: theme.colors.mutedForeground }}
              >
                {story.category}
              </span>
              <h4
                className="mt-1 font-serif text-lg leading-snug group-hover:underline underline-offset-4 transition-all"
                style={{ color: theme.colors.foreground, textDecorationColor: theme.colors.muted }}
              >
                {story.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </MagazineCard>
  );
};

export default TrendingList;