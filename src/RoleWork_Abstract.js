module.exports = class RoleWork_Abstract{
    run(creep){
        this.changeWork(creep);

        if(creep.memory.working) {
            this.work(creep);
        }
        else {
            this.recharge(creep);
        }

    }

    changeWork(creep){
        if(creep.memory.working && creep.carry.energy == 0) {
            creep.memory.working = false;
            creep.say("recharge");
        }
        if(!creep.memory.working && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
            creep.say("working");
        }
    }

    work(creep){
       //override
    }

    recharge(creep){
        let sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    }


};
