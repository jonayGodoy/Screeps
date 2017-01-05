const constants = require('Constants');
var RuleHarverster = require('./RuleHarverster');
var RuleUpgrader = require('./RuleUpgrader');

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
            rule = rulesList[number];
            stop = this.executeForPriority(stop, rule);
        }
    }

    executeForPriority(stop, rule) {
        if (!stop) {
            stop = rule.execute();
        }
        return stop;
    }
}

module.exports = engineRules;