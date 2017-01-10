const constants = require('Constants');
var CreepData = require('CreepData');
var callGame = require('CallGame');
var Dao = require('./Dao');
var RulePasive_Abstract = require("RulePasive_Abstract");


module.exports  = class RuleRenovateCreeps extends RulePasive_Abstract{

    constructor() {
        super("RenovateCreeps ");
        this.limitTicks = 10;
        this.dao = new Dao();
        this.creepOld = this.dao.loadRenovateCreep();
    }

    conditionRule(){
        var listRoleSorterForPriority = [constants.HARVESTER(),constants.MONITOR(),constants.UPGRADER(),constants.BUILDER()];

        if(this.creepOld == undefined) {
            for (var index in listRoleSorterForPriority) {
                let listCreep = callGame.findCreepersForRole(listRoleSorterForPriority[index]);

                let creepOldGame = this.existOldCreep(listCreep);
                if (creepOldGame != undefined) {
                    let name = creepOldGame.name;
                    let role = creepOldGame.memory.role;
                    this.creepOld = new CreepData(name,role);
                    this.dao.saveRenovateCreep(creepOldGame);
                    return false;
                }
            }
        }else{
            return false;
        }

        return true;
    }

    behaviorRule() {
        if(this.creepOld != undefined) {
            let nameOldCreep = this.creepOld.getNameCreepData();
            let roleOldCreep = this.creepOld.getRoleCreepData();

            console.log("name----------------"+nameOldCreep+"---------------------");
            console.log("role----------------"+roleOldCreep+"---------------------");
            let result = callGame.createCreeper(nameOldCreep,roleOldCreep);
            if (this.isCreateCreep(result)) {
                let reset = undefined;
      //          this.creepOld = reset;
        //        this.dao.saveRenovateCreep(reset);
            }
            console.log(result+" Revivido");
        }
    }

    existOldCreep(listCreep){
        for(var index in listCreep){
            let creep = listCreep[index];
            if(this.isCreepOld(creep)){
                return creep;
            }
        }
        return undefined;
    }

    isCreepOld(creep){
        return (creep.ticksToLive <= this.limitTicks);
    }

    isCreateCreep(result) {
        return _.isString(result);
    }
};
