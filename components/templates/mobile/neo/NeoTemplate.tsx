import { neoWallets, neoTransactions } from '@/data/templates/neo';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Bell, CreditCard, MoreHorizontal, Clapperboard, Car, Briefcase, Smartphone, TrendingUp, ChevronUp, Wallet } from 'lucide-react';
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

    return (
        <div
            className="fixed inset-0 bg-neutral-950 text-white overflow-hidden flex flex-col font-sans select-none"
            onMouseMove={handleMouseMove}
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-emerald-900/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 px-6 py-6 flex items-center justify-between z-50">
                <Link to="/mobile/templates" className="p-3 -ml-2 rounded-full hover:bg-white/5 transition-colors group">
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

            {/* Main Content Area */}
            <div className="flex-1 relative z-10 flex flex-col pt-20"> {/* Added pt-20 to clear header */}

                {/* Balance Hero */}
                <div className="px-8 pb-12"> {/* Increased bottom padding */}
                    <span className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-1 block">Total Balance</span>
                    <div className="flex items-start gap-1">
                        <span className="text-2xl text-neutral-400 font-light mt-1">$</span>
                        <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-xl loading-none">
                            36,568<span className="text-3xl text-neutral-500">.45</span>
                        </h1>
                    </div>
                </div>

                {/* Cards Stack */}
                <div className="relative h-[340px] w-full perspective-1000 flex justify-center items-start"> {/* Increased height */}
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

                {/* Transactions Sheet */}
                <div className="flex-1 bg-neutral-900/80 backdrop-blur-xl rounded-t-[2.5rem] relative -mt-8 border-t border-white/5 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] flex flex-col">
                    {/* Drag Handle */}
                    <div className="w-full flex justify-center pt-4 pb-2">
                        <div className="w-12 h-1 bg-neutral-700/50 rounded-full" />
                    </div>

                    <div className="px-8 py-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                        <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                            <MoreHorizontal className="w-5 h-5 text-neutral-400" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-4 no-scrollbar mask-grad-bottom">
                        {neoTransactions.map(tx => (
                            <TransactionItem key={tx.id} tx={tx} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Floating Nav */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
                <nav className="bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/50">
                    <NavIcon icon={Wallet} active />
                    <NavIcon icon={TrendingUp} />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center -mt-8 border-4 border-neutral-950">
                        <PlusIcon className="w-5 h-5 text-neutral-950" />
                    </div>
                    <NavIcon icon={CreditCard} />
                    <NavIcon icon={Clapperboard} /> {/* Placeholder for user */}
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
    const zIndex = total - index;

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
                transform-style-3d
            `}
        >
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 rounded-[24px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay rounded-[24px]" />

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                    <span className="font-medium tracking-wider text-sm opacity-90 backdrop-blur-md bg-black/10 px-3 py-1 rounded-full border border-white/10">
                        {wallet.name}
                    </span>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
                        <CreditCard className="w-6 h-6 text-white/80" />
                    </div>
                </div>

                {/* EMV Chip */}
                <div className="w-12 h-9 rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-500 border border-yellow-600/50 relative overflow-hidden opacity-90 shadow-inner">
                    <div className="absolute inset-0 border border-black/20 rounded-md m-0.5" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-black/20" />
                    <div className="absolute right-1/3 top-0 bottom-0 w-px bg-black/20" />
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-black/20" />
                </div>

                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-xs opacity-60 tracking-[0.2em] mb-1">BALANCE</div>
                        <div className="text-2xl font-bold font-mono tracking-tight flex items-center gap-1">
                            <span>{wallet.currency === 'USD' ? '$' : 'Ξ'}</span>
                            {wallet.balance.toLocaleString()}
                        </div>
                    </div>
                    <div className="opacity-80">
                        {wallet.id === '1' && <span className="font-mono text-lg tracking-widest">VISA</span>}
                        {wallet.id === '2' && <span className="font-bold italic">ETH</span>}
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

function NavIcon({ icon: Icon, active }: any) {
    return (
        <button className={`p-2 rounded-xl transition-all ${active ? 'text-white bg-white/10' : 'text-neutral-500 hover:text-neutral-300'}`}>
            <Icon className="w-6 h-6" strokeWidth={active ? 2.5 : 2} />
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
