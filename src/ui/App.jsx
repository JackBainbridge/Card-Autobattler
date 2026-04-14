import React from 'react';
import { useGameStore } from './store/useGameStore';

function App() {
  const { playerHealth, gold, gameState } = useGameStore();

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <h1>BGS Auto-Battler Prototype</h1>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #444', borderRadius: '8px' }}>
        <p>Current Phase: <strong>{gameState}</strong></p>
        <p>❤️ Health: {playerHealth} | 🪙 Gold: {gold}</p>
      </div>
    </div>
  );
}

export default App;