

var ruleHarverster = class RuleHarverster{

    execute(){
        let done = false;
        if(harvesters.length < 2) {
            var info = Game.spawns["Spawn1"].createCreep([WORK,CARRY,MOVE], undefined, {role: constants.HARVESTER()});
            done = false;
            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleHarverster;