//incidencia falta de interface
const constants = require('Constants');

var ruleBuildExtension = class RuleBuildExtension{
    //status done
    constructor() {
        this.nameRule = "RuleBuildExtension";
        this.done = false;
    }


    execute(){
        if(!this.done){
            this.done = this.behaviorRule();
        }
        return this.done;
    }

    conditionRule(){
        //Game.spawns['Spawn1'].room.controller.activateSafeMode();
        var firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }


        let room = firstSpawn.room;

        let levelRoom = room.controller.level;


        let numberSiteExtensions =  room.find(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION );
            }
        }).length;

        let builders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.BUILDER());

        let conditionDone = (levelRoom <= 2) && (numberSiteExtensions >= 5) && (builders.length >= 2);

        return conditionDone;
    }



    behaviorRule() {
            let numberSiteExtensions =  room.find(FIND_CONSTRUCTION_SITES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION );
                }
            }).length;

            if(numberSiteExtensions < 5){
                this.generateExtensionParallelToSpawn(firstSpawn.pos,5);
            }

            let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.BUILDER()});

        }

    generateExtensionParallelToSpawn(posFirstSpawn,numberExtension) {
        for (let i = 1; i < numberExtension + 1; i++) {
            //incidencia extraer un metodo
            let structureExtensionExist = room.find(FIND_CONSTRUCTION_SITES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION) &&
                        (structure.pos.x != posFirstSpawn.x + i) &&
                        (structure.pos.y != posFirstSpawn.y);
                }
            });

            if (structureExtensionExist[0] == null || structureExtensionExist[0] == undefined) {
                room.createConstructionSite(posFirstSpawn.x + i, posFirstSpawn.y + 3, STRUCTURE_EXTENSION)
            }

        }
    };
}
module.exports = ruleBuildExtension;
