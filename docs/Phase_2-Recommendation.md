# Phase 2: Design & Prototyping

This document outlines the UI architecture and state management strategy for the BGS Knock-off prototype.

## 🎨 UI Component Hierarchy
The frontend will be built using React, organized into functional zones:
*   **`<GameContainer />`**: The top-level orchestrator managing transitions between `SHOP` and `COMBAT` phases.
*   **`<Tavern />`**: Displays the available minions from the server-side roll. Includes the "Roll" and "Freeze" buttons.
*   **`<Board />`**: A flexbox-based container for the player's active minions (max 7).
*   **`<Hand />`**: Temporary storage for bought minions before they are played.
*   **`<HeroAvatar />`**: Displays health, armor, and current Tavern Tier.

## 🧠 State Management (Zustand)
We will use **Zustand** to maintain a high-performance global store. The store will handle:
```javascript
const useGameStore = create((set) => ({
  gameState: 'ROLLING', // 'ROLLING', 'READY', 'COMBAT'
  playerHealth: 40,
  gold: 3,
  tavernTier: 1,
  board: [],
  hand: [],
  opponentSnapshot: null,
  // Actions
  buyMinion: (minion) => { ... },
  sellMinion: (minionId) => { ... },
  readyUp: () => { ... }
}));
```

## 📡 Socket.io Event Lifecycle
To implement the **Snapshot Rule**, the following event sequence is required:
1.  **`client:player_ready`**: Sent when the player clicks "End Turn". Contains the current `board` array.
2.  **`server:broadcast_snapshots`**: Once both players are ready, the server sends Player A's board to Player B and vice versa.
3.  **`client:start_simulation`**: Local React state updates `gameState` to `COMBAT` and triggers the deterministic `resolveCombat` logic.

---

## ✅ Phase 2 Checklist
- [x] Initialize React project with Vite.
- [x] Set up Zustand store with basic Gold/Health logic.
- [ ] Create mock UI for the Tavern and Board.
- [ ] Implement Socket.io client-side listeners for combat synchronization.
- [ ] Integrate `dnd-kit` for basic drag-and-drop (Buy/Positioning).

---
*Next Step: Phase 3 - Development (Implementing the Store and Drag-and-Drop interactions)*