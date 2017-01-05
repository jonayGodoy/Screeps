var creepsManager = {

    var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');


class CreepsManager {
        constructor() {
            this.roleList = [
                ["harvester", roleHarvester],
                ["upgrader", roleUpgrader],
                ["builder", roleBuilder]
            ];

        }

        runCreeper(creep) {
            this.roleList[creep.memory.role].run(creep);
        }

    }


};
module.exports = creepsManager;
