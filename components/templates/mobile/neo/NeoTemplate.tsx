import { neoWallets, neoTransactions } from '@/data/templates/neo';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowLeft, Bell, CreditCard, MoreHorizontal, Clapperboard, Car, Briefcase, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const icons: Record<string, any> = {
    Clapperboard,
    Car,
    Briefcase,
    Smartphone
};

export default function NeoTemplate() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        mouseX.set(clientX - centerX);
        mouseY.set(clientY - centerY);
    };

    return (
        <div
            className="fixed inset-0 bg-zinc-950 text-white overflow-hidden flex flex-col font-sans"
            onMouseMove={handleMouseMove}
        >
            {/* Header */}
            <header className="px-6 py-6 flex items-center justify-between z-10">
                <Link to="/mobile/templates" className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
                    <ArrowLeft className="w-6 h-6" />
                </Link>
                <span className="font-bold tracking-widest text-sm uppercase opacity-50">Neo Bank</span>
                <div className="p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors relative">
                    <Bell className="w-6 h-6" />
                    <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
            </header>

            {/* Parallax Cards Stack */}
            <div className="flex-1 relative perspective-1000 flex flex-col items-center justify-start pt-10">
                {neoWallets.map((wallet, index) => (
                    <NeoCard
                        key={wallet.id}
                        wallet={wallet}
                        index={index}
                        mouseX={mouseX}
                        mouseY={mouseY}
                    />
                ))}
            </div>

            {/* Bottom Sheet for Transactions */}
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-zinc-900/90 backdrop-blur-xl rounded-t-[3rem] p-8 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div className="w-12 h-1.5 bg-zinc-700/50 rounded-full mx-auto mb-8" />

                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Recent Activity</h3>
                    <button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">See All</button>
                </div>

                <div className="space-y-6 overflow-y-auto h-full pb-20 no-scrollbar">
                    {neoTransactions.map(tx => (
                        <div key={tx.id} className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                                {icons[tx.icon] && <icons.icon className="w-5 h-5" />}
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-zinc-200">{tx.merchant}</h4>
                                <p className="text-xs text-zinc-500">{tx.category}</p>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold ${tx.amount > 0 ? 'text-emerald-400' : 'text-white'}`}>
                                    {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                                </p>
                                <p className="text-xs text-zinc-600">{tx.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAB */}
            <button className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full text-black flex items-center justify-center shadow-lg shadow-white/20 z-50 hover:scale-105 active:scale-95 transition-transform">
                <PlusIcon className="w-8 h-8" />
            </button>
        </div>
    );
}

function NeoCard({ wallet, index, mouseX, mouseY }: { wallet: any, index: number, mouseX: any, mouseY: any }) {
    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                zIndex: 3 - index,
                marginTop: index * -60
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className={`
                w-full max-w-[320px] aspect-[1.6/1] rounded-3xl p-6 relative overflow-hidden shadow-2xl
                bg-gradient-to-br ${wallet.color}
            `}
        >
            <div className="absolute top-0 right-0 p-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between text-white">
                <div className="flex justify-between items-start">
                    <span className="font-medium text-white/80">{wallet.name}</span>
                    <CreditCard className="w-6 h-6 text-white/60" />
                </div>

                <div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-lg opacity-60">{wallet.currency === 'USD' ? '$' : 'Ξ'}</span>
                        <span className="text-4xl font-bold tracking-tight">{wallet.balance.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className={`px-2 py-0.5 rounded-full bg-black/20 text-[10px] font-bold flex items-center gap-1 ${wallet.change > 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
                            <TrendingUp className={`w-3 h-3 ${wallet.change < 0 ? 'rotate-180' : ''}`} />
                            {Math.abs(wallet.change)}%
                        </div>
                        <span className="text-xs opacity-50">vs last week</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function PlusIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    )
}

