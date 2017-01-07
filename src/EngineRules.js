var RuleHarverster = require('./RuleHarverster');
var RuleUpgrader = require('./RuleUpgrader');
var RuleBuildExtension = require('./RuleBuildExtension');
var callGame = require('CallGame');

module.exports = class EngineRules{
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
        //only save fields
        callGame.getFirstSpawn().room.memory.stateIA = this.rulesList;
    }

    loadRuleList() {
        let firstSpawn = callGame.getFirstSpawn();

        if (firstSpawn.room.memory.stateIA != null && firstSpawn.room.memory.stateIA != undefined) {
            for (var number in  this.rulesList) {
                let rule = this.rulesList[number];
                rule.setDone(firstSpawn.room.memory.stateIA[number].done);
            }
        }
    }


}

