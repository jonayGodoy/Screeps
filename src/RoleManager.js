var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

/*
class RoleManager{
    constructor(){
        this.roleList = [
            ["harvester", roleHarvester],
            ["upgrader",roleUpgrader],
            ["builder",roleBuilder]
        ];

    }

    runCreeper(creep){
        this.roleList[creep.memory.role].run(creep);
    }

}
*/


var roleManager = {

    runCreeper: function(creep){
        var roleList = [
            ["harvester", module.exports.roleHarvester],
            ["upgrader",roleUpgrader],
            ["builder",roleBuilder]
        ];


        roleList[creep.memory.role].run(creep);
    }

};

module.exports = roleManager;
