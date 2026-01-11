import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import CommerceCard from './CommerceCard';
import { useTheme } from '@/context/ThemeContext';

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: string;
  delay?: number;
  badge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  category,
  price,
  delay = 0,
  badge
}) => {
  const { currentPlaygroundTheme } = useTheme()
  const theme = currentPlaygroundTheme

  return (
    <CommerceCard delay={delay} className="group border-none bg-transparent">
      <div className="relative mb-4 overflow-hidden aspect-[3/4]" style={{ backgroundColor: theme.colors.muted }}>
        {badge && (
          <div
            className="absolute top-3 left-3 z-20 text-[10px] font-bold uppercase tracking-widest px-2 py-1"
            style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}
          >
            {badge}
          </div>
        )}
        <button className="absolute top-3 right-3 z-20 rounded-full bg-white p-2 opacity-0 transition-all duration-300 hover:text-red-500 group-hover:opacity-100">
          <Heart className="h-4 w-4" />
        </button>

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-white/90 px-4 py-4 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0">
          <button
            className="flex w-full items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
            style={{ backgroundColor: theme.colors.primary, color: theme.colors.primaryForeground }}
          >
            <ShoppingBag className="h-3 w-3" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium" style={{ color: theme.colors.foreground }}>{title}</h3>
          <p className="text-xs" style={{ color: theme.colors.mutedForeground }}>{category}</p>
        </div>
        <span className="text-sm font-semibold" style={{ color: theme.colors.foreground }}>{price}</span>
      </div>
    </CommerceCard>
  );
};

export default ProductCard;