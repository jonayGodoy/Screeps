module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
        this.cont = 0;
    }

    run(creep){
        let delayTicks = 10;
            if(creep.ticksToLive % delayTicks == 0) {
                if(this.cont < this.message.length){
                    this.cont = this.cont +1;
                }else{
                    this.cont = 0;
                }

                creep.say(this.message[this.cont]);
            }

    }


    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
