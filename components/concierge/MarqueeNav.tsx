import React from 'react';
import { motion } from 'framer-motion';

export interface MarqueeNavProps {
    /** Array of items to display in the marquee */
    items?: string[];
    /** Separator between items */
    separator?: string;
    /** Duration in seconds for one complete scroll */
    scrollDuration?: number;
    /** Background color */
    bgColor?: string;
    /** Text color */
    textColor?: string;
}

const defaultItems = [
    "Concierge Service Available 24/7",
    "Spa Reservations Open",
    "Private Dining: Chef's Table",
    "Valet Parking Status: Active",
    "Weather: 24°C Clear",
];

const MarqueeNav: React.FC<MarqueeNavProps> = ({
    items = defaultItems,
    separator = "•",
    scrollDuration = 20,
    bgColor = "#cda45e",
    textColor = "#09090b",
}) => {
    // Build the full items array with separators
    const fullItems = items.flatMap((item, i) =>
        i < items.length - 1 ? [item, separator] : [item, separator]
    );

    return (
        <div className="w-full overflow-hidden py-2 border-y border-[#18181b]" style={{ backgroundColor: bgColor }}>
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-12 px-4"
                    animate={{ x: "-50%" }}
                    transition={{ duration: scrollDuration, repeat: Infinity, ease: "linear" }}
                >
                    {[...fullItems, ...fullItems, ...fullItems].map((item, i) => (
                        <span key={i} className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: textColor }}>
                            {item}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-12 px-4"
                    animate={{ x: "-50%" }}
                    transition={{ duration: scrollDuration, repeat: Infinity, ease: "linear" }}
                >
                    {[...fullItems, ...fullItems, ...fullItems].map((item, i) => (
                        <span key={i} className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: textColor }}>
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MarqueeNav;
