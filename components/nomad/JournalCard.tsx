import React from 'react';
import { motion } from 'framer-motion';
import { motion as motionTokens } from '@/data/motion';
import { useTheme } from '@/context/ThemeContext';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import PaperTexture from '../ui/PaperTexture';

interface JournalEntry {
    title: string;
    location: string;
    date: string;
    excerpt: string;
    image: string;
    tags: string[];
}

const JournalCard: React.FC<{ entry: JournalEntry; index: number }> = ({ entry, index }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    // Randomize organic radius slightly for each card
    const randomRadiusInitial = [
        '2rem 4rem 2rem 2rem',
        '4rem 2rem 3rem 2rem',
        '2rem 3rem 2rem 4rem'
    ][index % 3];

    // Different shape for hover state to create morphing effect
    const randomRadiusHover = [
        '3rem 2rem 4rem 3rem',
        '2rem 4rem 2rem 3rem',
        '4rem 2rem 3rem 2rem'
    ][index % 3];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: motionTokens.duration.glacial,
                delay: index * 0.1,
                ease: motionTokens.ease.velvet
            }} // Custom easing for "Velvet" feel
            className="group relative flex flex-col md:flex-row gap-8 items-center"
        >
            {/* Image Blob */}
            <div className="w-full md:w-1/2 aspect-[4/3] relative">
                <motion.div
                    className="absolute inset-0 overflow-hidden shadow-lg"
                    initial={{ borderRadius: randomRadiusInitial }}
                    whileHover={{
                        borderRadius: randomRadiusHover,
                        scale: 1.02,
                        transition: { duration: motionTokens.duration.glacial, ease: "easeInOut" }
                    }}
                    style={{
                        // Fallback for SRR or no-js
                        borderRadius: randomRadiusInitial
                    }}
                >
                    <img src={entry.image} alt={entry.title} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-[#f5f5f0] opacity-20 mix-blend-multiply pointer-events-none" /> {/* Paper Tint */}
                    <PaperTexture opacity={0.3} className="mix-blend-overlay" />
                </motion.div>

                {/* Floating Tag */}
                <motion.div
                    className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md text-xs font-bold tracking-widest uppercase text-stone-600 border border-stone-200"
                    animate={{
                        y: [0, -5, 0],
                        rotate: [3, 0, 3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                    }}
                >
                    {entry.tags[0]}
                </motion.div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4 relative">
                <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase" style={{ color: theme.colors.primary }}>
                    <Calendar size={14} />
                    <span>{entry.date}</span>
                </div>

                <h3 className="text-4xl font-serif leading-tight group-hover:text-stone-600 transition-colors cursor-pointer">
                    {entry.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-stone-500 font-medium">
                    <MapPin size={16} />
                    {entry.location}
                </div>

                <div className="relative">
                    <p className="text-lg text-stone-600 font-serif leading-relaxed opacity-80 relative z-10">
                        {entry.excerpt}
                    </p>
                    {/* Decorative quote mark behind text */}
                    <div className="absolute -top-4 -left-4 text-6xl text-stone-200 font-serif opacity-50 z-0">
                        &ldquo;
                    </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-stone-900 transition-all pt-4 group/btn">
                    Read Journal
                    <motion.span
                        animate={{ x: 0, y: 0 }}
                        whileHover={{ x: 2, y: -2 }}
                    >
                        <ArrowUpRight size={16} />
                    </motion.span>
                </button>
            </div>
        </motion.div>
    );
};

export default JournalCard;
