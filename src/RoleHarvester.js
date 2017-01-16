var RoleWork_Abstract = require('RoleWork_Abstract');
module.exports = class RoleHarvester extends RoleWork_Abstract{


    changeWork(creep){
        if(creep.memory.working && creep.carry.energy == 0) {
            creep.memory.working = false;
            creep.say("recharge");
        }
        if(!creep.memory.working && creep.carry.energy < creep.carryCapacity) {
            creep.memory.working = true;
            creep.say("working");
        }
    }

    work(creep){
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
            }
        });
        if(targets.length > 0) {
            if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }


};

