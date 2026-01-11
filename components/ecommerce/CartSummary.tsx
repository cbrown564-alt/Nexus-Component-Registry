import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import CommerceCard from './CommerceCard';
import { useTheme } from '@/context/ThemeContext';

const CartSummary = () => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  const items = [
    { name: "Linen Chore Coat", price: "$128.00", color: "Sage", size: "M", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=200" },
    { name: "Leather Weekend Bag", price: "$345.00", color: "Tan", size: "One Size", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <CommerceCard className="h-full p-6 shadow-sm backdrop-blur-md" style={{ backgroundColor: `${theme.colors.card}E6`, borderColor: theme.colors.border, borderLeftWidth: '1px' }}>
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          <span className="font-bold" style={{ color: theme.colors.foreground }}>Your Bag (2)</span>
        </div>
        <span className="text-xs font-medium uppercase tracking-wider underline cursor-pointer" style={{ color: theme.colors.mutedForeground }}>View Cart</span>
      </div>

      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-20 w-16 shrink-0 overflow-hidden" style={{ backgroundColor: theme.colors.muted }}>
              <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between py-0.5">
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-medium" style={{ color: theme.colors.foreground }}>{item.name}</h4>
                <button style={{ color: theme.colors.mutedForeground }} className="hover:opacity-70"><X className="h-3 w-3" /></button>
              </div>
              <div className="text-xs" style={{ color: theme.colors.mutedForeground }}>{item.color} / {item.size}</div>
              <div className="text-sm font-semibold" style={{ color: theme.colors.foreground }}>{item.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 space-y-4" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div className="flex justify-between text-sm">
          <span style={{ color: theme.colors.mutedForeground }}>Subtotal</span>
          <span className="font-medium" style={{ color: theme.colors.foreground }}>$473.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span style={{ color: theme.colors.mutedForeground }}>Shipping</span>
          <span style={{ color: theme.colors.mutedForeground }}>Calculated at checkout</span>
        </div>
        <button
          className="w-full py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-90"
          style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}
        >
          Checkout
        </button>
      </div>
    </CommerceCard>
  );
};

export default CartSummary;