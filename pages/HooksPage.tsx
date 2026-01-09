import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Zap, Copy, Check } from 'lucide-react'
import { hooks, categories, type HookMeta } from '@/data/hooks'

export default function HooksPage() {
    const [selectedHook, setSelectedHook] = useState<HookMeta | null>(null)
    const [copied, setCopied] = useState(false)

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const getCategoryColor = (category: HookMeta['category']) => {
        const colors: Record<HookMeta['category'], string> = {
            interaction: 'bg-rose-500/20 text-rose-400',
            state: 'bg-blue-500/20 text-blue-400',
            utility: 'bg-amber-500/20 text-amber-400',
            animation: 'bg-purple-500/20 text-purple-400',
            context: 'bg-emerald-500/20 text-emerald-400',
        }
        return colors[category]
    }

    return (
        <div className="relative z-10 mx-auto max-w-6xl px-8 py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Hooks</h1>
                <p className="text-lg text-zinc-400 max-w-2xl">
                    {hooks.length} reusable React hooks for interactions, animations, and utilities.
                    Drop them into your project for instant functionality.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                {/* Hook List */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                >
                    {hooks.map((hook, i) => (
                        <button
                            key={hook.id}
                            onClick={() => setSelectedHook(hook)}
                            className={`w-full text-left p-4 rounded-xl border transition-all ${selectedHook?.id === hook.id
                                    ? 'bg-zinc-800 border-zinc-700'
                                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-1">
                                <div className={`flex items-center justify-center h-8 w-8 rounded-lg ${getCategoryColor(hook.category)}`}>
                                    <Zap className="h-4 w-4" />
                                </div>
                                <code className="font-mono font-medium text-white">{hook.name}</code>
                            </div>
                            <p className="text-sm text-zinc-500 pl-11 line-clamp-1">{hook.description}</p>
                        </button>
                    ))}
                </motion.div>

                {/* Hook Detail */}
                <div className="min-h-[600px]">
                    {selectedHook ? (
                        <motion.div
                            key={selectedHook.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            {/* Header */}
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <code className="text-2xl font-mono font-bold text-white">{selectedHook.name}</code>
                                    <span className={`px-2 py-0.5 text-xs rounded ${getCategoryColor(selectedHook.category)}`}>
                                        {selectedHook.category}
                                    </span>
                                </div>
                                <p className="text-zinc-400">{selectedHook.description}</p>
                            </div>

                            {/* Parameters */}
                            {selectedHook.parameters.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Parameters</h3>
                                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="border-b border-zinc-800 bg-zinc-900">
                                                    <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Name</th>
                                                    <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Type</th>
                                                    <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Description</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-zinc-800">
                                                {selectedHook.parameters.map((param) => (
                                                    <tr key={param.name}>
                                                        <td className="px-4 py-2">
                                                            <code className="text-sm font-mono text-white">
                                                                {param.name}
                                                                {param.optional && <span className="text-zinc-500">?</span>}
                                                            </code>
                                                        </td>
                                                        <td className="px-4 py-2">
                                                            <code className="text-sm font-mono text-amber-400/80">{param.type}</code>
                                                        </td>
                                                        <td className="px-4 py-2 text-sm text-zinc-400">{param.description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Returns */}
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Returns</h3>
                                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-zinc-800 bg-zinc-900">
                                                <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Name</th>
                                                <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Type</th>
                                                <th className="px-4 py-2 text-xs font-semibold text-zinc-500">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-zinc-800">
                                            {selectedHook.returns.map((ret) => (
                                                <tr key={ret.name}>
                                                    <td className="px-4 py-2">
                                                        <code className="text-sm font-mono text-white">{ret.name}</code>
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <code className="text-sm font-mono text-emerald-400/80">{ret.type}</code>
                                                    </td>
                                                    <td className="px-4 py-2 text-sm text-zinc-400">{ret.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Example */}
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Example</h3>
                                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                                    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900">
                                        <span className="text-xs text-zinc-500 font-mono">tsx</span>
                                        <button
                                            onClick={() => handleCopy(selectedHook.example)}
                                            className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-400 hover:text-white transition-colors"
                                        >
                                            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                    <pre className="p-4 text-sm font-mono text-zinc-300 overflow-x-auto">
                                        {selectedHook.example}
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                                <Zap className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
                                <p className="text-zinc-500">Select a hook to view documentation</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
