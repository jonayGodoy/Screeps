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


        this.roleList[constants.MONITOR()] =  new RoleMonitor();


    }

    runCreeps(creep){

        console.log("message 2"+this.roleList[constants.MONITOR()].run(creep));
        this.roleList[creep.memory.role].run(creep);
    }

};

