import React from 'react';
import { Star, Clock } from 'lucide-react';
import FestivalCard from './FestivalCard';
import { motion } from 'framer-motion';

interface ArtistCardProps {
  name?: string;
  genre?: string;
  imageUrl?: string;
  setTime?: string;
  stage?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  className?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  name = "Aurora Nights",
  genre = "Electronic / Synthwave",
  imageUrl = "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400",
  setTime = "9:30 PM",
  stage = "Main Stage",
  isFavorite = false,
  onFavoriteToggle,
  className = "",
}) => {
  return (
    <FestivalCard className={`group overflow-hidden ${className}`}>
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onFavoriteToggle}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors ${
            isFavorite ? 'bg-yellow-500 text-black' : 'bg-black/40 text-white hover:bg-yellow-500 hover:text-black'
          }`}
        >
          <Star className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </motion.button>
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-fuchsia-500 text-white rounded">
            {stage}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-white mb-1">{name}</h3>
        <p className="text-sm text-zinc-400 mb-3">{genre}</p>
        <div className="flex items-center gap-2 text-sm text-zinc-300">
          <Clock className="h-4 w-4 text-fuchsia-400" />
          {setTime}
        </div>
      </div>
    </FestivalCard>
  );
};

export default ArtistCard;
