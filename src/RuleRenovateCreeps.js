const constants = require('Constants');
var CreepData = require('CreepData');
var callGame = require('CallGame');
var RulePasive_Abstract = require("RulePasive_Abstract");


module.exports  = class RuleRenovateCreeps extends RulePasive_Abstract{

    constructor() {
        super("RenovateCreeps ");
        this.limitTicks = 10;
        this.creepOld = undefined;
    }

    conditionRule(){
        var listRoleSorterForPriority = [constants.HARVESTER(),constants.MONITOR(),constants.UPGRADER(),constants.BUILDER()];

        if(this.creepOld == undefined) {
            for (var index in listRoleSorterForPriority) {
                let listCreep = callGame.findCreepersForRole(listRoleSorterForPriority[index]);

                let creepOldGame = this.existOldCreep(listCreep);
                if (creepOldGame != undefined) {
                    this.creepOld = new CreepData(creepOldGame.name,creepOldGame.memory.role);
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
            let rolOldCreep = this.creepOld.getRoleCreepData();

            let result = callGame.createCreeper(nameOldCreep,rolOldCreep);
            if (this.isCreateCreep(result)) {
                this.creepOld = undefined;
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
        if(creep.ticksToLive <= this.limitTicks){
            return true;
        }else{
            return false;
        }

    }

    isCreateCreep(result) {
        return _.isString(result);
    }
};
