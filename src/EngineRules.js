const constants = require('Constants');
var RulePasive_Abstract = require('./RulePasive_Abstract');
var RuleActive_Abstract = require('./RuleActive_Abstract');
var roleManager = require('RoleManager');
var callGame = require('CallGame');
var Dao = require('Dao');

module.exports = class EngineRules{
    constructor(rulesListActivesSortedByPriority,rulesListPasivesSortedByPriority) {
        this.rulesListActivesSortedByPriority = rulesListActivesSortedByPriority;
        this.rulesListPasivesSortedByPriority = rulesListPasivesSortedByPriority;

        this.dao = new Dao();
        this.dao.loadRuleListActives(rulesListActivesSortedByPriority);
    }

    updateRules(){
        this.updateRuleActiveListForPriority();
        this.updateRulePasiveListForPriority();
        this.dao.saveRuleListActive();
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

};

