const constants = require('Constants');
var EngineRules = require('EngineRules');
var RuleCreateCreeps = require('./RuleCreateCreeps');
var RuleBuildExtension = require('./RuleBuildExtension');
var RuleRenovateCreeps = require('./RuleRenovateCreeps');
var Dao = require('./Dao');
class IAMain {
    constructor() {
        this.rulesListActivesSortedByPriority = [
            new RuleCreateCreeps(2,constants.HARVESTER()),
            new RuleCreateCreeps(1,constants.MONITOR()),
            new RuleCreateCreeps(2,constants.UPGRADER()),
            new RuleBuildExtension()
        ];

        this.rulesListPasiveSortedByPriority =[
            new RuleRenovateCreeps()
        ];

        this.engineRules = new EngineRules(this.rulesListActivesSortedByPriority, this.rulesListPasiveSortedByPriority);

    }

    updateIA(){
        this.engineRules.updateRules();
    }


};

module.exports  = new IAMain();
