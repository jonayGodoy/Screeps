const constants = require('Constants');
class CallGame{


    constructor() {
        this.structureCreepsBasic =new Array[[WORK, CARRY, MOVE], undefined];

        this.structureCreepsList = [];
        this.structureCreepsList[constants.HARVESTER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.UPGRADER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.BUILDER()] = this.structureCreepsBasic;


    }

    getFirstSpawn(){
        var firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }
        return firstSpawn;
    }

    createCreeper(role){
        let structureCreeps = this.structureCreepsList[role];
        let info = this.getFirstSpawn().createCreep(structureCreeps[0], structureCreeps[1], {role: role});
    }




}
