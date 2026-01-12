import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, PieChart, ArrowRightLeft, ShieldCheck, Plus, Send } from 'lucide-react';
import PortfolioChart from '../components/fintech/PortfolioChart';
import DigitalCard from '../components/fintech/DigitalCard';
import MarketTicker from '../components/fintech/MarketTicker';
import TransactionList from '../components/fintech/TransactionList';
import FintechCard from '../components/fintech/FintechCard';
import FintechButton from '../components/fintech/FintechButton';

import { useTheme } from '@/context/ThemeContext';

const FintechDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    React.useEffect(() => {
        setScopedTheme('glass', 'fintech');
    }, []);

    return (
        <div
            className="container mx-auto max-w-[1600px] min-h-screen p-6 lg:p-10 font-sans"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <h1 className="text-3xl font-bold tracking-tight" style={{ color: theme.colors.foreground }}>Dashboard</h1>
                    <p className="mt-1" style={{ color: theme.colors.mutedForeground }}>Welcome back, Alexander.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                >
                    <FintechButton variant="secondary" icon={<ArrowRightLeft className="h-4 w-4" />}>
                        Transfer
                    </FintechButton>
                    <FintechButton variant="primary" icon={<Wallet className="h-4 w-4" />}>
                        Deposit
                    </FintechButton>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

                {/* Main Chart Column */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="h-[400px]">
                        <PortfolioChart />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: 'Monthly Spend', value: '$3,240', change: '+12%', icon: PieChart },
                            { label: 'Cash Flow', value: '$12,800', change: '+8%', icon: ArrowRightLeft },
                            { label: 'Security Status', value: 'Protected', change: 'Active', icon: ShieldCheck },
                        ].map((stat, i) => (
                            <FintechCard key={i} className="p-6" delay={0.1 * i} style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-sm font-medium" style={{ color: theme.colors.mutedForeground }}>{stat.label}</div>
                                    <stat.icon className="h-5 w-5" style={{ color: theme.colors.mutedForeground }} />
                                </div>
                                <div className="text-2xl font-bold mb-1" style={{ color: theme.colors.foreground }}>{stat.value}</div>
                                <div className="text-xs" style={{ color: theme.colors.primary }}>{stat.change}</div>
                            </FintechCard>
                        ))}
                    </div>

                    <div className="flex-1">
                        <TransactionList />
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <DigitalCard />

                    <MarketTicker />

                    {/* Quick Transfer Widget */}
                    <FintechCard className="p-6">
                        <h3 className="font-medium mb-6" style={{ color: theme.colors.foreground }}>Quick Transfer</h3>
                        <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                            {[1, 2, 3, 4, 5].map((u) => (
                                <div key={u} className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer group">
                                    <div
                                        className="h-12 w-12 rounded-full border flex items-center justify-center transition-colors"
                                        style={{
                                            backgroundColor: theme.colors.secondary,
                                            borderColor: theme.colors.border,
                                            color: theme.colors.mutedForeground
                                        }}
                                    >
                                        AM
                                    </div>
                                    <span className="text-xs" style={{ color: theme.colors.mutedForeground }}>Alex</span>
                                </div>
                            ))}
                            <div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer">
                                <div
                                    className="h-12 w-12 rounded-full border border-dashed flex items-center justify-center transition-colors"
                                    style={{
                                        borderColor: theme.colors.border,
                                        color: theme.colors.mutedForeground
                                    }}
                                >
                                    <Plus className="h-5 w-5" />
                                </div>
                                <span className="text-xs" style={{ color: theme.colors.mutedForeground }}>Add</span>
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: theme.colors.mutedForeground }}>$</span>
                            <input
                                type="text"
                                defaultValue="0.00"
                                className="w-full rounded-lg py-3 pl-8 pr-4 focus:outline-none transition-colors font-mono"
                                style={{
                                    backgroundColor: theme.colors.muted,
                                    border: `1px solid ${theme.colors.border}`,
                                    color: theme.colors.foreground
                                }}
                            />
                        </div>
                        <FintechButton variant="primary" size="lg" className="w-full" icon={<Send className="h-4 w-4" />}>
                            Send Money
                        </FintechButton>
                    </FintechCard>
                </div>

            </div>
        </div>
    );
};

export default FintechDashboard;