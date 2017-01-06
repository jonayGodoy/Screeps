//incidencia falta de interface
const constants = require('Constants');

var ruleBuildExtension = class RuleBuildExtension{
    //status done
    constructor() {
        this.nameRule = "RuleBuildExtension";
        this.done = false;
    }

    getNameRule(){
        return this.nameRule;
    }


    execute(){
        //Game.spawns['Spawn1'].room.controller.activateSafeMode();
        //((nivel 2))
        let firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }

        let room = firstSpawn.room;
        let posFirstSpawn = firstSpawn.pos;

        let levelRoom = room.controller.level;
     //   console.log("level "+ levelRoom);

        let builders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.BUILDER());

        console.log("done¿?  "+ this.done);
        if((levelRoom <= 2) && !this.done ) {

            let numberSiteExtensions =  room.find(FIND_CONSTRUCTION_SITES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION );
                }
            }).length;

            console.log("numberSists "+ levelRoom);
            if(numberSiteExtensions < 5){
                for(let i = 1;i < 6;i++){
                    //incidencia extraer un metodo
                    let structureExtensionExist = room.find(FIND_CONSTRUCTION_SITES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION)  &&
                                (structure.pos.x != posFirstSpawn.x+i) &&
                                 (structure.pos.y != posFirstSpawn.y+3);
                        }
                    });

                    if(structureExtensionExist[0] == null || structureExtensionExist[0] == undefined) {
                        room.createConstructionSite(posFirstSpawn.x + i, posFirstSpawn.y + 3, STRUCTURE_EXTENSION)
                    }
                }


            }

            let builders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.BUILDER());
            if((numberSiteExtensions > 0) && (builders.length < 2)){
                let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.BUILDER()});
            }else{
                if((numberSiteExtensions >= 5) && (builders.length >= 2)) {
                    this.done = true;
                    return this.done;
                }
            }

            return this.done;
        }else{
            this.done = true;
            return this.done;
        }
    }
}
module.exports = ruleBuildExtension;
