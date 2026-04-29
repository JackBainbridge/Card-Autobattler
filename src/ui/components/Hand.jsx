import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { Card } from './Card';

export const Hand = () => {
  const { hand, playMinion } = useGameStore();

  return (
    <div className="hand-container" style={{ marginTop: '20px' }}>
      <h3>Your Hand</h3>
      <div className="hand-slots" style={{ display: 'flex', gap: '10px' }}>
        {hand.map((minion) => (
          <Card key={minion.instanceId} minion={minion} onClick={playMinion} actionLabel="Play" />
        ))}
      </div>
    </div>
  );
};