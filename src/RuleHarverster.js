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
            this.done = this.conditionRule();

            if (this.done) {
                return this.done;
            } else {
                this.behaviorRule();
            }


        }
        return this.done;
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