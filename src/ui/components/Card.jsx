import React from 'react';

export const Card = ({ minion, onClick, actionLabel }) => {
  if (!minion) return null;

  // Map IDs to specific placeholder colors or themes
  const cardColors = {
    ALLEYCAT: '#a67c52',
    ROCKPOOL: '#4a90e2',
    SPAWN: '#9b59b6',
    IMP: '#e74c3c'
  };

  return (
    <div 
      className="card-ui" 
      style={{ 
        border: '3px solid #444', 
        borderRadius: '10px',
        padding: '5px', 
        width: '120px', 
        height: '160px',
        textAlign: 'center',
        position: 'relative',
        background: '#2c3e50',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>{minion.name}</div>
      
      <div className="portrait" style={{ 
        height: '60px', 
        background: cardColors[minion.id] || '#7f8c8d',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}>
        {minion.id === 'ALLEYCAT' && '🐱'}
        {minion.id === 'ROCKPOOL' && '🐟'}
        {minion.id === 'SPAWN' && '🦑'}
        {minion.id === 'IMP' && '😈'}
      </div>

      <div style={{ fontSize: '0.7rem' }}>Tier {minion.tier}</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
        <div style={{ 
          background: 'yellow', color: 'black', borderRadius: '50%', width: '25px', height: '25px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' 
        }}>
          {minion.attack}
        </div>
        <div style={{ 
          background: 'red', color: 'white', borderRadius: '50%', width: '25px', height: '25px', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' 
        }}>
          {minion.currentHealth}
        </div>
      </div>

      {onClick && (
        <button 
          onClick={(e) => { e.stopPropagation(); onClick(minion); }}
          style={{ marginTop: '5px', fontSize: '0.7rem', cursor: 'pointer' }}
        >
          {actionLabel || 'Select'}
        </button>
      )}
    </div>
  );
};