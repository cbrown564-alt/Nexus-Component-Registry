/**
 * Skip link component for keyboard accessibility
 * Allows keyboard users to skip navigation and jump to main content
 */
export default function SkipLink() {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-zinc-950 focus:rounded-lg focus:font-medium focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
            Skip to main content
        </a>
    )
}
