import React from 'react';
import { useGameStore } from '../store/useGameStore';
import { Card } from './Card';

export const Board = () => {
  const { board, sellMinion } = useGameStore();

  return (
    <div className="board-container" style={{ margin: '20px 0', minHeight: '150px', background: '#f0f0f0' }}>
      <h3>Your Board</h3>
      <div className="board-slots" style={{ display: 'flex', gap: '10px' }}>
        {board.map((minion) => (
          <Card key={minion.instanceId} minion={minion} onClick={() => sellMinion(minion.instanceId)} actionLabel="Sell" />
        ))}
      </div>
    </div>
  );
};