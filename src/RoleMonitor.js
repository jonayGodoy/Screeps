module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
        this.cont = 0;
    }

    run(creep){
        let delayTicksCreeps = 10;
        this.setTickOut(creep,delayTicksCreeps,this.creepSaySlow,creep);
        /*
            if(creep.ticksToLive % delayTicksCreeps == 0) {
                if(this.cont < this.message.length){
                    creep.say(this.message[this.cont]);
                    this.cont = this.cont +1;
                }else{
                    this.cont = 0;
                }


            }
            */

    }
    creepSaySlow(creep){
        if(this.cont < this.message.length){
            creep.say(this.message[this.cont]);
            this.cont = this.cont +1;
        }else{
            this.cont = 0;
        }
    }

    setTickOut(creep,delayTicksCreeps,functionDelay,parameter){
        if(creep.ticksToLive % delayTicksCreeps == 0) {
            functionDelay(parameter);
        }

    }


    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
