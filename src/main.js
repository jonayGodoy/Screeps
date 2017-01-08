var EngineRules = require('EngineRules');
var roleManager = require('RoleManager');
var callGame = require('CallGame');
var ia = new EngineRules();
//se resetea por el serve


module.exports.loop = function () {

    ia.update();

    creepsUpdate();

};

function creepsUpdate() {
    for (var name in callGame.getCreeps()) {
        var creep = callGame.getCreeps();
        roleManager.runCreeps(creep);
    }
}