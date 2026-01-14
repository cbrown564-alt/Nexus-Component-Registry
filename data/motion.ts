/**
 * Motion Token System
 *
 * Standardized easing curves and durations for consistent animation
 * across the Nexus Component Registry.
 *
 * Usage with framer-motion:
 *   import { motion as motionTokens } from '@/data/motion'
 *   <motion.div transition={motionTokens.transition.enter} />
 */

// Cubic bezier easing curves
export const ease = {
    /** Material Design standard - smooth deceleration */
    default: [0.4, 0, 0.2, 1] as const,

    /** Quick, responsive feel - great for hover states */
    snappy: [0.16, 1, 0.3, 1] as const,

    /** Symmetric ease - good for looping animations */
    smooth: 'easeInOut' as const,

    /** Bouncy, playful feel - use sparingly */
    elastic: [0.68, -0.55, 0.27, 1.55] as const,

    /** Constant speed - spinners, infinite animations */
    linear: 'linear' as const,

    /** Elegant, luxurious feel - premium UI */
    velvet: [0.22, 1, 0.36, 1] as const,

    /** Quick start, slow finish - emphasis on arrival */
    out: 'easeOut' as const,
} as const

// Duration values in seconds
export const duration = {
    /** Micro-interactions, toggles */
    instant: 0.1,

    /** Hover states, tooltips, small feedback */
    fast: 0.2,

    /** Card animations, modals, standard UI */
    normal: 0.4,

    /** Page transitions, large elements */
    slow: 0.6,

    /** Hero animations, dramatic reveals */
    glacial: 0.8,

    /** Infinite/looping animations */
    infinite: Infinity,
} as const

// Pre-composed transition presets for common use cases
export const transition = {
    /** Quick hover feedback */
    hover: {
        duration: duration.fast,
        ease: ease.default,
    },

    /** Element entering the viewport */
    enter: {
        duration: duration.normal,
        ease: ease.snappy,
    },

    /** Element leaving the viewport */
    exit: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1] as const,
    },

    /** Bouncy spring physics */
    spring: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 17,
    },

    /** Gentle spring for larger elements */
    springGentle: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
    },

    /** Card/panel animations */
    card: {
        duration: duration.normal,
        ease: ease.out,
    },

    /** Stagger delay for lists (multiply by index) */
    staggerDelay: 0.1,
} as const

// Reduced motion alternatives
export const reducedMotion = {
    transition: {
        duration: 0.01,
    },
} as const

// Export all as a single object for convenience
export const motion = {
    ease,
    duration,
    transition,
    reducedMotion,
} as const

export type MotionTokens = typeof motion
