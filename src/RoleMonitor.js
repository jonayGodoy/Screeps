module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
        this.cont = 0;
    }

    run(creep){



        for(var number in this.message){
            if(creep.ticksToLive % 15 == 0) {
                creep.say(this.message[this.cont]);
                if(this.cont < message.length){
                    this.cont = cont +1;
                }else{
                    this.cont = 0;
                }
            }
        }
    }


    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
