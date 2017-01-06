const constants = require('Constants');
var RuleHarverster = require('./RuleHarverster');
var RuleUpgrader = require('./RuleUpgrader');
var RuleBuildExtension = require('./RuleBuildExtension');


var engineRules = class EngineRules{
    constructor() {
        //incidencia ordenadas por prioridad
        this.rulesList = [
            new RuleHarverster(),
            new RuleUpgrader(),
            new RuleBuildExtension()

        ];

        this.loadRuleList();

    }

    update(){
        this.updateRuleListForPriority();
        this.saveRuleList();

    }

    updateRuleListForPriority() {
        let done = true;
        for (var number in  this.rulesList) {
            let rule = this.rulesList[number];
            if (done) {
                done = rule.execute();
                if (!done) {
                    this.printState(rule);
                }
            }
        }
    }

    printState(rule) {
        console.log("executing rule: " + rule.getNameRule());
    }

    saveRuleList() {
        var firstSpawn;
        for (var name in Game.spawns) {
            if (firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }
        //only save fields
        console.log("Engine "+firstSpawn.toString());
        firstSpawn.room.memory.stateIA = this.rulesList;
    }

    loadRuleList() {
        let firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }


        if (firstSpawn.room.memory.stateIA != null && firstSpawn.room.memory.stateIA != undefined) {
            for (var number in  this.rulesList) {
                let rule = this.rulesList[number];
                rule.setDone(firstSpawn.room.memory.stateIA[number].done);
            }
        }
    }


}

module.exports = engineRules;