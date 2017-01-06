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

    isDone(){
        return this.done
    }

    setDone(done){
        this.done = done;
    }

    execute(){
        let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.UPGRADER());
        if(!this.done){
            if(upgraders.length < 2) {
                var firstSpawn;
                for (var name in Game.spawns) {
                    if (firstSpawn == null)
                        firstSpawn = Game.spawns[name];
                }
        }

            let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.UPGRADER()});
            this.done = false;
        }else{
            this.done = true;
        }
        return this.done;
    }
}
module.exports = ruleUpgrader;