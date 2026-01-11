import React from 'react';
import { Mic, ArrowLeft, MoreHorizontal, ChefHat, Wifi, Settings } from 'lucide-react';
import ActiveStep from '../components/kitchen/ActiveStep';
import IngredientScale from '../components/kitchen/IngredientScale';
import SmartTimer from '../components/kitchen/SmartTimer';
import KitchenCard from '../components/kitchen/KitchenCard';
import KitchenButton from '../components/kitchen/KitchenButton';

import { useTheme } from '@/context/ThemeContext';

const KitchenDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    React.useEffect(() => {
        setScopedTheme('consumer', 'kitchen');
    }, []);

    return (
        <div
            className="min-h-screen overflow-hidden relative"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily
            }}
        >

            {/* Top Navigation */}
            <header className="h-20 px-6 md:px-10 flex items-center justify-between border-b" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
                <div className="flex items-center gap-6">
                    <KitchenButton variant="secondary" size="icon" icon={<ArrowLeft className="h-6 w-6" />} />
                    <div>
                        <h1 className="text-2xl font-bold" style={{ color: theme.colors.foreground }}>Spicy Vodka Rigatoni</h1>
                        <span className="text-sm font-medium uppercase tracking-wider" style={{ color: theme.colors.mutedForeground }}>Dinner • 45 Min</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Voice Command Indicator */}
                    <div className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg" style={{ backgroundColor: theme.colors.foreground, color: theme.colors.background }}>
                        <Mic className="h-5 w-5 animate-pulse" style={{ color: theme.colors.primary }} />
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
                        <KitchenCard className="p-5 !shadow-none" style={{ backgroundColor: `${theme.colors.accent}15`, borderColor: `${theme.colors.accent}30` }}>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: `${theme.colors.accent}30`, color: theme.colors.accent }}>
                                    <ChefHat className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-sm" style={{ color: theme.colors.accent }}>Chef's Tip</h4>
                                    <p className="text-xs leading-relaxed" style={{ color: theme.colors.foreground }}>
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
                        <KitchenCard className="flex-1 p-5" style={{ background: `linear-gradient(to bottom right, ${theme.colors.card}, ${theme.colors.muted})` }}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-base" style={{ color: theme.colors.foreground }}>Appliances</h3>
                                <Wifi className="h-4 w-4" style={{ color: theme.colors.accent }} />
                            </div>
                            <div className="space-y-2">
                                {[
                                    { name: 'Stovetop', status: 'HIGH', active: true, color: theme.colors.primary },
                                    { name: 'Oven', status: '375°F', active: true, color: theme.colors.accent },
                                    { name: 'Exhaust', status: 'AUTO', active: true, color: theme.colors.ring },
                                    { name: 'Sous Vide', status: 'Off', active: false, color: theme.colors.mutedForeground },
                                ].map((appliance) => (
                                    <div key={appliance.name} className="flex items-center justify-between p-2.5 rounded-lg border shadow-sm" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 rounded-full ${appliance.active ? 'animate-pulse' : ''}`} style={{ backgroundColor: appliance.color }} />
                                            <span className="font-medium text-sm" style={{ color: theme.colors.foreground }}>{appliance.name}</span>
                                        </div>
                                        <span className={`text-xs font-medium`} style={{ color: appliance.active ? theme.colors.mutedForeground : theme.colors.mutedForeground }}>
                                            {appliance.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </KitchenCard>

                        {/* Quick Actions */}
                        <KitchenCard className="p-4" style={{ backgroundColor: theme.colors.card }}>
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