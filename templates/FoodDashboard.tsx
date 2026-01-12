import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Bell,
    ChefHat,
    Heart,
    Filter,
    MapPin,
    Clock,
    Star,
    ChevronRight,
    Flame,
    Leaf,
    Sparkles,
    Package,
    Check
} from 'lucide-react';
import HeroDish from '../components/food/HeroDish';
import MenuGrid from '../components/food/MenuGrid';
import CartWidget from '../components/food/CartWidget';
import FoodCard from '../components/food/FoodCard';
import FoodButton from '../components/food/FoodButton';

import { useTheme } from '@/context/ThemeContext';

const FoodDashboard = () => {
    const { currentPlaygroundTheme: theme, setScopedTheme } = useTheme();

    React.useEffect(() => {
        setScopedTheme('organic', 'food');
    }, []);

    const [activeCategory, setActiveCategory] = useState('All');
    const [hasActiveOrder, setHasActiveOrder] = useState(true);

    const categories = [
        { name: 'All', emoji: '🍽️' },
        { name: 'Pizza', emoji: '🍕' },
        { name: 'Sushi', emoji: '🍣' },
        { name: 'Burgers', emoji: '🍔' },
        { name: 'Healthy', emoji: '🥗' },
        { name: 'Desserts', emoji: '🍰' },
    ];

    return (
        <div
            className="min-h-screen font-sans overflow-hidden"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily
            }}
        >

            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${theme.colors.background}cc`, borderColor: `${theme.colors.border}80` }}>
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex h-16 items-center justify-between gap-4">
                        {/* Logo & Location */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20" style={{ color: '#ffffff' }}>
                                <ChefHat className="h-5 w-5" />
                            </div>
                            <div className="hidden sm:block">
                                <div className="flex items-center gap-1 text-xs" style={{ color: '#a8a29e' }}>
                                    <MapPin className="h-3 w-3" />
                                    Delivering to
                                </div>
                                <div className="font-semibold" style={{ color: '#ffffff' }}>123 Main Street</div>
                            </div>
                        </motion.div>

                        {/* Search */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex-1 max-w-xl hidden md:block"
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: theme.colors.mutedForeground }} />
                                <input
                                    type="text"
                                    placeholder="Search for dishes, cuisines, restaurants..."
                                    className="h-11 w-full rounded-full border pl-11 pr-4 text-sm focus:outline-none focus:ring-2 transition-all"
                                    style={{
                                        backgroundColor: theme.colors.muted,
                                        borderColor: theme.colors.border,
                                        color: theme.colors.foreground,
                                        // focus ring color logic would be here or use CSS class
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2"
                        >
                            <FoodButton variant="ghost" size="sm" className="hover:text-[#ffffff]" style={{ color: theme.colors.mutedForeground }}>
                                <Heart className="h-5 w-5" />
                            </FoodButton>
                            <FoodButton variant="ghost" size="sm" className="hover:text-[#ffffff] relative" style={{ color: theme.colors.mutedForeground }}>
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 h-2 w-2 rounded-full ring-2" style={{ backgroundColor: theme.colors.primary }} />
                            </FoodButton>
                            <div className="h-9 w-9 rounded-full ring-2" style={{ background: `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.accent})` }} />
                        </motion.div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 md:px-8 py-6">



                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold" style={{ color: theme.colors.foreground }}>Categories</h2>
                        <button className="flex items-center gap-1 text-sm hover:opacity-80 transition-colors" style={{ color: theme.colors.primary }}>
                            See all <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-sm whitespace-nowrap transition-all border`}
                                style={{
                                    backgroundColor: activeCategory === cat.name ? theme.colors.primary : `${theme.colors.muted}80`,
                                    color: activeCategory === cat.name ? theme.colors.primaryForeground : theme.colors.mutedForeground,
                                    borderColor: activeCategory === cat.name ? theme.colors.primary : theme.colors.border,
                                    boxShadow: activeCategory === cat.name ? `0 10px 15px -3px ${theme.colors.primary}40` : 'none'
                                }}
                            >
                                <span className="text-lg">{cat.emoji}</span>
                                {cat.name}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>



                {/* Main Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Featured Dish */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold flex items-center gap-2" style={{ color: theme.colors.foreground }}>
                                    <Flame className="h-5 w-5" style={{ color: theme.colors.primary }} />
                                    Featured Today
                                </h2>
                            </div>
                            <HeroDish />
                        </motion.div>

                        {/* Promotional Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                        >
                            <div className="relative overflow-hidden rounded-2xl p-6" style={{ background: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.accent})` }}>
                                <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
                                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full translate-y-1/2 -translate-x-1/2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className="h-5 w-5 text-yellow-300" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-orange-200">Limited Time</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1" style={{ color: '#ffffff' }}>Get 25% off your first order!</h3>
                                        <p className="text-orange-100 text-sm">Use code WELCOME25 at checkout</p>
                                    </div>
                                    <FoodButton variant="secondary" className="hover:bg-orange-50 shadow-lg font-bold" style={{ backgroundColor: '#ffffff', color: theme.colors.primary }}>
                                        Order Now
                                    </FoodButton>
                                </div>
                            </div>
                        </motion.div>

                        {/* Menu Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold" style={{ color: theme.colors.foreground }}>Popular Near You</h2>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs" style={{ backgroundColor: theme.colors.muted, borderColor: theme.colors.border, color: theme.colors.mutedForeground }}>
                                        <Filter className="h-3.5 w-3.5" />
                                        Filters
                                    </button>
                                </div>
                            </div>
                            <MenuGrid />
                        </motion.div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Active Order Tracker (Sidebar) */}
                        {hasActiveOrder && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <FoodCard className="p-4" style={{ backgroundColor: `${theme.colors.primary}10`, borderColor: `${theme.colors.primary}30` }}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${theme.colors.primary}20` }}>
                                                <Package className="h-5 w-5" style={{ color: theme.colors.primary }} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold" style={{ color: theme.colors.foreground }}>Order on the way!</div>
                                                <div className="text-xs" style={{ color: theme.colors.mutedForeground }}>15-20 min</div>
                                            </div>
                                        </div>
                                        <FoodButton variant="outline" size="sm" className="h-8 px-3 text-xs">
                                            Track
                                        </FoodButton>
                                    </div>
                                    <div className="mt-3 relative h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: theme.colors.secondary }}>
                                        <div className="absolute top-0 left-0 h-full w-[60%] rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                                    </div>
                                    <div className="flex justify-between text-[10px] mt-1" style={{ color: theme.colors.mutedForeground }}>
                                        <span>Confirmed</span>
                                        <span style={{ color: theme.colors.primary }}>On the way</span>
                                        <span>Delivered</span>
                                    </div>
                                </FoodCard>
                            </motion.div>
                        )}
                        {/* Cart */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 }}
                            className="sticky top-24"
                        >
                            <CartWidget />

                            {/* Quick Reorder */}
                            <FoodCard className="mt-6 p-4">
                                <h3 className="text-sm font-semibold mb-3" style={{ color: theme.colors.foreground }}>Quick Reorder</h3>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Margherita Pizza', price: '$18.00', img: '🍕' },
                                        { name: 'Chicken Teriyaki', price: '$16.00', img: '🍗' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: theme.colors.muted }}>
                                                    {item.img}
                                                </div>
                                                <div>
                                                    <div className="text-sm" style={{ color: theme.colors.foreground }}>{item.name}</div>
                                                    <div className="text-xs" style={{ color: theme.colors.mutedForeground }}>{item.price}</div>
                                                </div>
                                            </div>
                                            <FoodButton variant="outline" size="sm">Add</FoodButton>
                                        </div>
                                    ))}
                                </div>
                            </FoodCard>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FoodDashboard;