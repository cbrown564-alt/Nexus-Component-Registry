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
            className="whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-bold transition-all"
            style={cat.active
              ? { backgroundColor: '#f97316', color: '#ffffff', boxShadow: '0 10px 15px -3px rgba(249,115,22,0.2)' }
              : { backgroundColor: '#292524', color: '#a8a29e' }
            }
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <FoodCard key={i} delay={0.1 * i} className="group cursor-pointer transition-colors">
            <div className="relative h-48 w-full overflow-hidden">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <button className="absolute right-3 top-3 rounded-full p-2 backdrop-blur-md transition-colors" style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#ffffff' }}>
                <Heart className="h-4 w-4" />
              </button>
              {item.tag && (
                <span className="absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#000000' }}>
                  {item.tag}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg font-medium" style={{ color: '#ffffff' }}>{item.title}</h3>
                  <span className="text-xs" style={{ color: '#78716c' }}>{item.cal} kcal</span>
                </div>
                <span className="text-lg font-bold" style={{ color: '#fb923c' }}>{item.price}</span>
              </div>
              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-colors" style={{ backgroundColor: '#292524', color: '#ffffff' }}>
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