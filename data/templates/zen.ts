export interface ZenItem {
    id: string;
    title: string;
    author: string;
    readTime: string;
    preview: string;
    progress: number;
    cover: string; // CSS gradient class
}

export const zenItems: ZenItem[] = [
    {
        id: '1',
        title: 'The Art of Stillness',
        author: 'Pico Iyer',
        readTime: '8 min',
        preview: 'In an age of constant preparation, nothing is more urgent than sitting still. We spend our lives running to get somewhere, only to find...',
        progress: 45,
        cover: 'from-amber-100 to-orange-100'
    },
    {
        id: '2',
        title: 'Wabi Sabi',
        author: 'Beth Kempton',
        readTime: '12 min',
        preview: 'Wabi sabi is an intuitive response to beauty that reflects the true nature of life. It is the acceptance of transience and imperfection.',
        progress: 12,
        cover: 'from-stone-200 to-stone-400'
    },
    {
        id: '3',
        title: 'Essentialism',
        author: 'Greg McKeown',
        readTime: '5 min',
        preview: 'The Way of the Essentialist isn’t about getting more done in less time. It’s not about getting less done. It’s about getting only the right things done.',
        progress: 0,
        cover: 'from-blue-50 to-slate-200'
    }
];

export const zenContent = `
# The Art of Stillness

In an age of speed, I began to think, nothing could be more invigorating than going slow. In an age of distraction, nothing can feel more luxurious than paying attention. And in an age of constant movement, nothing is more urgent than sitting still.

We can go anywhere in the world now, and see everything, but the most important journey is the one we take inward. To sit still is not to do nothing; it is to begin to see everything in a new light.

## The unexpected adventure

A lot of the people I know are running around, so frantic to get to the next place that they never really arrive at where they are. 

It reminds me of the old story of the man on the horse galloping past a friend who shouts, "Where are you going?" 
"I don't know," the rider shouts back, "ask the horse!"

We are all riding that horse.

***

In the silence, we can hear the voice that tells us who we really are. It's only when we stop that we can see where we're going.
`;
