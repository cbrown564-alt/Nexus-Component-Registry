import { Link, useLocation } from 'react-router-dom';
import { Home, Layout, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function MobileBottomNav() {
    const location = useLocation();
    const { theme } = useTheme();

    const tabs = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/templates', icon: Layout, label: 'Templates' },
        { path: '/stories', icon: BookOpen, label: 'Stories' },
    ];

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-6 pt-2 backdrop-blur-xl border-t"
            style={{
                backgroundColor: `${theme.colors.background}cc`,
                borderColor: `${theme.colors.border}`,
                boxShadow: '0 -4px 20px rgba(0,0,0,0.2)'
            }}
        >
            <div className="flex items-center justify-around">
                {tabs.map((tab) => {
                    const isActive = tab.path === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(tab.path);

                    return (
                        <Link
                            key={tab.path}
                            to={tab.path}
                            className="relative flex flex-col items-center gap-1 min-w-[64px]"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="mobileEnv-pill"
                                    className="absolute -top-2 inset-x-2 bottom-0 rounded-xl -z-10"
                                    style={{ backgroundColor: `${theme.colors.primary}1a` }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            <tab.icon
                                className={`h-6 w-6 transition-colors duration-200 ${isActive ? 'translate-y-0.5' : ''}`}
                                style={{
                                    color: isActive ? theme.colors.primary : theme.colors.mutedForeground,
                                }}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            <span
                                className={`text-[10px] font-medium transition-colors duration-200`}
                                style={{
                                    color: isActive ? theme.colors.foreground : theme.colors.mutedForeground
                                }}
                            >
                                {tab.label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}
