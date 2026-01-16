import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { Droplets, Sun, Leaf } from 'lucide-react';

interface PlantProgressProps {
  name: string;
  stage?: 'seed' | 'sprout' | 'growing' | 'mature' | 'flowering';
  waterLevel?: number; // 0-100
  sunLevel?: number; // 0-100
  daysOld?: number;
  nextWater?: string;
  image?: string;
}

const stageConfig = {
  seed: { emoji: '🌱', label: 'Seed', progress: 10 },
  sprout: { emoji: '🌿', label: 'Sprout', progress: 25 },
  growing: { emoji: '🪴', label: 'Growing', progress: 50 },
  mature: { emoji: '🌳', label: 'Mature', progress: 75 },
  flowering: { emoji: '🌸', label: 'Flowering', progress: 100 },
};

const PlantProgress: React.FC<PlantProgressProps> = ({
  name,
  stage = 'growing',
  waterLevel = 60,
  sunLevel = 80,
  daysOld = 14,
  nextWater = '2 hours',
  image,
}) => {
  const config = stageConfig[stage];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl border p-5 shadow-sm"
      style={{
        borderColor: '#a7f3d0', // emerald-200
        background: 'linear-gradient(to bottom right, #ecfdf5, #f7fee7)' // emerald-50 to lime-50
      }}
    >
      {/* Plant image or emoji */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 h-16 w-16 rounded-2xl shadow-sm flex items-center justify-center text-4xl border" style={{ backgroundColor: '#ffffff', borderColor: '#d1fae5' }}>
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover rounded-2xl" />
          ) : (
            config.emoji
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-semibold truncate" style={{ color: '#064e3b' }}>{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: '#059669', backgroundColor: '#d1fae5' }}>
              {config.label}
            </span>
            <span className="text-xs" style={{ color: 'rgba(5, 150, 105, 0.7)' }}>{daysOld} days old</span>
          </div>
        </div>
      </div>

      {/* Growth progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium flex items-center gap-1" style={{ color: '#047857' }}>
            <Leaf className="h-3 w-3" />
            Growth
          </span>
          <span className="text-xs font-bold" style={{ color: '#059669' }}>{config.progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: '#d1fae5' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${config.progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(to right, #34d399, #a3e635)' }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3">
        {/* Water */}
        <div className="rounded-xl p-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderColor: '#dbeafe' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg" style={{ backgroundColor: '#dbeafe' }}>
              <Droplets className="h-3.5 w-3.5" style={{ color: '#3b82f6' }} />
            </div>
            <span className="text-xs font-medium" style={{ color: '#1d4ed8' }}>Water</span>
          </div>
          <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: '#dbeafe' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${waterLevel}%` }}
              className={`h-full rounded-full`}
              style={{ backgroundColor: waterLevel < 30 ? '#f87171' : waterLevel < 60 ? '#fbbf24' : '#60a5fa' }}
            />
          </div>
          <span className="text-[10px] text-blue-500 mt-1 block">Next: {nextWater}</span>
        </div>

        {/* Sun */}
        <div className="rounded-xl p-3 border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderColor: '#fef3c7' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg" style={{ backgroundColor: '#fef3c7' }}>
              <Sun className="h-3.5 w-3.5" style={{ color: '#f59e0b' }} />
            </div>
            <span className="text-xs font-medium" style={{ color: '#b45309' }}>Sunlight</span>
          </div>
          <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: '#fef3c7' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${sunLevel}%` }}
              className="h-full rounded-full"
              style={{ backgroundColor: '#fbbf24' }}
            />
          </div>
          <span className="text-[10px] mt-1 block" style={{ color: '#f59e0b' }}>{sunLevel}% today</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PlantProgress;
