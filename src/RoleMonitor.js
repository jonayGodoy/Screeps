module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }


    run(creep){
        for(var number in this.message){
            if(Game.time %5 ==0){
                creep.say(this.message[number]);
            }
        }
    }


    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
