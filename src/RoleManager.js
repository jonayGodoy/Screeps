const constants = require('Constants');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


var roleManager = class RoleManager{
    constructor(){
        this.roleList = [];
        this.roleList[constants.HARVESTER()] = roleHarvester;
        this.roleList[constants.UPGRADER()] = roleUpgrader;
        this.roleList[constants.BUILDER()] = roleBuilder;

    }

    runCreeper(creep){
        this.roleList[creep.memory.role].run(creep);
    }

}

module.exports = roleManager;
