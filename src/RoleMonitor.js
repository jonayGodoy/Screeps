module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in message){
            creep.say(this.message[number]);
        }
    }

    creepMonitorPrint(message){
        this.message = message;
    }

};
