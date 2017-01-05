var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


class RoleManager{
    constructor(){
        this.roleList = [];
         roleList["harvester"] = roleHarvester;
         roleList["upgrader"] = roleUpgrader;
         roleList["builder"] = roleBuilder;

    }

    runCreeper(creep){
        this.roleList[creep.memory.role].run(creep);
    }

}





module.exports = new RoleManager();
