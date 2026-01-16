import { ReactNode } from 'react';
import MobileBottomNav from '@/components/mobile/MobileBottomNav';
import { useTheme } from '@/context/ThemeContext';

interface MobileLayoutProps {
    children: ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
    const { theme } = useTheme();

    return (
        <div
            className="min-h-screen relative flex flex-col"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground
            }}
        >
            <main className="flex-1 pb-24 overflow-x-hidden safe-area-inset-bottom">
                {children}
            </main>
            <MobileBottomNav />
        </div>
    );
}
