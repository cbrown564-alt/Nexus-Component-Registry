# Theme Extraction Migration Status

Tracking the status of extracting hardcoded template identities into independent Theme Definitions affecting the "Theme Architecture Refactor".

**Goal**: Every template should derive its look from a Theme Token Object, not hardcoded Tailwind classes.

## Summary
- **Total Templates**: 28
- **Extracted**: 1
- **Pending**: 27

## Migration Status

### Professional
- [x] **Fintech** (`fintech`) - *Extracted (Pilot)*
- [ ] **Engineering** (`engineering`)
- [ ] **B2B SaaS** (`saas`)
- [ ] **Flow** (`productivity`)
- [ ] **Matrix** (`grid`)
- [ ] **Eagle** (`legal`)

### Consumer
- [ ] **Wellness** (`wellness`)
- [ ] **Education** (`education`)
- [ ] **Magazine** (`magazine`)
- [ ] **Storefront** (`ecommerce`)
- [ ] **Stream** (`social`)
- [ ] **Sonic** (`music`)
- [ ] **Crave** (`food`)
- [ ] **Mise** (`kitchen`)
- [ ] **Play** (`kids`)

### SciFi
- [x] **Helix** (`scifi`) - *Extracted*
- [x] **Cockpit** (`cockpit`) - *Extracted*
- [x] **Blueprint** (`blueprint`) - *Extracted*

### Retro
- [x] **Retro** (`legacy`) - *Extracted*
- [x] **Arcade** (`arcade`) - *Extracted*
- [x] **Canvas** (`eink`) - *Extracted*

### Experimental
- [ ] **Raw** (`brutalist`)
- [ ] **Eden** (`solarpunk`)
- [ ] **Plastic** (`softplastic`)
- [ ] **Pulse** (`festival`)
- [ ] **Acid** (`acid`)
- [ ] **Clay** (`clay`)
- [ ] **Swiss** (`swiss`)

## Next Steps
1. Extract **Helix** (SciFi) and **Retro** (Legacy) during this refactor session.
2. Establish the pattern in `data/themes/`.
3. Proceed with remaining themes in subsequent sessions.
