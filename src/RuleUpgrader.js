//incidencia falta de interface
const constants = require('Constants');

var ruleUpgrader = class RuleUpgrader{

    execute(){
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.UPGRADER());
        let done = false;
        if(upgraders.length < 2) {
            let firstSpawn;
            for(var name in Game.spawns){
                if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
            }

            firstSpawn.say("execute "+"RuleUpgrader");

            let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.UPGRADER()});
            done = false;

            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleUpgrader;