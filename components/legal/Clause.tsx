import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';

interface ClauseProps {
  number: string;
  title?: string;
  children: React.ReactNode;
  isActive?: boolean;
  hasComment?: boolean;
  onClick?: () => void;
}

const Clause: React.FC<ClauseProps> = ({ 
  number, 
  title, 
  children, 
  isActive = false, 
  hasComment = false,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative mb-6 transition-colors duration-200 rounded-md p-2 -ml-2 cursor-text ${
        isActive ? 'bg-blue-50/50' : 'hover:bg-stone-50'
      }`}
    >
      {/* Paragraph Number */}
      <div className="absolute -left-12 top-2.5 font-mono text-xs text-stone-400 w-8 text-right group-hover:text-stone-600">
        {number}
      </div>

      {/* Hover Action */}
      <button className="absolute -right-8 top-2 opacity-0 group-hover:opacity-100 text-stone-400 hover:text-blue-600 transition-all">
        <MessageSquarePlus className="h-4 w-4" />
      </button>

      {/* Comment Indicator */}
      {hasComment && (
        <div className="absolute -right-3 top-3 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-white" />
      )}

      {title && (
        <h3 className="mb-2 font-bold text-sm uppercase tracking-wide text-stone-900">
          {title}
        </h3>
      )}
      
      <div className="text-sm leading-relaxed text-stone-800 font-serif text-justify">
        {children}
      </div>
    </div>
  );
};

export default Clause;