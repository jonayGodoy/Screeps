var callGame = require('CallGame');
var CreepData = require('CreepData');
module.exports = class Dao{

    saveRenovateCreep(oldCreep){
        callGame.getFirstSpawn().room.memory.RenovatingCreep = oldCreep;
    }

    loadRenovateCreep(){
        let firstSpawn = callGame.getFirstSpawn();

        if (firstSpawn.room.memory.RenovatingCreep != undefined ) {
                let creepOldMemory = firstSpawn.room.memory.RenovatingCreep;
                return new CreepData(creepOldMemory.name,creepOldMemory.role);
            }
            return undefined;
        }



    saveRuleListActive(rulesListActivesSortedByPriority) {
        callGame.getFirstSpawn().room.memory.stateIARuleActive = rulesListActivesSortedByPriority;
    }


    loadRuleListActives(ruleList) {
        let firstSpawn = callGame.getFirstSpawn();

        if (firstSpawn.room.memory.stateIARuleActive != undefined ) {
            for (var index in  ruleList) {
                let rule = ruleList[index];
                rule.setDone(firstSpawn.room.memory.stateIARuleActive[index].done);
            }
        }
    }

}

