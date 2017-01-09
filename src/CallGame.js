const constants = require('Constants');
const constantsGame = require('ConstantsGame');
var CreepData = require('CreepData');

class CallGame{


    constructor() {
        this.ia = undefined;

        this.firstSpawn = null;

        this.structureCreepsBasic = [[WORK, CARRY, MOVE], undefined];

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


    createCreeper(role){
        let structureCreeps = this.structureCreepsList[role];
        let nameCreep = this.getFirstSpawn().createCreep(structureCreeps[0], structureCreeps[1], {role: role});
     //   this.saveListIAcreepData(nameCreep);
        return nameCreep;
    }


    saveListIAcreepData(nameCreep){
        if(this.isCreateCreep(nameCreep)){
            let creep = Game.creeps[nameCreep];
            let creepData = new CreepData(creep.id,creep.memory.role);
            this.ia.addCreepListData(creepData);
        }
    }


    deleteCreep(creep){
        creep.suicide();
        this.cleanMemoryCreep();
    }

    cleanMemoryCreep() {
        for (var name in Memory.creeps) {
         //   console.log("creeps  en la memoria "+name);
            console.log("creeps Muertos en la memoria "+name+ "  ticks" +Game.creeps[name].ticksToLive);
            if (!Game.creeps[name]) {
                console.log("creeps Muertos en la memoria "+name+ "  ticks" +Game.creeps[name].ticksToLive);
                delete Memory.creeps[name];
            }
        }
    }

    findCreepersForRole(role){
        return _.filter(Game.creeps, (creep) => creep.memory.role == role);
    }

    isCreateCreep(name) {
        //repared
        let isNotError = _.isString(name);
        let isCreate = false;
        if(isNotError){
            isCreate = (this.ticksWithDelayPARCHE(name) != undefined);
        }


        console.log(isNotError && isCreate+" name "+name+ " TICKS1 "+this.ticksWithDelayPARCHE(name)+ " IScREATE "+isCreate+ " role "+Game.creeps[name].memory.role);

        return isNotError && isCreate;
    }


    ticksWithDelayPARCHE(name){
        let delayTicksCreeps = 10;
        if(Game.time % delayTicksCreeps == 0) {
            return Game.creeps[name].ticksToLive;
        }
    }



}
module.exports  = new CallGame();
