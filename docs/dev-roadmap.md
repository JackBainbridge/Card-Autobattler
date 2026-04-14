## 🛠 SDLC Roadmap: Hearthstone BG Clone
### Phase 1: Planning & Requirement Analysis
**Core Mechanics Definition:** Define the "MVP" (Minimum Viable Product). For an auto-battler, this is: Buying cards, selling cards, and a basic combat loop.

**Tech Stack Finalization:** Confirming React + Zustand + Framer Motion.

**Feature Scope:** Deciding whether to include "Heroes" and "Quests" in Version 1.0 or save them for later.

### Phase 2: Design & Prototyping
**Architecture Design:** Defining how the Frontend (React) talks to the Game Engine (the JS files we just created).

**UI/UX Wireframing:** Mapping out the Tavern (top half), Player Board (bottom half), and the "Freeze/Roll" buttons.

**State Schema:** Mapping the Zustand store.

**Example:** 
```
store = { playerHealth: 40, gold: 3, tavernTier: 1, hand: [], board: [] }
```

### Phase 3: Development (The Build)
This phase is broken into "Sprints":

**Sprint 1 (The Engine):** Finalizing the combat.js and minions.js logic (What we have now).

**Sprint 2 (The Interface):** Creating React components for <Card />, <Board />, and <Tavern />.

**Sprint 3 (The Interaction):** Implementing dnd-kit to allow dragging a card from the Shop to the Board.

**Sprint 4 (The Animation):** Integrating Framer Motion so cards "bump" each other during combat instead of just disappearing.

### Phase 4: Testing & Quality Assurance
**Logic Unit Testing:** Ensuring that a 2/2 minion hitting a 1/1 minion always results in the correct survivor.

**Edge Case Handling:** What happens if the player tries to buy a card with 0 gold? What happens if the board is full?

**Performance Testing:** Ensuring the browser doesn't lag when 14 cards are on screen with animations.

### Phase 5: Deployment
**Vercel/Netlify Deployment:** Hosting the frontend so friends can play-test via a URL.

**Continuous Integration (CI):** Setting up GitHub Actions to run tests every time you push code.

### Phase 6: Maintenance & Iteration
**Content Updates:** Adding "Season 2" minions.

**Bug Fixes:** Patching interaction glitches found during play-testing.