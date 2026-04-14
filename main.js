
import { createMinion } from './minions.js';
import { resolveCombat } from './combat.js';

const pBoard = [
    createMinion('ROCKPOOL', 'p1'),
    createMinion('ALLEYCAT', 'p2')
];

const eBoard = [
    createMinion('SPAWN', 'e1'),
    createMinion('IMP', 'e2')
];

console.log("--- INITIALIZING BATTLE ---");
resolveCombat(pBoard, eBoard).then(result => {
    console.log("FINAL RESULT: [%s]", result);
});
