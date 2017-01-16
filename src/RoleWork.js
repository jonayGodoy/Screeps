module.exports = class RoleWork{
    constructor(roleObject) {
        this.roleObject = roleObject;
        this.recharge = false;
    }

    run(creep){
        if(creep.carry.energy < creep.carryCapacity) {
            this.recharge = true;
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            this.recharge = false;
            this.roleObject.run(creep);

        }

        if(this.recharge){
            creep.say("Recharge");
        }else{
            creep.say("Work");
        }
    }




};
