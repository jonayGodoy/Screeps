const constants = require('Constants');
var RoleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var RoleMonitor = require('RoleMonitor');

class RoleManager{
    constructor(){
        this.roleList = [];
        this.roleList[constants.HARVESTER()] = new RoleHarvester();
        this.roleList[constants.UPGRADER()] = roleUpgrader;
        this.roleList[constants.BUILDER()] = roleBuilder;
        this.roleList[constants.MONITOR()] =  new RoleMonitor();
    }

    runCreeps(creep){
        this.roleList[creep.memory.role].run(creep);
    }

    getRole(role){
        return this.roleList[role];
    }
};
module.exports = new RoleManager();
