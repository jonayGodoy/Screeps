module.exports = class RoleMonitor{
    constructor() {
        this.message = "";
    }

    run(creep){
        creep.say("IA MONITOR: \nddd");
    }

    static creepMonitorPrint(message){
        console.log("call engine");
        this.message = "IA MONITOR: \n"+message;
    }

};
