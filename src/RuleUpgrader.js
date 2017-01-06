//incidencia falta de interface
const constants = require('Constants');

var ruleUpgrader = class RuleUpgrader{


    constructor() {
        this.nameRule = "RuleUpgrader";
        this.done = false;
    }

    getNameRule(){
        return this.nameRule;
    }


    setDone(done){
        this.done = done;
    }

    execute(){
        if(!this.done){
            this.done = this.behaviorRule();
        }
        return this.done;
    }

    behaviorRule() {
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.UPGRADER());

        let conditionDone = (upgraders.length >= 2);


        var firstSpawn;
        for (var name in Game.spawns) {
            if (firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }


        if (!conditionDone) {
            let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.UPGRADER()});
        } else {
            this.done = conditionDone;
        }
    }
}
module.exports = ruleUpgrader;