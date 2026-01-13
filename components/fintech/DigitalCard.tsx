import React from 'react';
import { Wifi } from 'lucide-react';
import FintechCard from './FintechCard';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface DigitalCardProps {
    cardNumber?: string;
    holderName?: string;
    expiry?: string;
}

const DigitalCard: React.FC<DigitalCardProps> = ({
    cardNumber = "**** **** **** 8821",
    holderName = "ALEXANDER MORGAN",
    expiry = "12/28"
}) => {
    const { currentPlaygroundTheme } = useTheme();

    return (
        <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="relative h-56 w-full overflow-hidden rounded-2xl p-6 shadow-2xl border group perspective-1000"
            style={{
                background: `linear-gradient(135deg, ${currentPlaygroundTheme.colors.card}, ${currentPlaygroundTheme.colors.background})`,
                borderColor: currentPlaygroundTheme.colors.border
            }}
        >
            {/* Mesh Gradient Overlay */}
            <div className="absolute inset-0 opacity-40"
                style={{
                    background: `radial-gradient(circle at 100% 0%, ${currentPlaygroundTheme.colors.primary} 0%, transparent 50%), radial-gradient(circle at 0% 100%, #172554 0%, transparent 50%)`
                }}
            />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="relative z-10 flex h-full flex-col justify-between" style={{ color: currentPlaygroundTheme.colors.foreground }}>
                <div className="flex justify-between items-start">
                    <div className="h-8 w-12 rounded bg-gradient-to-r from-white/30 to-white/10" /> {/* Chip */}
                    <Wifi className="h-6 w-6 rotate-90" style={{ opacity: 0.7 }} />
                </div>

                <div className="space-y-6">
                    <div className="font-mono text-xl tracking-[0.2em] text-shadow-sm">
                        {cardNumber}
                    </div>

                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-[10px] uppercase tracking-widest mb-1" style={{ opacity: 0.6 }}>Cardholder</div>
                            <div className="font-medium tracking-wide text-sm">{holderName}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] uppercase tracking-widest mb-1" style={{ opacity: 0.6 }}>Expires</div>
                            <div className="font-mono text-sm">{expiry}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
        </motion.div>
    );
};

export default DigitalCard;