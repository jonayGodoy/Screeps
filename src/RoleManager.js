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


        var roleMonitor =  new RoleMonitor();
        console.log(roleMonitor.run);
        console.log(roleUpgrader.run);
        this.roleList[constants.MONITOR()] = roleMonitor;
        console.log("message "+this.roleList[constants.MONITOR()].run);


    }

    runCreeps(creep){

        console.log("message 2"+this.roleList[constants.MONITOR()].run);
        this.roleList[creep.memory.role()].run(creep);
    }

};

