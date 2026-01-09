import React from 'react';
import { MousePointer2, Move, X } from 'lucide-react';
import MarqueeHeader from '../components/brutalist/MarqueeHeader';
import ArtGrid from '../components/brutalist/ArtGrid';
import Manifesto from '../components/brutalist/Manifesto';
import BrutalistCard from '../components/brutalist/BrutalistCard';
import BrutalistButton from '../components/brutalist/BrutalistButton';

const BrutalistDashboard = () => {
    return (
        <div className="min-h-screen bg-[#e0e0e0] font-sans text-black selection:bg-black selection:text-yellow-400 overflow-x-hidden relative cursor-crosshair">

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ zIndex: -1, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            <MarqueeHeader />

            <main className="container mx-auto max-w-7xl relative z-10">

                {/* Header Section */}
                <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-6">
                            ARCHIVE<span className="text-stroke text-transparent stroke-black text-stroke-2">_01</span>
                        </h1>
                        <div className="flex gap-4">
                            <BrutalistButton variant="neo" color="bg-red-500 text-white hover:bg-red-600">
                                Explore Works
                            </BrutalistButton>
                            <BrutalistButton variant="neo">
                                Read Info
                            </BrutalistButton>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <BrutalistCard className="bg-white rotate-2 z-10 w-64 absolute right-20 top-0 text-center py-8">
                            <div className="text-6xl font-black mb-2">★</div>
                            <div className="font-mono text-xs uppercase border-t-2 border-black pt-2 mx-4">Featured Artist</div>
                        </BrutalistCard>
                        <BrutalistCard className="bg-blue-600 -rotate-3 z-0 w-64 absolute right-10 top-10 h-64 border-black">
                            <div className="h-full w-full bg-blue-600" />
                        </BrutalistCard>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="flex justify-between items-center px-6 py-2 border-y-2 border-black bg-white font-mono text-xs uppercase font-bold sticky top-0 z-20">
                        <span>Filter: All</span>
                        <span>Sort: Chaos</span>
                        <span>View: Grid</span>
                    </div>

                    <ArtGrid />
                </div>

                <Manifesto />

                {/* Floating Elements */}
                <div className="fixed bottom-8 right-8 z-50">
                    <BrutalistButton variant="neo" size="icon" icon={<Move className="h-8 w-8" />} color="bg-black text-yellow-400 rounded-full" className="w-16 h-16 rounded-full" />
                </div>

                {/* Footer */}
                <footer className="border-t-[3px] border-black bg-white p-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-sm">
                        <div>
                            <h4 className="font-bold mb-4 uppercase bg-black text-white inline-block px-1">Contact</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:bg-yellow-400 hover:px-1 transition-all">Email</a></li>
                                <li><a href="#" className="hover:bg-yellow-400 hover:px-1 transition-all">Instagram</a></li>
                                <li><a href="#" className="hover:bg-yellow-400 hover:px-1 transition-all">Twitter</a></li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h4 className="font-bold mb-4 uppercase bg-black text-white inline-block px-1">Newsletter</h4>
                            <div className="flex border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                                <input type="email" placeholder="ENTER_EMAIL" className="bg-transparent px-4 py-2 w-full outline-none placeholder-gray-500 font-bold" />
                                <button className="bg-black text-white px-6 font-bold hover:bg-yellow-400 hover:text-black transition-colors">→</button>
                            </div>
                        </div>
                        <div className="text-right flex flex-col justify-between">
                            <X className="h-8 w-8 ml-auto" />
                            <span className="font-bold">© 2024 RAW_THEME</span>
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    );
};

export default BrutalistDashboard;