import { PlaygroundTheme } from './playgroundThemes'
import { brutalist } from './themes/brutalist'

export interface StoryStep {
    id: string
    content: string // Markdown narrative
    componentState: {
        componentName: string // e.g., 'Button'
        props: Record<string, any> // e.g. { children: 'Click Me' }
        themeId: string // e.g. 'brutalist'
    }
    highlight?: string // Prop or token to highlight in the stage
    focusPoint?: { x: number; y: number; zoom: number }
}

export interface StoryChapter {
    id: string
    title: string
    steps: StoryStep[]
}

export interface Story {
    id: string
    title: string
    description: string
    thumbnail: string // Class name for a pattern or color
    chapters: StoryChapter[]
}

export const stories: Story[] = [
    {
        id: 'case-for-brutalism',
        title: 'The Case for Brutalism',
        description: 'Why strict boundaries and high contrast create clearer interfaces.',
        thumbnail: 'bg-yellow-400 border-4 border-black pattern-diagonal-lines',
        chapters: [
            {
                id: 'chapter-1',
                title: 'The Structure',
                steps: [
                    {
                        id: 'step-1',
                        content: `
## The Raw Material

Every great interface starts with a single primitive. Before we think about "delight" or "polish", we must think about **structure**.

In the browser, this is the humble \`<button>\`. It comes with the browser's default opinion: a grey background, a bevelled border, and a system font.
                        `,
                        componentState: {
                            componentName: 'Button',
                            // Simulate User Agent Styles
                            props: {
                                children: 'Submit Transaction',
                                className: 'bg-[buttonface] text-black border-2 border-outset border-gray-400 px-4 py-1 rounded-sm font-sans'
                            },
                            themeId: 'shared',
                        },
                    },
                    {
                        id: 'step-2',
                        content: `
## Stripping the Defaults

The first step in our system is to remove the browser's opinion. We reset the slate. 

We are left with a blank canvas. This is the **void**. The element is there, semantic and accessible, but visually silent.
                        `,
                        componentState: {
                            componentName: 'Button',
                            // Tailwind Reset + White text to make it visible in dark mode
                            props: {
                                children: 'Submit Transaction',
                                className: 'bg-transparent border-0 p-0 text-white'
                            },
                            themeId: 'shared',
                        },
                        highlight: 'className',
                    },
                ],
            },
            {
                id: 'chapter-2',
                title: 'The Brutalist Ethos',
                steps: [
                    {
                        id: 'step-3',
                        content: `
## Defining Boundaries

Brutalism isn't about being "ugly"; it's about being **honest**. It relies on distinct, unbreakable boundaries.

We introduce a 2px hard border. No softness. No ambiguity. You are either inside the button, or you are outside.
                        `,
                        componentState: {
                            componentName: 'Button',
                            props: {
                                children: 'Submit Transaction',
                                // Progressive: Add Border
                                className: 'bg-transparent p-3 text-white border-2 border-white'
                            },
                            themeId: 'brutalist',
                        },
                        highlight: 'className',
                    },
                    {
                        id: 'step-4',
                        content: `
## Function Over Form

We choose a typeface that reflects this honesty. Monospace. The language of code, of terminals, of raw data.

It tells the user: *This is a tool. Use it.*
                        `,
                        componentState: {
                            componentName: 'Button',
                            props: {
                                children: 'Submit Transaction',
                                // Progressive: Add Font
                                className: 'bg-transparent p-3 text-white border-2 border-white font-mono uppercase tracking-wider'
                            },
                            themeId: 'brutalist',
                        },
                        highlight: 'className',
                    },
                    {
                        id: 'step-5',
                        content: `
## High Contrast

Shadows in modern design often simulate elevation (Material). In Brutalism, specific shadows simulate **displacement**.

A hard drop shadow creates a tactile feel without pretending to be a physical object in 3D space. It's a graphic layer, offset by pure math.
                        `,
                        componentState: {
                            componentName: 'Button',
                            props: {
                                children: 'Submit Transaction',
                                // Progressive: Add Shadow
                                className: 'bg-yellow-400 text-black p-3 border-2 border-black font-mono font-bold uppercase tracking-wider',
                                style: { boxShadow: '4px 4px 0px 0px white' }
                            },
                            themeId: 'brutalist',
                        },
                        highlight: 'style',
                    },
                    {
                        id: 'step-6',
                        content: `
## The Result

The final component encompasses all these decisions, wrapped in a reusable abstraction.

It is confident. It demands attention. It is not trying to blend in; it is trying to be used.

**Try it.** Hover over the button to feel the "tactile snap" as the shadow collapses.
                        `,
                        componentState: {
                            componentName: 'Button',
                            // SWITCH TO THEME MODE: No className
                            props: {
                                children: 'Submit Transaction',
                                variant: 'primary'
                            },
                            themeId: 'brutalist',
                        },
                        highlight: 'FULL_SOURCE',
                    },
                ],
            },
        ],
    },
]
