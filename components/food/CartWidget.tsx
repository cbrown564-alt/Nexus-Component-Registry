import React from 'react';
import { Minus, Plus, ShoppingBag, MapPin, ChevronRight, Utensils } from 'lucide-react';
import FoodCard from './FoodCard';

const CartWidget = () => {
  const items = [
    { name: "Spicy Miso Ramen", price: 18.00, qty: 1, img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&q=80&w=100" },
    { name: "Gyoza (6pcs)", price: 8.50, qty: 2, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?auto=format&fit=crop&q=80&w=100" },
  ];

  return (
    <FoodCard className="flex h-full flex-col p-6 !bg-[#1c1917]">
      <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                  <ShoppingBag className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-white">Your Order</h3>
          </div>
          <span className="rounded-md bg-stone-800 px-2 py-1 text-xs font-medium text-stone-400">Dine-in</span>
      </div>

      {/* Address / Table */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-stone-800 bg-stone-900/50 p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-800 text-stone-400">
              <Utensils className="h-4 w-4" />
          </div>
          <div className="flex-1">
              <div className="text-xs text-stone-500">Table Number</div>
              <div className="text-sm font-bold text-white">Table 12</div>
          </div>
          <ChevronRight className="h-4 w-4 text-stone-600" />
      </div>

      {/* Items */}
      <div className="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-hide">
          {items.map((item, i) => (
              <div key={i} className="flex gap-3">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-stone-800">
                      <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                          <h4 className="text-sm font-medium text-stone-200 line-clamp-1">{item.name}</h4>
                          <span className="text-sm font-bold text-white">${(item.price * item.qty).toFixed(2)}</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <button className="flex h-6 w-6 items-center justify-center rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white">
                              <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-bold text-white">{item.qty}</span>
                          <button className="flex h-6 w-6 items-center justify-center rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white">
                              <Plus className="h-3 w-3" />
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </div>

      {/* Summary */}
      <div className="mt-6 border-t border-stone-800 pt-6 space-y-3">
          <div className="flex justify-between text-sm text-stone-400">
              <span>Subtotal</span>
              <span>$35.00</span>
          </div>
          <div className="flex justify-between text-sm text-stone-400">
              <span>Service Charge</span>
              <span>$3.50</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-white">
              <span>Total</span>
              <span>$38.50</span>
          </div>
          <button className="w-full rounded-xl bg-orange-500 py-4 font-bold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Place Order
          </button>
      </div>
    </FoodCard>
  );
};

export default CartWidget;