//incidencia falta de interface
const constants = require('Constants');
var Rule_Abstract = require("Rule_Abstract");

var ruleUpgrader = class RuleUpgrader extends Rule_Abstract{

    constructor() {
        super("RuleUpgrader");
    }

    conditionRule(){
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.UPGRADER());

        let conditionDone = (upgraders.length >= 2);

        return conditionDone;
    }

    behaviorRule() {

        var firstSpawn;
        for (var name in Game.spawns) {
            if (firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }

        let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.UPGRADER()});


    }
}
module.exports = ruleUpgrader;