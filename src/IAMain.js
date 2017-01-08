const constants = require('Constants');
var EngineRules = require('EngineRules');
var RuleCreateCreeps = require('./RuleCreateCreeps');
var RuleBuildExtension = require('./RuleBuildExtension')
class IAMain {
    constructor() {
        this.rulesListSortedByPriority = [
            new RuleCreateCreeps(2,constants.HARVESTER()),
            new RuleCreateCreeps(1,constants.MONITOR()),
            new RuleCreateCreeps(2,constants.UPGRADER()),
            new RuleBuildExtension()
        ];

        this.engineRules = new EngineRules(this.rulesListSortedByPriority);

    }

    updateIA(){
        this.engineRules.updateRules();
    }


};

module.exports  = new IAMain();
