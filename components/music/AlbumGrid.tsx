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
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#ffffff' }}>Made For You</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {albums.map((album, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer rounded-xl p-4 border transition-colors"
            style={{ backgroundColor: 'rgba(24,24,27,0.4)', borderColor: 'rgba(255,255,255,0.05)' }}
          >
            <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-4 shadow-lg">
              <img
                src={album.img}
                alt={album.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }} />
              <button
                className="absolute bottom-2 right-2 h-10 w-10 rounded-full flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                style={{ backgroundColor: '#f43f5e', color: '#ffffff' }}
              >
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </button>
            </div>
            <h3 className="font-bold truncate" style={{ color: '#f4f4f5' }}>{album.title}</h3>
            <p className="text-xs mt-1 truncate" style={{ color: '#71717a' }}>{album.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;