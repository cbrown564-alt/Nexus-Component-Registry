<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# Nexus Component Registry

**28 Design Systems. One Registry.**

*Explore production-ready React components across 28 distinct visual themes—from dark engineering dashboards to retro Windows 95 interfaces, from Swiss minimalism to cyberpunk gaming UIs.*

[View Demo](https://ai.studio/apps/drive/1v0-Z70I56VYzhD52AZ6DZuelVRtZZQ9u) · [Browse Components](#components) · [Explore Themes](#design-themes)

</div>

---

## What is Nexus?

Nexus is a **design exploration platform** that showcases how the same UI patterns can be expressed across radically different visual aesthetics. It serves two primary audiences:

| Audience | Value |
|----------|-------|
| **Designers** | Explore 28 complete design systems with consistent patterns adapted to each theme's unique aesthetic |
| **Developers** | Copy production-ready React components with props documentation, code snippets, and TypeScript support |

Unlike traditional component libraries focused on a single design language, Nexus demonstrates the full spectrum of what's possible—helping you find inspiration and learn from diverse design approaches.

---

## Core Sections

```
┌─────────────────────────────────────────────────────────────────────────┐
│                              NEXUS                                      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   HOME      │  │  TEMPLATES  │  │ COMPONENTS  │  │    HOOKS    │    │
│  ├─────────────┤  ├─────────────┤  ├─────────────┤  ├─────────────┤    │
│  │ • Hero      │  │ • 28 Full   │  │ • Searchable│  │ • useSpot-  │    │
│  │ • Theme     │  │   Dashboard │  │   Gallery   │  │   light     │    │
│  │   Grid      │  │   Layouts   │  │ • Filter by │  │ • useDebounce│   │
│  │ • Features  │  │ • Live      │  │   Theme/Type│  │ • useMedia  │    │
│  │ • Stats     │  │   Preview   │  │ • Code      │  │   Query     │    │
│  │             │  │             │  │   Snippets  │  │ • useCopy   │    │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Navigation

| Route | Purpose |
|-------|---------|
| **Home** | Visual-first landing with theme preview grid and feature highlights |
| **Templates** | Gallery of 28 design themes → click any to view full dashboard layout |
| **Components** | Searchable gallery of 120+ individual components with filtering |
| **Hooks** | Documentation and interactive examples of utility hooks |

---

## Design Themes

28 distinct visual systems organized by category:

| Category | Themes | Aesthetic |
|----------|--------|-----------|
| **Developer** | Engineering, SaaS, Grid, Blueprint | Dark, technical, data-focused |
| **Consumer** | Wellness, Education, Kids, Food | Friendly, accessible, warm |
| **Media** | Magazine, Music, Social, Festival | Bold, editorial, expressive |
| **Finance** | Fintech, Productivity, Ecommerce | Professional, trustworthy, clean |
| **Gaming** | Arcade, SciFi (Helix) | Vibrant, immersive, animated |
| **Automotive** | Cockpit | HUD-style, functional, real-time |
| **Retro** | Legacy (Win95), Brutalist, E-Ink | Nostalgic, stark, minimal |
| **Organic** | Solarpunk, Clay, Soft Plastic | Natural, soft, approachable |
| **Design Movements** | Swiss, Acid | Typographic, geometric, bold |
| **Professional** | Legal | Formal, structured, authoritative |

Each theme includes:
- ✅ Full dashboard layout template
- ✅ Theme-specific components (4-12 per theme)
- ✅ Color palette and design tokens
- ✅ Typography and spacing system
- ✅ Unique interactions and animations

---

## Components

120+ production-ready components across all themes:

### Shared Components (`/components/ui/`)

| Component | Description |
|-----------|-------------|
| `SpotlightCard` | Mouse-tracking spotlight effect container |
| `GlowButton` | Animated gradient border button |
| `Terminal` | Fake terminal with typing animation |
| `StatsCard` | Metric display with trend indicators |
| `ActivityFeed` | Real-time activity log display |
| `FileTree` | Collapsible directory explorer |
| `PlanPicker` | Pricing tier selector |
| `TeamMembers` | Avatar group with overflow |
| `DeploymentPipeline` | CI/CD visualization steps |

### Theme-Specific Examples

| Theme | Components |
|-------|------------|
| **Fintech** | DigitalCard, MarketTicker, PortfolioChart, TransactionList |
| **Gaming** | CharacterProfile, InventoryGrid, LeaderboardWidget, QuestLog |
| **Cockpit** | Speedometer, ClimateControl, LaneAssist, MediaWidget |
| **Legacy** | LegacyWindow, LegacyButton, DesktopIcon, LegacyAlert |

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.x | UI framework |
| **TypeScript** | 5.8 | Type safety |
| **Vite** | 6.x | Build tool & dev server |
| **Framer Motion** | 12.x | Animations & transitions |
| **Lucide React** | 0.562 | Icon library |
| **TailwindCSS** | 3.x (CDN) | Utility-first styling |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/nexus-component-registry.git
cd nexus-component-registry

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:3000` to explore.

### Optional Configuration

```env
# .env.local
GEMINI_API_KEY=your_api_key  # Optional: AI-powered features
```

---

## Project Structure

```
nexus-component-registry/
├── App.tsx                 # Main application shell
├── index.html              # Entry with Tailwind config
├── components/
│   ├── ui/                 # Shared base components
│   ├── fintech/            # Fintech theme components
│   ├── game/               # Gaming theme components
│   ├── cockpit/            # Automotive HUD components
│   ├── legacy/             # Retro Windows 95 components
│   └── ...                 # 24 more theme directories
├── templates/
│   ├── EngineeringDashboard.tsx
│   ├── LegacyOSDashboard.tsx
│   └── ...                 # 28 dashboard templates
├── hooks/                  # (Planned) Utility hooks
├── pages/                  # (Planned) Route pages
└── docs/
    └── RESEARCH-component-gallery-best-practices.md
```

---

## Roadmap

See [CHANGELOG.md](./CHANGELOG.md) for the full history or [docs/TEMPLATES.md](./docs/TEMPLATES.md) for the catalog.

### Documentation
- **[Architecture Guide](./docs/ARCHITECTURE.md)** — System design and patterns
- **[Template Catalog](./docs/TEMPLATES.md)** — Guide to all 28 design systems
- **[Research](./docs/RESEARCH-component-gallery-best-practices.md)** — Design system analysis

---

## Inspiration & Research

Nexus draws inspiration from:

- [shadcn/ui](https://ui.shadcn.com) — Code ownership model
- [Storybook](https://storybook.js.org) — Component documentation patterns
- [The Component Gallery](https://component.gallery) — Cross-system comparison
- [Radix UI](https://radix-ui.com) — Accessible primitives

See [docs/RESEARCH-component-gallery-best-practices.md](./docs/RESEARCH-component-gallery-best-practices.md) for detailed research.

---

## Contributing

Contributions welcome! See our guidelines for:

- Adding components to existing themes
- Creating new design themes
- Improving documentation
- Fixing bugs

---

## License

MIT License — see [LICENSE](./LICENSE) for details.

---

<div align="center">

**[Demo](https://ai.studio/apps/drive/1v0-Z70I56VYzhD52AZ6DZuelVRtZZQ9u)** · **[Changelog](./CHANGELOG.md)** · **[Architecture](./docs/ARCHITECTURE.md)**

</div>
