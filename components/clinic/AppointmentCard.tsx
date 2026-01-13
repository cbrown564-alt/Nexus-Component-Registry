import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { MapPin, ChevronRight } from 'lucide-react';

export interface Appointment {
    time: string;
    doctor: string;
    specialty: string;
    location: string;
    type: string;
    image: string;
}

export interface AppointmentCardProps {
    /** Title displayed at the top */
    title?: string;
    /** Subtitle describing the time range */
    subtitle?: string;
    /** Array of appointments */
    appointments?: Appointment[];
    /** Label for the view all button */
    viewAllLabel?: string;
    /** Callback when view all is clicked */
    onViewAll?: () => void;
}

const defaultAppointments: Appointment[] = [
    {
        time: '09:00 AM',
        doctor: 'Dr. Sarah Chen',
        specialty: 'Cardiology',
        location: 'Suite 405',
        type: 'Follow-up',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200'
    },
    {
        time: '02:30 PM',
        doctor: 'Dr. Michael Ross',
        specialty: 'Dermatology',
        location: 'Suite 210',
        type: 'Annual Screening',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
    },
    {
        time: 'Tomorrow',
        doctor: 'Dr. Emily Wei',
        specialty: 'Nutrition',
        location: 'Virtual',
        type: 'Consultation',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    }
];

const AppointmentCard: React.FC<AppointmentCardProps> = ({
    title = "Itinerary",
    subtitle = "Today & Upcoming",
    appointments = defaultAppointments,
    viewAllLabel = "Full Narrative",
    onViewAll,
}) => {
    const { currentPlaygroundTheme: theme } = useTheme();

    return (
        <div className="h-full flex flex-col font-serif">
            <div className="flex justify-between items-baseline mb-8">
                <h3 className="text-3xl font-serif italic" style={{ color: theme.colors.foreground }}>{title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] opacity-40">{subtitle}</span>
            </div>

            <div className="relative flex-1 pl-4">
                {/* The Narrative Line */}
                <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-stone-200" />

                <div className="flex flex-col gap-12">
                    {appointments.map((apt, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative pl-8 group cursor-pointer"
                        >
                            {/* Chapter Marker */}
                            <div className={`absolute left-[-21px] top-2 w-[11px] h-[11px] rounded-full border-[3px] bg-white transition-all duration-700 ease-out group-hover:scale-125 z-10`} style={{ borderColor: theme.colors.primary }} />

                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="block text-sm font-sans tracking-wider opacity-50 mb-1">{apt.time}</span>
                                    <h4 className="text-xl font-medium mb-1 group-hover:translate-x-1 transition-transform duration-700 ease-out">{apt.type}</h4>
                                    <p className="opacity-60 font-serif italic mb-3">with {apt.doctor}</p>

                                    <div className="flex items-center gap-4 text-xs font-sans tracking-wide opacity-40">
                                        <span className="flex items-center gap-1"><MapPin size={12} /> {apt.location}</span>
                                    </div>
                                </div>

                                <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out opacity-80 group-hover:opacity-100">
                                    <img src={apt.image} alt={apt.doctor} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <button onClick={onViewAll} className="mt-12 text-xs uppercase tracking-[0.2em] flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {viewAllLabel} <ChevronRight size={12} />
                </button>
            </div>
        </div>
    );
};

export default AppointmentCard;
