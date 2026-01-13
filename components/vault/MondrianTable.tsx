import React from 'react';

const MondrianTable: React.FC = () => {
    // Generate some dummy crypto data
    const protocols = [
        { name: "AAVE", apy: "4.2%", tvl: "$5.2B", risk: "LOW" },
        { name: "CURVE", apy: "12.4%", tvl: "$3.1B", risk: "MED" },
        { name: "UNISWAP", apy: "8.1%", tvl: "$4.8B", risk: "LOW" },
        { name: "COMPOUND", apy: "3.5%", tvl: "$1.2B", risk: "LOW" },
        { name: "MAKER", apy: "2.1%", tvl: "$7.8B", risk: "MIN" },
    ];

    return (
        <div className="grid grid-cols-4 grid-rows-3 gap-[1px] bg-[#333] border border-[#333] font-mono text-xs h-[400px]">
            {/* Header */}
            <div className="col-span-2 row-span-1 bg-black p-4 flex flex-col justify-between group cursor-pointer hover:bg-[#111] transition-colors">
                <span className="text-gray-500 font-bold tracking-widest">PROTOCOL</span>
                <span className="text-2xl text-white font-bold">{protocols[0].name}</span>
            </div>

            <div className="col-span-1 row-span-1 bg-black p-4 flex flex-col justify-between border-l border-[#333]">
                <span className="text-gray-500 font-bold tracking-widest text-[10px]">APY</span>
                <span className="text-green-500 text-xl font-bold">{protocols[0].apy}</span>
            </div>

            <div className="col-span-1 row-span-2 bg-[#0a0a0a] p-4 flex flex-col justify-between border-l border-[#333]">
                <div>
                    <span className="text-gray-500 font-bold tracking-widest text-[10px] block mb-2">RISK FACTOR</span>
                    <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded-sm border border-green-500">LOW</span>
                </div>
                <div className="space-y-2 opacity-50">
                    <div className="h-1 w-full bg-[#333]" />
                    <div className="h-1 w-2/3 bg-[#333]" />
                    <div className="h-1 w-full bg-[#333]" />
                </div>
            </div>

            {/* Row 2 */}
            <div className="col-span-1 row-span-1 bg-black p-4 border-t border-[#333] flex items-center justify-center">
                <span className="text-white font-bold">{protocols[1].name}</span>
            </div>
            <div className="col-span-1 row-span-1 bg-black p-4 border-t border-l border-[#333] flex items-center justify-center">
                <span className="text-pink-500 font-bold">{protocols[1].apy}</span>
            </div>
            <div className="col-span-1 row-span-1 bg-black p-4 border-t border-l border-[#333] flex items-center justify-center">
                <span className="text-white font-bold">{protocols[2].name}</span>
            </div>

            {/* Row 3 - Large Block */}
            <div className="col-span-3 row-span-1 bg-black p-4 border-t border-[#333] flex justify-between items-center">
                <div className="flex gap-8">
                    {protocols.slice(3).map((p, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-gray-500 text-[10px] mb-1">{p.name}</span>
                            <span className="text-white font-bold">{p.tvl}</span>
                        </div>
                    ))}
                </div>
                <button className="text-[10px] uppercase border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors">
                    View All Assets
                </button>
            </div>

            {/* Corner Block */}
            <div className="col-span-1 row-span-1 bg-green-500 p-4 flex items-center justify-center">
                <span className="text-black font-black text-xl">+74%</span>
            </div>
        </div>
    );
};

export default MondrianTable;
