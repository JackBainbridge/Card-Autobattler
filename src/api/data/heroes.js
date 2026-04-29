class Hero {
    static INITIAL_HEALTH = 40;
    static INITIAL_TAVERN_TIER = 1;
    static INITIAL_ARMOUR = 0;

    constructor(name, 
                health = Hero.INITIAL_HEALTH, 
                tavernTier = Hero.INITIAL_TAVERN_TIER, 
                armour = Hero.INITIAL_ARMOUR) {
        this.name = name;
        this.health = health;
        this.tavernTier = tavernTier;
        this.armour = armour;
        this.board = [];
    }
}

export { Hero };