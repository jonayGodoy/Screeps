module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in this.message){
            this.sleep(2000);
            creep.say(this.message[number]);
        }
    }

    sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    creepDelaySay(creep,number){
        console.log("funciona");
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
