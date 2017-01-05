

var ruleHarverster = class RuleHarverster{

    execute(){
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());
        console.log("vamos "+harvesters);
        let done = false;
        if(harvesters.length < 2) {
            var info = Game.spawns["Spawn1"].createCreep([WORK,CARRY,MOVE], undefined, {role: constants.HARVESTER()});
            console.log("info "+info);
            done = false;
            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleHarverster;