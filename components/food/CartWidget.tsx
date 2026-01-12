import React from 'react';
import { Minus, Plus, ShoppingBag, MapPin, ChevronRight, Utensils } from 'lucide-react';
import FoodCard from './FoodCard';

const CartWidget = () => {
    const items = [
        { name: "Spicy Miso Ramen", price: 18.00, qty: 1, img: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&q=80&w=100" },
        { name: "Gyoza (6pcs)", price: 8.50, qty: 2, img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=100" },
    ];

    return (
        <FoodCard className="flex h-full flex-col p-6 !bg-[#1c1917]">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: '#f97316', color: '#ffffff' }}>
                        <ShoppingBag className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold" style={{ color: '#ffffff' }}>Your Order</h3>
                </div>
                <span className="rounded-md px-2 py-1 text-xs font-medium" style={{ backgroundColor: '#292524', color: '#a8a29e' }}>Dine-in</span>
            </div>

            {/* Address / Table */}
            <div className="mb-6 flex items-center gap-3 rounded-xl border p-3" style={{ borderColor: '#292524', backgroundColor: 'rgba(28,25,23,0.5)' }}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: '#292524', color: '#a8a29e' }}>
                    <Utensils className="h-4 w-4" />
                </div>
                <div className="flex-1">
                    <div className="text-xs" style={{ color: '#78716c' }}>Table Number</div>
                    <div className="text-sm font-bold" style={{ color: '#ffffff' }}>Table 12</div>
                </div>
                <ChevronRight className="h-4 w-4" style={{ color: '#57534e' }} />
            </div>

            {/* Items */}
            <div className="flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-hide">
                {items.map((item, i) => (
                    <div key={i} className="flex gap-3">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg" style={{ backgroundColor: '#292524' }}>
                            <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                            <div className="flex justify-between">
                                <h4 className="text-sm font-medium line-clamp-1" style={{ color: '#e7e5e4' }}>{item.name}</h4>
                                <span className="text-sm font-bold" style={{ color: '#ffffff' }}>${(item.price * item.qty).toFixed(2)}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex h-6 w-6 items-center justify-center rounded-md" style={{ backgroundColor: '#292524', color: '#a8a29e' }}>
                                    <Minus className="h-3 w-3" />
                                </button>
                                <span className="text-sm font-bold" style={{ color: '#ffffff' }}>{item.qty}</span>
                                <button className="flex h-6 w-6 items-center justify-center rounded-md" style={{ backgroundColor: '#292524', color: '#a8a29e' }}>
                                    <Plus className="h-3 w-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="mt-6 border-t pt-6 space-y-3" style={{ borderColor: '#292524' }}>
                <div className="flex justify-between text-sm" style={{ color: '#a8a29e' }}>
                    <span>Subtotal</span>
                    <span>$35.00</span>
                </div>
                <div className="flex justify-between text-sm" style={{ color: '#a8a29e' }}>
                    <span>Service Charge</span>
                    <span>$3.50</span>
                </div>
                <div className="flex justify-between text-lg font-bold" style={{ color: '#ffffff' }}>
                    <span>Total</span>
                    <span>$38.50</span>
                </div>
                <button
                    className="w-full rounded-xl py-4 font-bold shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: '#f97316', color: '#ffffff', boxShadow: '0 10px 15px -3px rgba(249,115,22,0.25)' }}
                >
                    Place Order
                </button>
            </div>
        </FoodCard>
    );
};

export default CartWidget;