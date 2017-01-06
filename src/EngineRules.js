const constants = require('Constants');
var RuleHarverster = require('./RuleHarverster');
var RuleUpgrader = require('./RuleUpgrader');
var RuleBuildExtension = require('./RuleBuildExtension');


var engineRules = class EngineRules{
    constructor() {
        //incidencia ordenadas por prioridad
        let firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }

        this.rulesList = [
            new RuleHarverster(),
            new RuleUpgrader(),
            new RuleBuildExtension()

        ];
        //incidencia no save name
        if (firstSpawn.room.memory.stateIA != null || firstSpawn.room.memory.stateIA != undefined){
            this.rulesList = firstSpawn.room.memory.stateIA;
            for(var number in  this.rulesList){
                let rule = this.rulesList[number];
                rule.done = firstSpawn.room.memory.stateIA[number].done
            }
        }

    }

    update(){
        let done = true;
        for(var number in  this.rulesList){
            let rule = this.rulesList[number];
            if (done) {
                done = rule.execute();
                if(!done){
                    console.log("executing rule: "+rule.getNameRule());
                }
            }
        }



        let firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }
        firstSpawn.room.memory.stateIA = this.rulesList ;

    }


}

module.exports = engineRules;