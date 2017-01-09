var callGame = require('CallGame');
module.exports = class Dao{

    saveListCreepData(rulesListCreepData){
        callGame.getFirstSpawn().room.memory.stateIAListCreepData = rulesListCreepData;
    }


    loadListCreepData(rulesListCreepData){
        console.log("llamada load");
        let firstSpawn = callGame.getFirstSpawn();

        if (firstSpawn.room.memory.stateIAListCreepData != undefined ) {
            rulesListCreepData = firstSpawn.room.memory.stateIAListCreepData;
        }
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

