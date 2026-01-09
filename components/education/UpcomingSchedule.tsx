import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';
import EducationCard from './EducationCard';

const UpcomingSchedule = () => {
  const events = [
    {
      title: 'Advanced UI Design Principles',
      time: '10:00 AM - 11:30 AM',
      type: 'Live Lecture',
      status: 'live',
    },
    {
      title: 'React Performance Optimization',
      time: '2:00 PM - 3:00 PM',
      type: 'Workshop',
      status: 'upcoming',
    },
    {
      title: 'Group Project Sync',
      time: '4:30 PM - 5:00 PM',
      type: 'Meeting',
      status: 'upcoming',
    },
  ];

  return (
    <EducationCard className="p-6 h-full">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-slate-900">Today's Schedule</h3>
        <button className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
            <Calendar className="h-4 w-4" />
        </button>
      </div>

      <div className="relative space-y-6">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-100" />

        {events.map((event, i) => (
            <div key={i} className="relative flex gap-4">
                <div className={`relative z-10 h-4 w-4 rounded-full border-2 bg-white ${
                    event.status === 'live' ? 'border-red-500' : 'border-slate-300'
                }`}>
                    {event.status === 'live' && (
                        <div className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-75" />
                    )}
                </div>
                <div className="flex-1 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                    <div className="mb-1 flex items-center justify-between">
                        <span className={`text-xs font-bold uppercase tracking-wider ${
                            event.status === 'live' ? 'text-red-500' : 'text-slate-500'
                        }`}>
                            {event.status === 'live' ? 'Happening Now' : event.type}
                        </span>
                        {event.status === 'live' && <Video className="h-3 w-3 text-red-500" />}
                    </div>
                    <h4 className="font-bold text-slate-800">{event.title}</h4>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </EducationCard>
  );
};

export default UpcomingSchedule;