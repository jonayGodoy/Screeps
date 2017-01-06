const constants = require('Constants');
var EngineRules = require('EngineRules');
var RoleManager = require('RoleManager');
var roleManager = new RoleManager();
var ia = new EngineRules();


module.exports.loop = function () {


     ia.update();


    //refactoring incidencias
    for(var name in Game.creeps){
        var creep = Game.creeps[name];
        roleManager.runCreeper(creep);
    }

}