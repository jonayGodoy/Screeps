const constants = require('Constants');
class CallGame{


    constructor() {
        this.firstSpawn = null;

        this.structureCreepsBasic = [[WORK, CARRY, MOVE], undefined];

        this.structureCreepsList = [];
        this.structureCreepsList[constants.HARVESTER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.UPGRADER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.BUILDER()] = this.structureCreepsBasic;


    }

    getFirstSpawn(){
        if( this.firstSpawn == null || this.firstSpawn == undefined){
            var firstSpawn;
            for(var name in Game.spawns) {
                firstSpawn = Game.spawns[name];
                this.firstSpawn = firstSpawn;
                return this.firstSpawn;
            }
        }else{
                return this.firstSpawn;
        }

    }

    getFirstRoom(){
        return this.firstSpawn.room;
    }



    createCreeper(role){
        let structureCreeps = this.structureCreepsList[role];
        /*let info =*/ this.getFirstSpawn().createCreep(structureCreeps[0], structureCreeps[1], {role: role});
    }

    findCreepersForRole(role){
        return _.filter(Game.creeps, (creep) => creep.memory.role == role);
    }


}
module.exports  = new CallGame();
