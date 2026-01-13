import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { BedDouble, Bath, Square, MapPin, ArrowRight } from 'lucide-react';

const EstateHero = () => {
    const { currentPlaygroundTheme: theme } = useTheme();

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Cinematic Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1600596542815-e32c2159f828?auto=format&fit=crop&q=80&w=2000"
            >
                <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                {/* Fallback to image if video fails or on low-power mode */}
            </video>

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            {/* Navigation Overlay (Minimal) */}
            <nav className="absolute top-0 left-0 w-full p-8 md:p-12 flex justify-between items-center z-20 text-white">
                <h1 className="text-2xl font-serif font-bold tracking-tight">LUXE<span className="text-stone-300">ESTATE</span></h1>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
                    <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Buying</a>
                    <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Selling</a>
                    <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Journal</a>
                </div>
            </nav>

            {/* Main Content */}
            <div className="absolute inset-0 flex flex-col justify-end pb-32 px-8 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl text-white"
                >
                    <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-xs font-serif uppercase tracking-widest border border-white/30">Just Listed</span>
                        <div className="flex items-center gap-1 text-sm font-sans tracking-wide opacity-80">
                            <MapPin size={14} />
                            <span>1428 Highland Ave, Los Angeles</span>
                        </div>
                    </div>

                    <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-6">
                        The Highland Loft
                    </h2>

                    <div className="text-3xl md:text-4xl font-light font-serif tracking-wide opacity-90">
                        $2,450,000
                    </div>
                </motion.div>
            </div>

            {/* Glassmorphic Spec Sheet (Slide-Up Panel) */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 right-0 w-full md:w-auto md:max-w-xl bg-white/10 backdrop-blur-xl border-t border-l border-white/20 p-8 md:p-12 text-white"
            >
                <div className="grid grid-cols-3 gap-8 md:gap-12 mb-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-widest opacity-60">Bedrooms</span>
                        <div className="flex items-baseline gap-2">
                            <BedDouble size={20} className="opacity-80" />
                            <span className="text-2xl font-serif">3</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-widest opacity-60">Bathrooms</span>
                        <div className="flex items-baseline gap-2">
                            <Bath size={20} className="opacity-80" />
                            <span className="text-2xl font-serif">3.5</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-widest opacity-60">Living Area</span>
                        <div className="flex items-baseline gap-2">
                            <Square size={20} className="opacity-80" />
                            <span className="text-2xl font-serif">2,800</span>
                        </div>
                    </div>
                </div>

                <button className="w-full py-4 bg-white text-black font-sans font-medium tracking-widest uppercase hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 group">
                    Schedule Viewing
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
            </motion.div>
        </div>
    );
};

export default EstateHero;
