import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, User, Bookmark, Share2, Heart, Clock, ArrowRight, ChevronRight, X } from 'lucide-react';
import FeatureStory from '../components/magazine/FeatureStory';
import TrendingList from '../components/magazine/TrendingList';
import Newsletter from '../components/magazine/Newsletter';
import MagazineCard from '../components/magazine/MagazineCard';
import EditorialButton from '../components/magazine/EditorialButton';

const MagazineDashboard = () => {
    const [activeSection, setActiveSection] = useState('All');
    const [savedArticle, setSavedArticle] = useState<number | null>(null);

    const sections = ['All', 'Culture', 'Design', 'Architecture', 'Technology', 'Lifestyle'];

    const editorsPicks = [
        {
            title: "The Art of Slow Living in a Fast World",
            img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600",
            category: "Lifestyle",
            readTime: "8 min read"
        },
        {
            title: "Digital Nomads & The New City State",
            img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600",
            category: "Culture",
            readTime: "12 min read"
        },
        {
            title: "Material Innovation in Modern Ceramics",
            img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600",
            category: "Design",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="min-h-screen font-sans text-neutral-900 bg-[#fdfbf7]">

            {/* Masthead Header */}
            <header className="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-sm border-b border-neutral-200">
                <div className="container mx-auto max-w-[1400px] px-6 lg:px-12">
                    {/* Top bar */}
                    <div className="flex items-center justify-between py-3 border-b border-neutral-100">
                        <div className="text-xs font-medium text-neutral-500">Thursday, October 24, 2024</div>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                            <button className="hover:text-neutral-500 transition-colors">Subscribe</button>
                            <button className="hover:text-neutral-500 transition-colors">Sign In</button>
                        </div>
                    </div>

                    {/* Masthead */}
                    <div className="py-6 text-center relative">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-serif text-5xl lg:text-7xl tracking-tight"
                        >
                            THE EDIT
                        </motion.h1>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block">
                            <span className="font-serif italic text-lg text-neutral-400">Vol. 24</span>
                        </div>
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:flex items-center gap-2">
                            <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                                <Search className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Section Navigation */}
                    <nav className="flex items-center justify-center gap-1 pb-4 overflow-x-auto scrollbar-hide">
                        {sections.map((section) => (
                            <motion.button
                                key={section}
                                onClick={() => setActiveSection(section)}
                                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${activeSection === section ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'
                                    }`}
                                whileHover={{ y: -1 }}
                                whileTap={{ y: 0 }}
                            >
                                {section}
                                {activeSection === section && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="container mx-auto max-w-[1400px] px-6 lg:px-12 py-12">

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                    {/* Left Column: Feature Story & Editor's Picks */}
                    <div className="lg:col-span-8 space-y-12">
                        <FeatureStory />

                        {/* Reading Progress Indicator */}
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-px bg-neutral-200" />
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Editor's Picks</span>
                            <div className="flex-1 h-px bg-neutral-200" />
                        </div>

                        {/* Editor's Picks Grid */}
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {editorsPicks.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative overflow-hidden mb-4 aspect-[4/5] w-full">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSavedArticle(savedArticle === i ? null : i);
                                            }}
                                            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
                                        >
                                            <Bookmark className={`h-4 w-4 ${savedArticle === i ? 'fill-black' : ''}`} />
                                        </motion.button>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{item.category}</span>
                                        <span className="text-neutral-300">·</span>
                                        <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            {item.readTime}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-xl leading-tight group-hover:text-neutral-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <EditorialButton variant="link" className="mt-3 text-sm">
                                        Read Article
                                    </EditorialButton>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4 space-y-10">
                        <TrendingList />

                        <Newsletter />

                        {/* Quote of the day */}
                        <MagazineCard className="bg-neutral-100 border-none text-center py-12 px-8">
                            <span className="text-6xl font-serif text-neutral-200 leading-none">"</span>
                            <p className="font-serif text-xl italic leading-relaxed text-neutral-800 -mt-6">
                                Design is not just what it looks like and feels like. Design is how it works.
                            </p>
                            <div className="mt-6 flex justify-center">
                                <div className="h-px w-12 bg-neutral-300" />
                            </div>
                            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Steve Jobs</p>
                        </MagazineCard>

                        {/* Related Topics */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Explore Topics</h3>
                            <div className="flex flex-wrap gap-2">
                                {['Minimalism', 'Sustainability', 'Typography', 'Urban Planning', 'Craftsmanship', 'Innovation'].map((topic) => (
                                    <motion.button
                                        key={topic}
                                        whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 border border-neutral-300 text-xs font-bold uppercase tracking-wider transition-colors hover:border-black"
                                    >
                                        {topic}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Long-form Feature (Full Width) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 pt-12 border-t-2 border-black"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest">Long Read</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
                                alt="Architecture"
                                className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="lg:pr-12">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Architecture</span>
                            <h2 className="mt-3 font-serif text-4xl leading-tight">
                                The Quiet Revolution: How Biophilic Design is Reshaping Our Cities
                            </h2>
                            <p className="mt-6 text-lg text-neutral-600 leading-relaxed font-serif">
                                From Singapore's supertrees to Milan's vertical forests, architects are weaving
                                nature back into the urban fabric. We explore the movement that's redefining
                                what it means to live in harmony with our environment.
                            </p>
                            <div className="mt-8 flex items-center gap-4">
                                <EditorialButton variant="primary">
                                    Read the Full Story
                                </EditorialButton>
                                <span className="text-sm text-neutral-400 flex items-center gap-1.5">
                                    <Clock className="h-4 w-4" />
                                    18 min read
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>

            {/* Footer */}
            <footer className="border-t-2 border-black mt-20">
                <div className="container mx-auto max-w-[1400px] px-6 lg:px-12 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div>
                            <span className="font-serif text-3xl">THE EDIT</span>
                            <p className="mt-2 text-sm text-neutral-500 max-w-xs">
                                Curating the intersection of design, culture, and ideas since 2020.
                            </p>
                        </div>
                        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-500">
                            <a href="#" className="hover:text-black transition-colors">About</a>
                            <a href="#" className="hover:text-black transition-colors">Contact</a>
                            <a href="#" className="hover:text-black transition-colors">Instagram</a>
                            <a href="#" className="hover:text-black transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MagazineDashboard;