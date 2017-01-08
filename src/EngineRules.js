const constants = require('Constants');
var Rule_Abstract = require('./Rule_Abstract');
var roleManager = require('RoleManager');
var callGame = require('CallGame');

module.exports = class EngineRules{
    constructor(rulesListSortedByPriority) {
        this.rulesListSortedByPriority = rulesListSortedByPriority;
        this.loadRuleList();

    }

    updateRules(){
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
        if(roleManager.getRole(constants.MONITOR()) != undefined){
            let message = "executing rule: " + rule.getNameRule();
            roleManager.getRole(constants.MONITOR()).creepMonitorPrint(message);
        }

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


};

