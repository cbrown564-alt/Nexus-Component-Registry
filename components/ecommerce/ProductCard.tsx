import React, { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import CommerceCard from './CommerceCard';
import { useTheme } from '@/context/ThemeContext';
import { getRadius } from '@/data/variants';
import type { PlaygroundTheme } from '@/data/playgroundThemes';

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: string;
  delay?: number;
  badge?: string;
  theme?: PlaygroundTheme;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  category,
  price,
  delay = 0,
  badge,
  theme: themeProp
}) => {
  const { currentPlaygroundTheme } = useTheme();
  const theme = themeProp || currentPlaygroundTheme;
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  return (
    <CommerceCard delay={delay} className="group border-none bg-transparent">
      <div
        className="relative mb-4 overflow-hidden aspect-[3/4]"
        style={{ backgroundColor: theme.colors.muted, borderRadius: getRadius(theme.radius) }}
      >
        {badge && (
          <div
            className="absolute top-3 left-3 z-20 text-[10px] font-bold uppercase tracking-widest px-2 py-1"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.primaryForeground,
              borderRadius: getRadius(theme.radius === 'none' ? 'none' : 'sm')
            }}
          >
            {badge}
          </div>
        )}
        <button
          className="absolute top-3 right-3 z-20 rounded-full p-2 opacity-0 transition-all duration-300 group-hover:opacity-100"
          style={{
            backgroundColor: theme.colors.card,
            color: isHeartHovered ? theme.colors.accent : theme.colors.foreground,
            border: `1px solid ${theme.colors.border}`
          }}
          onMouseEnter={() => setIsHeartHovered(true)}
          onMouseLeave={() => setIsHeartHovered(false)}
        >
          <Heart className="h-4 w-4" />
        </button>

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Quick Add Overlay */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 translate-y-full px-4 py-4 backdrop-blur-md transition-transform duration-300 ease-out group-hover:translate-y-0"
          style={{ backgroundColor: `${theme.colors.card}E6` }}
        >
          <button
            className="flex w-full items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.primaryForeground,
              borderRadius: getRadius(theme.radius)
            }}
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