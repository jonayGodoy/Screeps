const constants = require('Constants');
var RuleAbstract = require('./Rule_Abstract');
var roleManager = require('RoleManager');
var Dao = require('Dao');

module.exports = class EngineRules{
    constructor(rulesListActivesSortedByPriority,rulesListPasivesSortedByPriority) {
        this.rulesListActivesSortedByPriority = this.addSupportStatetoActiveList(rulesListActivesSortedByPriority);
        this.rulesListPasivesSortedByPriority = rulesListPasivesSortedByPriority;

        this.dao = new Dao();
        this.dao.loadRuleListActives(this.rulesListActivesSortedByPriority);
    }

    updateRules(){
        this.updateRuleActiveListForPriority();
        this.updateRulePasiveListForPriority();
        this.dao.saveRuleListActive( this.rulesListActivesSortedByPriority);
    }

    updateRulePasiveListForPriority() {
        for (var index in  this.rulesListPasivesSortedByPriority) {
            let rule = this.rulesListPasivesSortedByPriority[index];
            this.executeContinually(rule);
        }
    }

    updateRuleActiveListForPriority() {
        let index = 0;
        let stopList = false;
        while(!stopList && (index <this.rulesListActivesSortedByPriority.length)){
            let ruleAddState = this.rulesListActivesSortedByPriority[index];
            ruleAddState[constants.RULE_ACTIVE_STATE()] = this.executeRuleOnce(ruleAddState);
            stopList = !ruleAddState[constants.RULE_ACTIVE_STATE()];
         //   console.log(" estado "+stopList);
            if(stopList){
                this.printState(ruleAddState[constants.RULE_ACTIVE()]);
            }
            this.rulesListActivesSortedByPriority[index] = ruleAddState;
            index++;
        }
    }



     executeRuleOnce(ruleAddState) {
     let rule = ruleAddState[constants.RULE_ACTIVE()];
     if (!ruleAddState[constants.RULE_ACTIVE_STATE()]) {
         let stateBehavior = false;
         if ( rule.conditionRule()) {
             stateBehavior = rule.behaviorRule();
             stateBehavior = true;
         }
         console.log("condition "+rule.conditionRule());
        console.log(" state "+stateBehavior);
         ruleAddState[constants.RULE_ACTIVE_STATE()] = !rule.conditionRule() && stateBehavior;
     }

     return  ruleAddState[constants.RULE_ACTIVE_STATE()];
     }


    executeContinually(rule){
        if (rule.conditionRule()) {
            rule.behaviorRule();
        }
        return rule.conditionRule();
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

