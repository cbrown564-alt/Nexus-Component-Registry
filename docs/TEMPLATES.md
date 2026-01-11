# Nexus Template Catalog

A complete guide to the 28 distinct design systems available in Nexus. Each template represents a fully realized visual language.

---

## 1. Professional & SaaS

| Template | Aesthetic | Key Components |
|:---|:---|:---|
| **Engineering** | VS Code-style IDE, dark, technical | `CodeBlock`, `PipelineSteps`, `EngineeringCard` |
| **SaaS** | Clean metrics, business analytics | `RevenueChart`, `MetricCard`, `SaasButton` |
| **Fintech** | Banking terminal, emerald data viz | `PortfolioChart`, `MarketTicker`, `FintechCard` |
| **Legal** | Authoritative, document-centric | `LegalPaper`, `DiffViewer`, `Clause` |
| **Productivity** | Kanban flow, focus-oriented | `KanbanBoard`, `FocusTimer`, `FlowButton` |
| **Grid** | Infrastructure monitoring, control room | `CityMap`, `ResourceGauge`, `SystemControls` |

## 2. Consumer & Lifestyle

| Template | Aesthetic | Key Components |
|:---|:---|:---|
| **Wellness** | Organic, calming, breathing rhythms | `BreathPlayer`, `MoodSelector`, `SleepGraph` |
| **Food** | Appetizing, delivery-focused | `MenuGrid`, `HeroDish`, `CartWidget` |
| **Music** | Spotify-like, media-rich | `NowPlaying`, `TrackList`, `AlbumGrid` |
| **Education** | Learning portal, progress tracking | `CourseCard`, `StudyStats`, `UpcomingSchedule` |
| **Ecommerce** | Retail storefront, clean product grid | `ProductCard`, `CartSummary`, `PromoBanner` |
| **Social** | Feed-based, community interaction | `FeedPost`, `StoryRail`, `ProfileSidebar` |
| **Kitchen** | Smart cooking assistant, tactile | `ActiveStep`, `IngredientScale`, `SmartTimer` |
| **Kids** | Playful, big touch targets, bright | `BigIconNav`, `StarProgress`, `Mascot` |

## 3. High-Concept & Sci-Fi

| Template | Aesthetic | Key Components |
|:---|:---|:---|
| **SciFi** | Holographic HUD, cyan scanlines | `BodyScanner`, `VitalsMonitor`, `DNAList` |
| **Cockpit** | Automotive instrument cluster | `Speedometer`, `LaneAssist`, `ClimateControl` |
| **Blueprint** | CAD software, technical schematic | `CadViewer`, `ToolPalette`, `LayerControl` |
| **Space** | Nebula gradients, deep exploration | `MissionStatus`, `StarMap`, `TelemetryWidget` |

## 4. Retro & Nostalgia

| Template | Aesthetic | Key Components |
|:---|:---|:---|
| **Legacy** | Windows 95, bevels, pixel fonts | `LegacyWindow`, `DesktopIcon`, `StartMenu` |
| **E-Ink** | Monochrome, paper-like, slow refresh | `ReaderContent`, `LibraryGrid`, `EInkSidebar` |
| **Arcade** | Retro gaming, neon, CRT effects | `LeaderboardWidget`, `QuestLog`, `InventoryGrid` |

## 5. Experimental & specialized

| Template | Aesthetic | Key Components |
|:---|:---|:---|
| **Swiss** | International Typographic Style, grid | `SwissGrid`, `SwissTypography`, `SwissMetric` |
| **Brutalist** | Neo-brutalism, hard shadows, bold | `MarqueeHeader`, `Manifesto`, `ArtGrid` |
| **Acid** | Glitch art, chaotic, vibrant | `GlitchText`, `Sticker`, `AcidCard` |
| **Solarpunk** | Organic tech, plants + energy | `EnergySun`, `AirQualityLeaf`, `EcoStats` |
| **Festival** | Live event, pulsing energy | `StageLineup`, `CrowdHeatmap`, `TicketWallet` |
| **Clay** | Claymorphism, soft 3D, cute | `ClayCard`, `ClayToggle`, `TaskStrip` |
| **Soft Plastic** | Neumorphism, tactile smart home | `ThermostatDial`, `AmbiancePicker`, `DeviceToggle` |

---

## Usage

Each template corresponds to a directory in `components/` (e.g., `components/fintech`). You can import these components individually, but they are designed to work best together within their specific `ThemeContext`.

```tsx
// Example: Importing from the Fintech theme
import { FintechCard, MarketTicker } from "@/components/fintech";

function MyDashboard() {
  return (
    <FintechCard>
      <MarketTicker />
    </FintechCard>
  );
}
```
