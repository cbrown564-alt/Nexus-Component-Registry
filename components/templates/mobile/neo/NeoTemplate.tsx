import { neoWallets, neoTransactions } from '@/data/templates/neo';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Bell, CreditCard, MoreHorizontal, Clapperboard, Car, Briefcase, Smartphone, TrendingUp, ChevronUp, Wallet, Activity, ArrowLeftRight, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const icons: Record<string, any> = {
    Clapperboard,
    Car,
    Briefcase,
    Smartphone
};

export default function NeoTemplate() {
    // 3D Tilt Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        mouseX.set(clientX - centerX);
        mouseY.set(clientY - centerY);
    };

    // State
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'wallet' | 'activity' | 'swap' | 'cards' | 'settings'>('wallet');

    return (
        <div
            className="fixed inset-0 bg-neutral-950 text-white flex flex-col font-sans select-none"
            onMouseMove={handleMouseMove}
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-emerald-900/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 px-6 py-6 flex items-center justify-between z-50">
                <Link to="/" className="p-3 -ml-2 rounded-full hover:bg-white/5 transition-colors group">
                    <ArrowLeft className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                </Link>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-400 to-cyan-500 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                    <span className="font-bold tracking-widest text-sm uppercase">Neo</span>
                </div>
                <div className="p-3 -mr-2 rounded-full hover:bg-white/5 transition-colors relative group">
                    <Bell className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                    <div className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_#f43f5e] animate-pulse" />
                </div>
            </header>

            {/* Main Scrollable Content Area */}
            <div className="flex-1 relative z-10 overflow-y-auto overscroll-none no-scrollbar pb-32">
                <div className="pt-24 px-8 pb-8">
                    {/* Balance Hero */}
                    <div className="mb-8">
                        <span className="text-neutral-500 text-xs font-bold tracking-widest uppercase mb-2 block">Total Balance</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl text-neutral-400 font-light">$</span>
                            <h1 className="text-5xl font-bold tracking-tighter text-white drop-shadow-2xl">
                                36,568<span className="text-3xl text-neutral-600">.45</span>
                            </h1>
                        </div>
                        <div className="flex gap-2 mt-2 text-emerald-400 text-sm font-medium items-center bg-emerald-500/10 self-start inline-flex px-2 py-1 rounded-lg border border-emerald-500/20">
                            <TrendingUp className="w-3 h-3" />
                            <span>+2.4% today</span>
                        </div>
                    </div>

                    {/* Cards Stack */}
                    <div className="relative h-[240px] w-full perspective-1000 flex justify-center items-start mb-8 z-20">
                        {neoWallets.map((wallet, index) => (
                            <NeoCard
                                key={wallet.id}
                                wallet={wallet}
                                index={index}
                                total={neoWallets.length}
                                mouseX={mouseX}
                                mouseY={mouseY}
                                isExpanded={expandedCard === wallet.id}
                                onClick={() => setExpandedCard(expandedCard === wallet.id ? null : wallet.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* Transactions Sheet */}
                <div className="bg-neutral-900/60 backdrop-blur-2xl rounded-t-[2.5rem] border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] min-h-[500px] p-6 pb-32">
                    <div className="w-full flex justify-center pb-6">
                        <div className="w-12 h-1 bg-neutral-800 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-white tracking-wide">Recent Activity</h3>
                        <button className="text-xs text-emerald-400 hover:text-emerald-300 font-medium tracking-wide uppercase">See All</button>
                    </div>

                    <div className="space-y-3">
                        {neoTransactions.map(tx => (
                            <TransactionItem key={tx.id} tx={tx} />
                        ))}
                        {/* Duplicate logic for scroll demo */}
                        {neoTransactions.map(tx => (
                            <TransactionItem key={`${tx.id}-dup`} tx={tx} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Floating Nav */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[320px]">
                <nav className="bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/80">
                    <NavIcon icon={Wallet} label="Wallet" active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} />
                    <NavIcon icon={Activity} label="Activity" active={activeTab === 'activity'} onClick={() => setActiveTab('activity')} />

                    <div className="relative -mt-8 group cursor-pointer">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-600 flex items-center justify-center border-4 border-neutral-950 shadow-xl relative z-10 transform group-hover:scale-105 transition-transform">
                            <ArrowLeftRight className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    <NavIcon icon={CreditCard} label="Cards" active={activeTab === 'cards'} onClick={() => setActiveTab('cards')} />
                    <NavIcon icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
                </nav>
            </div>
        </div>
    );
}

function NeoCard({ wallet, index, total, mouseX, mouseY, isExpanded, onClick }: any) {
    // Parallax only active when not expanded for cleaner focus state
    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    // Stack calculation
    const offset = index * 45;
    const scale = 1 - (index * 0.05);

    // Fix: Ensure expanded card is always on top (z-50)
    const zIndex = isExpanded ? 50 : total - index;

    return (
        <motion.div
            style={{
                rotateX: isExpanded ? 0 : rotateX,
                rotateY: isExpanded ? 0 : rotateY,
                zIndex,
            }}
            animate={{
                y: isExpanded ? -20 : offset,
                scale: isExpanded ? 1.05 : scale,
                opacity: isExpanded ? 1 : 1 - (index * 0.15),
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={onClick}
            className={`
                absolute top-0 w-[85%] aspect-[1.586/1] rounded-[24px] cursor-pointer
                bg-gradient-to-br ${wallet.color}
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                border border-white/10 group
                transform-style-3d overflow-hidden
            `}
        >
            {/* Modern Mesh Gradients (inspired by DigitalCard) */}
            <div className="absolute inset-0 opacity-50 mix-blend-overlay"
                style={{
                    background: `radial-gradient(circle at 100% 0%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(0,0,0,0.4) 0%, transparent 50%)`
                }}
            />
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-between text-white z-10">
                <div className="flex justify-between items-start">
                    {/* Modern Chip */}
                    <div className="h-10 w-14 rounded-md bg-gradient-to-tr from-yellow-200/90 to-yellow-500/90 border border-yellow-400/50 relative overflow-hidden shadow-sm">
                        <div className="absolute inset-0 border border-black/10 rounded-md m-[2px]" />
                        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-black/10" />
                        <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/10" />
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-black/10" />
                    </div>

                    {/* Contactless Icon */}
                    {/* @ts-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 rotate-90">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                        <line x1="12" y1="20" x2="12.01" y2="20"></line>
                    </svg>
                </div>

                <div className="space-y-4">
                    {/* MOCK Number */}
                    <div className="font-mono text-lg tracking-[0.15em] opacity-80 text-shadow-sm">
                        **** **** **** 4289
                    </div>

                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-[10px] opacity-60 tracking-widest mb-0.5 uppercase">Balance</div>
                            <div className="text-xl font-bold font-mono tracking-tight flex items-center gap-1">
                                <span>{wallet.currency === 'USD' ? '$' : 'Ξ'}</span>
                                {wallet.balance.toLocaleString()}
                            </div>
                        </div>
                        <div className="opacity-90">
                            {wallet.id === '1' && <span className="font-bold font-sans tracking-wider text-lg italic">VISA</span>}
                            {wallet.id === '2' && <span className="font-bold font-sans tracking-wider text-lg">ETH</span>}
                            {wallet.id === '3' && <span className="font-bold font-sans tracking-wider text-lg">MASTERCARD</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Reflected Highlight */}
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}

function TransactionItem({ tx }: any) {
    const Icon = icons[tx.icon];

    return (
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                {Icon ? <Icon className="w-5 h-5" /> : <div className="w-5 h-5 bg-neutral-600 rounded-full" />}
            </div>
            <div className="flex-1">
                <h4 className="font-medium text-neutral-200 group-hover:text-white transition-colors">{tx.merchant}</h4>
                <p className="text-xs text-neutral-500">{tx.category} • {tx.date}</p>
            </div>
            <div className="text-right">
                <p className={`font-bold font-mono ${tx.amount > 0 ? 'text-emerald-400' : 'text-neutral-200'}`}>
                    {tx.amount > 0 ? '+' : ''}{Math.abs(tx.amount).toFixed(2)}
                </p>
                {tx.amount < 0 && (
                    <div className="text-[10px] text-neutral-600 bg-neutral-800 px-1.5 py-0.5 rounded inline-block mt-0.5">
                        Debit
                    </div>
                )}
            </div>
        </div>
    )
}

function NavIcon({ icon: Icon, label, active, onClick }: { icon: any, label?: string, active?: boolean, onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all group ${active ? 'text-emerald-400' : 'text-neutral-500 hover:text-neutral-300'}`}
        >
            <Icon className={`w-6 h-6 transition-transform group-active:scale-95 ${active ? 'fill-emerald-400/20' : ''}`} strokeWidth={active ? 2.5 : 2} />
        </button>
    )
}

function PlusIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    )
}
