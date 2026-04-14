/**
 * src/logic/damage.js
 * Handles the calculation and application of damage for both 
 * combat (minion vs minion) and end-of-round (hero damage).
 */

/**
 * Calculates the total damage dealt to the losing hero.
 * Formula: Tavern Tier + Sum of Tiers of all surviving minions.
 * @param {number} tavernTier - The winning player's current tavern tier.
 * @param {Array} survivingMinions - The array of minions left on the winner's board.
 * @returns {number} The total damage to be dealt.
 */
export const calculateHeroDamage = (tavernTier, survivingMinions) => {
    const minionDamage = survivingMinions.reduce((sum, minion) => sum + (minion.tier || 1), 0);
    return tavernTier + minionDamage;
};

/**
 * Applies damage to a hero's health.
 * @param {object} hero - The hero object { health: number, ... }
 * @param {number} damage - The amount of damage to subtract.
 * @returns {object} The updated hero object.
 */
export const applyDamageToHero = (hero, damage) => {
    return {
        ...hero,
        health: Math.max(0, hero.health - damage)
    };
};

/**
 * Core function for minion-on-minion damage.
 * Note: This updates the objects by reference for combat simulation.
 * @param {object} attacker 
 * @param {object} defender 
 */
export const dealCombatDamage = (attacker, defender) => {
    // Check for Divine Shield or other modifiers here in the future
    defender.currentHealth -= attacker.attack;
    attacker.currentHealth -= defender.attack;
};

/**
 * Checks if a unit is "dead" (Health <= 0).
 * @param {object} unit 
 * @returns {boolean}
 */
export const isDead = (unit) => {
    return unit.currentHealth <= 0;
};