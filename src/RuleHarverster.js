const constants = require('Constants');

var ruleHarverster = class RuleHarverster{

    constructor() {
        this.nameRule = "RuleHarverster";
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
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());

        let conditionDone = (harvesters.length >= 2);


        var firstSpawn;
        for (var name in Game.spawns) {
            if (firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }


        if (!conditionDone) {
            var info = firstSpawn.createCreep([WORK, CARRY, MOVE], undefined, {role: constants.HARVESTER()});
        } else {
            this.done = conditionDone;
        }
    }
}
module.exports = ruleHarverster;