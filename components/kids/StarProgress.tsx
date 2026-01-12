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
      className="flex items-center gap-2 p-3 rounded-full border-4 cursor-pointer select-none"
      style={{ backgroundColor: '#ffffff', borderColor: '#facc15', boxShadow: '0 4px 0 rgba(250,204,21,1)' }}
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
            className={`h-8 w-8 md:h-10 md:w-10`}
            style={{
              fill: i < stars ? '#facc15' : '#f5f5f4',
              color: i < stars ? '#f97316' : '#e7e5e4'
            }}
            strokeWidth={3}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StarProgress;