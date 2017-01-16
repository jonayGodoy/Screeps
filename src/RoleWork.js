module.exports = class RoleWork{
    constructor(roleObject) {
        this.roleObject = roleObject;
        this.isRecharge = false;
    }

    run(creep){
        if(creep.carry.energy == 0 && !this.isRecharge) {
            this.changeRecharge(true,creep)
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.carry.energy == creep.carryCapacity && this.isRecharge) {
                this.changeRecharge(false, creep)
                this.roleObject.run(creep);
            }
        }
    }

    changeRecharge(bool,creep){
        if(this.isRecharge != bool){
            this.isRecharge = bool;
            if(this.isRecharge){
                creep.say("Recharge");
            }else{
                creep.say("Work "+creep.name);
            }
        }

    }


};
