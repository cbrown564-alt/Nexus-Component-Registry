import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import MobileLayout from '@/layouts/MobileLayout';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { templates } from '@/lib/registry';
import TemplatePreview from '@/components/ui/TemplatePreview';

export default function MobileHomePage() {
    const { theme } = useTheme();

    return (
        <MobileLayout>
            {/* Hero Header */}
            <div className="px-6 pt-12 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-start mb-6"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
                            style={{ backgroundColor: `${theme.colors.primary}1a`, color: theme.colors.primary }}>
                            <Sparkles className="h-3 w-3" />
                            <span>Nexus Mobile</span>
                        </div>
                        <h1 className="text-4xl font-display font-bold leading-tight mb-2">
                            Design <br />
                            <span style={{ color: theme.colors.mutedForeground }}>Engineered.</span>
                        </h1>
                    </div>
                </motion.div>
            </div>

            {/* Template Feed */}
            <div className="space-y-8 px-6">
                {templates.slice(0, 5).map((template, i) => (
                    <motion.div
                        key={template.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
                    >
                        <Link to={`/templates/${template.id}`} className="block h-full w-full">
                            <div className="absolute inset-0 bg-zinc-900">
                                <TemplatePreview
                                    theme={{ ...template, collection: 'consumer' }}
                                    className="h-full w-full opacity-60"
                                />
                            </div>

                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(to bottom, transparent, ${theme.colors.background})`
                                }}
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-2xl font-bold mb-1 text-white">{template.name}</h3>
                                <p className="text-sm text-zinc-300 line-clamp-2 mb-4">{template.description}</p>
                                <div className="inline-flex items-center gap-2 text-sm font-bold bg-white text-black px-4 py-2 rounded-full">
                                    Explore Template <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="h-12" /> {/* Bottom Spacer */}
        </MobileLayout>
    );
}
