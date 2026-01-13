import React from 'react';
import { motion } from 'framer-motion';

interface ZigguratCardProps {
    title: string;
    description: string;
    image: string;
    price?: string;
    action?: string;
    delay?: number;
}

const ZigguratCard: React.FC<ZigguratCardProps> = ({ title, description, image, price, action, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className="group relative bg-[#18181b] border border-[#cda45e]/20 overflow-hidden"
            style={{
                clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
            }}
        >
            {/* Gold Border Overlay using box-shadow doesn't work well with clip-path, so using an inner inset border via a pseudo-element or separate div */}
            <div className="absolute inset-0 border border-[#cda45e]/10 z-10 pointer-events-none" />

            {/* Image Section */}
            <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent z-10 opacity-60" />
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100 ease-out"
                />
                {/* Deco Corner Accent (Top Right) */}
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-[#cda45e]">
                        <path d="M100 0 L100 30 L70 30 L70 60 L40 60 L40 90 L10 100" strokeWidth="1" />
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 relative z-20">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl text-[#f3e5b5] tracking-wide">{title}</h3>
                    {price && <span className="font-mono text-[#cda45e] text-sm uppercase tracking-widest">{price}</span>}
                </div>

                <p className="text-[#a1a1aa] text-sm leading-relaxed font-light mb-8 font-sans">
                    {description}
                </p>

                <button className="w-full py-3 border border-[#cda45e] text-[#cda45e] text-xs uppercase tracking-[0.2em] hover:bg-[#cda45e] hover:text-[#09090b] transition-all duration-300">
                    {action || 'Reserve'}
                </button>
            </div>

            {/* Decorative Gold Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#cda45e] group-hover:w-1/2 transition-all duration-700 ease-out" />
        </motion.div>
    );
};

export default ZigguratCard;
