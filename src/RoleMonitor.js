module.exports = class RoleMonitor{
    constructor() {
        this.message;
    }

    run(creep){
        creep.moveTo(sources[0]);
        creep.say(this.message);
    }

    static creepMonitorPrint(message){
        this.message = "IA MONITOR: \n"+message;
    }

};
