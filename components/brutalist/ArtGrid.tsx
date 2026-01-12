import React from 'react';
import BrutalistCard from './BrutalistCard';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ArtGrid = () => {
  const { theme } = useTheme();
  const items = [
    { title: "Chaos Theory", type: "Digital", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600", col: "col-span-2", aspect: "aspect-video" },
    { title: "Untitled #04", type: "Photography", img: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80&w=400", col: "col-span-1", aspect: "aspect-square" },
    { title: "Glitch_V2", type: "3D Render", img: "https://images.unsplash.com/photo-1534234828563-02511c75b630?auto=format&fit=crop&q=80&w=400", col: "col-span-1", aspect: "aspect-[3/4]" },
    { title: "Concrete Dreams", type: "Sculpture", img: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=600", col: "col-span-2", aspect: "aspect-video" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {items.map((item, i) => (
        <div key={i} className={`relative group ${item.col}`}>
          <BrutalistCard className="h-full p-0 overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className={`w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ${item.aspect}`}
            />

            {/* Overlay Tag */}
            <div
              className="absolute top-4 left-4 px-3 py-1 font-mono text-xs border"
              style={{
                backgroundColor: theme.colors.foreground,
                color: theme.colors.background,
                borderColor: theme.colors.background
              }}
            >
              {item.type}
            </div>

            {/* Hover Reveal */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{
                backgroundColor: '#facc15e6', // yellow-400/90 hardcoded or use theme.colors.accent
                // Brutalist often uses specific raw colors. 
                // I'll keep the yellow if it's the intended brand color, but use tokens for the rest.
                // Or I can use theme.colors.primary if it's yellow.
                // Since I can't know, I'll stick to yellow but fix the text black.
              }}
            >
              <h3
                className="font-serif text-3xl italic font-black"
                style={{ color: '#000000' }} // Keep black on yellow
              >
                {item.title}
              </h3>
              <button
                className="mt-4 flex items-center gap-2 px-6 py-2 border-2 font-bold transition-colors shadow-[4px_4px_0px_0px_currentColor]"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  borderColor: '#000000',
                  // Hover state is hard to do inline without state/CSS.
                  // I'll use class for hover if possible or generic hover styles.
                  // But button contents are simple.
                }}
              >
                VIEW PROJECT <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </BrutalistCard>
        </div>
      ))}
    </div>
  );
};

export default ArtGrid;