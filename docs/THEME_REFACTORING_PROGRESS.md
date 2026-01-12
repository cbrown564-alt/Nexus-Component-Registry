# Theme Refactoring Progress Tracker

**Goal**: Remove hardcoded Tailwind color classes from all components
**Updated**: 2026-01-12 11:30

---

## Current Status

| Metric | Before | After | Reduction |
|--------|--------|-------|-----------|
| Component violations | 582 | 429 | 26% |
| Template violations | 214 | 214 | 0% |
| **Total** | **796** | **643** | **19%** |

---

## Components Refactored This Session

### Shared Components
- [x] Header.tsx (21 → 0)
- [x] Sidebar.tsx (15 → 0)

### Theme Components
- [x] social: FeedPost, ProfileSidebar, StoryRail
- [x] kids: Mascot, BigIconNav, RewardStar, SpeechBubble, StarProgress
- [x] music: AlbumGrid, TrackList, NowPlaying
- [x] saas: SaasButton
- [x] swiss: SwissButton, SwissCard, SwissDivider, SwissTypography
- [x] softplastic: DeviceToggle, NeumorphicButton
- [x] solarpunk: SolarpunkButton
- [x] ecommerce: ProductCard, PromoBanner
- [x] education: CourseCard, StudyStats
- [x] food: CartWidget, HeroDish
- [x] acid: AcidButton
- [x] eink: EInkButton
- [x] blueprint: LayerControl

---

## Remaining Work

### Components (~429 violations in 66 files)
- [ ] docs: LivePlayground (49), PropsTable (16)
- [ ] eink: EInkCard, EInkSidebar, LibraryGrid, ReaderContent
- [ ] education: UpcomingSchedule, EducationButton
- [ ] Various theme components with 1-3 violations each

### Templates (~214 violations in 25 files)
- Not yet started

---

## Verification

```bash
npm run test:static
```
