const constants = require('Constants');
const constantsGame = require('ConstantsGame');
var CreepData = require('CreepData');

class CallGame{


    constructor() {
        this.ia = undefined;

        this.firstSpawn = null;

        this.structureCreepsBasic = [[WORK, CARRY, MOVE]];

        this.structureCreepsList = [];
        this.structureCreepsList[constants.HARVESTER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.UPGRADER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.BUILDER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.MONITOR()] = this.structureCreepsBasic;

    }

    getCreeps(){
        return Game.creeps;
    }

    setIa(ia){
        this.ia = ia;
    }


    calculateCostCreep(partsCreep){
        let costTotal = 0;
        for(var index in partsCreep){
            costTotal = costTotal + constantsGame.getCostPartCreep(partsCreep[index]);
        }

        return costTotal;
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


    createCreeper(name, role){
        let structureCreeps = this.structureCreepsList[role];
        let nameCreep = this.getFirstSpawn().createCreep(structureCreeps[0], name, {role: role});
        return nameCreep;
    }



    deleteCreep(creep){
        let nameCreep = creep.name;
        creep.suicide();

        let memoryAux = Memory.creeps;
       // memoryAux.creeps.splice(nameCreep, 1);
        for(var memory in memory){
            console.log(memory);
        }
       delete Memory.creeps;
        Memory.creeps = memoryAux;

          //  console.log(field);

    }


    findCreepersForRole(role){
        return _.filter(Game.creeps, (creep) => creep.memory.role == role);
    }

    isCreateCreep(name) {
        return _.isString(name);
    }


}
module.exports  = new CallGame();
