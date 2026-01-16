import { fluxData } from '@/data/templates/flux';
import FluxItemView from './FluxItem';
import { Search, Home, PlusSquare, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function FluxTemplate() {
    type Tab = 'home' | 'discover' | 'inbox' | 'profile';
    const [activeTab, setActiveTab] = useState<Tab>('home');

    return (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col">
            {/* Top Bar - Semi-transparent glass */}
            <div className="absolute top-0 left-0 right-0 h-16 px-4 z-50 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-4">
                    <Link to="/mobile/templates" className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white transition-colors">
                        <Home className="w-6 h-6" />
                    </Link>
                    <button
                        onClick={() => alert('Search placeholder')}
                        className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                    >
                        <Search className="w-6 h-6" />
                    </button>
                </div>

                <div className="pointer-events-auto flex gap-6 text-white font-medium text-base shadow-black text-shadow-sm">
                    <span
                        className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => alert('Switching feed is not implemented yet')}
                    >
                        Following
                    </span>
                    <span className="font-bold border-b-2 border-white pb-0.5 cursor-pointer">For You</span>
                </div>

                <div className="w-20" /> {/* Spacer for balance with left controls */}
            </div>

            {/* Snap Container */}
            <div className="flex-1 w-full overflow-y-scroll snap-y snap-mandatory bg-black no-scrollbar overscroll-y-none">
                {fluxData.map((item) => (
                    <div key={item.id} className="h-full w-full snap-start snap-always relative">
                        <FluxItemView item={item} isActive={true} />
                    </div>
                ))}
            </div>

            {/* Bottom Nav */}
            <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-black border-t border-zinc-800 flex items-center justify-around z-50 pb-2 px-2">
                <NavButton
                    icon={Home}
                    label="Home"
                    isActive={activeTab === 'home'}
                    onClick={() => setActiveTab('home')}
                />
                <NavButton
                    icon={Search}
                    label="Discover"
                    isActive={activeTab === 'discover'}
                    onClick={() => setActiveTab('discover')}
                />

                <button
                    onClick={() => alert('Add Post placeholder')}
                    className="flex items-center justify-center -mt-4 active:scale-90 transition-transform"
                >
                    <div className="w-12 h-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
                        <PlusSquare className="w-5 h-5 text-white" />
                    </div>
                </button>

                <NavButton
                    icon={MessageCircle}
                    label="Inbox"
                    isActive={activeTab === 'inbox'}
                    onClick={() => setActiveTab('inbox')}
                />
                <NavButton
                    icon={User}
                    label="Profile"
                    isActive={activeTab === 'profile'}
                    onClick={() => setActiveTab('profile')}
                />
            </div>
        </div>
    );
}

function NavButton({ icon: Icon, label, isActive, onClick }: { icon: any, label: string, isActive?: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center w-12 h-full gap-0.5 active:scale-95 transition-transform ${isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
            <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[9px] font-medium">{label}</span>
        </button>
    );
}
