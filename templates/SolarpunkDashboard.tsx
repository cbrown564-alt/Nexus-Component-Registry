import React, { useEffect } from 'react';
import { Sun, Leaf, CloudRain, Wind, Droplets, Sprout, Users } from 'lucide-react';
import EnergySun from '../components/solarpunk/EnergySun';
import AirQualityLeaf from '../components/solarpunk/AirQualityLeaf';
import SolarCard from '../components/solarpunk/SolarCard';
import SolarpunkButton from '../components/solarpunk/SolarpunkButton';
import { useTheme } from '@/context/ThemeContext';

const SolarpunkDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    useEffect(() => {
        setPlaygroundTheme('solarpunk');
    }, []);

    return (
        <div
            className="min-h-screen font-sans relative overflow-hidden selection:text-[#064e3b]"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                '--tw-selection-bg': theme.colors.primary, // Using primary for selection bg
            } as React.CSSProperties}
        >
            <style>{`::selection { background-color: ${theme.colors.border}; color: ${theme.colors.foreground}; }`}</style>

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-yellow-100 to-transparent rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-emerald-200 to-transparent rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                {/* Organic Vine Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23059669' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">

                {/* Organic Navigation */}
                <header className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-2 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center relative overflow-hidden group" style={{ backgroundColor: theme.colors.background, borderColor: `${theme.colors.primary}33`, color: theme.colors.primary }}>
                            <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" style={{ backgroundColor: theme.colors.muted }} />
                            <Leaf className="w-8 h-8 relative z-10" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight" style={{ color: theme.colors.foreground }}>Eden<span style={{ color: theme.colors.primary }}>OS</span></h1>
                            <div className="flex items-center gap-2 text-sm font-medium font-sans uppercase tracking-widest mt-1" style={{ color: `${theme.colors.foreground}99` }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.accent }} />
                                Community Grid Live
                            </div>
                        </div>
                    </div>

                    {/* Weather/Status Pill */}
                    <div className="flex items-center backdrop-blur-md rounded-full p-2 pr-6 border shadow-sm gap-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderColor: 'rgba(255, 255, 255, 0.6)' }}>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: `${theme.colors.secondary}80`, color: theme.colors.secondaryForeground }}>
                            <Sun className="w-4 h-4" />
                            <span className="font-sans font-bold text-sm">24°C</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: theme.colors.foreground }}>
                            <Droplets className="w-4 h-4" style={{ color: '#60a5fa' }} />
                            <span className="font-sans font-bold text-sm">62%</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: theme.colors.foreground }}>
                            <Wind className="w-4 h-4" style={{ color: theme.colors.primary }} />
                            <span className="font-sans font-bold text-sm">Light Breeze</span>
                        </div>
                    </div>
                </header>

                {/* Main Layout - Asymmetrical Organic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left: Solar Energy (Large Visual) */}
                    <div className="lg:col-span-5 lg:row-span-2 space-y-6">
                        <div className="bg-gradient-to-br from-[#FFF9E5] to-[#F0F7F4] rounded-[2rem] p-1 border shadow-xl shadow-yellow-500/5" style={{ borderColor: theme.colors.muted, backgroundColor: theme.colors.muted }}>
                            <EnergySun />
                        </div>

                        {/* Community Stats */}
                        <SolarCard className="p-8" style={{ backgroundColor: `${theme.colors.card}99`, color: theme.colors.cardForeground, backdropFilter: 'blur(8px)' }}>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Users className="w-5 h-5" style={{ color: theme.colors.primary }} />
                                Active Gardeners
                            </h3>
                            <div className="flex -space-x-3 mb-6">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden" style={{ backgroundColor: theme.colors.muted }}>
                                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}`} alt="user" className="w-full h-full" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center font-sans font-bold text-xs" style={{ backgroundColor: theme.colors.primary, color: '#ffffff' }}>
                                    +12
                                </div>
                            </div>
                            <p className="font-sans text-sm" style={{ color: `${theme.colors.foreground}99` }}>
                                <strong>Sarah</strong> planted <strong>Tomatoes</strong> 2h ago.
                            </p>
                        </SolarCard>
                    </div>

                    {/* Middle: Air Quality (Vertical) */}
                    <div className="lg:col-span-3 lg:row-span-2 h-full">
                        <AirQualityLeaf />
                    </div>

                    {/* Right: Hydroponics System (Detailed Cards) */}
                    <div className="lg:col-span-4 lg:row-span-2 flex flex-col gap-6">
                        <SolarCard className="p-8 flex-1 bg-gradient-to-b from-white/80 to-emerald-50/50" style={{ backgroundColor: theme.colors.card }}>
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold" style={{ color: theme.colors.foreground }}>Hydroponics</h2>
                                <div className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-sans" style={{ backgroundColor: theme.colors.muted, color: theme.colors.primary }}>
                                    System Healthy
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { name: "Basil", stage: "Ready to Harvest", days: 0, progress: 100, icon: Leaf },
                                    { name: "Cherry Tomatoes", stage: "Flowering", days: 12, progress: 65, icon: Sun },
                                    { name: "Romaine Lettuce", stage: "Vegetative", days: 24, progress: 30, icon: Sprout },
                                ].map((plant, i) => (
                                    <div key={i} className="group cursor-pointer">
                                        <div className="flex items-start gap-4 mb-3">
                                            <div className={`p-3 rounded-2xl transition-colors`} style={{
                                                backgroundColor: plant.progress === 100 ? theme.colors.primary : theme.colors.muted,
                                                color: plant.progress === 100 ? theme.colors.primaryForeground : theme.colors.primary
                                            }}>
                                                <plant.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="font-bold" style={{ color: theme.colors.foreground }}>{plant.name}</span>
                                                    <span className="font-sans text-xs font-bold" style={{ color: theme.colors.primary }}>{plant.progress}%</span>
                                                </div>
                                                <div className="text-sm font-sans" style={{ color: `${theme.colors.foreground}b3` }}>
                                                    {plant.stage} · <span style={{ color: theme.colors.primary }}>{plant.days > 0 ? `${plant.days} days left` : 'Harvest now'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.muted }}>
                                            <div
                                                className="h-full rounded-full relative group-hover:opacity-80 transition-opacity"
                                                style={{ width: `${plant.progress}%`, backgroundColor: theme.colors.primary }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <SolarpunkButton variant="secondary" size="lg" className="mt-8 w-full">
                                View All Zones
                            </SolarpunkButton>
                        </SolarCard>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SolarpunkDashboard;