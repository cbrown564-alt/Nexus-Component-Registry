import React from 'react';
import { BookOpen, Palette, Video, Music, Calculator, Rocket } from 'lucide-react';
import KidsCard from '../components/kids/KidsCard';
import BigIconNav from '../components/kids/BigIconNav';
import StarProgress from '../components/kids/StarProgress';
import Mascot from '../components/kids/Mascot';
import KidsButton from '../components/kids/KidsButton';
import { Settings, Users } from 'lucide-react';

import { useTheme } from '@/context/ThemeContext';

const KidsDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    React.useEffect(() => {
        setScopedTheme('consumer', 'kids');
    }, []);

    const activities = [
        { title: "Read", icon: BookOpen, color: "bg-red-400", border: "border-red-600", text: "text-red-900" },
        { title: "Art", icon: Palette, color: "bg-yellow-300", border: "border-yellow-600", text: "text-yellow-900" },
        { title: "Math", icon: Calculator, color: "bg-blue-400", border: "border-blue-600", text: "text-blue-900" },
        { title: "Videos", icon: Video, color: "bg-green-400", border: "border-green-600", text: "text-green-900" },
        { title: "Music", icon: Music, color: "bg-purple-400", border: "border-purple-600", text: "text-purple-900" },
        { title: "Space", icon: Rocket, color: "bg-indigo-400", border: "border-indigo-600", text: "text-indigo-900" },
    ];

    return (
        <div
            className="min-h-screen font-sans p-4 flex flex-col overflow-hidden relative"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily,
                // selection styles should be in global CSS or separate style block, removing inline pseudo-element attempt
            }}
        >

            {/* Clouds Background Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-16 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                <div className="absolute top-40 right-20 w-48 h-24 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                <div className="absolute bottom-32 left-1/3 w-64 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            </div>

            {/* Header */}
            <div className="flex justify-between items-start mb-6 md:mb-12 relative z-10 px-2 md:px-8 pt-4">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl border-4 overflow-hidden shadow-lg rotate-3" style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.card }}>
                        <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Leo" alt="Avatar" className="w-full h-full" style={{ backgroundColor: theme.colors.card }} />
                    </div>
                    <div className="px-6 py-2 rounded-2xl border-4 shadow-sm -rotate-2 hidden md:block" style={{ backgroundColor: `${theme.colors.card}cc`, borderColor: theme.colors.card, backdropFilter: 'blur(8px)' }}>
                        <h1 className="text-3xl font-black tracking-wide" style={{ color: theme.colors.secondaryForeground }}>LEO</h1>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <KidsButton variant="secondary" size="sm" icon={<Users className="h-5 w-5" />} style={{ color: theme.colors.secondaryForeground }} >
                            Friends
                        </KidsButton>
                        <KidsButton variant="secondary" size="sm" icon={<Settings className="h-5 w-5" />} style={{ color: theme.colors.mutedForeground }} />
                    </div>
                </div>
                <StarProgress />
            </div>

            {/* Main Grid */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-2 md:p-4 max-w-5xl mx-auto relative z-10 w-full">
                {activities.map((item, i) => (
                    <KidsCard
                        key={i}
                        delay={i * 0.1}
                        color={item.color}
                        borderColor={item.border}
                        className="flex flex-col items-center justify-center aspect-square cursor-pointer group"
                    >
                        <div className="p-4 md:p-6 rounded-full mb-2 md:mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                            <item.icon className={`w-10 h-10 md:w-16 md:h-16 ${item.text}`} strokeWidth={3} />
                        </div>
                        <span className={`text-xl md:text-3xl font-black uppercase tracking-wider drop-shadow-md`} style={{ color: '#ffffff' }}>
                            {item.title}
                        </span>
                    </KidsCard>
                ))}
            </div>

            {/* Bottom Area */}
            <div className="mt-4 md:mt-auto relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-8 pb-4 gap-6">
                <div className="order-2 md:order-1">
                    <Mascot />
                </div>
                <div className="order-1 md:order-2 w-full md:w-auto">
                    <BigIconNav />
                </div>
            </div>

        </div>
    );
};

export default KidsDashboard;