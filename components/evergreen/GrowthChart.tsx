import React from 'react';
import OrganicContainer from './OrganicContainer';
import { motion } from 'framer-motion';

const GrowthChart: React.FC = () => {
    // Adjusted path for a wider, less steep curve that encourages "filling the space" without looking stretched
    const path = "M 0 250 Q 200 200 400 220 T 700 150 T 1100 100 T 1600 50";

    return (
        <OrganicContainer className="h-[400px] w-full relative overflow-hidden" variant="glass">
            {/* Header */}
            <div className="absolute top-8 left-8 z-10">
                <h3 className="font-serif text-3xl text-[#1a2e1a]">Carbon Sequestration</h3>
                <p className="text-[#8f9e8a] text-sm uppercase tracking-widest font-bold mt-1">Yearly Impact (Tons)</p>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-3/4 w-full">
                {/* Using preserveAspectRatio="none" to make the chart fill the container responsively, 
                    but careful path design is needed to avoid ugly distortion. 
                    Alternatively, using a large viewBox width (1600) to match container. */}
                <svg viewBox="0 0 1600 300" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMid slice">
                    {/* Gradient Fill */}
                    <defs>
                        <linearGradient id="growGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#064e3b" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* The Growing Path */}
                    <motion.path
                        d={path}
                        fill="none"
                        stroke="#064e3b"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />

                    {/* Area under the curve */}
                    <motion.path
                        d={`${path} V 300 H 0 Z`}
                        fill="url(#growGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    />

                    {/* Leaf Nodes */}
                    {[
                        { cx: 400, cy: 220, label: 'Q1' },
                        { cx: 700, cy: 150, label: 'Q2' },
                        { cx: 1100, cy: 100, label: 'Q3' },
                        { cx: 1600, cy: 50, label: 'Q4' },
                    ].map((point, i) => (
                        <motion.g
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.5 + (i * 0.4), type: "spring" }}
                        >
                            <circle cx={point.cx} cy={point.cy} r="6" fill="#fbbf24" stroke="#fdfcf8" strokeWidth="2" />
                            {/* Little Leaf Icon SVG */}
                            <foreignObject x={point.cx - 12} y={point.cy - 30} width="24" height="24">
                                <div className="text-[#064e3b]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.5 2 4 5.5 4 10s3.5 8 8 8 8-3.5 8-8-3.5-8-8-8z" /></svg>
                                </div>
                            </foreignObject>
                        </motion.g>
                    ))}
                </svg>
            </div>
        </OrganicContainer>
    );
};

export default GrowthChart;
