const constants = require('Constants');

var ruleHarverster = class RuleHarverster{

    constructor() {
        this.nameRule = "RuleHarverster";
    }

    getNameRule(){
        return this.nameRule;
    }

    execute(){
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());

        let firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }

        let done = false;
        if(harvesters.length < 2) {
         //   firstSpawn.say("execute "+"RuleHarverster");

            var info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.HARVESTER()});
            done = false;
            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleHarverster;