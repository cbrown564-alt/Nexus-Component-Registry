export interface FluxItem {
    id: string;
    type: 'video' | 'image';
    url: string;
    username: string;
    description: string;
    likes: number;
    comments: number;
    shares: number;
    song?: string;
}

export const fluxData: FluxItem[] = [
    {
        id: '1',
        type: 'image',
        url: '/images/templates/flux/cyberpunk-chef.png',
        username: '@neo_noodle',
        description: 'Late night ramen runs in Sector 7 just hit different 🍜✨ #cyberpunk #streetfood #neon',
        likes: 12400,
        comments: 342,
        shares: 150,
        song: 'Midnight City - M83'
    },
    {
        id: '2',
        type: 'image',
        url: '/images/templates/flux/astro-surf.png',
        username: '@sky_walker',
        description: 'Cloud surfing above the grid. The view from up here is unreal. ☁️🏄‍♂️ #synthwave #dreamy',
        likes: 8500,
        comments: 120,
        shares: 890,
        song: 'Shooting Stars - Bag Raiders'
    },
    {
        id: '3',
        type: 'image',
        url: '/images/templates/flux/neon-cat-dj.png',
        username: '@dj_whiskers',
        description: 'Dropping beats in the enchanted forest. 🐱🎧 This party is lit! #catlife #dj #party',
        likes: 45200,
        comments: 1200,
        shares: 5600,
        song: 'Energy - Disclosure'
    },
    {
        id: '4',
        type: 'image',
        url: '/images/templates/flux/pastel-islands.png',
        username: '@low_poly_love',
        description: 'Found this peaceful spot in the simulation today. Perfect place to disconnect. 🏝️💕 #chill #art',
        likes: 24500,
        comments: 890,
        shares: 2100,
        song: 'Water - Tyla'
    },
    {
        id: '5',
        type: 'image',
        url: '/images/templates/flux/holo-flower.png',
        username: '@macro_magic',
        description: 'Nature 2.0. Even the flowers are upgrading. 💎🌸 #holographic #macro #nature',
        likes: 18900,
        comments: 567,
        shares: 430,
        song: 'Pure Imagination - Lofi'
    }
];
