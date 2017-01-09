const constants = require('Constants');
var RoleHarvester = require('RoleHarvester');
var RoleUpgrader = require('RoleUpgrader');
var RoleBuilder = require('RoleBuilder');
var RoleMonitor = require('RoleMonitor');
var ia = require('IAMain');

class RoleManager{
    constructor(){
        this.roleList = [];
        this.roleList[constants.HARVESTER()] = new RoleHarvester();
        this.roleList[constants.UPGRADER()] = new RoleUpgrader();;
        this.roleList[constants.BUILDER()] = new RoleBuilder();
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
