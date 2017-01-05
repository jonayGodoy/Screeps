require('Constants');
var RoleManager = require('RoleManager');
var roleManager = new RoleManager();

module.exports.loop = function () {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log("constante "+module.exports.HARVESTER);


    if(harvesters.length < 2) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: "harvester"});
        console.log('Spawning new harvester: ' + newName);
    }else{
        if(upgraders.length < 5) {
            var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);

        }
    }
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        roleManager.runCreeper(creep);
    }

}