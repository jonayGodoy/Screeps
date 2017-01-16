module.exports = class RoleWork{
    constructor(roleObject) {
        this.roleObject = roleObject;
    }

    run(creep){
        if(creep.carry.energy < creep.carryCapacity) {
            creep.say("Recharge");
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            creep.say("Work");
            this.roleObject.run(creep);

        }
    }



};
