const constants = require('Constants');
var Rule_Abstract = require("Rule_Abstract");

var ruleHarverster = class RuleHarverster extends Rule_Abstract{

    constructor() {
        super("RuleHarverster");
    }



    conditionRule(){
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());

        let conditionDone = (harvesters.length >= 2);

        return conditionDone;
    }



    behaviorRule(){
        var firstSpawn;
        for (var name in Game.spawns) {
            if (firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }

         var info = firstSpawn.createCreep([WORK, CARRY, MOVE], undefined, {role: constants.HARVESTER()});

    }
}
module.exports = ruleHarverster;