const constants = require('Constants');

var ruleHarverster = class RuleHarverster{

    execute(){
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());
        console.log("harvesters");

        let Spawn;
        for(var name in Game.spawns){
            if(Spawn == null)
                Spawn = Game.spawns[name];
        }

        let done = false;
        if(harvesters.length < 2) {
            var info = Spawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.HARVESTER()});
            done = false;
            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleHarverster;