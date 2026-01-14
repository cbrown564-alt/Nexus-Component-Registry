# Nexus Stories: Feature Report & Roadmap

## Executive Summary
We have successfully implemented the core architecture for **Nexus Stories**, an "Explorable Explanation" engine for our design system. This feature allows us to tell rich, interactive narratives about *why* our components are designed the way they are, bridging the gap between static documentation and live code.

## 1. What We Built

### Core Architecture
*   **Data-Driven Narrative**: Stories are defined entirely in `data/stories.ts`, separating content from presentation.
*   **ScrollyTelling Engine** (`ScrollyTellingLayout.tsx`): A robust split-screen layout where scrolling text drives state changes in a sticky visualization stage.
*   **Responsive Design**:
    *   **Desktop**: Classic split-screen (Text Left, Sticky Stage Right).
    *   **Mobile**: "Stage Overlay" pattern. The stage is fixed at the top, and narrative cards scroll *over* it with glassmorphism effects.

### Interactive Features
*   **StoryStage** (`StoryStage.tsx`): A dynamic renderer that accepts component names and props state.
*   **Progressive Disclosure**: Support for "stripping" components to raw HTML and rebuilding their styles line-by-line to demonstrate CSS principles.
*   **Live Code Overlay**: An IDE-like visualizations that highlights meaningful property changes (e.g., showing the specific `box-shadow` calculation).
*   **Full Source View**: A toggle-able view for the final step that reveals the complete, production-ready code implementation.

---

## 2. Potential Pathways (Roadmap)

Now that the engine is v1.0, we can expand in three directions:

### A. Deeper Interactivity (The "Lab" Path)
Instead of just *reading*, let users *tweak*.
*   **Sliders & Toggles**: Allow users to adjust `damping` or `border-width` live in the stage during a step.
*   **Playground Integration**: A "Fork this Story" button that opens the current state in a full sandbox.

### B. Standardized Component Registry (The "Platform" Path)
Currently, `StoryStage` manually maps components.
*   **Dynamic Registry**: Build a map of string names -> Component Types to allow writing stories for *any* UI component without touching `StoryStage.tsx`.
*   **Props Table Automation**: Automatically generate the "Live Properties" overlay based on prop diffs.

### C. Richer Narrative Tools (The "Media" Path)
*   **Video Integration**: Allow background videos or distinct animations in the stage.
*   **Annotations**: Draw lines/arrows from the text to specific parts of the component on the stage.

---

## 3. Content Roadmap: The Next 5 Stories

To prove the value of this engine, we should focus on content that is hard to explain with text alone.

### Story Idea 1: "The Physics of Spring"
*   **Concept**: Demystifying animation curves.
*   **Step 1**: Linear motion (The Robot).
*   **Step 2**: Ease-in-out (The Cinema).
*   **Step 3**: Spring Physics (The Life). Visualizing Mass, Stiffness, and Damping.
*   **Interactive**: A ball bouncing. The code overlay shows the `spring(mass: 1, stiffness: 100)` config updating live.

### Story Idea 2: "The Invisible Render" (Performance)
*   **Concept**: Why we use `memo` and virtual lists.
*   **Step 1**: A list of 1,000 items. Flash the screen red on every render.
*   **Step 2**: Typing in a search box. The whole list flashes red (Lag).
*   **Step 3**: Implementing `React.memo`. Only the input flashes.
*   **Payoff**: Visually feeling the speed difference.

### Story Idea 3: "Color Theory & Contrast"
*   **Concept**: How we generate our accessible palettes.
*   **Step 1**: A base color. Text is hard to read.
*   **Step 2**: The WCAG calculation. Show the contrast ratio math live.
*   **Step 3**: HSL Colorspace. shifting Lightness vs. Opacity.
*   **Step 4**: The Nexus Palette generation algorithm.

### Story Idea 4: "The Box Model Paradox"
*   **Concept**: `box-sizing: border-box` vs `content-box`.
*   **Step 1**: Two 200px divs side-by-side. They fit.
*   **Step 2**: Add padding. One div drops to the next line. (The Frustration).
*   **Step 3**: The Math. 200px + 20px padding = 240px.
*   **Step 4**: The Fix. `border-box`. The div shrinks content to keep total width 200px.

### Story Idea 5: "Anatomy of a Modal"
*   **Concept**: Accessibility is more than just visible elements.
*   **Step 1**: The visual layer (a centered div).
*   **Step 2**: The Backdrop (clicking outside).
*   **Step 3**: The Focus Trap. Show tab focus cycling wildly vs being trapped in the modal.
*   **Step 4**: The `aria-dialog`. What screenreaders see.

---

## 4. Immediate Next Steps
1.  **Freeze Engineering**: Avoid adding new features to `ScrollyTellingLayout` for 1 week.
2.  **Draft "The Physics of Spring"**: Write the markdown script first, defining the 4-5 key states.
3.  **Implement**: Add the data to `stories.ts` and verify.
