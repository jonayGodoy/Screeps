var RoleWork = require('RoleWork_Abstract');
module.exports = class RoleUpgrader extends RoleWork{
    run(creep){
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
    }

};

