# Template Preview Audit

This document describes each template's form, function, and vibe, then evaluates whether its preview wireframe accurately represents it.

---

## Template Catalog

### 1. Engineering
**Form:** VS Code-like IDE layout. Activity bar (left icons), file explorer sidebar, tabbed editor with code, integrated terminal at bottom, AI copilot sidebar on right.
**Function:** Developer tools, code editors, AI-assisted programming
**Vibe:** Dark, monospace, technical, blue accents, terminal green
**Preview Status:** ❌ Uses generic DashboardWireframe - should show IDE layout with tabs, explorer, terminal

### 2. Wellness  
**Form:** Centered breathing circle with concentric rings, health stats (bpm, %, hours) at bottom, organic/soft aesthetic
**Function:** Health tracking, meditation, wellness apps
**Vibe:** Light cream background, sage green, calm, minimal, organic shapes
**Preview Status:** ✅ Has dedicated WellnessWireframe

### 3. Education
**Form:** Course cards in grid with progress bars, percentage completion, academic structure
**Function:** Learning management, course tracking, educational platforms
**Vibe:** Light, clean, slate/violet accents, professional academic
**Preview Status:** ✅ Has dedicated EducationWireframe

### 4. SaaS (B2B)
**Form:** KPI metric cards row, large revenue chart, sidebar with recent sales, customer table at bottom
**Function:** Business dashboards, analytics, enterprise software
**Vibe:** Dark slate, indigo accents, professional, data-focused
**Preview Status:** ❌ Uses generic DashboardWireframe - should show metric cards + chart layout

### 5. Magazine
**Form:** Editorial layout with large headline, byline, text columns, sidebar with additional articles, serif typography
**Function:** Content publishing, news, editorial platforms
**Vibe:** Light cream, black/neutral, classic typography, editorial elegance
**Preview Status:** ✅ Has dedicated MagazineWireframe

### 6. Ecommerce (Storefront)
**Form:** Product card grid, promo banners, cart sidebar, minimal nav bar, clean white space
**Function:** Online shopping, product catalogs, retail
**Vibe:** Clean white, minimal black, product photography focus
**Preview Status:** ❌ Uses generic DashboardWireframe - should show product grid layout

### 7. Social (Stream)
**Form:** Three-column layout: profile sidebar, central feed with posts/stories, right sidebar with trends
**Function:** Social media, feeds, community platforms
**Vibe:** Dark with sky blue accents, modern, content-focused
**Preview Status:** ❌ Uses generic DashboardWireframe - should show feed layout with posts

### 8. Fintech (Terminal)
**Form:** Large portfolio chart, digital card display, market ticker, transaction list, quick transfer widget
**Function:** Banking, investments, financial tracking
**Vibe:** Dark, emerald green accents, professional, trust-inspiring
**Preview Status:** ❌ Uses generic DashboardWireframe - should show chart + card + ticker layout

### 9. Productivity (Flow)
**Form:** Kanban board layout, focus timer widget, task inbox, daily progress bars, project sidebar
**Function:** Task management, focus apps, productivity tools
**Vibe:** Dark with amber accents, minimal, focus-oriented
**Preview Status:** ❌ Uses generic DashboardWireframe - should show kanban + timer layout

### 10. Game (Arcade)
**Form:** Neon "PLAYER ONE" header, score/level display, game grid area with scanlines, vibrant gradients
**Function:** Gaming interfaces, leaderboards, entertainment
**Vibe:** Deep purple background, fuchsia/cyan neon, retro gaming, energetic
**Preview Status:** ✅ Has dedicated ArcadeWireframe

### 11. Music (Sonic)
**Form:** Spotify-like layout: playlist sidebar, album hero with artwork, track list, now playing sidebar with waveform
**Function:** Music streaming, audio playback, playlists
**Vibe:** Dark gradient background, rose/violet accents, media-focused
**Preview Status:** ❌ Uses generic DashboardWireframe - should show album art + track list

