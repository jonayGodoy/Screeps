var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


var roleManager = class RoleManager{
    constructor(){
        this.roleList = [];
        this.roleList["harvester"] = roleHarvester;
        this.roleList["upgrader"] = roleUpgrader;
        this.roleList["builder"] = roleBuilder;

    }

    runCreeper(creep){
        this.roleList[creep.memory.role].run(creep);
    }

}

module.exports = RoleManager;
