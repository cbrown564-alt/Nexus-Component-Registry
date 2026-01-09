import React from 'react';
import { motion } from 'framer-motion';

interface LegalPaperProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const LegalPaper: React.FC<LegalPaperProps> = ({ 
  children, 
  className = "",
  title
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative mx-auto max-w-[850px] bg-white shadow-xl shadow-stone-200 border border-stone-200 min-h-[1100px] ${className}`}
    >
      {/* Hole punches */}
      <div className="absolute left-4 top-8 h-4 w-4 rounded-full bg-stone-100 shadow-inner" />
      <div className="absolute left-4 top-1/2 h-4 w-4 rounded-full bg-stone-100 shadow-inner" />
      <div className="absolute left-4 bottom-8 h-4 w-4 rounded-full bg-stone-100 shadow-inner" />

      {/* Red margin line */}
      <div className="absolute left-16 top-0 bottom-0 w-px bg-red-200" />

      <div className="pl-24 pr-12 py-16">
        {title && (
          <div className="mb-12 text-center">
            <h1 className="font-serif text-2xl font-bold uppercase tracking-widest text-stone-900 border-b-2 border-stone-900 pb-2 inline-block">
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default LegalPaper;