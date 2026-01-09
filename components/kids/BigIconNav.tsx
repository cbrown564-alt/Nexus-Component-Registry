import React from 'react';
import { Home, Gamepad2, Image, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const BigIconNav = () => {
  const items = [
    { icon: Home, color: 'bg-red-400', border: 'border-red-600', shadow: 'shadow-red-900/20' },
    { icon: Gamepad2, color: 'bg-blue-400', border: 'border-blue-600', shadow: 'shadow-blue-900/20' },
    { icon: Image, color: 'bg-yellow-400', border: 'border-yellow-600', shadow: 'shadow-yellow-900/20' },
    { icon: Music, color: 'bg-green-400', border: 'border-green-600', shadow: 'shadow-green-900/20' },
  ];

  return (
    <div className="flex justify-center gap-4 md:gap-8 p-4 bg-white/30 backdrop-blur-xl rounded-[3rem] border-4 border-white/50">
      {items.map((item, i) => (
        <motion.button
          key={i}
          whileHover={{ y: -10, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-[2rem] border-b-8 border-4 ${item.border} ${item.color} text-white shadow-xl ${item.shadow}`}
        >
          <item.icon className="h-8 w-8 md:h-10 md:w-10 stroke-[3px]" />
        </motion.button>
      ))}
    </div>
  );
};

export default BigIconNav;