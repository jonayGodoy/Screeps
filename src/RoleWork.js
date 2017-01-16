module.exports = class RoleWork{
    constructor(roleObject) {
        this.roleObject = roleObject;
        this.recharge = false;
    }

    run(creep){
        if(creep.carry.energy == 0 && !this.recharge) {
            this.changeRecharge(true,creep)
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.carry.energy == creep.carryCapacity && this.recharge) {
                this.changeRecharge(false, creep)
                this.roleObject.run(creep);
            }
        }
    }

    changeRecharge(bool,creep){
        if(this.recharge != bool){
            this.recharge = bool;
            if(this.recharge){
                creep.say("Recharge");
            }else{
                creep.say("Work "+creep.name);
            }
        }

    }


};
