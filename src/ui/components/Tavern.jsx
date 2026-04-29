import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { Card } from './Card';

export const Tavern = () => {
  const { shop, refreshShop, buyMinion, gold } = useGameStore();

  return (
    <div className="tavern-container" style={{ 
      padding: '20px', 
      borderBottom: '2px solid #555', 
      background: '#34495e',
      minHeight: '250px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <h3>Bob's Tavern</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: '#f1c40f', fontWeight: 'bold', fontSize: '1.2rem' }}>💰 {gold} Gold</span>
          <button 
            onClick={refreshShop} 
            disabled={gold < 1}
            style={{ padding: '10px 20px', cursor: gold >= 1 ? 'pointer' : 'not-allowed' }}
          >
            Refresh (1 Gold)
          </button>
        </div>
      </div>
      <div className="shop-slots" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {shop.map((minion) => (
          <Card key={minion.instanceId} minion={minion} onClick={buyMinion} actionLabel="Buy" />
        ))}
        {shop.length === 0 && <p>Tavern is empty. Roll to find minions!</p>}
      </div>
    </div>
  );
};