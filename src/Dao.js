var callGame = require('CallGame');
module.exports = class Dao{

    saveListCreepData(rulesListCreepData){
        callGame.getFirstSpawn().room.memory.stateIAListCreepData = rulesListCreepData;
    }


    loadListCreepData(listCreepData){
        let firstSpawn = callGame.getFirstSpawn();
        console.log("llamada load "+firstSpawn.room.memory.stateIAListCreepData);

        if (firstSpawn.room.memory.stateIAListCreepData != undefined ) {
             listCreepData = firstSpawn.room.memory.stateIAListCreepData;
        }
        return listCreepData;
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

