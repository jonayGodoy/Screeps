module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in this.message){
            console.log(this.message[number]);
            creep.say(this.message[number]);
        }
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
