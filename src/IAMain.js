const constants = require('Constants');
var EngineRules = require('EngineRules');
var RuleCreateCreeps = require('./RuleCreateCreeps');
var RuleBuildExtension = require('./RuleBuildExtension');
var RuleRenovateCreeps = require('./RuleRenovateCreeps');
var Dao = require('./RuleRenovateCreeps');{
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

        this.listCreepData = [];
       // load(this.listCreepData);

        this.engineRules = new EngineRules(this.rulesListActivesSortedByPriority, this.rulesListPasiveSortedByPriority);

    }

    updateIA(){
        this.engineRules.updateRules();
    }

    addCreepListData(creepData){
       this.listCreepData.push(creepData);
        save(this.listCreepData);
    }

};

module.exports  = new IAMain();
