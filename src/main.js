var ia = require('IAMain');
var roleManager = require('RoleManager');
var callGame = require('CallGame');
//se resetea por el serve
var main = require('MainClass');

module.exports.loop = function () {
    main.mainExecute();
};



    /*
function creepsUpdate() {
    for (var name in callGame.getCreeps()) {
        var creep = callGame.getCreeps()[name];
        roleManager.runCreeps(creep);
    }
}
 */