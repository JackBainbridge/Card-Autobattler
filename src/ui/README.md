# UI Workspace (@app/ui)

This workspace contains the React-based frontend for the BGS Auto-Battler, powered by Vite.

## 🚀 Getting Started

To run the UI in development mode, execute the following from the project root:

```bash
npm install
npm run dev
```

## 📂 Directory Structure

*   `src/`: Contains React components, hooks, and the Zustand store.
*   `public/`: Static assets (images, sounds).
*   `index.html`: The entry point for the Vite build pipeline.

## 📡 API Integration

This workspace imports deterministic game logic from the sibling `@app/api` workspace.