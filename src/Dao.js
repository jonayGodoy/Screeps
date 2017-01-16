var callGame = require('CallGame');
var CreepData = require('CreepData');
const constants = require('Constants');
module.exports = class Dao{

    saveRenovateCreep(oldCreep){
       if(oldCreep != undefined) {
           callGame.getFirstSpawn().room.memory.RenovatingCreep = new CreepData(oldCreep.name,oldCreep.memory.role);
       }else{
           delete callGame.getFirstSpawn().room.memory.RenovatingCreep;
       }

    }

    loadRenovateCreep(){
        let firstSpawn = callGame.getFirstSpawn();

        if ((firstSpawn.room.memory.RenovatingCreep  != undefined)) {
                let creepOldMemory = firstSpawn.room.memory.RenovatingCreep;
            //    console.log("memory----------------"+creepOldMemory+"---------------------");
            //    console.log("name----------------"+creepOldMemory.name+"---------------------");
             //   console.log("role----------------"+creepOldMemory.role+"---------------------");
                return new CreepData(creepOldMemory.name,creepOldMemory.role);
        }else{
            return undefined;
        }
    }



    saveRuleListActive(rulesListActivesSortedByPriority) {
        callGame.getFirstSpawn().room.memory.stateIARuleActive = rulesListActivesSortedByPriority;
    }


    loadRuleListActives(ruleList) {
        let firstSpawn = callGame.getFirstSpawn();
        if (firstSpawn.room.memory.stateIARuleActive != undefined ) {
            for (var index in  ruleList) {
                let state = (firstSpawn.room.memory.stateIARuleActive[index])[constants.RULE_ACTIVE_STATE];
                (ruleList[index])[constants.RULE_ACTIVE_STATE] = state;
            }
        }
    }

}

