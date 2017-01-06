const constants = require('Constants');

var ruleHarverster = class RuleHarverster{

    constructor() {
        this.nameRule = "RuleHarverster";
        this.done = false;
    }

    getNameRule(){
        return this.nameRule;
    }

    isDone(){
        return this.done
    }

    setDone(done){
        this.done = done;
    }

    execute(){
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());

        var firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }

        if(!this.done){
            if(harvesters.length < 2) {
                var info = firstSpawn.createCreep([WORK, CARRY, MOVE], undefined, {role: constants.HARVESTER()});
                this.done = false;
            }
        }else{
            this.done = true;
        }
        return this.done;
    }
}
module.exports = ruleHarverster;