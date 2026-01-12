import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Sparkles, GraduationCap, Play, BookOpen, Plus, Calendar } from 'lucide-react';
import EducationCard from '../components/education/EducationCard';
import CourseCard from '../components/education/CourseCard';
import StudyStats from '../components/education/StudyStats';
import EducationButton from '../components/education/EducationButton';

import { useTheme } from '@/context/ThemeContext';

const EducationDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    React.useEffect(() => {
        setPlaygroundTheme('education');
    }, []);

    return (
        <div
            className="container mx-auto min-h-screen max-w-7xl p-8 font-sans"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily,
            }}
        >

            {/* Header */}
            <section className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1"
                >
                    <div className="mb-2 flex items-center gap-2" style={{ color: theme.colors.primary }}>
                        <GraduationCap className="h-5 w-5" />
                        <span className="text-sm font-bold uppercase tracking-wider">Student Portal</span>
                    </div>
                    <h1 className="font-display text-4xl font-extrabold lg:text-5xl" style={{ color: theme.colors.foreground }}>
                        Welcome back, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})` }}>Alex</span>
                    </h1>
                </motion.div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <div className="text-sm font-bold" style={{ color: theme.colors.foreground }}>Spring Semester</div>
                        <div className="text-xs" style={{ color: theme.colors.mutedForeground }}>Week 8 of 16</div>
                    </div>
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 shadow-lg" style={{ borderColor: theme.colors.card }}>
                        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="Avatar" className="h-full w-full" style={{ backgroundColor: theme.colors.secondary }} />
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
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rounded-full blur-2xl" style={{ backgroundColor: `${theme.colors.accent}40` }} />

                        <div className="relative z-10">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md border" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <Sparkles className="h-3 w-3 text-amber-300" />
                                <span>Recommended for you</span>
                            </div>
                            <h2 className="mb-4 font-display text-3xl font-bold leading-tight">Mastering Data Structures <br /> & Algorithms</h2>
                            <p className="mb-8 max-w-lg text-lg opacity-90">
                                Take your engineering skills to the next level with our advanced curriculum.
                                New modules on Graph Theory just added.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <EducationButton variant="secondary" size="lg" icon={<Play className="h-4 w-4" />} className="hover:bg-opacity-90" style={{ color: theme.colors.primary, backgroundColor: '#ffffff' }}>
                                    Start Learning
                                </EducationButton>
                                <EducationButton variant="outline" size="lg" icon={<BookOpen className="h-4 w-4" />} className="hover:bg-[#ffffff1a]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff' }}>
                                    View Syllabus
                                </EducationButton>
                            </div>
                        </div>
                    </EducationCard>

                    {/* Active Courses Grid */}
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="font-display text-xl font-bold" style={{ color: theme.colors.foreground }}>Continue Learning</h3>
                            <a href="#" className="text-sm font-semibold hover:text-opacity-80" style={{ color: theme.colors.primary }}>View All</a>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <CourseCard
                                title="UI/UX Fundamentals"
                                category="Design"
                                progress={75}
                                totalModules={12}
                                completedModules={9}
                                image=""
                                color="bg-pink-500" // Keep for category distinction or map to theme
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
                <div className="space-y-6">
                    {/* Schedule and Assignments in same flex container */}
                    <div className="flex flex-col gap-6">
                        <EducationCard className="p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="font-display text-lg font-bold" style={{ color: theme.colors.foreground }}>Today's Schedule</h3>
                                <button className="rounded-lg p-2 transition-colors" style={{ backgroundColor: theme.colors.secondary, color: theme.colors.mutedForeground }}>
                                    <Calendar className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="relative space-y-4">
                                <div className="absolute left-[7px] top-2 bottom-2 w-[2px]" style={{ backgroundColor: theme.colors.muted }} />
                                {[
                                    { title: 'Advanced UI Design', time: '10:00 AM', status: 'live' },
                                    { title: 'React Workshop', time: '2:00 PM', status: 'upcoming' },
                                ].map((event, i) => (
                                    <div key={i} className="relative flex gap-4">
                                        <div
                                            className={`relative z-10 h-4 w-4 rounded-full border-2`}
                                            style={{ borderColor: event.status === 'live' ? '#ef4444' : theme.colors.muted, backgroundColor: '#ffffff' }}
                                        >
                                            {event.status === 'live' && <div className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-75" />}
                                        </div>
                                        <div
                                            className="flex-1 rounded-xl p-3 transition-colors"
                                            style={{ backgroundColor: theme.colors.secondary }}
                                        >
                                            <span
                                                className={`text-xs font-bold uppercase tracking-wider`}
                                                style={{ color: event.status === 'live' ? '#ef4444' : theme.colors.mutedForeground }}
                                            >
                                                {event.status === 'live' ? 'Now' : event.time}
                                            </span>
                                            <h4 className="font-bold text-sm" style={{ color: theme.colors.foreground }}>{event.title}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </EducationCard>

                        {/* Assignments */}
                        <EducationCard className="p-6">
                            <h3 className="mb-4 font-display text-lg font-bold" style={{ color: theme.colors.foreground }}>Assignments</h3>
                            <div className="space-y-3">
                                {[
                                    { title: 'System Design Essay', due: 'Tomorrow', tag: 'High Priority', color: 'text-orange-600 bg-orange-50 border-orange-200' },
                                    { title: 'React Quiz', due: 'Fri, 12 Oct', tag: 'Graded', color: 'text-blue-600 bg-blue-50 border-blue-200' },
                                    { title: 'Wireframe Prototype', due: 'Mon, 15 Oct', tag: 'Group', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
                                ].map((task, i) => (
                                    <div key={i} className="flex items-start gap-3 rounded-xl border p-3 transition-colors hover:bg-[#ffffff]" style={{ borderColor: theme.colors.border, backgroundColor: `${theme.colors.secondary}50` }}>
                                        <div className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.mutedForeground }} />
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold" style={{ color: theme.colors.foreground }}>{task.title}</h4>
                                            <div className="mt-1 flex items-center justify-between">
                                                <span className="text-xs" style={{ color: theme.colors.mutedForeground }}>Due {task.due}</span>
                                                <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase ${task.color} border`}>
                                                    {task.tag}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <EducationButton variant="ghost" size="md" icon={<Plus className="h-4 w-4" />} className="w-full border border-dashed transition-colors hover:border-solid" style={{ borderColor: theme.colors.border }}>
                                Add New Task
                            </EducationButton>
                        </EducationCard>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EducationDashboard;