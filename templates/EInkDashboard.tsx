import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EInkSidebar from '../components/eink/EInkSidebar';
import ReaderContent from '../components/eink/ReaderContent';
import LibraryGrid from '../components/eink/LibraryGrid';
import EInkCard from '../components/eink/EInkCard';
import EInkButton from '../components/eink/EInkButton';
import { Battery, Wifi, Menu } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const EInkDashboard = () => {
    const [activeTab, setActiveTab] = useState('reading');
    const [refreshing, setRefreshing] = useState(false);
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    useEffect(() => {
        setPlaygroundTheme('eink');
    }, []);

    // Simulate E-Ink refresh flash on tab change
    useEffect(() => {
        setRefreshing(true);
        const timer = setTimeout(() => setRefreshing(false), 600);
        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <div
            className="min-h-screen font-sans flex overflow-hidden relative"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >

            {/* Screen Refresh Effect Overlay */}
            <AnimatePresence>
                {refreshing && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            className="absolute inset-0 z-[100] pointer-events-none mix-blend-exclusion"
                            style={{ backgroundColor: '#000000' }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="absolute inset-0 z-[90] pointer-events-none"
                            style={{ backgroundColor: '#ffffff' }}
                        />
                    </>
                )}
            </AnimatePresence>

            <EInkSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">

                {/* Mobile Header */}
                <header
                    className="h-16 border-b-2 flex md:hidden items-center justify-between px-6 shrink-0"
                    style={{
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.border
                    }}
                >
                    <span className="font-serif font-bold text-xl">CANVAS</span>
                    <EInkButton variant="icon" onClick={() => setActiveTab('menu')}>
                        <Menu className="h-6 w-6" />
                    </EInkButton>
                </header>

                {/* Status Bar (Desktop) */}
                <div
                    className="h-12 border-b-2 hidden md:flex items-center justify-between px-8 shrink-0 font-mono text-xs uppercase tracking-wider"
                    style={{
                        backgroundColor: theme.colors.background,
                        borderColor: theme.colors.border,
                        color: theme.colors.foreground
                    }}
                >
                    <span>10:42 AM</span>
                    <span className="font-bold">{activeTab}</span>
                    <div className="flex items-center gap-4">
                        <Wifi className="h-4 w-4" />
                        <div className="flex items-center gap-1">
                            <span>82%</span>
                            <Battery className="h-4 w-4" />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-12 relative">
                    {/* Paper Texture for Main Area */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />

                    <div className="relative z-10 max-w-6xl mx-auto h-full">
                        {activeTab === 'reading' && <ReaderContent />}
                        {activeTab === 'library' && <LibraryGrid />}

                        {(activeTab !== 'reading' && activeTab !== 'library') && (
                            <div className="h-full flex items-center justify-center">
                                <EInkCard className="p-12 text-center border-dashed border-2 shadow-none bg-transparent" style={{ borderColor: theme.colors.mutedForeground }}>
                                    <h3 className="font-serif text-2xl font-bold mb-2">Module Offline</h3>
                                    <p className="font-sans text-sm uppercase tracking-widest" style={{ color: theme.colors.mutedForeground }}>Please connect to WiFi to access {activeTab}</p>
                                </EInkCard>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EInkDashboard;