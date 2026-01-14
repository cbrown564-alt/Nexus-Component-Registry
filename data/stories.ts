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
    {
        id: 'physics-of-spring',
        title: 'The Physics of Spring',
        description: 'Demystifying animation curves and the life within motion.',
        thumbnail: 'bg-blue-500 pattern-grid-lg',
        chapters: [
            {
                id: 'chapter-1',
                title: 'The Basics',
                steps: [
                    {
                        id: 'step-1',
                        content: `
## The Robot (Linear)

In the beginning, there was **Linear** movement.
This is the movement of machines. Of conveyor belts. It moves at a constant speed from point A to point B.

It feels unnatural because nothing in the real world moves like this. It starts instantly at full speed and stops instantly.
                        `,
                        componentState: {
                            componentName: 'Box',
                            props: {
                                key: 'linear', // Force reset
                                animate: { x: 100 },
                                style: { backgroundColor: '#52525b' }, // zinc-600
                                transition: {
                                    duration: 1.5,
                                    ease: 'linear',
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'transition'
                    },
                    {
                        id: 'step-2',
                        content: `
## The Cinema (Ease-Out)

Then came **Easing**. 
This is the movement of cameras. A panning shot starts slow, speeds up, and slows down.

It's better. It respects that objects have mass and need time to accelerate. But it still feels calculated. It is "polite" motion.
                        `,
                        componentState: {
                            componentName: 'Box',
                            props: {
                                key: 'ease', // Force reset
                                animate: { x: 100 },
                                style: { backgroundColor: '#3b82f6' }, // blue-500
                                transition: {
                                    duration: 1.5,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                    repeatType: 'reverse'
                                }
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'transition'
                    },
                ]
            },
            {
                id: 'chapter-2',
                title: 'Enter Physics',
                steps: [
                    {
                        id: 'step-3',
                        content: `
## The Life (Spring)

Real objects are governed by **Physics**.
When you drag a real object, it doesn't just "ease". It carries momentum. It overshoots. It settles.

A spring simulation gives us this feeling for free. We stop thinking about "duration" and start thinking about **energy**.
                        `,
                        componentState: {
                            componentName: 'Box',
                            props: {
                                key: 'spring-1', // Force reset
                                animate: { x: 100 },
                                style: { backgroundColor: '#10b981' }, // emerald-500
                                transition: {
                                    type: 'spring',
                                    stiffness: 120, // Slightly firmer
                                    damping: 10,
                                    mass: 1,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    repeatDelay: 1
                                }
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'transition'
                    },
                    {
                        id: 'step-4',
                        content: `
## Tuning the Feel

Springs are defined by **Stiffness** (tension) and **Damping** (friction).

*   **High Stiffness**: snappy, energetic.
*   **Low Damping**: wobbles forever.

By tweaking these numbers, we don't just change the speed; we change the *personality* of the interface.
                        `,
                        componentState: {
                            componentName: 'Box',
                            props: {
                                key: 'spring-2', // Force reset
                                animate: { x: 100 },
                                style: { backgroundColor: '#f97316' }, // orange-500
                                transition: {
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 5, // Bouncy!
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    repeatDelay: 1
                                }
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'transition'
                    }
                ]
            }
        ]
    },
    {
        id: 'the-invisible-render',
        title: 'The Invisible Render',
        description: 'Why your app feels slow, and how to see what the browser sees.',
        thumbnail: 'bg-red-500 pattern-dots-md',
        chapters: [
            {
                id: 'chapter-1',
                title: 'The Problem',
                steps: [
                    {
                        id: 'step-1',
                        content: `
## The Naive Render

React is fast, but it's not magic.
When a parent component updates, **all** of its children re-render by default.

Here, we have a list of items and a search input.
When you type in the input, the state updates. React says "Something changed! Redraw everything!"
                        `,
                        componentState: {
                            componentName: 'PerformanceList',
                            props: {
                                activeInput: 'Searching...',
                                flashMode: 'all',
                                itemCount: 20
                            },
                            themeId: 'terminal',
                        },
                        highlight: 'flashMode'
                    },
                    {
                        id: 'step-2',
                        content: `
## The Wasted Effort

Notice how every item in the list flashes red?
That's a re-render.

Even though the *items* didn't change (the data is the same), React still did the work to check them.
On a small list, this is fine. On a big dashboard, this is **lag**.
                        `,
                        componentState: {
                            componentName: 'PerformanceList',
                            props: {
                                activeInput: 'Searching...',
                                flashMode: 'all',
                                itemCount: 20
                            },
                            themeId: 'terminal',
                        },
                        highlight: 'flashMode'
                    },
                ]
            },
            {
                id: 'chapter-2',
                title: 'The Solution',
                steps: [
                    {
                        id: 'step-3',
                        content: `
## Enter Memoization

We wrap the list items in \`React.memo()\`.
This tells React: "Only re-render this component if its **props** actually changed."

Now, when we type, only the Input re-renders. The list stays calm. The lag is gone.
                        `,
                        componentState: {
                            componentName: 'PerformanceList',
                            props: {
                                activeInput: 'Searching...',
                                flashMode: 'input-only',
                                itemCount: 20
                            },
                            themeId: 'terminal',
                        },
                        highlight: 'flashMode'
                    }
                ]
            }
        ]
    },
    {
        id: 'color-theory-contrast',
        title: 'Color Theory & Contrast',
        description: 'How we ensure accessibility through math, not just intuition.',
        thumbnail: 'bg-yellow-400 pattern-diagonal-lines',
        chapters: [
            {
                id: 'chapter-1',
                title: 'The Challenge',
                steps: [
                    {
                        id: 'step-1',
                        content: `
## The Invisible Text

Designers love "Low Contrast" aesthetics. It looks sleek. It looks modern.
But for millions of people, it looks like **nothing**.

Here is a common pattern: White text on a bright "Warning" yellow.
It feels right intuitively—yellow means warning, white means text—but it fails.
                        `,
                        componentState: {
                            componentName: 'ColorContrast',
                            props: {
                                bg: '#facc15', // Yellow 400
                                fg: '#ffffff', // White
                                showMath: false
                            },
                            themeId: 'shared',
                        },
                        highlight: 'bg'
                    },
                    {
                        id: 'step-2',
                        content: `
## The Math (WCAG)

We don't have to guess. We can measure.
The **Web Content Accessibility Guidelines (WCAG)** define a formula for "Contrast Ratio".

For small text, we need **4.5:1** (AA).
For large text, we need **3.0:1** (AA).

Our Yellow/White combo? It's **1.7:1**. It fails everything.
                        `,
                        componentState: {
                            componentName: 'ColorContrast',
                            props: {
                                bg: '#facc15',
                                fg: '#ffffff',
                                showMath: true
                            },
                            themeId: 'shared',
                        },
                        highlight: 'showMath'
                    },
                ]
            },
            {
                id: 'chapter-2',
                title: 'The Correction',
                steps: [
                    {
                        id: 'step-3',
                        content: `
## Shifting Lightness

To fix this, we have two choices: make the background darker, or the text darker.
Since we want to keep the "Yellow" identity, let's switch the text to black.

Suddenly, the ratio jumps to **12.3:1**. It passes AAA.
This is why all "Warning" badges in our system use black text, while "Error" (Red) uses white.
                        `,
                        componentState: {
                            componentName: 'ColorContrast',
                            props: {
                                bg: '#facc15', // Yellow 400
                                fg: '#000000', // Black
                                showMath: true
                            },
                            themeId: 'shared',
                        },
                        highlight: 'fg'
                    },
                    {
                        id: 'step-4',
                        content: `
## Softening the Blow

Absolute Black on pure Yellow can be jarring.
We can soften it by mixing in a bit of the hue.

Let's use a very dark yellow-brown (\`#422006\`).
The contrast is still **10.6:1** (Great), but it feels more cohesive. It feels like *part* of the yellow, not just ink on top.
                        `,
                        componentState: {
                            componentName: 'ColorContrast',
                            props: {
                                bg: '#facc15',
                                fg: '#422006', // Yellow 950
                                showMath: true
                            },
                            themeId: 'shared',
                        },
                        highlight: 'fg'
                    }
                ]
            }
        ]
    },
    {
        id: 'box-model-paradox',
        title: 'The Box Model Paradox',
        description: 'Why 50% + 50% sometimes equals more than 100%.',
        thumbnail: 'bg-indigo-500 pattern-grid-lg',
        chapters: [
            {
                id: 'chapter-1',
                title: 'The Frustration',
                steps: [
                    {
                        id: 'step-1',
                        content: `
## The Perfect Fit

Here we have a container (400px) and two children.
Each child is set to **width: 50%**.

Mathematically, 50% + 50% = 100%.
They fit perfectly side-by-side. Everything is good.
                        `,
                        componentState: {
                            componentName: 'BoxModelDemo',
                            props: {
                                boxSizing: 'content-box',
                                padding: 0
                            },
                            themeId: 'brutalist',
                        },
                        highlight: 'width'
                    },
                    {
                        id: 'step-2',
                        content: `
## The Break

Now, we add some breathing room: **padding: 20px**.

Effect: **Explosion**.
The second box drops to the next line. The layout is broken.

Why? Because in the default model (\`content-box\`), padding is *added* to the width.
Width (50% = 200px) + Padding (40px) = **240px**.
240px + 240px = 480px. That's bigger than our 400px container.
                        `,
                        componentState: {
                            componentName: 'BoxModelDemo',
                            props: {
                                boxSizing: 'content-box',
                                padding: 20,
                                showMath: true
                            },
                            themeId: 'brutalist',
                        },
                        highlight: 'padding'
                    },
                ]
            },
            {
                id: 'chapter-2',
                title: 'The Fix',
                steps: [
                    {
                        id: 'step-3',
                        content: `
## Defines Boundaries

We change the rules. We set **box-sizing: border-box**.

This tells the browser: "The width I set is the *final* width. If I add padding, shrink the content inside to make room."

Now:
Total Width = 200px.
Padding = 20px.
Content Width = 160px.

200px + 200px = 400px. It fits again. Order is restored.
                        `,
                        componentState: {
                            componentName: 'BoxModelDemo',
                            props: {
                                boxSizing: 'border-box',
                                padding: 20,
                                showMath: true
                            },
                            themeId: 'brutalist',
                        },
                        highlight: 'boxSizing'
                    }
                ]
            }
        ]
    },
    {
        id: 'anatomy-of-a-modal',
        title: 'Anatomy of a Modal',
        description: 'It looks simple. It is actually a trap.',
        thumbnail: 'bg-zinc-800 border-4 border-zinc-600 pattern-isometric',
        chapters: [
            {
                id: 'chapter-1',
                title: 'The Visuals',
                steps: [
                    {
                        id: 'step-1',
                        content: `
## Just A Div

To a visual user, this looks like a Modal.
It's a box. It's centered. It has a shadow.

But to the browser, it's just a \`div\` sitting on top of other content.
If you hit **Tab**, your focus will drift right past it into the background links.
                        `,
                        componentState: {
                            componentName: 'ModalAnatomy',
                            props: {
                                step: 'basic',
                                isOpen: true
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'dialog'
                    },
                    {
                        id: 'step-2',
                        content: `
## The Backdrop

First, we need to block the world.
We add a \`Backdrop\` (or overlay).

Visually, it dims the background.
Functionally, it needs to block clicks to the outside world, usually dismissing the modal when clicked.
                        `,
                        componentState: {
                            componentName: 'ModalAnatomy',
                            props: {
                                step: 'backdrop',
                                isOpen: true
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'backdrop'
                    },
                ]
            },
            {
                id: 'chapter-2',
                title: 'Accessibility',
                steps: [
                    {
                        id: 'step-3',
                        content: `
## The Focus Trap

This is the most critical part.
When a modal is open, focus **must not** escape it.

We implement a "Focus Trap".
If you are on the last button and hit Tab, you go back to the first button.
If you are on the first button and hit Shift+Tab, you go to the last button.
                        `,
                        componentState: {
                            componentName: 'ModalAnatomy',
                            props: {
                                step: 'trap',
                                isOpen: true
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'trap'
                    },
                    {
                        id: 'step-4',
                        content: `
## Speaking the Language

Finally, screen readers need to know this isn't just a div.
We add \`role="dialog"\` and \`aria-modal="true"\`.
We point \`aria-labelledby\` to the title.

Now, when it opens, the VoiceOver will announce:
*"Dialog. Edit Profile. Modal window."*
                        `,
                        componentState: {
                            componentName: 'ModalAnatomy',
                            props: {
                                step: 'aria',
                                isOpen: true
                            },
                            themeId: 'concierge',
                        },
                        highlight: 'aria'
                    }
                ]
            }
        ]
    }
]
