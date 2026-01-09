import React from 'react';
import SocialCard from './SocialCard';
import { MapPin, Link as LinkIcon, Calendar } from 'lucide-react';

export const ProfileSummary = () => {
  return (
    <SocialCard className="p-0 rounded-xl bg-zinc-900/50">
      <div className="h-24 bg-gradient-to-r from-sky-500 to-indigo-600"></div>
      <div className="px-5 pb-5">
        <div className="relative -mt-10 mb-3">
            <div className="h-20 w-20 rounded-full border-4 border-zinc-950 bg-zinc-800 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Profile" className="h-full w-full object-cover" />
            </div>
        </div>
        <div className="mb-4">
            <h2 className="text-lg font-bold text-zinc-100">Alex Designer</h2>
            <p className="text-zinc-500">@alex_ui</p>
        </div>
        <p className="text-sm text-zinc-300 mb-4">
            Building digital experiences. 🎨 UI/UX enthusiast. Coffee addict. ☕
        </p>
        <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-zinc-500 mb-5">
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
            <div className="hover:underline cursor-pointer"><span className="font-bold text-zinc-100">1,204</span> <span className="text-zinc-500">Following</span></div>
            <div className="hover:underline cursor-pointer"><span className="font-bold text-zinc-100">8,932</span> <span className="text-zinc-500">Followers</span></div>
        </div>
      </div>
    </SocialCard>
  );
};

export const SuggestedFollows = () => {
    return (
        <SocialCard className="p-4 rounded-xl bg-zinc-900/50">
            <h3 className="font-bold text-zinc-100 mb-4 text-lg">Who to follow</h3>
            <div className="space-y-4">
                {[
                    { name: 'Framer', handle: '@framer', img: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=100' },
                    { name: 'Tailwind CSS', handle: '@tailwindcss', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=100' },
                    { name: 'React', handle: '@reactjs', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=100' },
                ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-zinc-800 overflow-hidden">
                                <img src={user.img} alt={user.name} className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-zinc-100 hover:underline cursor-pointer">{user.name}</div>
                                <div className="text-xs text-zinc-500">{user.handle}</div>
                            </div>
                        </div>
                        <button className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-bold text-zinc-900 hover:bg-zinc-200 transition-colors">
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