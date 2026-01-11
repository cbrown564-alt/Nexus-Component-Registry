import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Calendar, Plus } from 'lucide-react';
import WellnessCard from '../components/wellness/WellnessCard';
import BreathPlayer from '../components/wellness/BreathPlayer';
import SleepGraph from '../components/wellness/SleepGraph';
import MoodSelector from '../components/wellness/MoodSelector';
import WellnessButton from '../components/wellness/WellnessButton';

import { useTheme } from '@/context/ThemeContext';

const WellnessDashboard = () => {
   const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

   React.useEffect(() => {
      setScopedTheme('consumer', 'wellness');
   }, []);

   return (
      <div
         className="container mx-auto max-w-6xl p-8 font-sans"
         style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.foreground,
            fontFamily: theme.typography.fontFamily,
         }}
      >

         {/* Hero Section */}
         <section className="mb-16 mt-8 flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="max-w-xl"
            >
               <span
                  className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest"
                  style={{
                     backgroundColor: theme.colors.card,
                     border: `1px solid ${theme.colors.border}`,
                     color: theme.colors.mutedForeground
                  }}
               >
                  Wellness V1
               </span>
               <h1 className="mb-4 font-serif text-5xl font-medium leading-tight lg:text-6xl" style={{ color: theme.colors.foreground }}>
                  Find your <span className="italic" style={{ color: theme.colors.mutedForeground }}>center</span> today.
               </h1>
               <p className="text-lg leading-relaxed" style={{ color: theme.colors.secondaryForeground }}>
                  A mindful collection of interface components designed for serenity,
                  focus, and digital well-being.
               </p>
            </motion.div>

            <WellnessButton variant="ghost" icon={<ArrowRight className="h-4 w-4" />} className="text-stone-900 border-b border-stone-900 rounded-none pb-1 hover:bg-transparent hover:text-stone-600">
               Explore Methodology
            </WellnessButton>
         </section>

         {/* Wellness Grid */}
         <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-min">

            {/* 1. Daily Intention (Wide) */}
            <div className="lg:col-span-2">
               <WellnessCard className="flex h-full flex-col justify-center overflow-hidden relative" delay={0.1} style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}>
                  {/* Abstract Background Shapes */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full blur-3xl opacity-50" style={{ backgroundColor: theme.colors.foreground }} />
                  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full blur-3xl opacity-30" style={{ backgroundColor: theme.colors.mutedForeground }} />

                  <div className="relative z-10 p-4">
                     <h3 className="mb-2 text-sm font-medium uppercase tracking-widest text-opacity-80" style={{ color: theme.colors.primaryForeground }}>Daily Intention</h3>
                     <p className="font-serif text-3xl leading-snug md:text-4xl">
                        "To live a creative life, we must lose our fear of being wrong."
                     </p>
                     <div className="mt-6 flex items-center gap-3">
                        <div className="h-px w-12 bg-white/20" />
                        <span className="font-serif italic text-opacity-80" style={{ color: theme.colors.primaryForeground }}>Joseph Chilton Pearce</span>
                     </div>
                  </div>
               </WellnessCard>
            </div>

            {/* 2. Breath Player (Tall, Right Column on LG) */}
            <div className="lg:row-span-2">
               <BreathPlayer />
            </div>

            {/* 3. Hydration Tracker */}
            <WellnessCard delay={0.2} className="flex flex-col justify-between">
               <div className="flex items-start justify-between">
                  <div>
                     <h3 className="font-serif text-xl" style={{ color: theme.colors.foreground }}>Hydration</h3>
                     <p className="text-sm" style={{ color: theme.colors.mutedForeground }}>1,250ml / 2,000ml</p>
                  </div>
                  <div className="rounded-full p-2" style={{ backgroundColor: '#eff6ff', color: '#60a5fa' }}>
                     <Droplets className="h-5 w-5" />
                  </div>
               </div>

               <div className="mt-8 flex items-end justify-center gap-1 h-32">
                  <div className="w-12 rounded-2xl h-[80%] relative overflow-hidden" style={{ backgroundColor: '#dbeafe' }}>
                     <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "60%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute bottom-0 w-full opacity-60"
                        style={{ backgroundColor: '#93c5fd' }}
                     />
                     <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 w-full h-[65%]"
                        style={{ backgroundColor: 'rgba(96, 165, 250, 0.2)' }}
                     />
                  </div>
               </div>
               <WellnessButton variant="soft" size="md" icon={<Plus className="h-4 w-4" />} className="w-full">
                  Add Water
               </WellnessButton>
            </WellnessCard>

            {/* 4. Mood Selector */}
            <MoodSelector />

            {/* 5. Sleep Graph (Wide) */}
            <div className="lg:col-span-2">
               <SleepGraph />
            </div>

            {/* 6. Habits / Streaks */}
            <WellnessCard delay={0.3}>
               <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: '#fff7ed', color: '#fb923c' }}>
                     <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                     <h3 className="font-serif text-lg" style={{ color: theme.colors.foreground }}>Mindful Streak</h3>
                     <p className="text-xs" style={{ color: theme.colors.mutedForeground }}>Keep the momentum going</p>
                  </div>
               </div>

               <div className="flex justify-between">
                  {[1, 2, 3, 4, 5].map((day) => (
                     <div key={day} className="flex flex-col items-center gap-2">
                        <div
                           className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-all`}
                           style={day < 4 ? {
                              backgroundColor: '#78716c',
                              color: 'white',
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                           } : day === 4 ? {
                              backgroundColor: theme.colors.card,
                              border: `2px solid #78716c`,
                              color: '#78716c'
                           } : {
                              backgroundColor: theme.colors.muted,
                              color: theme.colors.mutedForeground
                           }}
                        >
                           {day < 4 ? '✓' : day}
                        </div>
                        <span className="text-[10px]" style={{ color: theme.colors.mutedForeground }}>Day {day}</span>
                     </div>
                  ))}
               </div>
            </WellnessCard>

         </section>
      </div>
   );
};

export default WellnessDashboard;