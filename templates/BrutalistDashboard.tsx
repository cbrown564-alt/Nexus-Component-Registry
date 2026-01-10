import { Move } from 'lucide-react';
import BrutalistCard from '../components/brutalist/BrutalistCard';
import BrutalistButton from '../components/brutalist/BrutalistButton';
import ArtGrid from '../components/brutalist/ArtGrid';
import Manifesto from '../components/brutalist/Manifesto';

const BrutalistDashboard = () => {
    return (
        <div className="min-h-screen bg-[#e0e0e0] text-black">
            {/* Marquee - inline version */}
            <div className="w-full border-y-4 border-black bg-yellow-400 py-4 overflow-hidden">
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                    <span className="font-mono text-3xl font-bold text-black uppercase">
                        BRUTALISM // ARCHIVE // RAW // UNPOLISHED // BRUTALISM // ARCHIVE // RAW // UNPOLISHED // BRUTALISM // ARCHIVE // RAW // UNPOLISHED //
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-12">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
                    ARCHIVE<span className="opacity-30">_01</span>
                </h1>
                
                <div className="flex gap-4 mb-12">
                    <BrutalistButton variant="neo" color="bg-red-500 text-white hover:bg-red-600">
                        Explore Works
                    </BrutalistButton>
                    <BrutalistButton variant="neo">
                        Read Info
                    </BrutalistButton>
                </div>

                {/* Filter Bar */}
                <div className="flex justify-between px-6 py-2 border-y-2 border-black bg-white font-mono text-xs uppercase font-bold mb-6">
                    <span>Filter: All</span>
                    <span>Sort: Chaos</span>
                    <span>View: Grid</span>
                </div>

                {/* Art Grid - using original component */}
                <ArtGrid />

                {/* Manifesto - using original component */}
                <Manifesto />

                {/* Footer */}
                <footer className="border-t-4 border-black bg-white p-6 -mx-6">
                    <div className="flex justify-between font-mono text-sm">
                        <div className="flex gap-4">
                            <a href="#" className="hover:bg-yellow-400 px-1">Email</a>
                            <a href="#" className="hover:bg-yellow-400 px-1">Instagram</a>
                        </div>
                        <span className="font-bold">© 2024 RAW_THEME</span>
                    </div>
                </footer>
            </main>

            {/* Floating Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <BrutalistButton variant="neo" size="icon" icon={<Move className="h-6 w-6" />} color="bg-black text-yellow-400" className="w-14 h-14 rounded-full" />
            </div>
        </div>
    );
};

export default BrutalistDashboard;