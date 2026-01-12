import { useState } from 'react'
import { Download, Check, FileCode, FileJson } from 'lucide-react'

interface CodeExportProps {
    componentName: string
    code: string
    theme?: string
}

type ExportFormat = 'tsx' | 'jsx' | 'json'

/**
 * Export component code in various formats
 */
export default function CodeExport({ componentName, code, theme = 'shared' }: CodeExportProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [exported, setExported] = useState<ExportFormat | null>(null)

    const handleExport = (format: ExportFormat) => {
        let filename = ''
        let content = ''
        let mimeType = ''

        switch (format) {
            case 'tsx':
                filename = `${componentName}.tsx`
                content = code
                mimeType = 'text/typescript'
                break
            case 'jsx':
                // Simple TSX to JSX conversion (remove type annotations)
                filename = `${componentName}.jsx`
                content = code
                    .replace(/: \w+(\[\])?( \| \w+)?/g, '')
                    .replace(/<\w+>/g, '')
                    .replace(/interface \w+ \{[\s\S]*?\}\n\n/g, '')
                mimeType = 'text/javascript'
                break
            case 'json':
                filename = `${componentName}.json`
                content = JSON.stringify(
                    {
                        name: componentName,
                        theme,
                        code,
                        exportedAt: new Date().toISOString(),
                    },
                    null,
                    2
                )
                mimeType = 'application/json'
                break
        }

        // Create and trigger download
        const blob = new Blob([content], { type: mimeType })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        setExported(format)
        setTimeout(() => {
            setExported(null)
            setIsOpen(false)
        }, 1500)
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors"
                style={{ backgroundColor: '#27272a', color: '#d4d4d8' }}
                aria-expanded={isOpen}
                aria-haspopup="menu"
            >
                <Download className="h-4 w-4" />
                Export
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown */}
                    <div
                        className="absolute right-0 mt-2 w-48 border rounded-xl shadow-xl z-50 overflow-hidden"
                        style={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
                        role="menu"
                    >
                        <button
                            onClick={() => handleExport('tsx')}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left"
                            style={{ color: '#d4d4d8' }}
                            role="menuitem"
                        >
                            {exported === 'tsx' ? (
                                <Check className="h-4 w-4" style={{ color: '#34d399' }} />
                            ) : (
                                <FileCode className="h-4 w-4" />
                            )}
                            Export as TSX
                        </button>
                        <button
                            onClick={() => handleExport('jsx')}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left"
                            style={{ color: '#d4d4d8' }}
                            role="menuitem"
                        >
                            {exported === 'jsx' ? (
                                <Check className="h-4 w-4" style={{ color: '#34d399' }} />
                            ) : (
                                <FileCode className="h-4 w-4" />
                            )}
                            Export as JSX
                        </button>
                        <button
                            onClick={() => handleExport('json')}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left border-t"
                            style={{ color: '#d4d4d8', borderColor: '#27272a' }}
                            role="menuitem"
                        >
                            {exported === 'json' ? (
                                <Check className="h-4 w-4" style={{ color: '#34d399' }} />
                            ) : (
                                <FileJson className="h-4 w-4" />
                            )}
                            Export as JSON
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
