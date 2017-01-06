const constants = require('Constants');
var EngineRules = require('EngineRules');
var RoleManager = require('RoleManager');
var roleManager = new RoleManager();
var ia = new EngineRules();
console.log("veces 2");


module.exports.loop = function () {

     ia.update();

    if(Memory != undefined) {
        console.log("test " + Memory.stateIA);
    }
    //refactoring incidencias
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        roleManager.runCreeper(creep);
    }

}

