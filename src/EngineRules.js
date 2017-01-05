const constants = require('Constants');
var RuleHarverster = require('./rules/RuleHarverster');
var RuleUpgrader = require('./rules/RuleUpgrader');

var engineRules = class EngineRules{
    constructor() {
        //incidencia ordenadas por priorida
        this.rulesList = [
            new RuleHarverster(),
            new RuleUpgrader
        ];
    }

    update(){
        let stop = false;
        for(var number in  this.rulesList){
            stop = this.executeForPriority(stop, number);
        }
    }

    executeForPriority(stop, number) {
        if (!stop) {
            rule = rulesList[number];
            stop = rule.execute();
        }
        return stop;
    }
}

module.exports = engineRules;