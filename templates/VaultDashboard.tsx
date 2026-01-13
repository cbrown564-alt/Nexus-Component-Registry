import React, { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import NeonCard from '../components/vault/NeonCard';
import GlitchButton from '../components/vault/GlitchButton';
import MondrianTable from '../components/vault/MondrianTable';
import SystemModal from '../components/vault/SystemModal';
import { ShieldCheck, Activity, Terminal, Wallet, Zap } from 'lucide-react';

const VaultDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setPlaygroundTheme('vault');
    }, []);

    return (
        <div
            className="min-h-screen p-8 font-mono bg-[#050505] text-[#e5e5e5]"
            style={{
                fontFamily: theme.typography.fontFamily,
            }}
        >
            {/* Header / Terminal Bar */}
            <div className="flex justify-between items-end mb-12 border-b border-[#333] pb-4">
                <div>
                    <div className="text-xs text-green-500 mb-2 animate-pulse">● SYSTEM ONLINE</div>
                    <h1 className="text-6xl font-black uppercase tracking-tighter leading-none">
                        Vau<span className="text-[#333]">lt</span>.
                        <span className="text-pink-500 text-6xl">_</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <GlitchButton onClick={() => setIsModalOpen(true)} variant="danger">
                        Simulate Error
                    </GlitchButton>
                    <GlitchButton>Connect Wallet</GlitchButton>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6">

                {/* Left Col: Portfolio */}
                <div className="col-span-12 lg:col-span-4 space-y-6">
                    <NeonCard className="min-h-[300px] flex flex-col justify-between">
                        <div className="flex justify-between items-start opacity-70">
                            <span className="text-xs font-bold tracking-widest">TOTAL VALUE LOCKED</span>
                            <Wallet size={16} />
                        </div>
                        <div>
                            <div className="text-5xl font-black">$4,291.02</div>
                            <div className="flex gap-2 mt-2 text-xs font-bold">
                                <span className="text-green-500">+$240.50 (24h)</span>
                                <span className="text-[#666]">BTC-ETH-SOL</span>
                            </div>
                        </div>
                        <div className="h-24 flex items-end gap-1">
                            {[40, 60, 45, 78, 55, 65, 80, 70, 90, 85].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#333] hover:bg-green-500 transition-colors" />
                            ))}
                        </div>
                    </NeonCard>

                    <div className="grid grid-cols-2 gap-6">
                        <NeonCard variant="warning" className="aspect-square flex flex-col items-center justify-center text-center">
                            <Zap size={32} className="text-yellow-500 mb-4" />
                            <div className="text-2xl font-bold">142</div>
                            <div className="text-[10px] text-[#666] tracking-widest mt-1">GWEI</div>
                        </NeonCard>
                        <NeonCard className="aspect-square flex flex-col items-center justify-center text-center">
                            <ShieldCheck size={32} className="text-green-500 mb-4" />
                            <div className="text-2xl font-bold">100%</div>
                            <div className="text-[10px] text-[#666] tracking-widest mt-1">HEALTH</div>
                        </NeonCard>
                    </div>
                </div>

                {/* Right Col: Market Data */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-bold uppercase flex items-center gap-2">
                            <Terminal size={20} className="text-pink-500" />
                            Live Market Data
                        </h2>
                        <div className="text-xs font-bold bg-[#111] px-2 py-1 border border-[#333] text-[#666]">
                            Auto-refresh: 5s
                        </div>
                    </div>

                    <MondrianTable />

                    <div className="mt-6 grid grid-cols-3 gap-6">
                        <NeonCard className="col-span-2">
                            <div className="text-xs text-gray-500 mb-4">PENDING TRANSACTIONS</div>
                            <div className="space-y-3">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex justify-between items-center text-xs border-b border-[#333] pb-2 last:border-0 last:pb-0">
                                        <span className="font-mono text-[#666]">0x71...8a9{i}</span>
                                        <span className="text-yellow-500 font-bold">PENDING</span>
                                    </div>
                                ))}
                            </div>
                        </NeonCard>

                        <NeonCard variant="critical" className="col-span-1 flex flex-col justify-center items-center text-center">
                            <Activity size={24} className="text-red-500 mb-2 animate-bounce" />
                            <div className="font-bold text-red-500">HIGH CONGESTION</div>
                            <div className="text-[10px] mt-2 opacity-60">Avoid bridging now</div>
                        </NeonCard>
                    </div>
                </div>

            </div>

            <SystemModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="GAS FEE ERROR"
                message="Network congestion detected. Transaction cost exceeds user limit."
                type="gas"
            />
        </div>
    );
};

export default VaultDashboard;
