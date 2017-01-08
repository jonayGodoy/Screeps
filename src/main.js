var ia= require('IAMain');
var roleManager = require('RoleManager');
var callGame = require('CallGame');

//se resetea por el serve


module.exports.loop = function () {

    ia.updateIA();

    creepsUpdate();

};

function creepsUpdate() {
    for (var name in callGame.getCreeps()) {
        var creep = callGame.getCreeps()[name];
        roleManager.runCreeps(creep);
    }
}