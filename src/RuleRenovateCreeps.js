const constants = require('Constants');
const constantsGame = require('ConstantsGame');
var callGame = require('CallGame');
var RulePasive_Abstract = require("RulePasive_Abstract");


module.exports  = class RuleRenovateCreeps extends RulePasive_Abstract{

    constructor() {
        super("RenovateCreeps ");
        this.limitTicks = 200;
        this.creepOld = undefined;
    }

    conditionRule(){
        var listRoleSorterForPriority = [constants.HARVESTER(),constants.MONITOR(),constants.UPGRADER(),constants.BUILDER()];

        if(this.creepOld != undefined) {
            for (var index in listRoleSorterForPriority) {
                let listCreep = callGame.findCreepersForRole(listRoleSorterForPriority[index]);
                if (this.existOldCreep(listCreep)) {
                    return true;
                }
            }
        }else{
            return true;
        }
        return false;
    }


    behaviorRule() {
        if(this.creepOld != undefined) {
            let result = callGame.createCreeper(this.creepOld.memory.role);

            if (this.isCreateCreep(result)) {
                callGame.deleteCreep(this.creepOld);
                this.creepOld = undefined;
            } else {
                return constantsGame.getErrorCreateCreeps(result);
            }
        }
    }

    existOldCreep(listCreep){
        for(var index in listCreep){
            let creep = listCreep[index];
            if(this.isCreepOld(creep)){
                this.creepOld;
            }

        }
    }

    isCreepOld(creep){
        if(creep.ticksToLive <= this.limitTicks()){
            return true;
        }else{
            return false;
        }

    }

    isCreateCreep(result) {
        return _.isString(result);
    }
};