### 12. Food (Crave)
**Form:** Category chips row, order tracker banner, featured dish hero, menu grid, cart sidebar
**Function:** Food delivery, restaurant ordering, menus
**Vibe:** Dark with warm orange accents, appetizing, delivery-focused
**Preview Status:** ❌ Uses generic DashboardWireframe - should show menu grid + categories

### 13. Grid (Matrix)
**Form:** City map visualization, resource gauges, alert log, network topology panel, control buttons
**Function:** Infrastructure monitoring, smart city, grid operations
**Vibe:** Deep blue background, blue UI elements, technical, data-dense
**Preview Status:** ❌ Uses generic DashboardWireframe - should show map + gauges

### 14. Brutalist (Raw)
**Form:** Bold black header with "RAW DESIGN", asymmetric blocks, stark contrasts, "NO RULES" text
**Function:** Portfolio, creative agency, statement pieces
**Vibe:** Gray/white background, yellow/black stark contrast, anti-design aesthetic
**Preview Status:** ✅ Has dedicated BrutalistWireframe

### 15. Kitchen (Mise)
**Form:** Recipe step display (large centered), ingredient scale sidebar, timer widget, smart appliance status panel
**Function:** Smart kitchen displays, cooking guides, recipe apps
**Vibe:** Warm cream background, stone/orange colors, culinary, serif fonts
**Preview Status:** ❌ Uses WellnessWireframe (MISMATCH) - should show recipe step + timer

### 16. Kids (Play)
**Form:** Large colorful activity tiles (Read, Art, Math, etc.) in grid, avatar with stars progress, mascot character, sky blue background with clouds
**Function:** Educational games, kids' learning apps
**Vibe:** Bright sky blue, rainbow colors, playful, large touch targets
**Preview Status:** ❌ Uses ArcadeWireframe (MISMATCH) - arcade is dark/neon, Play is bright/cheerful

### 17. SciFi (Helix)
**Form:** Hexagonal grid pattern, central HUD circle with crosshairs, data readouts, holographic effects
**Function:** Futuristic interfaces, sci-fi apps, space themes
**Vibe:** Near-black with cyan glow, holographic, technical, futuristic
**Preview Status:** ✅ Has dedicated SciFiWireframe

### 18. E-Ink (Canvas)
**Form:** Minimal black/white, sidebar with nav, main content with text lines, stark borders, no color
**Function:** Reading apps, e-readers, document viewers
**Vibe:** Paper-like light gray, pure black, minimal, literary
**Preview Status:** ✅ Has dedicated EInkWireframe

### 19. Solarpunk (Eden)
**Form:** Organic asymmetric layout, sun energy visualization, air quality leaf gauge, hydroponics plant progress, community avatars
**Function:** Sustainability apps, gardening, eco-dashboards
**Vibe:** Light green tints, organic shapes, natural, optimistic
**Preview Status:** ❌ Uses WellnessWireframe (MISMATCH) - should show plants/energy, not breathing circle

### 20. Legal (Eagle)
**Form:** Document-heavy layout, formal headers, structured sections, government/legal styling
**Function:** Legal documents, government portals, official communications
**Vibe:** Gray/stone background, red accents, formal, authoritative
**Preview Status:** ✅ Uses MagazineWireframe (acceptable - editorial structure similar)

### 21. Soft Plastic (Plastic)
**Form:** Neumorphic shadows, soft raised/inset elements, rounded shapes, subtle depth
**Function:** Modern UI experiments, soft/approachable interfaces
**Vibe:** Light gray, soft shadows, squishy/tactile, modern
**Preview Status:** ❌ Uses generic DashboardWireframe - should show neumorphic elements

### 22. Festival (Pulse)
**Form:** Audio bar visualizer, "LIVE" indicator, high-energy layout, gradient bursts
**Function:** Event apps, music festivals, live entertainment
**Vibe:** Black with fuchsia/cyan, energetic, pulsing, audio-visual
**Preview Status:** ✅ Has dedicated FestivalWireframe

