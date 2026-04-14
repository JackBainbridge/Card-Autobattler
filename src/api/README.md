# Game Logic Engine (@app/api)

This workspace serves as the **deterministic core** of the BGS Auto-Battler. It is a pure JavaScript package designed to handle game rules, combat simulations, and data management without any dependency on the UI layer.

## 🚀 Core Design Philosophy

*   **Deterministic Simulation**: The engine ensures that given the same board snapshots, the combat outcome is identical across different clients. This allows us to sync battles by exchanging data snapshots rather than streaming every single attack.
*   **Stateless Logic**: Most functions are pure, taking in state and returning new state or results, making the engine highly testable and environment-agnostic (Node.js vs. Browser).
*   **Weighted Card Pool**: Implements Tavern Tier probabilities and limited card copies to simulate a shared-pool economy.

## 📂 Directory Structure

```text
src/api/
├── data/
│   └── minions.js      # Card definitions, base stats, and tier mapping
├── logic/
│   ├── combat.js       # Turn-based battle orchestrator
│   ├── damage.js       # Health reduction logic (Minion & Hero)
│   ├── network.js      # Socket.io snapshot transmission handlers
│   └── rolling.js      # The Tavern Refresh / Weighted pool logic
└── main.js             # Standalone CLI simulation entry point
```

## 🧠 Module Overview

### ⚔️ Combat (`logic/combat.js`)
Manages the battle loop. It selects attackers in order and picks random targets, applying damage via the `damage` module and pruning "dead" units from the board until a winner is determined.

### 🎲 Rolling (`logic/rolling.js`)
Handles the "Shop Phase" logic. It calculates the available pool based on the player's Tavern Tier and the number of copies available in the global deck.

### 💔 Damage (`logic/damage.js`)
Calculates both combat damage (minion-on-minion) and "End of Round" hero damage. Hero damage follows the standard formula: `(Winning Tavern Tier + Sum of Surviving Minion Tiers)`.

## 🛠 Development & Testing

### Standalone Simulation
Verify logic changes without launching the React UI by running the CLI simulation:
```bash
npm run api:test
```

### Integration
This package is defined as an NPM workspace. In the UI, you can import logic directly:
```javascript
import { resolveCombat } from '@app/api/logic/combat';
```

## 📄 Maintenance Notes
When adding new minion abilities (e.g., Divine Shield, Deathrattle), always modify `logic/damage.js` or `logic/combat.js` to ensure the logic remains centralized and deterministic.
