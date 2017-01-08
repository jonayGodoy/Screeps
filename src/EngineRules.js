const constants = require('Constants');
var RulePasive_Abstract = require('./RulePasive_Abstract');
var RuleActive_Abstract = require('./RuleActive_Abstract');
var roleManager = require('RoleManager');
var callGame = require('CallGame');

module.exports = class EngineRules{
    constructor(rulesListActivesSortedByPriority,rulesListPasivesSortedByPriority) {
        this.rulesListActivesSortedByPriority = rulesListActivesSortedByPriority;
        this.rulesListPasivesSortedByPriority = rulesListPasivesSortedByPriority;

        this.loadRuleList(rulesListActivesSortedByPriority);

    }

    updateRules(){
        this.updateRuleActiveListForPriority();
        this.updateRulePasiveListForPriority();
        this.saveRuleListActive();

    }

    updateRuleActiveListForPriority() {
        let done = true;
        for (var index in  this.rulesListActivesSortedByPriority) {
            let rule = this.rulesListActivesSortedByPriority[index];
            if (done) {
                done = rule.execute();
                if (!done) {
                    this.printState(rule);
                }
            }
        }
    }

    updateRulePasiveListForPriority() {
        for (var index in  this.rulesListPasivesSortedByPriority) {
            let rule = this.rulesListPasivesSortedByPriority[index];
            rule.execute();
        }
    }



    printState(rule) {
        if(roleManager.getRole(constants.MONITOR()) != undefined){
            let message = "executing rule: " + rule.getNameRule();
            roleManager.getRole(constants.MONITOR()).creepMonitorPrint(message);
        }

    }

    saveRuleListActive() {
        //only save fields
        callGame.getFirstSpawn().room.memory.stateIAActive = this.rulesListActivesSortedByPriority;
    }



    loadRuleList(ruleList) {
        let firstSpawn = callGame.getFirstSpawn();

        if (firstSpawn.room.memory.stateIAActive != undefined ) {
            for (var index in  ruleList) {
                let rule = ruleList[index];
                rule.setDone(firstSpawn.room.memory.stateIAActive[index].done);
            }
        }
    }


};

