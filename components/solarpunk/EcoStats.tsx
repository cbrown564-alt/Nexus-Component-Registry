import React from 'react';
import { Droplets, Sprout, Recycle, ThermometerSun } from 'lucide-react';
import SolarCard from './SolarCard';

const EcoStats = () => {
  const stats = [
    { label: "Water Saved", value: "840 L", icon: Droplets, color: "text-blue-500", bg: "bg-blue-100" },
    { label: "New Growth", value: "12 Plants", icon: Sprout, color: "text-green-600", bg: "bg-green-100" },
    { label: "Compost", value: "4.2 kg", icon: Recycle, color: "text-amber-600", bg: "bg-amber-100" },
    { label: "Temp (Int)", value: "22°C", icon: ThermometerSun, color: "text-orange-500", bg: "bg-orange-100" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <SolarCard key={i} delay={i * 0.1} className="p-4 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
            <div className={`mb-3 p-3 rounded-2xl ${stat.bg} ${stat.color} shadow-sm`}>
                <stat.icon className="w-6 h-6" />
            </div>
            <div className="font-serif text-2xl font-bold text-emerald-900 mb-1">{stat.value}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600/70">{stat.label}</div>
        </SolarCard>
      ))}
    </div>
  );
};

export default EcoStats;