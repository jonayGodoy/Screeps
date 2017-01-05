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
        var roleList = new Array();
        roleList["harvester"] = roleHarvester;
        roleList["upgrader"] = roleUpgrader;
        roleList["builder"] = roleBuilder;



        console.log(roleList[creep.memory.role].run);
        console.log(creep.memory.role);
        (roleList[creep.memory.role]).run(creep);
    }

};

module.exports = roleManager;
