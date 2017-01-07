const constants = require('Constants');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var RoleMonitor = require('RoleMonitor');

module.exports = class RoleManager{
    constructor(){
        this.roleList = [];
        this.roleList[constants.HARVESTER()] = roleHarvester;
        this.roleList[constants.UPGRADER()] = roleUpgrader;
        this.roleList[constants.BUILDER()] = roleBuilder;

        var roleMonitor =  new RoleMonitor()
        console.log(roleMonitor.run);
        this.roleList[constants.MONITOR()] = roleMonitor;
    }

    runCreeps(creep){
        this.roleList[creep.memory.role].run(creep);
    }

};

