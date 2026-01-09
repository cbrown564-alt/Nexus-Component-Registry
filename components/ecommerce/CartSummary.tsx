import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import CommerceCard from './CommerceCard';

const CartSummary = () => {
  const items = [
    { name: "Linen Chore Coat", price: "$128.00", color: "Sage", size: "M", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=200" },
    { name: "Leather Weekend Bag", price: "$345.00", color: "Tan", size: "One Size", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <CommerceCard className="h-full p-6 border-l border-neutral-100 shadow-sm bg-white/80 backdrop-blur-md">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            <span className="font-bold text-neutral-900">Your Bag (2)</span>
        </div>
        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500 underline cursor-pointer">View Cart</span>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => (
            <div key={i} className="flex gap-4">
                <div className="h-20 w-16 shrink-0 overflow-hidden bg-neutral-100">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col justify-between py-0.5">
                    <div className="flex justify-between items-start">
                        <h4 className="text-sm font-medium text-neutral-900">{item.name}</h4>
                        <button className="text-neutral-400 hover:text-neutral-900"><X className="h-3 w-3" /></button>
                    </div>
                    <div className="text-xs text-neutral-500">{item.color} / {item.size}</div>
                    <div className="text-sm font-semibold text-neutral-900">{item.price}</div>
                </div>
            </div>
        ))}
      </div>

      <div className="mt-8 border-t border-neutral-100 pt-6 space-y-4">
        <div className="flex justify-between text-sm">
            <span className="text-neutral-500">Subtotal</span>
            <span className="font-medium text-neutral-900">$473.00</span>
        </div>
        <div className="flex justify-between text-sm">
            <span className="text-neutral-500">Shipping</span>
            <span className="text-neutral-500">Calculated at checkout</span>
        </div>
        <button className="w-full bg-black py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-neutral-800">
            Checkout
        </button>
      </div>
    </CommerceCard>
  );
};

export default CartSummary;