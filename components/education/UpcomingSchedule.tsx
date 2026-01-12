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
        <h3 className="font-display text-lg font-bold" style={{ color: '#0f172a' }}>Today's Schedule</h3>
        <button className="rounded-lg p-2" style={{ backgroundColor: '#f1f5f9', color: '#475569' }}>
          <Calendar className="h-4 w-4" />
        </button>
      </div>

      <div className="relative space-y-6">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px]" style={{ backgroundColor: '#f1f5f9' }} />

        {events.map((event, i) => (
          <div key={i} className="relative flex gap-4">
            <div
              className="relative z-10 h-4 w-4 rounded-full border-2"
              style={{
                backgroundColor: '#ffffff',
                borderColor: event.status === 'live' ? '#ef4444' : '#cbd5e1'
              }}
            >
              {event.status === 'live' && (
                <div className="absolute inset-0 animate-ping rounded-full opacity-75" style={{ backgroundColor: '#ef4444' }} />
              )}
            </div>
            <div className="flex-1 rounded-xl p-4 transition-colors" style={{ backgroundColor: '#f8fafc' }}>
              <div className="mb-1 flex items-center justify-between">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: event.status === 'live' ? '#ef4444' : '#64748b' }}
                >
                  {event.status === 'live' ? 'Happening Now' : event.type}
                </span>
                {event.status === 'live' && <Video className="h-3 w-3" style={{ color: '#ef4444' }} />}
              </div>
              <h4 className="font-bold" style={{ color: '#1e293b' }}>{event.title}</h4>
              <div className="mt-2 flex items-center gap-1.5 text-xs" style={{ color: '#64748b' }}>
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