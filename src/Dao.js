var callGame = require('CallGame');
var CreepData = require('CreepData');
module.exports = class Dao{

    saveListCreepData(rulesListCreepData){
        callGame.getFirstSpawn().room.memory.stateIAListCreepData = rulesListCreepData;
    }


    loadListCreepData(){
        console.log("llamada al load");
        let firstSpawn = callGame.getFirstSpawn();
        let newRuleListCreepData = [];

        if (firstSpawn.room.memory.stateIARuleActive != undefined ) {
            for (var index in  firstSpawn.room.memory.stateIARuleActive) {
                let fakeCreepData = firstSpawn.room.memory.stateIARuleActive[index];
                let creepData = new CreepData(fakeCreepData.id,fakeCreepData.role);
                newRuleListCreepData.push(creepData);
            }
            return newRuleListCreepData;
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

