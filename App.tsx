import React, { useState } from 'react';
import { 
  Box, 
  LayoutTemplate, 
  Zap, 
  Settings, 
  Command,
  Search,
  Github,
  Bell,
  Newspaper,
  ShoppingBag,
  MessageCircle,
  Wallet,
  CheckCircle2,
  Gamepad2,
  Music,
  ChefHat,
  Cpu,
  Triangle,
  Utensils,
  Shapes,
  Atom,
  Book,
  Leaf,
  ChevronDown,
  ChevronRight,
  Scale,
  CloudSun,
  PartyPopper,
  Eye,
  HardDrive,
  Car,
  Cloud,
  DraftingCompass,
  Grid3X3
} from 'lucide-react';
import EngineeringDashboard from './templates/EngineeringDashboard';
import WellnessDashboard from './templates/WellnessDashboard';
import EducationDashboard from './templates/EducationDashboard';
import SaasDashboard from './templates/SaasDashboard';
import MagazineDashboard from './templates/MagazineDashboard';
import EcommerceDashboard from './templates/EcommerceDashboard';
import SocialDashboard from './templates/SocialDashboard';
import FintechDashboard from './templates/FintechDashboard';
import ProductivityDashboard from './templates/ProductivityDashboard';
import GameDashboard from './templates/GameDashboard';
import MusicDashboard from './templates/MusicDashboard';
import FoodDashboard from './templates/FoodDashboard';
import GridDashboard from './templates/GridDashboard';
import BrutalistDashboard from './templates/BrutalistDashboard';
import KitchenDashboard from './templates/KitchenDashboard';
import KidsDashboard from './templates/KidsDashboard';
import SciFiDashboard from './templates/SciFiDashboard';
import EInkDashboard from './templates/EInkDashboard';
import SolarpunkDashboard from './templates/SolarpunkDashboard';
import LegalDashboard from './templates/LegalDashboard';
import SoftPlasticDashboard from './templates/SoftPlasticDashboard';
import FestivalDashboard from './templates/FestivalDashboard';
import AcidDashboard from './templates/AcidDashboard';
import LegacyOSDashboard from './templates/LegacyOSDashboard';
import CockpitDashboard from './templates/CockpitDashboard';
import ClaymorphismDashboard from './templates/ClaymorphismDashboard';
import BlueprintDashboard from './templates/BlueprintDashboard';
import SwissDashboard from './templates/SwissDashboard';

