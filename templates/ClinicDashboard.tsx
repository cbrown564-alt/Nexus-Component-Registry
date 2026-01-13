import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import AppointmentCard from '../components/clinic/AppointmentCard';
import BioViz from '../components/clinic/BioViz';

const ClinicDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    React.useEffect(() => {
        setPlaygroundTheme('clinic');
    }, []);

    const upcomingAppointment = {
        id: '1',
        provider: 'Sarah Chen',
        specialty: 'Concierge Medicine',
        date: 'Jan 15, 2026',
        time: '10:30 AM',
        type: 'in-person' as const,
        status: 'confirmed' as const,
    };

    // Mock data simulating a high-end timeline/feed
    const dailyRoutine = [
        { time: '08:00', label: 'Morning Ritual', detail: 'Vitamin D + Magnesium', status: 'completed' },
        { time: '09:30', label: 'Movement', detail: 'Light Yoga Flow', status: 'active' },
        { time: '13:00', label: 'Nutrition', detail: 'Plant-based Macro Bowl', status: 'upcoming' },
    ];

    return (
        <div
            className="min-h-screen w-full relative selection:bg-stone-200"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily,
            }}
        >
            {/* Minimal Navigation */}
            <nav className="fixed top-0 left-0 w-full p-8 md:p-12 flex justify-between items-start z-50 pointer-events-none mix-blend-difference">
                <div className="pointer-events-auto cursor-pointer">
                    <span className="font-serif italic text-2xl font-bold tracking-tight">C/M</span>
                </div>
                <div className="pointer-events-auto flex flex-col gap-2 items-end">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Menu</span>
                    <div className="w-8 h-[1px] bg-current" />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 px-8 md:px-20 mb-20 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row justify-between items-end gap-12"
                >
                    <div className="flex flex-col gap-8 md:w-2/3">
                        <h1 className="text-7xl md:text-9xl font-serif leading-[0.85] tracking-tight">
                            <span className="italic block text-stone-400 text-6xl md:text-7xl mb-2">The</span>
                            Sanctuary
                        </h1>
                        <div className="h-[1px] w-24 bg-stone-900 mt-2" />
                        <p className="text-lg font-sans font-light leading-relaxed max-w-lg text-stone-600 mt-2">
                            Welcome back, Alex. Dr. Chen has updated your longevity protocol.
                        </p>
                    </div>

                    {/* Subtle Right-Hand Component: Concierge Status */}
                    <div className="md:w-1/3 flex justify-start md:justify-end pb-2">
                        <div className="flex items-center gap-4 border-l border-stone-200 pl-6">
                            <div className="relative w-2 h-2">
                                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20 duration-1000" />
                                <div className="relative w-2 h-2 bg-emerald-600 rounded-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-lg text-stone-900 leading-none mb-1">Concierge Active</span>
                                <span className="text-xs font-sans uppercase tracking-widest text-stone-400">Response time: &lt; 2m</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Content Grid - Magazine Layout */}
            <section className="px-8 md:px-20 pb-32 max-w-7xl mx-auto bg-white/0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-20">

                    {/* Left Column: Schedule */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-4 mb-16">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">01</span>
                            <h2 className="text-4xl font-serif">Concierge</h2>
                        </div>

                        <div className="space-y-0">
                            {/* Narrative Timeline */}
                            <AppointmentCard />
                        </div>
                    </div>

                    {/* Right Column: Routine/Vitals */}
                    <div className="lg:col-span-4 lg:pt-32">
                        <BioViz />

                        {/* Vitals Summary Minimal */}
                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-stone-400 block mb-2">Sleep</span>
                                <span className="text-4xl font-serif">8.2<span className="text-base font-sans ml-1 opacity-50">hrs</span></span>
                            </div>
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-stone-400 block mb-2">Recovery</span>
                                <span className="text-4xl font-serif">94<span className="text-base font-sans ml-1 opacity-50">%</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClinicDashboard;
