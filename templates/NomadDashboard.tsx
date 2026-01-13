import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import JournalCard from '../components/nomad/JournalCard';
import PaperTexture from '../components/ui/PaperTexture';
import { Compass, Wind, Map as MapIcon } from 'lucide-react';

const NomadDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: containerRef });

    React.useEffect(() => {
        setPlaygroundTheme('nomad');
    }, []);

    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const entries = [
        {
            title: "The Kyoto Gardens",
            location: "Kyoto, Japan",
            date: "Oct 12",
            excerpt: "Walking through the bamboo groves at dawn, the air was thick with mist and silence. A perfect start to the eastern leg of the journey.",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
            tags: ["Nature", "Silence"]
        },
        {
            title: "High Atlas Trek",
            location: "Atlas Mountains, Morocco",
            date: "Nov 03",
            excerpt: "The red earth contrasts violently with the blue sky. We drank mint tea with a local family who showed us the ancient irrigation channels.",
            image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800",
            tags: ["Adventure", "Culture"]
        },
        {
            title: "Pacific Coast Highway",
            location: "Big Sur, California",
            date: "Dec 15",
            excerpt: "Driving the edge of the world. The fog rolls in and out, revealing cliffs that drop sheer into the churning ocean below.",
            image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800",
            tags: ["Road Trip", "Ocean"]
        }
    ];

    return (
        <div
            ref={containerRef}
            className="h-screen overflow-y-auto overflow-x-hidden"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily,
            }}
        >
            <PaperTexture opacity={0.15} className="fixed inset-0 z-0 pointer-events-none mix-blend-multiply" />

            {/* Navigation */}
            <div className="fixed top-0 left-0 right-0 p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
                <div className="font-bold tracking-widest uppercase text-xl">NOMAD.</div>
                <div className="flex gap-6 text-xs font-bold tracking-[0.2em] uppercase">
                    <span className="opacity-60 hover:opacity-100 cursor-pointer">Journal</span>
                    <span className="opacity-60 hover:opacity-100 cursor-pointer">Map</span>
                    <span className="opacity-60 hover:opacity-100 cursor-pointer">About</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <p className="text-xs font-bold tracking-[0.5em] uppercase mb-6 text-stone-200">The Eco-Journal</p>
                        <h1 className="text-7xl md:text-9xl font-serif mb-8 leading-none">Wander<br />Lust.</h1>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center gap-12"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                                <Compass size={20} />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest opacity-80">Explore</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                                <Wind size={20} />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest opacity-80">Breathe</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                                <MapIcon size={20} />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest opacity-80">Locate</span>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-[10px] tracking-[0.3em] uppercase opacity-60"
                >
                    Scroll to Discover
                </motion.div>
            </div>

            {/* Content Stream */}
            <div className="max-w-5xl mx-auto px-6 py-32 space-y-32">
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <h2 className="text-3xl font-serif italic mb-4 text-stone-500">
                        "Not all those who wander are lost."
                    </h2>
                    <div className="w-24 h-1 bg-stone-300 mx-auto rounded-full" />
                </div>

                {entries.map((entry, i) => (
                    <JournalCard key={i} entry={entry} index={i} />
                ))}

                {/* Footer Mark */}
                <div className="pt-32 pb-12 text-center opacity-30">
                    <div className="text-4xl font-serif">N.</div>
                </div>
            </div>
        </div>
    );
};

export default NomadDashboard;
