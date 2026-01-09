import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const AlbumGrid = () => {
  const albums = [
    { title: "Neon Nights", subtitle: "Synthwave Essentials", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400" },
    { title: "Deep Focus", subtitle: "Ambient for Work", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400" },
    { title: "Workout Energy", subtitle: "High BPM Mix", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" },
    { title: "Late Night Jazz", subtitle: "Smooth Classics", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=400" },
    { title: "Indie Radar", subtitle: "Fresh Finds", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Made For You</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {albums.map((album, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer rounded-xl bg-zinc-900/40 p-4 border border-white/5 hover:bg-zinc-800/60 transition-colors"
          >
            <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-4 shadow-lg">
                <img 
                    src={album.img} 
                    alt={album.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                </button>
            </div>
            <h3 className="font-bold text-zinc-100 truncate">{album.title}</h3>
            <p className="text-xs text-zinc-500 mt-1 truncate">{album.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;