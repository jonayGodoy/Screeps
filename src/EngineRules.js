const constants = require('Constants');
var RulePasive_Abstract = require('./RulePasive_Abstract');
var RuleActive_Abstract = require('./RuleActive_Abstract');
var roleManager = require('RoleManager');
var Dao = require('Dao');
const RULE_ACTIVE = 0;
const STATE =1;

module.exports = class EngineRules{
    constructor(rulesListActivesSortedByPriority,rulesListPasivesSortedByPriority) {
        this.rulesListActivesSortedByPriority = this.addSupportStatetoActiveList(rulesListActivesSortedByPriority);
        this.rulesListPasivesSortedByPriority = rulesListPasivesSortedByPriority;

        this.dao = new Dao();
    //    this.dao.loadRuleListActives(rulesListActivesSortedByPriority);
    }

    updateRules(){
        this.updateRuleActiveListForPriority();
        this.updateRulePasiveListForPriority();
        this.dao.saveRuleListActive( this.rulesListActivesSortedByPriority);
    }
/*
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
*/
    updateRulePasiveListForPriority() {
        for (var index in  this.rulesListPasivesSortedByPriority) {
            let rule = this.rulesListPasivesSortedByPriority[index];
            this.executeContinually(rule);
        }
    }

    updateRuleActiveListForPriority() {
        let stopList = false;
        for (var index in  this.rulesListActivesSortedByPriority) {
            let ruleAddState = this.rulesListActivesSortedByPriority[index];
                if (!stopList) {
                    this.printState(ruleAddState[RULE_ACTIVE]);
                    this.rulesListActivesSortedByPriority[index] = ruleAddState;
                    ruleAddState[STATE] = this.executeRuleOnce(ruleAddState);
                    stopList = !ruleAddState[STATE];
                    let parche = undefined;
                    return parche;
                }
        }
    }



    executeRuleOnce(ruleAddState) {
        let rule = ruleAddState[RULE_ACTIVE];
        if (!ruleAddState[STATE]) {
            if (!rule.conditionRule()) {
                rule.behaviorRule();
            } else {
                ruleAddState[STATE] = true
                return  ruleAddState[STATE];
            }
        }else{
            return ruleAddState[STATE];
        }

    }


    executeContinually(rule){
        if (!rule.conditionRule()) {
            rule.behaviorRule();
        }

        return !rule.conditionRule();
    }


    addSupportStatetoActiveList(rulesListActivesWithoutState){
        let listActiveAddListState = [];

        for(var index in rulesListActivesWithoutState){
            let ruleAddState = [rulesListActivesWithoutState[index],false];
            listActiveAddListState[index] = ruleAddState;
        }
        return listActiveAddListState;
    }

    printState(rule) {
        if(roleManager.getRole(constants.MONITOR()) != undefined){
            let message = "executing rule: " + rule.getNameRule();
            roleManager.getRole(constants.MONITOR()).creepMonitorPrint(message);
        }

    }

};

