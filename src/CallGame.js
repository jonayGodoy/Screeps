const constants = require('Constants');
const constantsGame = require('ConstantsGame');
var CreepData = require('CreepData');

class CallGame{


    constructor() {
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


    findCreepersForRole(role){
        return _.filter(Game.creeps, (creep) => creep.memory.role == role);
    }

    /*
    isCreateCreep(name) {
        return _.isString(name);
    }*/


    getTimeTicks(){
        return Game.time;
    }
}
module.exports  = new CallGame();
