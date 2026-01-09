import { useState, useEffect } from 'react'

interface AnimatedMountOptions {
    delay?: number
    staggerDelay?: number
    itemCount?: number
}

interface AnimatedMountReturn {
    isVisible: boolean
    getItemDelay: (index: number) => number
}

/**
 * Staggered mount animations for lists
 * 
 * @param options - Configuration options
 * @returns Object with visibility state and delay calculator
 * 
 * @example
 * ```tsx
 * const { isVisible, getItemDelay } = useAnimatedMount({ itemCount: 5 })
 * 
 * return items.map((item, i) => (
 *   <motion.div
 *     initial={{ opacity: 0, y: 20 }}
 *     animate={isVisible ? { opacity: 1, y: 0 } : {}}
 *     transition={{ delay: getItemDelay(i) }}
 *   >
 *     {item}
 *   </motion.div>
 * ))
 * ```
 */
export function useAnimatedMount(options: AnimatedMountOptions = {}): AnimatedMountReturn {
    const { delay = 0, staggerDelay = 50 } = options
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay)
        return () => clearTimeout(timer)
    }, [delay])

    const getItemDelay = (index: number) => staggerDelay * index / 1000

    return { isVisible, getItemDelay }
}

export default useAnimatedMount
