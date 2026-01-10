import React from 'react';
import { Mic, ArrowLeft, MoreHorizontal, ChefHat, Wifi, Settings } from 'lucide-react';
import ActiveStep from '../components/kitchen/ActiveStep';
import IngredientScale from '../components/kitchen/IngredientScale';
import SmartTimer from '../components/kitchen/SmartTimer';
import KitchenCard from '../components/kitchen/KitchenCard';
import KitchenButton from '../components/kitchen/KitchenButton';

const KitchenDashboard = () => {
    return (
        <div className="min-h-screen bg-[#F7F5F2] font-sans text-stone-800 overflow-hidden relative">

            {/* Top Navigation */}
            <header className="h-20 px-6 md:px-10 flex items-center justify-between bg-white border-b border-stone-200">
                <div className="flex items-center gap-6">
                    <KitchenButton variant="secondary" size="icon" icon={<ArrowLeft className="h-6 w-6" />} />
                    <div>
                        <h1 className="font-serif text-2xl font-bold text-stone-900">Spicy Vodka Rigatoni</h1>
                        <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Dinner • 45 Min</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Voice Command Indicator */}
                    <div className="hidden md:flex items-center gap-3 bg-stone-900 text-stone-100 px-5 py-2.5 rounded-full shadow-lg">
                        <Mic className="h-5 w-5 text-orange-400 animate-pulse" />
                        <span className="font-medium text-sm">Listening...</span>
                    </div>

                    <KitchenButton variant="icon" size="icon" icon={<Settings className="h-6 w-6" />} />
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="p-6 md:p-8 h-[calc(100vh-5rem)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

                    {/* Left Sidebar: Ingredients */}
                    <div className="lg:col-span-3 h-full flex flex-col gap-5 overflow-hidden">
                        <IngredientScale />

                        {/* Quick Tip */}
                        <KitchenCard className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 border-green-100 !shadow-none">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center shrink-0 text-green-800 shadow-sm">
                                    <ChefHat className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-900 mb-1 text-sm">Chef's Tip</h4>
                                    <p className="text-xs text-green-800 leading-relaxed">
                                        Save a cup of pasta water before draining. The starch helps emulsify the sauce.
                                    </p>
                                </div>
                            </div>
                        </KitchenCard>
                    </div>

                    {/* Center: Active Step */}
                    <div className="lg:col-span-6 h-full">
                        <ActiveStep />
                    </div>

                    {/* Right Sidebar: Smart Appliances & Connected Devices */}
                    <div className="lg:col-span-3 h-full flex flex-col gap-5 overflow-hidden">
                        {/* Smart Appliances */}
                        <KitchenCard className="flex-1 p-5 bg-gradient-to-br from-stone-50 to-stone-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-serif font-bold text-stone-900 text-base">Appliances</h3>
                                <Wifi className="h-4 w-4 text-green-500" />
                            </div>
                            <div className="space-y-2">
                                {[
                                    { name: 'Stovetop', status: 'HIGH', active: true, color: 'bg-orange-500' },
                                    { name: 'Oven', status: '375°F', active: true, color: 'bg-amber-500' },
                                    { name: 'Exhaust', status: 'AUTO', active: true, color: 'bg-sky-500' },
                                    { name: 'Sous Vide', status: 'Off', active: false, color: 'bg-stone-400' },
                                ].map((appliance) => (
                                    <div key={appliance.name} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 rounded-full ${appliance.color} ${appliance.active ? 'animate-pulse' : ''}`} />
                                            <span className="font-medium text-stone-800 text-sm">{appliance.name}</span>
                                        </div>
                                        <span className={`text-xs font-medium ${appliance.active ? 'text-stone-600' : 'text-stone-400'}`}>
                                            {appliance.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </KitchenCard>

                        {/* Quick Actions */}
                        <KitchenCard className="p-4 bg-white">
                            <div className="grid grid-cols-2 gap-2">
                                <KitchenButton variant="secondary" size="sm" className="text-xs">
                                    Pause All
                                </KitchenButton>
                                <KitchenButton variant="primary" size="sm" className="text-xs">
                                    Voice Control
                                </KitchenButton>
                            </div>
                        </KitchenCard>
                    </div>

                </div>
            </main>

            {/* Persistent Timer Widget */}
            <SmartTimer />

        </div>
    );
};

export default KitchenDashboard;