const constants = require('Constants');
var EngineRules = require('EngineRules');
var RuleCreateCreeps = require('./RuleCreateCreeps');
var RuleBuildExtension = require('./RuleBuildExtension');
var RuleRenovateCreeps = require('./RuleRenovateCreeps');
var Dao = require('./RuleRenovateCreeps');
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

        this.dao = new Dao();
        this.listCreepData = [];
        this.dao.loadListCreepData(this.listCreepData);


    }

    updateIA(){
        this.engineRules.updateRules();
    }

    addCreepListData(creepData){
       this.listCreepData.push(creepData);
        this.dao.saveListCreepData(this.listCreepData);
    }

};

module.exports  = new IAMain();
