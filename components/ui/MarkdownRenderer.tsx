import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
    content: string
    className?: string
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
    return (
        <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ node, ...props }) => <h1 className="text-4xl font-bold text-white mb-6 mt-12" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mb-4 mt-8" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-white mb-3 mt-6" {...props} />,
                    p: ({ node, ...props }) => <p className="text-zinc-400 mb-4 leading-relaxed" {...props} />,
                    ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-4 text-zinc-400 space-y-2" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-4 text-zinc-400 space-y-2" {...props} />,
                    li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                    blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-zinc-700 pl-4 py-1 my-6 italic text-zinc-500" {...props} />,
                    code: ({ node, className, children, ...props }: any) => {
                        const match = /language-(\w+)/.exec(className || '')
                        const isInline = !match && !String(children).includes('\n')
                        return isInline ? (
                            <code className="bg-zinc-800 text-zinc-200 px-1.5 py-0.5 rounded text-sm font-mono border border-zinc-700" {...props}>
                                {children}
                            </code>
                        ) : (
                            <code className="block bg-zinc-900 text-zinc-300 p-4 rounded-lg text-sm font-mono overflow-x-auto border border-zinc-800 my-4" {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}
