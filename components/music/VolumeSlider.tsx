import React, { useState } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { motion } from 'framer-motion';

interface VolumeSliderProps {
  initialVolume?: number;
  onVolumeChange?: (volume: number) => void;
  className?: string;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({
  initialVolume = 70,
  onVolumeChange,
  className = "",
}) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    setIsMuted(false);
    onVolumeChange?.(newVolume);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    onVolumeChange?.(isMuted ? volume : 0);
  };

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 50 ? Volume1 : Volume2;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className="transition-colors"
        style={{ color: '#a1a1aa' }} // zinc-400
        whileHover={{ color: '#ffffff' }}
      >
        <VolumeIcon className="h-5 w-5" />
      </motion.button>
      <div className="relative w-24 group">
        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
          <div className="w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: '#3f3f46' }}>
            <motion.div
              className="h-full"
              style={{
                width: `${isMuted ? 0 : volume}%`,
                background: 'linear-gradient(to right, #d946ef, #a855f7)'
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            left: `calc(${isMuted ? 0 : volume}% - 6px)`,
            backgroundColor: '#ffffff'
          }}
        />
      </div>
      <span className="text-xs w-8 text-right font-mono" style={{ color: '#71717a' }}>
        {isMuted ? 0 : volume}
      </span>
    </div>
  );
};

export default VolumeSlider;
