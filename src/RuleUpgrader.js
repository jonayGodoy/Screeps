//incidencia falta de interface
const constants = require('Constants');

var ruleUpgrader = class RuleUpgrader{


    constructor() {
        this.nameRule = "RuleUpgrader";
    }

    getNameRule(){
        return this.nameRule;
    }

    execute(){
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.UPGRADER());
        let done = false;
        if(upgraders.length < 2) {
            let firstSpawn;
            for(var name in Game.spawns){
                if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
            }


            let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.UPGRADER()});
            done = false;
            Game.memory.stateIA = "save state"
            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleUpgrader;