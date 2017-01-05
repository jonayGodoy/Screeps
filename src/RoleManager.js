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
            ["harvester",roleHarvester.run],
            ["upgrader",roleUpgrader.run],
            ["builder",roleBuilder.run]
        ];

        console.log(require('role.harvester').run);
        roleList[creep.memory.role](creep);
    }

};

module.exports = roleManager;
