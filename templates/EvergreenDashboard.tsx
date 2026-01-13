import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import OrganicContainer from '../components/evergreen/OrganicContainer';
import ImpactMetric from '../components/evergreen/ImpactMetric';
import GrowthChart from '../components/evergreen/GrowthChart';
import LeafCard from '../components/evergreen/LeafCard';
import DNASpiral from '../components/evergreen/DNASpiral';
import OrganicButton from '../components/evergreen/OrganicButton';
import { Sprout, Scan, Droplets, Sun } from 'lucide-react';

const EvergreenDashboard: React.FC = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <div className="min-h-screen bg-[#fdfcf8] text-[#1a2e1a] overflow-x-hidden relative font-sans selection:bg-[#fbbf24] selection:text-[#1a2e1a]" ref={containerRef}>

            {/* Ambient Light / Noise */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply z-50" />
            <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#fbbf24] rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-multiply" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#064e3b] rounded-full blur-[100px] opacity-10 pointer-events-none mix-blend-multiply" />

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full p-6 z-40 flex justify-between items-center bg-[#fdfcf8]/80 backdrop-blur-md border-b border-[#c3bca8]/20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#064e3b] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#064e3b]/20">
                        <Sprout size={20} />
                    </div>
                    <span className="font-serif font-black text-xl italic tracking-tight">Eden<span className="text-[#064e3b]">OS</span></span>
                </div>
                <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-[#8f9e8a]">
                    <a href="#" className="hover:text-[#064e3b] transition-colors">Ecosystem</a>
                    <a href="#" className="hover:text-[#064e3b] transition-colors">Species</a>
                    <a href="#" className="hover:text-[#064e3b] transition-colors">Genetics</a>
                    <a href="#" className="hover:text-[#064e3b] transition-colors">Climate</a>
                </div>
                <OrganicButton variant="outline" className="text-xs py-2 px-4 h-auto">
                    Connect Sensor
                </OrganicButton>
            </nav>

            <main className="max-w-[1600px] mx-auto pt-32 px-6 pb-20 relative z-10">

                {/* Hero Section */}
                <motion.div style={{ y: y1 }} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-[1px] w-12 bg-[#fbbf24]" />
                            <span className="text-[#fbbf24] font-bold uppercase tracking-widest text-xs">Biophilic Restoration System v4.0</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif text-[#1a2e1a] leading-[0.9]">
                            Canopy <span className="text-[#064e3b] italic">Control</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-[#8f9e8a] text-lg font-medium leading-relaxed">
                            Managing 12,400 protected acres. Real-time monitoring of soil composition, genetic diversity, and atmospheric carbon capture.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-center p-4 bg-white/50 rounded-2xl border border-[#c3bca8]/30 backdrop-blur-sm">
                            <div className="text-3xl font-black text-[#064e3b]">24°C</div>
                            <div className="text-[10px] uppercase tracking-wider text-[#8f9e8a]">Ambient</div>
                        </div>
                        <div className="text-center p-4 bg-white/50 rounded-2xl border border-[#c3bca8]/30 backdrop-blur-sm">
                            <div className="text-3xl font-black text-[#064e3b]">88%</div>
                            <div className="text-[10px] uppercase tracking-wider text-[#8f9e8a]">Humidity</div>
                        </div>
                    </div>
                </motion.div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-12 gap-6">

                    {/* Column 1: Core Metrics & Growth */}
                    <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                        {/* Metrics Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ImpactMetric icon="tree" label="Reforestation" value="92%" trend="Active" delay={0.1} />
                            <ImpactMetric icon="air" label="Carbon Capture" value="450t" trend="+12%" delay={0.2} />
                            <ImpactMetric icon="leaf" label="Bio-Density" value="High" delay={0.3} />
                        </div>

                        {/* Main Chart Card */}
                        <div className="relative group min-h-[400px]">
                            <GrowthChart />
                        </div>
                    </div>

                    {/* Column 2: Genetics */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                        <div className="h-full min-h-[500px]">
                            <DNASpiral />
                        </div>
                    </div>

                    {/* Full Width: Specimen Collection */}
                    <div className="col-span-12 mt-12">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-serif italic text-[#1a2e1a]">Verified Specimens</h2>
                            <OrganicButton variant="secondary" icon={<Scan size={16} />}>Scan New Sample</OrganicButton>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <LeafCard
                                scientificName="Monstera deliciosa"
                                commonName="Swiss Cheese Plant"
                                image="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600&auto=format&fit=crop"
                                stats={[{ label: 'Age', value: '4y' }, { label: 'Health', value: 'Optimal' }]}
                                index={0}
                            />
                            <LeafCard
                                scientificName="Ficus lyrata"
                                commonName="Fiddle Leaf Fig"
                                image="https://images.unsplash.com/photo-1617173944883-66f74ad9c77c?q=80&w=600&auto=format&fit=crop"
                                stats={[{ label: 'Age', value: '2y' }, { label: 'Health', value: 'Good' }]}
                                index={1}
                            />
                            <LeafCard
                                scientificName="Calathea orbifolia"
                                commonName="Prayer Plant"
                                image="https://images.unsplash.com/photo-1721330058852-c06db1a03e1a?q=80&w=600&auto=format&fit=crop"
                                stats={[{ label: 'Age', value: '1y' }, { label: 'Health', value: 'Sensitive' }]}
                                index={2}
                            />
                            <div className="group rounded-[24px_8px_24px_8px] border-2 border-dashed border-[#c3bca8] flex flex-col items-center justify-center p-8 bg-[#fdfcf8] hover:bg-white hover:border-[#064e3b] transition-all cursor-pointer min-h-[300px]">
                                <div className="w-16 h-16 rounded-full bg-[#f4f1ea] flex items-center justify-center text-[#c3bca8] group-hover:bg-[#064e3b] group-hover:text-white transition-colors mb-4">
                                    <Scan size={24} />
                                </div>
                                <div className="font-serif font-bold text-[#1a2e1a]">Add Specimen</div>
                                <div className="text-xs uppercase tracking-widest text-[#8f9e8a] mt-1">Manual Entry</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EvergreenDashboard;
