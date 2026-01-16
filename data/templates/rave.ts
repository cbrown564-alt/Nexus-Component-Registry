
export interface RaveEvent {
    id: string;
    title: string;
    date: string;
    location: string;
    price: string;
    image: string;
    tags: string[];
    isHot?: boolean;
}

export const raveData: RaveEvent[] = [
    {
        id: '1',
        title: 'NEON DAEMON',
        date: 'TONIGHT 23:00',
        location: 'WAREHOUSE 49',
        price: '£25.00',
        image: '/images/templates/rave/neon.png',
        tags: ['GABBER', 'HARDCORE', '180BPM'],
        isHot: true,
    },
    {
        id: '2',
        title: 'ACID RAIN',
        date: 'FRI 22:00',
        location: 'THE BUNKER',
        price: '£15.00',
        image: '/images/templates/rave/acid.png',
        tags: ['ACID', 'TECHNO', 'TB-303'],
    },
    {
        id: '3',
        title: 'CYBER PUNK',
        date: 'SAT 00:00',
        location: 'UNDERGROUND',
        price: '£30.00',
        image: '/images/templates/rave/cyber.png',
        tags: ['HACKER', 'BREAKCORE', 'GLITCH'],
    },
    {
        id: '4',
        title: 'STATIC NOISE',
        date: 'SUN 20:00',
        location: 'ROOFTOP X',
        price: '£10.00',
        image: '/images/templates/rave/static.png',
        tags: ['NOISE', 'AMBIENT', 'EXP'],
    }
];
