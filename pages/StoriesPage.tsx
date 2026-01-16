import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'
import { stories } from '@/data/stories'
import useMediaQuery from '@/hooks/useMediaQuery'
import MobileLayout from '@/layouts/MobileLayout'

export default function StoriesPage() {
    const isMobile = useMediaQuery('(max-width: 768px)')

    // Wrapper component to handle layout conditionally
    const Content = () => (
        <div className="relative z-10 mx-auto max-w-7xl px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                        <BookOpen className="h-6 w-6" />
                    </div>
                    <h1 className="text-3xl font-bold text-white">Design Stories</h1>
                </div>
                <p className="text-lg text-zinc-400 max-w-2xl">
                    Deep dives into the philosophy, mechanics, and intentions behind our interaction patterns.
                    Explore how code and design converge to create feeling.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story, i) => (
                    <motion.div
                        key={story.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link
                            to={`/stories/${story.id}`}
                            className="group block h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors overflow-hidden"
                        >
                            <div className={`h-48 w-full ${story.thumbnail}`} />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                                    {story.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-orange-400 font-medium">
                                    Start Reading
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )

    if (isMobile) {
        return (
            <MobileLayout>
                <Content />
            </MobileLayout>
        )
    }

    return <Content />
}
