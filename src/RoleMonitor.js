module.exports = class RoleMonitor{
    constructor() {
        this.message = "";
    }

    run(creep){
        creep.say("message");
    }

    static creepMonitorPrint(message){
        console.log("call engine");
        this.message = message;
    }

};
