import React from 'react';
import { BookOpen, Palette, Video, Music, Calculator, Rocket } from 'lucide-react';
import KidsCard from '../components/kids/KidsCard';
import BigIconNav from '../components/kids/BigIconNav';
import StarProgress from '../components/kids/StarProgress';
import Mascot from '../components/kids/Mascot';

const KidsDashboard = () => {
  const activities = [
    { title: "Read", icon: BookOpen, color: "bg-red-400", border: "border-red-600", text: "text-red-900" },
    { title: "Art", icon: Palette, color: "bg-yellow-300", border: "border-yellow-600", text: "text-yellow-900" },
    { title: "Math", icon: Calculator, color: "bg-blue-400", border: "border-blue-600", text: "text-blue-900" },
    { title: "Videos", icon: Video, color: "bg-green-400", border: "border-green-600", text: "text-green-900" },
    { title: "Music", icon: Music, color: "bg-purple-400", border: "border-purple-600", text: "text-purple-900" },
    { title: "Space", icon: Rocket, color: "bg-indigo-400", border: "border-indigo-600", text: "text-indigo-900" },
  ];

  return (
    <div className="min-h-screen bg-[#7dd3fc] font-sans selection:bg-yellow-300 selection:text-black p-4 flex flex-col overflow-hidden relative">
        
      {/* Clouds Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-16 bg-white/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-48 h-24 bg-white/40 rounded-full blur-2xl" />
          <div className="absolute bottom-32 left-1/3 w-64 h-32 bg-white/30 rounded-full blur-2xl" />
      </div>

      {/* Header */}
      <div className="flex justify-between items-start mb-6 md:mb-12 relative z-10 px-2 md:px-8 pt-4">
          <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-400 rounded-3xl border-4 border-white overflow-hidden shadow-lg rotate-3">
                  <img src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=Leo" alt="Avatar" className="w-full h-full bg-white" />
              </div>
              <div className="bg-white/80 backdrop-blur px-6 py-2 rounded-2xl border-4 border-white shadow-sm -rotate-2 hidden md:block">
                  <h1 className="text-3xl font-black text-sky-600 tracking-wide">LEO</h1>
              </div>
          </div>
          <StarProgress />
      </div>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-2 md:p-4 max-w-5xl mx-auto relative z-10 w-full">
          {activities.map((item, i) => (
              <KidsCard 
                key={i} 
                delay={i * 0.1} 
                color={item.color} 
                borderColor={item.border}
                className="flex flex-col items-center justify-center aspect-square cursor-pointer group"
              >
                  <div className="bg-white/30 p-4 md:p-6 rounded-full mb-2 md:mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <item.icon className={`w-10 h-10 md:w-16 md:h-16 ${item.text}`} strokeWidth={3} />
                  </div>
                  <span className={`text-xl md:text-3xl font-black uppercase tracking-wider text-white drop-shadow-md`}>
                      {item.title}
                  </span>
              </KidsCard>
          ))}
      </div>

      {/* Bottom Area */}
      <div className="mt-4 md:mt-auto relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-8 pb-4 gap-6">
          <div className="order-2 md:order-1">
             <Mascot />
          </div>
          <div className="order-1 md:order-2 w-full md:w-auto">
             <BigIconNav />
          </div>
      </div>

    </div>
  );
};

export default KidsDashboard;