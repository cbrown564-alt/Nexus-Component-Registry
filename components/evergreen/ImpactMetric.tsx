import React from 'react';
import OrganicContainer from './OrganicContainer';
import { Leaf, RefreshCcw, TreePine, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImpactMetricProps {
    label: string;
    value: string | number;
    unit?: string;
    icon: 'leaf' | 'recycle' | 'tree' | 'air';
    trend?: string; // e.g. "+12%"
    delay?: number;
}

const ImpactMetric: React.FC<ImpactMetricProps> = ({ label, value, unit, icon, trend, delay }) => {

    const IconMap = {
        leaf: Leaf,
        recycle: RefreshCcw,
        tree: TreePine,
        air: Wind
    };

    const Icon = IconMap[icon];

    return (
        <OrganicContainer delay={delay} className="flex flex-col justify-between h-full min-h-[160px]">
            <div className="flex justify-between items-start">
                <div className="p-2 bg-[#064e3b]/10 rounded-full text-[#064e3b] shadow-sm">
                    <Icon size={24} strokeWidth={1.5} />
                </div>
                {trend && (
                    <span className="text-xs font-bold text-[#064e3b] bg-[#064e3b]/10 px-2 py-1 rounded-full border border-[#064e3b]/10">
                        {trend}
                    </span>
                )}
            </div>

            <div className="mt-4">
                <h3 className="text-3xl font-serif text-[#1a2e1a] mb-1">
                    {value}
                    {unit && <span className="text-sm text-[#8f9e8a] font-sans ml-1">{unit}</span>}
                </h3>
                <p className="text-sm text-[#8f9e8a] font-bold uppercase tracking-widest opacity-80">{label}</p>
            </div>

            {/* Decorative organic blob in background */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#fbbf24]/10 opacity-50 z-0 pointer-events-none"
                style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            />
        </OrganicContainer>
    );
};

export default ImpactMetric;
