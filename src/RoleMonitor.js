module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in this.message){
             window.setTimeout(this.creepDelaySay,1000,number);
        }
    }

    creepDelaySay(){
        creep.say(this.message[number]);
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
