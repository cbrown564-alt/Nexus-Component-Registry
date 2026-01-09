import React from 'react';
import { Plus, Heart } from 'lucide-react';
import FoodCard from './FoodCard';

const MenuGrid = () => {
  const categories = [
    { name: 'All', active: true },
    { name: 'Bowls', active: false },
    { name: 'Burgers', active: false },
    { name: 'Sushi', active: false },
    { name: 'Desserts', active: false },
    { name: 'Drinks', active: false },
  ];

  const items = [
    { title: "Spicy Miso Ramen", price: "$18.00", cal: "540", img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&q=80&w=400", tag: "Best Seller" },
    { title: "Avocado Toast", price: "$14.50", cal: "320", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=400", tag: null },
    { title: "Classic Smashburger", price: "$16.00", cal: "890", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400", tag: "Popular" },
    { title: "Salmon Poke Bowl", price: "$22.00", cal: "450", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400", tag: "Healthy" },
  ];

  return (
    <div>
      {/* Categories */}
      <div className="mb-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-bold transition-all ${cat.active
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
              : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white'
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <FoodCard key={i} delay={0.1 * i} className="group cursor-pointer hover:border-orange-500/30 transition-colors">
            <div className="relative h-48 w-full overflow-hidden">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <button className="absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white backdrop-blur-md transition-colors hover:bg-rose-500 hover:text-white">
                <Heart className="h-4 w-4" />
              </button>
              {item.tag && (
                <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-md">
                  {item.tag}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg font-medium text-white">{item.title}</h3>
                  <span className="text-xs text-stone-500">{item.cal} kcal</span>
                </div>
                <span className="text-lg font-bold text-orange-400">{item.price}</span>
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-stone-800 py-3 text-sm font-bold text-white transition-colors hover:bg-stone-700 group-hover:bg-orange-500">
                <Plus className="h-4 w-4" />
                Add to Cart
              </button>
            </div>
          </FoodCard>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;