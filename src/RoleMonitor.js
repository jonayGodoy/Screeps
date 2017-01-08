module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
        this.cont = 0;
    }

    run(creep){
        let delayTicksCreeps = 10;
        this.setTickOutSay(creep,delayTicksCreeps);
    }

    setTickOutSay(creep, delayTicksCreeps){
        if(creep.ticksToLive % delayTicksCreeps == 0) {
            this.creepSaySlow(creep);
        }

    }

    creepSaySlow(creep){
        if(this.cont < this.message.length){
            creep.say(this.message[this.cont]);
            this.cont = this.cont +1;
        }else{
            this.cont = 0;
        }
    }


    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
