const constants = require('Constants');
var RuleHarverster = require('./RuleHarverster');
var RuleUpgrader = require('./RuleUpgrader');
var RuleBuildExtension = require('./RuleBuildExtension');

var engineRules = class EngineRules{
    constructor() {
        //incidencia ordenadas por priorida
        this.rulesList = [
            new RuleHarverster(),
            new RuleUpgrader(),
            new RuleBuildExtension()

        ];
    }

    update(){
        let done = true;
        for(var number in  this.rulesList){
            let rule = this.rulesList[number];
            if (done) {
                done = rule.execute();
                if(!done){
                    console.log("executing rule: "+rule.getNameRule());
                }
            }
        }
    }


}

module.exports = engineRules;