import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function MobileBottomNav() {
    const location = useLocation();
    const { theme } = useTheme();

    const tabs = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/stories', icon: BookOpen, label: 'Stories' },
    ];

    return (
        <div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-2 py-2 backdrop-blur-2xl border rounded-full shadow-2xl"
            style={{
                backgroundColor: `${theme.colors.background}dd`, // Slightly more opacity
                borderColor: `${theme.colors.border}`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)', // Deeper shadow
                width: 'auto',
                minWidth: '200px'
            }}
        >
            <div className="flex items-center justify-around gap-1">
                {tabs.map((tab) => {
                    const isActive = tab.path === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(tab.path);

                    return (
                        <Link
                            key={tab.path}
                            to={tab.path}
                            className="relative flex items-center justify-center h-12 w-20 rounded-full transition-all duration-300"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="mobileEnv-pill"
                                    className="absolute inset-0 rounded-full -z-10"
                                    style={{ backgroundColor: `${theme.colors.foreground}` }}
                                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                />
                            )}

                            <div className="flex flex-col items-center gap-0.5">
                                <tab.icon
                                    className={`h-5 w-5 transition-colors duration-200`}
                                    style={{
                                        color: isActive ? theme.colors.background : theme.colors.mutedForeground,
                                    }}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-[9px] font-bold"
                                        style={{ color: theme.colors.background }}
                                    >
                                        {tab.label}
                                    </motion.span>
                                )}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}
