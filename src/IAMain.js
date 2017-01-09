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


    printListCreepData(){
        var message = "";
        for(var index in this.listCreepData){
            message = message +(this.listCreepData.length+"||   The creepData his index is "+this.listCreepData[index].getRoleCreepData()+" \n");
        }
        return message;
    }
};

module.exports  = new IAMain();
