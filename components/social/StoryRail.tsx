import React from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const StoryRail = () => {
  const stories = [
    { name: 'You', img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150', isUser: true },
    { name: 'Sarah', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', seen: false },
    { name: 'Design Daily', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', seen: false },
    { name: 'Tech Insider', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150', seen: true },
    { name: 'Alex M.', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150', seen: false },
    { name: 'Jessica', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150', seen: true },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide">
      {stories.map((story, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <div className={`relative p-[3px] rounded-full ${story.isUser
              ? 'border-none'
              : story.seen
                ? ''
                : 'bg-gradient-to-tr from-sky-500 to-indigo-500'
            }`}
            style={!story.isUser && story.seen ? { backgroundColor: '#3f3f46' } : undefined}
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2" style={{ borderColor: '#09090b' }}>
              <img src={story.img} alt={story.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              {story.isUser && (
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <Plus className="h-6 w-6" style={{ color: '#ffffff' }} />
                </div>
              )}
            </div>
          </div>
          <span className="text-xs font-medium transition-colors" style={{ color: '#a1a1aa' }}>
            {story.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default StoryRail;