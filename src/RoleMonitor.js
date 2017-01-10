var callGame = require('CallGame');
module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
        this.contParche = 0;
    }

    run(creep){
        let delayTicksCreeps = 5;
        this.setTickOutSay(creep,delayTicksCreeps);
    }

    setTickOutSay(creep, delayTicksCreeps){
        if(callGame.getTimeTicks % delayTicksCreeps == 0) {
            this.creepSaySlow(creep);
        }

    }

    creepSaySlow(creep){
        if(this.contParche < this.message.length){
            creep.say(this.message[this.contParche]);
            this.contParche = this.contParche +1;
        }else{
            this.contParche = 0;
        }
    }


    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
