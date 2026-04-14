
export const MINION_DB = {
    ALLEYCAT: { id: 'ALLEYCAT', name: "Alleycat", attack: 1, health: 1, tier: 1 },
    ROCKPOOL: { id: 'ROCKPOOL', name: "Rockpool Hunter", attack: 2, health: 3, tier: 1 },
    SPAWN: { id: 'SPAWN', name: "Spawn of N'Zoth", attack: 2, health: 2, tier: 2 },
    IMP: { id: 'IMP', name: "Icky Imp", attack: 1, health: 1, tier: 1 }
};

export const createMinion = (minionKey, instanceId) => ({
    ...MINION_DB[minionKey],
    instanceId: instanceId,
    currentHealth: MINION_DB[minionKey].health
});
