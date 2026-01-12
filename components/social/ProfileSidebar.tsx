import React from 'react';
import SocialCard from './SocialCard';
import { MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

export const ProfileSummary = () => {
    return (
        <SocialCard className="p-0 rounded-xl" style={{ backgroundColor: 'rgba(24,24,27,0.5)' }}>
            <div className="h-24 bg-gradient-to-r from-sky-500 to-indigo-600"></div>
            <div className="px-5 pb-5">
                <div className="relative -mt-10 mb-3">
                    <div className="h-20 w-20 rounded-full border-4 overflow-hidden" style={{ borderColor: '#09090b', backgroundColor: '#27272a' }}>
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Profile" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-bold" style={{ color: '#f4f4f5' }}>Alex Designer</h2>
                    <p style={{ color: '#71717a' }}>@alex_ui</p>
                </div>
                <p className="text-sm mb-4" style={{ color: '#d4d4d8' }}>
                    Building digital experiences. 🎨 UI/UX enthusiast. Coffee addict. ☕
                </p>
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs mb-5" style={{ color: '#71717a' }}>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        San Francisco
                    </div>
                    <div className="flex items-center gap-1">
                        <LinkIcon className="h-3.5 w-3.5" />
                        alex.design
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        Joined March 2019
                    </div>
                </div>
                <div className="flex gap-4 text-sm">
                    <div className="hover:underline cursor-pointer"><span className="font-bold" style={{ color: '#f4f4f5' }}>1,204</span> <span style={{ color: '#71717a' }}>Following</span></div>
                    <div className="hover:underline cursor-pointer"><span className="font-bold" style={{ color: '#f4f4f5' }}>8,932</span> <span style={{ color: '#71717a' }}>Followers</span></div>
                </div>
            </div>
        </SocialCard>
    );
};

export const SuggestedFollows = () => {
    return (
        <SocialCard className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(24,24,27,0.5)' }}>
            <h3 className="font-bold mb-4 text-lg" style={{ color: '#f4f4f5' }}>Who to follow</h3>
            <div className="space-y-4">
                {[
                    { name: 'Framer', handle: '@framer', img: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=100' },
                    { name: 'Tailwind CSS', handle: '@tailwindcss', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=100' },
                    { name: 'React', handle: '@reactjs', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=100' },
                ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden" style={{ backgroundColor: '#27272a' }}>
                                <img src={user.img} alt={user.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <div className="text-sm font-bold hover:underline cursor-pointer" style={{ color: '#f4f4f5' }}>{user.name}</div>
                                <div className="text-xs" style={{ color: '#71717a' }}>{user.handle}</div>
                            </div>
                        </div>
                        <button className="rounded-full px-3 py-1.5 text-xs font-bold transition-colors" style={{ backgroundColor: '#f4f4f5', color: '#18181b' }}>
                            Follow
                        </button>
                    </div>
                ))}
            </div>
            <button className="mt-4 w-full text-left text-sm text-sky-500 hover:text-sky-400">
                Show more
            </button>
        </SocialCard>
    )
}