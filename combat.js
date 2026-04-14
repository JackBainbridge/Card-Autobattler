
export const simulateAttack = (attacker, defender) => {
    console.log(` -> ${attacker.name} hits ${defender.name}`);
    defender.currentHealth -= attacker.attack;
    attacker.currentHealth -= defender.attack;
    return { attacker, defender };
};

export const resolveCombat = async (playerBoard, enemyBoard) => {
    let pIdx = 0;
    let eIdx = 0;
    let isPlayerTurn = true;

    while (playerBoard.length > 0 && enemyBoard.length > 0) {
        const attackerBoard = isPlayerTurn ? playerBoard : enemyBoard;
        const defenderBoard = isPlayerTurn ? enemyBoard : playerBoard;
        const idx = isPlayerTurn ? pIdx : eIdx;

        const attacker = attackerBoard[idx % attackerBoard.length];
        const defender = defenderBoard[Math.floor(Math.random() * defenderBoard.length)];

        simulateAttack(attacker, defender);

        // Remove dead
        if (attacker.currentHealth <= 0) {
            attackerBoard.splice(attackerBoard.indexOf(attacker), 1);
        } else {
            if (isPlayerTurn) pIdx++; else eIdx++;
        }

        if (defender.currentHealth <= 0) {
            defenderBoard.splice(defenderBoard.indexOf(defender), 1);
        }

        isPlayerTurn = !isPlayerTurn;
        await new Promise(r => setTimeout(r, 200));
    }

    return playerBoard.length > 0 ? "PLAYER_WIN" : enemyBoard.length > 0 ? "ENEMY_WIN" : "TIE";
};
