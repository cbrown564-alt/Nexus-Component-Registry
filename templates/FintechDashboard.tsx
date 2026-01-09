import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, PieChart, ArrowRightLeft, ShieldCheck, Plus, Send } from 'lucide-react';
import PortfolioChart from '../components/fintech/PortfolioChart';
import DigitalCard from '../components/fintech/DigitalCard';
import MarketTicker from '../components/fintech/MarketTicker';
import TransactionList from '../components/fintech/TransactionList';
import FintechCard from '../components/fintech/FintechCard';
import FintechButton from '../components/fintech/FintechButton';

const FintechDashboard = () => {
    return (
        <div className="container mx-auto max-w-[1600px] min-h-screen p-6 lg:p-10 font-sans text-zinc-200">

            {/* Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                    <p className="text-zinc-500 mt-1">Welcome back, Alexander.</p>
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
                            <FintechCard key={i} className="p-6" delay={0.1 * i}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-sm font-medium text-zinc-500">{stat.label}</div>
                                    <stat.icon className="h-5 w-5 text-zinc-600" />
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-emerald-500">{stat.change}</div>
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
                        <h3 className="font-medium text-white mb-6">Quick Transfer</h3>
                        <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                            {[1, 2, 3, 4, 5].map((u) => (
                                <div key={u} className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer group">
                                    <div className="h-12 w-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-emerald-500 group-hover:text-white transition-colors">
                                        AM
                                    </div>
                                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300">Alex</span>
                                </div>
                            ))}
                            <div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer">
                                <div className="h-12 w-12 rounded-full border border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-zinc-500 hover:text-zinc-300 transition-colors">
                                    <Plus className="h-5 w-5" />
                                </div>
                                <span className="text-xs text-zinc-500">Add</span>
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                            <input
                                type="text"
                                defaultValue="0.00"
                                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 pl-8 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
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