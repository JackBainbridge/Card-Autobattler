import { create } from 'zustand';
import { GAME_SETTINGS } from '../../api/data/minions.js';
import { Hero } from '../../api/data/heroes.js';

export const useGameStore = create((set) => ({
  gameState: 'ROLLING', // 'ROLLING', 'READY', 'COMBAT'
  playerName: 'Player 1',
  playerHealth: Hero.INITIAL_HEALTH,
  gold: GAME_SETTINGS.INITIAL_GOLD,
  tavernTier: Hero.INITIAL_TAVERN_TIER,
  board: [],
  hand: [],
  opponentSnapshot: null,

  // Actions
  buyMinion: (minion) => set((state) => {
    if (!minion) return state;
    // Cost of minion is defined in GAME_SETTINGS
    if (state.gold >= GAME_SETTINGS.MINION_COST && state.board.length < GAME_SETTINGS.MAX_BOARD_SIZE) {
      return {
        gold: state.gold - GAME_SETTINGS.MINION_COST,
        board: [...state.board, minion]
      };
    }
    return state;
  }),

  sellMinion: (instanceId) => set((state) => ({
    gold: state.gold + GAME_SETTINGS.SELL_REWARD,
    board: state.board.filter(m => m.instanceId !== instanceId)
  })),

  readyUp: () => set({ gameState: 'READY' }),
  
  takeDamage: (amount) => set((state) => ({ playerHealth: Math.max(0, state.playerHealth - amount) })),
}));