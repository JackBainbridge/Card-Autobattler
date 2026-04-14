
/**
 * BGS ROLLING LOGIC
 * Handles the weighted selection of cards from the 50-card pool
 * based on the current Tavern Tier.
 */
import { MINION_DB } from '../data/minions.js';

const POOL_CONFIG = {
    1: { copiesPerCard: 18 },
    2: { copiesPerCard: 15 },
    3: { copiesPerCard: 13 }
};

/**
 * Simulates a "Roll" (Tavern Refresh)
 * @param {number} currentTier - Player's current Tavern Tier
 * @param {number} slots - How many cards appear in the shop
 */
export const rollTavern = (currentTier, slots = 3) => {
    let activePool = [];
    
    Object.values(MINION_DB).forEach(minion => {
        const config = POOL_CONFIG[minion.tier];
        if (minion.tier <= currentTier && config) {
            const copies = config.copiesPerCard;
            for (let i = 0; i < copies; i++) {
                activePool.push({ ...minion });
            }
        }
    });

    const shopResult = [];
    for (let i = 0; i < slots; i++) {
        if (activePool.length === 0) break;
        const randomIndex = Math.floor(Math.random() * activePool.length);
        const selected = activePool.splice(randomIndex, 1)[0];
        
        shopResult.push({
            ...selected,
            instanceId: `shop-${Math.random().toString(36).slice(2, 11)}`,
            currentHealth: selected.health,
            maxHealth: selected.health
        });
    }

    return shopResult;
};