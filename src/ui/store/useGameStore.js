import { create } from 'zustand';
import { GAME_SETTINGS } from '../../api/data/minions.js';
import { Hero } from '../../api/data/heroes.js';
import { rollTavern } from '../../api/logic/rolling.js';

export const useGameStore = create((set) => ({
  gameState:   'LOADING', // 'LOADING', 'ROLLING', 'READY', 'COMBAT'
  playerName:  'Player 1',
  playerHealth: Hero.INITIAL_HEALTH,
  gold:         Hero.INITIAL_GOLD,
  tavernTier:   Hero.INITIAL_TAVERN_TIER,
  board: [],
  hand: [],
  shop: [],
  opponentSnapshot: null,

  // Actions
  refreshShop: () => set((state) => ({
    shop: rollTavern(state.tavernTier),
    gold: Math.max(0, state.gold - 1)
  })),

  buyMinion: (minion) => set((state) => {
    if (!minion) return state;
    const MAX_HAND_SIZE = 10;
    // Cost of minion is defined in GAME_SETTINGS
    if (state.gold >= GAME_SETTINGS.MINION_COST && state.hand.length < MAX_HAND_SIZE) {
      return {
        gold: state.gold - GAME_SETTINGS.MINION_COST,
        hand: [...state.hand, minion],
        shop: state.shop.filter(m => m.instanceId !== minion.instanceId)
      };
    }
    return state;
  }),

  playMinion: (minion) => set((state) => {
    if (state.board.length < GAME_SETTINGS.MAX_BOARD_SIZE) {
      return {
        board: [...state.board, minion],
        hand: state.hand.filter(m => m.instanceId !== minion.instanceId)
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

  setGameState: (newState) => set({ gameState: newState }),
}));