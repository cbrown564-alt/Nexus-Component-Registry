import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Lightbulb, 
  Lock, 
  Tv, 
  Wifi, 
  Music, 
  Settings, 
  Thermometer, 
  Power,
  Grid,
  Sun
} from 'lucide-react';
import NeumorphicCard from '../components/softplastic/NeumorphicCard';
import NeumorphicButton from '../components/softplastic/NeumorphicButton';
import ThermostatDial from '../components/softplastic/ThermostatDial';
import DeviceToggle from '../components/softplastic/DeviceToggle';

const SoftPlasticDashboard = () => {
  const [activeRoom, setActiveRoom] = useState('Living Room');

  const rooms = ['Living Room', 'Bedroom', 'Kitchen', 'Office', 'Garage'];

  return (
    <div className="min-h-screen bg-[#EFEEEE] font-sans text-slate-600 p-6 md:p-10 overflow-x-hidden selection:bg-slate-300 selection:text-slate-800">
      
      {/* Top Bar */}
      <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
              <NeumorphicButton icon={Grid} variant="square" className="h-12 w-12 rounded-xl" />
              <div>
                  <h1 className="text-2xl font-bold text-slate-700 tracking-tight">My Home</h1>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Good Morning, Alex</p>
              </div>
          </div>
          <div className="flex gap-4">
              <NeumorphicButton icon={Settings} variant="circle" className="h-12 w-12" />
              <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#EFEEEE] shadow-[6px_6px_12px_#D1D9E6,-6px_-6px_12px_#FFFFFF]">
                  <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="Profile" className="h-full w-full bg-slate-200" />
              </div>
          </div>
      </header>

      {/* Room Selector (Horizontal Scroll) */}
      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide mb-2">
          {rooms.map((room) => (
              <NeumorphicButton 
                key={room}
                label={room}
                active={activeRoom === room}
                onClick={() => setActiveRoom(room)}
                variant="pill"
                className="shrink-0"
              />
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Controls Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Scenes / Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <NeumorphicButton icon={Sun} label="Morning" className="rounded-2xl aspect-square flex-col !gap-3" active />
                  <NeumorphicButton icon={Lock} label="Away" className="rounded-2xl aspect-square flex-col !gap-3" />
                  <NeumorphicButton icon={Tv} label="Movie" className="rounded-2xl aspect-square flex-col !gap-3" />
                  <NeumorphicButton icon={Power} label="Sleep" className="rounded-2xl aspect-square flex-col !gap-3" />
              </div>

              {/* Devices List */}
              <div className="flex-1">
                  <h2 className="text-lg font-bold text-slate-700 mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Devices
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <DeviceToggle label="Main Lights" icon={Lightbulb} initialState={true} />
                      <DeviceToggle label="Smart Lock" icon={Lock} initialState={true} />
                      <DeviceToggle label="Living Room TV" icon={Tv} initialState={false} />
                      <DeviceToggle label="Wi-Fi Router" icon={Wifi} initialState={true} />
                      <DeviceToggle label="Sound System" icon={Music} initialState={false} />
                      <DeviceToggle label="Floor Lamp" icon={Lightbulb} initialState={false} />
                  </div>
              </div>

          </div>

          {/* Right Column: Thermostat & Status */}
          <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="aspect-square">
                  <ThermostatDial />
              </div>

              {/* Energy Usage Card */}
              <NeumorphicCard className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-6">
                      <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Energy Usage</h3>
                          <div className="text-3xl font-bold text-slate-700 mt-1">24.5 <span className="text-sm font-normal text-slate-500">kWh</span></div>
                      </div>
                      <div className="p-3 rounded-full bg-[#EFEEEE] shadow-[inset_4px_4px_8px_#D1D9E6,inset_-4px_-4px_8px_#FFFFFF] text-green-500">
                          <LeafIcon />
                      </div>
                  </div>
                  
                  {/* Soft Progress Bars */}
                  <div className="space-y-4">
                      <div className="space-y-1">
                          <div className="flex justify-between text-xs font-bold text-slate-500">
                              <span>Lighting</span>
                              <span>45%</span>
                          </div>
                          <div className="h-3 w-full rounded-full bg-[#EFEEEE] shadow-[inset_2px_2px_4px_#D1D9E6,inset_-2px_-2px_4px_#FFFFFF] overflow-hidden">
                              <div className="h-full w-[45%] rounded-full bg-blue-400 shadow-[2px_2px_4px_#D1D9E6]" />
                          </div>
                      </div>
                      <div className="space-y-1">
                          <div className="flex justify-between text-xs font-bold text-slate-500">
                              <span>Heating</span>
                              <span>28%</span>
                          </div>
                          <div className="h-3 w-full rounded-full bg-[#EFEEEE] shadow-[inset_2px_2px_4px_#D1D9E6,inset_-2px_-2px_4px_#FFFFFF] overflow-hidden">
                              <div className="h-full w-[28%] rounded-full bg-orange-400 shadow-[2px_2px_4px_#D1D9E6]" />
                          </div>
                      </div>
                      <div className="space-y-1">
                          <div className="flex justify-between text-xs font-bold text-slate-500">
                              <span>Appliances</span>
                              <span>12%</span>
                          </div>
                          <div className="h-3 w-full rounded-full bg-[#EFEEEE] shadow-[inset_2px_2px_4px_#D1D9E6,inset_-2px_-2px_4px_#FFFFFF] overflow-hidden">
                              <div className="h-full w-[12%] rounded-full bg-purple-400 shadow-[2px_2px_4px_#D1D9E6]" />
                          </div>
                      </div>
                  </div>
              </NeumorphicCard>
          </div>

      </div>
    </div>
  );
};

const LeafIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 13-11 18z"></path>
        <path d="M11 20a7 7 0 0 1 9.8-6.1C15.5 5 17 4.48 19 2c1 2 2 13-11 18z" opacity="0.5"></path>
    </svg>
)

export default SoftPlasticDashboard;