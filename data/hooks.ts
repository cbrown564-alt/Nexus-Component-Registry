export interface HookMeta {
  id: string
  name: string
  description: string
  category: 'interaction' | 'state' | 'utility' | 'animation' | 'context'
  parameters: {
    name: string
    type: string
    description: string
    optional?: boolean
    default?: string
  }[]
  returns: {
    name: string
    type: string
    description: string
  }[]
  example: string
  sourceFile: string
}

export const hooks: HookMeta[] = [
  {
    id: 'use-spotlight',
    name: 'useSpotlight',
    description: 'Track mouse position for spotlight/hover effects on cards',
    category: 'interaction',
    parameters: [],
    returns: [
      { name: 'ref', type: 'RefObject<HTMLDivElement>', description: 'Ref to attach to the container element' },
      { name: 'position', type: '{ x: number; y: number }', description: 'Mouse position relative to element' },
      { name: 'opacity', type: 'number', description: 'Spotlight opacity (0 when not hovering, 1 when hovering)' },
      { name: 'handlers', type: 'object', description: 'Event handlers: onMouseMove, onMouseEnter, onMouseLeave' },
    ],
    example: `const { ref, position, opacity, handlers } = useSpotlight()

return (
  <div ref={ref} {...handlers}>
    <div
      style={{
        background: \`radial-gradient(600px at \${position.x}px \${position.y}px, rgba(255,255,255,0.1), transparent)\`,
        opacity
      }}
    />
    {children}
  </div>
)`,
    sourceFile: 'hooks/useSpotlight.ts',
  },

  {
    id: 'use-mouse-position',
    name: 'useMousePosition',
    description: 'Track global mouse coordinates across the window',
    category: 'interaction',
    parameters: [],
    returns: [
      { name: 'x', type: 'number', description: 'Mouse X coordinate' },
      { name: 'y', type: 'number', description: 'Mouse Y coordinate' },
    ],
    example: `const { x, y } = useMousePosition()

return <div>Mouse: {x}, {y}</div>`,
    sourceFile: 'hooks/useMousePosition.ts',
  },

  {
    id: 'use-theme',
    name: 'useTheme',
    description: 'Access and control the current theme from ThemeContext',
    category: 'context',
    parameters: [],
    returns: [
      { name: 'theme', type: 'PlaygroundTheme', description: 'Current playground theme with colors, typography' },
      { name: 'setTheme', type: '(id: string) => void', description: 'Primary API to change the active theme' },
      { name: 'currentPlaygroundTheme', type: 'PlaygroundTheme', description: 'Alias for theme' },
    ],
    example: `const { theme, setTheme } = useTheme()

// Set theme on component mount
useEffect(() => {
  setTheme('wellness')
}, [])

return (
  <div style={{ backgroundColor: theme.colors.background }}>
    {children}
  </div>
)`,
    sourceFile: 'context/ThemeContext.tsx',
  },

  {
    id: 'use-debounce',
    name: 'useDebounce',
    description: 'Delay value updates, useful for search inputs and expensive operations',
    category: 'utility',
    parameters: [
      { name: 'value', type: 'T', description: 'The value to debounce' },
      { name: 'delay', type: 'number', description: 'Delay in milliseconds' },
    ],
    returns: [
      { name: 'debouncedValue', type: 'T', description: 'The debounced value' },
    ],
    example: `const [search, setSearch] = useState('')
const debouncedSearch = useDebounce(search, 300)

useEffect(() => {
  fetchResults(debouncedSearch)
}, [debouncedSearch])`,
    sourceFile: 'hooks/useDebounce.ts',
  },

  {
    id: 'use-media-query',
    name: 'useMediaQuery',
    description: 'Detect if a CSS media query matches for responsive layouts',
    category: 'utility',
    parameters: [
      { name: 'query', type: 'string', description: 'CSS media query string' },
    ],
    returns: [
      { name: 'matches', type: 'boolean', description: 'Whether the query matches' },
    ],
    example: `const isMobile = useMediaQuery('(max-width: 768px)')
const isDark = useMediaQuery('(prefers-color-scheme: dark)')

return isMobile ? <MobileNav /> : <DesktopNav />`,
    sourceFile: 'hooks/useMediaQuery.ts',
  },

  {
    id: 'use-click-outside',
    name: 'useClickOutside',
    description: 'Detect clicks outside an element to close dropdowns or modals',
    category: 'interaction',
    parameters: [
      { name: 'callback', type: '() => void', description: 'Function to call when clicked outside' },
    ],
    returns: [
      { name: 'ref', type: 'RefObject<T>', description: 'Ref to attach to the element' },
    ],
    example: `const [isOpen, setIsOpen] = useState(false)
const ref = useClickOutside(() => setIsOpen(false))

return (
  <div ref={ref}>
    {isOpen && <Dropdown />}
  </div>
)`,
    sourceFile: 'hooks/useClickOutside.ts',
  },

  {
    id: 'use-copy-to-clipboard',
    name: 'useCopyToClipboard',
    description: 'Copy text to clipboard with a success state indicator',
    category: 'utility',
    parameters: [
      { name: 'resetDelay', type: 'number', description: 'Delay before resetting copied state', optional: true, default: '2000' },
    ],
    returns: [
      { name: 'copied', type: 'boolean', description: 'Whether text was recently copied' },
      { name: 'copy', type: '(text: string) => Promise<void>', description: 'Function to copy text' },
    ],
    example: `const { copied, copy } = useCopyToClipboard()

return (
  <button onClick={() => copy(code)}>
    {copied ? 'Copied!' : 'Copy'}
  </button>
)`,
    sourceFile: 'hooks/useCopyToClipboard.ts',
  },

  {
    id: 'use-animated-mount',
    name: 'useAnimatedMount',
    description: 'Create staggered mount animations for lists of items',
    category: 'animation',
    parameters: [
      { name: 'options.delay', type: 'number', description: 'Initial delay before animation starts', optional: true, default: '0' },
      { name: 'options.staggerDelay', type: 'number', description: 'Delay between each item', optional: true, default: '50' },
    ],
    returns: [
      { name: 'isVisible', type: 'boolean', description: 'Whether items should be visible' },
      { name: 'getItemDelay', type: '(index: number) => number', description: 'Get delay for specific item' },
    ],
    example: `const { isVisible, getItemDelay } = useAnimatedMount({ staggerDelay: 50 })

return items.map((item, i) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: getItemDelay(i) }}
  >
    {item}
  </motion.div>
))`,
    sourceFile: 'hooks/useAnimatedMount.ts',
  },
]

export const getHookById = (id: string): HookMeta | undefined => {
  return hooks.find((h) => h.id === id)
}

export const getHooksByCategory = (category: HookMeta['category']): HookMeta[] => {
  return hooks.filter((h) => h.category === category)
}

export const categories: HookMeta['category'][] = ['interaction', 'state', 'utility', 'animation', 'context']
