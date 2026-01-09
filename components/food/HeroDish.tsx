import React from 'react';
import { Star, Clock, Flame, Plus } from 'lucide-react';
import FoodCard from './FoodCard';
import FoodButton from './FoodButton';

const HeroDish = () => {
    return (
        <FoodCard className="group relative h-[400px] w-full border-none cursor-pointer">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1200"
                    alt="Pizza"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-4 flex items-center gap-2">
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-orange-500/20">
                        Trending
                    </span>
                    <div className="flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs font-medium text-yellow-400 backdrop-blur-md">
                        <Star className="h-3 w-3 fill-current" />
                        4.9 (2.4k)
                    </div>
                </div>

                <h2 className="mb-2 font-serif text-4xl font-medium text-white shadow-sm">Artisan Truffle Mushroom Pizza</h2>
                <p className="mb-6 max-w-lg text-stone-300">
                    House-made sourdough crust, black truffle cream, roasted wild mushrooms, thyme, and fresh mozzarella.
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm font-medium text-stone-200">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-orange-500" />
                            25-35 min
                        </div>
                        <div className="flex items-center gap-2">
                            <Flame className="h-4 w-4 text-orange-500" />
                            840 kcal
                        </div>
                    </div>

                    <FoodButton variant="primary" className="rounded-full bg-white text-stone-900 hover:bg-orange-50 shadow-none">
                        <Plus className="h-4 w-4" />
                        Add to Order <span className="ml-1 text-stone-400">|</span> $24.00
                    </FoodButton>
                </div>
            </div>
        </FoodCard>
    );
};

export default HeroDish;