// Shared Components reused in App shell
const Background = ({ theme }: { theme: string }) => (
  <div className={`fixed inset-0 z-0 h-full w-full transition-colors duration-700 ${
    theme === 'engineering' ? 'bg-zinc-950' : 
    theme === 'education' ? 'bg-slate-50' :
    theme === 'saas' ? 'bg-slate-950' :
    theme === 'magazine' ? 'bg-[#fdfbf7]' :
    theme === 'ecommerce' ? 'bg-white' :
    theme === 'social' ? 'bg-black' :
    theme === 'fintech' ? 'bg-[#09090b]' :
    theme === 'productivity' ? 'bg-[#09090b]' :
    theme === 'game' ? 'bg-[#130f26]' :
    theme === 'music' ? 'bg-[#0a0a0a]' :
    theme === 'food' ? 'bg-[#0c0a09]' :
    theme === 'grid' ? 'bg-[#0b1121]' :
    theme === 'brutalist' ? 'bg-[#e0e0e0]' :
    theme === 'kitchen' ? 'bg-[#F7F5F2]' :
    theme === 'kids' ? 'bg-[#7dd3fc]' :
    theme === 'scifi' ? 'bg-[#020408]' :
    theme === 'eink' ? 'bg-[#f4f4f3]' :
    theme === 'solarpunk' ? 'bg-[#F0F7F4]' :
    theme === 'legal' ? 'bg-[#e5e5e4]' :
    theme === 'softplastic' ? 'bg-[#EFEEEE]' :
    theme === 'festival' ? 'bg-black' :
    theme === 'acid' ? 'bg-[#E0E7FF]' :
    theme === 'legacy' ? 'bg-[#008080]' :
    theme === 'cockpit' ? 'bg-[#121212]' :
    theme === 'clay' ? 'bg-[#f0f4f8]' :
    theme === 'blueprint' ? 'bg-[#1e3a8a]' :
    theme === 'swiss' ? 'bg-[#F5F5F5]' :
    'bg-[#fcfbf9]'
  }`}>
    <div 
      className="absolute h-full w-full opacity-30" 
      style={{
        backgroundImage: theme === 'education' 
            ? `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`
            : theme === 'saas'
            ? `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`
            : theme === 'fintech' || theme === 'productivity'
            ? `linear-gradient(#18181b 1px, transparent 1px), linear-gradient(90deg, #18181b 1px, transparent 1px)`
            : theme === 'grid'
            ? `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`
            : theme === 'game' 
            ? `radial-gradient(circle at 50% 50%, #4c1d95 0%, transparent 50%), radial-gradient(circle at 100% 0%, #db2777 0%, transparent 20%)`
            : theme === 'music'
            ? `radial-gradient(circle at 0% 0%, #4f46e5 0%, transparent 40%), radial-gradient(circle at 100% 100%, #e11d48 0%, transparent 40%)`
            : theme === 'food'
            ? `radial-gradient(circle at 100% 0%, #ea580c 0%, transparent 30%), radial-gradient(circle at 0% 100%, #1c1917 0%, transparent 50%)`
            : theme === 'brutalist' || theme === 'kitchen' || theme === 'kids' || theme === 'scifi' || theme === 'eink' || theme === 'solarpunk' || theme === 'legal' || theme === 'softplastic' || theme === 'festival' || theme === 'acid' || theme === 'legacy' || theme === 'cockpit' || theme === 'clay' || theme === 'blueprint' || theme === 'swiss'
            ? 'none'
            : theme === 'magazine' || theme === 'ecommerce' || theme === 'social'
            ? 'none'
            : `radial-gradient(${theme === 'engineering' ? '#3f3f46' : '#d6d3d1'} 1px, transparent 1px)`,
        backgroundSize: theme === 'education' ? '40px 40px' : theme === 'saas' || theme === 'fintech' || theme === 'productivity' || theme === 'grid' ? '40px 40px' : '24px 24px',
        opacity: theme === 'education' ? 0.4 : theme === 'saas' || theme === 'fintech' || theme === 'productivity' ? 0.2 : theme === 'grid' ? 0.15 : theme === 'game' ? 0.4 : theme === 'music' ? 0.3 : theme === 'food' ? 0.2 : 0.3
      }}
    />
  </div>
);

type TemplateId = 'engineering' | 'wellness' | 'education' | 'saas' | 'magazine' | 'ecommerce' | 'social' | 'fintech' | 'productivity' | 'game' | 'music' | 'food' | 'grid' | 'brutalist' | 'kitchen' | 'kids' | 'scifi' | 'eink' | 'solarpunk' | 'legal' | 'softplastic' | 'festival' | 'acid' | 'legacy' | 'cockpit' | 'clay' | 'blueprint' | 'swiss';

