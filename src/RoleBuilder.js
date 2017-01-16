var RoleWork = require('RoleWork_Abstract');
module.exports = class RoleBuilder extends RoleWork{

    work(creep){
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        }
    }


};
