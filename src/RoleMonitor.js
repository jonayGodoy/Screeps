module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){
        for(var number in this.message){
            creep.say(this.message[0]);
        }
    }



    creepDelaySay(creep,number){
        console.log("funciona");
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
