import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat, Share2, MoreHorizontal, Bookmark } from 'lucide-react';
import SocialCard from './SocialCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import type { PlaygroundTheme } from '@/data/playgroundThemes';

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
    theme?: PlaygroundTheme;
}

const FeedPost: React.FC<FeedPostProps> = ({ author, content, image, stats, delay, theme: themeProp }) => {
    const { currentPlaygroundTheme } = useTheme();
    const theme = themeProp || currentPlaygroundTheme;

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

    const accentColor = theme.colors.primary;

    return (
        <SocialCard delay={delay} className="p-0 border-0 border-b rounded-none transition-colors" style={{ borderColor: theme.colors.border, backgroundColor: 'transparent' }}>
            <div className="flex gap-4 p-4">
                {/* Avatar */}
                <div className="shrink-0">
                    <img src={author.avatar} alt={author.name} className="h-10 w-10 rounded-full object-cover" style={{ backgroundColor: theme.colors.muted }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 truncate">
                            <span className="font-bold hover:underline cursor-pointer" style={{ color: theme.colors.foreground }}>{author.name}</span>
                            <span className="text-sm" style={{ color: theme.colors.mutedForeground }}>@{author.handle}</span>
                            <span className="text-sm" style={{ color: theme.colors.mutedForeground }}>·</span>
                            <span className="text-sm hover:underline cursor-pointer" style={{ color: theme.colors.mutedForeground }}>{author.time}</span>
                        </div>
                        <button className="rounded-full p-1 transition-colors" style={{ color: theme.colors.mutedForeground }}>
                            <MoreHorizontal className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="mt-1 whitespace-pre-wrap leading-relaxed" style={{ color: theme.colors.foreground }}>
                        {content}
                    </div>

                    {/* Media */}
                    {image && (
                        <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: theme.colors.border }}>
                            <img src={image} alt="Post content" className="w-full object-cover max-h-[400px]" />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="mt-3 flex items-center justify-between max-w-md pr-4">
                        <button className="group flex items-center gap-2 transition-colors" style={{ color: theme.colors.mutedForeground }}>
                            <div className="rounded-full p-2 transition-colors" style={{ backgroundColor: 'transparent' }}>
                                <MessageCircle className="h-4 w-4" />
                            </div>
                            <span className="text-xs">{stats.comments}</span>
                        </button>

                        <button className="group flex items-center gap-2 transition-colors" style={{ color: theme.colors.mutedForeground }}>
                            <div className="rounded-full p-2 transition-colors">
                                <Repeat className="h-4 w-4" />
                            </div>
                            <span className="text-xs">{stats.shares}</span>
                        </button>

                        <button
                            onClick={handleLike}
                            className={`group flex items-center gap-2 transition-colors`}
                            style={{ color: liked ? theme.colors.accent : theme.colors.mutedForeground }}
                        >
                            <div className="rounded-full p-2 transition-colors relative">
                                <Heart className={`h-4 w-4 transition-transform ${liked ? 'fill-current scale-110' : ''}`} />
                                {liked && (
                                    <span className="absolute inset-0 animate-ping rounded-full opacity-20" style={{ backgroundColor: theme.colors.accent }}></span>
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
                            <button className="group transition-colors" style={{ color: theme.colors.mutedForeground }}>
                                <div className="rounded-full p-2">
                                    <Bookmark className="h-4 w-4" />
                                </div>
                            </button>
                            <button className="group transition-colors" style={{ color: theme.colors.mutedForeground }}>
                                <div className="rounded-full p-2">
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