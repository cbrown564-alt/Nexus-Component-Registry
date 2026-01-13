import React from 'react';
import { motion } from 'framer-motion';

const MarqueeNav: React.FC = () => {
    const items = [
        "Concierge Service Available 24/7",
        "•",
        "Spa Reservations Open",
        "•",
        "Private Dining: Chef's Table",
        "•",
        "Valet Parking Status: Active",
        "•",
        "Weather: 24°C Clear",
        "•",
    ];

    return (
        <div className="w-full bg-[#cda45e] overflow-hidden py-2 border-y border-[#18181b]">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-12 px-4"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <span key={i} className="text-[#09090b] text-xs font-bold uppercase tracking-[0.2em]">
                            {item}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-12 px-4"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <span key={i} className="text-[#09090b] text-xs font-bold uppercase tracking-[0.2em]">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MarqueeNav;
