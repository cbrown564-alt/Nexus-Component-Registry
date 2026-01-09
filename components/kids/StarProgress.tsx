import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const StarProgress = () => {
  const [stars, setStars] = useState(3);

  const addStar = () => {
    if (stars < 5) setStars(stars + 1);
    else setStars(0);
  };

  return (
    <div 
        className="flex items-center gap-2 bg-white p-3 rounded-full border-4 border-yellow-400 shadow-[0_4px_0_rgba(250,204,21,1)] cursor-pointer select-none" 
        onClick={addStar}
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{ 
            scale: i < stars ? [1, 1.3, 1] : 1,
            rotate: i < stars ? [0, 15, -15, 0] : 0
          }}
          transition={{ duration: 0.4 }}
        >
          <Star 
            className={`h-8 w-8 md:h-10 md:w-10 ${i < stars ? 'fill-yellow-400 text-orange-500' : 'fill-stone-100 text-stone-200'}`} 
            strokeWidth={3}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarProgress;