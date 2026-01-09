import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, MapPin, ChefHat, Heart, User, Filter } from 'lucide-react';
import HeroDish from '../components/food/HeroDish';
import MenuGrid from '../components/food/MenuGrid';
import CartWidget from '../components/food/CartWidget';

const FoodDashboard = () => {
  return (
    <div className="container mx-auto min-h-screen p-4 md:p-8 font-sans text-stone-200 overflow-hidden">
      
      {/* Header */}
      <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                  <ChefHat className="h-6 w-6" />
              </div>
              <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500">Welcome Back</div>
                  <h1 className="font-serif text-2xl font-bold text-white">Alex's Cravings</h1>
              </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex flex-1 items-center justify-end gap-4"
          >
              <div className="relative hidden w-full max-w-md md:block">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" />
                  <input 
                    type="text" 
                    placeholder="Search for dishes, restaurants..." 
                    className="h-12 w-full rounded-full bg-[#1c1917] border border-stone-800 pl-12 pr-4 text-sm text-stone-200 placeholder-stone-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-800 p-1.5 text-stone-400 hover:text-white">
                      <Filter className="h-3 w-3" />
                  </button>
              </div>

              <button className="rounded-full bg-[#1c1917] border border-stone-800 p-3 text-stone-400 hover:text-white hover:border-stone-700 transition-colors">
                  <Heart className="h-5 w-5" />
              </button>
              <button className="rounded-full bg-[#1c1917] border border-stone-800 p-3 text-stone-400 hover:text-white hover:border-stone-700 transition-colors relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-3 top-2 h-2 w-2 rounded-full bg-orange-500" />
              </button>
          </motion.div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
              <HeroDish />
              <MenuGrid />
          </div>

          {/* Right Sidebar (Cart/Status) */}
          <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 h-[calc(100vh-8rem)]">
                  <CartWidget />
              </div>
          </div>

      </div>
    </div>
  );
};

export default FoodDashboard;