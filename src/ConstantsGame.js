class ConstantsGame {

    /*
     var SizeEnum = {
     SMALL: 1 ,
     MEDIUM: 2 ,
     LARGE: 3 ,
     properties: {
     1: {name: "small" , value: 1 , code: "S" },
     2: {name: "medium" , value: 2 , code: "M" },
     3: {name: "large" , value: 3 , code: "L" }
     }
     };
     */


    constructor() {
        this.listPartsCreep = [];
        this.listPartsCreep[MOVE] = [50, "Decreases fatigue by 2 points per tick and affect velocity"];
        this.listPartsCreep[CARRY] = [50, "Decreases fatigue by 2 points per tick."];
        this.listPartsCreep[WORK] = [100, "it can use the methods harvest (), build (), repair, dismantle () and upgradeController ()" +
        "and improvement methods "];

        this.listReturnCreateCreeps = [];
        this.listReturnCreateCreeps[-1] = "ERR_NOT_OWNER";
        this.listReturnCreateCreeps[-3] = "ERR_NAME_EXISTS";
        this.listReturnCreateCreeps[-4] = "ERR_BUSY";
        this.listReturnCreateCreeps[-6] = "ERR_NOT_ENOUGH_ENERGY";
        this.listReturnCreateCreeps[-10] = "ERR_INVALID_ARGS";
        this.listReturnCreateCreeps[-14] = "ERR_RCL_NOT_ENOUGH";

    }

    getCostPartCreep(part){
       return (this.listPartsCreep[part])[0];
    }

    getErrorCreateCreeps(index){
        return this.listReturnCreateCreeps[index];
    }


};

module.exports  = new ConstantsGame();
