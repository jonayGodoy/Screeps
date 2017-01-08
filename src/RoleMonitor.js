class RoleMonitor{
    constructor() {
        this.message = "";

    }

    run(creep){
        creep.say(this.message);
    }

    static creepMonitorPrint(message){
        console.log("call engine");
        this.message = message;
    }

};
 module.exports = new RoleMonitor();