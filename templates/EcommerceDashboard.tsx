import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import PromoBanner from '../components/ecommerce/PromoBanner';
import ProductCard from '../components/ecommerce/ProductCard';
import CartSummary from '../components/ecommerce/CartSummary';

const EcommerceDashboard = () => {
  return (
    <div className="container mx-auto min-h-screen max-w-[1600px] p-6 lg:p-10 font-sans text-neutral-900 bg-white">
      
      {/* Navbar Minimal */}
      <nav className="mb-8 flex items-center justify-between py-4">
         <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-neutral-500">
            <a href="#" className="text-black">New Arrivals</a>
            <a href="#" className="hover:text-black transition-colors">Apparel</a>
            <a href="#" className="hover:text-black transition-colors">Accessories</a>
            <a href="#" className="hover:text-black transition-colors">Home</a>
         </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Content */}
        <div className="lg:col-span-9 space-y-12">
            
            <PromoBanner />

            <div>
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="font-serif text-2xl font-medium text-neutral-900">New Arrivals</h2>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filter
                    </button>
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
                        image="https://images.unsplash.com/photo-1591369045385-115fe21d6003?auto=format&fit=crop&q=80&w=600"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-100">
                <div className="bg-neutral-50 p-12 flex flex-col justify-center items-start">
                     <span className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-500">Limited Edition</span>
                     <h3 className="mb-6 font-serif text-3xl">The Monogram Series</h3>
                     <p className="mb-8 text-neutral-600 max-w-sm">Hand-finished leather goods featuring our signature embossing. Available for a limited time.</p>
                     <button className="border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-neutral-600 hover:border-neutral-600">Explore Collection</button>
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