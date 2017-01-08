module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }


    run(creep){
        for(var number in this.message){
            console.log(creep.saying);
            creep.say(this.message[number]);
        }
    }



    creepDelaySay(creep,number){
        console.log("funciona");
    }

    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
