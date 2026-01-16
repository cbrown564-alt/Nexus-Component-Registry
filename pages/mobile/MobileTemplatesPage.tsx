import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import MobileLayout from '@/layouts/MobileLayout';
import { templates } from '@/lib/registry';
import { ArrowUpRight, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import TemplatePreview from '@/components/ui/TemplatePreview';

export default function MobileTemplatesPage() {
    const { theme } = useTheme();

    return (
        <MobileLayout>
            <div className="px-6 pt-12 pb-6">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${theme.colors.primary}1a` }}>
                        <Layout className="h-5 w-5" style={{ color: theme.colors.primary }} />
                    </div>
                    <span className="text-sm font-bold tracking-wider uppercase text-zinc-500">Exhibit</span>
                </div>
                <h1 className="text-3xl font-bold">Templates</h1>
            </div>

            <div className="px-6 space-y-8">
                {/* Section 1: Mobile First (Hero) */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">Mobile First</h2>
                    {templates.filter(t => t.mobileTier === 'first').map((template, i) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link
                                to={`/templates/${template.id}`}
                                className="block group relative overflow-hidden rounded-3xl aspect-[4/5] w-full shadow-xl"
                            >
                                <TemplatePreview
                                    theme={{ ...template, collection: 'consumer' }} // fallback collection
                                    className="h-full w-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{template.name}</h3>
                                    <p className="text-sm text-zinc-300 line-clamp-2">{template.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Section 2: Mobile Passable (Archive) */}
                <div className="space-y-4 pt-4 border-t border-dashed border-zinc-200">
                    <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Archive</h2>
                    {templates.filter(t => t.mobileTier === 'passable').map((template, i) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.05) }}
                        >
                            <Link
                                to={`/templates/${template.id}`}
                                className="flex items-center gap-4 p-4 rounded-xl border transition-colors"
                                style={{
                                    borderColor: theme.colors.border,
                                    backgroundColor: 'rgba(24, 24, 27, 0.6)' // zinc-950/60
                                }}
                            >
                                <div className={`h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center ${template.colorClass} bg-opacity-10`}>
                                    <div className={`h-3 w-3 rounded-full ${template.colorClass}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold text-zinc-200 truncate">{template.name}</h3>
                                        <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                                    </div>
                                    <p className="text-xs text-zinc-500 truncate">{template.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </MobileLayout>
    );
}
