import React from 'react';
import { Sun, Leaf, CloudRain } from 'lucide-react';
import EnergySun from '../components/solarpunk/EnergySun';
import AirQualityLeaf from '../components/solarpunk/AirQualityLeaf';
import EcoStats from '../components/solarpunk/EcoStats';
import SolarCard from '../components/solarpunk/SolarCard';

const SolarpunkDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F0F7F4] font-sans text-emerald-900 p-6 md:p-8 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-yellow-100 to-transparent rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-emerald-100 to-transparent rounded-full blur-3xl opacity-60" />
          {/* Subtle vines/dots pattern could go here */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23064e3b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
          />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <header className="flex flex-col md:flex-row items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-tr-2xl rounded-bl-2xl rounded-tl-lg rounded-br-lg shadow-lg flex items-center justify-center text-white">
                      <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                      <h1 className="font-serif text-3xl font-bold text-emerald-900">Eden<span className="text-emerald-500">OS</span></h1>
                      <p className="text-sm text-emerald-600 font-medium">Community Garden & Energy Grid</p>
                  </div>
              </div>

              <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-emerald-100 shadow-sm">
                      <Sun className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-serif font-bold text-emerald-800">24°C</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-emerald-100 shadow-sm">
                      <CloudRain className="w-5 h-5 text-blue-400" />
                      <span className="font-serif font-bold text-emerald-800">30%</span>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-emerald-200 border-2 border-white overflow-hidden shadow-md">
                      <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Gaia" alt="User" className="h-full w-full bg-emerald-100" />
                  </div>
              </div>
          </header>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Main Energy Viz */}
              <div className="lg:col-span-1 lg:row-span-2">
                  <EnergySun />
              </div>

              {/* Stats Row */}
              <div className="lg:col-span-2">
                  <EcoStats />
              </div>

              {/* Air Quality */}
              <div className="lg:col-span-1">
                  <AirQualityLeaf />
              </div>

              {/* Garden Status */}
              <div className="lg:col-span-1">
                  <SolarCard className="p-6 h-full">
                      <div className="flex justify-between items-center mb-6">
                          <h3 className="font-serif text-xl text-emerald-900">Hydroponics</h3>
                          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                              Active
                          </span>
                      </div>
                      <div className="space-y-4">
                          {[
                              { name: "Basil", status: "Ready to Harvest", progress: 100, color: "bg-emerald-500" },
                              { name: "Tomatoes", status: "Flowering", progress: 65, color: "bg-yellow-400" },
                              { name: "Lettuce", status: "Growing", progress: 30, color: "bg-green-400" },
                          ].map((plant, i) => (
                              <div key={i} className="group">
                                  <div className="flex justify-between text-sm mb-1 font-medium text-emerald-800">
                                      <span>{plant.name}</span>
                                      <span className="text-emerald-600/70 text-xs">{plant.status}</span>
                                  </div>
                                  <div className="h-3 w-full bg-emerald-100 rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full rounded-full ${plant.color} relative`} 
                                        style={{ width: `${plant.progress}%` }}
                                      >
                                          <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]" />
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                      <button className="mt-6 w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/30 transition-all active:scale-95">
                          Manage System
                      </button>
                  </SolarCard>
              </div>

          </div>
      </div>
    </div>
  );
};

export default SolarpunkDashboard;