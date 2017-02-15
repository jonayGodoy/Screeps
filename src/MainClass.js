var ia = require('IAMain');
var callGame = require('CallGame');

class Main {

    constructor(ia,callGame) {
        this.ia = ia;
        this.callGame = callGame;
        this.roleManager = require('RoleManager');
    }

    mainExecute() {
        this.ia.updateIA();
        this.creepsUpdate();
    }

    creepsUpdate() {
        for (var name in this.callGame.getCreeps()) {
            var creep = this.callGame.getCreeps()[name];
            console.log(creep);
            this.roleManager.runCreeps(creep);
        }
    }
}
module.exports  = new Main(ia,callGame);