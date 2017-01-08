module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in message){
            creep.say(this.message);
        }
    }

    creepMonitorPrint(message){
        this.message = message;
    }

};
