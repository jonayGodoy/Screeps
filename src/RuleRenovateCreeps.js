const constants = require('Constants');
var CreepData = require('CreepData');
var callGame = require('CallGame');
var Dao = require('./Dao');
var Rule_Abstract = require("Rule_Abstract");


module.exports  = class RuleRenovateCreeps extends Rule_Abstract{

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
            let nameOldCreep = this.creepOld.getNameCreepData();
            let roleOldCreep = this.creepOld.getRoleCreepData();

            let result = callGame.createCreeper(nameOldCreep,roleOldCreep);
          //  console.log(result+" Revivido");
            if (this.isCreateCreep(result)) {
                let reset = undefined;
                this.creepOld = reset;
                this.dao.saveRenovateCreep(reset);
            }

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
