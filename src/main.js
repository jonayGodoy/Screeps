var EngineRules = require('EngineRules');
var RoleManager = require('RoleManager');
var roleManager = new RoleManager();
var ia = new EngineRules();
//se resetea por el serve


module.exports.loop = function () {

    ia.update();

    creepsUpdate();

};

function creepsUpdate() {
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleManager.runCreeper(creep);
    }
}