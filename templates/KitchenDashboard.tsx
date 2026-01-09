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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">

                    {/* Left Sidebar: Ingredients */}
                    <div className="lg:col-span-4 h-full flex flex-col gap-6 overflow-hidden">
                        <IngredientScale />

                        {/* Quick Tip */}
                        <KitchenCard className="p-6 bg-green-50 border-green-100 !shadow-none">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center shrink-0 text-green-800">
                                    <ChefHat className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-green-900 mb-1">Chef's Tip</h4>
                                    <p className="text-sm text-green-800 leading-relaxed">
                                        Save a cup of pasta water before draining. The starch helps emulsify the sauce.
                                    </p>
                                </div>
                            </div>
                        </KitchenCard>
                    </div>

                    {/* Center: Active Step */}
                    <div className="lg:col-span-8 h-full">
                        <ActiveStep />
                    </div>

                </div>
            </main>

            {/* Persistent Timer Widget */}
            <SmartTimer />

        </div>
    );
};

export default KitchenDashboard;