import type { PropDefinition } from '@/data/componentDocs'

interface PropsTableProps {
    props: PropDefinition[]
}

export default function PropsTable({ props }: PropsTableProps) {
    if (props.length === 0) {
        return (
            <div className="rounded-xl border p-6 text-center" style={{ borderColor: '#27272a', backgroundColor: 'rgba(24,24,27,0.5)' }}>
                <p style={{ color: '#71717a' }}>This component has no configurable props.</p>
            </div>
        )
    }

    return (
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#27272a', backgroundColor: 'rgba(24,24,27,0.5)' }}>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b" style={{ borderColor: '#27272a', backgroundColor: '#18181b' }}>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#a1a1aa' }}>
                            Prop
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#a1a1aa' }}>
                            Type
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#a1a1aa' }}>
                            Default
                        </th>
                        <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#a1a1aa' }}>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y" style={{ '--tw-divide-color': '#27272a' } as React.CSSProperties}>
                    {props.map((prop) => (
                        <tr key={prop.name} className="transition-colors" style={{ backgroundColor: 'transparent' }}>
                            <td className="px-4 py-3">
                                <code className="text-sm font-mono" style={{ color: '#ffffff' }}>
                                    {prop.name}
                                    {prop.required && <span style={{ color: '#fb7185' }}>*</span>}
                                </code>
                            </td>
                            <td className="px-4 py-3">
                                <code className="text-sm font-mono" style={{ color: 'rgba(251,191,36,0.8)' }}>{prop.type}</code>
                            </td>
                            <td className="px-4 py-3">
                                {prop.default ? (
                                    <code className="text-sm font-mono" style={{ color: '#71717a' }}>{prop.default}</code>
                                ) : (
                                    <span style={{ color: '#52525b' }}>—</span>
                                )}
                            </td>
                            <td className="px-4 py-3 text-sm" style={{ color: '#a1a1aa' }}>{prop.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
