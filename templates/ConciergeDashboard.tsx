import React from 'react';
import { motion } from 'framer-motion';
import ZigguratCard from '../components/concierge/ZigguratCard';
import MarqueeNav from '../components/concierge/MarqueeNav';
import SunburstLoader from '../components/concierge/SunburstLoader';
import { Bell, Key, Map, Star } from 'lucide-react';

const ConciergeDashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-[#cda45e] selection:text-[#09090b] overflow-x-hidden">

            {/* Top Marquee */}
            <MarqueeNav />

            {/* Header / Hero */}
            <header className="py-20 text-center relative max-w-4xl mx-auto px-6">
                {/* Decorative Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                    <SunburstLoader />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-[#cda45e] text-xs uppercase tracking-[0.3em] mb-4">The Grand Hotel</div>
                    <h1 className="font-serif text-6xl md:text-8xl text-[#f3e5b5] mb-6">Concierge</h1>
                    <p className="text-[#a1a1aa] text-lg font-light max-w-lg mx-auto leading-relaxed">
                        Curated experiences tailored to your preferences. Select a service below or contact the desk for immediate assistance.
                    </p>
                </motion.div>
            </header>

            {/* Service Grid */}
            <main className="max-w-[1400px] mx-auto px-6 pb-20">

                {/* Section Title */}
                <div className="flex items-center justify-center gap-4 mb-16 opacity-50">
                    <div className="h-[1px] w-20 bg-[#cda45e]" />
                    <div className="w-2 h-2 rotate-45 bg-[#cda45e]" />
                    <div className="h-[1px] w-20 bg-[#cda45e]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <ZigguratCard
                        title="Private Dining"
                        description="Exclusive tasting menu by Chef Laurent. Reservations required."
                        image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop"
                        price="$$$$"
                        action="Request Table"
                        delay={0.1}
                    />
                    <ZigguratCard
                        title="Spa & Wellness"
                        description="Rejuvenate with our signature Gold Leaf facial and massage therapies."
                        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
                        price="$$$"
                        action="Book Session"
                        delay={0.2}
                    />
                    <ZigguratCard
                        title="City Chauffeur"
                        description="Personal driver service for theater, shopping, and airport transfers."
                        image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop"
                        price="$$$"
                        action="Schedule Ride"
                        delay={0.3}
                    />
                </div>

                {/* Secondary Actions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        { icon: Bell, label: "Room Service" },
                        { icon: Key, label: "Valet" },
                        { icon: Map, label: "Guide" },
                        { icon: Star, label: "Upgrades" },
                    ].map((item, i) => (
                        <div key={i} className="group border border-[#cda45e]/20 bg-[#18181b] p-6 flex flex-col items-center justify-center gap-4 hover:border-[#cda45e] transition-colors cursor-pointer">
                            <item.icon className="text-[#cda45e] group-hover:scale-110 transition-transform" size={24} strokeWidth={1} />
                            <span className="text-[#f4f4f5] text-xs uppercase tracking-widest">{item.label}</span>
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
};

export default ConciergeDashboard;
