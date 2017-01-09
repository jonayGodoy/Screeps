const constants = require('Constants');
const constantsGame = require('ConstantsGame');
var CreepData = require('CreepData');
module.exports  = class CallGame{

    constructor(ia) {
        this.ia = ia;
        this.firstSpawn = null;

        this.structureCreepsBasic = [[WORK, CARRY, MOVE], undefined];

        this.structureCreepsList = [];
        this.structureCreepsList[constants.HARVESTER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.UPGRADER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.BUILDER()] = this.structureCreepsBasic;
        this.structureCreepsList[constants.MONITOR()] = this.structureCreepsBasic;


    }

    static getCreeps(){
        return Game.creeps;
    }

    static calculateCostCreep(partsCreep){
        let costTotal = 0;
        for(var index in partsCreep){
            costTotal = costTotal + constantsGame.getCostPartCreep(partsCreep[index]);
        }

        return costTotal;
    }

    static getFirstSpawn(){
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


    static createCreeper(role){
        let structureCreeps = this.structureCreepsList[role];
        return this.getFirstSpawn().createCreep(structureCreeps[0], structureCreeps[1], {role: role});
    }


    static saveListIAcreepData(nameCreep){
        let creep = Game.creeps[nameCreep];
        let creepData = new CreepData(creep.id,creep.memory.role);
        this.ia.addCreepListData(creepData);
    }


    static deleteCreep(creep){
        creep.suicide();
        this.cleanMemoryCreep();
    }

    cleanMemoryCreep() {
        for (var name in Memory.creeps) {
         //   console.log("creeps  en la memoria "+name);
            if (!Game.creeps[name]) {
                console.log("creeps Muertos en la memoria "+name);
                delete Memory.creeps[name];
            }
        }
    }

    static findCreepersForRole(role){
        return _.filter(Game.creeps, (creep) => creep.memory.role == role);
    }


}