const App = () => {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateId>('engineering');
  const [isGalleriesOpen, setIsGalleriesOpen] = useState(true);

  const getThemeColors = () => {
    switch(currentTemplate) {
        case 'engineering': return 'text-zinc-100 selection:bg-zinc-800 selection:text-white';
        case 'education': return 'text-slate-800 selection:bg-violet-200 selection:text-violet-900';
        case 'saas': return 'text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200';
        case 'magazine': return 'text-neutral-900 selection:bg-neutral-900 selection:text-white';
        case 'ecommerce': return 'text-neutral-900 selection:bg-black selection:text-white';
        case 'social': return 'text-zinc-200 selection:bg-sky-500/30 selection:text-sky-200';
        case 'fintech': return 'text-zinc-200 selection:bg-emerald-500/30 selection:text-emerald-200';
        case 'productivity': return 'text-zinc-200 selection:bg-amber-500/30 selection:text-amber-500';
        case 'game': return 'text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200';
        case 'music': return 'text-white selection:bg-rose-500/30 selection:text-rose-200';
        case 'food': return 'text-stone-200 selection:bg-orange-500/30 selection:text-orange-500';
        case 'grid': return 'text-blue-100 selection:bg-blue-500/30 selection:text-blue-200';
        case 'brutalist': return 'text-black selection:bg-yellow-400 selection:text-black';
        case 'kitchen': return 'text-stone-800 selection:bg-orange-200 selection:text-orange-900';
        case 'kids': return 'text-slate-900 selection:bg-yellow-300 selection:text-black';
        case 'scifi': return 'text-cyan-50 selection:bg-cyan-500/30 selection:text-cyan-100';
        case 'eink': return 'text-black selection:bg-black selection:text-white';
        case 'solarpunk': return 'text-emerald-900 selection:bg-emerald-200 selection:text-emerald-900';
        case 'legal': return 'text-stone-900 selection:bg-blue-200 selection:text-blue-900';
        case 'softplastic': return 'text-slate-600 selection:bg-slate-300 selection:text-slate-800';
        case 'festival': return 'text-white selection:bg-fuchsia-500 selection:text-white';
        case 'acid': return 'text-black selection:bg-[#ccff00] selection:text-black';
        case 'legacy': return 'text-black selection:bg-[#000080] selection:text-white font-mono';
        case 'cockpit': return 'text-white selection:bg-blue-500 selection:text-white';
        case 'clay': return 'text-slate-700 selection:bg-sky-200 selection:text-sky-900';
        case 'blueprint': return 'text-white selection:bg-cyan-900 selection:text-white font-code';
        case 'swiss': return 'text-black selection:bg-[#DC2626] selection:text-white';
        default: return 'text-stone-800 selection:bg-stone-200';
    }
  }

  const getSidebarStyles = () => {
      switch(currentTemplate) {
          case 'engineering': return 'border-zinc-800 bg-zinc-950';
          case 'education': return 'border-slate-200 bg-white';
          case 'saas': return 'border-slate-800 bg-slate-950';
          case 'magazine': return 'border-neutral-200 bg-[#fdfbf7]';
          case 'ecommerce': return 'border-neutral-100 bg-white';
          case 'social': return 'border-zinc-800 bg-black';
          case 'fintech': return 'border-zinc-800 bg-zinc-950';
          case 'productivity': return 'border-zinc-800 bg-zinc-950';
          case 'game': return 'border-white/10 bg-[#130f26]/90 backdrop-blur-md';
          case 'music': return 'border-white/5 bg-black/90 backdrop-blur-md';
          case 'food': return 'border-stone-800 bg-[#0c0a09]';
          case 'grid': return 'border-blue-900/30 bg-[#0b1121]';
          case 'brutalist': return 'border-black border-r-[3px] bg-white';
          case 'kitchen': return 'border-stone-200 bg-white';
          case 'kids': return 'border-sky-200 bg-white';
          case 'scifi': return 'border-cyan-900/50 bg-[#050b14]';
          case 'eink': return 'border-black border-r-2 bg-[#f4f4f3]';
          case 'solarpunk': return 'border-emerald-200 bg-[#F0F7F4]';
          case 'legal': return 'border-stone-300 bg-[#e5e5e4]';
          case 'softplastic': return 'border-slate-200 bg-[#EFEEEE]';
          case 'festival': return 'border-white/10 bg-black/90 backdrop-blur-md';
          case 'acid': return 'border-black border-r-4 bg-white';
          case 'legacy': return 'border-white border-r-2 bg-[#c0c0c0] shadow-[2px_0_0_#808080]';
          case 'cockpit': return 'border-zinc-800 bg-[#1a1a1a]';
          case 'clay': return 'border-white/50 bg-white/50 backdrop-blur-lg';
          case 'blueprint': return 'border-white/30 bg-[#1e3a8a]';
          case 'swiss': return 'border-transparent bg-white';
          default: return 'border-stone-200 bg-white/80 backdrop-blur-md';
      }
  }

  const templates: { id: TemplateId; label: string; colorClass: string; customStyle?: string }[] = [
    { id: 'engineering', label: 'Engineering', colorClass: 'bg-blue-500' },
    { id: 'wellness', label: 'Wellness', colorClass: 'bg-sage-500' },
    { id: 'education', label: 'Education', colorClass: 'bg-violet-500' },
    { id: 'saas', label: 'B2B SaaS', colorClass: 'bg-indigo-500' },
    { id: 'magazine', label: 'Magazine', colorClass: 'bg-neutral-900' },
    { id: 'ecommerce', label: 'Storefront', colorClass: 'bg-black' },
    { id: 'social', label: 'Stream', colorClass: 'bg-sky-500' },
    { id: 'fintech', label: 'Terminal', colorClass: 'bg-emerald-500' },
    { id: 'productivity', label: 'Flow', colorClass: 'bg-amber-500' },
    { id: 'game', label: 'Arcade', colorClass: 'bg-fuchsia-500' },
    { id: 'music', label: 'Sonic', colorClass: 'bg-rose-500' },
    { id: 'food', label: 'Crave', colorClass: 'bg-orange-500' },
    { id: 'grid', label: 'Matrix', colorClass: 'bg-blue-600' },
    { id: 'brutalist', label: 'Raw', colorClass: 'bg-yellow-400', customStyle: 'rounded-none border border-black' },
    { id: 'kitchen', label: 'Mise', colorClass: 'bg-orange-500' },
    { id: 'kids', label: 'Play', colorClass: 'bg-red-500' },
    { id: 'scifi', label: 'Helix', colorClass: 'bg-cyan-500' },
    { id: 'eink', label: 'Canvas', colorClass: 'bg-white', customStyle: 'border border-black' },
    { id: 'solarpunk', label: 'Eden', colorClass: 'bg-emerald-500' },
    { id: 'legal', label: 'Eagle', colorClass: 'bg-red-700' },
    { id: 'softplastic', label: 'Plastic', colorClass: 'bg-slate-400' },
    { id: 'festival', label: 'Pulse', colorClass: 'bg-fuchsia-500' },
    { id: 'acid', label: 'Acid', colorClass: 'bg-[#ccff00]', customStyle: 'border border-black rounded-none' },
    { id: 'legacy', label: 'Legacy', colorClass: 'bg-[#008080]', customStyle: 'border-2 border-white rounded-none shadow-[2px_2px_0_0_#000]' },
    { id: 'cockpit', label: 'Cockpit', colorClass: 'bg-blue-600', customStyle: 'border-2 border-zinc-700 bg-black' },
    { id: 'clay', label: 'Clay', colorClass: 'bg-sky-400', customStyle: 'rounded-xl' },
    { id: 'blueprint', label: 'Blueprint', colorClass: 'bg-[#1e3a8a]', customStyle: 'rounded-sm border border-white' },
    { id: 'swiss', label: 'Swiss', colorClass: 'bg-[#DC2626]', customStyle: 'rounded-none' },
  ];

  return (
    <div className={`flex min-h-screen w-full font-sans transition-colors duration-500 ${getThemeColors()}`}>
      <Background theme={currentTemplate} />
      
      {/* Dynamic Sidebar */}
      <aside className={`group fixed left-0 top-0 z-50 h-full w-16 flex-col border-r transition-all duration-300 hover:w-64 ${getSidebarStyles()} overflow-y-auto no-scrollbar`}>
        <div className={`flex h-16 items-center justify-center border-b px-4 transition-colors shrink-0 sticky top-0 z-10 backdrop-blur-sm ${
           currentTemplate === 'engineering' ? 'border-zinc-800' : 
           currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' ? 'border-zinc-800' :
           currentTemplate === 'game' || currentTemplate === 'music' ? 'border-white/10' :
           currentTemplate === 'food' ? 'border-stone-800' :
           currentTemplate === 'grid' ? 'border-blue-900/50' :
           currentTemplate === 'magazine' ? 'border-neutral-200' :
           currentTemplate === 'brutalist' ? 'border-black border-b-[3px]' :
           currentTemplate === 'kitchen' ? 'border-stone-200' :
           currentTemplate === 'kids' ? 'border-sky-200' :
           currentTemplate === 'scifi' ? 'border-cyan-900/50' :
           currentTemplate === 'eink' ? 'border-black border-b-2' :
           currentTemplate === 'solarpunk' ? 'border-emerald-200' :
           currentTemplate === 'legal' ? 'border-stone-300' :
           currentTemplate === 'softplastic' ? 'border-slate-200' :
           currentTemplate === 'festival' ? 'border-white/10' :
           currentTemplate === 'acid' ? 'border-black border-b-4' :
           currentTemplate === 'legacy' ? 'border-white border-b-2 bg-[#c0c0c0]' :
           currentTemplate === 'cockpit' ? 'border-zinc-800' :
           currentTemplate === 'clay' ? 'border-white/0' :
           currentTemplate === 'blueprint' ? 'border-white/30' :
           currentTemplate === 'ecommerce' ? 'border-neutral-100' :
           currentTemplate === 'swiss' ? 'border-transparent' :
           'border-slate-200'
        } group-hover:justify-start`}>
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
             currentTemplate === 'engineering' ? 'bg-zinc-100 text-zinc-950' : 
             currentTemplate === 'education' ? 'bg-violet-600 text-white' :
             currentTemplate === 'saas' ? 'bg-indigo-600 text-white' :
             currentTemplate === 'magazine' ? 'bg-black text-white' :
             currentTemplate === 'ecommerce' ? 'bg-black text-white' :
             currentTemplate === 'social' ? 'bg-sky-500 text-white' :
             currentTemplate === 'fintech' ? 'bg-emerald-500 text-white' :
             currentTemplate === 'productivity' ? 'bg-amber-500 text-zinc-950' :
             currentTemplate === 'game' ? 'bg-fuchsia-600 text-white' :
             currentTemplate === 'music' ? 'bg-rose-600 text-white' :
             currentTemplate === 'food' ? 'bg-orange-600 text-white' :
             currentTemplate === 'grid' ? 'bg-blue-600 text-white' :
             currentTemplate === 'brutalist' ? 'bg-black text-yellow-400 rounded-none' :
             currentTemplate === 'kitchen' ? 'bg-stone-800 text-stone-100' :
             currentTemplate === 'kids' ? 'bg-yellow-400 text-black rounded-xl' :
             currentTemplate === 'scifi' ? 'bg-cyan-500 text-black rounded-sm' :
             currentTemplate === 'eink' ? 'bg-black text-white rounded-none' :
             currentTemplate === 'solarpunk' ? 'bg-emerald-500 text-white rounded-tl-xl rounded-br-xl' :
             currentTemplate === 'legal' ? 'bg-red-800 text-white rounded-sm' :
             currentTemplate === 'softplastic' ? 'bg-[#EFEEEE] text-slate-500 rounded-2xl shadow-[4px_4px_8px_#D1D9E6,-4px_-4px_8px_#FFFFFF]' :
             currentTemplate === 'festival' ? 'bg-white text-black rounded-full shadow-[0_0_15px_white]' :
             currentTemplate === 'acid' ? 'bg-[#ccff00] text-black border-2 border-black rounded-none shadow-[2px_2px_0px_#000]' :
             currentTemplate === 'legacy' ? 'bg-[#000080] text-white rounded-none border border-white' :
             currentTemplate === 'cockpit' ? 'bg-blue-600 text-white rounded-md border border-zinc-500' :
             currentTemplate === 'clay' ? 'bg-sky-400 text-white rounded-2xl shadow-lg' :
             currentTemplate === 'blueprint' ? 'bg-[#1e3a8a] text-white border border-white rounded-none' :
             currentTemplate === 'swiss' ? 'bg-[#DC2626] text-white rounded-none' :
             'bg-stone-900 text-stone-50'
          }`}>
            <Command className="h-5 w-5" />
          </div>
          <span className={`ml-3 overflow-hidden whitespace-nowrap text-sm font-bold tracking-tight opacity-0 transition-all duration-300 group-hover:opacity-100 ${
             currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' || currentTemplate === 'game' || currentTemplate === 'music' || currentTemplate === 'food' || currentTemplate === 'grid' || currentTemplate === 'scifi' || currentTemplate === 'festival' || currentTemplate === 'cockpit' || currentTemplate === 'blueprint' ? 'text-white' : 
             currentTemplate === 'brutalist' || currentTemplate === 'kitchen' || currentTemplate === 'kids' || currentTemplate === 'eink' || currentTemplate === 'solarpunk' || currentTemplate === 'legal' || currentTemplate === 'acid' || currentTemplate === 'legacy' || currentTemplate === 'swiss' ? 'text-black font-mono uppercase' : 'text-slate-900'
          }`}>
            NEXUS
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-3">
           {/* Template Switcher Section */}
           <div className={`mb-4 flex flex-col gap-1 border-b pb-4 ${
               currentTemplate === 'engineering' ? 'border-zinc-800/50' : 
               currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' ? 'border-zinc-800/50' :
               currentTemplate === 'game' || currentTemplate === 'music' ? 'border-white/10' :
               currentTemplate === 'food' ? 'border-stone-800' :
               currentTemplate === 'grid' ? 'border-blue-900/30' :
               currentTemplate === 'brutalist' ? 'border-black border-b-[3px]' :
               currentTemplate === 'kitchen' ? 'border-stone-200' :
               currentTemplate === 'kids' ? 'border-sky-200' :
               currentTemplate === 'scifi' ? 'border-cyan-900/50' :
               currentTemplate === 'eink' ? 'border-black border-b-2' :
               currentTemplate === 'solarpunk' ? 'border-emerald-200' :
               currentTemplate === 'legal' ? 'border-stone-300' :
               currentTemplate === 'softplastic' ? 'border-slate-300' :
               currentTemplate === 'festival' ? 'border-white/20' :
               currentTemplate === 'acid' ? 'border-black border-b-4' :
               currentTemplate === 'legacy' ? 'border-white border-b-2' :
               currentTemplate === 'cockpit' ? 'border-zinc-800' :
               currentTemplate === 'clay' ? 'border-slate-200' :
               currentTemplate === 'blueprint' ? 'border-white/30' :
               currentTemplate === 'swiss' ? 'border-black' :
               currentTemplate === 'magazine' ? 'border-neutral-200' :
               currentTemplate === 'ecommerce' ? 'border-neutral-100' :
               'border-slate-200'
            }`}>
             <button 
               onClick={() => setIsGalleriesOpen(!isGalleriesOpen)}
               className={`flex w-full items-center justify-between px-2 py-2 text-[10px] font-semibold uppercase tracking-wider transition-opacity opacity-0 group-hover:opacity-100 ${
                  currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' || currentTemplate === 'game' || currentTemplate === 'music' || currentTemplate === 'food' || currentTemplate === 'grid' || currentTemplate === 'scifi' || currentTemplate === 'festival' || currentTemplate === 'cockpit' || currentTemplate === 'blueprint' ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-500 hover:text-slate-700'
               }`}
             >
               <span>Galleries</span>
               {isGalleriesOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
             </button>
             
             <div className="space-y-1">
                 {(isGalleriesOpen ? templates : templates.filter(t => t.id === currentTemplate)).map((template) => (
                   <button
                      key={template.id}
                      onClick={() => {
                          if (isGalleriesOpen) {
                              setCurrentTemplate(template.id);
                          } else {
                              setIsGalleriesOpen(true);
                          }
                      }}
                      className={`flex h-10 items-center rounded-md px-2.5 transition-all duration-200 ${
                        !isGalleriesOpen ? 'ml-2 w-[calc(100%-0.5rem)]' : 'w-full'
                      } ${
                        currentTemplate === template.id
                          ? currentTemplate === 'brutalist' 
                            ? 'bg-black text-yellow-400 rounded-none border border-black'
                            : currentTemplate === 'eink'
                            ? 'bg-black text-white rounded-none border border-black'
                            : currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'fintech' || currentTemplate === 'social' || currentTemplate === 'productivity' || currentTemplate === 'grid' || currentTemplate === 'scifi' || currentTemplate === 'cockpit' || currentTemplate === 'blueprint'
                            ? 'bg-zinc-800 text-white' 
                            : currentTemplate === 'game' || currentTemplate === 'music'
                            ? 'bg-white/10 text-white'
                            : currentTemplate === 'solarpunk'
                            ? 'bg-emerald-500 text-white'
                            : currentTemplate === 'legal'
                            ? 'bg-red-800 text-white'
                            : currentTemplate === 'softplastic'
                            ? 'bg-[#EFEEEE] shadow-[inset_3px_3px_6px_#D1D9E6,inset_-3px_-3px_6px_#FFFFFF] text-slate-600'
                            : currentTemplate === 'festival'
                            ? 'bg-fuchsia-900/50 text-fuchsia-100 border border-fuchsia-500/30'
                            : currentTemplate === 'acid'
                            ? 'bg-[#ccff00] text-black border-2 border-black rounded-none shadow-[2px_2px_0px_#000]'
                            : currentTemplate === 'legacy'
                            ? 'bg-[#000080] text-white border border-white rounded-none'
                            : currentTemplate === 'food'
                            ? 'bg-stone-800 text-stone-100'
                            : currentTemplate === 'clay'
                            ? 'bg-sky-100 text-sky-900 shadow-sm font-bold'
                            : currentTemplate === 'swiss'
                            ? 'bg-[#DC2626] text-white rounded-none font-bold'
                            : 'bg-slate-200 text-slate-900'
                          : currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'fintech' || currentTemplate === 'social' || currentTemplate === 'productivity' || currentTemplate === 'game' || currentTemplate === 'music' || currentTemplate === 'grid' || currentTemplate === 'food' || currentTemplate === 'scifi' || currentTemplate === 'festival' || currentTemplate === 'cockpit' || currentTemplate === 'blueprint'
                          ? 'text-zinc-500 hover:bg-white/5 hover:text-zinc-200'
                          : 'text-zinc-500 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                   >
                      <div className={`h-2 w-2 ${template.customStyle || 'rounded-full'} ${currentTemplate === template.id ? template.colorClass : 'bg-zinc-400'}`} />
                      <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {template.label}
                      </span>
                   </button>
                 ))}
             </div>
           </div>
           
           {[
             { icon: Box, label: 'Components' },
             { icon: LayoutTemplate, label: 'Templates' },
             { icon: Zap, label: 'Hooks' },
             { icon: Settings, label: 'Settings' },
           ].map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex h-10 items-center rounded-md px-2.5 transition-all duration-200 ${
                 currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' || currentTemplate === 'game' || currentTemplate === 'music' || currentTemplate === 'food' || currentTemplate === 'grid' || currentTemplate === 'scifi' || currentTemplate === 'festival' || currentTemplate === 'cockpit' || currentTemplate === 'blueprint'
                  ? 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                  : currentTemplate === 'brutalist' ? 'text-black hover:bg-yellow-400 hover:text-black hover:rounded-none'
                  : currentTemplate === 'kids' ? 'text-slate-500 hover:bg-sky-100 hover:text-sky-800'
                  : currentTemplate === 'eink' ? 'text-black hover:bg-black/5'
                  : currentTemplate === 'solarpunk' ? 'text-emerald-800 hover:bg-emerald-100'
                  : currentTemplate === 'legal' ? 'text-stone-700 hover:bg-stone-200'
                  : currentTemplate === 'softplastic' ? 'text-slate-500 hover:bg-[#D1D9E6]/30'
                  : currentTemplate === 'acid' ? 'text-black hover:bg-[#ccff00] hover:border-2 hover:border-black hover:rounded-none'
                  : currentTemplate === 'legacy' ? 'text-black hover:bg-[#000080] hover:text-white rounded-none border border-transparent hover:border-white'
                  : currentTemplate === 'clay' ? 'text-slate-500 hover:bg-white hover:text-sky-600 hover:shadow-sm'
                  : currentTemplate === 'swiss' ? 'text-black hover:bg-black hover:text-white rounded-none'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" strokeWidth={1.5} />
              <span className="ml-3 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </aside>
      
      <main className="relative flex flex-1 flex-col pl-16 transition-[padding] duration-300">
        {/* Dynamic Header - Hide on Magazine/Ecommerce/Brutalist/Kitchen/Kids/SciFi/EInk/Solarpunk layouts for immersive feel, or style minimally */}
        {currentTemplate !== 'brutalist' && currentTemplate !== 'kitchen' && currentTemplate !== 'kids' && currentTemplate !== 'scifi' && currentTemplate !== 'eink' && currentTemplate !== 'solarpunk' && currentTemplate !== 'legal' && currentTemplate !== 'softplastic' && currentTemplate !== 'festival' && currentTemplate !== 'acid' && currentTemplate !== 'legacy' && currentTemplate !== 'cockpit' && currentTemplate !== 'clay' && currentTemplate !== 'blueprint' && currentTemplate !== 'swiss' && (
        <header className={`sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b px-8 backdrop-blur-md transition-colors ${
           currentTemplate === 'engineering' ? 'border-zinc-800 bg-zinc-950/80' : 
           currentTemplate === 'saas' ? 'border-slate-800 bg-slate-950/80' :
           currentTemplate === 'social' ? 'border-zinc-800 bg-black/80' :
           currentTemplate === 'fintech' ? 'border-zinc-800 bg-zinc-950/80' :
           currentTemplate === 'productivity' ? 'border-zinc-800 bg-zinc-950/80' :
           currentTemplate === 'game' ? 'border-white/10 bg-[#130f26]/80' :
           currentTemplate === 'music' ? 'border-white/5 bg-[#0a0a0a]/80' :
           currentTemplate === 'food' ? 'border-stone-800 bg-[#0c0a09]/80' :
           currentTemplate === 'grid' ? 'border-blue-900/50 bg-[#0b1121]/80' :
           currentTemplate === 'magazine' ? 'border-neutral-200 bg-[#fdfbf7]/90' :
           currentTemplate === 'ecommerce' ? 'border-neutral-100 bg-white/90' :
           'border-slate-200 bg-white/80'
        }`}>
           <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors ${
                 currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' || currentTemplate === 'game' || currentTemplate === 'music' || currentTemplate === 'food' || currentTemplate === 'grid' ? 'text-zinc-500 group-focus-within:text-zinc-300' : 'text-slate-400 group-focus-within:text-slate-600'
              }`} />
              <input
                type="text"
                placeholder="Search..."
                className={`h-10 w-64 rounded-full border pl-10 pr-12 text-sm outline-none transition-all duration-200 focus:w-80 ${
                   currentTemplate === 'engineering'
                     ? 'border-zinc-800 bg-zinc-900/50 text-zinc-200 placeholder-zinc-500 focus:border-zinc-700 focus:bg-zinc-900'
                     : currentTemplate === 'saas'
                     ? 'border-slate-800 bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:bg-slate-900'
                     : currentTemplate === 'social'
                     ? 'border-zinc-800 bg-zinc-900/50 text-zinc-200 placeholder-zinc-500 focus:border-sky-500 focus:bg-zinc-900'
                     : currentTemplate === 'fintech'
                     ? 'border-zinc-800 bg-zinc-900/50 text-zinc-200 placeholder-zinc-500 focus:border-emerald-500 focus:bg-zinc-900'
                     : currentTemplate === 'productivity'
                     ? 'border-zinc-800 bg-zinc-900/50 text-zinc-200 placeholder-zinc-500 focus:border-amber-500 focus:bg-zinc-900'
                     : currentTemplate === 'game'
                     ? 'border-white/20 bg-black/20 text-zinc-200 placeholder-zinc-500 focus:border-fuchsia-500 focus:bg-black/40'
                     : currentTemplate === 'music'
                     ? 'border-white/10 bg-white/5 text-zinc-200 placeholder-zinc-500 focus:border-rose-500 focus:bg-black/40'
                     : currentTemplate === 'food'
                     ? 'border-stone-800 bg-stone-900/50 text-stone-200 placeholder-stone-500 focus:border-orange-500 focus:bg-stone-900'
                     : currentTemplate === 'grid'
                     ? 'border-blue-900/50 bg-slate-900/50 text-blue-100 placeholder-blue-500/50 focus:border-blue-500 focus:bg-slate-900'
                     : currentTemplate === 'magazine' || currentTemplate === 'ecommerce'
                     ? 'border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900'
                     : 'border-slate-200 bg-slate-100 text-slate-800 placeholder-slate-400 focus:border-slate-300 focus:bg-white'
                }`}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button className={`rounded-full p-2 transition-colors ${
                currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' || currentTemplate === 'game' || currentTemplate === 'music' || currentTemplate === 'food' || currentTemplate === 'grid' ? 'text-zinc-400 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
             }`}>
               <Github className="h-5 w-5" />
             </button>
             <button className={`relative rounded-full p-2 transition-colors ${
                currentTemplate === 'engineering' || currentTemplate === 'saas' || currentTemplate === 'social' || currentTemplate === 'fintech' || currentTemplate === 'productivity' || currentTemplate === 'game' || currentTemplate === 'music' || currentTemplate === 'food' || currentTemplate === 'grid' ? 'text-zinc-400 hover:bg-white/10 hover:text-white' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
             }`}>
               <Bell className="h-5 w-5" />
               <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
             </button>
          </div>
        </header>
        )}
        
        {/* Content Area */}
        {currentTemplate === 'engineering' && <EngineeringDashboard />}
        {currentTemplate === 'wellness' && <WellnessDashboard />}
        {currentTemplate === 'education' && <EducationDashboard />}
        {currentTemplate === 'saas' && <SaasDashboard />}
        {currentTemplate === 'magazine' && <MagazineDashboard />}
        {currentTemplate === 'ecommerce' && <EcommerceDashboard />}
        {currentTemplate === 'social' && <SocialDashboard />}
        {currentTemplate === 'fintech' && <FintechDashboard />}
        {currentTemplate === 'productivity' && <ProductivityDashboard />}
        {currentTemplate === 'game' && <GameDashboard />}
        {currentTemplate === 'music' && <MusicDashboard />}
        {currentTemplate === 'food' && <FoodDashboard />}
        {currentTemplate === 'grid' && <GridDashboard />}
        {currentTemplate === 'brutalist' && <BrutalistDashboard />}
        {currentTemplate === 'kitchen' && <KitchenDashboard />}
        {currentTemplate === 'kids' && <KidsDashboard />}
        {currentTemplate === 'scifi' && <SciFiDashboard />}
        {currentTemplate === 'eink' && <EInkDashboard />}
        {currentTemplate === 'solarpunk' && <SolarpunkDashboard />}
        {currentTemplate === 'legal' && <LegalDashboard />}
        {currentTemplate === 'softplastic' && <SoftPlasticDashboard />}
        {currentTemplate === 'festival' && <FestivalDashboard />}
        {currentTemplate === 'acid' && <AcidDashboard />}
        {currentTemplate === 'legacy' && <LegacyOSDashboard />}
        {currentTemplate === 'cockpit' && <CockpitDashboard />}
        {currentTemplate === 'clay' && <ClaymorphismDashboard />}
        {currentTemplate === 'blueprint' && <BlueprintDashboard />}
        {currentTemplate === 'swiss' && <SwissDashboard />}
      </main>
    </div>
  );
};

export default App;