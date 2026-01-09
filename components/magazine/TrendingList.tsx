import React from 'react';
import MagazineCard from './MagazineCard';

const TrendingList = () => {
  const stories = [
    { title: "Why Typography Matters More Than Ever", category: "Design" },
    { title: "The Hidden Economics of SaaS Pricing", category: "Business" },
    { title: "A Day in the Life of a Tokyo Creative", category: "Culture" },
    { title: "Sustainable Materials in Modern Tech", category: "Future" },
  ];

  return (
    <MagazineCard className="border-neutral-200">
      <h3 className="mb-8 font-serif text-2xl italic text-neutral-900 border-b border-neutral-200 pb-4">
        Trending Now
      </h3>
      <div className="space-y-8">
        {stories.map((story, i) => (
            <div key={i} className="group flex items-start gap-4 cursor-pointer">
                <span className="font-serif text-4xl text-neutral-200 transition-colors group-hover:text-neutral-400">
                    0{i + 1}
                </span>
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                        {story.category}
                    </span>
                    <h4 className="mt-1 font-serif text-lg leading-snug text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4 transition-all">
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