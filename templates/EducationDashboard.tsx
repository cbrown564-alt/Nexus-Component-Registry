import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Sparkles, GraduationCap } from 'lucide-react';
import EducationCard from '../components/education/EducationCard';
import CourseCard from '../components/education/CourseCard';
import UpcomingSchedule from '../components/education/UpcomingSchedule';
import StudyStats from '../components/education/StudyStats';

const EducationDashboard = () => {
  return (
    <div className="container mx-auto min-h-screen max-w-7xl p-8 font-sans text-slate-800">
      
      {/* Header */}
      <section className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
        >
            <div className="mb-2 flex items-center gap-2 text-violet-600">
                <GraduationCap className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Student Portal</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold text-slate-900 lg:text-5xl">
                Welcome back, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">Alex</span>
            </h1>
        </motion.div>

        <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-slate-900">Spring Semester</div>
                <div className="text-xs text-slate-500">Week 8 of 16</div>
             </div>
             <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-lg">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="Avatar" className="h-full w-full bg-slate-100" />
             </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* Stats Row */}
            <StudyStats />

            {/* Featured Course (Large) */}
            <EducationCard featured className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rounded-full bg-indigo-500/20 blur-2xl" />
                
                <div className="relative z-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-md border border-white/20">
                        <Sparkles className="h-3 w-3 text-amber-300" />
                        <span>Recommended for you</span>
                    </div>
                    <h2 className="mb-4 font-display text-3xl font-bold leading-tight">Mastering Data Structures <br/> & Algorithms</h2>
                    <p className="mb-8 max-w-lg text-indigo-100 text-lg">
                        Take your engineering skills to the next level with our advanced curriculum. 
                        New modules on Graph Theory just added.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="rounded-xl bg-white px-6 py-3 font-bold text-violet-600 shadow-lg transition-transform hover:scale-105 active:scale-95">
                            Start Learning
                        </button>
                        <button className="rounded-xl bg-violet-700/50 px-6 py-3 font-semibold text-white border border-white/10 hover:bg-violet-700 transition-colors">
                            View Syllabus
                        </button>
                    </div>
                </div>
            </EducationCard>

            {/* Active Courses Grid */}
            <div>
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-slate-900">Continue Learning</h3>
                    <a href="#" className="text-sm font-semibold text-violet-600 hover:text-violet-700">View All</a>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <CourseCard 
                        title="UI/UX Fundamentals" 
                        category="Design" 
                        progress={75} 
                        totalModules={12} 
                        completedModules={9}
                        image=""
                        color="bg-pink-500"
                        delay={0.2}
                    />
                     <CourseCard 
                        title="Fullstack React" 
                        category="Development" 
                        progress={32} 
                        totalModules={24} 
                        completedModules={8}
                        image=""
                        color="bg-blue-500"
                        delay={0.3}
                    />
                </div>
            </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
            <UpcomingSchedule />
            
            {/* Homework / Tasks */}
            <EducationCard className="p-6">
                <h3 className="mb-4 font-display text-lg font-bold text-slate-900">Assignments</h3>
                <div className="space-y-3">
                    {[
                        { title: 'System Design Essay', due: 'Tomorrow', tag: 'High Priority', color: 'text-orange-600 bg-orange-50 border-orange-200' },
                        { title: 'React Quiz', due: 'Fri, 12 Oct', tag: 'Graded', color: 'text-blue-600 bg-blue-50 border-blue-200' },
                        { title: 'Wireframe Prototype', due: 'Mon, 15 Oct', tag: 'Group', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
                    ].map((task, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition-colors hover:border-slate-200 hover:bg-white">
                            <div className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-slate-800">{task.title}</h4>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="text-xs text-slate-500">Due {task.due}</span>
                                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${task.color} border`}>
                                        {task.tag}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-4 w-full rounded-lg border border-dashed border-slate-300 py-2 text-sm font-semibold text-slate-500 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 transition-all">
                    + Add New Task
                </button>
            </EducationCard>
        </div>

      </div>
    </div>
  );
};

export default EducationDashboard;