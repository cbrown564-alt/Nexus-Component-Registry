import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Check, Box, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { getComponentById, type ComponentCategory } from '@/data/components'
import { getComponentDoc } from '@/data/componentDocs'
import PropsTable from '@/components/docs/PropsTable'
import CodeExport from '@/components/export/CodeExport'

export default function ComponentPage() {
    const { theme, name } = useParams<{ theme: string; name: string }>()
    const [copied, setCopied] = useState(false)

    const component = name ? getComponentById(name) : undefined
    const doc = name ? getComponentDoc(name) : undefined

    if (!component) {
        return <Navigate to="/components" replace />
    }

    const Component = component.component

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const getCategoryColor = (category: ComponentCategory) => {
        const colors: Record<ComponentCategory, string> = {
            layout: 'bg-blue-500/20 text-blue-400',
            'data-display': 'bg-emerald-500/20 text-emerald-400',
            forms: 'bg-purple-500/20 text-purple-400',
            navigation: 'bg-cyan-500/20 text-cyan-400',
            feedback: 'bg-amber-500/20 text-amber-400',
            interactive: 'bg-rose-500/20 text-rose-400',
            visualization: 'bg-indigo-500/20 text-indigo-400',
        }
        return colors[category]
    }

    const getThemeColor = (theme: string) => {
        const colors: Record<string, string> = {
            shared: 'bg-zinc-600',
            fintech: 'bg-emerald-500',
            cockpit: 'bg-blue-600',
            game: 'bg-fuchsia-500',
            legacy: 'bg-teal-600',
        }
        return colors[theme] || 'bg-zinc-600'
    }

    const importCode = `import { ${component.name} } from '@nexus/components/${component.theme}'

export function Example() {
  return (
    <${component.name} />
  )
}`

    return (
        <div className="relative z-10 mx-auto max-w-5xl px-8 py-12">
            {/* Breadcrumb */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <Link
                    to="/components"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Components
                </Link>
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
            >
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center h-12 w-12 rounded-xl ${getCategoryColor(component.category)}`}>
                            <Box className="h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">{component.name}</h1>
                            <div className="flex items-center gap-3 mt-1">
                                <span className={`px-2 py-0.5 text-xs rounded ${getCategoryColor(component.category)}`}>
                                    {component.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                                    <span className={`h-2 w-2 rounded-full ${getThemeColor(component.theme)}`} />
                                    {component.theme}
                                </span>
                            </div>
                        </div>
                    </div>
                    <CodeExport
                        componentName={component.name}
                        code={importCode}
                        theme={component.theme}
                    />
                </div>
                <p className="text-lg text-zinc-400">{component.description}</p>
            </motion.div>

            {/* Live Preview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                    Live Preview
                </h2>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 min-h-[200px] flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <Component />
                    </div>
                </div>
            </motion.div>

            {/* Props Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-8"
            >
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                    Props
                </h2>
                <PropsTable props={doc?.props || []} />
            </motion.div>

            {/* Usage */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
            >
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                    Usage
                </h2>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900">
                        <span className="text-xs text-zinc-500 font-mono">tsx</span>
                        <button
                            onClick={() => handleCopy(importCode)}
                            className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white transition-colors"
                        >
                            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                        {importCode}
                    </pre>
                </div>
            </motion.div>

            {/* Examples */}
            {doc?.examples && doc.examples.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mb-8"
                >
                    <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                        Examples
                    </h2>
                    <div className="space-y-4">
                        {doc.examples.map((example, i) => (
                            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900">
                                    <span className="text-xs text-zinc-400 font-medium">{example.title}</span>
                                    <button
                                        onClick={() => handleCopy(example.code)}
                                        className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <Copy className="h-3 w-3" />
                                        Copy
                                    </button>
                                </div>
                                <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                                    {example.code}
                                </pre>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Notes */}
            {doc?.notes && doc.notes.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                        Notes
                    </h2>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                        <ul className="space-y-2">
                            {doc.notes.map((note, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                                    <AlertCircle className="h-4 w-4 text-zinc-500 mt-0.5 shrink-0" />
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}

            {/* Tags */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mb-8"
            >
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                    Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                    {component.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 text-sm bg-zinc-900 text-zinc-400 rounded-lg border border-zinc-800"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Source Code */}
            {component.source && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                        Source Code
                    </h2>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900">
                            <span className="text-xs text-zinc-500 font-mono">
                                {component.name}.tsx
                            </span>
                            <button
                                onClick={() => handleCopy(component.source!)}
                                className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white transition-colors"
                            >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied ? 'Copied!' : 'Copy Source'}
                            </button>
                        </div>
                        <div className="max-h-[500px] overflow-y-auto">
                            <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                                {component.source}
                            </pre>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
