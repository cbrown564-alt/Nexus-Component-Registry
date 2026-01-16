
import { useState } from 'react';
import { raveData, RaveEvent } from '@/data/templates/rave';
import { Calendar, MapPin, Ticket, Zap, ArrowUpRight, Search, Menu } from 'lucide-react';

export default function RaveTemplate() {
    return (
        <div className="h-full w-full bg-black text-white font-mono overflow-y-auto no-scrollbar pb-24">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-black border-b-4 border-white">
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-4xl font-black italic tracking-tighter text-[#ccff00]">RAVE</h1>
                    <div className="flex gap-4">
                        <button className="border-2 border-white p-2 hover:bg-white hover:text-black transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                        <button className="border-2 border-white p-2 hover:bg-white hover:text-black transition-colors">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                {/* Marquee */}
                <div className="overflow-hidden whitespace-nowrap bg-[#ccff00] text-black border-y-4 border-black py-1">
                    <div className="animate-marquee inline-block font-bold">
                        NON-STOP RHYTHM // NO SLEEP TILL BROOKLYN // WAREHOUSE PARTIES // UNDERGROUND SOUNDS //
                    </div>
                </div>
            </div>

            {/* Feed */}
            <div className="p-4 space-y-8">
                {raveData.map((event) => (
                    <RaveCard key={event.id} event={event} />
                ))}
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="bg-[#ff00cc] text-white p-4 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <Zap className="w-8 h-8 fill-current" />
                </button>
            </div>
        </div>
    );
}

function RaveCard({ event }: { event: RaveEvent }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="group relative bg-zinc-900 border-4 border-white p-4 shadow-[8px_8px_0px_0px_rgba(204,255,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,0,204,1)] transition-all duration-200">
            {event.isHot && (
                <div className="absolute -top-6 -right-6 bg-[#ff00cc] text-white font-black px-4 py-1 rotate-12 border-2 border-white shadow-[4px_4px_0_0_black] z-10">
                    SELLING FAST
                </div>
            )}

            <div className="relative aspect-video w-full overflow-hidden border-2 border-white mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                    <span className="font-bold bg-white text-black px-2 py-1">{event.price}</span>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h2 className="text-3xl font-black uppercase leading-none mb-1 group-hover:text-[#ccff00] transition-colors">{event.title}</h2>
                    <div className="flex gap-2 text-sm font-bold text-zinc-400">
                        {event.tags.map(tag => (
                            <span key={tag} className="bg-zinc-800 text-zinc-200 px-2 py-0.5 border border-zinc-600">#{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="space-y-2 border-t-2 border-zinc-800 pt-4">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#ccff00]" />
                        <span className="font-bold">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#ff00cc]" />
                        <span className="font-bold">{event.location}</span>
                    </div>
                </div>

                <button
                    onClick={() => setLiked(!liked)}
                    className={`w-full py-3 px-6 font-black uppercase text-lg border-2 transition-all ${liked ? 'bg-[#ccff00] text-black border-[#ccff00]' : 'bg-transparent text-white border-white hover:bg-white hover:text-black'}`}
                >
                    {liked ? 'GOING!' : 'GET TICKETS'}
                </button>
            </div>
        </div>
    );
}
