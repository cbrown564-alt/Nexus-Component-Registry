import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Calendar, Plus } from 'lucide-react';
import WellnessCard from '../components/wellness/WellnessCard';
import BreathPlayer from '../components/wellness/BreathPlayer';
import SleepGraph from '../components/wellness/SleepGraph';
import MoodSelector from '../components/wellness/MoodSelector';
import WellnessButton from '../components/wellness/WellnessButton';

const WellnessDashboard = () => {
   return (
      <div className="container mx-auto max-w-6xl p-8 font-sans text-stone-800">

         {/* Hero Section */}
         <section className="mb-16 mt-8 flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="max-w-xl"
            >
               <span className="mb-4 inline-block rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-widest text-stone-500">
                  Wellness V1
               </span>
               <h1 className="mb-4 font-serif text-5xl font-medium leading-tight text-stone-900 lg:text-6xl">
                  Find your <span className="text-stone-400 italic">center</span> today.
               </h1>
               <p className="text-lg text-stone-600 leading-relaxed">
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
               <WellnessCard className="flex h-full flex-col justify-center !bg-stone-900 !text-stone-100 !border-none overflow-hidden relative" delay={0.1}>
                  {/* Abstract Background Shapes */}
                  <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-stone-800 blur-3xl opacity-50" />
                  <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-sage-900 blur-3xl opacity-30" />

                  <div className="relative z-10 p-4">
                     <h3 className="mb-2 text-sm font-medium uppercase tracking-widest text-stone-400">Daily Intention</h3>
                     <p className="font-serif text-3xl leading-snug md:text-4xl">
                        "To live a creative life, we must lose our fear of being wrong."
                     </p>
                     <div className="mt-6 flex items-center gap-3">
                        <div className="h-px w-12 bg-stone-700" />
                        <span className="font-serif italic text-stone-400">Joseph Chilton Pearce</span>
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
                     <h3 className="font-serif text-xl text-stone-800">Hydration</h3>
                     <p className="text-sm text-stone-500">1,250ml / 2,000ml</p>
                  </div>
                  <div className="rounded-full bg-blue-50 p-2 text-blue-400">
                     <Droplets className="h-5 w-5" />
                  </div>
               </div>

               <div className="mt-8 flex items-end justify-center gap-1 h-32">
                  <div className="w-12 rounded-2xl bg-blue-100 h-[80%] relative overflow-hidden">
                     <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "60%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute bottom-0 w-full bg-blue-300 opacity-60"
                     />
                     <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 w-full h-[65%] bg-blue-400/20"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-400">
                     <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                     <h3 className="font-serif text-lg text-stone-800">Mindful Streak</h3>
                     <p className="text-xs text-stone-500">Keep the momentum going</p>
                  </div>
               </div>

               <div className="flex justify-between">
                  {[1, 2, 3, 4, 5].map((day) => (
                     <div key={day} className="flex flex-col items-center gap-2">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${day < 4
                              ? 'bg-sage-500 text-white shadow-md shadow-sage-200'
                              : day === 4
                                 ? 'bg-white border-2 border-sage-500 text-sage-600'
                                 : 'bg-stone-100 text-stone-500'
                           }`}>
                           {day < 4 ? '✓' : day}
                        </div>
                        <span className="text-[10px] text-stone-500">Day {day}</span>
                     </div>
                  ))}
               </div>
            </WellnessCard>

         </section>
      </div>
   );
};

export default WellnessDashboard;