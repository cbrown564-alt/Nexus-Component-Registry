import React from 'react';
import { PenSquare, Search, Sparkles } from 'lucide-react';
import StoryRail from '../components/social/StoryRail';
import FeedPost from '../components/social/FeedPost';
import { ProfileSummary, SuggestedFollows } from '../components/social/ProfileSidebar';
import SocialCard from '../components/social/SocialCard';

const SocialDashboard = () => {
    return (
        <div className="container mx-auto max-w-7xl min-h-screen px-4 md:px-8 py-6 font-sans text-zinc-200">

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 xl:grid-cols-4">

                {/* Left Sidebar (Desktop) */}
                <div className="hidden lg:block lg:col-span-1 space-y-6 sticky top-24 h-fit">
                    <ProfileSummary />

                    <div className="flex flex-wrap gap-2 text-xs text-zinc-500 px-2">
                        <a href="#" className="hover:underline">Terms</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Cookies</a>
                        <a href="#" className="hover:underline">Accessibility</a>
                        <a href="#" className="hover:underline">Ads Info</a>
                        <span>© 2024 Nexus Inc.</span>
                    </div>
                </div>

                {/* Center Feed */}
                <div className="lg:col-span-2 xl:col-span-2 space-y-4">

                    {/* Mobile/Tablet Profile Summary (visible only on small screens) */}
                    <div className="lg:hidden mb-6">
                        <ProfileSummary />
                    </div>

                    {/* Stories */}
                    <div className="border-b border-zinc-800 pb-2">
                        <h3 className="px-1 text-sm font-bold text-zinc-100 mb-2">Stories</h3>
                        <StoryRail />
                    </div>

                    {/* Compose Box */}
                    <SocialCard className="p-4 rounded-xl hidden md:block">
                        <div className="flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-800 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" alt="Me" className="h-full w-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="What's happening?"
                                    className="w-full bg-transparent text-lg text-zinc-100 placeholder-zinc-500 focus:outline-none"
                                />
                                <div className="mt-4 flex items-center justify-between border-t border-zinc-800 pt-3">
                                    <div className="flex gap-2 text-sky-500">
                                        {/* Mock Icons */}
                                        <div className="h-5 w-5 rounded cursor-pointer hover:bg-sky-500/10">📷</div>
                                        <div className="h-5 w-5 rounded cursor-pointer hover:bg-sky-500/10">GIF</div>
                                        <div className="h-5 w-5 rounded cursor-pointer hover:bg-sky-500/10">📊</div>
                                        <div className="h-5 w-5 rounded cursor-pointer hover:bg-sky-500/10">📍</div>
                                    </div>
                                    <button className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-bold text-white hover:bg-sky-600 transition-colors disabled:opacity-50">
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SocialCard>

                    {/* Posts Feed */}
                    <div className="space-y-0">
                        <FeedPost
                            author={{
                                name: 'Design Daily',
                                handle: 'designdaily',
                                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
                                time: '2h'
                            }}
                            content="Minimalism isn't about removing things you love. It's about removing the things that distract you from the things you love. ✨ #design #minimalism"
                            image="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200"
                            stats={{ likes: 1240, comments: 45, shares: 128 }}
                            delay={0.1}
                        />

                        <FeedPost
                            author={{
                                name: 'Tech Insider',
                                handle: 'tech_insider',
                                avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
                                time: '4h'
                            }}
                            content="Just pushed the new update to production! 🚀 Performance improved by 40%. Huge shoutout to the engineering team for the late nights. The future of web dev is looking bright."
                            stats={{ likes: 892, comments: 120, shares: 56 }}
                            delay={0.2}
                        />

                        <FeedPost
                            author={{
                                name: 'Sarah Chen',
                                handle: 'sarah_dev',
                                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
                                time: '5h'
                            }}
                            content="Does anyone else feel like CSS Grid is essentially magic? 🧙‍♀️ I just built a complex dashboard layout in 10 minutes that used to take me hours with floats."
                            stats={{ likes: 3504, comments: 412, shares: 230 }}
                            delay={0.3}
                        />

                        <FeedPost
                            author={{
                                name: 'Alex M.',
                                handle: 'alex_photo',
                                avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150',
                                time: '8h'
                            }}
                            content="Golden hour in Tokyo. The light hits differently here."
                            image="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200"
                            stats={{ likes: 15200, comments: 890, shares: 4500 }}
                            delay={0.4}
                        />
                    </div>
                </div>

                {/* Right Sidebar (Desktop) */}
                <div className="hidden xl:block xl:col-span-1 space-y-6 sticky top-24 h-fit">
                    <div className="relative group mb-6">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500 group-focus-within:text-sky-500" />
                        <input
                            type="text"
                            placeholder="Search Stream"
                            className="h-10 w-full rounded-full border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm text-zinc-200 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                        />
                    </div>

                    <SocialCard className="p-4 rounded-xl bg-zinc-900/50">
                        <h3 className="font-bold text-zinc-100 mb-4 text-lg">Trends for you</h3>
                        <div className="space-y-4">
                            {[
                                { topic: 'Technology · Trending', title: '#React19', posts: '24.5K posts' },
                                { topic: 'Design · Trending', title: 'Figma Config', posts: '120K posts' },
                                { topic: 'Business · Trending', title: 'AI Startups', posts: '54K posts' },
                                { topic: 'News · Trending', title: 'SpaceX', posts: '89K posts' },
                            ].map((trend, i) => (
                                <div key={i} className="flex justify-between items-start cursor-pointer hover:bg-zinc-800/50 -mx-2 p-2 rounded-lg transition-colors">
                                    <div>
                                        <div className="text-xs text-zinc-500">{trend.topic}</div>
                                        <div className="font-bold text-zinc-200 mt-0.5">{trend.title}</div>
                                        <div className="text-xs text-zinc-500 mt-0.5">{trend.posts}</div>
                                    </div>
                                    <button className="text-zinc-500 hover:text-zinc-300">···</button>
                                </div>
                            ))}
                        </div>
                    </SocialCard>

                    <SuggestedFollows />
                </div>

            </div>

            {/* Mobile Floating Action Button */}
            <div className="fixed bottom-6 right-6 md:hidden">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 active:scale-95 transition-all">
                    <PenSquare className="h-6 w-6" />
                </button>
            </div>

        </div>
    );
};

export default SocialDashboard;