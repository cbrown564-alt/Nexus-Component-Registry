import React from 'react';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import EInkCard from './EInkCard';

const ReaderContent = () => {
    return (
        <EInkCard className="h-full flex flex-col p-8 md:p-12 relative shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">

            {/* Header */}
            <div className="flex justify-between items-start mb-8 border-b-2 pb-4" style={{ borderColor: '#000000' }}>
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-1" style={{ color: '#000000' }}>
                        The Architecture of Silence
                    </h2>
                    <p className="font-sans text-xs uppercase tracking-[0.2em]" style={{ color: '#78716c' }}>
                        Chapter 4 • K. Yamamoto
                    </p>
                </div>
                <button className="p-2 border-2 border-transparent rounded-full transition-all">
                    <Bookmark className="h-6 w-6 fill-current" style={{ color: '#000000' }} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto pr-4 font-serif text-lg md:text-xl leading-loose text-justify" style={{ color: '#000000' }}>
                <p className="mb-6">
                    <span className="text-8xl float-left mr-0 -mt-0.5 font-bold leading-[0.8]">T</span>rue silence is not merely the absence of sound, but the presence of a specific kind of attention. In the digital age, we have replaced this attention with a constant, low-level hum of information. It coats our thoughts like a fine dust, obscuring the sharp edges of our own consciousness.
                </p>
                <p className="mb-6">
                    To reclaim silence is an act of rebellion. It requires a deliberate unplugging, a conscious decision to step away from the stream. The screen fades to black (or in this case, a dormant gray), and suddenly, the world rushes back in. The ticking of a clock, the wind against the windowpane, the rhythm of one's own breath.
                </p>
                <p className="mb-6">
                    We build our interfaces to be frictionless, but perhaps friction is what we need. The texture of paper, the resistance of a pen, the physical weight of a book—these provide anchors in a reality that feels increasingly ephemeral.
                </p>
                <p>
                    When we design for the quiet mind, we must strip away the superfluous. No bright colors to trigger dopamine, no animations to distract the eye. Only the essential remains: the word, the idea, and the space between them.
                </p>
            </div>

            {/* Footer / Progress */}
            <div className="mt-8 pt-4">
                <div className="flex justify-between text-xs font-sans font-bold tracking-widest mb-2">
                    <span>PAGE 42 / 189</span>
                    <span>24%</span>
                </div>

                {/* Pencil Stroke Progress Bar */}
                <div className="h-3 w-full relative">
                    {/* Background Line */}
                    <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M0,5 Q100,8 200,4 T400,6" fill="none" stroke="#e5e5e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>

                    {/* Progress Stroke */}
                    <svg className="absolute top-0 left-0 h-full w-[24%] overflow-visible" preserveAspectRatio="none">
                        <path
                            d="M0,5 Q50,3 100,5"
                            fill="none"
                            stroke="black"
                            strokeWidth="3"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                            className="drop-shadow-sm"
                        />
                    </svg>
                </div>

                <div className="flex justify-between mt-6">
                    <button className="flex items-center gap-2 font-sans text-sm font-bold uppercase hover:underline underline-offset-4">
                        <ChevronLeft className="h-4 w-4" /> Previous
                    </button>
                    <button className="flex items-center gap-2 font-sans text-sm font-bold uppercase hover:underline underline-offset-4">
                        Next <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </EInkCard>
    );
};

export default ReaderContent;