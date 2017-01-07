var RuleHarverster = require('./RuleHarverster');
var RuleUpgrader = require('./RuleUpgrader');
var RuleBuildExtension = require('./RuleBuildExtension');
var RoleMonitor = require('RoleMonitor');
var callGame = require('CallGame');

module.exports = class EngineRules{
    constructor() {
        this.rulesListSortedByPriority = [
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
        for (var number in  this.rulesListSortedByPriority) {
            let rule = this.rulesListSortedByPriority[number];
            if (done) {
                done = rule.execute();
                if (!done) {
                    this.printState(rule);
                }
            }
        }
    }

    printState(rule) {
      //  console.log("executing rule: " + rule.getNameRule());
        RoleMonitor.creepMonitorPrint("executing rule: " + rule.getNameRule())
    }

    saveRuleList() {
        //only save fields
        callGame.getFirstSpawn().room.memory.stateIA = this.rulesListSortedByPriority;
    }

    loadRuleList() {
        let firstSpawn = callGame.getFirstSpawn();

        if (firstSpawn.room.memory.stateIA != null && firstSpawn.room.memory.stateIA != undefined) {
            for (var number in  this.rulesListSortedByPriority) {
                let rule = this.rulesListSortedByPriority[number];
                rule.setDone(firstSpawn.room.memory.stateIA[number].done);
            }
        }
    }


}

