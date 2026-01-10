import React from 'react';
import { Sun, Leaf, CloudRain, Wind, Droplets, Sprout, Users } from 'lucide-react';
import EnergySun from '../components/solarpunk/EnergySun';
import AirQualityLeaf from '../components/solarpunk/AirQualityLeaf';
import SolarCard from '../components/solarpunk/SolarCard';
import SolarpunkButton from '../components/solarpunk/SolarpunkButton';

const SolarpunkDashboard = () => {
    return (
        <div className="min-h-screen bg-[#F0F7F4] font-serif text-emerald-900 relative overflow-hidden selection:bg-emerald-200 selection:text-emerald-900">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-yellow-100 to-transparent rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-emerald-200 to-transparent rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
                {/* Organic Vine Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23059669' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">

                {/* Organic Navigation */}
                <header className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#F0F7F4] rounded-full border-2 border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center text-emerald-600 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-emerald-100 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                            <Leaf className="w-8 h-8 relative z-10" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-emerald-950">Eden<span className="text-emerald-500">OS</span></h1>
                            <div className="flex items-center gap-2 text-sm text-emerald-700/60 font-medium font-sans uppercase tracking-widest mt-1">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Community Grid Live
                            </div>
                        </div>
                    </div>

                    {/* Weather/Status Pill */}
                    <div className="flex items-center bg-white/40 backdrop-blur-md rounded-full p-2 pr-6 border border-white/60 shadow-sm gap-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-100/50 rounded-full text-yellow-700">
                            <Sun className="w-4 h-4" />
                            <span className="font-sans font-bold text-sm">24°C</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-800">
                            <Droplets className="w-4 h-4 text-blue-400" />
                            <span className="font-sans font-bold text-sm">62%</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-800">
                            <Wind className="w-4 h-4 text-emerald-400" />
                            <span className="font-sans font-bold text-sm">Light Breeze</span>
                        </div>
                    </div>
                </header>

                {/* Main Layout - Asymmetrical Organic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left: Solar Energy (Large Visual) */}
                    <div className="lg:col-span-5 lg:row-span-2 space-y-6">
                        <div className="bg-gradient-to-br from-[#FFF9E5] to-[#F0F7F4] rounded-[2rem] p-1 border border-emerald-50 shadow-xl shadow-yellow-500/5">
                            <EnergySun />
                        </div>

                        {/* Community Stats */}
                        <SolarCard className="p-8 bg-white/60 backdrop-blur-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Users className="w-5 h-5 text-emerald-500" />
                                Active Gardeners
                            </h3>
                            <div className="flex -space-x-3 mb-6">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}`} alt="user" className="w-full h-full" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 text-white flex items-center justify-center font-sans font-bold text-xs">
                                    +12
                                </div>
                            </div>
                            <p className="text-emerald-700/60 font-sans text-sm">
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
                        <SolarCard className="p-8 flex-1 bg-gradient-to-b from-white/80 to-emerald-50/50">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold text-emerald-950">Hydroponics</h2>
                                <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider font-sans">
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
                                            <div className={`p-3 rounded-2xl ${plant.progress === 100 ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-600'} transition-colors`}>
                                                <plant.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className="font-bold text-emerald-900">{plant.name}</span>
                                                    <span className="text-emerald-500 font-sans text-xs font-bold">{plant.progress}%</span>
                                                </div>
                                                <div className="text-sm text-emerald-600/70 font-sans">
                                                    {plant.stage} · <span className="text-emerald-400">{plant.days > 0 ? `${plant.days} days left` : 'Harvest now'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-emerald-100/50 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-400 rounded-full relative group-hover:bg-emerald-500 transition-colors"
                                                style={{ width: `${plant.progress}%` }}
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