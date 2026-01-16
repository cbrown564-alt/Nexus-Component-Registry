import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';

interface LeafCardProps {
    scientificName: string;
    commonName: string;
    image: string;
    stats: { label: string; value: string }[];
    index?: number;
}

const LeafCard: React.FC<LeafCardProps> = ({ scientificName, commonName, image, stats, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden bg-white/40 backdrop-blur-sm border border-[#c3bca8]/50 hover:bg-white/60 transition-all duration-500"
            style={{
                borderRadius: '24px 8px 24px 8px', // Asymmetric leaf-like shape
                boxShadow: '0 10px 30px -10px rgba(6, 78, 59, 0.1)'
            }}
        >
            {/* Texture Overlay (Veins) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

            {/* Image Section */}
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                    src={image}
                    alt={commonName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Floating Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#064e3b] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-20">
                    Specimen 0{index + 1}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 relative">
                <h3 className="font-serif text-2xl text-[#064e3b] italic leading-tight mb-1">
                    {scientificName}
                </h3>
                <p className="text-[#8f9e8a] text-xs font-bold uppercase tracking-widest mb-6">
                    {commonName}
                </p>

                {/* Grid Stats */}
                <div className="grid grid-cols-2 gap-4 border-t border-[#064e3b]/10 pt-4">
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div className="text-[10px] text-[#8f9e8a] uppercase tracking-wider mb-1">{stat.label}</div>
                            <div className="text-[#1a2e1a] font-serif font-bold text-lg">{stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 text-[#dfae7e] opacity-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2L12 22 M12 22 Q 6 16 6 10 M12 22 Q 18 16 18 10" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default LeafCard;
