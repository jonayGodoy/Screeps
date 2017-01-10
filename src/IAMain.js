const constants = require('Constants');
var EngineRules = require('EngineRules');
var RuleCreateCreeps = require('RuleCreateCreeps');
var RuleBuildStructure = require('RuleBuildStructure');
var RuleRenovateCreeps = require('RuleRenovateCreeps');
var callGame = require('CallGame');
class IAMain {
    constructor() {
        this.rulesListActivesSortedByPriority = [
            new RuleCreateCreeps(2,constants.HARVESTER()),
            new RuleCreateCreeps(1,constants.MONITOR()),
            new RuleCreateCreeps(2,constants.UPGRADER()),
            new RuleCreateCreeps(2,constants.BUILDER()),
            new RuleBuildStructure(5,callGame.getFirstSpawn().pos,2,STRUCTURE_EXTENSION)
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
