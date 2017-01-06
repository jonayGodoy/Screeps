//incidencia falta de interface
const constants = require('Constants');

var ruleBuildExtension = class RuleBuildExtension{

    execute(){
        console.log("build extension");
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
        console.log("level "+ levelRoom);

        let done = false;
        if(levelRoom == 2) {

            let numberSiteExtensions =  room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION );
                }
            }).length;

            console.log("numero de extensiones "+ numberSiteExtensions);
            if(numberSiteExtensions < 5){
                for(let i = 1;i < 6;i++){

                    let structureExtension = room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION)  &&
                                (structure.pos.x !== posFirstSpawn.x+i)
                                && (structure.pos.y !== posFirstSpawn.y+3);
                        }
                    });
                    console.log(structureExtension[0]);
                    if(structureExtension == null) {
                        room.createConstructionSite(posFirstSpawn.x + i, posFirstSpawn.y + 3, STRUCTURE_EXTENSION)
                    }
                }


            }

        //    let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.BUILDER()});
            done = false;

            return done;
        }else{
            done = true;
            return done;
        }
    }
}
module.exports = ruleBuildExtension;
