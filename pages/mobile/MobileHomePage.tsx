import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import MobileLayout from '@/layouts/MobileLayout';
import { ArrowRight, ArrowUpRight, Sparkles, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { templates } from '@/lib/registry';
import TemplatePreview from '@/components/ui/TemplatePreview';

export default function MobileHomePage() {
    const { theme } = useTheme();

    // Featured Hero Template (Rave)
    const featuredTemplate = templates.find(t => t.id === 'rave') || templates.find(t => t.id === 'signal') || templates[0];

    // Mobile First Collection (excluding featured)
    const mobileFirstTemplates = templates
        .filter(t => t.mobileTier === 'first' && t.id !== featuredTemplate.id);

    // Archive Collection
    const archiveTemplates = templates
        .filter(t => t.mobileTier === 'passable');

    return (
        <MobileLayout>
            {/* Header */}
            <div className="px-6 pt-12 pb-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-start mb-2"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                            style={{ backgroundColor: `${theme.colors.primary}1a`, color: theme.colors.primary }}>
                            <Sparkles className="h-3 w-3" />
                            <span>Nexus Mobile</span>
                        </div>
                        <h1 className="text-4xl font-display font-bold leading-tight">
                            Design <br />
                            <span style={{ color: theme.colors.mutedForeground }}>Engineered.</span>
                        </h1>
                    </div>
                </motion.div>
            </div>

            <div className="px-6 space-y-12">
                {/* Spotlight Section */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Spotlight</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl"
                    >
                        <Link to={`/templates/${featuredTemplate.id}`} className="block h-full w-full">
                            <div className="absolute inset-0 bg-zinc-900">
                                <TemplatePreview
                                    theme={{ ...featuredTemplate, collection: 'consumer' }}
                                    className="h-full w-full opacity-80 transition-opacity group-hover:opacity-100"
                                />
                            </div>

                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="mb-4">
                                    <span className="inline-block px-2 py-1 rounded bg-white/20 backdrop-blur-md text-[10px] font-bold text-white mb-2">
                                        NEW ARRIVAL
                                    </span>
                                    <h3 className="text-3xl font-bold mb-2 text-white">{featuredTemplate.name}</h3>
                                    <p className="text-sm text-zinc-300 line-clamp-2">{featuredTemplate.description}</p>
                                </div>
                                <div className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-6 py-3 rounded-full w-full justify-center">
                                    Explore Template <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </section>

                {/* Mobile First Collection */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Layout className="h-4 w-4 text-emerald-500" />
                        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Mobile First</h2>
                    </div>

                    <div className="space-y-6">
                        {mobileFirstTemplates.map((template, i) => (
                            <motion.div
                                key={template.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                                <Link
                                    to={`/templates/${template.id}`}
                                    className="block group relative overflow-hidden rounded-2xl aspect-[16/10] w-full shadow-lg"
                                >
                                    <TemplatePreview
                                        theme={{ ...template, collection: 'consumer' }}
                                        className="h-full w-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-xl font-bold text-white">{template.name}</h3>
                                        <p className="text-xs text-zinc-300 line-clamp-1">{template.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Archive Collection */}
                <section className="space-y-4 pt-4 border-t border-dashed border-zinc-200">
                    <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">The Archive</h2>
                    <div className="grid gap-3">
                        {archiveTemplates.map((template, i) => (
                            <motion.div
                                key={template.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.05) }}
                            >
                                <Link
                                    to={`/templates/${template.id}`}
                                    className="flex items-center gap-4 p-4 rounded-xl border transition-colors hover:bg-zinc-50"
                                    style={{
                                        borderColor: theme.colors.border,
                                        backgroundColor: theme.colors.card // Use theme card color
                                    }}
                                >
                                    <div className={`h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center ${template.colorClass} bg-opacity-10`}>
                                        <div className={`h-3 w-3 rounded-full ${template.colorClass}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <h3 className="font-semibold truncate text-sm" style={{ color: theme.colors.foreground }}>
                                                {template.name}
                                            </h3>
                                            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
                                        </div>
                                        <p className="text-xs text-zinc-500 truncate">{template.description}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="h-32" /> {/* Bottom Spacer for Floating Nav */}
            </div>
        </MobileLayout>
    );
}
