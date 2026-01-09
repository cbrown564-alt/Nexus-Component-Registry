import { useState, useCallback } from 'react'

interface UseCopyToClipboardReturn {
    copied: boolean
    copy: (text: string) => Promise<void>
}

/**
 * Copy text to clipboard with success state
 * 
 * @param resetDelay - Delay in ms before resetting copied state (default: 2000)
 * @returns Object with copied state and copy function
 * 
 * @example
 * ```tsx
 * const { copied, copy } = useCopyToClipboard()
 * 
 * return (
 *   <button onClick={() => copy(code)}>
 *     {copied ? 'Copied!' : 'Copy'}
 *   </button>
 * )
 * ```
 */
export function useCopyToClipboard(resetDelay = 2000): UseCopyToClipboardReturn {
    const [copied, setCopied] = useState(false)

    const copy = useCallback(
        async (text: string) => {
            try {
                await navigator.clipboard.writeText(text)
                setCopied(true)
                setTimeout(() => setCopied(false), resetDelay)
            } catch (err) {
                console.error('Failed to copy:', err)
                setCopied(false)
            }
        },
        [resetDelay]
    )

    return { copied, copy }
}

export default useCopyToClipboard
