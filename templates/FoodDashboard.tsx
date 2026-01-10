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

const FoodDashboard = () => {
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
        <div className="min-h-screen font-sans text-stone-200 overflow-hidden">

            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0c0a09]/80 border-b border-stone-800/50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex h-16 items-center justify-between gap-4">
                        {/* Logo & Location */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20">
                                <ChefHat className="h-5 w-5" />
                            </div>
                            <div className="hidden sm:block">
                                <div className="flex items-center gap-1 text-xs text-stone-400">
                                    <MapPin className="h-3 w-3" />
                                    Delivering to
                                </div>
                                <div className="font-semibold text-white">123 Main Street</div>
                            </div>
                        </motion.div>

                        {/* Search */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex-1 max-w-xl hidden md:block"
                        >
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                                <input
                                    type="text"
                                    placeholder="Search for dishes, cuisines, restaurants..."
                                    className="h-11 w-full rounded-full bg-stone-900/50 border border-stone-800 pl-11 pr-4 text-sm text-stone-200 placeholder-stone-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                                />
                            </div>
                        </motion.div>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2"
                        >
                            <FoodButton variant="ghost" size="sm" className="text-stone-400 hover:text-white">
                                <Heart className="h-5 w-5" />
                            </FoodButton>
                            <FoodButton variant="ghost" size="sm" className="text-stone-400 hover:text-white relative">
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-[#0c0a09]" />
                            </FoodButton>
                            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 ring-2 ring-orange-500/20" />
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
                        <h2 className="text-lg font-semibold text-white">Categories</h2>
                        <button className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-400 transition-colors">
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
                                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-sm whitespace-nowrap transition-all ${activeCategory === cat.name
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                                    : 'bg-stone-900/50 text-stone-300 border border-stone-800 hover:border-orange-500/50'
                                    }`}
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
                                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                    <Flame className="h-5 w-5 text-orange-500" />
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
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 p-6">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className="h-5 w-5 text-yellow-300" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-orange-200">Limited Time</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Get 25% off your first order!</h3>
                                        <p className="text-orange-100 text-sm">Use code WELCOME25 at checkout</p>
                                    </div>
                                    <FoodButton variant="secondary" className="bg-white !text-orange-600 hover:bg-orange-50 shadow-lg font-bold">
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
                                <h2 className="text-lg font-semibold text-white">Popular Near You</h2>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/50 border border-stone-800 text-xs text-stone-300 hover:border-stone-700">
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
                                <FoodCard className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                                <Package className="h-5 w-5 text-orange-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-white">Order on the way!</div>
                                                <div className="text-xs text-stone-400">15-20 min</div>
                                            </div>
                                        </div>
                                        <FoodButton variant="outline" size="sm" className="h-8 px-3 text-xs">
                                            Track
                                        </FoodButton>
                                    </div>
                                    <div className="mt-3 relative h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
                                        <div className="absolute top-0 left-0 h-full w-[60%] bg-orange-500 rounded-full" />
                                    </div>
                                    <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                                        <span>Confirmed</span>
                                        <span className="text-orange-400">On the way</span>
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
                                <h3 className="text-sm font-semibold text-white mb-3">Quick Reorder</h3>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Margherita Pizza', price: '$18.00', img: '🍕' },
                                        { name: 'Chicken Teriyaki', price: '$16.00', img: '🍗' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-stone-800 flex items-center justify-center text-xl">
                                                    {item.img}
                                                </div>
                                                <div>
                                                    <div className="text-sm text-white">{item.name}</div>
                                                    <div className="text-xs text-stone-500">{item.price}</div>
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