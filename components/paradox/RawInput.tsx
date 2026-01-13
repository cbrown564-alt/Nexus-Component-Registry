import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

const RawInput: React.FC<HTMLMotionProps<"input">> = (props) => {
    return (
        <motion.input
            whileFocus={{
                x: [0, -2, 2, 0],
                backgroundColor: ["#ffffff", "#ffffe0", "#e0ffff", "#ffffff"]
            }}
            transition={{ duration: 0.2 }}
            className="border-2 border-neutral-400 border-l-black border-t-black border-r-white border-b-white bg-white px-2 py-1 font-mono text-sm shadow-inner outline-none focus:bg-[#ffff00] w-full"
            {...props}
        />
    );
};

export default RawInput;
