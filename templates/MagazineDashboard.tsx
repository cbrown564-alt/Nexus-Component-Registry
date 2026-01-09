import React from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, User } from 'lucide-react';
import FeatureStory from '../components/magazine/FeatureStory';
import TrendingList from '../components/magazine/TrendingList';
import Newsletter from '../components/magazine/Newsletter';
import MagazineCard from '../components/magazine/MagazineCard';

const MagazineDashboard = () => {
    return (
        <div className="container mx-auto min-h-screen max-w-[1400px] p-6 lg:p-12 font-sans text-neutral-900 bg-[#fdfbf7]">

            {/* Editorial Header */}
            <header className="mb-16 border-b-2 border-black pb-6">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
                        <span className="cursor-pointer hover:text-neutral-500">News</span>
                        <span className="cursor-pointer hover:text-neutral-500">Culture</span>
                        <span className="cursor-pointer hover:text-neutral-500">Design</span>
                        <span className="cursor-pointer hover:text-neutral-500">Tech</span>
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-medium text-neutral-500">Thursday, October 24, 2024</div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center relative"
                >
                    <h1 className="font-serif text-[5rem] leading-none tracking-tight lg:text-[8rem]">
                        THE EDIT
                    </h1>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block">
                        <span className="font-serif italic text-xl text-neutral-400">Vol. 24</span>
                    </div>
                </motion.div>
            </header>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                {/* Left Column: Feature Story */}
                <div className="lg:col-span-8">
                    <FeatureStory />

                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                        {[
                            { title: "The Art of Slow Living in a Fast World", img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600" },
                            { title: "Digital Nomads & The New City State", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600" }
                        ].map((item, i) => (
                            <MagazineCard key={i} className="border-0 bg-transparent group cursor-pointer" hoverEffect={false} noPadding={true}>
                                <div className="overflow-hidden mb-4 h-64 w-full">
                                    <img src={item.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Editor's Pick</span>
                                <h3 className="mt-2 font-serif text-2xl leading-tight group-hover:text-neutral-600 transition-colors">
                                    {item.title}
                                </h3>
                            </MagazineCard>
                        ))}
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <div className="lg:col-span-4 space-y-12">
                    <TrendingList />

                    <Newsletter />

                    {/* Quote of the day */}
                    <MagazineCard className="bg-neutral-100 border-none text-center py-12 px-8">
                        <span className="text-4xl font-serif text-neutral-300">"</span>
                        <p className="font-serif text-xl italic leading-relaxed text-neutral-800">
                            Design is not just what it looks like and feels like. Design is how it works.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="h-px w-8 bg-neutral-400" />
                        </div>
                        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-neutral-500">Steve Jobs</p>
                    </MagazineCard>
                </div>

            </div>

            {/* Visual Footer Divider */}
            <div className="mt-24 border-t-2 border-black pt-8 flex justify-between items-center">
                <span className="font-serif text-2xl">THE EDIT</span>
                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-500">
                    <a href="#" className="hover:text-black">Instagram</a>
                    <a href="#" className="hover:text-black">Twitter</a>
                    <a href="#" className="hover:text-black">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default MagazineDashboard;