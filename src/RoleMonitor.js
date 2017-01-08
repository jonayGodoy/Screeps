module.exports = class RoleMonitor{
    constructor() {
        this.message = "";
    }

    run(creep){
        creep.say(this.message);
    }

    creepMonitorPrint(message){
        console.log("call engine");
        this.message = message;
    }

};
