import React, { useEffect } from 'react';
import { useGameStore } from './store/useGameStore';
import { Tavern } from './components/Tavern';
import { Board } from './components/Board';
import { Hand } from './components/Hand';

function App() {
  const { playerHealth, gold, gameState, setGameState, refreshShop } = useGameStore();

  // Handle the initial game launch sequence
  useEffect(() => {
    if (gameState === 'LOADING') {
      const timer = setTimeout(() => {
        refreshShop(); // Roll the first set of minions
        setGameState('ROLLING'); // Enter the Tavern phase
      }, 2500); // 2.5 second loading animation
      return () => clearTimeout(timer);
    }
  }, [gameState, setGameState, refreshShop]);

  if (gameState === 'LOADING') {
    return (
      <div style={{ 
        backgroundColor: '#1a1a1a', 
        color: 'white', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.1); opacity: 1; }
              100% { transform: scale(1); opacity: 0.8; }
            }
            .loading-text {
              animation: pulse 1.5s infinite ease-in-out;
              font-family: 'Georgia', serif;
              font-style: italic;
              color: #f1c40f;
            }
          `}
        </style>
        <h2 className="loading-text">Bob is preparing the Tavern...</h2>
        <p style={{ color: '#888', marginTop: '10px' }}>Gathering minions from across Azeroth</p>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      {/* Header / HUD */}
      <header style={{ padding: '10px 20px', background: '#2c3e50', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>BGS Prototype</h2>
        <div>
          <span style={{ marginRight: '20px' }}>❤️ Health: {playerHealth}</span>
          <span style={{ color: '#f1c40f', fontWeight: 'bold' }}>🪙 Gold: {gold}</span>
        </div>
      </header>

      {/* Main Game Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Tavern />
        <Board />
        <Hand />
      </div>
    </div>
  );
}

export default App;