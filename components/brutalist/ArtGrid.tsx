import React from 'react';
import BrutalistCard from './BrutalistCard';
import { ArrowUpRight } from 'lucide-react';

const ArtGrid = () => {
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
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 font-mono text-xs border border-white">
                    {item.type}
                </div>

                {/* Hover Reveal */}
                <div className="absolute inset-0 bg-yellow-400/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <h3 className="font-serif text-3xl italic font-black text-black">{item.title}</h3>
                    <button className="mt-4 flex items-center gap-2 bg-white px-6 py-2 border-2 border-black font-bold shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-black hover:text-white transition-colors">
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