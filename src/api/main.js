import { resolveCombat } from './logic/combat.js';
import { rollTavern } from './logic/rolling.js';
import { calculateHeroDamage, applyDamageToHero } from './logic/damage.js';

// Setup Hero State (Stateless for logic test)
let playerHero = { name: "Player 1", health: 40, tavernTier: 1, board: [] };
let enemyHero = { name: "A.I.", health: 40, tavernTier: 1 };

console.log(`--- INITIALIZING SIMULATION ---`);
console.log(`Player Health: ${playerHero.health}, Tavern Tier: ${playerHero.tavernTier}`);
console.log(`Enemy Health: ${enemyHero.health}, Tavern Tier: ${enemyHero.tavernTier}`);

// 1. Simulate the "Buy Phase"
console.log(`--- SHOPPING PHASE ---`);
const shopResult = rollTavern(playerHero.tavernTier, 3);
console.log(`Shop offers: ${shopResult.map(m => m.name).join(', ')}`);

if (shopResult.length > 0) {
    playerHero.board.push(shopResult[0]);
    console.log(`Bought: ${playerHero.board[0].name}`);
}

// 2. Create board snapshots for combat
const pBoard = playerHero.board.map(minion => ({ ...minion }));
const eBoard = rollTavern(enemyHero.tavernTier, 3);

console.log("--- INITIALIZING BATTLE ---");
console.log(`Player Board: [${pBoard.map(minion => `${minion.name} (${minion.attack}/${minion.currentHealth})`).join(', ')}]`);
console.log(`Enemy Board: [${eBoard.map(minion => `${minion.name} (${minion.attack}/${minion.currentHealth})`).join(', ')}]`);

resolveCombat(pBoard, eBoard).then(result => {
    console.log("FINAL RESULT: [%s]", result);

    if (result === "PLAYER_WIN") {
        const damage = calculateHeroDamage(playerHero.tavernTier, pBoard);
        enemyHero = applyDamageToHero(enemyHero, damage);
        console.log(`Enemy Hero takes ${damage} damage! Remaining Health: ${enemyHero.health}`);
    } else if (result === "ENEMY_WIN") {
        const damage = calculateHeroDamage(enemyHero.tavernTier, eBoard);
        playerHero = applyDamageToHero(playerHero, damage);
        console.log(`Player takes ${damage} damage! Remaining Health: ${playerHero.health}`);
    } else {
        console.log("It's a tie! No damage dealt.");
    }
});
