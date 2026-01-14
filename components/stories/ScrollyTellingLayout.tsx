import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Story, StoryStep } from '@/data/stories'
import StoryStage from './StoryStage'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import MarkdownRenderer from '@/components/ui/MarkdownRenderer'

interface ScrollyTellingLayoutProps {
    story: Story
}

export default function ScrollyTellingLayout({ story }: ScrollyTellingLayoutProps) {
    const [activeStepId, setActiveStepId] = useState<string>(story.chapters[0].steps[0].id)

    // Flatten steps for easier navigation logic
    const allSteps = story.chapters.flatMap((chapter) => chapter.steps)
    const activeStep = allSteps.find((s) => s.id === activeStepId) || allSteps[0]

    return (
        <div className="relative min-h-screen bg-black">
            {/* Navigation / Header */}
            <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none">
                <Link
                    to="/stories"
                    className="pointer-events-auto flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-800"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Stories
                </Link>
            </div>

            {/* 
                Mobile Layout: Stage is FIXED at top (z-0), Narrative scrolls OVER it (z-10).
                Desktop Layout: Side-by-side split screen. Stage is sticky.
            */}
            <div className="flex flex-col lg:flex-row">

                {/* Right Column: Stage 
                    Mobile: Fixed at top, 45vh height.
                    Desktop: Sticky at right, 100vh height.
                    Order: Mobile -> Visual Top (but we use Fixed so DOM order matters less for layout, but typical to keep it parallel).
                */}
                <div className="
                    fixed top-0 left-0 w-full h-[45vh] z-30 border-b border-zinc-900 bg-black/90 backdrop-blur-md overflow-hidden
                    lg:relative lg:block lg:w-1/2 lg:h-screen lg:sticky lg:top-0 lg:border-l lg:border-b-0 lg:z-0
                ">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <StoryStage
                            componentName={activeStep.componentState.componentName}
                            props={activeStep.componentState.props}
                            themeId={activeStep.componentState.themeId}
                            highlight={activeStep.highlight}
                        />
                    </div>

                    {/* Stage Info Overlay */}
                    <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-20 flex gap-2 lg:gap-4">
                        <div className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] lg:text-xs font-mono text-zinc-400">
                            Theme: <span className="text-white">{activeStep.componentState.themeId}</span>
                        </div>
                        <div className="px-2 py-1 lg:px-3 lg:py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] lg:text-xs font-mono text-zinc-400">
                            Stage: <span className="text-white">{activeStep.componentState.componentName}</span>
                        </div>
                    </div>
                </div>

                {/* Left Column: Narrative (Scrollable) 
                    Mobile: Pushed down by 45vh. Scrolls OVER the fixed stage.
                    Desktop: Standard scroll flow.
                */}
                <div className="w-full lg:w-1/2 relative z-10 px-4 lg:px-24 mt-[45vh] lg:mt-0 bg-transparent lg:bg-transparent pointer-events-none lg:pointer-events-auto">

                    {/* Mobile: Gradient fade to cover stage when scrolling up? No, we want to see it. */}
                    {/* We use pointer-events-none on container so clicks pass through to stage? 
                       But text needs pointer-events-auto.
                   */}

                    <div className="pointer-events-auto pt-12 lg:pt-24 pb-24">
                        <div className="mb-24 px-2">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">{story.title}</h1>
                            <p className="text-lg lg:text-xl text-zinc-300 lg:text-zinc-400 leading-relaxed drop-shadow-sm">{story.description}</p>
                        </div>

                        <div className="space-y-[60vh] lg:space-y-[40vh]"> {/* Spacing for scroll */}
                            {story.chapters.map((chapter) => (
                                <div key={chapter.id}>
                                    {chapter.title && (
                                        <div className="mb-8 lg:mb-12 sticky top-[45vh] lg:top-24 bg-black/90 lg:bg-black/90 backdrop-blur z-20 py-4 border-b border-zinc-800">
                                            <h2 className="text-xs lg:text-sm font-mono text-zinc-500 uppercase tracking-widest pl-2">
                                                {chapter.title}
                                            </h2>
                                        </div>
                                    )}

                                    {chapter.steps.map((step) => (
                                        <Step
                                            key={step.id}
                                            step={step}
                                            onActive={() => setActiveStepId(step.id)}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="h-[50vh]" /> {/* Footer buffer */}
                    </div>
                </div>

            </div>

            {/* Mobile Fallback implementation could go here or just stack it */}
        </div>
    )
}

function Step({ step, onActive }: { step: StoryStep, onActive: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, margin: "-10%" }} // Adjusted viewport for mobile
            onViewportEnter={() => onActive()}
            className="min-h-[50vh] flex flex-col justify-center py-12 lg:py-24"
        >
            {/* Mobile: Card Style. Desktop: Plain. */}
            <div className="
                pointer-events-auto
                bg-black/80 lg:bg-transparent 
                backdrop-blur-md lg:backdrop-blur-none
                border border-zinc-800 lg:border-0
                rounded-xl lg:rounded-none
                p-6 lg:p-0
                shadow-2xl lg:shadow-none
            ">
                <MarkdownRenderer content={step.content} className="drop-shadow-sm" />
            </div>
        </motion.div>
    )
}
