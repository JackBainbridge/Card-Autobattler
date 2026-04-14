import { resolveCombat } from './api/logic/combat.js';
import { rollTavern } from './api/logic/rolling.js';
import { calculateHeroDamage, applyDamageToHero } from './api/logic/damage.js';

// Setup Hero State
let playerHero = { name: "Player 1", health: 40, tavernTier: 1 };
let enemyHero = { name: "A.I.", health: 40, tavernTier: 1 };

// Simulate the "Buy Phase" using the rolling logic
const pBoard = rollTavern(playerHero.tavernTier, 3);
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
        console.log(`Player Hero takes ${damage} damage! Remaining Health: ${playerHero.health}`);
    } else {
        console.log("It's a tie! No damage dealt.");
    }
});
