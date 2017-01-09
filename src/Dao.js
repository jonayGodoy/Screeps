var callGame = require('CallGame');
module.exports = class Dao{

    saveListCreepData(rulesListCreepData){
        callGame.getFirstSpawn().room.memory.stateIAListCreepData = rulesListCreepData;
    }


    loadListCreepData(){
        console.log("llamada load "+firstSpawn.room.memory.stateIAListCreepData.toString());
        let firstSpawn = callGame.getFirstSpawn();

        if (firstSpawn.room.memory.stateIAListCreepData != undefined ) {
            return firstSpawn.room.memory.stateIAListCreepData;
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

