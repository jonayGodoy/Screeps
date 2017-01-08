module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in this.message){
             SetTimeout(this.creepDelaySay,1000,number);
        }
    }

    creepDelaySay(number){
        creep.say(this.message[number]);
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
