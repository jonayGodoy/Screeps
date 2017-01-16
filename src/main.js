var ia = require('IAMain');
var roleManager = require('RoleManager');
var callGame = require('CallGame');
//se resetea por el serve
var RoleMonitor = require('RoleMonitor');

module.exports.loop = function () {

    ia.updateIA();
    creepsUpdate();

    let serialize = JSON.stringify(new RoleMonitor());
    let obj = JSON.parse(serialize);
    console.log(obj.run);




};

function creepsUpdate() {
    for (var name in callGame.getCreeps()) {
        var creep = callGame.getCreeps()[name];
        roleManager.runCreeps(creep);
    }
}