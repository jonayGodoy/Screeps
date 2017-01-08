module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in this.message){
            if(creep.ticksToLive % 10)
            creep.say(number);
        }
    }



    creepDelaySay(creep,number){
        console.log("funciona");
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
