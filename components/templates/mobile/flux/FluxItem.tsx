import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, Music2 } from 'lucide-react';
import { FluxItem } from '@/data/templates/flux';
import { useState, useRef } from 'react';

interface FluxItemProps {
    item: FluxItem;
    isActive: boolean;
}

export default function FluxItemView({ item, isActive }: FluxItemProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(item.likes);
    const [isFollowed, setIsFollowed] = useState(false);
    const [showHeartOverlay, setShowHeartOverlay] = useState(false);
    const lastTap = useRef<number>(0);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    const handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;

        if (now - lastTap.current < DOUBLE_TAP_DELAY) {
            if (!isLiked) {
                handleLike();
            }
            setShowHeartOverlay(true);
            setTimeout(() => setShowHeartOverlay(false), 1000);
        }
        lastTap.current = now;
    };

    const handleFollow = () => setIsFollowed(!isFollowed);

    const handleShare = () => {
        // Simple clipboard copy interaction
        navigator.clipboard.writeText(`Check out this post by ${item.username}`);
        alert('Link copied to clipboard!'); // Placeholder for a toast
    };

    return (
        <div
            className="relative h-full w-full bg-black overflow-hidden select-none"
            onClick={handleDoubleTap}
        >
            {/* Media Background */}
            <div className="absolute inset-0">
                <img
                    src={item.url}
                    alt={item.description}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Double Tap Heart Overlay */}
            <AnimatePresence>
                {showHeartOverlay && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <motion.div
                            initial={{ scale: 0, opacity: 0, rotate: -15 }}
                            animate={{ scale: 1.5, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0, opacity: 0, y: -100 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                        >
                            <Heart className="w-32 h-32 fill-white text-white drop-shadow-2xl" strokeWidth={0} />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Gradient Overlay - Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none" />

            {/* Right Sidebar Actions */}
            <div
                className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10"
                onClick={(e) => e.stopPropagation()} // Prevent double tap on buttons
            >
                <ActionButton
                    icon={Heart}
                    label={formatNumber(likeCount)}
                    isActive={isLiked}
                    activeColor="fill-red-500 text-red-500"
                    onClick={handleLike}
                />
                <ActionButton
                    icon={MessageCircle}
                    label={formatNumber(item.comments)}
                    onClick={() => alert('Comments view placeholder')}
                />
                <ActionButton
                    icon={Share2}
                    label="Share"
                    onClick={handleShare}
                />

                <div className="mt-4 animate-spin-slow">
                    <div className="w-12 h-12 rounded-full border-4 border-zinc-800 bg-zinc-900 overflow-hidden">
                        <img src={item.url} className="w-full h-full object-cover opacity-80" />
                    </div>
                </div>
            </div>

            {/* Bottom Content */}
            <div
                className="absolute bottom-4 left-4 right-16 z-10 text-white"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-2 mb-2 opacity-90">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                        {item.username[1].toUpperCase()}
                    </div>
                    <span className="font-semibold text-sm tracking-wide">{item.username}</span>
                    <button
                        onClick={handleFollow}
                        className={`px-3 py-0.5 border transition-all rounded-full text-[10px] font-medium backdrop-blur-sm ${isFollowed
                                ? 'bg-transparent border-white/30 text-white/60'
                                : 'bg-white text-black border-white'
                            }`}
                    >
                        {isFollowed ? 'Following' : 'Follow'}
                    </button>
                </div>

                <p className="text-sm mb-3 leading-relaxed text-zinc-100">
                    {item.description}
                </p>

                {item.song && (
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                        <Music2 className="w-3 h-3" />
                        <div className="overflow-hidden">
                            <div className="whitespace-nowrap animate-marquee">
                                {item.song} • Original Audio •
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

interface ActionButtonProps {
    icon: any;
    label: string;
    isActive?: boolean;
    activeColor?: string;
    onClick?: () => void;
}

function ActionButton({ icon: Icon, label, isActive, activeColor = '', onClick }: ActionButtonProps) {
    return (
        <div className="flex flex-col items-center gap-1">
            <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={onClick}
                className={`w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors`}
            >
                <Icon
                    className={`w-6 h-6 text-white transition-colors ${isActive ? activeColor : ''}`}
                    strokeWidth={isActive ? 0 : 1.5}
                    fill={isActive ? 'currentColor' : 'none'}
                />
            </motion.button>
            <span className="text-[10px] font-medium text-white shadow-black drop-shadow-md">{label}</span>
        </div>
    );
}

function formatNumber(num: number): string {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}
