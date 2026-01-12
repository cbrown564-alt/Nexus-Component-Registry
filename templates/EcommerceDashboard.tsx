import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import PromoBanner from '../components/ecommerce/PromoBanner';
import ProductCard from '../components/ecommerce/ProductCard';
import CartSummary from '../components/ecommerce/CartSummary';
import ShopButton from '../components/ecommerce/ShopButton';

import { useTheme } from '@/context/ThemeContext';

const EcommerceDashboard = () => {
    const { currentPlaygroundTheme: theme, setPlaygroundTheme } = useTheme();

    React.useEffect(() => {
        setPlaygroundTheme('ecommerce');
    }, []);

    return (
        <div
            className="container mx-auto min-h-screen max-w-[1600px] p-6 lg:p-10 font-sans"
            style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily
            }}
        >

            {/* Navbar Minimal */}
            <nav className="mb-8 flex items-center justify-between py-4">
                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest" style={{ color: theme.colors.mutedForeground }}>
                    <a href="#" style={{ color: theme.colors.foreground }}>New Arrivals</a>
                    <a href="#" className="hover:text-opacity-70 transition-colors">Apparel</a>
                    <a href="#" className="hover:text-opacity-70 transition-colors">Accessories</a>
                    <a href="#" className="hover:text-opacity-70 transition-colors">Home</a>
                </div>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Main Content */}
                <div className="lg:col-span-9 space-y-12">

                    <PromoBanner />

                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="font-serif text-2xl font-medium" style={{ color: theme.colors.foreground }}>New Arrivals</h2>
                            <ShopButton variant="secondary">
                                <SlidersHorizontal className="h-4 w-4" />
                                Filter
                            </ShopButton>
                        </div>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                            <ProductCard
                                image="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=600"
                                title="Structured Wool Coat"
                                category="Outerwear"
                                price="$450.00"
                                badge="Best Seller"
                                delay={0.1}
                            />
                            <ProductCard
                                image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600"
                                title="Minimalist Watch"
                                category="Accessories"
                                price="$195.00"
                                delay={0.2}
                            />
                            <ProductCard
                                image="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600"
                                title="Leather Chelsea Boot"
                                category="Footwear"
                                price="$285.00"
                                delay={0.3}
                            />
                            <ProductCard
                                image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600"
                                title="Cotton Crew Tee"
                                category="Essentials"
                                price="$45.00"
                                delay={0.4}
                            />
                            <ProductCard
                                image="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=600"
                                title="Ceramic Vase Set"
                                category="Home"
                                price="$89.00"
                                delay={0.5}
                            />
                            <ProductCard
                                image="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=600"
                                title="Running Sneaker"
                                category="Sport"
                                price="$130.00"
                                badge="New"
                                delay={0.6}
                            />
                        </div>
                    </div>

                    {/* Secondary Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border" style={{ borderColor: theme.colors.border }}>
                        <div className="p-12 flex flex-col justify-center items-start" style={{ backgroundColor: theme.colors.secondary }}>
                            <span className="mb-4 text-xs font-bold uppercase tracking-widest" style={{ color: theme.colors.mutedForeground }}>Limited Edition</span>
                            <h3 className="mb-6 font-serif text-3xl" style={{ color: theme.colors.foreground }}>The Monogram Series</h3>
                            <p className="mb-8 max-w-sm" style={{ color: theme.colors.mutedForeground }}>Hand-finished leather goods featuring our signature embossing. Available for a limited time.</p>
                            <ShopButton variant="secondary">Explore Collection</ShopButton>
                        </div>
                        <div className="h-[400px]">
                            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800" alt="Leather goods" className="h-full w-full object-cover" />
                        </div>
                    </div>

                </div>

                {/* Right Sidebar (Cart) */}
                <div className="lg:col-span-3 hidden lg:block sticky top-24 h-fit">
                    <CartSummary />
                </div>

            </div>
        </div>
    );
};

export default EcommerceDashboard;