import React from 'react';
import { Wind } from 'lucide-react';
import SolarCard from './SolarCard';
import { motion } from 'framer-motion';

const AirQualityLeaf = () => {
  const aqi = 24; // Good

  return (
    <SolarCard className="p-6 h-full">
      <div className="flex justify-between items-start mb-4">
          <div>
              <h3 className="font-serif text-xl text-emerald-900">Air Quality</h3>
              <p className="text-sm text-emerald-600">Local Sensor #4</p>
          </div>
          <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
              <Wind className="w-5 h-5" />
          </div>
      </div>

      <div className="flex items-center gap-8">
          <div className="relative w-32 h-32 shrink-0">
              {/* Leaf Shape SVG Mask */}
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  <defs>
                      <linearGradient id="leafGradient" x1="0" x2="0" y1="1" y2="0">
                          <stop offset="0%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                      <mask id="leafMask">
                          <path d="M50 95 C 20 95, 0 60, 0 40 C 0 15, 25 0, 50 0 C 75 0, 100 15, 100 40 C 100 60, 80 95, 50 95 Z" fill="white" />
                      </mask>
                  </defs>
                  
                  {/* Background */}
                  <path d="M50 95 C 20 95, 0 60, 0 40 C 0 15, 25 0, 50 0 C 75 0, 100 15, 100 40 C 100 60, 80 95, 50 95 Z" fill="#e2e8f0" />
                  
                  {/* Progress Fill */}
                  <motion.rect 
                    x="0" 
                    y="0" 
                    width="100" 
                    height="100" 
                    fill="url(#leafGradient)" 
                    mask="url(#leafMask)"
                    initial={{ y: 100 }}
                    animate={{ y: 100 - (100 - aqi) }} // Invert logic for visualization
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  {/* Veins overlay */}
                  <path d="M50 95 Q 50 50 50 5 M 50 70 Q 20 50 15 30 M 50 60 Q 80 40 85 20 M 50 40 Q 30 25 25 15" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" pointerEvents="none" />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center pt-2">
                  <span className="font-serif text-2xl font-bold text-white drop-shadow-md">{aqi}</span>
              </div>
          </div>

          <div className="space-y-3 flex-1">
              <div className="flex justify-between text-sm items-center">
                  <span className="text-emerald-700">PM2.5</span>
                  <span className="font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">4 µg/m³</span>
              </div>
              <div className="flex justify-between text-sm items-center">
                  <span className="text-emerald-700">Humidity</span>
                  <span className="font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">42%</span>
              </div>
              <div className="flex justify-between text-sm items-center">
                  <span className="text-emerald-700">CO2</span>
                  <span className="font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full">410 ppm</span>
              </div>
          </div>
      </div>
    </SolarCard>
  );
};

export default AirQualityLeaf;