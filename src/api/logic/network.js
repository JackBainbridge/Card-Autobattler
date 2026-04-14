/**
 * src/api/logic/network.js
 * Handles the transmission of board snapshots and synchronization
 * between the client and the Socket.io server.
 */

export const emitBoardSnapshot = (socket, boardState) => {
    console.log("Syncing board state with server...");
    socket.emit('player_ready', {
        timestamp: Date.now(),
        board: boardState
    });
};

export const listenForCombatStart = (socket, onCombatStart) => {
    socket.on('start_combat', (data) => {
        console.log("Opponent snapshot received. Starting deterministic simulation...");
        /**
         * data.opponentBoard contains the JSON snapshot of the enemy's board
         * as it existed at the moment they hit "End Turn".
         */
        onCombatStart(data.opponentBoard);
    });
};