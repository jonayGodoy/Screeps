module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }


    run(creep){
        for(var number in this.message){
             setTimeout(this.creepDelaySay,1000,creep,number);
        }
    }

    creepDelaySay(creep,number){
        console.log("funciona");
        creep.say(this.message[number]);
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
