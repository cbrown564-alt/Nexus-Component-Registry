import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import PropertyCard from '../components/estate/PropertyCard';
import EstateHero from '../components/estate/EstateHero';
import FilterBar from '../components/estate/FilterBar';

const EstateDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    React.useEffect(() => {
        setPlaygroundTheme('estate');
    }, []);

    const properties = [
        {
            id: '1',
            title: 'The Highland Loft',
            price: '$2,450,000',
            address: '1428 Highland Ave, Los Angeles, CA',
            beds: 3,
            baths: 3.5,
            sqft: 2800,
            image: 'https://images.unsplash.com/photo-1600596542815-e32c2159f828?auto=format&fit=crop&q=80&w=800',
            isNew: true,
        },
        {
            id: '2',
            title: 'Mid-Century Modern Gem',
            price: '$1,895,000',
            address: '884 Palm Spring Dr, Palm Springs, CA',
            beds: 4,
            baths: 3,
            sqft: 2400,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
            isNew: false,
        },
        {
            id: '3',
            title: 'Waterfront Estate',
            price: '$4,200,000',
            address: '22 Ocean Blvd, Malibu, CA',
            beds: 5,
            baths: 5,
            sqft: 4500,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
            isNew: true,
        },
        {
            id: '4',
            title: 'Urban Penthouse',
            price: '$3,150,000',
            address: '450 S Broadway, New York, NY',
            beds: 2,
            baths: 2.5,
            sqft: 1900,
            image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800',
            isNew: false,
        },
    ];

    return (
        <div
            className="min-h-screen w-full relative font-sans"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily,
            }}
        >
            {/* Cinematic Hero */}
            <EstateHero />

            {/* Content Container */}
            <div className="px-8 md:px-20 pb-20">
                <div className="mt-12 mb-16">
                    <FilterBar />
                </div>

                {/* Listings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {properties.map((prop, i) => (
                        <PropertyCard key={prop.id} property={prop} delay={0.2 + (i * 0.1)} />
                    ))}
                </div>

                {/* Featured Collection Section */}
                <section className="mt-32 border-t pt-20" style={{ borderColor: theme.colors.border }}>
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40 mb-2 block">Collections</span>
                            <h3 className="text-4xl font-serif">Architectural Marvels</h3>
                        </div>
                        <button className="text-sm border-b border-black pb-1 hover:opacity-60 transition-opacity">View Collection</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px]">
                        <div className="relative h-full bg-stone-200 group overflow-hidden cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h4 className="text-3xl font-serif">The Glass House</h4>
                                <p className="opacity-80">New Canaan, CT</p>
                            </div>
                        </div>
                        <div className="relative h-full bg-stone-200 group overflow-hidden cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <h4 className="text-3xl font-serif">Desert Modern</h4>
                                <p className="opacity-80">Joshua Tree, CA</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EstateDashboard;
