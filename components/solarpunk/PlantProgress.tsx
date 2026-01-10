import React from 'react';
import { motion } from 'framer-motion';
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
      className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-lime-50 p-5 shadow-sm"
    >
      {/* Plant image or emoji */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-4xl border border-emerald-100">
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover rounded-2xl" />
          ) : (
            config.emoji
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-semibold text-emerald-900 truncate">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
              {config.label}
            </span>
            <span className="text-xs text-emerald-600/70">{daysOld} days old</span>
          </div>
        </div>
      </div>

      {/* Growth progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-emerald-700 flex items-center gap-1">
            <Leaf className="h-3 w-3" />
            Growth
          </span>
          <span className="text-xs font-bold text-emerald-600">{config.progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-emerald-100 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${config.progress}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-400"
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3">
        {/* Water */}
        <div className="rounded-xl bg-white/70 p-3 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-blue-100">
              <Droplets className="h-3.5 w-3.5 text-blue-500" />
            </div>
            <span className="text-xs font-medium text-blue-700">Water</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-blue-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${waterLevel}%` }}
              className={`h-full rounded-full ${
                waterLevel < 30 ? 'bg-red-400' : waterLevel < 60 ? 'bg-amber-400' : 'bg-blue-400'
              }`}
            />
          </div>
          <span className="text-[10px] text-blue-500 mt-1 block">Next: {nextWater}</span>
        </div>

        {/* Sun */}
        <div className="rounded-xl bg-white/70 p-3 border border-amber-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-amber-100">
              <Sun className="h-3.5 w-3.5 text-amber-500" />
            </div>
            <span className="text-xs font-medium text-amber-700">Sunlight</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-amber-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${sunLevel}%` }}
              className="h-full rounded-full bg-amber-400"
            />
          </div>
          <span className="text-[10px] text-amber-500 mt-1 block">{sunLevel}% today</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PlantProgress;