### 23. Acid
**Form:** Bold graphics, lime/yellow highlights, stark borders, brutalist-adjacent but more colorful
**Function:** Bold creative projects, avant-garde designs
**Vibe:** Light blue/white background, neon lime accent, high contrast, bold
**Preview Status:** ✅ Uses BrutalistWireframe (acceptable - shares stark aesthetic)

### 24. Legacy
**Form:** Windows 95/98 windows with title bars, minimize/maximize/close buttons, stacked windows, beveled borders
**Function:** Retro interfaces, nostalgia projects
**Vibe:** Teal desktop, gray windows, pixel fonts, nostalgic
**Preview Status:** ✅ Has dedicated LegacyWireframe

### 25. Cockpit
**Form:** Circular speedometer center, RPM and fuel gauges on sides, automotive instrument cluster layout
**Function:** Vehicle dashboards, automotive displays, instrument panels
**Vibe:** Dark carbon, blue/white instruments, technical precision
**Preview Status:** ✅ Has dedicated CockpitWireframe

### 26. Clay (Claymorphism)
**Form:** Neumorphic task cards with soft shadows, calendar strip, progress circle, colorful category squares
**Function:** Task management, personal productivity, friendly to-do apps
**Vibe:** Light soft gray with pastel accents, rounded, friendly, approachable
**Preview Status:** ❌ Uses generic DashboardWireframe - should show soft cards + calendar

### 27. Blueprint
**Form:** Technical schematic style, grid lines, measurement marks, drafting aesthetics
**Function:** Technical documentation, CAD-like interfaces, engineering drawings
**Vibe:** Deep blue background, white/light blue lines, technical, precise
**Preview Status:** ✅ Uses SciFiWireframe (partially acceptable - technical feel matches)

### 28. Swiss
**Form:** Grid-based layout, bold red square accent, stark typography, minimal elements, geometric precision
**Function:** Graphic design, typography-focused, minimalist portfolios
**Vibe:** Light gray, red/black, grid-perfect, typographic excellence
**Preview Status:** ✅ Has dedicated SwissWireframe

---

## Summary of Issues

### Critical Mismatches (Wrong Archetype)
1. **Kids (Play)** - Uses ArcadeWireframe (dark neon) but should be bright/colorful with big activity tiles
2. **Kitchen (Mise)** - Uses WellnessWireframe (breathing circle) but should show recipe/timer/appliances
3. **Solarpunk (Eden)** - Uses WellnessWireframe (breathing circle) but should show plants/energy

### Templates Using Generic Dashboard (Need Unique Wireframes)
1. **Engineering** - Should show IDE layout with tabs, explorer, terminal
2. **SaaS** - Should show metric cards row + large chart
3. **Ecommerce** - Should show product grid layout
4. **Social** - Should show feed with posts layout
5. **Fintech** - Should show chart + digital card + ticker
6. **Productivity** - Should show kanban + timer
7. **Music** - Should show album + track list
8. **Food** - Should show category pills + menu grid
9. **Grid** - Should show map + gauges
10. **Soft Plastic** - Should show neumorphic elements
11. **Clay** - Should show task cards + calendar strip

---

## Action Plan

### Phase 1: Fix Critical Mismatches
1. Create KidsWireframe - bright, colorful activity tiles
2. Create KitchenWireframe - recipe step + timer + appliances  
3. Create SolarpunkWireframe - sun/energy + plants

### Phase 2: Create High-Value Unique Wireframes
4. Create EngineeringWireframe - IDE with tabs, explorer, terminal
5. Create MusicWireframe - album art + track list
6. Create SocialWireframe - feed with posts
7. Create FintechWireframe - chart + card + ticker
8. Create FoodWireframe - categories + menu grid
9. Create ProductivityWireframe - kanban + timer
10. Create ClayWireframe - neumorphic cards + calendar
11. Create EcommerceWireframe - product grid
12. Create GridWireframe - map + gauges
