import { create } from 'zustand';

export const useGameStore = create((set) => ({
  gameState: 'ROLLING', // 'ROLLING', 'READY', 'COMBAT'
  playerName: 'Player 1',
  playerHealth: 40,
  gold: 3,
  tavernTier: 1,
  board: [],
  hand: [],
  opponentSnapshot: null,

  // Actions
  buyMinion: (minion) => set((state) => {
    if (!minion) return state;
    // Cost of minion is fixed at 3 gold per BGS rules
    if (state.gold >= 3 && state.board.length < 7) {
      return {
        gold: state.gold - 3,
        board: [...state.board, minion]
      };
    }
    return state;
  }),

  sellMinion: (instanceId) => set((state) => ({
    gold: state.gold + 1,
    board: state.board.filter(m => m.instanceId !== instanceId)
  })),

  readyUp: () => set({ gameState: 'READY' }),
  
  takeDamage: (amount) => set((state) => ({ playerHealth: Math.max(0, state.playerHealth - amount) })),
}));