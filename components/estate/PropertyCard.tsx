import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { BedDouble, Bath, Square, Heart } from 'lucide-react';

interface Property {
    id: string;
    title: string;
    price: string;
    address: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
    isNew?: boolean;
}

interface PropertyCardProps {
    property: Property;
    delay?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, delay = 0 }) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className="group relative cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-stone-200">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                    {property.isNew && (
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-serif uppercase tracking-widest text-black">
                            New Listing
                        </span>
                    )}
                </div>

                <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-white/0 hover:bg-white/20 transition-colors text-white">
                        <Heart size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div>
                <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-xl font-serif font-medium">{property.title}</h3>
                    <span className="text-lg font-serif" style={{ color: theme.colors.primary }}>{property.price}</span>
                </div>

                <p className="text-sm font-sans opacity-60 mb-4">{property.address}</p>

                <div className="flex items-center gap-6 text-sm opacity-80 font-sans border-t pt-3" style={{ borderColor: theme.colors.border }}>
                    <div className="flex items-center gap-2">
                        <BedDouble size={16} className="opacity-60" />
                        <span>{property.beds} <span className="text-xs opacity-60">Beds</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bath size={16} className="opacity-60" />
                        <span>{property.baths} <span className="text-xs opacity-60">Baths</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Square size={16} className="opacity-60" />
                        <span>{property.sqft.toLocaleString()} <span className="text-xs opacity-60">SqFt</span></span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PropertyCard;
