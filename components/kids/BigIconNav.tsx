import React from 'react';
import { Home, Gamepad2, Image, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const BigIconNav = () => {
  const items = [
    { icon: Home, color: '#f87171', border: '#dc2626', shadow: 'rgba(127,29,29,0.2)' },
    { icon: Gamepad2, color: '#60a5fa', border: '#2563eb', shadow: 'rgba(30,58,138,0.2)' },
    { icon: Image, color: '#facc15', border: '#ca8a04', shadow: 'rgba(113,63,18,0.2)' },
    { icon: Music, color: '#4ade80', border: '#16a34a', shadow: 'rgba(20,83,45,0.2)' },
  ];

  return (
    <div
      className="flex justify-center gap-4 md:gap-8 p-4 backdrop-blur-xl rounded-[3rem] border-4"
      style={{ backgroundColor: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.5)' }}
    >
      {items.map((item, i) => (
        <motion.button
          key={i}
          whileHover={{ y: -10, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-[2rem] border-b-8 border-4 shadow-xl`}
          style={{
            backgroundColor: item.color,
            borderColor: item.border,
            boxShadow: `0 10px 15px -3px ${item.shadow}`,
            color: '#ffffff'
          }}
        >
          <item.icon className="h-8 w-8 md:h-10 md:w-10 stroke-[3px]" />
        </motion.button>
      ))}
    </div>
  );
};

export default BigIconNav;