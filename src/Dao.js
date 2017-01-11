var callGame = require('CallGame');
var CreepData = require('CreepData');
module.exports = class Dao{

    saveRenovateCreep(oldCreep){
        console.log("--------------Por Guardar---------");
       if(oldCreep != undefined) {
           let arraySaveOldCreep = [];
           arraySaveOldCreep["name"] = oldCreep.name;
           arraySaveOldCreep["role"] = oldCreep.memory.role;
           callGame.getFirstSpawn().room.memory.RenovatingCreep = arraySaveOldCreep;
           console.log("--------------Guardado---------");
       }else{
           delete callGame.getFirstSpawn().room.memory.RenovatingCreep;
       }

    }

    loadRenovateCreep(){
        let firstSpawn = callGame.getFirstSpawn();

        if ((firstSpawn.room.memory.RenovatingCreep  != undefined)) {

                let creepOldMemory = firstSpawn.room.memory.RenovatingCreep;
                console.log("memory----------------"+creepOldMemory+"---------------------");
                console.log("name----------------"+creepOldMemory.name+"---------------------");
                console.log("role----------------"+creepOldMemory.role+"---------------------");


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
                let rule = ruleList[index];
                rule.setDone(firstSpawn.room.memory.stateIARuleActive[index].done);
            }
        }
    }

}

