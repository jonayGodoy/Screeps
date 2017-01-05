//incidencia falta de interface
var ruleUpgrader = class RuleUpgrader{

    execute(){
        let done = false;
        if(upgraders.length < 5) {
            var info = Game.spawns["Spawn1"].createCreep([WORK,CARRY,MOVE], undefined, {role: constants.UPGRADER()});
            done = false;
            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleUpgrader;