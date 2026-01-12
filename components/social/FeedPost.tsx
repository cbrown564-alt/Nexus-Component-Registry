import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat, Share2, MoreHorizontal, Bookmark } from 'lucide-react';
import SocialCard from './SocialCard';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedPostProps {
    author: {
        name: string;
        handle: string;
        avatar: string;
        time: string;
    };
    content: string;
    image?: string;
    stats: {
        likes: number;
        comments: number;
        shares: number;
    };
    delay?: number;
}

const FeedPost: React.FC<FeedPostProps> = ({ author, content, image, stats, delay }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(stats.likes);

    const handleLike = () => {
        if (liked) {
            setLikeCount(prev => prev - 1);
        } else {
            setLikeCount(prev => prev + 1);
        }
        setLiked(!liked);
    };

    return (
        <SocialCard delay={delay} className="p-0 border-0 border-b rounded-none transition-colors" style={{ borderColor: '#27272a', backgroundColor: 'transparent' }}>
            <div className="flex gap-4 p-4">
                {/* Avatar */}
                <div className="shrink-0">
                    <img src={author.avatar} alt={author.name} className="h-10 w-10 rounded-full object-cover" style={{ backgroundColor: '#27272a' }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 truncate">
                            <span className="font-bold hover:underline cursor-pointer" style={{ color: '#f4f4f5' }}>{author.name}</span>
                            <span className="text-sm" style={{ color: '#71717a' }}>@{author.handle}</span>
                            <span className="text-sm" style={{ color: '#71717a' }}>·</span>
                            <span className="text-sm hover:underline cursor-pointer" style={{ color: '#71717a' }}>{author.time}</span>
                        </div>
                        <button className="rounded-full p-1 hover:bg-sky-500/10 transition-colors" style={{ color: '#71717a' }}>
                            <MoreHorizontal className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="mt-1 whitespace-pre-wrap leading-relaxed" style={{ color: '#d4d4d8' }}>
                        {content}
                    </div>

                    {/* Media */}
                    {image && (
                        <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: '#27272a' }}>
                            <img src={image} alt="Post content" className="w-full object-cover max-h-[400px]" />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="mt-3 flex items-center justify-between max-w-md pr-4">
                        <button className="group flex items-center gap-2 hover:text-sky-400 transition-colors" style={{ color: '#71717a' }}>
                            <div className="rounded-full p-2 group-hover:bg-sky-500/10 transition-colors">
                                <MessageCircle className="h-4 w-4" />
                            </div>
                            <span className="text-xs">{stats.comments}</span>
                        </button>

                        <button className="group flex items-center gap-2 hover:text-green-400 transition-colors" style={{ color: '#71717a' }}>
                            <div className="rounded-full p-2 group-hover:bg-green-500/10 transition-colors">
                                <Repeat className="h-4 w-4" />
                            </div>
                            <span className="text-xs">{stats.shares}</span>
                        </button>

                        <button
                            onClick={handleLike}
                            className={`group flex items-center gap-2 transition-colors ${liked ? 'text-pink-500' : 'hover:text-pink-500'}`}
                            style={!liked ? { color: '#71717a' } : undefined}
                        >
                            <div className="rounded-full p-2 group-hover:bg-pink-500/10 transition-colors relative">
                                <Heart className={`h-4 w-4 transition-transform ${liked ? 'fill-current scale-110' : ''}`} />
                                {liked && (
                                    <span className="absolute inset-0 animate-ping rounded-full bg-pink-500 opacity-20"></span>
                                )}
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={likeCount}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 10, opacity: 0 }}
                                    className="text-xs"
                                >
                                    {likeCount}
                                </motion.span>
                            </AnimatePresence>
                        </button>

                        <div className="flex gap-1">
                            <button className="group hover:text-sky-400 transition-colors" style={{ color: '#71717a' }}>
                                <div className="rounded-full p-2 group-hover:bg-sky-500/10">
                                    <Bookmark className="h-4 w-4" />
                                </div>
                            </button>
                            <button className="group hover:text-sky-400 transition-colors" style={{ color: '#71717a' }}>
                                <div className="rounded-full p-2 group-hover:bg-sky-500/10">
                                    <Share2 className="h-4 w-4" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </SocialCard>
    );
};

export default FeedPost;