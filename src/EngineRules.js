const constants = require('Constants');
var RuleHarverster = require('./RuleHarverster');
var RuleUpgrader = require('./RuleUpgrader');

var engineRules = class EngineRules{
    constructor() {
        //incidencia ordenadas por priorida
        this.rulesList = [
            new RuleHarverster(),
            new RuleUpgrader()
        ];
    }

    update(){
        let done = false;
        for(var number in  this.rulesList){
            let rule = this.rulesList[number];
            this.executeForPriority(done, rule);
        }
    }

    executeForPriority(done, rule) {
        if (done) {
            done = rule.execute();
        }
        return done;
    }
}

module.exports = engineRules;