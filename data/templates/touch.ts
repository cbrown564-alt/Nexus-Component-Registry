export interface TouchDevice {
    id: string;
    name: string;
    type: 'light' | 'thermostat' | 'lock' | 'speaker';
    state: boolean;
    value?: number;
    unit?: string;
    icon: string;
}

export const touchDevices: TouchDevice[] = [
    {
        id: '1',
        name: 'Living Room',
        type: 'light',
        state: true,
        value: 80,
        unit: '%',
        icon: 'Zap'
    },
    {
        id: '2',
        name: 'Thermostat',
        type: 'thermostat',
        state: true,
        value: 72,
        unit: '°',
        icon: 'Thermometer'
    },
    {
        id: '3',
        name: 'Front Door',
        type: 'lock',
        state: false, // Locked
        icon: 'Lock'
    },
    {
        id: '4',
        name: 'Sonos',
        type: 'speaker',
        state: true,
        value: 45,
        unit: 'vol',
        icon: 'Speaker'
    },
    {
        id: '5',
        name: 'Kitchen',
        type: 'light',
        state: false,
        value: 0,
        unit: '%',
        icon: 'Zap'
    },
    {
        id: '6',
        name: 'Bedroom',
        type: 'light',
        state: true,
        value: 50,
        unit: '%',
        icon: 'Zap'
    }
];
