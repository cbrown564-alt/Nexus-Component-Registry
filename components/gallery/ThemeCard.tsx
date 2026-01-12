import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { LegacyTheme as Theme } from '@/lib/registry'

interface ThemeCardProps {
    theme: Theme
    index?: number
    size?: 'sm' | 'md' | 'lg'
}

export default function ThemeCard({ theme, index = 0, size = 'md' }: ThemeCardProps) {
    const sizeClasses = {
        sm: {
            container: 'rounded-lg',
            preview: 'aspect-[4/3]',
            icon: 'h-8 w-8 rounded-lg',
            padding: 'p-3',
            title: 'text-sm',
            description: 'text-xs',
            dot: 'h-2 w-2',
        },
        md: {
            container: 'rounded-xl',
            preview: 'aspect-video',
            icon: 'h-12 w-12 rounded-xl',
            padding: 'p-5',
            title: 'text-lg',
            description: 'text-sm',
            dot: 'h-3 w-3',
        },
        lg: {
            container: 'rounded-2xl',
            preview: 'aspect-[16/10]',
            icon: 'h-16 w-16 rounded-2xl',
            padding: 'p-6',
            title: 'text-xl',
            description: 'text-base',
            dot: 'h-4 w-4',
        },
    }

    const styles = sizeClasses[size]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
        >
            <Link
                to={`/templates/${theme.id}`}
                className={`group block border overflow-hidden hover:scale-[1.01] transition-all ${styles.container}`}
                style={{ borderColor: '#27272a', backgroundColor: 'rgba(24,24,27,0.5)' }}
            >
                {/* Preview Area */}
                <div className={`${styles.preview} ${theme.backgroundColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`${styles.icon} ${theme.colorClass} shadow-lg`} />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div className={styles.padding}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`${styles.dot} rounded-full ${theme.colorClass}`} />
                        <h3 className={`font-semibold ${styles.title}`} style={{ color: '#ffffff' }}>{theme.name}</h3>
                        {size !== 'sm' && (
                            <span
                                className="ml-auto px-2 py-0.5 text-xs rounded-full"
                                style={theme.category === 'dark'
                                    ? { backgroundColor: '#27272a', color: '#d4d4d8' }
                                    : theme.category === 'light'
                                        ? { backgroundColor: '#3f3f46', color: '#e4e4e7' }
                                        : { backgroundColor: 'rgba(112,26,117,0.5)', color: '#f0abfc' }
                                }
                            >
                                {theme.category}
                            </span>
                        )}
                    </div>
                    {size !== 'sm' && (
                        <>
                            <p className={`mb-3 ${styles.description}`} style={{ color: '#a1a1aa' }}>{theme.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {theme.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 text-xs rounded"
                                        style={{ backgroundColor: 'rgba(39,39,42,0.5)', color: '#71717a' }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </Link>
        </motion.div>
    )
}
