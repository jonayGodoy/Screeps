var ia = require('IAMain');
var roleManager = require('RoleManager');
var callGame = require('CallGame');

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
module.exports  = new Main(ia,callGame);