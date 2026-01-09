import type { PropDefinition } from '@/data/componentDocs'

interface PropsTableProps {
    props: PropDefinition[]
}

export default function PropsTable({ props }: PropsTableProps) {
    if (props.length === 0) {
        return (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
                <p className="text-zinc-500">This component has no configurable props.</p>
            </div>
        )
    }

    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-zinc-800 bg-zinc-900">
                        <th className="px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            Prop
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            Type
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            Default
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                    {props.map((prop) => (
                        <tr key={prop.name} className="hover:bg-zinc-800/30 transition-colors">
                            <td className="px-4 py-3">
                                <code className="text-sm font-mono text-white">
                                    {prop.name}
                                    {prop.required && <span className="text-rose-400">*</span>}
                                </code>
                            </td>
                            <td className="px-4 py-3">
                                <code className="text-sm font-mono text-amber-400/80">{prop.type}</code>
                            </td>
                            <td className="px-4 py-3">
                                {prop.default ? (
                                    <code className="text-sm font-mono text-zinc-500">{prop.default}</code>
                                ) : (
                                    <span className="text-zinc-600">—</span>
                                )}
                            </td>
                            <td className="px-4 py-3 text-sm text-zinc-400">{prop.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
