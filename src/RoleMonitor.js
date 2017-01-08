module.exports = class RoleMonitor{
    constructor() {
        this.message = [""];
    }

    run(creep){

        let cont =0;

        for(var number in this.message){
            if(creep.ticksToLive % 15 == 0) {
                creep.say(this.message[cont]);
                if(cont < message.length){
                    cont = cont +1;
                }else{
                    cont = 0;
                }
            }
        }
    }


    creepMonitorPrint(message){
        this.message = message.split(" ");
    }

};
