# BGS Knock-off: Browser-Based Auto-Battler

A modular, scalable foundation for building a browser-based auto-battler inspired by Hearthstone Battlegrounds.

## 🗺️ Project Roadmap (SDLC)
| Phase | Task | Status |
| :--- | :--- | :--- |
| **1. Logic** | Core Combat Engine & Card DB | ✅ Complete |
| **2. State** | Zustand Store Implementation | 🕒 Next Up |
| **3. UI** | React Component Library (Cards/Board) | 📅 Planned |
| **4. Motion** | Framer Motion Combat Animations | 📅 Planned |
| **5. Polish** | Sound Effects & Particle Systems | 📅 Planned |

## 🚀 The Tech Stack (The "Path of Least Resistance")

* **Framework:** **React.js** (Perfect for card-in-container logic)
* **Drag & Drop:** **`dnd-kit`** (Handles buying and positioning)
* **State Management:** **`Zustand`** (Lightweight global state for gold/health)
* **Animations:** **`Framer Motion`** (The "Secret Sauce" for combat bumps)

## 🏗️ Project Architecture

```text
/project-root
├── /src
│   ├── /data
│   │   └── minions.js   # Card Database
│   ├── /logic
│   │   └── combat.js    # Combat Engine
│   │   └── rolling.js   # Shop Phase / Card Rolling
│   └── main.js          # Entry Point
└── package.json         # Config
```

## 🛠️ How to Run & Debug

Refer to [Setup Guide](/mnt/c/Development/Projects/Card_AutoBattler/docs/Setup_Guide.pdf)
#### Running the Logic 
To see the combat simulation in your terminal: ```node src/main.js```

#### Debugging in VS Code
Open ```src/main.js.```

Set a Breakpoint by clicking the margin to the left of a line number (a red dot will appear).

Press F5 or go to Run and Debug in the sidebar and select Node.js.

The execution will pause at your breakpoint, allowing you to inspect variables like pBoard and eBoard in the Variables pane.

### 📄License
This project is licensed under the MIT License. You are free to use, modify, and distribute this software for personal or commercial projects.

Disclaimer: This is a fan-made project for educational purposes. "Hearthstone" is a trademark of Blizzard Entertainment.