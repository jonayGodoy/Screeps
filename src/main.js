const constants = require('Constants');
var RoleManager = require('RoleManager');
var roleManager = new RoleManager();


module.exports.loop = function () {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.UPGRADER());


    const spawn1 = 'Spawn1';
    if(harvesters.length < 2) {
        var newName = Game.spawns[spawn1].createCreep([WORK,CARRY,MOVE], undefined, {role: constants.HARVESTER()});
      //  console.log('Spawning new harvester: ' + newName);
    }else{
        if(upgraders.length < 5) {
            var newName = Game.spawns[spawn1].createCreep([WORK,CARRY,MOVE], undefined, {role: constants.UPGRADER()});
      //      console.log('Spawning new upgrader: ' + newName);
        }
    }
    for(var creep in Game.creeps){
       // var creep = Game.creeps[name];
        roleManager.runCreeper(creep);
    }

}