var ia = require('IAMain');
var roleManager = require('RoleManager');
var callGame = require('CallGame');
//se resetea por el serve
var main = new Main(ia,callGame);

module.exports.loop = function () {
    main.mainExecute();
};


class Main {

    constructor(ia,callGame) {
        this.ia = ia;
        this.callGame = callGame;
    }

    mainExecute() {
        this.ia.updateIA();
        this.creepsUpdate();
    }

    creepsUpdate() {
        for (var name in this.callGame.getCreeps()) {
            var creep = this.callGame.getCreeps()[name];
            roleManager.runCreeps(creep);
        }
    }
}

    /*
function creepsUpdate() {
    for (var name in callGame.getCreeps()) {
        var creep = callGame.getCreeps()[name];
        roleManager.runCreeps(creep);
    }
}
 */