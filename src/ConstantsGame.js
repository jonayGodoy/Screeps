class ConstantsGame {

    constructor() {
        this.listPartsCreep = [];
        this.listPartsCreep[MOVE] = [50, "Decreases fatigue by 2 points per tick."];
        this.listPartsCreep[CARRY] = [50, "Decreases fatigue by 2 points per tick."];
        this.listPartsCreep[WORK] = [100, "it can use the methods harvest (), build (), repair, dismantle () and upgradeController ()" +
        "and improvement methods "];
    }

    getCostPartCreep(part){
       return (this.listPartsCreep[part])[0];
    }

    getInfoPartCreep(part){
        return (this.listPartsCreep[part])[1];
    }


};

module.exports  = new ConstantsGame();
